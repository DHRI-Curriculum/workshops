---
title: 'Python for Researchers'
cover title: Python
description: This is a hands-on introduction to Python, designed for graduate students and researchers interested in automating research tasks, analyzing data, and creating reproducible computational workflows. By the end of this course, you'll be able to collect data from web APIs, clean and analyze it with pandas, create publication-quality visualizations, and share your work professionally—even without a computer science background.
cover_image: /images/workshop/python-cover.jpg

readings:
    - "Think Python (Free Online Book): [Think Python](https://greenteapress.com/wp/think-python-2e/) - An excellent, gentle introduction to programming"
    - "Python for Everybody: [Python for Everybody](https://www.py4e.com/) - Free materials focused on data retrieval and processing"
    - "Pandas Documentation: [10 Minutes to Pandas](https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html) - Quick start guide for data analysis"
    - "Real Python Tutorials: [Real Python](https://realpython.com/) - High-quality tutorials on specific topics"

long_pages: true

authors:
    - 'Stephen Zweibel'

editors:
    - 'Stephen Zweibel'

goals:
    - description: 'In this workshop, you will learn to:'
    - "Understand core programming concepts: variables, data types, operators, control flow (conditionals, loops), functions, and scope."
    - "Distinguish among Python's core data structures: strings, numbers, lists, and dictionaries."
    - Write and run Python code in the browser REPL, in script files, and in Jupyter notebooks.
    - Set up a professional Python development environment on your own computer.
    - Collect and process data from web APIs programmatically.
    - Clean, filter, and analyze tabular data using the pandas library.
    - Create publication-quality visualizations with matplotlib and seaborn.
    - Understand modern AI-assisted programming workflows while maintaining the ability to debug and verify code.
    - Package and share reproducible research projects on GitHub.
programming_language: 'Python'
---

# Introduction

Hello! Welcome to *Python for Researchers*, a course designed specifically for those outside of computer science who want to harness the power of programming for their research. This course aims to give you practical skills that you can immediately apply to your work, whether you're analyzing historical texts, processing survey data, or visualizing experimental results.

## Learning Outcomes

By the end of this course, successful students will:

- Write Python code confidently at a beginner-to-intermediate level
- Understand core programming concepts that apply across all languages
- Automate repetitive research tasks that might otherwise take weeks by hand
- Collect data from online sources programmatically
- Clean, analyze, and visualize data using professional tools
- Share reproducible computational research that others can verify and build upon
- Understand how AI tools are changing programming workflows
- Be prepared for continued learning in data science and computational methods

## Why Learn Python?

Programming, at its heart, is about teaching a computer to do tedious work for you. As researchers, we often face tasks that involve scale and repetition:

1. **Scale:** Reading thousands of documents, processing hundreds of survey responses, analyzing millions of data points. What would take months by hand can often be done in minutes with code.

2. **Reproducibility:** When you analyze data by hand or in Excel, it's hard for others (or even yourself months later) to understand exactly what you did. Code documents your exact process, making your research transparent and reproducible.

3. **Flexibility:** Unlike point-and-click software with fixed features, programming lets you build exactly the tool you need for your specific research question.

4. **Community:** Python has an enormous, welcoming community. Whatever problem you're trying to solve, someone has probably built a tool (called a "library") to help you.

Python specifically is an excellent first language because:
- Its syntax reads almost like English, making it accessible to beginners
- It's the dominant language in data science, machine learning, and scientific computing
- It has incredible libraries for nearly every research need
- It's completely free and open-source
- Skills you learn in Python transfer well to other languages

## The Process of Learning to Program

Learning to program is remarkably similar to learning a human language. You need:

1. **Vocabulary:** The basic commands and keywords (like `print`, `if`, `for`)
2. **Grammar:** How to structure these commands into valid statements
3. **Idioms:** Common patterns that experienced programmers use
4. **Fluency:** The ability to express your ideas naturally in code

Just as you wouldn't learn French by memorizing a dictionary, you won't learn Python by memorizing commands. Instead, we'll learn by doing—building small programs that gradually increase in complexity.

## What We'll Build Together

This course is project-driven. We'll start with the basics, but we're building toward a complete research workflow. By the end, you'll create a data analysis project that:

- Collects real data from New York City's 311 service request system
- Cleans and processes thousands of records
- Answers research questions through analysis
- Creates publication-quality visualizations
- Shares everything in a professional, reproducible format

## How This Course Works

Each lesson builds on the previous ones, introducing new concepts through practical examples. We'll use several different environments:

1. **Browser-based REPL:** For your first steps, we'll use an interactive Python environment right in your browser. No installation needed!
2. **Professional setup:** Once you're comfortable with basics, we'll set up Python on your computer
3. **Jupyter notebooks:** The standard tool for data science, combining code, results, and narrative
4. **GitHub:** Where you'll share your final project with the world

Don't worry if these terms are unfamiliar, we'll explain everything step by step.

## Acknowledgements

This material draws inspiration from several excellent resources: *Think Python* by Allen Downey for its clear explanations of fundamental concepts; *Python for Everybody* by Charles Severance for its focus on practical data tasks; the pandas and matplotlib communities for their exceptional documentation; and countless Stack Overflow contributors who've answered beginners' questions with patience and clarity.

# Getting Started with Python

Let's begin our journey! As is tradition in the programming world, our very first program will simply display the words "Hello, World!" This tradition dates back to the 1970s and serves as a simple test that our programming environment is working correctly.

But there's something deeper happening here. When you write your first program, you're joining a community of millions who started exactly the same way. Every expert programmer, from the creators of your favorite apps to NASA engineers, wrote this same simple program when they were learning.

## Hello, World!

### Understanding How Python Runs

Before we write our first line of code, let's understand what we're actually doing. Python is an **interpreted language**, which means there's a program (called the Python interpreter) that reads your code line by line and executes it. Think of the interpreter as a very literal-minded assistant who follows your instructions exactly as written.

We'll start in the **REPL** (Read-Evaluate-Print Loop), which is like having a conversation with Python. You type a command, Python executes it immediately and shows you the result, then waits for your next command. It's perfect for learning because you get instant feedback.

### The `print()` Function

The most basic way to display output in Python is with the `print()` function. A **function** in programming is a named command that performs a specific task. Functions are like verbs in human language—they do things.

<CodeEditor language="Python">
# Your first Python program!
print("Hello, World!")
</CodeEditor>

Let's break down what just happened:

- **`print`**: This is the function name. It tells Python "display the following on screen"
- **`()`**: Parentheses always follow a function name. They hold what we're giving to the function
- **`"Hello, World!"`**: This is a **string** (text data) that we're asking Python to display
- The quotes (either single `'` or double `"`) tell Python that this is literal text, not a command

**Syntax Notes:**
- Python is **case-sensitive**: `print` works, but `Print` or `PRINT` will cause an error
- The quotes around text are required. Try `print(Hello)` without quotes—you'll get an error because Python thinks Hello is a variable name (which doesn't exist yet)
- You can use either single or double quotes: `'Hello'` or `"Hello"` both work
- In Python, you typically don't need semicolons at the end of lines (unlike many other languages)

Try modifying the message:

<CodeEditor language="Python">
print("Hello, Python!")
print('My name is Ada')  # Single quotes work too
print("It's a beautiful day")  # Double quotes are useful when your text contains apostrophes
</CodeEditor>

<Info>The `#` symbol starts a comment—text that Python ignores. We use comments to leave notes for ourselves and other programmers.</Info>


## Data Types and Variables

Programming is fundamentally about working with different kinds of information. Just as in research you work with different types of sources (texts, numbers, images), in programming we work with different **data types**. Each type has its own properties and uses.

### Numbers

Python understands two main types of numbers, and the distinction matters for your calculations:

#### Integers (whole numbers)

Integers (`int` for short) are whole numbers without decimal points. Use them for counting discrete things:

```pycon
>>> 42
>>> -17
>>> 1_000_000  # Python lets you use underscores for readability in large numbers
>>> 2024
```

<PythonREPL />

#### Floating-point numbers (decimals)

Floats (`float` for short) are numbers with decimal points. Use them for measurements and calculations that need precision:

```pycon
>>> 3.14159
>>> -273.15  # Absolute zero in Celsius
>>> 2.0      # Even .0 makes it a float
>>> 1.23e5   # Scientific notation: 123000.0
```

<PythonREPL />

**Why the distinction matters:** Operations with integers stay as integers when possible (except division), while operations with floats always produce floats. This affects both precision and performance in large calculations.

You can perform all the arithmetic operations you'd expect:

```pycon
>>> 10 + 5      # Addition
>>> 10 - 5      # Subtraction  
>>> 10 * 5      # Multiplication
>>> 10 / 5      # Division (always returns a float!)
>>> 10 // 3     # Floor division (returns an integer)
>>> 10 % 3      # Modulo (remainder after division)
>>> 2 ** 8      # Exponentiation (2 to the power of 8)
```

<PythonREPL />

<Info>Note: Division (`/`) always returns a float, even when dividing evenly. If you need an integer result, use floor division (`//`).</Info>

### Strings

Strings are how Python represents text. They're called "strings" because they're a string (sequence) of characters. Strings must be enclosed in quotes:

```pycon
>>> "Hello, World!"
>>> 'Python is fun'
>>> """This is a
multi-line
string"""  # Triple quotes allow line breaks
>>> ""  # An empty string is valid
```

<PythonREPL />

**Quote flexibility:** Python lets you choose your quote style, which is helpful:
- Use double quotes when your text contains apostrophes: `"It's nice"`
- Use single quotes when your text contains double quotes: `'She said "Hello"'`
- Use triple quotes for multi-line text or when your text contains both types of quotes

### Booleans

Booleans represent truth values—either `True` or `False` (note the capital letters!). They're named after George Boole, a mathematician who founded the field of Boolean algebra. These are the foundation of all decision-making in programs:

```pycon
>>> True
>>> False
>>> 5 > 3       # Comparison expressions evaluate to booleans
>>> 2 == 2      # Is 2 equal to 2?
>>> 1 != 1      # Is 1 not equal to 1?
```

<PythonREPL />

Booleans will become crucial when we learn about conditions and loops—they're how programs make decisions.

### Checking Types

When you're unsure what type of data you're working with, Python's `type()` function tells you:

```pycon
>>> type(42)
>>> type(3.14)
>>> type("hello")
>>> type(True)
>>> type(5 > 3)  # What type does a comparison produce?
```

<PythonREPL />

This becomes especially useful when debugging—many errors come from trying to perform an operation on the wrong type of data.

### Variables: Giving Names to Values

So far, every value we've created has disappeared after we used it. Variables let us store values and refer to them by name. Think of a variable as a labeled box where you can store a value and retrieve it later.

Creating a variable is called **assignment**, and we use the `=` operator (single equals sign):

```pycon
>>> message = "Hello, World!"
>>> year = 2024
>>> pi = 3.14159
>>> is_running = True
```

Now we can use these names instead of typing the values:

```pycon
>>> print(message)
>>> print(year)
>>> next_year = year + 1
>>> print(next_year)
```

<PythonREPL />

**Variable naming rules and conventions:**
- Must start with a letter or underscore: `name`, `_private`
- Can contain letters, numbers, underscores: `data_2024`, `user_name`
- Cannot contain spaces or special characters: `my-var` is invalid
- Cannot be Python keywords: `for`, `if`, `class` are reserved
- Case matters: `name`, `Name`, and `NAME` are different variables

