---
title: 'Python for Researchers'
long_pages: true
description: This course guides students from the first principles of Python programming to building a complete data research project. We begin in a simple, browser-based environment to master the fundamentals, then transition to a professional local setup to collect data from web APIs, perform analysis with the Pandas library, create visualizations with Matplotlib/Seaborn, and finally, frame these skills in the context of modern, AI-assisted development workflows.
programming_language: python
published: false
learning_objectives:
    - Master core Python fundamentals, including variables, data types, loops, conditionals, and functions.
    - Set up a professional local development environment with Python, pip, and Visual Studio Code.
    - Collect data from the web programmatically by querying structured APIs.
    - Clean, wrangle, and analyze tabular data using the powerful Pandas library.
    - Create presentation-quality, static visualizations with Matplotlib and Seaborn.
    - Work effectively within Jupyter Notebooks for exploratory, reproducible research.
    - Understand the conceptual shift to AI-assisted programming and learn to direct AI code agents.
    - Package and share a computational research project on GitHub with proper documentation.

facilitators: 
    name: 'Stephen Zweibel'


estimated_time:
    - 16 one-hour class sessions

dependencies: 
    workshop_prerequisites: 
        command-line: 
            description: Introduction to the Command Line (Recommended) This workshop will be very helpful when we move to a local setup and begin using the terminal to install packages and run tools.
            recommended: true

authors:
    - 'Stephen Zweibel'


editors:
    - 'Stephen Zweibel'

readings:
    - 'The official Python Tutorial, an excellent resource for reinforcing concepts: [The Python Tutorial](https://docs.python.org/3/tutorial/)'
    - 'For practical data wrangling, the "10 Minutes to pandas" guide is a great start: [10 Minutes to pandas](https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html)'
    - 'To see what is possible with visualization, browse the Seaborn example gallery: [Seaborn Gallery](https://seaborn.pydata.org/examples/index.html)'

ethical_considerations:
    - When collecting data from the web, whether via scraping or APIs, we have a responsibility to be good digital citizens. This means respecting the terms of service of the website or API, not overwhelming servers with too many requests in a short time (rate limiting), and giving proper attribution to our data sources.
    - As researchers, we must consider the ethics of the data itself. If it involves human subjects, we have a duty to protect their privacy and ensure data is anonymized where appropriate. We must also be aware that datasets can contain inherent biases, and our analyses can unintentionally amplify them.
    - The use of AI programming assistants introduces new ethical considerations. It is important to be transparent about when an AI was used to help generate code, to critically check AI output for correctness and bias, and to be mindful of the data privacy policies of the AI tools you use.

resources:
    The Python Cheatsheet: 
        description: A handy reference for Python's basic syntax.
        link: https://www.pythoncheatsheet.org/
    Pandas Cheat Sheet: 
        description: An excellent 2-page reference for common Pandas operations.
        link: https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf
    JupyterLab Documentation:
        description: The official documentation for navigating the JupyterLab interface.
        link: https://jupyterlab.readthedocs.io/en/stable/

goals:
    - description: 'In this workshop, you will learn to:'
    - Understand core programming concepts: variables, data types, operators, control flow (conditionals, loops), and functions.
    - "Distinguish among core Python data structures."
    - Write and run Python code in an an interactive REPL, a script file, and a Jupyter Notebook.
    - Collect and process structured data from web APIs.
    - Use the Pandas library to clean, filter, sort, and analyze data.
    - Generate meaningful data visualizations with Matplotlib and Seaborn.
    - Frame your programming skills in the context of modern AI-assisted development.
---


# Chapter 1: Introduction to Python for Researchers
Hello! Welcome to Python for Researchers. This course is made especially for those who aren’t computer science majors. We’re here to teach you programming fundamentals and get you building things you can use in your own research. Think of this course not as a deep dive into theory, but as a guided path to making something useful.

## Why Learn Python?
Learning to code is a lot like learning a new language – it’s more rewarding when you have a goal in mind. You wouldn’t learn French without wanting to someday have a conversation in Paris or read a French novel. In the same way, learning Python is most satisfying when you have a project or problem to solve. For researchers, those problems often involve scale and repetition. Imagine trying to read thousands of historical documents by hand, or tally survey responses from hundreds of participants, or draw dozens of charts one by one. Tedious, right? That’s exactly where Python shines.

Python’s syntax is clean and readable – like clear instructions in a recipe – which makes it friendly for beginners. But beyond being easy to pick up, Python is incredibly powerful and versatile. It’s the dominant language for data analysis, machine learning, and scientific computing. Thanks to a massive community, there are countless free libraries and tools (pre-written code) that let you analyze huge datasets, create complex charts, and automate repetitive tasks that might otherwise take you weeks.
This course will be project-driven. We’ll start with the basic grammar of Python and then apply it to a real research task. By the end, you’ll have something tangible – a mini project or analysis – that shows what you can accomplish with Python.


## Our First Step: A Conversation with the Machine
As is tradition in the world of programming, our first step is to make the computer say "Hello, World!". At its core, programming is about giving a computer a set of precise, unambiguous instructions. Unlike human conversation, which is rich with context and implication, a computer takes every instruction literally. The "Hello, World!" exercise is our first successful instruction. It confirms that our environment is working and that we can give the computer a command and see a result.

The standard way to display output in Python is with the `print()` function. Think of it as your first command, a way to see the results of your work, check the value of a variable, or leave notes for yourself as your program runs. A **function** in programming is a named block of code that performs a specific task. We "call" a function by writing its name followed by parentheses `()`. The information we give to the function inside the parentheses is called an **argument.** In this case, we are giving the `print()` function one argument: the text we want it to display.

We will start our journey in the Python **REPL (Read-Evaluate-Print Loop)** environment below. You can identify it by the `>>>` prompt. The REPL is our sandbox, a place for immediate, interactive conversation with Python. You type one command, it responds, and you can instantly see the result.

Type the following command after the prompt and hit <kbd>enter</kbd> or <kbd>return</kbd>.

```pycon
>>> print("Hello, World!")
```

<PythonREPL/>

The REPL reads your command, evaluates it (understands that you want to display some text), prints the result to the screen, and then loops back, ready for your next instruction. You have just written and executed your first line of Python code. You have successfully communicated a precise instruction to the machine.

### Keywords
- Python
- `print()`
- Function
- Argument
- REPL (Read-Evaluate-Print Loop)

# Chapter 2: Working with Core Data Types
In the last chapter, we told the computer to print a message. That message, `"Hello, World!"`, is an example of a **string**—Python's way of representing textual data. But programs work with many different kinds of information. These fundamental categories of information are called **data types**. Understanding them is like a chef understanding the difference between solids and liquids, or sweet and savory. Each type has its own properties, behaviors, and uses. A program that tries to perform a math operation on a piece of text will fail, just as a chef who tries to sauté water will be disappointed.

Let's explore the most important data types that form the building blocks of all Python programs.

## Numbers: Integers and Floats
Python, at its heart, is a powerful calculator. It understands two main types of numbers, and it is important to know the difference.

*   **Integers (`int`)**: These are whole numbers, both positive and negative, without any decimal part. You would use an integer to count things where fractions don't make sense: the number of times a word appears in a text (`152`), the number of participants in a study (`50`), or the year a text was published (`1851`).
*   **Floats (`float`)**: These are floating-point numbers, which means they have a decimal point. They are used for measurements that can have fractional parts. In research, you'll use floats for statistical results like averages (`87.5`), p-values (`0.049`), or any measurement on a continuous scale. Even if the decimal part is zero (`99.0`), the presence of the decimal point makes it a float, and Python will treat it as such.

You can perform all the standard mathematical operations you would expect using familiar operators. Try them out in the REPL. Notice how dividing two integers, like `10 / 4`, results in a float. Python does this to preserve precision, because division can often produce fractional results.

```pycon
>>> 10 + 5
15
>>> 100 - 2.5
97.5
>>> 7 * 6
42
>>> 40 / 8
5.0
>>> 10 / 4
2.5
```
<PythonREPL/>

## Booleans: The Logic of `True` and `False`

Another fundamental data type is the Boolean (bool). A Boolean can only be True or False (always capitalized in Python). Think of them as switches or traffic lights in your program: they tell it whether to go or stop, yes or no. Whenever your code needs to make a decision or check a condition, it will use booleans. For example, a Boolean might answer a yes/no question in your research, like “Is this manuscript dated before 1900?” (True or False), or “Does this survey response contain the word ‘anxious’?” (True or False).
Booleans typically come from comparisons or logical checks (we’ll learn how to make these soon), but just remember that True and False are their own data type in Python.


