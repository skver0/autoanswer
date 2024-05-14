// contentScript.js
// Listen for messages from the background script
browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "fillForm") {
    // Perform the action you want to do, like filling in a form
    showYellowDot();
    fillForm();
    sendResponse("Form filled successfully");
  }
});

// Define the function to fill in the form
function fillForm() {
  const questionDiv = document.querySelector(".question_text");
  console.log(questionDiv ?? "No question found");
  if (questionDiv) {
    // Get the question text
    let questionText = Array.from(questionDiv.querySelectorAll("p"))
      .map((p) => {
        // Check if the <p> element contains a code block
        const codeBlock = p.querySelector("code");
        if (codeBlock) {
          return codeBlock.textContent.trim();
        } else {
          return p.textContent.trim();
        }
      })
      .join("\n");

    if (!questionText)
      questionText = questionDiv.textContent.trim().replace(/\s+/g, " ");

    console.log(questionText);
    // Search for the question in the question-answer bank
    let foundQuestion = questionAnswerBank.find(
      (item) => item.q === questionText
    );

    // If exact match not found, search for similar questions
    if (!foundQuestion) {
      console.log("oops no match");
      foundQuestion = findSimilarQuestion(questionText, questionAnswerBank);
    }

    if (foundQuestion) {
      console.log("found question", foundQuestion.q);
      // Get the answer text
      const answerText = foundQuestion.a;

      // Split the answer text by newline characters
      const answerChoices = answerText.split("\n");
      console.log(answerChoices);
      // Find and handle each answer choice
      answerChoices.forEach((choice) => {
        // Find the answer element for this choice
        /*
        <div class="answer">
    <label class="answer_row">
      <span class="answer_input">
          <input type="radio" class="question_input" name="question_2028789" value="222" id="question_2028789_answer_222">
      </span>
      <div class="answer_label">
        pip show package will tell you that.
      </div>
    </label>
</div>*/
        const answerLabels = Array.from(
          document.querySelectorAll(".answer_label")
        );
        answerLabels.forEach((answerLabel) => {
          if (answerLabel.textContent.trim() === choice.trim()) {
            const answerElement = answerLabel.closest(".answer");
            console.log(answerElement);
            const radioInput = answerElement.querySelector(
              "input[type='radio']"
            );
            if (radioInput) {
              radioInput.checked = true;
            }
            // check if yellow dot is already there
            const dotElement = answerElement.querySelector(".temp-dot");
            if (!dotElement) {
              console.log("adding dot");
              const dotElement = document.createElement("span");
              dotElement.classList.add("temp-dot");
              dotElement.style.color = "green";
              dotElement.textContent = "●"; // Unicode black circle character
              answerLabel.insertAdjacentElement("beforebegin", dotElement);
            } else {
              console.log("changing dot color");
              dotElement.style.color = "green";
            }
          }
        });

        // Check for text answer fields
        const textAnswerInputs = Array.from(
          document.querySelectorAll(".question_input")
        );
        textAnswerInputs.forEach((textAnswerInput) => {
          if (textAnswerInput.value === "") {
            textAnswerInput.value = choice;
          }
        });
      });
    }
  }
}

// Function to find similar question in the bank
function findSimilarQuestion(questionText, questionAnswerBank) {
  // Define a similarity threshold
  const similarityThreshold = 0.6; // Adjust as needed

  // Iterate over each question in the bank and calculate similarity
  let maxSimilarity = -1;
  let mostSimilarQuestion = null;

  questionAnswerBank.forEach((item) => {
    const similarity = calculateSimilarity(questionText, item.q);
    if (similarity > similarityThreshold && similarity > maxSimilarity) {
      maxSimilarity = similarity;
      mostSimilarQuestion = item;
    }
  });

  return mostSimilarQuestion;
}

// Function to calculate similarity between two strings (e.g., using Levenshtein distance)
function calculateSimilarity(str1, str2) {
  // Use Levenshtein distance for simplicity
  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  return 1 - distance / maxLength;
}

// Function to calculate Levenshtein distance between two strings
function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Function to show a green dot next to answers found in the bank
function showYellowDot() {
  // Find all answer elements
  const answerElements = document.querySelectorAll(".answer_text");
  answerElements.forEach((answerElement) => {
    // Get the answer text
    const answerText = answerElement.textContent.trim();

    // Search for the answer text in the question-answer bank
    const foundAnswer = questionAnswerBank.find(
      (item) => item.a === answerText
    );

    // If answer found, add a dot
    if (foundAnswer && foundAnswer.a != "False" && foundAnswer.a != "True") {
      const dotElement = document.createElement("span");
      dotElement.classList.add("temp-dot");
      dotElement.style.color = "yellow";
      dotElement.textContent = "●"; // Unicode black circle character
      answerElement.insertAdjacentElement("beforebegin", dotElement);
    }
  });
}

// Call the function to show temperature dots
showYellowDot();

// Run the fillForm function when the content script is injected
fillForm();