**Python naming conventions (PEP 8 style guide):**
- Use **snake_case** for variables and functions: `student_count`, `calculate_average`
- Use **CAPITAL_SNAKE_CASE** for constants: `MAX_ATTEMPTS`, `PI`
- Use **PascalCase** for classes (we'll learn about these later): `StudentRecord`
- Choose descriptive names: `temperature` is better than `t`
- Avoid single letters except in short loops (we'll see this later)

Variables can be reassigned—the box can hold different values over time:

```pycon
>>> count = 10
>>> print(count)
>>> count = count + 1  # Take the current value, add 1, store it back
>>> print(count)
>>> count += 1  # Shorthand for the same operation
>>> print(count)
```

<PythonREPL />

## Review Questions

What will be displayed when you run `print("Hello")`?

<Quiz>
- Hello*
- "Hello"
- print("Hello")
- Nothing
</Quiz>

Which of the following are valid variable names in Python? (Select all that apply)

<Quiz>
- user_name*
- 2nd_place
- _private*
- my-variable
- firstName*
- class
- CONSTANT_VALUE*
</Quiz>

What is the data type of `3.0`?

<Quiz>
- int
- float*
- str
- bool
</Quiz>

What value does `10 / 5` produce?

<Quiz>
- 2
- 2.0*
- 5
- 0.5
</Quiz>

## Challenges

1. **Temperature Converter:** Create variables for a temperature in Celsius (like `celsius = 25`). Calculate the Fahrenheit equivalent using the formula: F = C × 9/5 + 32. Store the result in a new variable and print both temperatures with descriptive messages.

2. **Personal Info:** Create variables for your first name, last name, age, and whether you're a student (boolean). Print a formatted sentence using all these variables.

3. **Type Investigation:** Create a variable with the value `"123"`. Check its type. Now create another variable that converts this to an actual number using `int()`. What happens if you try to add 10 to each variable?

### Challenge 1: Temperature Converter
<Secret>
```python
# Temperature Converter Solution
celsius = 25
fahrenheit = celsius * 9/5 + 32
print("Temperature in Celsius:", celsius)
print("Temperature in Fahrenheit:", fahrenheit)
# Or more elegantly:
print(f"{celsius}°C is equal to {fahrenheit}°F")
```
</Secret>

### Challenge 2: Personal Info
<Secret>
```python
# Personal Info Solution
first_name = "Ada"
last_name = "Lovelace"
age = 36
is_student = True

print("Name:", first_name, last_name)
print("Age:", age)
print("Student status:", is_student)
# Or as a sentence:
print(f"My name is {first_name} {last_name}, I am {age} years old.")
if is_student:
    print("I am currently a student.")
```
</Secret>

### Challenge 3: Type Investigation

<Secret>
```python
# Type Investigation Solution
text_number = "123"
print("Type of text_number:", type(text_number))

# Convert to integer
real_number = int(text_number)
print("Type of real_number:", type(real_number))

# Try adding 10 to each
# This will cause an error if uncommented:
# result1 = text_number + 10  # TypeError!

# This works:
result2 = real_number + 10
print("Real number + 10 =", result2)

# But this would work (string concatenation):
result3 = text_number + "10"  # "12310"
print("Text + '10' =", result3)
```
</Secret>

## Review Questions

What does a function return if it has no explicit `return` statement?

<Quiz>
- 0
- False
- None*
- Error
</Quiz>

Which statement about function parameters is correct?

<Quiz>
- They are defined in the function body.
- They can be optional.
- They must be unique within a function.
- All of the above.*
</Quiz>

### Keywords

- Data type
- Integer (`int`)
- Float (`float`)
- String (`str`)
- Boolean (`bool`)
- Variable
- Assignment (`=`)
- `type()` function
- Case-sensitive
- Comment (`#`)

# Working with Text: String Manipulation

Strings are perhaps the most versatile data type in Python. As researchers, much of our data comes in the form of text—survey responses, historical documents, social media posts, or bibliographic records. Learning to manipulate strings effectively is essential for any text-based research.

## Creating and Combining Strings

We've seen basic strings, but Python offers several ways to create and work with text:

### String Literals

The simplest strings are **literals**—text you type directly in quotes:

<CodeEditor language="Python">
simple = "Hello, World!"
with_apostrophe = "It's a beautiful day"
with_quotes = 'She said "Hello" to me'
empty = ""  # An empty string is perfectly valid

# Display the strings
print(simple)
print(with_apostrophe)
print(with_quotes)
print(f"Empty string: '{empty}'")
</CodeEditor>

### Multi-line Strings

For longer text, use triple quotes (either `'''` or `"""`):

<CodeEditor language="Python">
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you!"""
print(poem)
</CodeEditor>

Triple-quoted strings preserve all formatting, including line breaks and indentation. They're perfect for:
- Long text passages
- Documentation (we'll see this with functions)
- SQL queries or other code within Python
- Any text that spans multiple lines

### String Concatenation

The simplest way to combine strings is with the `+` operator:

<CodeEditor language="Python">
first_name = "Ada"
last_name = "Lovelace"
full_name = first_name + " " + last_name
print(full_name)

# Watch out—you need to explicitly include spaces:
greeting = "Hello"
name = "World"
print(greeting + name)  # No space!
print(greeting + " " + name)  # Better
</CodeEditor>

You can only concatenate strings with other strings:

<CodeEditor language="Python">
age = 25
# This will cause an error:
# message = "I am " + age + " years old"  # TypeError!

# You must convert the number to a string first:
message = "I am " + str(age) + " years old"
print(message)
</CodeEditor>

### F-Strings: The Modern Way

While concatenation works, it quickly becomes cumbersome. Python 3.6 introduced **f-strings** (formatted string literals), which are far more elegant:

<CodeEditor language="Python">
name = "Ada"
age = 36
occupation = "mathematician"

# The old way (concatenation):
old_way = "My name is " + name + ", I am " + str(age) + " years old, and I work as a " + occupation + "."

# The new way (f-string):
new_way = f"My name is {name}, I am {age} years old, and I work as a {occupation}."

print(old_way)
print(new_way)  # Same result, much cleaner!
</CodeEditor>

F-strings start with `f` before the opening quote. Inside the string, anything in curly braces `{}` is evaluated as Python code:

<CodeEditor language="Python">
name = "Ada"
age = 36
items = 3
price = 19.99

print(f"I bought {items} books for ${price * items}")

# You can even do calculations inside the braces:
print(f"Next year I'll be {age + 1}")

# Or call functions:
print(f"My name in uppercase is {name.upper()}")
</CodeEditor>

F-strings can also format numbers:

<CodeEditor language="Python">
pi = 3.14159265359
print(f"Pi rounded to 2 decimals: {pi:.2f}")

percentage = 0.875
print(f"Success rate: {percentage:.1%}")  # Converts to percentage!

large_number = 1234567
print(f"Population: {large_number:,}")  # Adds comma separators
</CodeEditor>

## String Methods

Strings in Python are **objects**, which means they come with built-in functions (called **methods**) that can manipulate them. You call a method by adding a dot `.` after the string, followed by the method name and parentheses.

### Case Methods

<CodeEditor language="Python">
text = "Hello, World!"

print(text.upper())       # HELLO, WORLD!
print(text.lower())       # hello, world!
print(text.capitalize())  # Hello, world!
print(text.title())       # Hello, World!
print(text.swapcase())    # hELLO, wORLD!
</CodeEditor>

Important: String methods don't change the original string (strings are **immutable**). They return a new string:

<CodeEditor language="Python">
original = "Hello"
uppercase = original.upper()
print(original)  # Still "Hello"
print(uppercase)  # "HELLO"
</CodeEditor>

### Searching and Checking

<CodeEditor language="Python">
email = "student@university.edu"

# Check if string contains something:
print("@" in email)  # True
print(email.count("u"))  # How many times does 'u' appear?

# Find position (index) of substring:
print(email.index("@"))  # Position of @ symbol
print(email.find("edu"))  # Position where "edu" starts

# Check start and end:
print(email.startswith("student"))  # True
print(email.endswith(".edu"))  # True
</CodeEditor>

### Cleaning and Modifying

<CodeEditor language="Python">
messy = "  Hello, World!  \n"
print(messy)
print(messy.strip())  # Remove whitespace from ends

text = "Hello, World!"
print(text.replace("World", "Python"))
print(text.replace("o", "0"))  # Replace all occurrences

# Split string into a list:
sentence = "Python is awesome"
words = sentence.split()  # Split on whitespace
print(words)

csv_line = "Ada,Lovelace,1815"
data = csv_line.split(",")  # Split on comma
print(data)
</CodeEditor>

### String Validation Methods

Python provides methods to check what kind of characters a string contains:

<CodeEditor language="Python">
# Check if string contains only certain types of characters:
print("hello".isalpha())     # Only letters? True
print("hello123".isalpha())  # Only letters? False
print("123".isdigit())       # Only digits? True
print("hello123".isalnum())  # Only letters/numbers? True
print("  ".isspace())        # Only whitespace? True
print("Hello".isupper())     # All uppercase? False
print("HELLO".isupper())     # All uppercase? True
</CodeEditor>

## String Indexing and Slicing

Strings are **sequences**—ordered collections of characters. Each character has a position (index), starting from 0:

<CodeEditor language="Python">
text = "Python"
#       012345  <- Index positions

print(text[0])  # First character: 'P'
print(text[1])  # Second character: 'y'
print(text[5])  # Last character: 'n'

# Negative indices count from the end:
print(text[-1])  # Last character: 'n'
print(text[-2])  # Second-to-last: 'o'
</CodeEditor>

**Slicing** lets you extract portions of a string:

<CodeEditor language="Python">
text = "Python Programming"

# Basic slicing: [start:end]
print(text[0:6])   # Characters 0-5 (end is exclusive)
print(text[7:18])  # "Programming"

# Omit start or end:
print(text[:6])    # From beginning to position 5
print(text[7:])    # From position 7 to end

# Step parameter: [start:end:step]
print(text[::2])   # Every other character
print(text[::-1])  # Reverse the string!
</CodeEditor>

## Escape Sequences

Sometimes you need to include special characters in strings. **Escape sequences** start with a backslash `\`:

<CodeEditor language="Python">
# Common escape sequences:
print("Hello\nWorld")    # \n = newline
print("Hello\tWorld")    # \t = tab
print("She said \"Hi\"") # \" = quotation mark
print("C:\\Users\\Ada")  # \\ = backslash itself

# Raw strings (ignore escape sequences):
print(r"C:\Users\new_folder")  # r prefix makes it raw
</CodeEditor>

## Review Questions

What does the following code print?
```python
name = "Python"
print(name[1:4])
```

<Quiz>
- Pyth
- yth*
- ytho
- Pyt
</Quiz>

Which method would you use to remove spaces from the beginning and end of a string?

<Quiz>
- .remove()
- .strip()*
- .clean()
- .delete()
</Quiz>

What is the result of `"3" + "7"` in Python?

<Quiz>
- 10
- "10"
- "37"*
- Error
</Quiz>

How would you check if an email string contains "@"?

<Quiz>
- email.contains("@")
- "@" in email*
- email.has("@")
- email.find("@") > 0*
</Quiz>

## Challenges

1. **Email Validator:** Write code that takes an email address and checks if it's valid (contains exactly one "@" and at least one "." after the @). Print whether it's valid or not.

2. **Text Cleaner:** Take a messy string with extra spaces, mixed case, and unnecessary punctuation. Clean it up to have proper capitalization and spacing.

3. **Password Strength Checker:** Create a program that checks if a password is strong. It should be at least 8 characters, contain both uppercase and lowercase letters, and have at least one digit.

### Challenge 1: Email Validator
<Secret>
```python
# Email Validator
email = "student@university.edu"

# Check for exactly one @
at_count = email.count("@")
if at_count != 1:
    print("Invalid: Email must contain exactly one @")
else:
    # Split on @ and check for . in domain part
    parts = email.split("@")
    if len(parts) == 2 and "." in parts[1]:
        print(f"{email} is a valid email format")
    else:
        print(f"{email} is invalid")
```

</Secret>

### Challenge 2: Text Cleaner
<Secret>
```python
# Text Cleaner
messy_text = "  hELLo,    wORLD!!!   this   IS  messy   "

# Clean it up step by step
cleaned = messy_text.strip()  # Remove outer whitespace
cleaned = cleaned.lower()  # Convert to lowercase
cleaned = cleaned.replace("  ", " ")  # Replace double spaces
# Keep replacing until no more double spaces
while "  " in cleaned:
    cleaned = cleaned.replace("  ", " ")
cleaned = cleaned.capitalize()  # Capitalize first letter

print(f"Original: '{messy_text}'")
print(f"Cleaned: '{cleaned}'")
```
</Secret>

### Challenge 3: Password Strength Checker
<Secret>
```python
# Password Strength Checker
password = "MyPass123"

# Check each requirement
is_long_enough = len(password) >= 8
has_upper = any(c.isupper() for c in password)
has_lower = any(c.islower() for c in password)
has_digit = any(c.isdigit() for c in password)

# Report results
print(f"Password: {password}")
print(f"Length >= 8: {is_long_enough}")
print(f"Has uppercase: {has_upper}")
print(f"Has lowercase: {has_lower}")
print(f"Has digit: {has_digit}")

# Overall assessment
if all([is_long_enough, has_upper, has_lower, has_digit]):
    print("Password is STRONG")
else:
    print("Password is WEAK")
```
</Secret>

## Key Terms

- String concatenation (`+`)
- F-string (formatted string literal)
- String method
- Immutable
- String indexing
- String slicing
- Escape sequence
- `.upper()`, `.lower()`, `.strip()`, `.replace()`, `.split()`
- `.startswith()`, `.endswith()`
- `.isalpha()`, `.isdigit()`, `.isalnum()`


# Collections: Lists and Dictionaries

So far, we've worked with individual pieces of data—a single number, a single string. But real research involves collections of data: lists of participants, sets of measurements, records with multiple fields. Python provides powerful data structures for organizing collections of information.

## Lists: Ordered Collections

A **list** is Python's most versatile data structure. It's an ordered, mutable (changeable) collection that can hold any type of data. Think of it as a numbered sequence of boxes, where each box can hold any Python object.

### Creating Lists

Lists are created with square brackets `[]`, with items separated by commas:

```pycon
>>> # An empty list
>>> empty_list = []
>>> 
>>> # A list of strings
>>> books = ["1984", "Brave New World", "Fahrenheit 451"]
>>> 
>>> # A list of numbers
>>> temperatures = [20.5, 21.0, 19.8, 22.1, 20.9]
>>> 
>>> # Lists can contain mixed types (though usually not recommended)
>>> mixed = [42, "hello", 3.14, True]
>>> 
>>> # Lists can contain other lists!
>>> matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

<PythonREPL />

### Accessing List Items

Like strings, lists use **zero-based indexing**. The first item is at index 0:

```pycon
>>> fruits = ["apple", "banana", "cherry", "date"]
>>> 
>>> print(fruits[0])   # First item
>>> print(fruits[1])   # Second item
>>> print(fruits[-1])  # Last item
>>> print(fruits[-2])  # Second-to-last
>>> 
>>> # Trying to access beyond the list causes an error:
>>> # print(fruits[10])  # IndexError!
```

<PythonREPL />

<Info>Off-by-one errors are probably the most common bug in programming. Remember: if a list has 4 items, the valid indices are 0, 1, 2, and 3.</Info>

### Modifying Lists

Unlike strings, lists are **mutable**—you can change them after creation:

```pycon
>>> colors = ["red", "green", "blue"]
>>> print(colors)
>>> 
>>> # Change an existing item
>>> colors[1] = "yellow"
>>> print(colors)
>>> 
>>> # Add items to the end
>>> colors.append("purple")
>>> print(colors)
>>> 
>>> # Insert at a specific position
>>> colors.insert(1, "orange")  # Insert at index 1
>>> print(colors)
>>> 
>>> # Remove items
>>> colors.remove("yellow")  # Remove first occurrence
>>> print(colors)
>>> 
>>> # Remove and return last item
>>> last_color = colors.pop()
>>> print(last_color)
>>> print(colors)
```

<PythonREPL />

### List Slicing

Like strings, you can extract portions of lists:

```pycon
>>> numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> 
>>> print(numbers[2:5])    # Items at indices 2, 3, 4
>>> print(numbers[:3])     # First three items
>>> print(numbers[7:])     # From index 7 to end
>>> print(numbers[::2])    # Every other item
>>> print(numbers[::-1])   # Reverse the list
>>> 
>>> # You can assign to slices!
>>> numbers[2:5] = [20, 30, 40]
>>> print(numbers)
```

<PythonREPL />

### Useful List Operations

```pycon
>>> grades = [85, 92, 78, 95, 88]
>>> 
>>> # Length of list
>>> print(len(grades))
>>> 
>>> # Check membership
>>> print(92 in grades)
>>> print(100 in grades)
>>> 
>>> # Mathematical operations (with number lists)
>>> print(sum(grades))
>>> print(max(grades))
>>> print(min(grades))
>>> average = sum(grades) / len(grades)
>>> print(f"Average: {average:.2f}")
>>> 
>>> # Sorting
>>> grades.sort()  # Sorts in-place (modifies the original)
>>> print(grades)
>>> 
>>> # Or create a new sorted list
>>> names = ["Charlie", "Alice", "Bob"]
>>> sorted_names = sorted(names)  # Returns new list
>>> print(names)  # Original unchanged
>>> print(sorted_names)
```

<PythonREPL />

### List Methods

Lists have many useful methods:

```pycon
>>> tasks = ["read", "write", "review"]
>>> 
>>> # Add multiple items
>>> tasks.extend(["edit", "submit"])
>>> print(tasks)
>>> 
>>> # Count occurrences
>>> numbers = [1, 2, 3, 2, 2, 4]
>>> print(numbers.count(2))  # How many 2s?
>>> 
>>> # Find index of item
>>> print(tasks.index("write"))
>>> 
>>> # Reverse the list
>>> tasks.reverse()
>>> print(tasks)
>>> 
>>> # Clear all items
>>> tasks.clear()
>>> print(tasks)  # Empty list
```

<PythonREPL />

## Dictionaries: Labeled Data

While lists are great for ordered sequences, sometimes you need to organize data with meaningful labels rather than numeric positions. This is where **dictionaries** come in.

A dictionary is a collection of **key-value pairs**. Instead of accessing items by position (index), you access them by name (key). Think of it like a real dictionary where you look up a word (key) to find its definition (value).

### Creating Dictionaries

Dictionaries use curly braces `{}` with key-value pairs separated by colons:

```pycon
>>> # Empty dictionary
>>> empty_dict = {}
>>> 
>>> # Student information
>>> student = {
>>>     "name": "Ada Lovelace",
>>>     "age": 36,
>>>     "major": "Mathematics",
>>>     "gpa": 3.9,
>>>     "enrolled": True
>>> }
>>> 
>>> # Dictionary with different key types (usually strings though)
>>> mixed_keys = {
>>>     "name": "Example",
>>>     42: "the answer",
>>>     3.14: "pi approximation"
>>> }
```

<PythonREPL />

**Important notes:**
- Keys must be unique (no duplicates)
- Keys must be immutable (strings, numbers, tuples)
- Values can be any type, including lists or other dictionaries
- Order is preserved in Python 3.7+ (but don't rely on it for logic)

### Accessing Dictionary Values

Use square brackets with the key:

```pycon
>>> person = {
>>>     "first_name": "Marie",
>>>     "last_name": "Curie",
>>>     "field": "Physics",
>>>     "nobel_prizes": 2
>>> }
>>> 
>>> print(person["first_name"])
>>> print(person["field"])
>>> 
>>> # Accessing a non-existent key causes an error:
>>> # print(person["middle_name"])  # KeyError!
>>> 
>>> # Safer access with .get()
>>> print(person.get("middle_name"))  # Returns None if not found
>>> print(person.get("middle_name", "N/A"))  # Provide default value
```

<PythonREPL />

### Modifying Dictionaries

```pycon
>>> course = {
>>>     "code": "PYTHON101",
>>>     "title": "Intro to Python",
>>>     "credits": 3
>>> }
>>> 
>>> # Add or update values
>>> course["instructor"] = "Dr. Smith"
>>> course["credits"] = 4  # Update existing
>>> print(course)
>>> 
>>> # Remove items
>>> del course["credits"]  # Using del keyword
>>> print(course)
>>> 
>>> # Or use pop() to remove and return value
>>> instructor = course.pop("instructor")
>>> print(instructor)
>>> print(course)
```

<PythonREPL />

### Dictionary Methods

```pycon
>>> inventory = {
>>>     "apples": 5,
>>>     "bananas": 3,
>>>     "oranges": 2
>>> }
>>> 
>>> # Get all keys
>>> print(inventory.keys())
>>> print(list(inventory.keys()))  # Convert to list
>>> 
>>> # Get all values
>>> print(inventory.values())
>>> 
>>> # Get all key-value pairs
>>> print(inventory.items())
>>> 
>>> # Update multiple values at once
>>> inventory.update({"apples": 10, "pears": 4})
>>> print(inventory)
>>> 
>>> # Clear all items
>>> inventory.clear()
>>> print(inventory)
```

<PythonREPL />

## Combining Lists and Dictionaries

The real power comes from combining these structures. Here are common patterns:

### List of Dictionaries

Perfect for tabular data where each item has the same fields:

```pycon
>>> # Student records
>>> students = [
>>>     {"name": "Alice", "grade": 92, "major": "CS"},
>>>     {"name": "Bob", "grade": 85, "major": "Math"},
>>>     {"name": "Charlie", "grade": 88, "major": "CS"}
>>> ]
>>> 
>>> # Access individual records
>>> print(students[0])  # First student
>>> print(students[0]["name"])  # First student's name
>>> 
>>> # Add a new student
>>> students.append({"name": "Diana", "grade": 95, "major": "Physics"})
>>> 
>>> # Find average grade
>>> total = sum(student["grade"] for student in students)
>>> average = total / len(students)
>>> print(f"Class average: {average:.1f}")
```

<PythonREPL />

### Dictionary of Lists

Useful for grouping related items:

```pycon
>>> # Organize books by genre
>>> library = {
>>>     "fiction": ["1984", "Dune", "Foundation"],
>>>     "non_fiction": ["Educated", "Cosmos"],
>>>     "poetry": ["Leaves of Grass", "The Wasteland"]
>>> }
>>> 
>>> # Add a book to a genre
>>> library["fiction"].append("Neuromancer")
>>> 
>>> # Check all fiction books
>>> print("Fiction books:", library["fiction"])
>>> 
>>> # Count total books
>>> total_books = sum(len(books) for books in library.values())
>>> print(f"Total books: {total_books}")
```

<PythonREPL />

### Nested Dictionaries

For hierarchical data:

```pycon
>>> # University structure
>>> university = {
>>>     "name": "State University",
>>>     "departments": {
>>>         "Computer Science": {
>>>             "faculty": 25,
>>>             "students": 300,
>>>             "courses": ["CS101", "CS102", "CS201"]
>>>         },
>>>         "Mathematics": {
>>>             "faculty": 20,
>>>             "students": 250,
>>>             "courses": ["MATH101", "MATH102", "MATH201"]
>>>         }
>>>     }
>>> }
>>> 
>>> # Navigate the structure
>>> print(university["departments"]["Computer Science"]["faculty"])
>>> 
>>> # Add a new course
>>> university["departments"]["Mathematics"]["courses"].append("MATH301")
```

<PythonREPL />

## Review Questions

What will `[1, 2, 3][1]` return?

<Quiz>
- 1
- 2*
- 3
- Error
</Quiz>

How do you add an item to the end of a list called `my_list`?

<Quiz>
- my_list.add(item)
- my_list.append(item)*
- my_list.insert(item)
- my_list += item
</Quiz>

What happens when you try to access a dictionary key that doesn't exist?

<Quiz>
- Returns None
- Returns 0
- Returns empty string
- Raises KeyError*
</Quiz>

Which of these can be a dictionary key? (Select all that apply)

<Quiz>
- "name"*
- 42*
- [1, 2, 3]
- 3.14*
- {"a": 1}
- (1, 2)*
</Quiz>

## Challenges

1. **Grade Manager:** Create a list of student dictionaries (name, grades list). Calculate each student's average and add it as a new field. Find the student with the highest average.

2. **Word Frequency Counter:** Given a sentence, create a dictionary that counts how many times each word appears. Handle case-insensitivity.

3. **Shopping Cart:** Create a shopping cart system using a dictionary where keys are item names and values are dictionaries containing price and quantity. Calculate the total cost.

### Challenge 1: Grade Manager
<Secret>
```python
# Grade Manager
students = [
    {"name": "Alice", "grades": [92, 88, 95, 90]},
    {"name": "Bob", "grades": [78, 85, 82, 88]},
    {"name": "Charlie", "grades": [95, 92, 98, 94]},
    {"name": "Diana", "grades": [88, 90, 87, 91]}
]

# Calculate averages
for student in students:
    grades = student["grades"]
    student["average"] = sum(grades) / len(grades)
    print(f"{student['name']}: {student['average']:.1f}")

# Find top student
top_student = max(students, key=lambda s: s["average"])
print(f"\nTop student: {top_student['name']} with {top_student['average']:.1f}")
```
</Secret>

### Challenge 2: Word Frequency Counter
<Secret>
```python
# Word Frequency Counter
sentence = "The quick brown fox jumps over the lazy dog The fox is quick"

# Convert to lowercase and split into words
words = sentence.lower().split()

# Count frequencies
word_count = {}
for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Or more elegantly:
# word_count = {}
# for word in words:
#     word_count[word] = word_count.get(word, 0) + 1

print("Word frequencies:")
for word, count in word_count.items():
    print(f"{word}: {count}")
```
</Secret>

### Challenge 3: Shopping Cart
<Secret>
```python
# Shopping Cart System
cart = {
    "apples": {"price": 0.50, "quantity": 6},
    "bread": {"price": 2.50, "quantity": 2},
    "milk": {"price": 3.00, "quantity": 1},
    "cheese": {"price": 5.00, "quantity": 1}
}

print("Shopping Cart:")
print("-" * 40)
total = 0

for item, details in cart.items():
    item_cost = details["price"] * details["quantity"]
    total += item_cost
    print(f"{item:15} ${details['price']:5.2f} x {details['quantity']:2} = ${item_cost:6.2f}")

print("-" * 40)
print(f"{'Total:':15} ${total:6.2f}")
```
</Secret>

## Key Terms

- List
- Index / Indexing
- Zero-based indexing
- Mutable vs Immutable
- Slice / Slicing
- `.append()`, `.insert()`, `.remove()`, `.pop()`
- `.sort()` vs `sorted()`
- Dictionary
- Key-value pair
- `.keys()`, `.values()`, `.items()`
- `.get()`
- Nested data structures


# Control Flow: Making Decisions and Repeating Actions

So far, our programs have been linear—they execute from top to bottom, line by line. But real programs need to make decisions and repeat actions. This is called **control flow**, and it's what transforms simple scripts into intelligent programs.

## Conditional Statements: Making Decisions

Life is full of decisions: "If it's raining, take an umbrella." "If the data is valid, process it; otherwise, show an error." Python programs make decisions the same way, using `if` statements.

### The Basic `if` Statement

The simplest decision is "if this is true, do something":

```pycon
>>> temperature = 22
>>> 
>>> if temperature > 20:
>>>     print("It's warm today!")
>>>     print("No jacket needed.")
>>> 
>>> print("Have a nice day!")  # This always runs
```

<PythonREPL />

**Critical points:**
- The condition (`temperature > 20`) must evaluate to `True` or `False`
- The colon `:` at the end of the `if` line is required
- The indented block only runs if the condition is `True`
- **Indentation matters!** Python uses indentation to define blocks of code

### Comparison Operators

These operators create boolean values for our conditions:

```pycon
>>> x = 10
>>> y = 5
>>> 
>>> print(x == y)   # Equal to
>>> print(x != y)   # Not equal to
>>> print(x > y)    # Greater than
>>> print(x < y)    # Less than
>>> print(x >= y)   # Greater than or equal to
>>> print(x <= y)   # Less than or equal to
>>> 
>>> # String comparisons work alphabetically
>>> print("apple" < "banana")  # True
>>> print("Zoo" < "ant")  # Capital letters come before lowercase!
```

<PythonREPL />

**Common mistake:** Using `=` instead of `==`
- `=` is assignment (storing a value)
- `==` is comparison (checking equality)

### Adding `else`: Either/Or Decisions

Often you want to do one thing if a condition is true, and something else if it's false:

```pycon
>>> age = int(input("Enter your age: "))
>>> 
>>> if age >= 18:
>>>     print("You are an adult.")
>>>     print("You can vote!")
>>> else:
>>>     print("You are a minor.")
>>>     print(f"You can vote in {18 - age} years.")
```

<PythonREPL />

### Multiple Conditions with `elif`

For more than two possibilities, use `elif` (short for "else if"):

```pycon
>>> score = 85
>>> 
>>> if score >= 90:
>>>     grade = "A"
>>> elif score >= 80:
>>>     grade = "B"
>>> elif score >= 70:
>>>     grade = "C"
>>> elif score >= 60:
>>>     grade = "D"
>>> else:
>>>     grade = "F"
>>> 
>>> print(f"Your grade is: {grade}")
```

<PythonREPL />

Python checks conditions from top to bottom and executes the first block where the condition is `True`. Once a condition matches, the rest are skipped.

### Combining Conditions

Use logical operators to combine multiple conditions:

```pycon
>>> age = 25
>>> has_license = True
>>> 
>>> # AND: Both conditions must be true
>>> if age >= 18 and has_license:
>>>     print("You can rent a car!")
>>> 
>>> # OR: At least one condition must be true
>>> weekend = False
>>> holiday = True
>>> if weekend or holiday:
>>>     print("No work today!")
>>> 
>>> # NOT: Inverts the condition
>>> raining = False
>>> if not raining:
>>>     print("Let's go for a walk!")
```

<PythonREPL />

### Nested Conditions

You can put `if` statements inside other `if` statements:

```pycon
>>> has_ticket = True
>>> age = 15
>>> 
>>> if has_ticket:
>>>     print("You have a ticket!")
>>>     if age >= 17:
>>>         print("You can see the R-rated movie.")
>>>     else:
>>>         print("You can only see PG-13 or below.")
>>> else:
>>>     print("You need to buy a ticket first.")
```

<PythonREPL />

But be careful—too much nesting makes code hard to read. Often you can simplify with `and`/`or`.

## Loops: Repeating Actions

Imagine you need to print "Hello" 100 times. You could write 100 print statements, but that's ridiculous. Loops let you repeat code efficiently.

### The `for` Loop: Iterating Over Collections

The `for` loop is Python's workhorse for repetition. It iterates (goes through) each item in a collection:

```pycon
>>> # Loop through a list
>>> fruits = ["apple", "banana", "cherry"]
>>> for fruit in fruits:
>>>     print(f"I like {fruit}!")
>>> 
>>> # Loop through a string (each character)
>>> for letter in "Hello":
>>>     print(letter)
>>> 
>>> # Loop through dictionary keys
>>> scores = {"Alice": 92, "Bob": 85, "Charlie": 88}
>>> for name in scores:
>>>     print(f"{name} scored {scores[name]}")
```

<PythonREPL />

The loop variable (`fruit`, `letter`, `name`) takes on each value in turn. You can name it anything, but choose descriptive names.

### The `range()` Function

What if you just want to repeat something a certain number of times? Use `range()`:

```pycon
>>> # range(n) generates numbers from 0 to n-1
>>> for i in range(5):
>>>     print(f"This is iteration {i}")
>>> 
>>> # range(start, stop) generates from start to stop-1
>>> for num in range(1, 6):
>>>     print(f"Counting: {num}")
>>> 
>>> # range(start, stop, step) with custom step
>>> for even in range(0, 11, 2):
>>>     print(even, end=" ")  # Print on same line
```

<PythonREPL />

**Important:** `range(5)` generates 0, 1, 2, 3, 4 (not 5!). This matches Python's zero-based indexing.

### Looping with Indices

Sometimes you need both the item and its position:

```pycon
>>> colors = ["red", "green", "blue"]
>>> 
>>> # Method 1: Using range and len
>>> for i in range(len(colors)):
>>>     print(f"{i}: {colors[i]}")
>>> 
>>> # Method 2: Using enumerate (more Pythonic!)
>>> for i, color in enumerate(colors):
>>>     print(f"{i}: {color}")
>>> 
>>> # Start enumeration at 1 instead of 0
>>> for num, color in enumerate(colors, 1):
>>>     print(f"Color #{num}: {color}")
```

<PythonREPL />

### The `while` Loop: Conditional Repetition

The `while` loop continues as long as a condition is true:

```pycon
>>> count = 0
>>> while count < 5:
>>>     print(f"Count is {count}")
>>>     count += 1  # Don't forget to update the condition!
>>> 
>>> # Useful for input validation
>>> password = ""
>>> while password != "secret":
>>>     password = input("Enter password: ")
>>>     if password != "secret":
>>>         print("Wrong password, try again!")
>>> print("Access granted!")
```

<PythonREPL />

**Warning:** If the condition never becomes `False`, you get an infinite loop! Always ensure the loop will eventually end.

### Loop Control: `break` and `continue`

Sometimes you need to exit a loop early or skip certain iterations:

```pycon
>>> # break: Exit the loop immediately
>>> for i in range(10):
>>>     if i == 5:
>>>         break
>>>     print(i)  # Prints 0, 1, 2, 3, 4
>>> 
>>> # continue: Skip the rest of this iteration
>>> for i in range(5):
>>>     if i == 2:
>>>         continue
>>>     print(i)  # Prints 0, 1, 3, 4 (skips 2)
>>> 
>>> # Practical example: Find first negative number
>>> numbers = [4, 8, -2, 5, -7, 3]
>>> for num in numbers:
>>>     if num < 0:
>>>         print(f"Found negative: {num}")
>>>         break
>>> else:  # This else belongs to the for loop!
>>>     print("No negative numbers found")
```

<PythonREPL />

### Nested Loops

Loops can contain other loops:

```pycon
>>> # Multiplication table
>>> for i in range(1, 4):
>>>     for j in range(1, 4):
>>>         result = i * j
>>>         print(f"{i} x {j} = {result}")
>>>     print()  # Empty line between sets
>>> 
>>> # Processing nested data
>>> matrix = [[1, 2, 3],
>>>            [4, 5, 6],
>>>            [7, 8, 9]]
>>> 
>>> for row in matrix:
>>>     for value in row:
>>>         print(value, end=" ")
>>>     print()  # New line after each row
```

<PythonREPL />

## Common Patterns

### Accumulation Pattern

Building up a result over iterations:

```pycon
>>> # Sum numbers
>>> numbers = [10, 20, 30, 40, 50]
>>> total = 0  # Initialize accumulator
>>> for num in numbers:
>>>     total += num
>>> print(f"Sum: {total}")
>>> 
>>> # Build a string
>>> words = ["Python", "is", "awesome"]
>>> sentence = ""  # Initialize accumulator
>>> for word in words:
>>>     sentence += word + " "
>>> print(sentence.strip())  # Remove trailing space
```

<PythonREPL />

### Filtering Pattern

Selecting items that meet a condition:

```pycon
>>> # Find all even numbers
>>> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> evens = []  # Initialize empty result list
>>> for num in numbers:
>>>     if num % 2 == 0:
>>>         evens.append(num)
>>> print(f"Even numbers: {evens}")
>>> 
>>> # Or using list comprehension (advanced but elegant!)
>>> evens = [num for num in numbers if num % 2 == 0]
>>> print(f"Even numbers: {evens}")
```

<PythonREPL />

## Review Questions

What is the output of this code?
```python
x = 10
if x > 5:
    print("A")
elif x > 0:
    print("B")
else:
    print("C")
```

<Quiz>
- A*
- B
- A and B
- C
</Quiz>

How many times will this loop print "Hello"?
```python
for i in range(3, 8):
    print("Hello")
```

<Quiz>
- 3
- 5*
- 6
- 8
</Quiz>

What does the `continue` statement do in a loop?

<Quiz>
- Exits the loop completely
- Skips to the next iteration*
- Pauses the loop
- Restarts the loop from beginning
</Quiz>

Which operator checks if two values are equal?

<Quiz>
- =
- ==*
- !=
- >=
</Quiz>

## Challenges

1. **FizzBuzz:** Write a program that prints numbers from 1 to 30. But for multiples of 3, print "Fizz" instead of the number, for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz".

2. **Prime Checker:** Write a program that checks if a number is prime (only divisible by 1 and itself). Use a loop to check all potential divisors.

3. **Password Validator:** Create a program that keeps asking for a password until the user enters one that meets all requirements: at least 8 characters, contains both uppercase and lowercase, and has at least one digit.

### Challenge 1: FizzBuzz
<Secret>
```python
# FizzBuzz Solution
for num in range(1, 31):
    if num % 3 == 0 and num % 5 == 0:
        print("FizzBuzz")
    elif num % 3 == 0:
        print("Fizz")
    elif num % 5 == 0:
        print("Buzz")
    else:
        print(num)
```
</Secret>

### Challenge 2: Prime Checker
<Secret>
```python
# Prime Checker Solution
number = int(input("Enter a number to check: "))

if number < 2:
    print(f"{number} is not prime")
else:
    is_prime = True
    for divisor in range(2, number):
        if number % divisor == 0:
            is_prime = False
            break
    
    if is_prime:
        print(f"{number} is prime!")
    else:
        print(f"{number} is not prime")

# More efficient version (only check up to square root)
# import math
# for divisor in range(2, int(math.sqrt(number)) + 1):
```

</Secret>

### Challenge 3: Password Validator
<Secret>
```python
# Password Validator Solution
while True:
    password = input("Enter a password: ")
    
    # Check all requirements
    has_min_length = len(password) >= 8
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    
    if all([has_min_length, has_upper, has_lower, has_digit]):
        print("Password accepted!")
        break
    else:
        print("Password does not meet requirements:")
        if not has_min_length:
            print("- Must be at least 8 characters")
        if not has_upper:
            print("- Must contain uppercase letter")
        if not has_lower:
            print("- Must contain lowercase letter")
        if not has_digit:
            print("- Must contain a digit")
        print("Try again.\n")
```

</Secret>

## Key Terms

- Control flow
- Conditional statement
- `if`, `elif`, `else`
- Comparison operators (`==`, `!=`, `>`, `<`, `>=`, `<=`)
- Logical operators (`and`, `or`, `not`)
- Loop
- `for` loop
- `while` loop
- `range()`
- `enumerate()`
- `break`, `continue`
- Iteration
- Infinite loop
- Nested loops

# Functions: Building Reusable Code

As your programs grow, you'll find yourself writing similar code in multiple places. Maybe you're calculating averages in three different parts of your program, or validating user input in several locations. Functions let you write code once and use it many times, making your programs cleaner, more reliable, and easier to understand.

## What Are Functions?

A **function** is a named block of code that performs a specific task. Think of it as a mini-program within your program. We've already used built-in functions like `print()`, `len()`, and `input()`. Now we'll create our own.

Functions are like recipes:
- They have a name (like "make_pancakes")
- They might need ingredients (parameters/inputs)
- They contain steps (the code)
- They might produce something (return value)

### Basic Function Structure

Functions are defined using the `def` keyword:

```pycon
>>> # Define a simple function
>>> def greet():
>>>     """Display a friendly greeting."""
>>>     print("Hello!")
>>>     print("Welcome to Python programming!")
>>> 
>>> # Defining doesn't run the function - it just creates it
>>> # To run it, you must "call" it:
>>> greet()
```

<PythonREPL />

Key points:
- `def` starts the definition
- Function name follows Python naming conventions (lowercase, underscores)
- Parentheses `()` are required, even if empty
- Colon `:` ends the first line
- Function body is indented
- The triple-quoted string is a **docstring** (documentation)

### Functions with Parameters

Most functions need information to work with. **Parameters** are variables that receive values when the function is called:

```pycon
>>> def greet_person(name):
>>>     """Greet a person by name."""
>>>     print(f"Hello, {name}!")
>>>     print(f"Nice to meet you, {name}.")
>>> 
>>> # Call with different arguments
>>> greet_person("Alice")
>>> greet_person("Bob")
>>> 
>>> # The value you pass is called an "argument"
>>> user = "Charlie"
>>> greet_person(user)
```

<PythonREPL />

Multiple parameters are separated by commas:

```pycon
>>> def introduce(first_name, last_name, age):
>>>     """Introduce a person with their full name and age."""
>>>     print(f"This is {first_name} {last_name}.")
>>>     print(f"They are {age} years old.")
>>> 
>>> introduce("Ada", "Lovelace", 36)
>>> introduce("Alan", "Turing", 41)
```

<PythonREPL />

### Return Values

Functions can send data back using `return`:

```pycon
>>> def add_numbers(a, b):
>>>     """Add two numbers and return the result."""
>>>     result = a + b
>>>     return result
>>> 
>>> # Store the returned value
>>> sum1 = add_numbers(5, 3)
>>> print(f"5 + 3 = {sum1}")
>>> 
>>> # Use the returned value directly
>>> print(f"10 + 20 = {add_numbers(10, 20)}")
>>> 
>>> # You can return any type of data
>>> def get_info():
>>>     """Return a dictionary of information."""
>>>     return {"name": "Python", "version": 3.11, "awesome": True}
>>> 
>>> info = get_info()
>>> print(info["name"])
```

<PythonREPL />

**Important:** When a function hits `return`, it immediately exits:

```pycon
>>> def check_age(age):
>>>     """Check if someone is an adult."""
>>>     if age >= 18:
>>>         return "Adult"
>>>     return "Minor"  # Only runs if first return didn't happen
>>> 
>>> print(check_age(25))
>>> print(check_age(16))
```

<PythonREPL />

Functions without explicit `return` statements return `None`:

```pycon
>>> def say_hello():
>>>     print("Hello!")
>>>     # No return statement
>>> 
>>> result = say_hello()  # Prints "Hello!"
>>> print(result)  # Prints "None"
```

<PythonREPL />

### Default Parameters

You can give parameters default values, making them optional:

```pycon
>>> def greet(name="World", punctuation="!"):
>>>     """Greet someone with customizable punctuation."""
>>>     print(f"Hello, {name}{punctuation}")
>>> 
>>> greet()  # Uses both defaults
>>> greet("Alice")  # Uses default punctuation
>>> greet("Bob", "?")  # Overrides both
>>> greet(punctuation="...")  # Named argument, skips name
```

<PythonREPL />

Parameters with defaults must come after parameters without defaults.

### Variable Scope

Variables created inside functions are **local** - they only exist within that function:

```pycon
>>> def calculate():
>>>     # This 'result' is local to the function
>>>     result = 10 + 20
>>>     return result
>>> 
>>> answer = calculate()
>>> print(answer)  # Works - this is the returned value
>>> # print(result)  # Error! 'result' doesn't exist outside the function
>>> 
>>> # Global vs local variables
>>> name = "Global Alice"  # Global variable
>>> 
>>> def change_name():
>>>     name = "Local Bob"  # Creates a new local variable
>>>     print(f"Inside function: {name}")
>>> 
>>> change_name()
>>> print(f"Outside function: {name}")  # Global unchanged
```

<PythonREPL />

This isolation is a feature, not a bug! It prevents functions from accidentally interfering with each other.

## Why Functions Matter

### 1. Code Reuse

Without functions, you repeat code:

```python
# Bad: Repetitive code
student1_grades = [85, 92, 88, 90, 87]
total1 = sum(student1_grades)
average1 = total1 / len(student1_grades)
print(f"Student 1 average: {average1:.1f}")

student2_grades = [78, 85, 82, 88, 84]
total2 = sum(student2_grades)
average2 = total2 / len(student2_grades)
print(f"Student 2 average: {average2:.1f}")

# Good: Using a function
def calculate_average(grades):
    """Calculate the average of a list of grades."""
    return sum(grades) / len(grades)

student1_grades = [85, 92, 88, 90, 87]
print(f"Student 1 average: {calculate_average(student1_grades):.1f}")

student2_grades = [78, 85, 82, 88, 84]
print(f"Student 2 average: {calculate_average(student2_grades):.1f}")
```

### 2. Organization

Functions make code readable and organized:

```python
def load_data(filename):
    """Load data from a file."""
    # Code to load data
    pass

def clean_data(data):
    """Clean and prepare data for analysis."""
    # Code to clean data
    pass

def analyze_data(data):
    """Perform statistical analysis."""
    # Code to analyze
    pass

def create_report(results):
    """Generate a report from results."""
    # Code to create report
    pass

# Main program is now very clear:
raw_data = load_data("survey_results.csv")
clean_data = clean_data(raw_data)
results = analyze_data(clean_data)
create_report(results)
```

### 3. Testing and Debugging

Functions can be tested independently:

```python
def is_valid_email(email):
    """Check if an email address is valid."""
    if "@" not in email:
        return False
    if email.count("@") != 1:
        return False
    parts = email.split("@")
    if len(parts[0]) == 0 or len(parts[1]) == 0:
        return False
    if "." not in parts[1]:
        return False
    return True

# Easy to test:
print(is_valid_email("user@example.com"))  # True
print(is_valid_email("invalid.email"))     # False
print(is_valid_email("@example.com"))      # False
print(is_valid_email("user@"))             # False
```

## Common Function Patterns

### Validation Functions

Functions that check if something is valid:

```pycon
>>> def is_positive(number):
>>>     """Check if a number is positive."""
>>>     return number > 0
>>> 
>>> def is_valid_age(age):
>>>     """Check if age is in valid range."""
>>>     return 0 <= age <= 120
>>> 
>>> def is_strong_password(password):
>>>     """Check password strength."""
>>>     if len(password) < 8:
>>>         return False
>>>     has_upper = any(c.isupper() for c in password)
>>>     has_lower = any(c.islower() for c in password)
>>>     has_digit = any(c.isdigit() for c in password)
>>>     return has_upper and has_lower and has_digit
```

<PythonREPL />

### Transformation Functions

Functions that convert data from one form to another:

```pycon
>>> def celsius_to_fahrenheit(celsius):
>>>     """Convert Celsius to Fahrenheit."""
>>>     return celsius * 9/5 + 32
>>> 
>>> def format_name(first, last):
>>>     """Format a name as 'Last, First'."""
>>>     return f"{last}, {first}"
>>> 
>>> def clean_text(text):
>>>     """Clean and normalize text."""
>>>     return text.strip().lower().replace("  ", " ")
```

<PythonREPL />

### Aggregation Functions

Functions that summarize collections:

```pycon
>>> def calculate_statistics(numbers):
>>>     """Calculate mean, min, and max of numbers."""
>>>     if not numbers:
>>>         return None
>>>     return {
>>>         "mean": sum(numbers) / len(numbers),
>>>         "min": min(numbers),
>>>         "max": max(numbers),
>>>         "count": len(numbers)
>>>     }
>>> 
>>> stats = calculate_statistics([10, 20, 30, 40, 50])
>>> print(f"Average: {stats['mean']}")
```

<PythonREPL />

## Review Questions

What does a function return if it has no explicit `return` statement?

<Quiz>
- 0
- False
- None*
- Error
</Quiz>

Which statement about function parameters is correct?

<Quiz>
- Parameters with defaults must come before parameters without defaults
- Parameters with defaults must come after parameters without defaults*
- All parameters must have defaults
- No parameters can have defaults
</Quiz>

What happens to variables created inside a function?

<Quiz>
- They become global variables
- They are only accessible within that function*
- They replace global variables with the same name
- They cause an error
</Quiz>

When does a function stop executing?

<Quiz>
- When it reaches the end of its code block*
- When it encounters a return statement*
- When it encounters an error*
- Only when the program ends
</Quiz>

## Challenges

1. **Temperature Converter Functions:** Create two functions: `celsius_to_fahrenheit(c)` and `fahrenheit_to_celsius(f)`. Then create a third function `convert_temperature(value, unit)` that uses the appropriate conversion based on the unit ("C" or "F").

2. **Data Validator:** Write a function `validate_data(data_dict)` that takes a dictionary with keys "name", "age", and "email". It should return a dictionary with validation results for each field.

3. **Statistics Calculator:** Create a function `analyze_grades(grades_list)` that returns a dictionary containing the mean, median, highest, lowest, and pass rate (percentage >= 60).

### Challenge 1: Temperature Converter
<Secret>
```python
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return celsius * 9/5 + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9

def convert_temperature(value, unit):
    """Convert temperature to the opposite unit."""
    unit = unit.upper()
    if unit == "C":
        result = celsius_to_fahrenheit(value)
        return f"{value}°C = {result:.1f}°F"
    elif unit == "F":
        result = fahrenheit_to_celsius(value)
        return f"{value}°F = {result:.1f}°C"
    else:
        return "Invalid unit. Use 'C' or 'F'"

# Test the functions
print(convert_temperature(100, "C"))  # Boiling point
print(convert_temperature(32, "F"))   # Freezing point
print(convert_temperature(37, "C"))   # Body temperature
```
</Secret>

### Challenge 2: Data Validator
<Secret>
```python
def validate_data(data_dict):
    """Validate user data dictionary."""
    results = {}
    
    # Validate name
    if "name" in data_dict:
        name = data_dict["name"]
        if isinstance(name, str) and len(name.strip()) > 0:
            results["name"] = "Valid"
        else:
            results["name"] = "Invalid: Name must be non-empty string"
    else:
        results["name"] = "Missing"
    
    # Validate age
    if "age" in data_dict:
        age = data_dict["age"]
        if isinstance(age, (int, float)) and 0 <= age <= 120:
            results["age"] = "Valid"
        else:
            results["age"] = "Invalid: Age must be between 0 and 120"
    else:
        results["age"] = "Missing"
    
    # Validate email
    if "email" in data_dict:
        email = data_dict["email"]
        if isinstance(email, str) and "@" in email and "." in email.split("@")[1]:
            results["email"] = "Valid"
        else:
            results["email"] = "Invalid: Email format incorrect"
    else:
        results["email"] = "Missing"
    
    return results

# Test cases
test1 = {"name": "Alice", "age": 25, "email": "alice@example.com"}
test2 = {"name": "", "age": 150, "email": "invalid"}
test3 = {"name": "Bob", "age": 30}  # Missing email

print(validate_data(test1))
print(validate_data(test2))
print(validate_data(test3))
```
</Secret>

### Challenge 3: Statistics Calculator
<Secret>
```python
def analyze_grades(grades_list):
    """Analyze a list of grades and return statistics."""
    if not grades_list:
        return None
    
    # Sort for median calculation
    sorted_grades = sorted(grades_list)
    n = len(sorted_grades)
    
    # Calculate median
    if n % 2 == 0:
        median = (sorted_grades[n//2 - 1] + sorted_grades[n//2]) / 2
    else:
        median = sorted_grades[n//2]
    
    # Calculate pass rate
    passing = [g for g in grades_list if g >= 60]
    pass_rate = (len(passing) / len(grades_list)) * 100
    
    return {
        "mean": sum(grades_list) / len(grades_list),
        "median": median,
        "highest": max(grades_list),
        "lowest": min(grades_list),
        "pass_rate": pass_rate,
        "total_students": len(grades_list)
    }

# Test the function
grades = [78, 92, 45, 88, 67, 73, 85, 90, 52, 95]
stats = analyze_grades(grades)
for key, value in stats.items():
    if isinstance(value, float):
        print(f"{key}: {value:.1f}")
    else:
        print(f"{key}: {value}")
```
</Secret>

## Key Terms

- Function
- `def` keyword
- Parameter vs Argument
- `return` statement
- Docstring
- Default parameter
- Scope (local vs global)
- Function call
- None return value


# Your Local Python Environment

Up until now, we've been working in the browser-based Python REPL. It's been perfect for learning the basics, but it's time to level up. We're going to set up Python on your own computer, which opens up a whole new world of possibilities.

## Why Go Local?

Working on your own computer—what programmers call working "locally"—is like the difference between cooking in someone else's kitchen versus your own. When you work locally, you can:

- **Save your work permanently:** Create actual Python files (.py) that persist
- **Work with your own data:** Process files from your research
- **Install powerful libraries:** Access thousands of specialized tools
- **Use professional development tools:** Code editors, debuggers, version control
- **Build real projects:** Create applications you can share with others

This transition might feel like a big step, but don't worry—we'll go through it together, step by step.

## What We'll Install

We need three essential tools for professional Python development:

1. **Python itself:** The interpreter that runs your code
2. **pip:** Python's package manager for installing libraries
3. **Visual Studio Code (VS Code):** A free, powerful code editor

Think of it this way:
- Python is like having a fully equipped workshop
- pip is like having access to a tool store where you can get specialized equipment
- VS Code is like having a well-organized workbench with good lighting

## Step 1: Installing Python

### For Windows Users

1. **Download Python:**
   - Go to [python.org/downloads](https://python.org/downloads)
   - Click the big yellow button to download the latest version
   - The site automatically detects you're on Windows

2. **Run the Installer:**
   - Double-click the downloaded file
   - **CRITICAL:** Check the box that says "Add Python to PATH"
   - This is the most important step! If you miss this, Python won't work from the command line
   - Click "Install Now"
   - Wait for installation to complete

3. **Verify Installation:**
   - Open Command Prompt or PowerShell (search for it in Start menu)
   - Type `python --version` and press Enter
   - You should see something like `Python 3.11.5`
   - If you see an error, Python wasn't added to PATH properly

### For Mac Users

1. **Check if Python is Already Installed:**
   - Open Terminal (find it in Applications > Utilities)
   - Type `python3 --version`
   - If you see a version 3.8 or higher, you're good!

2. **If You Need to Install:**
   - Go to [python.org/downloads](https://python.org/downloads)
   - Download the macOS installer
   - Double-click the .pkg file
   - Follow the installation wizard
   - Verify with `python3 --version` in Terminal

3. **Important Note for Mac:**
   - On Mac, use `python3` instead of `python`
   - Use `pip3` instead of `pip`
   - This avoids conflicts with the older Python 2 that comes with macOS

### For Linux Users

Python usually comes pre-installed on Linux. To check:

```bash
python3 --version
```

If you need to install or update:

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# Fedora
sudo dnf install python3 python3-pip

# Arch
sudo pacman -S python python-pip
```

## Step 2: Understanding pip

**pip** (Pip Installs Packages) is Python's package manager. It's like an app store for Python libraries. When you installed Python, pip came with it automatically.

To verify pip is installed:

```bash
pip --version  # Windows
pip3 --version  # Mac/Linux
```

Common pip commands you'll use:
- `pip install library_name` - Install a library
- `pip list` - See what's installed
- `pip show library_name` - Get info about a library
- `pip uninstall library_name` - Remove a library

## Step 3: Installing Visual Studio Code

VS Code is a free, professional code editor from Microsoft. It's become the most popular choice for Python development.

1. **Download VS Code:**
   - Go to [code.visualstudio.com](https://code.visualstudio.com)
   - Click the download button for your operating system
   - The site auto-detects your OS

2. **Install VS Code:**
   - **Windows:** Run the installer, accept defaults
   - **Mac:** Open the .dmg file, drag VS Code to Applications
   - **Linux:** Follow instructions for your distribution

3. **Install the Python Extension:**
   - Open VS Code
   - Click the Extensions icon in the left sidebar (looks like four squares)
   - Search for "Python"
   - Install the official Python extension by Microsoft
   - This adds Python-specific features like syntax highlighting, debugging, and IntelliSense

## Your First Python File

Let's create your first Python program on your local machine!

1. **Create a Project Folder:**
   - Create a new folder called `python_projects` somewhere easy to find (like Desktop or Documents)
   - This will be your workspace for all Python projects

2. **Open the Folder in VS Code:**
   - Open VS Code
   - Go to File > Open Folder
   - Select your `python_projects` folder

3. **Create a Python File:**
   - Click the New File icon (or File > New File)
   - Name it `hello.py` (the .py extension is important!)

4. **Write Your First Program:**
   ```python
   # hello.py
   # My first Python program running locally!
   
   def greet(name):
       """Greet someone by name."""
       return f"Hello, {name}! Welcome to Python."
   
   # Get user input
   user_name = input("What's your name? ")
   
   # Use our function
   message = greet(user_name)
   print(message)
   
   # Some calculations
   birth_year = int(input("What year were you born? "))
   current_year = 2024
   age = current_year - birth_year
   
   print(f"You are approximately {age} years old.")
   ```

5. **Run Your Program:**
   - In VS Code, right-click in the editor
   - Select "Run Python File in Terminal"
   - Or press the Run button (▶) in the top right
   - You'll see a terminal appear at the bottom with your program running!

## Installing Essential Libraries

Now let's install the libraries we'll need for data science work. Open a terminal (Terminal on Mac/Linux, Command Prompt or PowerShell on Windows) and run these commands:

```bash
# Jupyter for interactive notebooks
pip install jupyter

# Data analysis essentials
pip install pandas numpy

# Visualization libraries
pip install matplotlib seaborn

# Web requests for APIs
pip install requests

# All in one line (if you prefer)
pip install jupyter pandas numpy matplotlib seaborn requests
```

Each library serves a specific purpose:
- **Jupyter:** Interactive notebook environment for exploratory coding
- **pandas:** The powerhouse for data manipulation
- **numpy:** Numerical computing foundation
- **matplotlib:** Basic plotting library
- **seaborn:** Statistical data visualization
- **requests:** For fetching data from the web

## Troubleshooting Common Issues

### "Python is not recognized" (Windows)
- You didn't check "Add Python to PATH" during installation
- Solution: Reinstall Python, making sure to check that box

### "pip: command not found"
- pip isn't in your system PATH
- Try `python -m pip` instead of just `pip`
- Or `python3 -m pip` on Mac/Linux

### "Permission denied" errors
- On Mac/Linux, you might need to use `pip3 install --user library_name`
- This installs for your user only, not system-wide

### VS Code can't find Python
- Make sure the Python extension is installed
- Click on the Python version in the bottom status bar
- Select the correct Python interpreter

## Review Questions

What does pip stand for?

<Quiz>
- Python Internal Packages
- Pip Installs Packages*
- Python Installation Program
- Package Internet Protocol
</Quiz>

Why is it important to add Python to PATH during installation?

<Quiz>
- It makes Python run faster
- It allows Python to be run from any terminal/command prompt*
- It installs additional features
- It's required for VS Code
</Quiz>

What file extension do Python files use?

<Quiz>
- .python
- .py*
- .pyt
- .txt
</Quiz>

## Key Terms

- Local development
- Python interpreter
- pip (package manager)
- VS Code
- PATH environment variable
- Library/Package
- Terminal/Command Prompt
- File extension (.py)

# Working with Files and Data

Now that you have Python running locally, you can work with actual files on your computer. This is where Python becomes truly powerful for research—you can process hundreds or thousands of files automatically, extract data, and save results.

## File Paths: Finding Your Files

Before you can work with a file, Python needs to know where to find it. A **file path** is like an address for a file on your computer.

### Understanding Paths

There are two types of paths:

1. **Absolute paths:** Complete address from the root of your file system
   - Windows: `C:\Users\YourName\Documents\data.txt`
   - Mac/Linux: `/Users/YourName/Documents/data.txt`

2. **Relative paths:** Address relative to where your Python script is running
   - `data.txt` (file in same folder as your script)
   - `data/survey_results.txt` (file in a subfolder called 'data')
   - `../shared/data.txt` (file in a parent folder's subfolder)

For most projects, use relative paths—they make your code portable.

## Reading Text Files

The most basic file operation is reading text. Python makes this elegant:

```python
# reading_files.py

# Method 1: Simple but not ideal
file = open("sample.txt", "r")  # "r" means read mode
content = file.read()
print(content)
file.close()  # Don't forget to close!

# Method 2: Better - using 'with' (automatically closes file)
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
# File automatically closed when we exit the 'with' block

# Method 3: Read line by line
with open("sample.txt", "r") as file:
    for line in file:
        print(f"Line: {line.strip()}")  # strip() removes newline characters
```

The `with` statement is Python's way of ensuring files are properly closed, even if an error occurs. Always use it for file operations.

## Writing Files

Creating or modifying files is just as straightforward:

```python
# writing_files.py

# Write mode ('w') creates a new file or overwrites existing
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a new file.\n")
    
# Append mode ('a') adds to the end of existing file
with open("output.txt", "a") as file:
    file.write("This line was added later.\n")

# Writing multiple lines at once
lines = [
    "First line",
    "Second line", 
    "Third line"
]

with open("multiple.txt", "w") as file:
    for line in lines:
        file.write(line + "\n")  # Add newline after each
    
    # Or use writelines (but you need to add newlines yourself)
    # file.writelines([line + "\n" for line in lines])
```

## Working with CSV Files

CSV (Comma-Separated Values) files are everywhere in research. While you could parse them manually, Python's `csv` module makes it much easier:

```python
import csv

# Reading CSV files
with open("data.csv", "r") as file:
    csv_reader = csv.reader(file)
    
    # Skip header if needed
    header = next(csv_reader)
    print(f"Columns: {header}")
    
    # Read each row
    for row in csv_reader:
        print(row)  # row is a list

# Reading CSV as dictionaries (more convenient!)
with open("data.csv", "r") as file:
    csv_reader = csv.DictReader(file)
    
    for row in csv_reader:
        # Now row is a dictionary with column names as keys
        print(f"Name: {row['name']}, Age: {row['age']}")

# Writing CSV files
data = [
    ["Name", "Age", "City"],  # Header
    ["Alice", 30, "New York"],
    ["Bob", 25, "Boston"],
    ["Charlie", 35, "Chicago"]
]

with open("output.csv", "w", newline="") as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(data)

# Writing CSV from dictionaries
people = [
    {"name": "Alice", "age": 30, "city": "New York"},
    {"name": "Bob", "age": 25, "city": "Boston"}
]

with open("people.csv", "w", newline="") as file:
    fieldnames = ["name", "age", "city"]
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    csv_writer.writeheader()  # Write column names
    csv_writer.writerows(people)
```

## Introduction to pandas

While the `csv` module works, **pandas** is the professional tool for data analysis. It's like Excel, but programmable and much more powerful.

```python
import pandas as pd

# Reading data is one line!
df = pd.read_csv("data.csv")

# Display first few rows
print(df.head())

# Basic information about your data
print(df.info())  # Column names, types, non-null counts
print(df.describe())  # Statistical summary

# Accessing specific columns
print(df["name"])  # Single column
print(df[["name", "age"]])  # Multiple columns

# Filtering data
adults = df[df["age"] >= 18]
print(adults)

# Adding new columns
df["birth_year"] = 2024 - df["age"]

# Grouping and aggregation
average_age_by_city = df.groupby("city")["age"].mean()
print(average_age_by_city)

# Saving results
df.to_csv("processed_data.csv", index=False)
```

We'll dive much deeper into pandas in upcoming lessons, but you can already see how powerful it is.

## Working with JSON

JSON (JavaScript Object Notation) is the standard format for web APIs and modern data exchange. It looks like Python dictionaries and lists:

```python
import json

# Python data structure
data = {
    "name": "Research Project",
    "year": 2024,
    "participants": [
        {"id": 1, "name": "Alice", "role": "Lead"},
        {"id": 2, "name": "Bob", "role": "Analyst"}
    ],
    "active": True
}

# Writing JSON to file
with open("project.json", "w") as file:
    json.dump(data, file, indent=2)  # indent makes it readable

# Reading JSON from file
with open("project.json", "r") as file:
    loaded_data = json.load(file)
    print(loaded_data["participants"][0]["name"])  # "Alice"

# Converting between JSON strings and Python objects
json_string = '{"name": "Test", "value": 42}'
parsed = json.loads(json_string)  # String to Python
print(parsed["value"])  # 42

back_to_string = json.dumps(parsed)  # Python to string
print(back_to_string)
```

## Error Handling with Files

Files might not exist, might be corrupted, or you might not have permission to access them. Handle these gracefully:

```python
def read_file_safely(filename):
    """Read a file with proper error handling."""
    try:
        with open(filename, "r") as file:
            return file.read()
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
        return None
    except PermissionError:
        print(f"Error: You don't have permission to read '{filename}'.")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

# Usage
content = read_file_safely("maybe_exists.txt")
if content:
    print("File contents:", content)
else:
    print("Could not read file.")
```

## Practical Example: Research Data Pipeline

Let's combine everything into a realistic research scenario:

```python
"""
Research Data Pipeline
Process survey responses, clean data, and generate summary report
"""

import csv
import json
from datetime import datetime

def load_survey_data(filename):
    """Load survey responses from CSV."""
    responses = []
    try:
        with open(filename, "r") as file:
            reader = csv.DictReader(file)
            for row in reader:
                # Convert age to integer
                row["age"] = int(row["age"])
                # Convert satisfaction to float
                row["satisfaction"] = float(row["satisfaction"])
                responses.append(row)
        print(f"Loaded {len(responses)} responses")
        return responses
    except FileNotFoundError:
        print(f"Error: Could not find {filename}")
        return []

def analyze_responses(responses):
    """Analyze survey responses and compute statistics."""
    if not responses:
        return {}
    
    total = len(responses)
    avg_age = sum(r["age"] for r in responses) / total
    avg_satisfaction = sum(r["satisfaction"] for r in responses) / total
    
    # Count by category
    categories = {}
    for r in responses:
        cat = r["category"]
        categories[cat] = categories.get(cat, 0) + 1
    
    return {
        "total_responses": total,
        "average_age": round(avg_age, 1),
        "average_satisfaction": round(avg_satisfaction, 2),
        "categories": categories,
        "analysis_date": datetime.now().isoformat()
    }

def save_report(analysis, filename):
    """Save analysis results to JSON."""
    with open(filename, "w") as file:
        json.dump(analysis, file, indent=2)
    print(f"Report saved to {filename}")

def generate_summary(analysis):
    """Generate human-readable summary."""
    summary = []
    summary.append("=" * 50)
    summary.append("SURVEY ANALYSIS REPORT")
    summary.append("=" * 50)
    summary.append(f"Total Responses: {analysis['total_responses']}")
    summary.append(f"Average Age: {analysis['average_age']}")
    summary.append(f"Average Satisfaction: {analysis['average_satisfaction']}/5.0")
    summary.append("\nResponses by Category:")
    
    for cat, count in analysis["categories"].items():
        percentage = (count / analysis["total_responses"]) * 100
        summary.append(f"  {cat}: {count} ({percentage:.1f}%)")
    
    summary.append(f"\nAnalysis Date: {analysis['analysis_date']}")
    
    return "\n".join(summary)

# Main pipeline
if __name__ == "__main__":
    # Load data
    responses = load_survey_data("survey_responses.csv")
    
    if responses:
        # Analyze
        results = analyze_responses(responses)
        
        # Save detailed results
        save_report(results, "analysis_results.json")
        
        # Generate and save summary
        summary = generate_summary(results)
        print("\n" + summary)
        
        with open("summary_report.txt", "w") as file:
            file.write(summary)
        print("\nSummary report saved to summary_report.txt")
```

This pipeline demonstrates a complete workflow: loading data, processing it, and saving results in multiple formats.

## Review Questions

What is the advantage of using `with open()` instead of just `open()`?

<Quiz>
- It's faster
- It automatically closes the file when done*
- It allows writing to the file
- It works with more file types
</Quiz>

What mode would you use to add content to an existing file without erasing it?

<Quiz>
- "r"
- "w"
- "a"*
- "x"
</Quiz>

In pandas, what does `df.head()` do?

<Quiz>
- Reads the file header
- Shows column names only
- Displays the first few rows of the DataFrame*
- Sorts data by the first column
</Quiz>

What's the difference between `json.dump()` and `json.dumps()`?

<Quiz>
- There is no difference
- dump() writes to a file, dumps() returns a string*
- dumps() is faster
- dump() is deprecated
</Quiz>

## Challenges

1. **File Statistics:** Write a program that reads a text file and reports: number of lines, number of words, number of characters, and the most common word.

2. **CSV Processor:** Create a program that reads a CSV file of student grades, calculates each student's average, assigns letter grades, and writes the results to a new CSV.

3. **JSON Configuration:** Build a program that reads settings from a JSON config file (like database connection, file paths, etc.) and uses those settings to process data files.

### Challenge 1: File Statistics
<Secret>
```python
def analyze_text_file(filename):
    """Analyze a text file and return statistics."""
    try:
        with open(filename, "r") as file:
            content = file.read()
            lines = content.split("\n")
            words = content.split()
            
            # Count word frequency
            word_count = {}
            for word in words:
                word_lower = word.lower().strip(".,!?;:")
                word_count[word_lower] = word_count.get(word_lower, 0) + 1
            
            # Find most common word
            most_common = max(word_count.items(), key=lambda x: x[1])
            
            stats = {
                "lines": len(lines),
                "words": len(words),
                "characters": len(content),
                "most_common_word": most_common[0],
                "most_common_count": most_common[1]
            }
            
            return stats
            
    except FileNotFoundError:
        print(f"File {filename} not found")
        return None

# Test it
stats = analyze_text_file("sample.txt")
if stats:
    print(f"Lines: {stats['lines']}")
    print(f"Words: {stats['words']}")
    print(f"Characters: {stats['characters']}")
    print(f"Most common word: '{stats['most_common_word']}' ({stats['most_common_count']} times)")
```

</Secret>

### Challenge 2: CSV Grade Processor
<Secret>
```python
import csv

def process_grades(input_file, output_file):
    """Read student grades, calculate averages, assign letter grades."""
    
    def get_letter_grade(average):
        """Convert numeric grade to letter grade."""
        if average >= 90:
            return "A"
        elif average >= 80:
            return "B"
        elif average >= 70:
            return "C"
        elif average >= 60:
            return "D"
        else:
            return "F"
    
    results = []
    
    with open(input_file, "r") as infile:
        reader = csv.DictReader(infile)
        
        for row in reader:
            # Extract grades (assuming columns like: name, grade1, grade2, grade3)
            name = row["name"]
            grades = []
            for key in row:
                if key.startswith("grade"):
                    grades.append(float(row[key]))
            
            # Calculate average
            average = sum(grades) / len(grades) if grades else 0
            letter = get_letter_grade(average)
            
            results.append({
                "name": name,
                "average": round(average, 2),
                "letter_grade": letter
            })
    
    # Write results
    with open(output_file, "w", newline="") as outfile:
        fieldnames = ["name", "average", "letter_grade"]
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    
    print(f"Processed {len(results)} students")
    print(f"Results saved to {output_file}")

# Usage
process_grades("student_grades.csv", "final_grades.csv")
```
</Secret>

### Challenge 3: JSON Configuration
<Secret>
```python
import json
import os

def load_config(config_file="config.json"):
    """Load configuration from JSON file."""
    try:
        with open(config_file, "r") as file:
            config = json.load(file)
            print(f"Configuration loaded from {config_file}")
            return config
    except FileNotFoundError:
        print(f"Config file not found. Creating default configuration...")
        default_config = {
            "input_directory": "./data",
            "output_directory": "./output",
            "file_extension": ".txt",
            "processing_options": {
                "skip_empty": True,
                "max_files": 100,
                "verbose": True
            }
        }
        with open(config_file, "w") as file:
            json.dump(default_config, file, indent=2)
        print(f"Default configuration saved to {config_file}")
        return default_config

def process_with_config(config):
    """Process files according to configuration."""
    input_dir = config["input_directory"]
    output_dir = config["output_directory"]
    extension = config["file_extension"]
    options = config["processing_options"]
    
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created output directory: {output_dir}")
    
    # Process files
    files_processed = 0
    for filename in os.listdir(input_dir):
        if filename.endswith(extension):
            if files_processed >= options["max_files"]:
                break
            
            input_path = os.path.join(input_dir, filename)
            
            with open(input_path, "r") as file:
                content = file.read()
                
                if options["skip_empty"] and not content.strip():
                    if options["verbose"]:
                        print(f"Skipping empty file: {filename}")
                    continue
                
                # Process content (example: convert to uppercase)
                processed = content.upper()
                
                # Save processed file
                output_path = os.path.join(output_dir, f"processed_{filename}")
                with open(output_path, "w") as outfile:
                    outfile.write(processed)
                
                files_processed += 1
                if options["verbose"]:
                    print(f"Processed: {filename} -> processed_{filename}")
    
    print(f"Total files processed: {files_processed}")

# Main program
config = load_config()
process_with_config(config)
```
</Secret>

## Key Terms

- File path (absolute vs relative)
- File modes ("r", "w", "a")
- `with` statement
- CSV (Comma-Separated Values)
- JSON (JavaScript Object Notation)
- pandas DataFrame
- Error handling (try/except)
- File I/O (Input/Output)

# Collecting Data from the Web

The internet is the largest repository of data ever created. From government databases to social media, from weather stations to library catalogs, vast amounts of information are available through web APIs (Application Programming Interfaces). Learning to collect this data programmatically transforms you from someone who can analyze data to someone who can gather it at scale.

## Understanding Web APIs

An API is like a restaurant menu for data. Instead of visiting a website and clicking around to find information, you send a structured request and get structured data back. It's the difference between reading a newspaper (website) and having a research assistant who hands you exactly the information you need (API).

### How APIs Work

When you visit a website, your browser:
1. Sends a request to a server
2. Receives HTML/CSS/JavaScript back
3. Renders it visually

When you use an API:
1. Your program sends a request to a server
2. Receives structured data (usually JSON) back
3. Your program processes the data

This is much more efficient for data collection because you skip the visual presentation and get straight to the information.

## The requests Library

Python's `requests` library is your tool for talking to APIs. It handles all the complex networking details, letting you focus on the data.

```python
import requests

# The simplest API call
response = requests.get("https://api.github.com")
print(response.status_code)  # 200 means success
print(response.json())  # Parse JSON response into Python dictionary
```

### Understanding HTTP Status Codes

When you make a request, the server responds with a status code:

- **200-299: Success**
  - 200: OK - Everything worked
  - 201: Created - Something was created successfully
- **300-399: Redirection**
  - 301: Moved permanently
- **400-499: Client errors (your fault)**
  - 400: Bad request - You sent invalid data
  - 401: Unauthorized - You need to log in
  - 403: Forbidden - You're not allowed
  - 404: Not found - The resource doesn't exist
  - 429: Too many requests - You're being rate-limited
- **500-599: Server errors (their fault)**
  - 500: Internal server error
  - 503: Service unavailable

## Real Example: OpenWeatherMap API

Let's collect real weather data. First, you'll need a free API key from [openweathermap.org](https://openweathermap.org/api). This is common—many APIs require registration to prevent abuse.

```python
import requests
import json
from datetime import datetime

def get_weather(city, api_key):
    """
    Fetch current weather data for a city.
    
    Args:
        city: Name of the city
        api_key: Your OpenWeatherMap API key
        
    Returns:
        Dictionary with weather data or None if error
    """
    # API endpoint (URL where we send requests)
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    
    # Parameters to send with request
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric"  # Use Celsius
    }
    
    try:
        # Make the request
        response = requests.get(base_url, params=params)
        
        # Check if successful
        if response.status_code == 200:
            data = response.json()
            
            # Extract relevant information
            weather = {
                "city": data["name"],
                "country": data["sys"]["country"],
                "temperature": data["main"]["temp"],
                "feels_like": data["main"]["feels_like"],
                "description": data["weather"][0]["description"],
                "humidity": data["main"]["humidity"],
                "wind_speed": data["wind"]["speed"],
                "timestamp": datetime.now().isoformat()
            }
            return weather
        else:
            print(f"Error: Status code {response.status_code}")
            print(f"Message: {response.json().get('message', 'Unknown error')}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"Network error: {e}")
        return None
    except json.JSONDecodeError:
        print("Error: Could not parse response")
        return None

# Usage
API_KEY = "your_api_key_here"  # Replace with your actual key
weather = get_weather("London", API_KEY)

if weather:
    print(f"Weather in {weather['city']}, {weather['country']}:")
    print(f"Temperature: {weather['temperature']}°C")
    print(f"Feels like: {weather['feels_like']}°C")
    print(f"Description: {weather['description']}")
    print(f"Humidity: {weather['humidity']}%")
    print(f"Wind: {weather['wind_speed']} m/s")
```

### Handling Rate Limits

Most APIs limit how many requests you can make. Be a good citizen:

```python
import time

def collect_weather_data(cities, api_key, delay=1):
    """
    Collect weather for multiple cities with rate limiting.
    
    Args:
        cities: List of city names
        api_key: API key
        delay: Seconds to wait between requests
    """
    all_weather = []
    
    for i, city in enumerate(cities, 1):
        print(f"Fetching {i}/{len(cities)}: {city}")
        
        weather = get_weather(city, api_key)
        if weather:
            all_weather.append(weather)
        
        # Don't delay after last city
        if i < len(cities):
            time.sleep(delay)
    
    return all_weather

# Collect data for multiple cities
cities = ["London", "Paris", "New York", "Tokyo", "Sydney"]
weather_data = collect_weather_data(cities, API_KEY)

# Save to file
with open("weather_data.json", "w") as f:
    json.dump(weather_data, f, indent=2)
print(f"Saved weather data for {len(weather_data)} cities")
```

## Working with Paginated APIs

Many APIs return data in pages to avoid overwhelming you with too much at once. Here's how to handle pagination:

```python
def fetch_all_pages(base_url, params=None):
    """
    Fetch all pages from a paginated API.
    """
    if params is None:
        params = {}
    
    all_data = []
    page = 1
    
    while True:
        # Add page number to parameters
        params['page'] = page
        
        response = requests.get(base_url, params=params)
        
        if response.status_code != 200:
            print(f"Error on page {page}: {response.status_code}")
            break
        
        data = response.json()
        
        # Check if we got results (API-specific)
        if not data or len(data) == 0:
            break
        
        all_data.extend(data)
        print(f"Fetched page {page}, total items: {len(all_data)}")
        
        page += 1
        time.sleep(0.5)  # Be polite
    
    return all_data
```

## Authentication

Many APIs require authentication to identify who's making requests:

```python
# Method 1: API key in URL parameters (common)
params = {"api_key": "your_key_here"}
response = requests.get(url, params=params)

# Method 2: API key in headers (also common)
headers = {"Authorization": "Bearer your_token_here"}
response = requests.get(url, headers=headers)

# Method 3: Basic authentication (less common now)
response = requests.get(url, auth=("username", "password"))
```

## Practical Project: Building a Research Dataset

Let's build a real research dataset by collecting data from multiple sources:

```python
"""
Research Project: Analyzing Cultural Institutions
Collect data about museums from multiple sources
"""

import requests
import pandas as pd
import json
import time
from datetime import datetime

class MuseumDataCollector:
    """Collect and combine museum data from various APIs."""
    
    def __init__(self):
        self.data = []
        self.errors = []
        
    def collect_from_smithsonian(self):
        """
        Collect data from Smithsonian Open Access API.
        No API key required!
        """
        print("Collecting from Smithsonian...")
        
        base_url = "https://api.si.edu/openaccess/api/v1.0/search"
        params = {
            "q": "museum",
            "rows": 50  # Number of results
        }
        
        try:
            response = requests.get(base_url, params=params)
            if response.status_code == 200:
                data = response.json()
                
                # Extract relevant fields
                for item in data.get("response", {}).get("rows", []):
                    museum_data = {
                        "source": "Smithsonian",
                        "title": item.get("title", "Unknown"),
                        "type": item.get("type", "Unknown"),
                        "date": item.get("date", "Unknown"),
                        "url": item.get("url", ""),
                        "collected_at": datetime.now().isoformat()
                    }
                    self.data.append(museum_data)
                
                print(f"Collected {len(data.get('response', {}).get('rows', []))} items")
            else:
                self.errors.append(f"Smithsonian: {response.status_code}")
                
        except Exception as e:
            self.errors.append(f"Smithsonian error: {e}")
    
    def collect_from_metmuseum(self):
        """
        Collect data from Metropolitan Museum of Art API.
        No API key required!
        """
        print("Collecting from Met Museum...")
        
        # First, get list of object IDs
        search_url = "https://collectionapi.metmuseum.org/public/collection/v1/search"
        params = {"q": "painting", "hasImages": "true"}
        
        try:
            response = requests.get(search_url, params=params)
            if response.status_code == 200:
                data = response.json()
                object_ids = data.get("objectIDs", [])[:10]  # Limit to 10
                
                # Fetch details for each object
                for obj_id in object_ids:
                    obj_url = f"https://collectionapi.metmuseum.org/public/collection/v1/objects/{obj_id}"
                    obj_response = requests.get(obj_url)
                    
                    if obj_response.status_code == 200:
                        obj_data = obj_response.json()
                        
                        museum_data = {
                            "source": "Met Museum",
                            "title": obj_data.get("title", "Unknown"),
                            "artist": obj_data.get("artistDisplayName", "Unknown"),
                            "date": obj_data.get("objectDate", "Unknown"),
                            "medium": obj_data.get("medium", "Unknown"),
                            "department": obj_data.get("department", "Unknown"),
                            "url": obj_data.get("objectURL", ""),
                            "collected_at": datetime.now().isoformat()
                        }
                        self.data.append(museum_data)
                    
                    time.sleep(0.2)  # Rate limiting
                
                print(f"Collected {len(object_ids)} items")
            else:
                self.errors.append(f"Met Museum: {response.status_code}")
                
        except Exception as e:
            self.errors.append(f"Met Museum error: {e}")
    
    def save_data(self, filename="museum_data"):
        """Save collected data to files."""
        if self.data:
            # Save as JSON
            with open(f"{filename}.json", "w") as f:
                json.dump(self.data, f, indent=2)
            
            # Save as CSV using pandas
            df = pd.DataFrame(self.data)
            df.to_csv(f"{filename}.csv", index=False)
            
            print(f"\nSaved {len(self.data)} records to {filename}.json and {filename}.csv")
            
            # Basic statistics
            print("\nData Summary:")
            print(f"Total records: {len(self.data)}")
            if 'source' in df.columns:
                print("\nRecords by source:")
                print(df['source'].value_counts())
        else:
            print("No data to save")
        
        if self.errors:
            print("\nErrors encountered:")
            for error in self.errors:
                print(f"  - {error}")

# Run the collector
collector = MuseumDataCollector()
collector.collect_from_smithsonian()
collector.collect_from_metmuseum()
collector.save_data()
```

## Best Practices for API Usage

1. **Always read the documentation:** Each API is different
2. **Respect rate limits:** Don't hammer the server
3. **Handle errors gracefully:** Networks fail, servers go down
4. **Cache responses:** Don't request the same data repeatedly
5. **Use API keys securely:** Never commit them to GitHub
6. **Give attribution:** Credit your data sources

## Review Questions

What does a 404 HTTP status code mean?

<Quiz>
- Server error
- Success
- Resource not found*
- Unauthorized
</Quiz>

Why should you add delays between API requests?

<Quiz>
- To make your program slower
- To avoid overwhelming the server and respect rate limits*
- To save memory
- It's required by Python
</Quiz>

What format do most web APIs return data in?

<Quiz>
- HTML
- JSON*
- CSV
- PDF
</Quiz>

## Key Terms

- API (Application Programming Interface)
- HTTP status codes
- JSON response
- Rate limiting
- Authentication
- API key
- Pagination
- requests library

---

# Jupyter Notebooks: Interactive Research Computing

Jupyter notebooks revolutionized how researchers work with data. Instead of writing a script that runs from start to finish, you create an interactive document that mixes code, results, visualizations, and narrative text. It's like a lab notebook for computational research—you can experiment, document your thinking, and share your entire research process.

## What Makes Notebooks Special

Traditional programming separates code from its output. You write a script, run it, and see results in a terminal. Notebooks are different:

1. **Interactive:** Run code in pieces, see results immediately
2. **Iterative:** Modify and re-run cells without starting over
3. **Visual:** Charts and tables appear inline with your code
4. **Narrative:** Mix markdown text with code for documentation
5. **Shareable:** Others can read and reproduce your entire analysis

## Starting Jupyter

You installed Jupyter earlier with `pip install jupyter`. Now let's use it:

```bash
# In your terminal, navigate to your project folder
cd python_projects

# Start JupyterLab (the modern interface)
jupyter lab

# Or use classic Jupyter Notebook
jupyter notebook
```

Your browser will open with the Jupyter interface. Click "New" → "Python 3" to create your first notebook.

## Understanding Cells

Notebooks are made of **cells**. Each cell can be one of three types:

1. **Code cells:** Contain Python code that can be executed
2. **Markdown cells:** Contain formatted text for documentation
3. **Raw cells:** Unformatted text (rarely used)

### Essential Shortcuts

Learning these shortcuts will transform your notebook experience:

- **Run cell:** `Shift + Enter` (run and move to next)
- **Run cell in place:** `Ctrl + Enter` (stay on same cell)
- **Command mode:** `Esc` (blue cell border)
- **Edit mode:** `Enter` (green cell border)

In command mode:
- **Add cell above:** `A`
- **Add cell below:** `B`
- **Delete cell:** `DD` (press D twice)
- **Change to Markdown:** `M`
- **Change to Code:** `Y`
- **Save notebook:** `Ctrl + S` or `Cmd + S`

## Your First Research Notebook

Let's create a real research notebook analyzing historical data:

```python
# Cell 1: Setup and Imports
"""
Historical Weather Analysis
==========================
Analyzing temperature trends over time
Author: Your Name
Date: November 2024
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

# Configure visualization settings
plt.style.use('seaborn-v0_8-darkgrid')
sns.set_palette("husl")

# Display settings for pandas
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 100)

print("Setup complete!")
```

```markdown
# Cell 2: (Change to Markdown with M key)
## Data Collection

We'll analyze temperature data to understand climate patterns. The data comes from NOAA's climate database, which provides historical temperature records for cities worldwide.

Our research questions:
1. How have temperatures changed over the past century?
2. Are seasonal patterns shifting?
3. Which regions show the most change?
```

```python
# Cell 3: Generate Sample Data (in practice, you'd load real data)
np.random.seed(42)  # For reproducibility

# Create synthetic historical temperature data
years = range(1920, 2024)
months = range(1, 13)

data = []
for year in years:
    # Add slight warming trend
    base_temp = 15 + (year - 1920) * 0.02
    
    for month in months:
        # Seasonal variation
        seasonal = 10 * np.sin((month - 1) * np.pi / 6)
        
        # Random variation
        random_var = np.random.normal(0, 2)
        
        temp = base_temp + seasonal + random_var
        
        data.append({
            'year': year,
            'month': month,
            'temperature': round(temp, 1),
            'date': pd.Timestamp(year, month, 1)
        })

# Convert to DataFrame
df = pd.DataFrame(data)
print(f"Created {len(df)} temperature records")
df.head()
```

```python
# Cell 4: Data Exploration
# Basic statistics
print("Dataset Overview")
print("=" * 50)
df.info()

print("\nTemperature Statistics")
print("=" * 50)
df['temperature'].describe()
```

```python
# Cell 5: Create New Features
# Add decade column for grouping
df['decade'] = (df['year'] // 10) * 10

# Add season
def get_season(month):
    if month in [12, 1, 2]:
        return 'Winter'
    elif month in [3, 4, 5]:
        return 'Spring'
    elif month in [6, 7, 8]:
        return 'Summer'
    else:
        return 'Fall'

df['season'] = df['month'].apply(get_season)

# Calculate yearly averages
yearly_avg = df.groupby('year')['temperature'].mean().reset_index()
yearly_avg.columns = ['year', 'avg_temperature']

print("Feature engineering complete")
df.head()
```

## Data Visualization in Notebooks

One of Jupyter's greatest strengths is inline visualization:

```python
# Cell 6: Visualization Setup
# Use this magic command to display plots inline
%matplotlib inline

# For interactive plots (optional)
# %matplotlib widget

# Set figure size defaults
plt.rcParams['figure.figsize'] = (12, 6)
```

```python
# Cell 7: Temperature Trends
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# 1. Overall trend
ax1 = axes[0, 0]
ax1.plot(yearly_avg['year'], yearly_avg['avg_temperature'], 
         linewidth=2, color='darkblue')
ax1.set_title('Average Temperature Over Time', fontsize=14, fontweight='bold')
ax1.set_xlabel('Year')
ax1.set_ylabel('Temperature (°C)')
ax1.grid(True, alpha=0.3)

# Add trend line
z = np.polyfit(yearly_avg['year'], yearly_avg['avg_temperature'], 1)
p = np.poly1d(z)
ax1.plot(yearly_avg['year'], p(yearly_avg['year']), 
         "r--", alpha=0.8, label=f'Trend: {z[0]:.4f}°C/year')
ax1.legend()

# 2. Seasonal patterns by decade
ax2 = axes[0, 1]
seasonal_avg = df.groupby(['decade', 'season'])['temperature'].mean().unstack()
seasonal_avg.plot(kind='bar', ax=ax2)
ax2.set_title('Seasonal Temperatures by Decade', fontsize=14, fontweight='bold')
ax2.set_xlabel('Decade')
ax2.set_ylabel('Temperature (°C)')
ax2.legend(title='Season')
ax2.set_xticklabels(ax2.get_xticklabels(), rotation=45)

# 3. Monthly distribution
ax3 = axes[1, 0]
monthly_temps = df.pivot_table(values='temperature', 
                                index='month', 
                                columns='decade', 
                                aggfunc='mean')
for decade in monthly_temps.columns[-3:]:  # Last 3 decades
    ax3.plot(monthly_temps.index, monthly_temps[decade], 
             marker='o', label=f'{decade}s')
ax3.set_title('Monthly Temperature Patterns', fontsize=14, fontweight='bold')
ax3.set_xlabel('Month')
ax3.set_ylabel('Temperature (°C)')
ax3.legend()
ax3.grid(True, alpha=0.3)

# 4. Temperature distribution
ax4 = axes[1, 1]
for decade in [1920, 1970, 2020]:
    decade_data = df[df['decade'] == decade]['temperature']
    ax4.hist(decade_data, alpha=0.5, label=f'{decade}s', bins=30)
ax4.set_title('Temperature Distribution Changes', fontsize=14, fontweight='bold')
ax4.set_xlabel('Temperature (°C)')
ax4.set_ylabel('Frequency')
ax4.legend()

plt.tight_layout()
plt.show()

# Statistical summary
print("\nTemperature increase per decade:")
decade_means = df.groupby('decade')['temperature'].mean()
for i in range(1, len(decade_means)):
    prev = decade_means.iloc[i-1]
    curr = decade_means.iloc[i]
    change = curr - prev
    print(f"{decade_means.index[i]}s: {change:+.2f}°C from previous decade")
```

## Interactive Analysis

Notebooks excel at exploratory data analysis where you investigate as you go:

```python
# Cell 8: Interactive Investigation
def analyze_year(year):
    """Analyze temperature patterns for a specific year."""
    year_data = df[df['year'] == year]
    
    fig, axes = plt.subplots(1, 2, figsize=(12, 4))
    
    # Monthly temperatures
    axes[0].plot(year_data['month'], year_data['temperature'], 
                 marker='o', linewidth=2, markersize=8)
    axes[0].set_title(f'Monthly Temperatures in {year}')
    axes[0].set_xlabel('Month')
    axes[0].set_ylabel('Temperature (°C)')
    axes[0].grid(True, alpha=0.3)
    axes[0].set_xticks(range(1, 13))
    
    # Comparison with decade average
    decade = (year // 10) * 10
    decade_avg = df[df['decade'] == decade].groupby('month')['temperature'].mean()
    
    axes[1].bar(year_data['month'], year_data['temperature'] - decade_avg.values, 
                color=['red' if x > 0 else 'blue' 
                       for x in year_data['temperature'] - decade_avg.values])
    axes[1].set_title(f'{year} vs {decade}s Average')
    axes[1].set_xlabel('Month')
    axes[1].set_ylabel('Temperature Difference (°C)')
    axes[1].axhline(y=0, color='black', linestyle='-', linewidth=0.5)
    axes[1].grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.show()
    
    # Statistics
    print(f"\nStatistics for {year}:")
    print(f"Average temperature: {year_data['temperature'].mean():.2f}°C")
    print(f"Hottest month: {year_data.loc[year_data['temperature'].idxmax(), 'month']}")
    print(f"Coldest month: {year_data.loc[year_data['temperature'].idxmin(), 'month']}")
    
# Try different years
analyze_year(1920)
analyze_year(2023)
```

## Sharing Your Research

### Exporting Notebooks

Notebooks can be exported to various formats:

```bash
# HTML (for sharing via web)
jupyter nbconvert --to html your_notebook.ipynb

# PDF (requires LaTeX)
jupyter nbconvert --to pdf your_notebook.ipynb

# Python script
jupyter nbconvert --to python your_notebook.ipynb

# Markdown
jupyter nbconvert --to markdown your_notebook.ipynb
```

### Best Practices for Research Notebooks

1. **Start with purpose:** Document your research questions
2. **Organize logically:** Setup → Data → Analysis → Results
3. **Document everything:** Use markdown cells liberally
4. **Name cells:** Give sections clear headings
5. **Clean before sharing:** Remove experimental/debug cells
6. **Version control:** Notebooks work with Git
7. **Reproducibility:** Include environment info

```python
# Cell to include at the start of shared notebooks
import sys
print(f"Python version: {sys.version}")
print(f"Pandas version: {pd.__version__}")
print(f"NumPy version: {np.__version__}")
print(f"Matplotlib version: {plt.matplotlib.__version__}")
```

## Review Questions

What is the keyboard shortcut to run a cell and move to the next one?

<Quiz>
- Ctrl + Enter
- Shift + Enter*
- Alt + Enter
- Enter
</Quiz>

Which cell type would you use to write documentation?

<Quiz>
- Code cell
- Markdown cell*
- Raw cell
- Text cell
</Quiz>

What does the %matplotlib inline magic command do?

<Quiz>
- Makes plots interactive
- Displays plots within the notebook*
- Saves plots to files
- Increases plot quality
</Quiz>

## Key Terms

- Jupyter Notebook
- Cell (Code, Markdown, Raw)
- Kernel
- Magic commands (%matplotlib, etc.)
- .ipynb file
- nbconvert
- Inline visualization

---

# Building Your Research Project

It's time to put everything together. We're going to build a complete research project that collects data from New York City's 311 service request system, analyzes patterns in urban complaints, and creates publication-quality visualizations. This is real data that urban planners, sociologists, and policy researchers use to understand city dynamics.

## Project Overview: Urban Complaint Analysis

311 is NYC's non-emergency service request line. Citizens call to report everything from noise complaints to broken streetlights. This data provides a unique window into urban life—what bothers people, when problems occur, and how quickly the city responds.

Our research questions:
1. What are the most common types of complaints?
2. How do complaint patterns vary by borough and time?
3. How long does it take to resolve different types of issues?
4. Can we identify seasonal or temporal patterns?

## Setting Up the Project

First, let's organize our project professionally:

```bash
# Create project structure
mkdir nyc_311_analysis
cd nyc_311_analysis

# Create subdirectories
mkdir data
mkdir notebooks
mkdir scripts
mkdir output
mkdir figures

# Create a requirements file
echo "pandas>=1.5.0" >> requirements.txt
echo "numpy>=1.23.0" >> requirements.txt
echo "matplotlib>=3.5.0" >> requirements.txt
echo "seaborn>=0.12.0" >> requirements.txt
echo "requests>=2.28.0" >> requirements.txt
echo "jupyter>=1.0.0" >> requirements.txt

# Install requirements
pip install -r requirements.txt
```

## Part 1: Data Collection

Create a new Jupyter notebook: `notebooks/311_analysis.ipynb`

```python
# Cell 1: Project Setup
"""
NYC 311 Service Request Analysis
=================================
Analyzing patterns in urban complaints and service responses

Research Questions:
1. What are the most common urban complaints?
2. How do response times vary by complaint type and borough?
3. Are there temporal patterns in complaints?
4. Which agencies handle which problems?

Data Source: NYC Open Data Portal
API Documentation: https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import requests
import json
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

# Configuration
plt.style.use('seaborn-v0_8-whitegrid')
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 100)

print("Project initialized")
print(f"Analysis date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
```

```python
# Cell 2: Data Collection Function
def fetch_311_data(limit=1000, days_back=7):
    """
    Fetch recent 311 service requests from NYC Open Data.
    
    Parameters:
    -----------
    limit : int
        Maximum number of records to fetch per request
    days_back : int
        Number of days back from today to collect data
    
    Returns:
    --------
    pd.DataFrame
        DataFrame containing 311 requests
    """
    base_url = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
    
    # Calculate date range
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days_back)
    
    # Format dates for API
    start_str = start_date.strftime('%Y-%m-%dT00:00:00')
    end_str = end_date.strftime('%Y-%m-%dT23:59:59')
    
    # Build query
    params = {
        '$limit': limit,
        '$where': f"created_date between '{start_str}' and '{end_str}'",
        '$order': 'created_date DESC'
    }
    
    print(f"Fetching 311 data from {start_date.date()} to {end_date.date()}")
    
    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        
        data = response.json()
        df = pd.DataFrame(data)
        
        print(f"Successfully fetched {len(df)} records")
        return df
        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return pd.DataFrame()

# Fetch one week of data
df_raw = fetch_311_data(limit=2000, days_back=7)

# Save raw data
df_raw.to_csv('data/311_raw.csv', index=False)
print(f"Raw data shape: {df_raw.shape}")
df_raw.head()
```

```python
# Cell 3: Data Cleaning and Preprocessing
def clean_311_data(df):
    """Clean and preprocess 311 data."""
    
    df = df.copy()
    
    # Convert date columns
    date_columns = ['created_date', 'closed_date', 'resolution_action_updated_date']
    for col in date_columns:
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors='coerce')
    
    # Calculate resolution time (in hours)
    if 'closed_date' in df.columns and 'created_date' in df.columns:
        df['resolution_hours'] = (
            (df['closed_date'] - df['created_date']).dt.total_seconds() / 3600
        )
        # Remove negative resolution times (data errors)
        df.loc[df['resolution_hours'] < 0, 'resolution_hours'] = np.nan
    
    # Extract time components
    df['hour'] = df['created_date'].dt.hour
    df['day_of_week'] = df['created_date'].dt.day_name()
    df['month'] = df['created_date'].dt.month_name()
    df['date'] = df['created_date'].dt.date
    
    # Clean borough names
    if 'borough' in df.columns:
        df['borough'] = df['borough'].str.upper().str.strip()
        df['borough'] = df['borough'].replace('UNSPECIFIED', np.nan)
    
    # Identify completed vs open cases
    df['is_closed'] = ~df['closed_date'].isna()
    
    # Select relevant columns
    columns_to_keep = [
        'unique_key', 'created_date', 'closed_date', 'agency', 'agency_name',
        'complaint_type', 'descriptor', 'location_type', 'borough',
        'latitude', 'longitude', 'resolution_hours', 'is_closed',
        'hour', 'day_of_week', 'month', 'date'
    ]
    
    # Keep only columns that exist in the dataframe
    columns_to_keep = [col for col in columns_to_keep if col in df.columns]
    df = df[columns_to_keep]
    
    # Remove duplicates
    df = df.drop_duplicates(subset='unique_key', keep='first')
    
    print(f"Cleaned data shape: {df.shape}")
    print(f"Columns: {', '.join(df.columns)}")
    print(f"\nMissing values:")
    print(df.isnull().sum()[df.isnull().sum() > 0])
    
    return df

df = clean_311_data(df_raw)
df.to_csv('data/311_clean.csv', index=False)
df.head()
```

## Part 2: Exploratory Data Analysis

```python
# Cell 4: Basic Statistics
print("=" * 60)
print("NYC 311 SERVICE REQUEST ANALYSIS")
print("=" * 60)

print(f"\nDataset Overview:")
print(f"Total requests: {len(df):,}")
print(f"Date range: {df['created_date'].min().date()} to {df['created_date'].max().date()}")
print(f"Unique complaint types: {df['complaint_type'].nunique()}")
print(f"Agencies involved: {df['agency'].nunique()}")

print(f"\nRequests by Status:")
print(f"Closed: {df['is_closed'].sum():,} ({df['is_closed'].mean()*100:.1f}%)")
print(f"Open: {(~df['is_closed']).sum():,} ({(~df['is_closed']).mean()*100:.1f}%)")

if 'borough' in df.columns:
    print(f"\nRequests by Borough:")
    borough_counts = df['borough'].value_counts()
    for borough, count in borough_counts.items():
        print(f"  {borough}: {count:,} ({count/len(df)*100:.1f}%)")

# Resolution time statistics for closed cases
closed_df = df[df['is_closed'] & df['resolution_hours'].notna()]
if len(closed_df) > 0:
    print(f"\nResolution Time Statistics (for {len(closed_df):,} closed cases):")
    print(f"  Mean: {closed_df['resolution_hours'].mean():.1f} hours")
    print(f"  Median: {closed_df['resolution_hours'].median():.1f} hours")
    print(f"  Min: {closed_df['resolution_hours'].min():.1f} hours")
    print(f"  Max: {closed_df['resolution_hours'].max():.1f} hours")
```

```python
# Cell 5: Top Complaints Analysis
# Most common complaint types
top_complaints = df['complaint_type'].value_counts().head(15)

plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
top_complaints.plot(kind='barh')
plt.title('Top 15 Complaint Types', fontsize=14, fontweight='bold')
plt.xlabel('Number of Requests')
plt.ylabel('Complaint Type')

# Complaints by agency
plt.subplot(1, 2, 2)
top_agencies = df['agency'].value_counts().head(10)
top_agencies.plot(kind='barh', color='coral')
plt.title('Top 10 Agencies by Request Volume', fontsize=14, fontweight='bold')
plt.xlabel('Number of Requests')
plt.ylabel('Agency')

plt.tight_layout()
plt.show()

# Create a summary table
complaint_summary = df.groupby('complaint_type').agg({
    'unique_key': 'count',
    'is_closed': 'mean',
    'resolution_hours': 'median'
}).round(1)

complaint_summary.columns = ['Total_Requests', 'Pct_Closed', 'Median_Resolution_Hours']
complaint_summary = complaint_summary.sort_values('Total_Requests', ascending=False)

print("\nTop 10 Complaints Summary:")
print(complaint_summary.head(10))
```

## Part 3: Advanced Analysis

```python
# Cell 6: Temporal Patterns
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# Hourly distribution
hourly = df['hour'].value_counts().sort_index()
axes[0, 0].plot(hourly.index, hourly.values, marker='o', linewidth=2)
axes[0, 0].set_title('Requests by Hour of Day', fontsize=12, fontweight='bold')
axes[0, 0].set_xlabel('Hour')
axes[0, 0].set_ylabel('Number of Requests')
axes[0, 0].grid(True, alpha=0.3)

# Day of week distribution
day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
daily = df['day_of_week'].value_counts().reindex(day_order)
axes[0, 1].bar(range(7), daily.values)
axes[0, 1].set_title('Requests by Day of Week', fontsize=12, fontweight='bold')
axes[0, 1].set_xticklabels(daily.index, rotation=45)
axes[0, 1].set_ylabel('Number of Requests')

# Time series
if len(df) > 0:
    daily_counts = df.groupby('date').size()
    axes[1, 0].plot(daily_counts.index, daily_counts.values, linewidth=2)
    axes[1, 0].set_title('Daily Request Volume', fontsize=12, fontweight='bold')
    axes[1, 0].set_xlabel('Date')
    axes[1, 0].set_ylabel('Number of Requests')
    axes[1, 0].tick_params(axis='x', rotation=45)

# Heatmap of complaints by hour and day
pivot_table = df.pivot_table(
    values='unique_key',
    index='hour',
    columns='day_of_week',
    aggfunc='count'
)
# Reorder columns
if not pivot_table.empty:
    pivot_table = pivot_table.reindex(columns=day_order, fill_value=0)
    sns.heatmap(pivot_table, ax=axes[1, 1], cmap='YlOrRd', annot=False)
    axes[1, 1].set_title('Request Heatmap: Hour vs Day', fontsize=12, fontweight='bold')
    axes[1, 1].set_xlabel('Day of Week')
    axes[1, 1].set_ylabel('Hour of Day')

plt.tight_layout()
plt.show()
```

```python
# Cell 7: Geographic Analysis
if 'borough' in df.columns and 'complaint_type' in df.columns:
    # Complaints by borough
    borough_complaints = df.groupby(['borough', 'complaint_type']).size().reset_index(name='count')
    
    # Get top 5 complaint types per borough
    top_by_borough = []
    for borough in df['borough'].dropna().unique():
        borough_data = borough_complaints[borough_complaints['borough'] == borough]
        top_5 = borough_data.nlargest(5, 'count')
        top_by_borough.append(top_5)
    
    if top_by_borough:
        result = pd.concat(top_by_borough)
        
        # Create visualization
        fig, ax = plt.subplots(figsize=(14, 8))
        
        # Pivot for better visualization
        pivot = result.pivot(index='complaint_type', columns='borough', values='count')
        pivot.plot(kind='barh', stacked=False, ax=ax)
        
        ax.set_title('Top Complaints by Borough', fontsize=14, fontweight='bold')
        ax.set_xlabel('Number of Requests')
        ax.set_ylabel('Complaint Type')
        ax.legend(title='Borough', bbox_to_anchor=(1.05, 1), loc='upper left')
        
        plt.tight_layout()
        plt.show()
```

## Part 4: Statistical Insights

```python
# Cell 8: Resolution Time Analysis
if 'resolution_hours' in df.columns:
    # Filter for reasonable resolution times (< 30 days)
    resolution_df = df[
        (df['resolution_hours'] > 0) & 
        (df['resolution_hours'] < 720)  # 30 days
    ].copy()
    
    if len(resolution_df) > 0:
        # Resolution time by complaint type
        resolution_by_type = resolution_df.groupby('complaint_type')['resolution_hours'].agg([
            'count', 'mean', 'median', 'std'
        ]).round(1)
        
        # Filter for types with enough data
        resolution_by_type = resolution_by_type[resolution_by_type['count'] >= 10]
        resolution_by_type = resolution_by_type.sort_values('median')
        
        # Visualization
        fig, axes = plt.subplots(1, 2, figsize=(15, 6))
        
        # Fastest resolved
        fastest = resolution_by_type.head(10)
        axes[0].barh(range(len(fastest)), fastest['median'], color='green', alpha=0.7)
        axes[0].set_yticks(range(len(fastest)))
        axes[0].set_yticklabels(fastest.index)
        axes[0].set_title('Fastest Resolved Complaint Types', fontsize=12, fontweight='bold')
        axes[0].set_xlabel('Median Resolution Time (hours)')
        
        # Slowest resolved
        slowest = resolution_by_type.tail(10)
        axes[1].barh(range(len(slowest)), slowest['median'], color='red', alpha=0.7)
        axes[1].set_yticks(range(len(slowest)))
        axes[1].set_yticklabels(slowest.index)
        axes[1].set_title('Slowest Resolved Complaint Types', fontsize=12, fontweight='bold')
        axes[1].set_xlabel('Median Resolution Time (hours)')
        
        plt.tight_layout()
        plt.show()
        
        print("\nResolution Time Analysis:")
        print("Fastest Resolved (Median Hours):")
        print(fastest[['median', 'count']].head())
        print("\nSlowest Resolved (Median Hours):")
        print(slowest[['median', 'count']].head())
```

## Part 5: Final Report Generation

```python
# Cell 9: Generate Summary Report
def generate_report(df, output_file='output/311_report.txt'):
    """Generate a comprehensive text report of the analysis."""
    
    with open(output_file, 'w') as f:
        f.write("=" * 70 + "\n")
        f.write("NYC 311 SERVICE REQUEST ANALYSIS REPORT\n")
        f.write("=" * 70 + "\n\n")
        
        f.write(f"Report Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
        f.write(f"Data Range: {df['created_date'].min()} to {df['created_date'].max()}\n")
        f.write(f"Total Records Analyzed: {len(df):,}\n\n")
        
        f.write("KEY FINDINGS\n")
        f.write("-" * 40 + "\n\n")
        
        # Top complaints
        f.write("1. Most Common Complaints:\n")
        for i, (complaint, count) in enumerate(df['complaint_type'].value_counts().head(5).items(), 1):
            f.write(f"   {i}. {complaint}: {count:,} requests\n")
        
        # Borough analysis
        if 'borough' in df.columns:
            f.write("\n2. Requests by Borough:\n")
            for borough, count in df['borough'].value_counts().items():
                pct = count / len(df) * 100
                f.write(f"   {borough}: {count:,} ({pct:.1f}%)\n")
        
        # Temporal patterns
        f.write("\n3. Temporal Patterns:\n")
        peak_hour = df['hour'].value_counts().index[0]
        peak_day = df['day_of_week'].value_counts().index[0]
        f.write(f"   Peak Hour: {peak_hour}:00\n")
        f.write(f"   Peak Day: {peak_day}\n")
        
        # Resolution analysis
        if 'resolution_hours' in df.columns:
            closed_df = df[df['is_closed'] & df['resolution_hours'].notna()]
            if len(closed_df) > 0:
                f.write("\n4. Resolution Times:\n")
                f.write(f"   Average: {closed_df['resolution_hours'].mean():.1f} hours\n")
                f.write(f"   Median: {closed_df['resolution_hours'].median():.1f} hours\n")
                
        f.write("\n" + "=" * 70 + "\n")
        f.write("END OF REPORT\n")
    
    print(f"Report saved to {output_file}")

# Generate the report
generate_report(df)

# Save processed data
df.to_csv('output/311_processed.csv', index=False)
print("Processed data saved to output/311_processed.csv")
```

## Conclusion and Next Steps

You've just built a complete data science project! This analysis could be extended in many ways:

1. **Predictive modeling:** Can we predict resolution times?
2. **Geographic clustering:** Are there complaint hotspots?
3. **Time series forecasting:** Can we predict future complaint volumes?
4. **Text analysis:** What do the complaint descriptions tell us?
5. **Comparative analysis:** How do patterns differ between neighborhoods?

## Review Questions

What is the purpose of data cleaning before analysis?

<Quiz>
- To make the data smaller
- To remove inconsistencies and prepare data for analysis*
- To make the code run faster
- To compress the files
</Quiz>

Why is it important to save both raw and processed data?

<Quiz>
- Raw data is smaller
- To maintain reproducibility and data lineage*
- Processed data can't be saved
- It's required by Python
</Quiz>

## Key Terms

- Data pipeline
- Data cleaning
- Feature engineering
- Exploratory Data Analysis (EDA)
- Temporal patterns
- Resolution time
- Data visualization
- Summary statistics

---

# Sharing Your Research: Git and GitHub

Your analysis is complete, your visualizations are polished, and your insights are clear. But research isn't finished until it's shared. GitHub has become the standard platform for sharing computational research, and learning to use it effectively is as important as learning to code.

## Why Version Control Matters

Imagine you're writing a paper. You save versions like `draft1.docx`, `draft2_final.docx`, `draft2_final_REALLY_final.docx`. You email versions to collaborators, trying to merge their changes. It's chaos.

Git solves this for code (and any text files). It tracks every change, who made it, when, and why. You can experiment fearlessly, knowing you can always return to a working version.

## Understanding Git vs GitHub

- **Git:** Version control software on your computer
- **GitHub:** A website that hosts Git repositories online

Think of Git as track changes for your entire project, and GitHub as Google Drive for sharing it.

## Setting Up Git

First, configure Git with your information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Creating a Repository

Let's share your 311 analysis project:

```bash
# Navigate to your project folder
cd nyc_311_analysis

# Initialize Git
git init

# Check what files Git sees
git status
```

## The .gitignore File

Some files shouldn't be tracked (large data files, passwords, temporary files). Create a `.gitignore` file:

```
# .gitignore
# Data files (too large for GitHub)
data/
*.csv
*.xlsx

# Jupyter
.ipynb_checkpoints/
*/.ipynb_checkpoints/*

# Python
__pycache__/
*.py[cod]
*$py.class
*.so

# Virtual environments
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Credentials (NEVER commit these!)
*.env
config.ini
secrets.json
api_keys.txt
```

## Your First Commit

```bash
# Stage all files (except those in .gitignore)
git add .

# Commit with a descriptive message
git commit -m "Initial commit: NYC 311 analysis project"

# See your commit history
git log --oneline
```

## Creating a README

The README.md file is your project's front page. It should explain what your project does, how to use it, and what others need to know:

```markdown
# NYC 311 Service Request Analysis

## Overview
This project analyzes patterns in New York City's 311 service requests to understand urban complaints, response times, and temporal patterns.

## Research Questions
1. What are the most common types of urban complaints?
2. How do response times vary by complaint type and borough?
3. Are there temporal patterns in complaint frequency?
4. Which city agencies handle which types of problems?

## Data Source
Data is collected from NYC Open Data's 311 Service Requests API:
- Dataset: [311 Service Requests from 2010 to Present](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9)
- API Documentation: [Socrata Open Data API](https://dev.socrata.com/)

## Project Structure
```
nyc_311_analysis/
│
├── notebooks/          # Jupyter notebooks
│   └── 311_analysis.ipynb
│
├── scripts/           # Python scripts
│   ├── collect_data.py
│   └── analyze.py
│
├── data/             # Data files (not tracked in Git)
│   ├── 311_raw.csv
│   └── 311_clean.csv
│
├── output/           # Analysis results
│   ├── 311_report.txt
│   └── figures/
│
├── requirements.txt  # Python dependencies
└── README.md        # This file
```

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/nyc_311_analysis.git
   cd nyc_311_analysis
   ```

2. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the analysis:
   ```bash
   jupyter lab notebooks/311_analysis.ipynb
   ```

## Key Findings

### Most Common Complaints
1. Noise - Residential: 2,341 requests
2. Heat/Hot Water: 1,892 requests
3. Illegal Parking: 1,654 requests

### Resolution Times
- Median resolution time: 48.3 hours
- Fastest resolved: Noise complaints (median: 3.2 hours)
- Slowest resolved: Street conditions (median: 287.4 hours)

### Temporal Patterns
- Peak complaint hour: 10 AM
- Peak complaint day: Monday
- Lowest volume: Sunday 3-5 AM

## Visualizations

![Complaint Types by Borough](output/figures/complaints_by_borough.png)

![Resolution Time Distribution](output/figures/resolution_times.png)

## Future Work
- Predictive modeling for resolution times
- Sentiment analysis of complaint descriptions
- Geographic clustering analysis
- Seasonal pattern investigation

## Contributors
- Your Name (@yourgithubusername)

## License
This project is licensed under the MIT License - see LICENSE file for details.

## Acknowledgments
- NYC Open Data for providing the data
- Course instructors for guidance
- Python data science community for excellent libraries

## Contact
For questions or collaboration opportunities, please open an issue or contact [your.email@example.com]
```

## Pushing to GitHub

1. Create a new repository on GitHub.com (WITHOUT initializing with README)
2. Connect your local repository to GitHub:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/yourusername/nyc_311_analysis.git

# Push your code
git push -u origin main
```

## Best Practices for Research Repositories

### 1. Reproducibility File

Create `REPRODUCIBILITY.md`:

```markdown
# Reproducibility Information

## Environment
- Operating System: macOS 13.0
- Python Version: 3.10.5
- Analysis Date: November 2024

## Package Versions
See requirements.txt for exact versions used.

To recreate the exact environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Data Collection
Data was collected on 2024-11-15 using the NYC Open Data API.
To recollect similar data, run:
```python
python scripts/collect_data.py --days 7 --limit 2000
```

## Random Seeds
All random operations use seed 42 for reproducibility:
```python
np.random.seed(42)
```
```

### 2. Citation File

Create `CITATION.cff`:

```yaml
cff-version: 1.2.0
title: "NYC 311 Service Request Analysis"
authors:
  - family-names: "Your Last Name"
    given-names: "Your First Name"
    orcid: "https://orcid.org/0000-0000-0000-0000"
date-released: 2024-11-15
url: "https://github.com/yourusername/nyc_311_analysis"
```

## Review Questions

What is the purpose of a .gitignore file?

<Quiz>
- To ignore Git commands
- To specify files that shouldn't be tracked by Git*
- To hide files from GitHub
- To delete temporary files
</Quiz>

What should always be included in a research repository?

<Quiz>
- All raw data files
- README with documentation*
- Your API keys
- Temporary files
</Quiz>

## Final Thoughts

You've completed a journey from Python basics to professional research computing. You can now:
- Write Python code to solve real problems
- Collect and analyze data from APIs
- Create publication-quality visualizations
- Share reproducible research on GitHub

The tools and techniques you've learned form the foundation of modern computational research. Whether you're analyzing historical texts, processing survey data, or investigating urban patterns, you now have the skills to turn questions into insights through code.

Remember: programming is a craft that improves with practice. Keep building, keep sharing, and keep learning. The Python community is vast and welcoming—you're now part of it.

Good luck with your research!


# Appendix? The New Workflow - The Programmer as Director

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