## Knowing Your Type

If you are ever unsure what kind of data you are looking at, you can use the built-in `type()` function to ask Python. This is a useful tool for debugging when your code is not behaving as you expect. It's like a label reader for your data ingredients. Just pass the data, or a variable containing it, into the `type()` function.

```pycon
>>> type("This is a string.")
<class 'str'>
>>> type(99)
<class 'int'>
>>> type(3.14)
<class 'float'>
>>> type(False)
<class 'bool'>
```
<PythonREPL/>

The output `<class 'str'>` tells you that the data is of the "string" class. This distinction between `int` and `float` will become important later when some libraries or functions require one type specifically. Knowing how to check the type of your data is a fundamental debugging skill.

The data type of 99 in Python is:

<Quiz> 
- int* 
- str 
- float
- bool 
</Quiz>

### Keywords
- Data Type
- String (`str`)
- Integer (`int`)
- Float (`float`)
- Boolean (`bool`)
- `type()`
- Operator


# Chapter 3: Variables and Strings
So far, every value we typed showed up once and then disappeared. That’s because we weren’t storing anything. To keep data around, we use variables.

A variable is just a name that refers to a value. Think of it like a labeled box or a sticky note you put on a piece of data. You can put something in the box (the value) and then, whenever you need what is inside, you can just refer to the box by its label (the variable name). The name of the variable is for you, the human, to remember what it's for; the value is what the computer will use in its calculations. As a researcher, you should choose your variable names with the same care you would choose the headings in a paper. A variable named `x` is meaningless, but a variable named `average_publication_year` is self-documenting.

You create a variable using a single equals sign `=`, which is known as the **assignment operator**. You put the name of the variable on the left and the value you want to store on the right.

```pycon
>>> message = "This is my first variable!"
>>> year = 2025
>>> pi_approx = 3.14
```
Now, instead of re-typing the data, you can just use the variable's name. The program will substitute the name with the value it holds.

```pycon
>>> print(message)
This is my first variable!
>>> print(year + 1)
2026
```
<PythonREPL/>

## Formatting Strings with f-strings
A very common task is to combine strings with the values stored in variables, especially when you want to report your findings. While you can use the `+` operator to join them (a process called **concatenation**), this can get clumsy quickly. Imagine trying to build a complex sentence by gluing lots of small phrases and numbers together—it's easy to forget spaces or to make a mistake when converting numbers to text.

A much cleaner and more powerful way is with an **f-string** (formatted string literal). F-strings are a modern Python feature that makes this process elegant and readable.

To create an f-string, just put an `f` right before the opening quotation mark. Then, inside the string, you can place any variable name inside curly braces `{}`. Python will automatically replace the `{variable}` with its value, converting it to a string if necessary.

```pycon
>>> book_title = "Moby Dick"
>>> author = "Herman Melville"
>>> year_published = 1851
>>>
>>> # The elegant, modern way: an f-string
>>> print(f"My favorite book is {book_title} by {author}, published in {year_published}.")
My favorite book is Moby Dick by Herman Melville, published in 1851.
>>>
>>> # For comparison, the old way: concatenation (more cumbersome)
>>> print("My favorite book is " + book_title + " by " + author + ", published in " + str(year_published) + ".")
My favorite book is Moby Dick by Herman Melville, published in 1851.
```
<PythonREPL/>
Notice that with concatenation, we had to manually add spaces inside the quotes and explicitly convert the number `year_published` to a string using `str()`. F-strings handle all of that for us, making the code far more readable and less prone to errors.

## String Methods
Strings are more than just passive text; they come with their own set of built-in functions, called **methods**, that you can use to manipulate them. A method is an action that a particular type of data "knows how to do." You access these methods with a dot (`.`) after the string or variable. The dot is how you *ask* the data to perform one of its built-in actions.

```pycon
>>> a_loud_statement = "I AM WHISPERING."
>>> print(a_loud_statement.lower())
'i am whispering.'

>>> greeting = "Hello, planet!"
>>> print(greeting.replace("planet", "world"))
'Hello, world!'
```
<PythonREPL/>
It's important to know that strings are **immutable**, which means they cannot be changed. Calling a method like `.lower()` does not change the original `a_loud_statement` variable. It returns a *new* string with the changes applied. If you want to keep the changes, you must assign the result to a new variable (or overwrite the old one).

## Challenge

Create two variables, `first_name` and `last_name`. Assign your own names to them. Then, create a third variable `full_name` by combining them with a space in between. Finally, print a friendly, all-caps greeting using your `full_name` variable in an f-string and a string method.

<CodeEditor>
</CodeEditor>

### Solution

<Secret>
```python
first_name = "Ada"
last_name = "Lovelace"
full_name = first_name + " " + last_name
greeting_message = f"Hello, {full_name}! Welcome to Python."

# Use the .upper() method to make the whole greeting uppercase
print(greeting_message.upper())
```
</Secret>

### Keywords
- Variable
- Assignment (`=`)
- f-string
- String Concatenation
- Method
- `.lower()`, `.upper()`, `.replace()`

# Chapter 4: Structuring Data with Lists
So far, each variable has held just one piece of information—one number or one string. But what if you want to work with a collection of items, like all the books on your reading list or a series of measurements from an experiment? For that, we use a **list**.

A list is an ordered, mutable (meaning changeable) collection of items. You can think of it as a numbered sequence of boxes, or a single shelf where you can place items in a specific order. The order is preserved, which is crucial for data where sequence matters, such as a timeline of historical events or the words in a sentence. Lists are defined with square brackets `[]`, with the items inside separated by commas.

```pycon
>>> # A list of strings, like a reading list
>>> reading_list = ["Moby Dick", "Frankenstein", "Dune"]
>>>
>>> # A list of integers, like experimental measurements
>>> measurements = [10, 12, 11, 13, 12]
>>>
>>> # A list can contain different data types, though it's often
>>> # best practice to keep them consistent for clarity.
>>> mixed_bag = [42, "hello", True, 3.14]
```

## Accessing Items with an Index
To get an item out of a list, you use its **index**—its position in the list. This is where programming often differs from human counting, and it is a crucial concept to master: **indexing starts at 0!** The first item is at index 0, the second at index 1, and so on. This is a convention from the history of computing, where the index was thought of as the "offset" from the beginning of the list. The first item is at an offset of 0. While it might feel strange at first, it will become second nature. To access an item, you use square brackets after the list's name with the index number inside.

```pycon
>>> reading_list = ["Moby Dick", "Frankenstein", "Dune"]
>>>
>>> # Get the first item (at index 0)
>>> first_book = reading_list[0]
>>> print(first_book)
'Moby Dick'
>>>
>>> # Get the third item (at index 2)
>>> print(reading_list[2])
'Dune'
```
You can also count from the end of the list using negative numbers. `[-1]` is always the last item, `[-2]` is the second-to-last, and so on. This is extremely useful when you want the last item but don't know how long the list is.

```pycon
>>> measurements = [10, 12, 11, 13, 12]
>>>
>>> # Get the last measurement
>>> last_measurement = measurements[-1]
>>> print(last_measurement)
12
```
<PythonREPL/>

## Slicing a List
You can also select a range of items, which is called **slicing**. The syntax `my_list[start:end]` grabs items from the `start` index up to, but **not including**, the `end` index. This is another common point of confusion, so remember: the slice goes up to but does not include the `end`. Think of it as slicing a loaf of bread: if you slice at positions 1 and 4, you get the pieces *between* those cuts.

```pycon
>>> letters = ['a', 'b', 'c', 'd', 'e', 'f']
>>>
>>> # Get items from index 1 up to (but not including) index 4
>>> middle_letters = letters[1:4]
>>> print(middle_letters)
['b', 'c', 'd']
>>>
>>> # If you omit the start, it defaults to the beginning
>>> print(letters[:3])
['a', 'b', 'c']
>>>
>>> # If you omit the end, it defaults to the end
>>> print(letters[3:])
['d', 'e', 'f']
```
<PythonREPL/>

## Modifying Lists
Because lists are **mutable**, we can change them after they are created. This is a key difference from strings, which are immutable. You can add new items, remove old ones, or change an item at a specific index. Two of the most common list methods are `.append()` to add an item to the end, and `.pop()` to remove an item from the end. These methods change the list *in-place*.

