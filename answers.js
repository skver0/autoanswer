// Define your question-answer bank
export const questionAnswerBank = [
  {
    q: "A felhőszámítás és a ködfelhő számítástechnikában ugyanaz a koncepció.",
    a: "False",
  },
  {
    q: "Tanultál már valaha programozási nyelvet? (Igaz a 'yes'-hez, Hamis a 'no'-hoz)",
    a: "True",
  },
  {
    q: "A következők közül melyik a Python program kiterjesztése?",
    a: ".py",
  },
  {
    q: "Használsz Linuxot? (Igaz a 'yes'-hez, Hamis a 'no'-hoz)",
    a: "True",
  },
  {
    q: 'Az "IoT" a következő kifejezés rövidítése:',
    a: "Internet of Things.",
  },

  {
    q: "Tudod-e, hogy a szemeszter során nem hagyhatod ki több mint 4 laboratóriumot? (Igaz a 'yes'-hez, Hamis a 'no'-hoz)",
    a: "True",
  },
  {
    q: "Linuxon melyik parancsot használja egy fájl átnevezésére?",
    a: "mv",
  },
  {
    q: "Linuxban melyik parancsot használja a portok állapotának ellenőrzésére?",
    a: "netstat",
  },
  {
    q: "Sikerült telepítenie az IDLE-t?",
    a: "True",
  },
  {
    q: "A kurzus második részében milyen python környezetet fogunk használni?",
    a: "Jupyter",
  },
  {
    q: "Tudod, hogy nagyon fontos, hogy részt vegyél az előadáson, mert az erősen kapcsolódik a laborokhoz? (Igaz= True, Hamis= False)",
    a: "True",
  },
  {
    q: "Mi a kimeneti eredmény?\nprint(2 ** 2 ** 3)",
    a: "256",
  },
  {
    q: "Válassza ki az igaz állításokat (válasszon ki kettőt)",
    a: [
      "python is a good choice for creating and executing tests for applications",
      "Python is free, open-source, and multiplatform",
    ],
  },
  {
    q: "Minden funkciónak lehet 1) hatása 2) eredménye.",
    a: "True",
  },
  {
    q: "Válassza ki a fordítással kapcsolatos igaz mondatokat (válasszon ki kettőt)",
    a: "Általában gyorsabb, mint az értelmezés\nA kódot közvetlenül a processzor által futtatható gépi kóddá alakítják át.",
  },
  {
    q: 'Mi a "chmod" parancs célja Linux alatt?',
    a: "Fájlengedélyek megváltoztatása",
  },
  {
    q: "print () függvény egy beépített függvénytípus",
    a: "True",
  },
  {
    q: 'Mit csinál a "grep" parancs Linux alatt?',
    a: "Keresés mintában a fájlokban",
  },

  {
    q: "A Python függvények származhatnak a modules Built-in own functions",
    a: "Több válasz kiválasztása, ha szükséges",
  },
  {
    q: "A Python egy szkriptnyelv.",
    a: "True",
  },
  {
    q: "Mi a kimeneti eredmény? print ('2' + '2')",
    a: "22",
  },
  {
    q: "x = 4\ny = 1\na = x & y\nb = x | y\nc = ~x\nd = x ^ 5\ne = x >> 2\nf = x << 2\nprint(a, b, c, d, e, f)",
    a: "0 5 -5 1 1 16",
  },
  {
    q: "lst = [1, [7, 7], 4]\nprint(lst[1])",
    a: "[7,7]",
  },
  {
    q: "for i in range(0, 6, 3): print(i)",
    a: "0 and 3",
  },
  {
    q: "What is the output?\na = 1\ndef fun():\n    global a\n    a = 2\n    print(a)\na = 3\nfun()\nprint(a)",
    a: "2 2",
  },

  {
    q: 'a = "A"\nb = "B"\nc = "C"\nd = " "\nlst = [a, b, c, d]\nlst.reverse()\nprint(lst)',
    a: "[' ', 'C', 'B', 'A']",
  },
  {
    q: "what is the output?\nm_l = [3,1,-1]\nm_l[-1] = m_l[-2]\nprint (m_l)",
    a: "[3,1,1]",
  },
  {
    q: 'What are the operations here:\nlist_1 = ["A", "B", "C"]\nlist_2 = list_1[:]\nlist_3 = list_2[:]\ndel list_1[0]\ndel list_2[0]\nprint(list_3)',
    a: "Slicing lists",
  },

  {
    q: "How many % will be printed ?\nfor i in range (-1,1):\n    print ('%')",
    a: "%%",
  },
  {
    q: "Hogyan lehet megnézni a jelenlegi munkakönyvtárat a parancssorban Linux rendszeren?",
    a: "pwd",
  },
  {
    q: 'What is the output?\nhi()\ndef hi():\n    print("hi!")',
    a: "Error",
  },
  {
    q: "What is the output?\ndef add_numbers(a, b=2, c):\n    print(a + b + c)\nadd_numbers(a=1, c=3)",
    a: "SyntaxError",
  },
  {
    q: "x = 1\ny = 0\nz = ((x == y) and (x == y)) or not(x == y)\nprint(not(z))",
    a: "False",
  },
  {
    q: 'list_1 = ["A", "B", "C"]\nlist_2 = list_1\nlist_3 = list_2\ndel list_1[0]\ndel list_2[:]\nprint(list_3)',
    a: "[]",
  },
  {
    q: 'def hi():\n    return\nprint("Hi!")\nhi()',
    a: "None",
  },

  {
    q: "A Python 3.7-es verziója van, és sok csomag van a rendszerben, de a pip lista nem működik, mi lehet az oka?",
    a: "You should use pip3 list.",
  },
  {
    q: "Mi a következő kód várható kimenete?\nfor ch in \"abc\":\n    print(chr(ord(ch) + 1), end='')",
    a: "bcd",
  },
  {
    q: "Hogyan lehet eltávolítani egy pygame nevű csomagot?",
    a: "pip uninstall pygame",
  },
  {
    q: "Mi a következő kód várható kimenete?\nthe_list = ['Where', 'are', 'the', 'snows?']\ns = '*'.join(the_list)\nprint(s)",
    a: "Where*are*the*snows?",
  },
  {
    q: "A Python teljesen nemzetköziesített - UNICODE karaktereket használhatunk a kódunkban, beolvashatjuk őket a bemenetről és elküldhetjük a kimenetre.",
    a: "True, because Python 3 is I18N.",
  },
  {
    q: "A mint nevű modulban található make_money() függvényt akarod meghívni. A kódod a következő sorral kezdődik:\nimport mint\nMi a helyes formája a függvény meghívásának?",
    a: "mint.make_money()",
  },
  {
    q: "Melyik igaz az alábbiak közül?",
    a: "Packages can contain modules.",
  },
  {
    q: "a pip név származik:",
    a: "pip install packages",
  },
  {
    q: "Hogyan szerezhetünk információt egy csomagról pythonban?",
    a: "pip show package will tell you that.",
  },
  {
    q: "Mi a várható eredménye a következő kódnak?\ns1 = '12.8'\ni = int(s1)\ns2 = str(i)\nf = float(s2)\nprint(s1 == s2)",
    a: "ValueError",
  },
  {
    q: "The priority of ZeroDivisionError is higher than the ArithmeticError in the Exceptions-tree, that is why the Arithmetic error should be always before the ZeroDivisionError.",
    a: "True",
  },
  {
    q: "write a line to import pi from math as PI",
    a: "from math import pi as PI",
  },
  {
    q: "What is the expected result of the following code?\ns1 = '12'\ni = float(s1)\ns2 = str(i)\nprint(s1 == s2)",
    a: "False",
  },
  {
    q: "A PWG-lead repository, collecting open-source Python code, is called:",
    a: "PyPI",
  },
  {
    q: "Írjon csak egy sort.\nFeltételezve, hogy létezik egy Snakes nevű osztály, írja meg a Python-osztály deklarációjának legelső sorát, kifejezve azt a tényt, hogy az új osztály valójában a Snake alosztálya.\nWrite only one line.\nAssuming that there is a class named Snakes, write the very first line of the Python class declaration, expressing the fact that the new class is actually a subclass of Snake.",
    a: "class Python(Snakes):",
  },
  {
    q: "Write only one line.\nAssuming that there is a class named Snakes, write the very first line of the Cobras class declaration, expressing the fact that the new class is actually a subclass of Snakes.",
    a: "class Cobras(Snakes):",
  },
  {
    q: "Az eljárási megközelítésben az adatok használhatják a függvényeket.\nIn the procedural approach, the data can use the functions.",
    a: "False",
  },
  {
    q: "Ha feltételezzük, hogy a Pythonok, Viperák és Cobrák ugyanannak a szuperosztálynak az alosztályai, hogyan neveznéd őket?\nIf we assume that pythons, vipers, and cobras are subclasses of the same superclass, how would you call it?",
    a: "Snake or reptile",
  },
  {
    q: "Mi a kimenet?\nclass Snake:\n    pass\nclass Python(Snake):\n    pass\nprint(Python.__name__, 'is a', Snake.__name__)\nprint(Python.__bases__[0].__name__, 'can be', Python.__name__)",
    a: "Python is a Snake\nSnake can be Python",
  },
  {
    q: "Mi a neve a Python legáltalánosabb kivételének?",
    a: "BaseException",
  },
  {
    q: "Hiányzik valami a következő kódból?\nclass Snakes:\n    def __init__():\n        self.sound = 'Sssssss'",
    a: "The __init__() constructor lacks the obligatory parameter (we should name it self to stay compliant with the standards).",
  },
  {
    q: "Válassza ki a helyes választ.\nclass Python:\n    population = 1\n    victims = 0\n    def __init__(self):\n        self.length_ft = 3\n        self.__venomous = False",
    a: "population and victims are class variables",
  },
  {
    q: "A ZeroDivisionError prioritása magasabb, mint az ArithmeticErroré az Exceptions-fában, ezért az Arithmetic hibának mindig a ZeroDivisionError előtt kell lennie.",
    a: "False",
  },
  {
    q: 'Meg tudod nevezni az egyik osztályodat csak "class"-nak?',
    a: "No, class is a keyword.",
  },
  {
    q: "The priority of ZeroDivisionError is under the ArithmeticError in the Exceptions-tree, that is why the ZeroDivisionError should be always before the Arithmetic error.",
    a: "True",
  },
  {
    q: 'What is the output of the following snippet?\nfrom datetime import time\nt = time(14, 39)\nprint(t.strftime("%H:%M:%S"))',
    a: "14:39:00",
  },
  {
    q: "Fix the code and fill the blank by the output of the program (Hint: use IDLE)\nclass Vowels:\n    def __init__(self):\n        self.vow = \"aeiouy \" # Yes, we know that y is not always considered a vowel.\n        self.pos = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.pos == len(vow):\n            raise StopIteration\n        self.pos += 1\n        return self.vow[self.pos - 1]\nvowels = Vowels()\nfor v in vowels:\n    print(v, end=' ')",
    a: "a e i o u y ",
  },
  {
    q: "What is the meaning of the value represented by errno.EACESS?",
    a: "Permission denied",
  },
  {
    q: "Write a lambda function, setting the least significant bit of its integer argument, and apply it to the map() function to produce the string 1 3 3 5 on the console.\nany_list = [1, 2, 3, 4]\neven_list = # Complete the line here.\nprint(even_list)\nHint: the | operation does the following:\neven | 1 = even + 1\nodd | 1 = odd",
    a: "list(map(lambda n: n | 1, any_list))",
  },
  {
    q: "What is the output\nfoo = [i + i for i in range(5)]\nprint (foo)",
    a: "[0, 2, 4, 6, 8]",
  },
  {
    q: 'What is the expected output of the following code?\nimport math\ntry:\n    print(math.sqrt(-9))\nexcept ValueError:\n    print("inf")\nelse:\n    print("fine")\nfinally:\n    print("the end")',
    a: "inf the end",
  },
  {
    q: "What is the output of the following snippet?\nfrom datetime import datetime\ndt1 = datetime(2020, 9, 29, 14, 41, 0)\ndt2 = datetime(2020, 9, 28, 14, 41, 0)\nprint(dt1 - dt2)",
    a: "1 day, 0:00:00",
  },
  {
    q: 'What is the output of the following snippet? (Assume the file is not exist)\nimport errno\ntry:\n    stream = open("file", "rb")\n    print("exists")\n    stream.close()\nexcept IOError as error:\n    if error.errno == errno.ENOENT:\n        print("absent")\n    else:\n        print("unknown")',
    a: "absent",
  },
  {
    q: "What is the output of the following snippet?\nimport calendar\nprint(calendar.weekheader(1))",
    a: "M T W T F S S",
  },
  {
    q: 'What is the expected output of the following code?\nimport math\ntry:\n    print(math.sqrt(9))\nexcept ValueError:\n    print("inf")\nelse:\n    print("fine")',
    a: "3.0 fine",
  },
  {
    q: "x = lambda a,b : a ** b\nprint (x(2, 10))",
    a: "1024",
  },
  {
    q: 'You\'re going to process a bitmap stored in a file named image.png, and you want to read its contents as a whole into a bytearray variable named image. Add a line to the following code to achieve this goal.\ntry:\n    stream = open("image.png", "rb")\n    # Insert a line here.\n    stream.close()\nexcept IOError:\n    print("failed")\nelse:\n    print("success")',
    a: "image = bytearray(stream.read())",
  },
  {
    q: "How do you encode an open() function’s mode argument value if you're going to create a new text file to only fill it with an article?",
    a: '"wt" or "w"',
  },
  {
    q: "What is the problem with this program? If there is!\nfrom datetime import timedelta\nfrom datetime import date\nfrom dateTime import datetime\ndelta = timedelta(weeks=2, days=2, hours=2)\nprint(delta)\ndelta2 = delta * 2\nprint(delta2)\nd = date(2019, 10, 4) + delta2\nprint(d)\ndt = datetime(2019, 10, 4, 14, 53) + delta2\nprint(dt)",
    a: "dateTime no such module",
  },
  {
    q: "x = lambda a,b : a ** b\nprint (x(10, 2))",
    a: "100",
  },

  {
    q: "Given the following nested list, use indexing to grab the word \"Hi Big Data learner\".\nlst = ['a','b',[4,10,'Hi Big Data learner'],['c',[1,66,['this']],2,111],'e',7]",
    a: "lst[2][2]",
  },
  {
    q: "Which of the following is structured data?",
    a: ".xls",
  },
  {
    q: "# Modify this code\nfloor_types = ['Parking', 'Shops', 'Food Court', 'Offices']\nfloor_numbers = range(#,#)\nzipped = list(zip(floor_types ,floor_numbers ))\nprint(zipped)\n# To get this output\n[('Parking', 1), ('Shops', 2), ('Food Court', 3), ('Offices', 4)]",
    a: "range(1,5)",
  },
  {
    q: "Which of the following is considered traditional data storage?",
    a: "excel",
  },
  {
    q: "Which of the following is structured data ?",
    a: ".csv",
  },
  {
    q: "Which of the following ARE type of data?\nOpen Data\nPrivate Data",
    a: "Both",
  },
  {
    q: "Data at Rest is",
    a: "data can be stored somewhere",
  },
  {
    q: "All data can be used as is.",
    a: "False",
  },

  {
    q: "Which of the following is unstructured data ?",
    a: "email",
  },
  {
    q: "Today, data is growing __________________",
    a: "exponentially.",
  },
  {
    q: "Use lambda expressions and the filter() function to filter out words from the seq list that do not start with the letter 'd', should be filtered down to: ['data', 'dairy', 'dog']. Which code is the good solution? (Use it replacing the * )\nseq = ['data', 'salt', 'dairy', 'cat', 'dog']\nlist(filter( * ))",
    a: "lambda n: n[0] == 'd' , seq",
  },
  {
    q: "Data in Motion",
    a: "requires real-time process",
  },
  {
    q: "Big data can be defined:\nData that is so vast, fast, or complex that it becomes impossible to store, process, and analyze using traditional data storage and analytics applications",
    a: "True",
  },
  {
    q: "Which of the following is not in the data analysis steps?",
    a: "Use Python",
  },
  {
    q: "To import a csv file to a database in python, the __________- is used",
    a: "csvkit",
  },
  {
    q: "give a command line to connect a database named (python+bigdata.db) using python and sqlite3. Assume that everything in installed and imported",
    a: "conn = sqlite3.connect('python+bigdata.db')",
  },
  {
    q: "fill the command to execute a query\nconn = sqlite3.connect('InternetSpeed.db')\ncur = conn.cursor()\nquery = 'SELECT DateTime FROM LA_wifi_speed_UK ORDER BY DateTime LIMIT 10;'\n# put your code here",
    a: "cur.execute(query)",
  },
  {
    q: "BigData is more relevant to IoT.",
    a: "True",
  },
  {
    q: "process for collecting data from a variety of sources, transforming the data, and then loading the data into a database",
    a: "ETL",
  },
  {
    q: "What is the purpose of this code?\n!apt-get update\n!apt-get -y install sqlite3",
    a: "Install sqlite3 and -y is for yes during the installation process.",
  },
  {
    q: "speedtest-cli is a tool used to measure the speed of the internet, but it only works if the ping command works.",
    a: "True",
  },
  {
    q: "To iterate in a database, we need t cursor() method to be assigned after the connection (conn) for example : cur = conn.cursor()",
    a: "True",
  },
  {
    q: "Matplotlib is used in python to get a data frame.",
    a: "False",
  },
  {
    q: "From jupyter, install the csvkit (hint, use pip)",
    a: "!pip install csvkit",
  },
  {
    q: "Heat map is used to visualize the correlation for a dataframe!",
    a: "True",
  },
  {
    q: "Large fucking table that im not gonna make work for this questionare",
    a: "This is the correlation for a dataframe.",
  },
  {
    q: "in the following table, it is by coincidence, that the diagonal is 1 in this",
    a: "False",
  },
  {
    q: "Add a new column called rounded to the dataframe and populate it with rounded weights, the name of the dataframe is da it has the following data, note the round is 2",
    a: "da['rounded'] = da.weight.round(2)",
  },
  {
    q: "To find the correlation for a data file imported in pandas as BB, you can use a method like :",
    a: "BB.corr()",
  },
  {
    q: "Before saving the DataFrame, it makes sense to reposition Upload as the last column. This can be achieved using the reindex function.",
    a: "True",
  },
  {
    q: "An example of numerical variable is weight or blood pressure.",
    a: "True",
  },
  {
    q: "Which method would you use to view table statistics? for a data frame called Data?",
    a: "Data.describe()",
  },
  {
    q: "To change the datatype of a column called ping in a data frame called df_compact_clean, you can use a lambda function in this way",
    a: "False",
  },
  {
    q: "df_compact_clean = df_compact_clean.reindex(columns = ['Date', 'Time', 'Ping(ms)','Download (Mbit/s)','Upload (Mbit/s)']);",
    a: "Date",
  },
  {
    q: "An example of categorial variable is",
    a: "gender",
  },
  {
    q: "Install a module call seaborn from jupyter",
    a: "!pip install seaborn",
  },
  {
    q: "Write a method to find the datatype of each column in a dataframe called y",
    a: "y.dtypes",
  },
  {
    q: "Write a command to view the first 5 lines of the dataframe imported by pandas as brain.",
    a: "brain.head(5)",
  },
  {
    q: "When using the ML to predict something based on the given data, Calculating the noise ratio is important. One needs to know how correct the prediction is.",
    a: "True",
  },
  {
    q: "what method/function produces this output from a dataframe called PP\n<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 915 entries, 0 to 914\nData columns (total 12 columns):\nPassengerId 915 non-null int64\nSurvived 915 non-null int64\nPclass 915 non-null int64\nName 915 non-null object\nGender 915 non-null object\nAge 738 non-null float64\nSibSp 915 non-null int64\n",
    a: "PP.info()",
  },
  {
    q: "To draw an arrow on a figure, then you can use the method called __________ from the matplotlib module (plt)",
    a: "plt.annotate()",
  },
  {
    q: "What this code for\n\n```python\ndef scatter_view(x, y, z, azim, elev):\n    # Init figure and axes\n    fig = plt.figure(figsize=(8, 8))\n    ax = Axes3D(fig)\n    # Compute scatter plot\n    ax.scatter(x, y, z)\n    ax.set_xlabel('D rate (Mbit/s)', fontsize=16)\n    ax.set_ylabel('U rate (Mbit/s)', fontsize=16)\n    ax.set_zlabel('P rate (1/s)', fontsize=16)\n    # Specify azimuth\n    # and elevation\n    ax.azim = azim\n    ax.elev = elev\n```",
    a: "it is for 3D figure",
  },
  {
    q: "Need a target to work",
    a: "Supervised ML",
  },
  {
    q: "A researcher does not use a temperature sensor correctly. What kind of error will be?",
    a: "Gross Error",
  },
  {
    q: "When you use a classification in ML, then you most probably will visualize the data using",
    a: "tree from graphviy",
  },
  {
    q: "To fill a NaN values in a column in the age column , you can use the following code\nNote: the dataframe called training\n```python\n<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 915 entries, 0 to 914\nData columns (total 12 columns):\nPassengerId 915 non-null int64\nSurvived 915 non-null int64\nPclass 915 non-null int64\nName 915 non-null object\nGender 915 non-null object\nAge 738 non-null float64\nSibSp 915 non-null int64\n```",
    a: 'training["Age"].fillna(training["Age"].mean(), inplace=True)',
  },
  {
    q: "Learn from the data itself",
    a: "Unsupervised ML",
  },
  {
    q: "If the dataframe above called SA, you can reach the Sales column in this way SA.sales or SA.['sales']",
    a: "False",
  },
  {
    q: "Drop the District column using the drop method. (Donot create a new dataframe, drop it from this dataframe itself) Important: the dataframe names is df",
    a: "df.drop('district',axis=1,inplace=True)",
  },

  {
    q: "<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 915 entries, 0 to 914\nData columns (total 12 columns):\nPassengerId 915 non-null int64\nSurvived 915 non-null int64\nPclass 915 non-null int64\nName 915 non-null object\nGender 915 non-null object\nAge 738 non-null float64\nSibSp 915 non-null int64",
    a: "Age",
  },
  {
    q: "To calculate the error, which module used (according to the labs)\n\n```python\norder = 1\np = np.poly1d(np.polyfit(x, y ,order))\nfrom _________ import r2_score\nr2 = r2_score(y, p(x))\nr2\n```",
    a: "sklearn.metrics",
  },
  {
    q: "In this way, we can drop the row from a dataframe named dfp\ndfp.drop(45)",
    a: "False",
  },
  {
    q: "In general, we can import the data from database into dataframe using sqlite module.",
    a: "True",
  },
  {
    q: "This code can be used to find how many values in dataframe are NaN?\ndf_compact.isnull().sum().sum()\nWhich of the following can also be used to find the number of NaN in the dataframe?",
    a: "df_compact.info()",
  },
  {
    q: "Select the best visualization:\ndrawing the throughput on a cable connecting two routers.",
    a: "Line (curves)",
  },
  {
    q: "Select the best visualization:\ndrawing the percentage of men and women in a class.",
    a: "Pie",
  },
  {
    q: "How many default subplot will be generated from this code\nfig, ax = plt.subplots(1, 2, figsize=(10, 10))",
    a: "2",
  },
  {
    q: "df_compact.to_csv('rpi_data_processed.csv', index=False)\nin the given code, it is necessary to make the index false. Isn't it?",
    a: "Yes, so that you do not introduce an additional column.",
  },
  {
    q: "Continue the code bellow\n# Create the connection to the database\n#conn = ... <-- do like this\nconn = sqlite3.connect('/content/InternetSpeed.db')\n# Create a cursor\n#curr = ...",
    a: "curr = conn.cursor()",
  },
  {
    q: "Deductive reasoning uses facts, propositions, or other statements of truth to arrive at a conclusion.",
    a: "True",
  },
  {
    q: "Data can be summarized using visualizations to help others understand the data. You need to focus on the data when you present .",
    a: "False",
  },
  {
    q: "Select the best visualization:\nAverage salary based on a number of months",
    a: "Scatter",
  },
  {
    q: "Melyik opciót használod az ls segítségével, hogy az elrejtett fájlokat is kilistázd (Linuxon)?",
    a: "-a",
  },
  {
    q: "Általában az Interpreter gyorsabb, mint a fordító.",
    a: "False",
  },
  {
    q: "Melyik fájl tárolja a felhasználóspecifikus környezeti változókat és indító programokat Linux alatt?",
    a: "~/.bashrc",
  },
  {
    q: 'How many starts will be printed?\ni = 2\nwhile i >= 0:\nprint("*")\ni -= 2',
    a: "two",
  },
  {
    q: 'list_1 = ["A", "B", "C"]\nlist_2 = list_1\nlist_3 = list_2\ndel list_1[0]\ndel list_2[0]\nprint(list_3)',
    a: "['C'] because it is copying",
  },
  {
    q: "abc\n|__\ndef\n|__ mymodule.py\nFeltételezve, hogy a D:\\Python\\Project\\Modules sikeresen hozzá lett csatolva a sys.path listához, írjunk egy import direktívát, amely lehetővé teszi az összes mymodule egység használatát.",
    a: "import abc.def.mymodule",
  },
  {
    q: "Hogyan lehet hozzáadni egy új elérési utat (PATH) a Linux rendszer környezeti változóihoz?",
    a: "export PATH=$PATH:/new/path",
  },
  {
    q: 'Mi a Linux rendszeren a "PATH" funkció szerepe?',
    a: "Az aktuális munkakönyvtár elérési útja",
  },
  {
    q: "Irj egy sort a pi importálására a matematikából mint PI",
    a: "from math import pi as PI",
  },
];