```pycon
>>> my_books = ["Dune", "Foundation"]
>>> print(f"Original list: {my_books}")
Original list: ['Dune', 'Foundation']
>>>
>>> # Add a new book to the end
>>> my_books.append("Hyperion")
>>> print(f"After append: {my_books}")
After append: ['Dune', 'Foundation', 'Hyperion']
>>>
>>> # Remove and return the last item
>>> last_book = my_books.pop()
>>> print(f"Popped item: {last_book}")
Popped item: 'Hyperion'
>>> print(f"List after pop: {my_books}")
List after pop: ['Dune', 'Foundation']
```

<PythonREPL/>
Unlike the string methods we saw earlier which returned a new string, methods like `.append()` and `.pop()` modify the list directly. The original `my_books` list has been permanently altered. This is a powerful feature, but one to be mindful of.

### Keywords
- List
- Index
- Slicing
- Mutable
- `.append()`
- `.pop()`


# Chapter 5: Control Flow - Making Decisions
So far, our programs have been like a straight road, executing one line after another from top to bottom. But powerful programs need to be able to choose their path based on the situation. They need to be able to react differently to different inputs. This is called **control flow**. A program that can't make decisions is just a simple calculator; a program that can is on its way to becoming intelligent.

The most fundamental tool for controlling the flow of a program is **conditional logic**, using the keywords `if`, `elif` (short for "else if"), and `else`. This structure is like a series of questions a program asks to decide what to do next, similar to a flowchart or a decision tree in your research methodology.

The basic structure lets your program make a decision:
```python
if some_condition_is_true:
    # Do this block of code.
elif another_condition_is_true:
    # If the first condition was false, check this one.
    # If it's true, do this block of code.
else:
    # If none of the above conditions were true, do this block.
```
The "conditions" are expressions that evaluate to a Boolean (`True` or `False`). We create these conditions using **comparison operators**.

| Operator | Meaning                  | Example          |
| :------- | :----------------------- | :--------------- |
| `==`     | Equal to                 | `x == 10`        |
| `!=`     | Not equal to             | `x != "apple"`   |
| `>`      | Greater than             | `age > 18`       |
| `<`      | Less than                | `temp < 0`       |
| `>=`     | Greater than or equal to | `score >= 90`    |
| `<=`     | Less than or equal to    | `price <= 50.0`  |

<Info>A very common beginner mistake is to use a single equals sign (`=`) for comparison. This is probably the most frequent error for new programmers! Remember, `=` is for *assignment* (putting a value in a variable), while `==` is for *comparison* (peeking in two boxes to see if their contents are the same).</Info>

Notice the colon `:` at the end of the `if`, `elif`, and `else` lines, and the **indentation** of the code below them. This indentation is not just for style; it is crucial and mandatory. It is how Python knows which code belongs to which condition. It creates a logical "paragraph" of code that is executed together.

Let's make our programs interactive! The `input()` function pauses the program, displays a message (called a prompt), waits for the user to type something, and returns what they typed as a string.

<Info>Remember, `input()` always gives you a string! If you need a number for a comparison, you have to convert it first using `int()` or `float()`. This is called **type casting**. For example: `age = int(input("How old are you? "))`.</Info>

## Challenge: The "Choose Your Own Adventure" Game
Let's build a tiny interactive story. This is a classic way to see control flow in action. Your program will present a situation and two choices, and then the story will branch based on the user's input.

<CodeEditor>
# 1. Ask the user for their name and store it in a variable.
# 2. Greet them using their name.
# 3. Present a choice, e.g., "You arrive at a crossroads. Do you go LEFT or RIGHT?"
# 4. Use input() to get their answer and store it.
# 5. Use an if/elif/else statement to print a different outcome.
#    Handle the case where they type "LEFT", "RIGHT", or something else entirely.
#    Bonus: Make your program accept "left" and "right" in any case (e.g., "Left", "left", "LEFT").
</CodeEditor>

### Solution

<Secret>
```python
player_name = input("What is your name, adventurer? ")
print(f"Welcome, {player_name}!")

print("You are at a crossroads. A dark forest lies to your LEFT, and a sunny meadow to your RIGHT.")
direction = input("Which way do you go? (Type LEFT or RIGHT) ")

# Use a string method to make the comparison case-insensitive
if direction.upper() == "LEFT":
    print("You chose the path into the spooky forest. You hear a twig snap behind you...")
    print("Good luck!")
elif direction.upper() == "RIGHT":
    print("You chose the path towards the sunny meadow. A wise choice!")
    print("You see a friendly village in the distance.")
else:
    print(f"'{direction}' is not a valid choice. A dragon swoops down and eats you for your indecisiveness.")
    print("Game Over.")
```
</Secret>


Which statements are true?
<Quiz> 
- The == operator checks if two values are equal.*
- The != operator checks if two values are not equal.*
- The = operator checks if two values are equal.
- The : operator checks if two values are equal. 
</Quiz>

### Keywords
- Control Flow
- Conditional
- `if`, `elif`, `else`
- Comparison Operators
- `input()`
- Type Casting (`int()`, `str()`)
- Indentation


# Chapter 6: Structuring Data with Dictionaries
We have seen that lists are great for ordered sequences of items, like a to-do list where the order matters. But what if our data isn't just a sequence? What if it has structure and labels? For instance, a person's contact information isn't just `["Ada Lovelace", "ada@example.com", "123-456-7890"]`. That structure is fragile; if you forget the order, you don't know which string is the email and which is the phone number. A better way is to label each piece of data.

For this kind of structured data, Python gives us the **dictionary (`dict`)**. A dictionary is a mutable collection that stores data not as an ordered list, but as **key-value pairs**. Think of it like a real-world dictionary: you look up a word (the **key**) to find its definition (the **value**). Or think of it like an ID card: "Name" is a key, and "Ada Lovelace" is its value. The order is less important than the labels themselves.

Dictionaries are created with curly braces `{}`.

```pycon
>>> # A dictionary representing a student
>>> student = {
...     "name": "Ada Lovelace",
...     "major": "Mathematics",
...     "birth_year": 1815,
...     "is_enrolled": True
... }
```
Here, `"name"`, `"major"`, `"birth_year"`, and `"is_enrolled"` are the **keys**. Keys must be unique and are almost always strings. The pieces of data on the right of the colons are the **values**. Values can be any data type: a string, a number, a boolean, a list, or even another dictionary! This flexibility is what makes them so powerful for representing complex, real-world entities.

## Accessing and Modifying Data
Instead of using a numeric index like in lists, you access values in a dictionary using their key, again inside square brackets. This is more intuitive because you are asking for the data by its name, not its position.

```pycon
>>> print(student["name"])
'Ada Lovelace'
>>>
>>> print(f"The student was born in {student['birth_year']}.")
The student was born in 1815.
```
<PythonREPL/>

Because dictionaries are mutable, you can easily add new key-value pairs or modify existing ones just by assigning a value to a key. If the key already exists, its value is updated. If the key doesn't exist, it's created.

```pycon
# Add a new key-value pair for the student's country
>>> student["country"] = "United Kingdom"
>>> print(student["country"])
'United Kingdom'

# Modify the value of an existing key
>>> student["major"] = "Computer Science"
>>> print(student["major"])
'Computer Science'

>>> # Let's see the whole dictionary now
>>> print(student)
{'name': 'Ada Lovelace', 'major': 'Computer Science', 'birth_year': 1815, 'is_enrolled': True, 'country': 'United Kingdom'}
```
<PythonREPL/>

## Lists of Dictionaries
Dictionaries are incredibly useful for organizing complex, related information. A very common and powerful pattern in data-driven programming is to have a **list of dictionaries**. This structure allows you to represent a collection of similar "objects," where each object has the same set of properties. This is the foundation of how we will handle tabular data, like spreadsheets or database tables.

```python
all_students = [
    { "name": "Ada Lovelace", "major": "Computer Science", "id": 101 },
    { "name": "Charles Babbage", "major": "Engineering", "id": 102 },
    { "name": "Grace Hopper", "major": "Mathematics", "id": 103 }
]

# To get the second student's name:
# First, use a list index to get the dictionary for the second student.
second_student_dict = all_students[1]
# Then, use a dictionary key to get the name from that dictionary.
print(second_student_dict["name"]) # Prints 'Charles Babbage'

# You can also chain them together:
print(all_students[1]["name"])
```
This pattern—a list of dictionaries—is the fundamental way that structured data is often represented in Python. Mastering it is key to moving from basic programming to real data analysis.

How can you access the name of the first student in the list all_students?
<Quiz> 
- Use a numeric index, e.g. all_students[0]
- all_students[0]['name']*
- all_students[0].name
- all_students[0].get('Ada Lovelace')
</Quiz>


### Keywords
- Dictionary (`dict`)
- Key-Value Pair
- Accessing by key (`my_dict['key']`)
- List of Dictionaries


# Chapter 7: Repeating Actions - The Power of Loops
Imagine you have a list of 100 student records and you want to print each student's name. You could write 100 `print()` statements, but that would be tedious, inefficient, and impossible to maintain. If you needed to change the formatting, you'd have to edit 100 lines. A core principle of programming is "Don't Repeat Yourself" (DRY). The programmer's way to handle repetitive tasks is to use a **loop**. A loop lets you execute the same block of code over and over again, saving you from endless copying and pasting. It's the engine of automation.

## The `for` Loop: Iterating Over a Collection
The most common and versatile loop in Python is the **`for` loop**. It is perfect for when you want to do something **for every single item in a collection** (like a list or a dictionary). You can think of it as an assembly line: each item from your collection comes down the line, you perform the same operation on it, and then the next item comes.

The syntax works like this, and it is designed to be readable, almost like an English sentence:
```python
for temporary_variable in collection:
    # Do something with the temporary_variable
```
Let's see it in action:
```python
books_to_read = [
    "The Hobbit",
    "A Wrinkle in Time",
    "The Left Hand of Darkness"
]

print("My Reading List:")
for book in books_to_read:
    print(f"- {book}")
```

<CodeEditor></CodeEditor>

Let's break that down:
*   `for book in books_to_read:`: This line can be read like a sentence: "For each item in the `books_to_read` list, temporarily assign that item to the variable `book` and then execute the indented code block below."
*   The name `book` is a temporary variable that you choose. It only exists for the duration of the loop. Each time the loop repeats, `book` holds the next item from the list. It is a good practice to choose a descriptive, singular name that relates to the plural collection (e.g., `book` for `books_to_read`, `student` for `all_students`).

You can also loop through the keys of a dictionary.
```python
student = {"name": "Ada Lovelace", "major": "Mathematics", "birth_year": 1815}

print("Student Record:")
for key in student:
    # 'key' will be "name", then "major", then "birth_year"
    value = student[key]
    print(f"  {key}: {value}")
```
<CodeEditor></CodeEditor>

## Looping a Specific Number of Times with `range()`
What if you don't have a collection to loop over, but you just want to do something a specific number of times? For that, we use the built-in **`range()`** function. `range()` generates a sequence of numbers that you can loop over.
*   `range(5)` generates a sequence of numbers starting from 0 up to (but not including) 5: `0, 1, 2, 3, 4`.
*   `range(2, 6)` generates a sequence from a start to an end: `2, 3, 4, 5`.
*   `range(0, 10, 2)` generates a sequence with a "step": `0, 2, 4, 6, 8`.

`range()` is perfect for using in a `for` loop when you need to control the repetition count precisely.
```python
# Loop 5 times
print("Counting to 4:")
for number in range(5):
    print(number)

# Loop from 1 to 5, counting backwards with a step of -1
print("\nRocket Countdown:")
for i in range(5, 0, -1):
    print(f"{i}...")
print("Blast off!")
```
<CodeEditor></CodeEditor>

Loops are a foundational concept that unlocks the automating power of programming. They are the tool that lets you scale an operation from one item to one million items with the same three lines of code.

### Keywords
- Loop
- `for` loop
- Iteration
- `range()`
- DRY (Don't Repeat Yourself)

# Chapter 8: Reusable Code - Building with Functions
As our programs get longer, we often find ourselves writing the same chunk of code in multiple places. If we find a bug in that code, we have to find and fix it everywhere. This violates the "Don't Repeat Yourself" principle and makes our code brittle and hard to manage. A better way is to package that code into a **function**. A function is a named, reusable block of code that performs a single, specific task.

Using functions is the most important principle of organization in programming. Think of them as custom tools you build for your workshop. Instead of assembling a wrench from scratch every time you need one, you build it once, put it in your toolbox, and then just grab it by its name (`greet()`, `calculate_average()`) whenever you need it. This makes your code more readable, easier to debug, and less repetitive.

You define a function using the `def` keyword, followed by the function's name and a set of parentheses. To run the code inside, you must **call** the function by using its name followed by parentheses `()`.

```python
# Define a function to print a greeting
def say_hello():
    print("--------------------")
    print("Hello there!")
    print("How are you today?")
    print("--------------------")

# Defining the function is like writing down a recipe. It doesn't cook anything yet.
# You have to *call* the function to execute it.
print("Calling the function for the first time:")
say_hello()

print("\nSome other code can go here.\n")

print("Calling the same function again:")
say_hello()
```
<CodeEditor></CodeEditor>

## Passing Information with Parameters
Functions become truly powerful when you can give them input to work with, like giving a recipe different ingredients to get a different dish. We do this with **parameters**, which are placeholder variables you define inside the parentheses of the function definition. When you call the function, you provide an **argument** (a real value) for each parameter.

```python
# 'name' is the parameter (the placeholder in the recipe)
def greet(name):
    print(f"Hello, {name}!")

# "Alice" and "Bob" are the arguments (the actual ingredients you're using this time)
greet("Alice")
greet("Bob")
```
<CodeEditor></CodeEditor>

## Getting a Value Back with `return`
Some functions just perform an action, like `print()`. But often, we want a function to perform a calculation or a task and send a value back to the main program. This is done with the **`return`** statement. When a `return` statement is hit, the function immediately stops and the function call itself becomes equal to the returned value. This allows you to store the result of a function in a variable, as if the function call itself were a value.

```python
# This function calculates the area and returns the result
def calculate_area(width, height):
    area = width * height
    return area

# Call the function and store the returned value in a variable
rectangle_1_area = calculate_area(10, 5)
print(f"The area of the first rectangle is {rectangle_1_area}.")

# You can also use the function call directly where you need the value,
# because it evaluates to the returned number.
print(f"The area of a 3x7 rectangle is {calculate_area(3, 7)}.")
```
<CodeEditor></CodeEditor>

## Challenge: The "Student Grades" Program
Let's build a small, organized program using what we have learned. You have a list of student dictionaries. Write functions to perform specific tasks.
1.  Write a function `calculate_average(grades_list)` that takes a list of numbers (like `[100, 95, 92]`) and returns their average. Python's built-in `sum()` and `len()` functions will be very helpful here.
2.  Write a `main()` function. This is a common practice to make code more organized. This function will loop through your list of students. Inside the loop, for each student, it should call your `calculate_average()` function on their grades and then print their name and their calculated average grade.
3.  Finally, call your `main()` function at the end of the script to run the program.

<CodeEditor>
students = [
    {"name": "Alice", "grades":},
    {"name": "Bob", "grades":},
    {"name": "Juan", "grades":}
]

# 1. Define the calculate_average function here.
# It should take one parameter: a list of grades.
# It should return the average of those grades.


# 2. Define the main function here.
# It should loop through the `students` list.
# For each student, it should call calculate_average() and print the result.


# 3. Call your main function to start the program.
</CodeEditor>

### Solution

<Secret>
```python
students = [
    {"name": "Alice", "grades": [100, 95, 92]},
    {"name": "Bob", "grades": [88, 90, 80]},
    {"name": "Juan", "grades": [91, 90, 94]}
]

# 1. Define the calculate_average function
def calculate_average(grades_list):
    """Calculates the average of a list of numbers."""
    if not grades_list: # Handle the case of an empty list to avoid division by zero
        return 0
    total = sum(grades_list)
    return total / len(grades_list)

# 2. Define the main function
def main():
    """Main function to process student grades."""
    print("--- Student Averages ---")
    for student in students:
        # Call our other function to get the average
        average = calculate_average(student["grades"])
        # The :.2f inside the f-string formats the float to have only 2 decimal places
        print(f"{student['name']}'s average grade is {average:.2f}")

# 3. Call the main function to run the program
main()
```
</Secret>

### Keywords
- Function
- `def`, `return`
- Call (a function)
- Parameter, Argument
- Scope

# Chapter 9: Setting Up Your Professional Environment
Congratulations! You have spent the last several chapters learning the fundamental grammar of Python. You can work with variables, lists, dictionaries, loops, and functions. Now, it is time to take the next, most exciting step in your journey. We are going to move from our simple, embedded online tools to a true, professional research environment on your own computer.

## The "Why" of Working Locally
Working on your own machine—what we call working **locally**—unlocks the true power of programming for a researcher. It is like moving from a classroom's pre-packaged science kit to having the keys to a real research lab. The online REPL is great for learning syntax, but it is isolated. When you work locally, you can:
-   Work with your own files on your computer.
-   Install powerful specialized libraries for data science, visualization, and more.
-   Build larger, persistent projects that you can save and share.
-   Integrate with other professional tools like Git and GitHub.

<Info>This chapter is a hands-on setup session. It might feel a bit technical, but do not worry. We will walk through every step together, and this is a one-time setup.</Info>

## Your New Toolkit
We need to install three key pieces of software:
1.  **The Terminal (Your Control Panel):** Your direct, text-based line of communication with your computer. This is where you will run commands to install software and execute scripts.
2.  **Python 3 (The Engine):** The Python interpreter itself. This is the core software that understands and runs `.py` files.
3.  **Visual Studio Code (Your Workbench):** A powerful, free, and hugely popular code editor that helps you write, organize, and debug your code.

## Step 1: The Control Panel - Your Terminal
Every operating system comes with a command-line interface. You do not need to install anything for this step, just learn how to open it.
*   **On macOS:** Open the **Terminal** app. You can find it in `Applications/Utilities`, or just search for "Terminal" using Spotlight (<kbd>Cmd</kbd> + <kbd>Space</kbd>).
*   **On Windows:** We recommend using **PowerShell**. Search for "PowerShell" in the Start Menu and open it. Avoid the old "Command Prompt" if possible.
*   **On Linux:** You likely already know where your **Terminal** is!
Go ahead and open it now. You will see a prompt, waiting for you to type commands. This is where we will do the rest of our setup.

## Step 2: The Engine - Installing Python 3
Now, let's install the Python interpreter itself.
1.  Open your web browser and navigate to the official Python download page: **[python.org/downloads/](https://www.python.org/downloads/)**
2.  The site should automatically detect your operating system and show a prominent button to download the latest version of Python. Click it.
3.  Run the installer you just downloaded.
    *   **This is the most critical step for Windows users:** At the very beginning of the installation process, you will see a window with several options. **You MUST check the box that says "Add Python to PATH"** or "Add python.exe to PATH". This small step makes Python accessible from the terminal, which is essential. Do not skip it!
    *   **On macOS and Windows:** For the rest of the installation, you can simply accept the default settings by clicking "Continue" or "Next" until it is finished.

## Step 3: The Workbench - Installing Visual Studio Code
1.  Go to the official VS Code website: **[code.visualstudio.com](https://code.visualstudio.com/)**
2.  It should also auto-detect your OS. Click the big blue button to download the application.
3.  Run the installer, accepting all the default settings.

## Verifying Your Installation (Everyone)
Now that the installation process is finished, let's confirm that everything worked correctly.
1.  Open a **new** terminal window (or close and re-open your existing one, to make sure it recognizes the new installations).
2.  To check if Python is installed correctly, type the following command and press <kbd>Enter</kbd>:
    `python3 --version` (On macOS and Linux)
    `python --version` (On Windows)
3.  You should see a version number printed back to you, like `Python 3.12.4`. If you see this, congratulations! The engine is installed correctly. If you get an error like "command not found," the most likely cause on Windows is that the "Add to PATH" box was not checked during installation.

You are now set up with the same environment used by researchers and developers around the world.

### Keywords
- Local Environment
- Terminal / PowerShell
- Python Interpreter
- Visual Studio Code (VS Code)
- PATH environment variable


# Chapter 10: Managing Your Tools - Installing Packages with `pip`
You have successfully set up your local environment. One of the main reasons we did this was to gain access to Python's incredible ecosystem of **third-party libraries** (also called packages). Think of Python itself as a new workshop. You have the basic tools: hammers (loops), screwdrivers (functions), and a workbench (variables). But for specialized tasks like plumbing or electrical work, you need specialized tools.

In Python, a library is a collection of pre-written code that provides powerful, specialized functionality. There are libraries for data analysis, web scraping, visualization, machine learning, and nearly anything else you can imagine.

The tool we use to install and manage these libraries is called **`pip`**. It is Python's official package manager and is included automatically when you install Python from python.org. We will interact with `pip` through our terminal.

The basic command is simple and follows this pattern:
`pip install <package_name>`

Let's install the essential libraries we will need for the rest of this course. These are the foundational tools for data science in Python. Open your terminal (PowerShell on Windows, Terminal on macOS/Linux) and run the following commands, one by one. Press <kbd>Enter</kbd> after each one.

<Info>Depending on your system setup, you may need to use `pip3` instead of `pip` if your system also has an older version of Python installed. If `pip install ...` gives you an error, try `pip3 install ...`.</Info>

1.  **JupyterLab:** The modern, web-based interactive environment for running notebooks. Notebooks are essential for exploratory data analysis.
    ```bash
    pip install jupyterlab
    ```
2.  **Pandas:** This is the single most important library for data manipulation and analysis in Python. It provides the DataFrame, a  tool for working with tabular data (like spreadsheets).
    ```bash
    pip install pandas
    ```
3.  **Requests:** The standard library for making HTTP requests, which is how we will fetch data from web APIs.
    ```bash
    pip install requests
    ```
4.  **Matplotlib & Seaborn:** Two libraries for data visualization. Matplotlib is the foundational library, and Seaborn is built on top of it to make creating beautiful, statistically-informed plots much easier. We install them together.
    ```bash
    pip install matplotlib seaborn
    ```
When you run each command, you will see text scroll by in your terminal as `pip` connects to the **Python Package Index (PyPI)**—a giant online repository of Python software—downloads the packages, and installs them on your system.

Once these commands complete without any major red error messages, your research environment is fully equipped. You have just installed the foundational toolkit for modern data science.

### Keywords
- Library / Package
- `pip` (Package Installer for Python)
- `pip install`
- PyPI (Python Package Index)
- JupyterLab
- Pandas
- Requests
- Matplotlib, Seaborn


# Chapter 11: How to Read a Map - Using Documentation Effectively
You now have a workshop full of high-tech tools like Pandas and Matplotlib. But these tools do not come with simple, one-page instruction manuals you can memorize. Instead, they come with **documentation**. Learning to navigate documentation is arguably the single most important skill for a developer or researcher. It is the difference between being dependent on tutorials and becoming an independent, self-sufficient problem-solver.

No one, not even the most experienced programmer, has all the functions and their options memorized. They just get very good at looking them up.

## What is Documentation?
Documentation is the official explanation of how a library or language works, written by its creators. It is the ultimate source of truth. The key to not being overwhelmed is knowing that there are different *types* of documentation for different needs.

1.  **Tutorials / User Guides:** These are meant to be read like a story or a textbook chapter. They guide you through a common workflow from beginning to end. When you are new to a library, **always start here**. The Pandas "10 Minutes to pandas" guide is a perfect example.
2.  **API References:** This is an encyclopedia or a dictionary. It exhaustively lists every single function, every class, and every parameter. You do not *read* an API reference; you **search** or **refer** to it when you have a specific question, like "What are all the options for the `pandas.read_csv` function?" or "What colors can I use in a Matplotlib plot?"
3.  **Galleries / Cookbooks:** Many visualization libraries (like Matplotlib and Seaborn) have galleries of examples. These are invaluable for seeing what is possible and finding a template for a chart you want to create.

## The Practical Workflow: How to Find Answers
Nobody "reads" the API reference from start to finish. You *interrogate* it with a specific goal. Here is the practical workflow that programmers use every day:

1.  **Have a Goal:** Start with a clear question in plain English.
    *   *Bad Question:* "How does Pandas work?" (Too broad)
    *   *Good Question:* "How do I load a CSV file into Pandas?" or "How do I sort a Pandas DataFrame by a specific column?"

2.  **Use a Search Engine:** This is almost always the first step. Go to your favorite search engine and type your question, including the library name.
    *   `pandas load csv`
    *   `matplotlib bar chart example`
    *   `seaborn histogram`
    The first few results will almost always link to the official documentation or a highly-rated Stack Overflow post. Prioritize links that go to the library's own website (e.g., `pandas.pydata.org`, `matplotlib.org`).

3.  **Find the Examples:** Once you land on a documentation page for a specific function (e.g., `pandas.DataFrame.sort_values`), immediately scroll down to find the **Examples** section. This is often the fastest way to understand the basic usage. You can see the code and the output it produces.

4.  **Understand the Parameters:** At the top of the page, you will find the function's **signature**, which lists all its parameters. It will look something like this:
    `DataFrame.sort_values(by, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ...)`
    *   Parameters without a default value (like `by`) are usually required.
    *   Parameters with a default value (like `ascending=True`) are optional. You can change them if you need to, but they will work as specified if you do nothing.

This process of **Goal -> Search -> Skim for Examples -> Check Parameters** is the daily reality of working with code. Mastering this loop means you will never truly be stuck.

### Keywords
- Documentation
- API Reference
- User Guide
- Gallery
- Parameters
- Function Signature


# Chapter 12: The Digital Lab Bench - Introduction to Jupyter and Pandas
Now that our environment is fully set up with all the necessary tools, we are going to introduce you to the two most important tools in the daily life of a data researcher: the **Jupyter Notebook** and the **Pandas** library. This combination is the digital equivalent of a laboratory workbench, where you can experiment with, analyze, and document your findings all in one place.

## The Jupyter Notebook: An Interactive Lab
A notebook is an interactive document that lets you combine live, executable code, the output of that code, explanatory text, and data visualizations all in one place. Unlike a plain Python script that runs from top to bottom, a notebook is organized into **cells**. This interactive, narrative format makes it perfect for exploratory research, as you can run small chunks of code, inspect the results, and then decide what to do next.

To start the JupyterLab environment, open your Terminal (or PowerShell), navigate to the folder where you want to store your projects (using the command `cd your_folder_path`), and run the command:
```bash
jupyter lab
```
Your default web browser will open with the JupyterLab interface. From here, you can create a new notebook by clicking the "Python 3" icon under the "Notebook" header. This will create a new `.ipynb` (IPython Notebook) file.

The notebook is made of **cells**. You can change a cell's type between **Code** (for Python) and **Markdown** (for formatted text). To run a cell and see its output, you press <kbd>Shift</kbd> + <kbd>Enter</kbd>.

## Our First Look at Pandas: The DataFrame
Pandas is the most important library for data analysis in Python. Its core object, the workhorse of data science, is the **DataFrame**. A DataFrame is basically a powerful, programmable version of a spreadsheet or a database table. It has rows and columns, and you can use Pandas functions to load, clean, filter, group, and analyze the data within it.

Let's load our first real dataset. In a new code cell in your Jupyter notebook, the standard practice is to `import` pandas and give it a shorter alias, `pd`, to make it easier to type. Then we can use its functions.

```python
# Import the pandas library and give it the alias 'pd'
import pandas as pd

# This URL points to a CSV (Comma-Separated Values) file of college majors data
url = "https://raw.githubusercontent.com/fivethirtyeight/data/master/college-majors/majors-list.csv"

# The pd.read_csv() function is incredibly powerful.
# It can read a file from a URL or from your local computer into a DataFrame.
df = pd.read_csv(url)

# The .head() method is used to inspect the first few rows of the DataFrame (5 by default).
# This is a crucial first step to understanding your data's structure.
df.head()
```

Run this cell in your notebook by pressing <kbd>Shift</kbd> + <kbd>Enter</kbd>. You should see a beautifully formatted table of data appear right below the cell. You have just loaded a remote dataset into a DataFrame variable named `df`.

Now, let's get a summary of our DataFrame. The `.info()` method is another essential tool. It provides a concise summary of the DataFrame, including the column names, the number of non-null values in each column, and the data type of each column.

```python
# Get a summary of the DataFrame's structure
df.info()
```
Run this cell. The output tells you the column names (like `Major_category`, `Major`), how many rows there are (`173 entries`), and the data type of each column (`object` for text, `int64` for integers).

Congratulations! You have just used professional tools to load and inspect a real-world dataset in an interactive environment. This is the starting point for almost every data analysis project.

### Keywords
- Jupyter Notebook
- Cell (Code and Markdown)
- Pandas (`pd`)
- DataFrame
- `pd.read_csv()`
- `.head()`
- `.info()`

# Chapter 13: Project Part A - Collecting Data from a Web API

For our main project, we will investigate the civic life of a city by analyzing 311 service requests from **NYC Open Data**. This is a live, public dataset where we can see everything from noise complaints to reports of broken streetlights filed by citizens. It’s a fascinating window into the daily operations and sociology of an urban environment.

Our tool for this is the **API (Application Programming Interface)**. We will use the `requests` library to ask the NYC Open Data servers for a slice of this data. The specific dataset we are using is located at this **endpoint**: `https://data.cityofnewyork.us/resource/erm2-nwe9.json`

## The Challenge of Big Data: Pagination

Let's try to fetch some data to see what it looks like. When you look at the first record from the API, you'll see it's a Python dictionary with many keys.

```python
# A single record might look like this:
# {'unique_key': '65632215', 'created_date': '2025-07-23T01:50:52.000',
#  'agency': 'NYPD', 'complaint_type': 'Noise - Residential', ...and so on}
```
This is great, but what if we want thousands of records for a real analysis? If you read the API documentation, you'll find a crucial rule: a single request is limited to a maximum of 1000 records. How, then, do researchers collect large datasets?

The answer is **pagination**. We have to ask for the data "page by page." We do this with two parameters in our URL:
*   `$limit`: The number of records on each "page" (we'll use the maximum, 1000).
*   `$offset`: Where the next page should begin. To get the second page, we must `offset` our request by 1000 records. For the third page, the offset is 2000, and so on.

To get a substantial dataset, we must write a loop that makes multiple requests, changing the offset each time, and combines the results. This is a fundamental skill for working with APIs.

```python
# In a Jupyter cell:
import requests
import json
import time # A library to help us pause our code

base_url = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
page_size = 1000  # The number of records per page ($limit)
num_pages = 5     # Let's get 5 pages for a total of 5,000 records

# This list will hold all the records from all the pages we fetch
all_results = []

print("Starting data collection...")
# This loop will run 5 times, for pages 0, 1, 2, 3, 4
for page_num in range(num_pages):
    # We calculate the offset for the current page.
    # Page 0 starts at offset 0, Page 1 at offset 1000, etc.
    offset = page_num * page_size

    # Construct the full URL with the correct limit and offset parameters.
    full_url = f"{base_url}?$limit={page_size}&$offset={offset}"
    
    print(f"Fetching page {page_num + 1} of {num_pages}...")
    
    response = requests.get(full_url)
    page_results = response.json()
    
    # .extend() is a list method that adds all items from one list to another.
    all_results.extend(page_results)
    
    # It is good practice to wait a second between requests to avoid overwhelming the server.
    time.sleep(1)

print(f"\nData collection complete! Total records fetched: {len(all_results)}")

# Finally, we save our raw data to a local file. This is a crucial step for
# reproducibility, ensuring we don't have to hit the API every time we run our code.
with open('nyc_311_raw.json', 'w') as f:
    json.dump(all_results, f)

print("Raw data saved to nyc_311_raw.json")
```
We have now successfully collected a substantial, real-world dataset directly from a government API, handling the critical concept of pagination. This raw data file is our starting point for the real work of data wrangling.

# Chapter 14: Project Part B - Data Cleaning and Feature Engineering

Welcome to the most important stage of any data project. Our `nyc_311_raw.json` file contains 5,000 records, but it is a messy, complex, and unfiltered collection. In this chapter, we will clean the data, handle missing values, and, most excitingly, create new knowledge by **engineering a new feature**.

First, let's load our raw data into Pandas.

```python
# In a Jupyter cell:
import pandas as pd

df = pd.read_json('nyc_311_raw.json')
df.info()
```
The `.info()` output is our diagnostic report. It shows over 40 columns! Look closely at the "Non-Null Count" column. Many columns have missing values. For instance, `closed_date` has fewer than 5,000 non-null values. This is because many of the complaints in our dataset are still open. Most importantly, all the date columns are listed as `object` (text), not as dates, which means we cannot perform time-based calculations on them yet.

## Step 1: Handling Dates and Missing Data

Our first task is to convert the date columns into a proper `datetime` format. This will allow us to calculate durations. But what about the cases that have no `closed_date`? We must tell Pandas how to handle these errors gracefully.

```python
# In a Jupyter cell:

# The pd.to_datetime function is our tool for this conversion.
# The `errors='coerce'` argument is a crucial command. It tells Pandas:
# "Try your best to turn each string into a date. If you find a value that you
# cannot convert (like a missing value, None), don't stop and raise an error.
# Instead, just put a special 'Not a Time' (NaT) value there."
df['created_date'] = pd.to_datetime(df['created_date'], errors='coerce')
df['closed_date'] = pd.to_datetime(df['closed_date'], errors='coerce')

# Let's re-check the .info() for just these two columns to see the change.
df[['created_date', 'closed_date']].info()
```
The `Dtype` for these columns has now correctly changed to `datetime64[ns, UTC]`. We have successfully converted them, building a robust process that won't break if the data is incomplete.

## Step 2: Feature Engineering - Creating New Knowledge from Raw Data

Our dataset tells us *when* a complaint was opened and *when* it was closed. But a more interesting research question is: **"How long did it take to resolve the complaint?"** This value does not exist in the raw data; we have to create it. This process of creating new columns from existing ones is called **feature engineering**, and it is where you begin to add your own analytical value to a dataset.

We can create our new feature, `resolution_time`, by simply subtracting the `created_date` from the `closed_date`. Pandas is smart enough to handle this operation element-wise for the entire column.

```python
# In a Jupyter cell:

df['resolution_time'] = df['closed_date'] - df['created_date']

# Let's inspect our new column alongside the originals.
print(df[['created_date', 'closed_date', 'resolution_time']].head())
```
The result is a `Timedelta` object, which represents a duration. For easier analysis and plotting, it's better to represent this as a single number, like the total number of hours. We can use the special `.dt` accessor, which works on Timedelta columns, to perform this conversion.

```python
# In a Jupyter cell:

# The .dt.total_seconds() method gives the entire duration in seconds.
# We then divide by 3600 (60 seconds/minute * 60 minutes/hour) to get hours.
df['resolution_hours'] = df['resolution_time'].dt.total_seconds() / 3600

# Let's view our newly engineered numeric feature.
print(df[['resolution_time', 'resolution_hours']].head())
```

## Step 3: Final Cleaning and Column Selection

Our `resolution_hours` column will have missing values (`NaN`) for any case that is still open (where `closed_date` was `NaT`). For an analysis focused on *completed* cases, these rows are not useful. We will use `.dropna()` to remove them.

Finally, we don't need all 40+ columns for our analysis. Let's create a final, clean DataFrame with a focused subset of columns.

```python
# In a Jupyter cell:

# 1. Define the final, understandable columns we want to keep for our analysis.
final_columns = [
    'unique_key',
    'created_date',
    'closed_date',
    'agency',
    'complaint_type',
    'descriptor',
    'borough',
    'resolution_hours'
]
df_clean = df[final_columns].copy() # Use .copy() to prevent a common Pandas warning

# 2. Drop rows where our calculated 'resolution_hours' is missing. This effectively
#    filters our dataset to only include closed complaints.
df_clean = df_clean.dropna(subset=['resolution_hours'])

# 3. One last check: Are there any boroughs listed as 'Unspecified'?
print("Borough value counts:")
print(df_clean['borough'].value_counts())

# 4. Final verification of the structure and non-null counts.
print("\n--- Final Cleaned DataFrame Info ---")
df_clean.info()

# 5. Save our hard work to a new, clean file.
df_clean.to_csv('nyc_311_clean.csv', index=False)
print("\nClean and engineered dataset saved to 'nyc_311_clean.csv'")
```
We have transformed our raw, messy data into a clean, focused dataset with a brand new, analytically powerful feature. Now, we are finally ready to ask meaningful questions.


# Chapter 15: Project Part C - Exploratory Data Analysis (EDA)

With our clean, engineered dataset `nyc_311_clean.csv`, we can begin the exciting work of **Exploratory Data Analysis (EDA)**. EDA is not about proving a final hypothesis; it's about asking questions, discovering patterns, and getting to know the story of your dataset. We will use Pandas to slice, dice, and summarize our data to uncover insights about how New York City functions.

Let's load our clean data and begin our investigation.
```python
# In a Jupyter cell:
import pandas as pd

# It's good practice to tell read_csv to parse our date columns right away.
df = pd.read_csv('nyc_311_clean.csv', parse_dates=['created_date', 'closed_date'])
```

## Research Question 1: What is a "typical" resolution time for a 311 complaint?

The `.describe()` method is a powerful first step for any numerical column. It gives us a statistical summary, which can often reveal more than you'd expect.

```python
# In a Jupyter cell:
print(df['resolution_hours'].describe())
```
This summary is packed with insights. The `mean` (average) resolution time is about 100 hours. However, look at the `max` value: it's over 17,000 hours! This is a massive outlier—one single complaint that took almost two years to resolve. This single extreme value is dragging the mean upwards, making it less representative of the typical case.

In situations like this, the `50%` value, also known as the **median**, is a much more robust measure. The median is the true middle value: 50% of complaints were resolved faster than this, and 50% slower. Here, the median is only about 17 hours. This tells a story: while most complaints are handled relatively quickly, a few extreme cases take an exceptionally long time.

## Research Question 2: Which complaints take the longest to resolve?

This is a more nuanced question. It requires us to **group** our data by the `complaint_type` and then calculate a summary statistic (like the median we just discussed) for each group. This is the perfect job for the `.groupby()` method, one of the most powerful and common operations in data analysis.

```python
# In a Jupyter cell:

# This single line of code is doing a lot of work:
# 1. df.groupby('complaint_type'): It groups all the rows into buckets, one for each unique complaint type.
# 2. ['resolution_hours']: From those groups, it selects just the resolution_hours column.
# 3. .median(): It calculates the median for each group's collection of hours.
# 4. .sort_values(...): It sorts the final result so the longest times are at the top.
median_time_by_type = df.groupby('complaint_type')['resolution_hours'].median().sort_values(ascending=False)

# Let's look at the 10 slowest and 10 fastest complaint types
print("--- Top 10 SLOWEST Complaint Types (Median Hours to Resolution) ---")
print(median_time_by_type.head(10))

print("\n--- Top 10 FASTEST Complaint Types (Median Hours to Resolution) ---")
print(median_time_by_type.tail(10))
```

We can clearly see that infrastructure complaints like "Sewer" or "Water System" take hundreds of hours on average, likely requiring physical inspection and repair crews. In contrast, enforcement issues like "Illegal Parking" or "Noise" are often resolved in just a few hours.

## Research Question 3: Which boroughs are the most active, and which agencies handle their complaints?

We can use `.value_counts()` to see which boroughs generate the most 311 calls. But we can take it a step further: let's look at the busiest agency *within* the busiest borough.

```python
# In a Jupyter cell:

# First, let's find the busiest borough.
print("--- Total Complaints per Borough ---")
print(df['borough'].value_counts())

# It looks like BROOKLYN is a hotspot in our dataset. Let's filter our DataFrame
# to only include complaints from Brooklyn.
df_brooklyn = df[df['borough'] == 'BROOKLYN']

# Now, let's see which agency handles the most complaints within Brooklyn.
print("\n--- Top 5 Busiest Agencies in Brooklyn ---")
print(df_brooklyn['agency'].value_counts().head(5))
```

In Brooklyn, the NYPD is by far the most frequently contacted agency for 311 complaints.


# Chapter 16: Project Part D - Data Visualization

Our exploratory analysis has revealed several insights. Now, we must communicate them. **Data visualization** is the most powerful tool for this. A well-designed plot can convey a pattern or insight far more effectively than a table of numbers. We will use **Seaborn** and **Matplotlib**, which work together to create beautiful and informative graphics.

## Visualization 1: The Distribution of Resolution Times

Our first key finding was that the resolution times have a "long tail" of very slow cases. A **histogram** is the perfect plot to show this distribution.

```python
# In a Jupyter cell:
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('nyc_311_clean.csv')

# The default histogram of our data would be squished by the huge outliers.
# By filtering to show only cases resolved in under, say, 500 hours, we can see
# the shape of the more typical distribution much more clearly.
plt.figure(figsize=(12, 7))
sns.histplot(df[df['resolution_hours'] < 500]['resolution_hours'], bins=50, kde=True)

# We can add a vertical line to explicitly mark the median.
median_val = df['resolution_hours'].median()
plt.axvline(median_val, color='red', linestyle='--', label=f'Median: {median_val:.2f} hours')

plt.title('Distribution of 311 Complaint Resolution Times (< 500 hours)', fontsize=16)
plt.xlabel('Hours to Resolution', fontsize=12)
plt.ylabel('Number of Complaints', fontsize=12)
plt.legend()
plt.show()
```
This plot visually confirms our statistical finding. The vast majority of complaints are clustered on the far left (resolved quickly), while the distribution stretches far to the right. The red dashed line clearly marks the median, showing the audience where the true "center" of the typical citizen experience lies, separate from the influence of extreme outliers.

## Visualization 2: Resolution Times by Complaint Type

A **horizontal bar chart** is the best way to visualize our `.groupby()` result, as it gives plenty of space for the long complaint type names. Let's create a single chart that shows the 5 slowest and 5 fastest complaint types to tell a story of contrast.

```python
# In a Jupyter cell:

# --- Re-run our analysis to get the data for the plot ---
median_time_by_type = df.groupby('complaint_type')['resolution_hours'].median().sort_values()
top_5_fastest = median_time_by_type.head(5)
top_5_slowest = median_time_by_type.tail(5)
# Concatenate the two series together for plotting
combined = pd.concat([top_5_fastest, top_5_slowest])
# ---

plt.figure(figsize=(12, 8))
sns.barplot(x=combined.values, y=combined.index, palette='coolwarm_r')

plt.title('Median Resolution Time for Fastest and Slowest Complaint Types', fontsize=16)
plt.xlabel('Median Hours to Resolution', fontsize=12)
plt.ylabel('Complaint Type', fontsize=12)
plt.show()
```
This visualization contrasts the rapid resolution of parking and noise issues with the lengthy process required for infrastructure problems.

## Visualization 3: Complaints by Borough

Finally, let's visualize the number of complaints per borough to show the geographic distribution in our dataset. A simple bar chart is perfect for this.

```python
# In a Jupyter cell:

# --- Get the data for the plot ---
borough_counts = df['borough'].value_counts()
# ---

plt.figure(figsize=(10, 6))
sns.barplot(x=borough_counts.index, y=borough_counts.values, palette='viridis')

plt.title('Total 311 Complaints per Borough in Dataset', fontsize=16)
plt.ylabel('Number of Complaints', fontsize=12)
plt.xlabel('Borough', fontsize=12)
plt.show()
```

This final chart clearly communicates the geographic breakdown of our specific dataset, providing important context for our other findings. You have now completed the entire research pipeline: from asking a question and collecting raw data to communicating a nuanced, data-driven insight.


# Chapter 17: The New Workflow - The Programmer as Director
Congratulations on building a complete data project from scratch! You have learned the rules of Python: the syntax, the libraries, the workflow. You have learned the established way of doing things. Now we are going to talk about how the game itself is changing. The rise of powerful AI assistants, especially Large Language Models (LLMs), is causing a fundamental shift in the role of the programmer from a **writer of code** to a **director of logic**.

This is not to say that the skills you have learned are obsolete. On the contrary, they are more important than ever. But how you *apply* them is evolving.

## From Writer to Editor: The New Workflow
In the traditional model, you have a problem, and you meticulously write every line of code to solve it. The new workflow is a conversation, a partnership. You describe your goal in plain English to an AI assistant (like ChatGPT, Gemini, or integrated tools like GitHub Copilot), and it generates a block of code. Your job then transforms into that of a critical, knowledgeable editor. You must:
-   **Review** the code for correctness.
-   **Check** it for logical errors and subtle bugs.
-   **Debug** it when it does not work.
-   **Refine** it to better fit your specific needs.

## The Workflow Loop: A New Process
This new process can be thought of as a loop that looks like this:

1.  **Decompose:** Break a large research goal ("Analyze this dataset") into a small, concrete, programmable task ("Load the CSV file `data.csv` into a Pandas DataFrame and display the first 5 rows"). This is the most important human skill in the loop.
2.  **Declare:** State this clear, specific task to your AI assistant. This is called **prompting**. A good prompt is specific, provides context, and gives an example if possible.
3.  **Review:** Use your fundamental knowledge of Python, Pandas, and programming logic to *critically read* the code the AI proposes. Does it use the correct functions? Does the logic make sense? Does it handle potential errors? Is it efficient?
4.  **Refine & Integrate:** Approve the code and integrate it into your project, or provide feedback for the next iteration. Your feedback might be, "That is good, but now can you also handle the case where the file does not exist?" or "Can you rewrite this using a `for` loop instead?"

## Why The Last Few Chapters Mattered
You might be thinking, "Why did I just learn to write a Matplotlib bar chart from scratch if an AI can generate it for me?" The answer lies in the **Review** step.

Without the fundamental knowledge you have gained, you cannot perform this crucial step. You would be blindly trusting the AI's output, unable to spot its (frequent) mistakes, debug its errors, or guide it effectively toward a correct and robust solution. You wouldn't know if the chart it made was actually representing the data correctly.

The fundamentals you have learned are not obsolete; they have become the prerequisite for using these powerful new tools safely and effectively. You are no longer just the typist; you are the architect, the quality controller, and the director.

### Keywords
- AI Assistant / LLM
- Agentic Workflow
- Prompting / Prompt Engineering
- Code Review
- De-bugging

# Chapter 18: Sharing Your Research - Reproducibility and GitHub
The final step of any research project is not the analysis itself, but sharing it. In computational research, "sharing" means more than just showing a finished chart or a final paper. To be credible and useful, your work must be understandable, trustworthy, and, most importantly, **reproducible**. Someone else should be able to take your code and data and get the exact same results.

## Reproducibility: The `requirements.txt` file
If a colleague wants to re-run your Jupyter Notebook, they need to have the exact same libraries (Pandas, Seaborn, etc.) installed, preferably at the same versions you used. Manually listing these is tedious and error-prone. Instead, we can automatically generate a file that lists all your project's dependencies.

In your terminal, navigate to your project folder and run this command:
```bash
pip freeze > requirements.txt
```
This command does two things:
1.  `pip freeze`: This prints out a list of all the Python packages installed in your current environment and their exact versions.
2.  `>`: This is a standard command-line operator that redirects the output of the command on the left and saves it into the file on the right.

This creates a `requirements.txt` file in your folder. Now, another researcher can download your project, create a fresh Python environment, and run `pip install -r requirements.txt` to install the exact same dependencies. This is a cornerstone of reproducible computational science.

## Sharing on GitHub
**GitHub** is the standard platform for sharing code, collaborating on projects, and tracking the history of your work using the **Git** version control system. It is a place to store your project publicly and create a portfolio of your work.

1.  **Create a GitHub Account and Repository:** If you don't have one, sign up at [github.com](https://github.com). Then, create a new public repository for your project. Give it a descriptive name, like `python-art-analysis-project`.
2.  **Upload Your Files:** From your new repository page on GitHub, you can use the "Add file" -> "Upload files" option to upload your project files:
    *   Your Jupyter Notebook (`.ipynb`)
    *   Your clean data file (`.csv`)
    *   Your new `requirements.txt` file
3.  **Write a `README.md`:** This is the most important file in your repository. It is the front page of your project, written in Markdown, and it should clearly and concisely explain:
    *   **Project Title:** A clear, descriptive title.
    *   **Description:** A short paragraph explaining what the project is, what questions it asks, and what it does.
    *   **Data Source:** Where did you get your data? Provide a name and a link to the API or original source. Give proper attribution.
    *   **How to Run the Project:** Explain the steps another person would need to take to reproduce your analysis (e.g., "1. Clone this repository. 2. Install dependencies with `pip install -r requirements.txt`. 3. Open and run the `analysis.ipynb` notebook in JupyterLab.").

<Info>Good news! GitHub has built-in support for automatically rendering Jupyter Notebooks. This means that visitors to your repository can see your code, your formatted notes, your outputs, and your plots directly in their browser without needing to download or run anything. This makes it an excellent platform for sharing your findings.</Info>

## The Path Forward
Congratulations! You have completed a significant journey. You have learned the fundamentals of a powerful programming language, built a complete project from data collection to visualization, and learned how to share your work in a professional and reproducible manner. You are now equipped with the foundational skills to continue learning on your own and to apply these powerful techniques to your own research. Good luck!

### Keywords
- Reproducibility
- `requirements.txt`
- Git
- GitHub
- `README.md`