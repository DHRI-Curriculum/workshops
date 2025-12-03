---
title: Intro to Javascript
cover title: Javascript
description: This is a hands-on introduction to JavaScript, the programming language of the web. This course is designed for graduate students and researchers interested in developing websites or creating interactive data visualizations, even without a computer science background. By the end of this course, you will be able to read, write, and adapt basic JavaScript code, utilize common libraries like jQuery and Leaflet, and build your own simple web projects.
cover_image: /images/workshop/img2.jpg

readings:
    - "Mozilla Developer Network (MDN) JavaScript Guide: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)"
    - "Eloquent JavaScript (Online Book): [Eloquent JavaScript](https://eloquentjavascript.net/) - A more in-depth, free resource."
    - "JavaScript Info: [The Modern JavaScript Tutorial](https://javascript.info/) - Comprehensive tutorial site."

long_pages: true

authors:
    - 'Zach Lloyd'
    - 'Stephen Zweibel'

editors:
    - 'Zach Lloyd'
    - 'Stephen Zweibel'

goals:
    - description: 'In this workshop, you will learn to:'
    - "Understand core programming concepts: variables, data types, operators, control flow (conditionals, loops), functions, and scope."
    - "Distinguish among core JavaScript data types: numbers, strings, booleans, arrays, and objects."
    - Write and run JavaScript code in the browser console and via script files.
    - Understand and interact with the Document Object Model (DOM) to make web pages dynamic, primarily using the jQuery library for simplification.
    - Fetch and work with data using JSON.
    - Create interactive maps using the Leaflet.js library.
    - Engage with error messages and use documentation/online resources for troubleshooting.
    - Set up a basic development environment using VSCode and manage code using Git/GitHub.
    - Build a small, data-driven web project.
programming_language: 'JavaScript'
---

# Introduction

Hello! Welcome to *JavaScript for Graduate Students*, a course designed particularly for those outside of computer science. This course aims to equip you with the fundamental programming skills needed to bring your research or creative ideas to life on the web. We'll focus on practical application, guiding you step-by-step toward creating something useful and interactive.

## Learning Outcomes

By the end of this course, successful students will:

-   Gain the ability to read and write JavaScript at a beginner level.
-   Understand core programming concepts like variables, loops, conditionals, functions, and scope.
-   Distinguish among primary data types: numbers, strings, booleans, arrays, and objects.
-   Interpret error messages and effectively use online documentation and resources to solve problems independently.
-   Become familiar with widely used JavaScript libraries like jQuery and Leaflet.
-   Create and deploy a small, interactive web project.
-   Be prepared for further learning in web development or data visualization requiring JavaScript.

## Why Learn JavaScript?

1.  **The Language of the Web:** JavaScript runs in every modern web browser. It's essential for creating dynamic, interactive websites, web applications, and data visualizations that users can engage with directly.
2.  **Versatility:** While dominant in front-end web development (what the user sees and interacts with), JavaScript (with Node.js) is also widely used for back-end development, mobile apps, game development, and more.
3.  **Rich Ecosystem:** JavaScript has a vast collection of libraries (like jQuery, React, Vue, Leaflet, D3.js) and frameworks that significantly speed up development and enable complex functionalities.
4.  **Accessible Starting Point:** You can start writing and running JavaScript immediately in your browser's console, making the initial learning curve less steep than some other languages requiring complex setups.

## The Process of Learning a Language

Learning a programming language, much like a human language, benefits immensely from immersion and having a concrete goal. The most effective way is often project-based learning – building something specific.

However, beginners often don't know *what's possible* to build. This course provides a guided, project-oriented path. We'll build small examples along the way (like a text adventure and a simple library app) culminating in a modest, data-driven web page that showcases the concepts learned. This approach will give you a tangible outcome and a clearer idea of what you can achieve with JavaScript.

## Cool, Inspiring Libraries

What's possible with JavaScript? You can create interactive charts, maps, generative art, dynamic websites, and much more. Here are a few examples of powerful libraries (we'll explore Leaflet later):

-   [Chart.js](https://www.chartjs.org/docs/latest/): Create various types of charts and graphs.
-   [D3.js](https://d3js.org/): A powerful library for data visualization based on web standards.
-   [p5.js](https://p5js.org/): Focuses on creative coding, making coding accessible for artists, designers, educators, and beginners.
-   [Leaflet.js](https://leafletjs.com/): An open-source library for mobile-friendly interactive maps.
-   [jQuery](https://jquery.com/): A fast, small, and feature-rich JavaScript library simplifying HTML DOM traversal and manipulation, event handling, and animation. (We'll use this for convenience).

## JavaScript, not Java!

A common point of confusion for beginners is the name "JavaScript." It sounds similar to "Java," but **they are completely different programming languages** with distinct histories, syntax, and use cases.

*   **Java:** Developed by Sun Microsystems in the 1990s, often used for large-scale enterprise applications, Android app development, and back-end systems. It needs to be compiled before running.
*   **JavaScript:** Created by Brendan Eich at Netscape, initially designed to add interactivity to web pages. It runs directly in the browser (interpreted) and is the foundation of modern front-end development.

The similar name was largely a marketing decision back in the 90s to leverage Java's popularity. Remember: **Java is to JavaScript as Car is to Carpet.**

## Acknowledgements

This material draws inspiration from several excellent resources: [The JavaScripting English Major](https://the-javascripting-english-major.org/v1/contents) by Moacir P. de Sá Pereira for its pragmatic, project-oriented approach; [Eloquent JavaScript](https://eloquentjavascript.net/) by Marijn Haverbeke for its step-by-step, accretive learning method suitable for non-CS majors; and [Learn Python the Hard Way](https://learnpythonthehardway.org/book/) by Zed A. Shaw for its emphasis on active typing and engagement over rote memorization.

---

# Getting Started with JavaScript

Let's begin our journey! As is tradition, we'll start by printing a "Hello, World!" message. This will introduce you to the **JavaScript console**, an interactive environment within your browser where you can run JavaScript commands directly. We'll then explore fundamental data types and variables.

## Hello, World!

### Using Your Browser's Console

Every modern web browser includes developer tools, which contain a JavaScript console. This is your primary playground for experimenting with JavaScript snippets.

**How to Open the Console:**

1.  **Right-click** anywhere on a webpage.
2.  Select **"Inspect"** or **"Inspect Element"**.
3.  In the panel that opens, find and click on the **"Console"** tab.

**Alternatively, use keyboard shortcuts:**

*   **Chrome/Firefox/Edge (Windows/Linux):** `Ctrl`+`Shift`+`I` or `F12`
*   **Chrome/Firefox/Edge (Mac):** `Command`+`Option`+`I`
*   **Safari (Mac):** First, enable the Develop menu: `Safari > Preferences > Advanced > Show Develop menu in menu bar`. Then, `Command`+`Option`+`C` or `Develop > Show JavaScript Console`.

You should see a prompt, usually `>` or `>>`. This is where you type your commands.

### The `console.log()` Function

The most common way to display output for testing and debugging is `console.log()`. Type the following into your browser's console and press <kbd>Enter</kbd>:

```javascript
console.log("Hello, World!");
```

You should see the text `Hello, World!` printed directly in the console.

*   **Syntax Notes:**
    *   The text `"Hello, World!"` is called a **string**, enclosed in double quotes. We'll cover strings soon.
    *   The string is passed as an **argument** inside the parentheses `()`.
    *   The line ends with a **semicolon** `;`. While JavaScript has automatic semicolon insertion (ASI) and often works without them, explicitly adding semicolons at the end of each statement (command) is considered good practice and avoids potential ambiguities. We will use semicolons consistently.

**(Optional) Using `alert()`**

Another way to display a message is `alert()`, which creates a pop-up box. Try this in your console:

```javascript
alert("Hello, World!");
```

*   **Note:** Pop-up blockers might prevent alerts. Also, `alert()` pauses all interaction with the page until dismissed, so it's generally disruptive and rarely used in modern web development except for simple warnings or very basic debugging. `console.log()` is preferred.

<JSTerminal />
*(This embedded terminal works like your browser's console. Try the `console.log` and `alert` commands here too!)*

---

## Data Types and Variables

Programming involves working with data. JavaScript has several fundamental **data types**. Let's explore the main ones.

### Numbers

Numbers are used for mathematical calculations. JavaScript doesn't strictly distinguish between integers (whole numbers) and floats (decimals) in the way some other languages do; they are both just `number` type.

Try these in the console:

```javascript
9;
3.8;
-1.2;
```

<JSTerminal />

You can perform arithmetic operations:

```javascript
5 + 5;  // Addition
5 - 5;  // Subtraction
5 * 5;  // Multiplication
5 / 5;  // Division
10 % 3; // Modulo (remainder of division - result is 1)
2 ** 3; // Exponentiation (2 to the power of 3 - result is 8)
```

<JSTerminal />

*   **Order of Operations (PEMDAS/BODMAS):** JavaScript follows standard mathematical rules. `5 + 5 * 10 / 2` evaluates multiplication/division first, resulting in `30`. Use parentheses `()` to control the order: `(5 + 5) * 10 / 2` results in `50`.

### Strings

Strings represent textual data. They are enclosed in single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``).

```javascript
"Hello, World!";
'This is also a string.';
`Strings can use backticks too.`; // Template literals - more on these later
```

<JSTerminal />

*   **Quotes:** Use quotes consistently (start and end with the same type). Double quotes (`"`) are common and allow single quotes (`'`) inside without issues: `"It's a nice day."`. If you need the same type of quote inside, you can **escape** it with a backslash `\`: `"She said \"Hello!\""`. Or, use a different outer quote type: `'She said "Hello!"'`.
*   **Concatenation:** Use the `+` operator to join strings:
    ```javascript
    "Hello, " + "World!"; // Results in "Hello, World!"
    ```

<JSTerminal />

### Booleans

Booleans represent logical values: `true` or `false`. They are crucial for decision-making in code.

```javascript
true;
false;
```

<JSTerminal />

Booleans are often the result of **comparison operations**.

### Comparison Operators

These operators compare values and evaluate to `true` or `false`.

| Operator | Meaning                     | Example          | Evaluation | Notes                                       |
| :------- | :-------------------------- | :--------------- | :--------- | :------------------------------------------ |
| `>`      | Greater than                | `5 > 4`          | `true`     |                                             |
| `<`      | Less than                   | `5 < 4`          | `false`    |                                             |
| `>=`     | Greater than or equal to    | `5 >= 5`         | `true`     |                                             |
| `<=`     | Less than or equal to       | `5 <= 4`         | `false`    |                                             |
| `===`    | **Strict Equality**         | `5 === 5`        | `true`     | Compares value AND type. **Preferred.**     |
| `===`    | Strict Equality             | `5 === "5"`      | `false`    | Number vs String                            |
| `!==`    | **Strict Inequality**       | `5 !== 4`        | `true`     | Compares value AND type. **Preferred.**     |
| `!==`    | Strict Inequality           | `5 !== "5"`      | `true`     | Number vs String                            |
| `==`     | *Loose Equality*            | `5 == 5`         | `true`     | Compares value after *type coercion*. Avoid. |
| `==`     | *Loose Equality*            | `5 == "5"`       | `true`     | **Avoid!** String "5" coerced to number 5. |
| `!=`     | *Loose Inequality*          | `5 != 4`         | `true`     | Compares value after *type coercion*. Avoid. |
| `!=`     | *Loose Inequality*          | `5 != "5"`       | `false`    | **Avoid!** Coercion makes them equal.     |

**Key takeaway:** Always use **strict equality (`===`)** and **strict inequality (`!==`)** unless you have a very specific reason for type coercion. Loose equality (`==`, `!=`) can lead to unexpected bugs due to automatic type conversions.

Try some comparisons in the console:
<JSTerminal />

### Variables: `let` and `const`

Variables are named containers for storing data values. In modern JavaScript, we declare variables using `let` and `const`.

*   **`const` (Constant):** Use `const` when you declare a variable whose value **will not be reassigned**. This is the preferred way to declare variables most of the time, as it prevents accidental changes.
    ```javascript
    const myMessage = "Hello, World!";
    const year = 2024;
    // myMessage = "Goodbye"; // This would cause an error!
    ```
*   **`let` (Let/Allow change):** Use `let` when you know the variable's value **might need to be updated later**.
    ```javascript
    let counter = 0;
    counter = counter + 1; // This is allowed
    console.log(counter); // Output: 1
    ```

**Declaring and Assigning:**

```javascript
const pi = 3.14159; // Declare and assign in one step
let currentTemp;     // Declare first
currentTemp = 25;    // Assign later
```

**Using Variables:** Once declared, use the variable name to access its value.

```javascript
const courseName = "JavaScript for Grads";
console.log(courseName); // Output: JavaScript for Grads

let visitorCount = 10;
visitorCount = visitorCount + 1;
console.log("Visitors: " + visitorCount); // Output: Visitors: 11
```

<JSTerminal />

*   **Why not `var`?** You might see `var` in older code or tutorials. `var` has different scoping rules (function scope or global scope, not block scope like `let`/`const`) which can lead to confusion and bugs in larger programs. It's best practice to use `let` and `const` exclusively in modern JavaScript. We'll discuss scope in more detail later.

**Variable Naming Conventions:**

*   Names must start with a letter, underscore (`_`), or dollar sign (`$`). Cannot start with a number.
*   Can contain letters, numbers, underscores, or dollar signs.
*   **Case-sensitive:** `myVariable` is different from `myvariable`.
*   Use **camelCase** for multi-word names (e.g., `firstName`, `totalAmount`).
*   Avoid reserved words (like `let`, `const`, `if`, `function`, etc.). [MDN Reserved Words List](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).
*   Choose meaningful, descriptive names. `userName` is better than `x`.
*   Do **not** use hyphens (`-`), as they are interpreted as subtraction.

### `typeof` Operator

To check the data type of a variable or value, use the `typeof` operator:

```javascript
const message = "Hello";
let count = 100;
const isReady = true;

console.log(typeof message);  // Output: string
console.log(typeof count);    // Output: number
console.log(typeof isReady);  // Output: boolean
console.log(typeof 99.9);     // Output: number
console.log(typeof false);    // Output: boolean
```

<JSTerminal />
This is useful for debugging or when you need to handle different types of data differently.

---

## Review Questions

Which command is generally preferred for displaying test output in the browser console?

:::quiz
- `alert()`
- `console.log()`*
- `document.write()`
- `print()`
:::

Select all the *strictly* true comparisons:
   
:::quiz
- `100 === "100"`
- `100 !== "100"`*
- `5 > 4`*
- `'apple' === 'Apple'`
- `true === true`*
- `0 === false`
:::

Which of these variable names are valid in JavaScript? (Select all that apply)
   
:::quiz
- `_count`*
- `$amount`*
- `1stPlace`
- `firstPlace`*
- `user-name`
- `let`
- `MAX_ITEMS`*
:::

When should you primarily use `const` to declare a variable?

:::quiz
- When the variable's value might change later.
- When you are declaring a number.
- When the variable's value will not be reassigned after declaration.*
- Only for boolean values.
:::

## Challenges

1.  **Calculations:** The area of a rectangle is `length * width`. Declare two variables, `length` and `width`, assign them number values, and then declare a third variable `area` calculated from the first two. Use `console.log()` to display the result like: "The area is: NN".
2.  **String Concatenation:** Declare two string variables, `firstName` and `lastName`. Create a third variable `fullName` by concatenating the first name, a space, and the last name. Log the `fullName` to the console.
3.  **Type Exploration:** Declare variables of different types (number, string, boolean). Use `console.log()` and the `typeof` operator to display both the value and the type of each variable. Example output: "Value: Hello, Type: string".

### Challenge 1: Area Calculation
:::secret
```javascript
// Challenge 1: Area Calculation
const length = 10;
const width = 5;
const area = length * width;
console.log("The area is: " + area);
```
:::

### Challenge 2: Full Name
:::secret
```javascript
// Challenge 2: Full Name
const firstName = "Ada";
const lastName = "Lovelace";
const fullName = firstName + " " + lastName;
console.log(fullName);
```
:::

### Challenge 3: Type Exploration
:::secret
```javascript
// Challenge 3: Type Exploration
const city = "New York";
const population = 8500000;
const isCapital = false;
console.log("Value: " + city + ", Type: " + typeof city);
console.log("Value: " + population + ", Type: " + typeof population);
console.log("Value: " + isCapital + ", Type: " + typeof isCapital);
```
:::

## Key Terms (Review)

-   console
-   `console.log()`
-   string
-   number
-   boolean
-   variable
-   `let`
-   `const`
-   assignment (`=`)
-   strict equality (`===`)
-   strict inequality (`!==`)
-   concatenation
-   `typeof` operator
-   camelCase
-   semicolon

---

# If/Then: Making Decisions

So far, our code runs linearly, from top to bottom. But often, we need programs to make decisions and execute different code blocks based on certain conditions. This is called **control flow**. `if`/`else` statements are the fundamental building blocks for decision-making.

We'll also learn how to get input from the user using `prompt()` and build a small text-based "Choose Your Own Adventure" game to practice these concepts.

## Thinking in Code: Branches

Imagine a program's execution path not as a straight line, but as a road that might fork. An `if` statement is like a signpost at a fork: "If this condition is true, go left; otherwise, go right (or continue straight)."

![Decision Tree](/images/decision-tree.drawio.png)

This branching allows programs to react dynamically to different situations or inputs.

**A Simple "Choose Your Own Adventure" Game Needs:**

1.  A story or scenario.
2.  Points where the user makes a choice.
3.  A way to get the user's input.
4.  Logic (branching) to change the story based on the input.
5.  Different outcomes to display.

Let's start with getting user input.

## Getting User Input with `prompt()`

The `prompt()` function displays a pop-up box asking the user for input. It returns the user's input as a **string**.

```javascript
// Ask the user for their name and store it
const userName = prompt("What is your name?");

// Greet the user using the entered name
alert("Hello, " + userName + "!");
console.log("User's name is: " + userName);
```

<JSTerminal />
*Try running the code above. Enter your name in the pop-up.*

*   **Note:** Like `alert()`, `prompt()` pauses page interaction and is generally avoided in modern UI design. For real websites, you'd use HTML forms. However, `prompt()` is simple and useful for learning basic input/output.
*   **Always Returns a String:** Even if the user types `18`, `prompt()` returns the *string* `"18"`, not the *number* `18`.

### Converting Input to Numbers: `parseInt()` and `parseFloat()`

If you need the user's input as a number for calculations, you must convert it.

*   `parseInt()`: Converts a string to an **integer** (whole number). It stops parsing at the first non-numeric character.
*   `parseFloat()`: Converts a string to a **floating-point number** (decimal).

```javascript
const ageString = prompt("How old are you?");
const userAge = parseInt(ageString); // Convert the input string to a number

console.log("Age as string:", ageString, typeof ageString);
console.log("Age as number:", userAge, typeof userAge);

// Now you can do calculations
const nextYearAge = userAge + 1;
alert("Next year, you will be " + nextYearAge + ".");
```

<JSTerminal />

*   **`NaN` (Not a Number):** If the conversion fails (e.g., user enters "twenty"), `parseInt()`/`parseFloat()` return `NaN`. You can check for this using `isNaN(variable)`.

    ```javascript
    const maybeNumber = parseInt("hello"); // maybeNumber becomes NaN
    console.log(isNaN(maybeNumber)); // Output: true
    ```

## `if` Statements

An `if` statement executes a block of code **only if** a specified condition evaluates to `true`.

```javascript
if (condition) {
  // Code to run if condition is true
}
```

*   The `condition` is typically a boolean expression (using comparison operators).
*   The code block is enclosed in curly braces `{}`.

Example:

```javascript
const userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
  console.log("You are old enough to vote.");
}

console.log("Finished checking."); // This line always runs
```

<JSTerminal />

## `if...else` Statements

An `if...else` statement provides an alternative block of code to execute if the condition is `false`.

```javascript
if (condition) {
  // Code to run if condition is true
} else {
  // Code to run if condition is false
}
```

Example: Voting eligibility check revisited.

```javascript
const userAge = parseInt(prompt("How old are you?"));

if (userAge >= 18) {
  alert("You are legally old enough to vote in the U.S.");
  console.log("Eligible.");
} else {
  alert("You are not legally old enough to vote in the U.S.");
  console.log("Not eligible.");
}
```

<JSTerminal />

## `else if` Statements

To check multiple conditions in sequence, use `else if`.

```javascript
if (condition1) {
  // Runs if condition1 is true
} else if (condition2) {
  // Runs if condition1 is false AND condition2 is true
} else if (condition3) {
  // Runs if conditions 1 and 2 are false AND condition3 is true
} else {
  // Runs if ALL preceding conditions are false
}
```

Example: Age categories.

```javascript
const userAge = parseInt(prompt("How old are you?"));

if (userAge >= 65) {
  alert("You are eligible for senior discounts.");
} else if (userAge >= 18) {
  alert("You are an adult.");
} else if (userAge >= 13) {
  alert("You are a teenager.");
} else {
  alert("You are a child.");
}
```

<JSTerminal />

*   Only **one** block (`if`, `else if`, or `else`) will execute – the first one whose condition is met.

## Comments

Use comments to explain your code. JavaScript ignores them.

*   **Single-line comment:** Starts with `//`
    ```javascript
    // This is a single-line comment
    let score = 100; // This part explains the score
    ```
*   **Multi-line comment:** Starts with `/*` and ends with `*/`
    ```javascript
    /*
    This is a multi-line comment.
    It can span several lines.
    Useful for longer explanations.
    */
    const gravity = 9.8;
    ```
    Good commenting makes your code understandable to others and to your future self!

## Nesting Conditionals

You can place `if`/`else` statements inside other `if`/`else` blocks. This is called **nesting**.

```javascript
const knowsJavaScript = true;
const knowsPython = false;

if (knowsJavaScript) {
  console.log("Great! You know JavaScript.");
  if (knowsPython) {
    console.log("You know Python too!");
  } else {
    console.log("Maybe learn Python next?");
  }
} else {
  console.log("You should learn JavaScript!");
}
```

*   **Caution:** Deeply nested conditionals can become hard to read and debug. Try to keep nesting levels shallow if possible.

![if/else diagram](/images/if-else-diagram.png)
*(This diagram shows how nested blocks work. Pay attention to the curly braces `{}` defining each block.)*

## Switch Statements

A `switch` statement is an alternative to a long chain of `else if` statements, particularly useful when checking a single variable against multiple specific values.

```javascript
switch (expression) {
  case value1:
    // Code to run if expression === value1
    break; // Important: stops execution within the switch
  case value2:
    // Code to run if expression === value2
    break;
  // ... more cases
  default:
    // Code to run if no cases match
    break;
}
```

*   The `expression`'s value is compared strictly (`===`) against each `case`.
*   The `break` statement is crucial. Without it, execution will "fall through" to the next `case`, even if it doesn't match.
*   The `default` case is optional and runs if no other `case` matches.

Example: Difficulty setting.

```javascript
const difficultyChoice = prompt("Choose difficulty: 1-Easy, 2-Medium, 3-Hard");

switch (difficultyChoice) {
  case "1":
    alert("You selected Easy.");
    break;
  case "2":
    alert("You selected Medium.");
    break;
  case "3":
    alert("You selected Hard.");
    break;
  default:
    alert("Invalid choice. Defaulting to Medium.");
    // No break needed at the end of default
}
```
<JSTerminal />

*   Note: We are comparing against strings (`"1"`, `"2"`, `"3"`) because `prompt()` returns a string.

`switch` can sometimes be cleaner than many `else if` checks, especially for exact value comparisons.

## Choose Your Own Adventure Game

Let's combine `prompt`, `alert`, and `if/else if/else` to create a simple text adventure.

```javascript
// Get Player Name
const playerName = prompt("What is your name, brave adventurer?");
alert("Welcome, " + playerName + "!");

// Start the Story
alert(playerName + ", you stand at a crossroads. A dark forest lies to the LEFT, and a sunny path leads to the RIGHT.");
const firstChoice = prompt("Which way do you go? (Type LEFT or RIGHT)").toUpperCase(); // Convert input to uppercase for easier comparison

// Branching based on choice
if (firstChoice === "LEFT") {
  alert("You enter the spooky forest. Twigs snap underfoot.");
  const forestChoice = prompt("You see a glimmering light ahead (LIGHT) or hear a rustling in the bushes (BUSHES)?").toUpperCase();

  if (forestChoice === "LIGHT") {
    alert("You follow the light and find a hidden treasure chest! You win!");
  } else if (forestChoice === "BUSHES") {
    alert("A grumpy badger jumps out and chases you away! You lose.");
  } else {
    alert("Lost in the woods, you wander aimlessly. Game Over.");
  }

} else if (firstChoice === "RIGHT") {
  alert("You walk along the sunny path. You see a river ahead.");
  const pathChoice = prompt("Do you try to SWIM across or look for a BRIDGE?").toUpperCase();

  if (pathChoice === "SWIM") {
    alert("The current is too strong! You are swept away. Game Over.");
  } else if (pathChoice === "BRIDGE") {
    alert("You find a sturdy bridge, cross safely, and reach a peaceful village! You win!");
  } else {
    alert("Unsure what to do, you sit by the riverbank indefinitely. Game Over.");
  }

} else {
  alert("Indecision paralyzes you at the crossroads. Game Over.");
}
```

:::codeeditor{language="JavaScript"}
// Paste the code above here to try it!
:::

*   **Improvements:** This code works, but notice the repetition (prompting, converting to uppercase). It also exits immediately on invalid input. Loops and functions (covered next) can make this much cleaner and more robust.

## Review Questions

The `prompt()` function returns user input as which data type?

:::quiz
- Number
- Boolean
- String*
- Object
:::

What is the primary purpose of the `break` statement inside a `switch` block?

:::quiz
- To indicate the default case.
- To stop the entire script.
- To exit the `switch` statement after a matching `case` is executed.*
- To repeat the current `case`.
:::

Examine this code. What will be logged to the console if `score` is `75`?
  ```javascript
  const score = 75;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else {
    console.log("D");
  }
  ```

:::quiz
- A
- B
- C*
- D
:::

## Challenges

1.  **Even or Odd:** Write a program that prompts the user for a number, converts it to an integer using `parseInt()`, and then uses the modulo operator (`%`) within an `if/else` statement to alert whether the number is "even" or "odd". (Hint: An even number `n` satisfies `n % 2 === 0`).
2.  **Simple Calculator:** Prompt the user for two numbers and an operator (`+`, `-`, `*`, `/`). Use `if/else if/else` or a `switch` statement to perform the calculation based on the operator and alert the result. Handle potential division by zero.

### Challenge 1: Even or Odd
:::secret
```javascript
// Challenge 1: Even or Odd
const numString = prompt("Enter a whole number:");
const num = parseInt(numString);

if (isNaN(num)) {
  alert("Invalid input. Please enter a number.");
} else if (num % 2 === 0) {
  alert(num + " is even.");
} else {
  alert(num + " is odd.");
}
```
:::

### Challenge 2: Simple Calculator
:::secret
```javascript
// Challenge 2: Simple Calculator (using if/else if/else)
const num1String = prompt("Enter the first number:");
const num2String = prompt("Enter the second number:");
const operator = prompt("Enter an operator (+, -, *, /):");

const num1 = parseFloat(num1String);
const num2 = parseFloat(num2String);
let result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid number input.");
} else if (operator === '+') {
  result = num1 + num2;
  alert(num1 + " + " + num2 + " = " + result);
} else if (operator === '-') {
  result = num1 - num2;
   alert(num1 + " - " + num2 + " = " + result);
} else if (operator === '*') {
  result = num1 * num2;
   alert(num1 + " * " + num2 + " = " + result);
} else if (operator === '/') {
  if (num2 === 0) {
    alert("Cannot divide by zero!");
  } else {
    result = num1 / num2;
     alert(num1 + " / " + num2 + " = " + result);
  }
} else {
  alert("Invalid operator.");
}
```
:::

## Key Terms

-   control flow
-   `if`, `else if`, `else`
-   `switch`, `case`, `break`, `default`
-   condition
-   boolean expression
-   `prompt()`
-   `parseInt()`, `parseFloat()`
-   `NaN`, `isNaN()`
-   nesting
-   comments (`//`, `/* */`)

---

# Loops and Arrays

Often, you need to repeat a block of code multiple times or work with collections of data. **Loops** allow you to automate repetition, and **arrays** are fundamental data structures for storing ordered lists of items.

In this lesson, we'll explore `for` and `while` loops, learn how to create and manipulate arrays, and combine these concepts to build a simple library search application.

## Arrays

An **array** is an ordered collection of values, stored in a single variable. Arrays can hold items of any data type, including other arrays or objects. They are defined using square brackets `[]`, with elements separated by commas.

```javascript
// Examples of arrays:
const emptyArray = [];
const fibonacci = [1, 1, 2, 3, 5, 8]; // Array of numbers
const colors = ['red', 'green', 'blue']; // Array of strings
const mixedData = [1, 'hello', true, null, colors]; // Mixed types, including another array
```

### Accessing Array Elements (Indexing)

Array elements are accessed using their **index**, which is their numerical position in the array. **Important:** Array indexing starts at **0**.

```javascript
const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // Output: apple (index 0 is the first element)
console.log(fruits[1]); // Output: banana (index 1 is the second element)
console.log(fruits[2]); // Output: cherry (index 2 is the third element)
console.log(fruits[3]); // Output: undefined (index 3 doesn't exist)
```

<JSTerminal />

### Modifying Array Elements

You can change the value of an element by assigning a new value to its index:

```javascript
const colors = ['red', 'green', 'blue'];
colors[1] = 'yellow'; // Change the element at index 1
console.log(colors); // Output: ['red', 'yellow', 'blue']
```

<JSTerminal />

### Array Properties and Methods

Arrays come with built-in properties and methods (functions associated with the array object) to help you work with them. Access these using dot notation (`.`).

*   **`.length` Property:** Returns the number of elements in the array.
    ```javascript
    const numbers = [10, 20, 30, 40];
    console.log(numbers.length); // Output: 4
    ```
    *   **Accessing the Last Element:** Since indexing starts at 0, the last element's index is always `length - 1`.
        ```javascript
        const letters = ['a', 'b', 'c'];
        console.log(letters[letters.length - 1]); // Output: c
        ```

*   **`.push()` Method:** Adds one or more elements to the **end** of an array.
    ```javascript
    const pets = ['cat', 'dog'];
    pets.push('hamster');
    console.log(pets); // Output: ['cat', 'dog', 'hamster']
    pets.push('fish', 'bird');
    console.log(pets); // Output: ['cat', 'dog', 'hamster', 'fish', 'bird']
    ```

*   **`.pop()` Method:** Removes the **last** element from an array and returns it.
    ```javascript
    const tools = ['hammer', 'saw', 'screwdriver'];
    const removedTool = tools.pop();
    console.log(removedTool); // Output: screwdriver
    console.log(tools);       // Output: ['hammer', 'saw']
    ```

*   **`.indexOf()` Method:** Returns the index of the **first occurrence** of a specified value. Returns `-1` if the value is not found.
    ```javascript
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
    console.log(planets.indexOf('Earth')); // Output: 2
    console.log(planets.indexOf('Jupiter')); // Output: -1
    ```

*   **`.includes()` Method:** Checks if an array contains a certain value, returning `true` or `false`.
    ```javascript
    const tech = ['HTML', 'CSS', 'JavaScript'];
    console.log(tech.includes('CSS'));        // Output: true
    console.log(tech.includes('Python'));     // Output: false
    ```

*   **`.sort()` Method:** Sorts the elements of an array *in place*.
    *   By default, it sorts alphabetically (converting elements to strings if necessary).
    *   For numbers, this default sort can be unexpected (`[1, 10, 2]` becomes `[1, 10, 2]`). You often need to provide a comparison function for numerical sorting (more advanced topic).
    
    ```javascript
    const names = ['Charlie', 'Alice', 'Bob'];
    names.sort();
    console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

    const points = [100, 1, 21];
    points.sort();
    console.log(points); // Output: [1, 100, 21] (Incorrect numerical sort!)
    ```

*   **`.splice()` Method:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements *in place*. It's versatile but can be complex. Basic usage: `array.splice(startIndex, deleteCount)` removes elements.
    ```javascript
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb'); // Insert 'Feb' at index 1 (delete 0 elements)
    console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']

    months.splice(4, 1, 'May'); // Replace 1 element at index 4 with 'May'
    console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']

    months.splice(2, 1); // Remove 1 element starting at index 2 ('March')
    console.log(months); // Output: ['Jan', 'Feb', 'April', 'May']
    ```

There are many more useful array methods ([MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)). Arrays are essential for managing collections of data.

:::codeeditor{language="JavaScript"}
// Try array methods here
const testArray = ['one', 'two', 'three'];
console.log("Original:", testArray);
console.log("Length:", testArray.length);

testArray.push('four');
console.log("After push:", testArray);

const popped = testArray.pop();
console.log("Popped:", popped);
console.log("After pop:", testArray);

console.log("Index of 'two':", testArray.indexOf('two'));
console.log("Includes 'one':", testArray.includes('one'));

testArray.sort();
console.log("Sorted:", testArray);
:::

## Looping

Loops execute a block of code repeatedly as long as a condition remains true.

### The `for` Loop

The `for` loop is ideal when you know how many times you want to iterate, often used for looping through arrays.

**Syntax:**

```javascript
for (initialization; condition; final-expression) {
  // Code block to execute repeatedly
}
```

1.  **initialization:** Runs once before the loop starts (e.g., declare a counter variable: `let i = 0`).
2.  **condition:** Checked *before* each iteration. If `true`, the code block runs. If `false`, the loop stops. (e.g., `i < array.length`).
3.  **final-expression:** Executed *after* each iteration (e.g., increment the counter: `i++`).

**Looping Through an Array:**

```javascript
const colors = ['red', 'green', 'blue'];

// Loop from index 0 up to (but not including) colors.length
for (let i = 0; i < colors.length; i++) {
  console.log("Color at index " + i + " is " + colors[i]);
}
// Output:
// Color at index 0 is red
// Color at index 1 is green
// Color at index 2 is blue
```

:::codeeditor{language="JavaScript"}
const numbers = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // Add current number to sum
  console.log("Adding", numbers[i], "Current sum:", sum);
}
console.log("Final sum:", sum); // Output: Final sum: 60
:::

*   `i++` is shorthand for `i = i + 1`.
*   The loop variable (`i` here) is often used to access array elements by index (`colors[i]`).

### The `while` Loop

The `while` loop executes a block of code as long as a specified condition is `true`. It's useful when you don't know exactly how many iterations are needed beforehand.

**Syntax:**

```javascript
while (condition) {
  // Code block to execute
  // **Crucial:** Must eventually make the condition false,
  // or you create an infinite loop!
}
```

Example: Counting down.

```javascript
let count = 3;

while (count > 0) {
  console.log("Countdown: " + count);
  count = count - 1; // Decrement count - essential step!
}

console.log("Blast off!");
// Output:
// Countdown: 3
// Countdown: 2
// Countdown: 1
// Blast off!
```

:::codeeditor{language="JavaScript"}
let i = 0;
while (i < 5) {
    console.log("Current value of i:", i);
    i++; // Increment i to eventually make the condition false
}
console.log("Loop finished.");
:::

*   **Infinite Loops:** If the condition in a `while` loop *never* becomes false, the loop runs forever, crashing the browser tab. Always ensure there's a way to exit the loop (like incrementing/decrementing a counter).

## Putting It All Together - The Library App

Let's build a simple command-line style library search app using `prompt`, arrays, loops, and conditionals.

**1. Setup:** Define the library collection and necessary variables.

```javascript
// Our library collection (an array of strings)
const bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];
bookTitles.sort(); // Alphabetize the list

const libRequests = []; // An array to store user requests
let userCommand = "";    // Variable to store user input
```

**2. Welcome Message:**

```javascript
alert("Welcome to the Library!\n\n" +
      "Commands:\n" +
      "- Type a book title to search.\n" +
      "- Type 'DISPLAY' to see all titles.\n" +
      "- Type 'REQUEST' to request a book.\n" +
      "- Type 'QUIT' to exit.");
// Note: \n creates a new line in alert/prompt messages
```

**3. Main Loop:** Keep prompting the user until they type 'QUIT'.

```javascript
while (userCommand !== 'QUIT') {
    userCommand = prompt("Enter command or book title (or 'QUIT'):").toUpperCase(); // Get input, convert to uppercase

    // Handle different commands using if/else if
    if (userCommand === 'QUIT') {
        alert("Thank you for visiting the library!");
        break; // Exit the while loop
    } else if (userCommand === 'DISPLAY') {
        // Display all books (uses a for loop)
        let allTitles = "Available Titles:\n";
        for (let i = 0; i < bookTitles.length; i++) {
            allTitles += "- " + bookTitles[i] + "\n"; // Add each title to the string
        }
        alert(allTitles);
    } else if (userCommand === 'REQUEST') {
        // Handle book requests
        const requestedTitle = prompt("What book would you like to request?");
        if (requestedTitle) { // Check if the user entered something
            libRequests.push(requestedTitle);
            alert("Request for '" + requestedTitle + "' logged. Your requests: " + libRequests.join(", "));
        } else {
            alert("Request cancelled.");
        }
    } else {
        // Assume user entered a title to search for
        const searchTerm = userCommand; // User input is the search term
        let found = false; // Flag to track if the book was found

        // Loop through bookTitles to check for a match (case-insensitive)
        for (let i = 0; i < bookTitles.length; i++) {
            if (bookTitles[i].toUpperCase() === searchTerm) {
                alert("Yes, '" + bookTitles[i] + "' is available!");
                found = true;
                break; // Stop searching once found
            }
        }

        // If the loop finished and 'found' is still false
        if (!found) {
            alert("Sorry, '" + searchTerm + "' is not in our collection. You can try requesting it.");
        }
    }
} // End of while loop
```

:::codeeditor{language="JavaScript"}
// Paste all parts of the Library App code here to run it.

// 1. Setup
const bookTitles = [
    'Too Loud a Solitude', 'Things Fall Apart', 'The Master and Margarita',
    'The Three Body Problem', 'The Woman Destroyed', 'Beloved',
    'The Tenant of Wildfell Hall', "Lady Chatterley's Lover",
];
bookTitles.sort();
const libRequests = [];
let userCommand = "";

// 2. Welcome
alert("Welcome to the Library!\n\n" +
      "Commands:\n" +
      "- Type a book title to search.\n" +
      "- Type 'DISPLAY' to see all titles.\n" +
      "- Type 'REQUEST' to request a book.\n" +
      "- Type 'QUIT' to exit.");

// 3. Main Loop
while (userCommand !== 'QUIT') {
    const rawInput = prompt("Enter command or book title (or 'QUIT'):");
    // Handle if user clicks Cancel/Esc (prompt returns null)
    if (rawInput === null) {
        userCommand = 'QUIT'; // Treat cancel as quit
    } else {
         userCommand = rawInput.toUpperCase(); // Get input, convert to uppercase
    }


    // Handle different commands
    if (userCommand === 'QUIT') {
        alert("Thank you for visiting the library!");
        // Loop will terminate naturally on next check
    } else if (userCommand === 'DISPLAY') {
        let allTitles = "Available Titles:\n";
        for (let i = 0; i < bookTitles.length; i++) {
            allTitles += "- " + bookTitles[i] + "\n";
        }
        alert(allTitles);
    } else if (userCommand === 'REQUEST') {
        const requestedTitle = prompt("What book would you like to request?");
        if (requestedTitle) { // Check if the user entered something (not null or empty string)
            libRequests.push(requestedTitle);
            alert("Request for '" + requestedTitle + "' logged. Your requests: " + libRequests.join(", "));
        } else {
            alert("Request cancelled.");
        }
    } else if (userCommand === '') {
        // Handle empty input if needed, maybe prompt again or ignore
        alert("Please enter a command or title.");
    }
    else {
        // Assume user entered a title to search for
        const searchTerm = userCommand;
        let found = false;

        for (let i = 0; i < bookTitles.length; i++) {
            // Case-insensitive comparison
            if (bookTitles[i].toUpperCase() === searchTerm) {
                alert("Yes, '" + bookTitles[i] + "' is available!");
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Sorry, '" + searchTerm + "' is not in our collection. You can try requesting it.");
        }
    }
} // End of while loop
:::

*   **Explanation:**
    *   The `while` loop continues as long as `userCommand` is not 'QUIT'.
    *   Inside the loop, we get user input using `prompt()` and convert it to uppercase using `.toUpperCase()` for case-insensitive comparisons.
    *   An `if/else if/else` structure handles the different commands ('QUIT', 'DISPLAY', 'REQUEST') or defaults to searching.
    *   `break;` is used to exit the loop immediately when 'QUIT' is entered.
    *   The 'DISPLAY' command uses a `for` loop to build a string containing all titles.
    *   The search logic also uses a `for` loop and compares the uppercase search term with the uppercase book title. A `found` flag tracks if a match occurred.
    *   `.join(", ")` is used to display the requested books nicely.

*   **Limitations:** This is still basic. Searching requires an exact title match (though case-insensitive). Error handling is minimal. A real app would use a better interface and more robust searching.

## Review Questions

If `myArray` is `['a', 'b', 'c']`, what is `myArray[1]`?

:::quiz
- 'a'
- 'b'*
- 'c'
- undefined
:::

What does the `.push()` method do to an array?

:::quiz
- Removes the last element.
- Removes the first element.
- Adds an element to the beginning.
- Adds an element to the end.*
:::

Consider the loop: `for (let i = 0; i < 3; i++) { console.log(i); }`. What will be logged to the console?

:::quiz
- 1, 2, 3
- 0, 1, 2*
- 0, 1, 2, 3
- 1, 2
:::

What is the primary risk associated with `while` loops if not coded carefully?

:::quiz
- They are slower than `for` loops.
- They can only loop through arrays.
- They might cause an infinite loop if the condition never becomes false.*
- They cannot use a counter variable.
:::

## Challenges

1.  **Sum of Evens:** Write a `for` loop that iterates from 1 to 20. Inside the loop, use an `if` statement and the modulo operator (`%`) to check if the current number `i` is even. If it is, add it to a running `sum` variable (initialized to 0 before the loop). After the loop, `console.log` the final `sum`.
2.  **Improved Library Search:** Modify the Library App's search logic. Instead of an exact match, use the string method `.includes()` ([MDN .includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)) to check if the `bookTitle` *contains* the `searchTerm` (both converted to uppercase or lowercase for case-insensitivity). Alert the user if any matches are found. This allows partial title searches.

### Challenge 1: Sum of Evens
:::secret
```javascript
// Challenge 1: Sum of Evens
let sumOfEvens = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sumOfEvens = sumOfEvens + i;
  }
}
console.log("Sum of even numbers from 1 to 20:", sumOfEvens); // Should be 110
```
:::

### Challenge 2: Improved Library Search
:::secret
```javascript
// Challenge 2: Improved Library Search (showing only the relevant part)
// Assume bookTitles array and searchTerm variable exist from the app

// --- Inside the 'else' block of the Library App's main loop ---

const searchTermUpper = searchTerm.toUpperCase(); // Use existing variable from app
let foundTitles = []; // Array to hold matching titles

for (let i = 0; i < bookTitles.length; i++) {
    const currentTitleUpper = bookTitles[i].toUpperCase();
    if (currentTitleUpper.includes(searchTermUpper)) {
        // Found a match (or partial match)
        foundTitles.push(bookTitles[i]); // Add the original title to our list
    }
}

// After the loop, check if any titles were found
if (foundTitles.length > 0) {
    alert("Found matching title(s):\n- " + foundTitles.join("\n- "));
} else {
    alert("Sorry, no titles matching '" + searchTerm + "' found. You can try requesting it.");
}

// --- End of relevant part ---
```
:::

## Key Terms

-   `array`
-   index / indexing (0-based)
-   `.length` property
-   `.push()`, `.pop()`, `.indexOf()`, `.includes()`, `.sort()`, `.splice()` methods
-   loop
-   `for` loop (initialization, condition, final-expression)
-   `while` loop
-   iteration
-   increment (`++`), decrement (`--`)
-   infinite loop
-   `.toUpperCase()`, `.toLowerCase()` string methods
-   `.join()` array method

---

# Functions: Reusable Code Blocks

As programs grow, you'll find yourself writing the same (or very similar) pieces of code multiple times. **Functions** allow you to package a block of code, give it a name, and reuse it whenever needed, making your code more organized, readable, and efficient.

In this lesson, we'll learn to define and call our own functions, understand function parameters and return values, and delve deeper into variable **scope** (`let`/`const` vs. the older `var`). We'll apply these concepts by creating a simple student grading program using **objects**.

## What are Functions?

A function is a reusable block of code designed to perform a specific task.

**Analogy:** Think of a function like a recipe. It has a name (e.g., "makePancakes"), it might need ingredients (**parameters**), it has a set of steps (the code inside), and it produces a result (**return value**, e.g., a stack of pancakes).

**Basic Syntax (Function Declaration):**

```javascript
function functionName(parameter1, parameter2, ...) {
  // Code block: the steps to perform
  // ...
  return value; // Optional: sends a result back
}
```

*   **`function` keyword:** Starts the declaration.
*   **`functionName`:** A descriptive name (use camelCase).
*   **`parameters`:** (Optional) Variables listed inside the parentheses `()`, separated by commas. They act as placeholders for inputs the function will receive when called.
*   **Code Block `{...}`:** The statements that perform the function's task.
*   **`return` statement:** (Optional) Specifies the value the function sends back to the place where it was called. If omitted, the function implicitly returns `undefined`.

**Example: An `add` Function**

```javascript
function add(num1, num2) {
  const sum = num1 + num2;
  return sum; // Return the calculated sum
}
```

This function `add` takes two parameters (`num1`, `num2`), calculates their sum, stores it in a local variable `sum`, and then returns that `sum`.

## Calling a Function

Defining a function doesn't run its code. You need to **call** (or invoke) the function by using its name followed by parentheses `()`. When calling, you provide actual values, called **arguments**, for the parameters.

```javascript
// Define the function
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

// Call the function with arguments 5 and 3
const result = add(5, 3); // The return value (8) is stored in 'result'
console.log(result);     // Output: 8

// Call it again with different arguments
const anotherResult = add(10, -2);
console.log(anotherResult); // Output: 8

// You can use the return value directly
console.log("2 + 2 equals " + add(2, 2)); // Output: 2 + 2 equals 4
```

:::codeeditor{language="JavaScript"}
function greet(name) {
  const message = "Hello, " + name + "!";
  return message;
}

const greetingForAlice = greet("Alice");
console.log(greetingForAlice);

console.log(greet("Bob"));
:::

*   **Parameters vs. Arguments:**
    *   **Parameters** are the variables listed in the function definition (`num1`, `num2` in `add`).
    *   **Arguments** are the actual values passed into the function when it's called (`5`, `3` in `add(5, 3)`).

**Functions Without Parameters or Return Values:**

A function doesn't *have* to take parameters or explicitly return a value.

```javascript
function sayHello() {
  console.log("Hello there!");
  // Implicitly returns undefined
}

sayHello(); // Output: Hello there!
const returnValue = sayHello(); // Output: Hello there! (again)
console.log(returnValue);       // Output: undefined
```

:::codeeditor{language="JavaScript"}

:::

## Scope: Where Variables Live

**Scope** determines the accessibility (visibility) of variables. Where you declare a variable affects where it can be used. JavaScript has different types of scope. Understanding scope is crucial for avoiding bugs.

### Block Scope (`let` and `const`)

Variables declared with `let` and `const` have **block scope**. They exist only within the nearest enclosing block, defined by curly braces `{...}` (like in `if` statements, `for` loops, or functions).

```javascript
function testScope() {
  const functionVar = "I'm inside the function";
  console.log(functionVar); // Works

  if (true) {
    const blockVar = "I'm inside the if-block";
    let blockLetVar = "Me too";
    console.log(functionVar); // Works (outer scope is accessible)
    console.log(blockVar);    // Works
    console.log(blockLetVar); // Works
  }

  // console.log(blockVar); // ERROR! blockVar is not defined here
  // console.log(blockLetVar); // ERROR! blockLetVar is not defined here
}

testScope();
// console.log(functionVar); // ERROR! functionVar is not defined here
```

:::codeeditor{language="JavaScript"}

:::

*   Variables declared inside a block are not accessible outside that block.
*   Inner blocks can access variables from outer blocks.

### Function Scope (`var` - Legacy)

Variables declared with the older `var` keyword have **function scope** (or global scope if declared outside any function). They are accessible anywhere within the function they are declared in, regardless of blocks (`if`, `for`).

```javascript
function testVarScope() {
  if (true) {
    var legacyVar = "I'm declared with var";
  }
  console.log(legacyVar); // WORKS! var "leaks" out of the if-block
}

testVarScope(); // Output: I'm declared with var
// console.log(legacyVar); // ERROR! Still not accessible outside the function
```

This "leaking" behavior of `var` is often confusing and error-prone. **This is why `let` and `const` (with block scope) are strongly preferred in modern JavaScript.**

### Global Scope

Variables declared outside of any function or block have **global scope**. They are accessible from anywhere in your script.

```javascript
const appName = "My Cool App"; // Global variable

function showAppName() {
  console.log("App name is: " + appName); // Accessing global variable
}

showAppName(); // Output: App name is: My Cool App
console.log(appName); // Output: My Cool App
```

*   **Caution:** Avoid creating too many global variables. They can lead to naming conflicts between different parts of your code or between different scripts on the same page ("polluting the global scope"). Encapsulate variables within functions or modules whenever possible.

## Objects: Key-Value Collections

While arrays store ordered lists, **objects** store collections of related data and functionality using **key-value pairs**. Think of them like dictionaries or real-world objects with properties.

**Syntax (Object Literal):**

```javascript
const student = {
  // key: value
  firstName: "Ada",
  lastName: "Lovelace",
  major: "Mathematics",
  graduationYear: 1833, // Numbers are okay
  isEnrolled: true,      // Booleans are okay
  // Methods (functions within objects)
  greet: function() {
    console.log("Hello, my name is " + this.firstName); // 'this' refers to the object itself
  }
};
```

*   Objects are enclosed in curly braces `{}`.
*   Keys are usually strings (quotes are optional if the key is a valid identifier) or symbols.
*   Values can be any data type (string, number, boolean, array, another object, function).
*   Key-value pairs are separated by commas.
*   Functions within objects are called **methods**.

**Accessing Properties:** Use dot notation (`.`) or bracket notation (`[]`).

```javascript
console.log(student.firstName);      // Output: Ada (Dot notation)
console.log(student["lastName"]);    // Output: Lovelace (Bracket notation)

// Bracket notation is useful when the key is stored in a variable
const propToAccess = "major";
console.log(student[propToAccess]); // Output: Mathematics

// Calling a method
student.greet(); // Output: Hello, my name is Ada
```

**Modifying Properties:**

```javascript
student.major = "Computer Science"; // Change existing property
student.minor = "Physics";         // Add a new property
console.log(student.major);        // Output: Computer Science
console.log(student.minor);        // Output: Physics
```

:::codeeditor{language="JavaScript"}
const book = {
  title: "Moby Dick",
  author: "Herman Melville",
  yearPublished: 1851,
  genres: ["Adventure", "Fiction", "Nautical"]
};

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("First genre:", book.genres[0]); // Access array inside object

book.yearPublished = 1851; // Correct if wrong, or just reassign
book.rating = 5; // Add new property
console.log(book);
:::

Objects are incredibly versatile for structuring complex data.

## The Student Grades Program (Using Functions and Objects)

Let's build a program to manage student grades, using functions for organization and an array of objects for the data.

**1. Data Structure:** An array of student objects.

```javascript
// Array of student objects
let students = [
  {
    name: "Bob",
    grades: [88, 90, 80, 77, 89]
  },
  {
    name: "Alice",
    grades: [100, 95, 92, 89, 97]
  },
  {
    name: "Juan",
    grades: [91, 90, 94, 86, 90]
  }
];
```

**2. Function to Print Grades:**

```javascript
// Function to print all student names and their grades
function printGrades(studentArray) {
  console.log("--- Student Grades ---");
  for (let i = 0; i < studentArray.length; i++) {
    const student = studentArray[i]; // Get the current student object
    // Use template literal for cleaner output:
    console.log(`${student.name}: ${student.grades.join(', ')}`);
  }
  console.log("--------------------");
}
```
*   **Template Literals:** The string enclosed in backticks (`` `...` ``) is a template literal. Inside it, `${...}` allows you to embed expressions (like variable values) directly. This is often cleaner than using `+` for concatenation.
*   `.join(', ')` converts the grades array into a comma-separated string.

**3. Function to Add a Student:**

```javascript
// Function to add a new student
function addStudent(studentArray, name, grades) {
  const newStudent = {
    name: name,
    grades: grades
  };
  studentArray.push(newStudent); // Adds the new object to the original array
  console.log(\`Added student: ${name}\`);
}
```
*   Note: This function modifies the original `students` array passed into it.

**4. Function to Convert Grades to Letters:**

```javascript
// Function to convert number grades to letter grades and print
function printLetterGrades(studentArray) {
  console.log("--- Letter Grades ---");
  for (let i = 0; i < studentArray.length; i++) {
    const student = studentArray[i];
    const grades = student.grades; // Get the grades array for this student
    let letterGrades = []; // Array to store letter grades

    // Inner loop to process each grade for the current student
    for (let j = 0; j < grades.length; j++) {
      const grade = grades[j];
      let letter = '';
      if (grade >= 90) {
        letter = 'A';
      } else if (grade >= 80) {
        letter = 'B';
      } else if (grade >= 70) {
        letter = 'C';
      } else if (grade >= 60) {
        letter = 'D';
      } else {
        letter = 'F';
      }
      letterGrades.push(letter); // Add the letter to the array
    }
    // Print the student's name and their letter grades
    console.log(`${student.name}: ${letterGrades.join(' ')}`);
  }
  console.log("-------------------");
}
```
*   This function uses nested loops: the outer loop iterates through students, and the inner loop iterates through the grades of *each* student.

**5. Using the Functions:**

```javascript
// Initial print
printGrades(students);

// Add a new student
addStudent(students, "Biff", [71, 80, 56, 65, 60]);

// Print again to see the new student
printGrades(students);

// Print letter grades
printLetterGrades(students);
```

:::codeeditor{language="JavaScript"}
// Paste all parts of the Student Grades code here to run it.

// 1. Data Structure
let students = [
  { name: "Bob", grades: [88, 90, 80, 77, 89] },
  { name: "Alice", grades: [100, 95, 92, 89, 97] },
  { name: "Juan", grades: [91, 90, 94, 86, 90] }
];

// 2. Function to Print Grades
function printGrades(studentArray) {
  console.log("--- Student Grades ---");
  for (let i = 0; i < studentArray.length; i++) {
    const student = studentArray[i];
    console.log(\`${student.name}: ${student.grades.join(', ')}\`);
  }
  console.log("--------------------");
}

// 3. Function to Add a Student
function addStudent(studentArray, name, grades) {
  const newStudent = { name: name, grades: grades };
  studentArray.push(newStudent);
  console.log(\`Added student: ${name}\`);
}

// 4. Function to Convert Grades to Letters
function printLetterGrades(studentArray) {
  console.log("--- Letter Grades ---");
  for (let i = 0; i < studentArray.length; i++) {
    const student = studentArray[i];
    const grades = student.grades;
    let letterGrades = [];
    for (let j = 0; j < grades.length; j++) {
      const grade = grades[j];
      let letter = '';
      if (grade >= 90) { letter = 'A'; }
      else if (grade >= 80) { letter = 'B'; }
      else if (grade >= 70) { letter = 'C'; }
      else if (grade >= 60) { letter = 'D'; }
      else { letter = 'F'; }
      letterGrades.push(letter);
    }
    console.log(`${student.name}: ${letterGrades.join(' ')}`);
  }
  console.log("-------------------");
}

// 5. Using the Functions
printGrades(students);
addStudent(students, "Biff", [71, 80, 56, 65, 60]);
printGrades(students);
printLetterGrades(students);
:::
*Check your browser's developer console for the output.*

By using functions, we've made the code modular and easier to understand. Each function has a single, clear purpose.

## Review Questions

What is the primary benefit of using functions in programming?

:::quiz
- They make the code run faster.
- They allow you to reuse blocks of code, making it organized and maintainable.*
- They are the only way to use loops.
- They automatically handle errors.
:::

In the function definition `function calculateArea(width, height)`, what are `width` and `height` called?

:::quiz
- Arguments
- Methods
- Parameters*
- Returns
:::

Variables declared with `let` and `const` inside a `for` loop's code block (`{...}`) are accessible:

:::quiz
- Only inside that `for` loop block.*
- Anywhere within the function containing the loop.
- Globally throughout the script.
- Only before the loop starts.
:::

How do you access the value associated with the key `email` in an object named `user`? (Select all correct ways)

:::quiz
- `user(email)`
- `user.email`*
- `user[email]` (Only if `email` is a variable holding the string "email")
- `user["email"]`*
:::

## Challenges

1.  **Average Grade Function:** Write a function `calculateAverage(gradesArray)` that takes an array of numbers (grades) as input. Inside the function, use a loop to sum the grades and then return the average grade (sum / number of grades). Test it by calling it with one of the student's `grades` arrays from the example program and logging the result.
2.  **Arrow Function Syntax:** Rewrite the `addStudent` function from the example using **arrow function syntax**. Check the [MDN Arrow Functions guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for syntax.
3.  **Remove Student Function:** Add a function `removeStudent(studentArray, nameToRemove)` to the Student Grades program. This function should find the student object with the matching `nameToRemove` in the `studentArray` and remove it. (Hint: Find the index of the student first, perhaps using a loop or the `.findIndex()` array method, then use the `.splice()` method to remove that student object). Test it by removing "Biff".

### Challenge 1: Average Grade Function
:::secret
```javascript
// Challenge 1: Average Grade Function
function calculateAverage(gradesArray) {
  if (gradesArray.length === 0) {
    return 0; // Avoid division by zero for empty arrays
  }
  let sum = 0;
  for (let i = 0; i < gradesArray.length; i++) {
    sum += gradesArray[i]; // Shorthand for sum = sum + gradesArray[i]
  }
  return sum / gradesArray.length;
}

// Assuming 'students' array exists from the example
const bobsGrades = students[0].grades;
const bobsAverage = calculateAverage(bobsGrades);
console.log(`Bob's average grade: ${bobsAverage}`);
```
:::

#### Challenge 2: Add Student as Arrow Function
:::secret
```javascript
// Challenge 2: addStudent as Arrow Function
const addStudentArrow = (studentArray, name, grades) => {
  const newStudent = { name: name, grades: grades };
  studentArray.push(newStudent);
  console.log(`(Arrow Fn) Added student: ${name}`);
};

// Test arrow function version
addStudentArrow(students, "Chloe", [85, 88, 92, 90, 89]);
console.log(students); // Check if Chloe was added
```
:::

### Challenge 3: Remove Student Function
:::secret
```javascript
// Challenge 3: Remove Student Function
function removeStudent(studentArray, nameToRemove) {
  let indexToRemove = -1;
  // Find the index of the student to remove
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i].name === nameToRemove) {
      indexToRemove = i;
      break; // Stop loop once found
    }
  }

  // If the student was found (index is not -1)
  if (indexToRemove > -1) {
    studentArray.splice(indexToRemove, 1); // Remove 1 element at indexToRemove
    console.log(`Removed student: ${nameToRemove}`);
  } else {
    console.log(`Student "${nameToRemove}" not found.`);
  }
}

// Test remove function
removeStudent(students, "Biff");
console.log(students); // Check if Biff was removed

removeStudent(students, "NonExistent"); // Test case for student not found
```
:::

## Key Terms

-   function
-   parameter
-   argument
-   `return` value
-   call / invoke
-   scope (block scope, function scope, global scope)
-   `let`, `const`, `var` (legacy)
-   object
-   key-value pair
-   property
-   method (function in an object)
-   `this` keyword (within objects)
-   template literals (`` `${}` ``)

---

# Making Mistakes: Errors and Debugging

Making mistakes is an inevitable and essential part of learning to program. Even experienced developers encounter errors (**bugs**) regularly. The key skill is not avoiding errors entirely, but learning how to **debug** – to find and fix them.

This lesson covers common types of JavaScript errors and strategies for identifying and resolving them, including the indispensable `console.log()` and the concept of pseudo-code.

## Common Types of Errors

Errors stop your program from running correctly. The browser console is your best friend for seeing error messages.

### 1. Syntax Errors

These occur when your code violates the grammatical rules of JavaScript. The browser cannot understand the instruction. They often result from typos, missing punctuation, or incorrect structure.

**Example:** Missing closing parenthesis `)` in an `if` statement.

```javascript
const oops = 12;
// Error on the next line: missing ')' before '{'
if (oops === 12 { // SYNTAX ERROR!
    alert(oops);
}
```

:::codeeditor{language="JavaScript"}

:::

*   **Console Message:** Often looks like `Uncaught SyntaxError: Unexpected token '{'` or similar, pointing near the location of the mistake.
*   **Fixing:** Carefully read the error message and examine the line number indicated (and often the line *before* it). Look for missing parentheses `()`, curly braces `{}`, square brackets `[]`, quotes `""`/`''`, commas `,`, or semicolons `;`, and check for misspelled keywords (`functin` instead of `function`).

### 2. Reference Errors

These happen when you try to use a variable or function that hasn't been declared or is not accessible in the current scope.

**Example:** Using a variable outside its block scope.

```javascript
function test() {
  if (true) {
    let blockScopedVar = "Inside block";
  }
  console.log(blockScopedVar); // REFERENCE ERROR!
}
test();
```

:::codeeditor{language="JavaScript"}

:::

*   **Console Message:** `Uncaught ReferenceError: blockScopedVar is not defined`.
*   **Fixing:** Check for typos in the variable name. Ensure the variable is declared (`let`, `const`) *before* you use it and *within* a scope accessible from where you're trying to use it. Remember `let`/`const` are block-scoped.

### 3. Type Errors

These occur when you try to perform an operation on a value of an inappropriate data type.

**Example:** Calling a string method on a number.

```javascript
let num = 123;
// Error: num.toUpperCase is not a function
console.log(num.toUpperCase()); // TYPE ERROR!
```

:::codeeditor{language="JavaScript"}

:::

*   **Console Message:** `Uncaught TypeError: num.toUpperCase is not a function`.
*   **Fixing:** Make sure the value has the type you expect. Use `typeof` to check if needed. Convert the value to the correct type if necessary (e.g., `num.toString().toUpperCase()`). Ensure you are calling methods that actually exist for that data type.

### 4. Logical Errors

These are often the trickiest. The code runs without crashing (no syntax, reference, or type errors), but it doesn't produce the *intended* result. The logic of the program is flawed.

**Example:** Incorrect loop condition causing an infinite loop or wrong calculation.

```javascript
// Intended: calculate sum of 1 to 5. Reality: Infinite loop!
let count = 1;
let sum = 0;
while (count > 0) { // Logical Error: Condition is always true
  sum += count;
  // Missing: count++; // Forgot to increment count!
  // To prevent crashing this editor, let's add a safety break:
   if (count > 10) break; // Safety break for example only
}
console.log(sum); // This might never be reached if not for the safety break
```

:::codeeditor{language="JavaScript"}

:::

*   **Console Message:** Usually none, unless the error leads to another type (like an infinite loop eventually crashing the browser).
*   **Fixing:** Requires careful analysis of the code's logic. Step through the code mentally or using debugging tools. Check conditions (`if`, `while`, `for`), calculations, and the overall flow. `console.log()` is invaluable here.

## Debugging Strategies

### 1. Read the Error Message Carefully

The console error message is your first clue. It usually tells you:
*   **Type of error:** `SyntaxError`, `ReferenceError`, `TypeError`.
*   **Description:** A brief explanation of the problem.
*   **Location:** The file name and line number where the error occurred (or was detected). This is often a starting point, but the actual mistake might be on a preceding line.

### 2. Use `console.log()` Extensively

This is the simplest yet most powerful debugging technique. Print the values of variables at different stages of your code to see if they are what you expect.

```javascript
function calculateTotal(price, quantity) {
  console.log("Calculating total for price:", price, " quantity:", quantity); // Check inputs
  const subtotal = price * quantity;
  console.log("Subtotal calculated:", subtotal); // Check intermediate result
  const tax = subtotal * 0.1; // Assume 10% tax
  console.log("Tax calculated:", tax); // Check tax calculation
  const total = subtotal + tax;
  console.log("Final total:", total); // Check final result
  return total;
}

calculateTotal(10, 5);
calculateTotal(100, -1); // What happens here?
```

*   Log inputs to functions.
*   Log values before and after calculations or conditional checks.
*   Log intermediate results within loops.
*   Combine with `typeof` to check data types: `console.log("Variable x:", x, "Type:", typeof x);`

### 3. Isolate the Problem ("Divide and Conquer")

If you have a large block of code that isn't working:
*   **Comment out sections:** Temporarily disable parts of the code using `/* ... */` or `//` to see if the error disappears. This helps narrow down where the issue lies.
*   **Test small pieces:** Run individual lines or small functions in the console to verify they work as expected in isolation.

### 4. Write Pseudo-code

Before writing complex logic, or when debugging faulty logic, step back and write **pseudo-code**. This means describing the steps your code *should* take using plain English mixed with code-like structure (indentation, keywords like IF, THEN, ELSE, FOR, WHILE).

**Example (Pseudo-code for finding the largest number in an array):**

```
FUNCTION findLargest(numbersArray)
  IF numbersArray is empty THEN
    RETURN null // Or handle error appropriately
  ENDIF

  SET largestSoFar = first element of numbersArray

  FOR each remaining number in numbersArray starting from the second element
    IF current number > largestSoFar THEN
      SET largestSoFar = current number
    ENDIF
  ENDFOR

  RETURN largestSoFar
ENDFUNCTION
```

Pseudo-code helps you clarify the logic without getting bogged down in exact syntax, making it easier to spot flaws in your reasoning.

### 5. Rubber Duck Debugging

Explain your code, line by line, out loud to someone else, or even to an inanimate object (like a rubber duck). The act of articulating the process often forces you to see the flaw you overlooked.

### 6. Simplify and Test Edge Cases

*   Does the code work with simple, expected inputs?
*   What happens with unusual inputs (e.g., 0, negative numbers, empty strings, empty arrays)? These are **edge cases**. Test them!
*   Temporarily replace complex parts with simpler, fixed values to see if other parts of the code work correctly.

### 7. Take a Break

Sometimes, staring at the same problem for too long makes it harder to see the solution. Step away, do something else, and come back with fresh eyes.

Debugging is a skill that improves with practice. Don't get discouraged! Treat errors as puzzles to be solved.

## Review Questions

An error caused by forgetting a closing parenthesis `)` is most likely a:

:::quiz
- `TypeError`
- `ReferenceError`
- `SyntaxError`*
- Logical Error
:::

If the console shows `Uncaught ReferenceError: myVar is not defined`, what is the most likely cause?

:::quiz
- You tried to add a string to a number.
- You forgot a semicolon.
- You are using a variable that hasn't been declared or is out of scope.*
- Your `if` statement condition is wrong.
:::

Code that runs without crashing but produces the wrong answer contains a:

:::quiz
- `TypeError`
- `SyntaxError`
- `ReferenceError`
- Logical Error*
:::

Which debugging technique involves explaining your code step-by-step, often out loud?

:::quiz
- Divide and Conquer
- Using `console.log()`
- Writing Pseudo-code
- Rubber Duck Debugging*
:::

## Challenges

1.  **Find the Bug:** The following code is intended to calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120). It contains a logical error. Use `console.log` or step through the logic to find and fix it.

    ```javascript
    function factorial(n) {
      let result = 0; // Bug might be here
      for (let i = n; i >= 1; i--) {
        result = result * i; // Bug might be here
      }
      return result;
    }
    console.log("Factorial of 5:", factorial(5)); // Should be 120
    ```

:::codeeditor{language="JavaScript"}
// Fix the factorial function here
function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  if (n === 0) return 1;      // Factorial of 0 is 1

  let result = 1; // <<< FIX 1: Initialize to 1 (identity for multiplication)
  for (let i = n; i >= 1; i--) {
    console.log(`Calculating: ${result} * ${i}`); // Debugging log
    result = result * i; // <<< FIX 2: Logic is correct, initialization was the issue.
  }
  return result;
}
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
:::

2.  **Pseudo-code Practice:** Write pseudo-code for a function that takes an array of strings and returns a new array containing only the strings that have more than 5 characters.

## Key Terms

-   Error / Bug
-   Debugging
-   `SyntaxError`
-   `ReferenceError`
-   `TypeError`
-   Logical Error
-   `console.log()` (for debugging)
-   Pseudo-code
-   Rubber Duck Debugging
-   Edge Cases

---

# VSCode and GitHub: Your Development Environment

So far, we've mostly used the browser console or embedded editors. For real projects, you need a proper code editor and a way to manage your code versions and collaborate. We'll set up **Visual Studio Code (VSCode)** as our editor and **Git/GitHub** for version control.

From now on, create a dedicated folder on your computer for this course's work (e.g., `javascript_course`). We'll store all our project files here.

Click the button below to download starting files (`index.html`, `script.js`). Unzip the downloaded file and place these two files inside your new `javascript_course` folder.

::download{files="index.html, script.js"}<br />
*(These will be very basic files to get you started).*

## Visual Studio Code (VSCode)

VSCode is a free, powerful, and popular code editor from Microsoft, available for Windows, macOS, and Linux. It offers features like:

*   **Syntax Highlighting:** Makes code easier to read.
*   **IntelliSense:** Code completion and suggestions.
*   **Debugging Tools:** Built-in debugger.
*   **Integrated Terminal:** Run command-line tools directly within the editor.
*   **Git Integration:** Manage version control easily.
*   **Extensions:** A vast marketplace to add more features and language support.

### Installing VSCode

1.  Go to the [official VSCode website](https://code.visualstudio.com/).
2.  Download the "Stable" version for your operating system.
3.  Run the installer and follow the prompts (accept defaults is usually fine).

### Opening Your Project Folder

1.  Launch VSCode.
2.  Go to `File > Open Folder...` (or `Code > File > Open Folder...` on Mac).
3.  Navigate to and select the `javascript_course` folder you created earlier. Click "Open" or "Select Folder".

You'll now see the VSCode interface. Key areas:

*   **Explorer (Left Sidebar):** Shows the files and folders in your opened project (`index.html`, `script.js`). Click files here to open them in the editor pane.
*   **Editor Pane (Center):** Where you view and edit your code files.
*   **Activity Bar (Far Left):** Icons for different views (Explorer, Search, Source Control, Extensions, etc.).
*   **Status Bar (Bottom):** Shows information about the current file, Git status, etc.

![VSCode Interface Overview (Conceptual)](/images/vscode_openproject.png)
*(Your view might look slightly different based on version/OS)*

Take a moment to open `index.html` and `script.js` by clicking them in the Explorer.

## Git and GitHub: Version Control

### What are Git and GitHub?

*   **Git:** A **version control system (VCS)**. It's software that runs on *your* computer to track changes you make to files over time. Think of it like "track changes" on steroids, allowing you to save snapshots (**commits**) of your project, view history, revert to previous versions, and manage different lines of development (**branches**). It's essential for managing code complexity and collaborating.
*   **GitHub:** A popular **web-based hosting service** for Git repositories. It provides a remote place to store your code (*your GitHub repository*), facilitates collaboration, issue tracking, project management, and offers features like GitHub Pages for hosting simple websites (which we'll use later).

You use **Git** locally to manage your project, and then you **push** your changes to **GitHub** to back them up, share them, or collaborate.

### Installing Git

VSCode uses Git, but you usually need to install Git separately first.

*   **macOS:** Open the Terminal app (`Applications > Utilities > Terminal`). Type `git --version` and press Enter. If Git isn't installed, it might prompt you to install the Xcode Command Line Tools, which include Git. Alternatively, download an installer from the [official Git website](https://git-scm.com/download/mac).
*   **Windows:** Download the installer from the [official Git website](https://git-scm.com/download/win). Run the installer; accepting the default settings is usually fine. You might need to restart VSCode after installation.
*   **Linux:** Use your distribution's package manager. E.g., on Debian/Ubuntu: `sudo apt update && sudo apt install git`. On Fedora: `sudo dnf install git`.

Verify installation by opening a terminal (in VSCode: `Terminal > New Terminal`) and typing `git --version`. You should see a version number.

### Configuring Git (First time only)

Open a terminal (VSCode or system terminal) and tell Git who you are. This information is attached to your commits.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace `"Your Name"` and `"your.email@example.com"` with the name and email you want to use (ideally the same ones you'll use for GitHub).

### Creating a GitHub Account

If you don't have one already:

1.  Go to [GitHub.com](https://github.com/).
2.  Click "Sign up".
3.  Follow the registration process. Using your student email might grant access to certain benefits (like the [Student Developer Pack](https://education.github.com/pack)).

## Connecting VSCode, Git, and GitHub

Now let's set up version control for our project folder and link it to GitHub.

**1. Initialize a Git Repository Locally:**

*   In VSCode, open the "Source Control" view from the Activity Bar (it usually looks like three connected dots or a branching icon).
*   If your folder isn't already a Git repository, you'll likely see a button like "Initialize Repository". Click it.
*   VSCode will ask which folder to initialize; confirm it's your `javascript_course` folder.

![Initialize Repository](/images/vscode_initgit.png)

You'll see your files (`index.html`, `script.js`) listed under "Changes". The 'U' means 'Untracked'.

**2. Make the Initial Commit:**

A **commit** is a snapshot of your project at a specific point in time. Every commit needs a **commit message** describing the changes made.

*   In the "Source Control" view, hover over the "Changes" title and click the `+` icon to **stage** all changes. Staging means preparing files to be included in the *next* commit. The files will move to a "Staged Changes" section.
*   In the "Message" box at the top of the Source Control view, type a descriptive message, like `Initial commit`.
*   Click the checkmark icon (✓) labelled "Commit".

![Initial Commit](/images/vscode_gitcommit.png) *(Concept showing staging, message box, and commit button)*

**3. Publish to GitHub:**

Now, let's create a remote repository on GitHub and push our local commits there.

*   In the Source Control view, you might now see a button like "Publish Branch" or "Publish to GitHub". Click it.
    ![Publish Branch](/images/vscode_publishbranch.png)
*   VSCode will likely ask you to sign in to GitHub. Click "Allow" and follow the prompts in your browser to authorize VSCode.
    ![Authorize VSCode](/images/github_authorize.png)
*   You'll be asked to name the repository on GitHub. You can keep the default (`javascript_course`) or choose another name.
*   Choose whether to make the repository **public** (visible to anyone) or **private** (visible only to you and collaborators you invite). For this course, **public** is usually preferred for easier sharing.
*   Click the button to publish (e.g., "Publish to public repository").

VSCode will create the repository on GitHub and push your initial commit. You should see a success notification. You can click the prompt to "Open in GitHub" to see your new repository online.

![New Repository](/images/github_new_repository.png)

**Congratulations! Your project is now under Git version control locally and backed up on GitHub.**

## The Basic Git Workflow

From now on, the typical process for saving your work will be:

1.  **Make Changes:** Edit your files (`.html`, `.css`, `.js`, etc.) in VSCode and save them.
2.  **Stage Changes:** Go to the Source Control view. Changed files will appear under "Changes". Click the `+` next to each file you want to include in the next commit, or the `+` next to "Changes" to stage all files.
    ![Staged Changes](/images/staged_changes.png)
3.  **Commit Changes:** Type a descriptive commit message (e.g., "Add heading to index page", "Implement feature X") in the message box and click the Commit (✓) button. This saves the snapshot *locally*.
4.  **Push Changes:** Click the "Sync Changes" button (often shows arrows or cloud icon) at the bottom-left status bar or in the Source Control view menu (`... > Push`). This uploads your local commits to your GitHub repository.

**Why Commit Often?** Committing frequently with small, logical changes makes it easier to track your progress, understand changes later, and revert specific mistakes if needed.

Let's practice:

1.  Open `index.html` in VSCode.
2.  Change the text inside the `<h1>` tags from `This is my project!` to `My Awesome JavaScript Project`.
3.  Save the file (`Ctrl+S` or `Cmd+S`).
4.  Go to the Source Control view. You'll see `index.html` listed under Changes.
5.  Stage the change (click the `+`).
6.  Type a commit message like `Update heading text`.
7.  Click Commit (✓).
8.  Click "Sync Changes" (push) to upload it to GitHub. Check your repository on GitHub.com to see the new commit.

![New Commit](/images/github_secondcommit.png)

This Stage -> Commit -> Push cycle is fundamental to using Git and GitHub.

## Review Questions

What is the primary function of Git?

:::quiz
- To host websites online.
- To edit code files.
- To track changes to files over time (version control).*
- To manage software licenses.
:::

What is GitHub primarily used for?

:::quiz
- Running JavaScript code directly.
- Hosting Git repositories remotely for backup and collaboration.*
- Designing user interfaces.
- Compiling code.
:::

In the Git workflow, what does "staging" mean?

:::quiz
- Saving the file to your hard drive.
- Uploading the file to GitHub.
- Marking changes that will be included in the next commit.*
- Reverting changes to a previous version.
:::

What command uploads your local commits to your remote GitHub repository?

:::quiz
- `git commit`
- `git stage`
- `git init`
- `git push`* (or clicking "Sync Changes" in VSCode)
:::

## Challenge

1.  Open `script.js` in VSCode.
2.  Change the `alert('Hey, it worked!');` line to `console.log('My script is running!');`.
3.  Save the file.
4.  Go through the Stage -> Commit -> Push cycle in VSCode's Source Control view. Use a descriptive commit message like `Change alert to console log in script.js`.
5.  Verify the change appears in your repository on GitHub.com.

## Key Terms

-   Code Editor (VSCode)
-   Version Control System (VCS)
-   Git
-   GitHub
-   Repository (Repo)
-   Commit (Snapshot)
-   Commit Message
-   Stage / Staging Area
-   Push (Upload to remote)
-   Branch (e.g., `main`)
-   Initialize Repository

---

# HTML and CSS: Structuring and Styling Web Pages

Now that our development environment is set up, let's dive into the core languages that define web pages: **HTML** for structure and content, and **CSS** for style and layout. JavaScript then adds interactivity to this structure and style.

Let's modify the `script.js` file again. Since we'll be reloading the page often, `alert()` pop-ups become annoying. **Comment out** the `alert()` line or change it back to `console.log()`.

```javascript
// Commented out: alert('My project is going to be awesome!');
console.log('Script loaded!'); // Use console.log for non-intrusive messages
```
Remember to stage, commit, and push this change!

## HTML, CSS, and JavaScript: The Trio

Think of building a webpage like building a house:

1.  **HTML (HyperText Markup Language):** The **structure** and **content**. It's the foundation, walls, roof, doors, windows, and the text/images inside. It defines *what* is on the page (headings, paragraphs, lists, images, links, forms).
2.  **CSS (Cascading Style Sheets):** The **presentation** and **style**. It's the paint color, wallpaper, furniture arrangement, font styles, spacing, and layout. It defines *how* the HTML elements look and where they are positioned.
3.  **JavaScript (JS):** The **interactivity** and **dynamic behavior**. It's the light switches, doorbell, opening/closing windows, or maybe even appliances. It allows users to *interact* with the page, changes content dynamically, fetches data, and responds to events (like clicks).

While they have distinct roles, they work together seamlessly. You can embed CSS and JS directly within HTML files, but it's best practice to keep them in separate `.css` and `.js` files for better organization and maintainability, linking them from the HTML.

## HTML Basics

HTML uses **tags** (keywords surrounded by angle brackets `< >`) to define elements. Most tags come in pairs: an opening tag `<tagname>` and a closing tag `</tagname>`. The content goes between them.

```html
<p>This is a paragraph.</p>
```

Some tags are **self-closing** (or **void elements**) and don't need a closing tag, like `<br>` (line break) or `<img>` (image). Conventionally written as `<br />` or `<img ... />`.

Let's examine our starting `index.html`:

```html
<!DOCTYPE html> <!-- Declares the document type (HTML5) -->
<html lang="en"> <!-- Root element, language set to English -->

  <head> <!-- Contains metadata (information *about* the page) -->
    <meta charset="utf-8"> <!-- Specifies character encoding (use UTF-8!) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Configures viewport for responsive design -->
    <title>My JavaScript Project</title> <!-- Title shown in the browser tab/window -->
    <link rel="stylesheet" href="styles.css"> <!-- Link to our external CSS file (we'll create this) -->
  </head>

  <body> <!-- Contains the *visible* content of the page -->

    <h1>My Awesome JavaScript Project</h1> <!-- Main heading -->

    <p>This is the starting point for our project.</p> <!-- A paragraph -->

    <!-- Link to our external JavaScript file. Usually placed just before </body> -->
    <script src="script.js"></script>
  </body>

</html>
```

**Key Parts:**

*   `<!DOCTYPE html>`: Essential first line for modern HTML.
*   `<html>`: The root element wrapping everything. `lang="en"` helps browsers and search engines.
*   `<head>`: Contains non-visible setup info.
    *   `<meta charset="utf-8">`: Crucial for correct character display.
    *   `<meta name="viewport"...>`: Important for mobile responsiveness.
    *   `<title>`: Text appears in the browser tab.
    *   `<link rel="stylesheet" href="...">`: Connects external CSS files.
*   `<body>`: Contains all content displayed to the user (headings, text, images, etc.).
    *   `<script src="..."></script>`: Connects external JavaScript files. Placing scripts at the *end* of the `<body>` is common practice. This ensures the HTML structure is loaded before the script tries to interact with it.

### Common HTML Tags

*   `<h1>` to `<h6>`: Headings (h1 is most important, h6 least).
*   `<p>`: Paragraph.
*   `<a>`: Anchor (creates hyperlinks). Requires `href` attribute.

```html
<a href="https://developer.mozilla.org/">Visit MDN</a>
```
*   `<img>`: Image. Requires `src` (source URL) and `alt` (alternative text for accessibility/if image fails). Self-closing.

```html
<img src="images/logo.png" alt="My Project Logo" />
```
*   `<ul>`, `<ol>`, `<li>`: Unordered list (`<ul>`, bullet points), ordered list (`<ol>`, numbered), and list item (`<li>`).

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```
*   `<div>`: Division. A generic block-level container used to group elements for styling or layout. Doesn't have inherent meaning.
*   `<section>`: Represents a thematic grouping of content.
*   `<span>`: A generic inline container, often used to style parts of text.

Find a complete list on [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### HTML Attributes

Attributes provide additional information about an element or modify its behavior. They appear inside the opening tag, usually as `name="value"`.

*   `href`: Specifies the URL for a link (`<a>` tag).
*   `src`: Specifies the source URL for images (`<img>`) or scripts (`<script>`).
*   `alt`: Provides alternative text for images (`<img>`). **Essential for accessibility!**
*   `id`: Assigns a **unique** identifier to an element (e.g., `<div id="main-content">`). Used for CSS styling and JavaScript targeting. An ID must be unique on the page.
*   `class`: Assigns one or more class names to an element (e.g., `<p class="highlight important">`). Used for CSS styling and JavaScript targeting. Multiple elements can share the same class, and an element can have multiple classes (separated by spaces).

## CSS Basics

CSS (Cascading Style Sheets) controls the visual appearance. We write CSS rules to **select** HTML elements and apply **styles** (properties and values) to them.

### Linking CSS

The best way is using an external stylesheet.

1.  **Create a CSS file:** In VSCode, create a new file named `styles.css` in the same folder as `index.html`.
2.  **Link it in HTML:** Add the `<link>` tag inside the `<head>` of your `index.html` (we already did this in the template):

```html
<link rel="stylesheet" href="styles.css">
```

### CSS Rule Syntax

A CSS rule consists of a **selector** and a **declaration block**.

```css
selector {
  property: value; /* This is a declaration */
  another-property: another-value;
  /* ... more declarations ... */
}
```

*   **Selector:** Targets the HTML element(s) to style (e.g., `h1`, `p`, `.my-class`, `#unique-id`).
*   **Declaration Block:** Enclosed in curly braces `{}`.
*   **Declaration:** A property-value pair, ending with a semicolon `;`.
    *   `property`: The style aspect to change (e.g., `color`, `font-size`, `background-color`).
    *   `value`: The setting for that property (e.g., `blue`, `16px`, `#FF0000`).

### Basic Selectors

*   **Type Selector:** Selects all elements of a specific type.

```css
/* Style all paragraphs */
p {
  color: navy;
  line-height: 1.6; /* Add space between lines */
}
/* Style the main body */
body {
  font-family: sans-serif; /* Use a common sans-serif font */
  background-color: #f0f0f0; /* Light grey background */
}
```

*   **Class Selector:** Selects elements with a specific class attribute. Starts with a dot `.`.

```css
/* Style elements with class="highlight" */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```
In HTML:
```html
<p class="highlight">Important text.</p>
```

*   **ID Selector:** Selects the *single* element with a specific ID attribute. Starts with a hash `#`.

```css
/* Style the element with id="main-logo" */
#main-logo {
  border: 2px solid red;
  padding: 10px;
}
```
in HTML:
```html
<img src="..." alt="..." id="main-logo">
```

### Applying Styles

Let's add some styles to `styles.css`:

```css
/* styles.css */

body {
  font-family: Arial, Helvetica, sans-serif; /* Font stack, tries Arial first */
  line-height: 1.5; /* Spacing between lines */
  background-color: #f4f4f4; /* Light gray background */
  color: #333; /* Dark gray text color */
  margin: 20px; /* Add some space around the body content */
}

h1 {
  color: #0056b3; /* A shade of blue */
  text-align: center; /* Center the heading */
}

/* Style links */
a {
  color: #0066cc;
  text-decoration: none; /* Remove underline */
}

a:hover { /* Style links when mouse hovers over them */
  color: #004080;
  text-decoration: underline; /* Add underline on hover */
}

/* Example class */
.important-note {
  font-style: italic;
  color: firebrick;
}

/* Example ID */
#page-footer {
  margin-top: 40px;
  padding-top: 10px;
  border-top: 1px solid #ccc; /* Light gray top border */
  font-size: 0.9em; /* Slightly smaller font */
  text-align: center;
}

```

Now, modify your `index.html` to use some of these:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JavaScript Project</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <h1>My Awesome JavaScript Project</h1>

    <p>This is the starting point for our project. We will use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> for structure, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> for style, and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> for interactivity.</p>

    <p class="important-note">Remember to save your files often!</p>

    <div id="page-footer">
      <p>&copy; 2024 Your Name Here</p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

Save both files and open `index.html` in your browser (or refresh if using Live Server). You should see the styles applied!

### The Cascade and Specificity

CSS stands for *Cascading* Style Sheets. This means styles "cascade" down, and conflicts are resolved based on:

1.  **Specificity:** More specific selectors override less specific ones. ID selectors (`#id`) are more specific than class selectors (`.class`), which are more specific than type selectors (`p`).
2.  **Source Order:** If selectors have the same specificity, the rule that appears later in the CSS file (or is linked later in HTML) takes precedence.
3.  **Inheritance:** Some styles (like `color` and `font-family`) are inherited by child elements from their parents, unless overridden.

## The Document Object Model (DOM)

When a browser loads an HTML page, it creates an internal, tree-like representation of the page called the **Document Object Model (DOM)**. Each HTML element becomes an "object" or "node" in this tree.

JavaScript can access and manipulate this DOM tree to:

*   Find elements (like finding a specific `<div>` by its ID).
*   Change element content (like updating text in a `<p>`).
*   Change element styles (like making text bold or changing its color).
*   Add or remove elements.
*   Respond to user events (like button clicks).

This is how JavaScript makes web pages dynamic. We'll explore DOM manipulation (using jQuery for convenience) in the next lesson.

## Review Questions

What is the primary role of HTML?

:::quiz
- To define the visual style and layout.
- To add interactivity and dynamic behavior.
- To define the structure and content of a webpage.*
- To store data on the server.
:::

Which HTML tag is used to link an external CSS file?

:::quiz
- `<script>`
- `<style>`
- `<meta>`
- `<link>`*
:::

In CSS, which selector is used to target an element with the attribute `class="warning"`?

:::quiz
- `warning`
- `#warning`
- `.warning`*
- `[class=warning]`
:::

Which selector is generally the *most* specific in CSS?

:::quiz
- Type selector (e.g., `p`)
- Class selector (e.g., `.info`)
- ID selector (e.g., `#header`)*
- Universal selector (`*`)
:::

## Challenges

1.  **Add More Content:** Add an ordered list (`<ol>`) with three list items (`<li>`) to your `index.html` body.
2.  **Style the List:** In `styles.css`, add rules to give your ordered list (`ol`) a light blue background color and some padding.
3.  **Add an Image:** Find a small, royalty-free image online (or use one you have). Save it into an `images` subfolder within your `javascript_course` project folder. Add an `<img>` tag to your `index.html` to display it. **Crucially, include a descriptive `alt` attribute.**
4.  **Style the Image:** In `styles.css`, add a rule to select the `img` tag. Give it a `max-width` of `100%` (to prevent it overflowing its container) and add `display: block;` and `margin: 20px auto;` to center it on the page.
5.  **Commit Changes:** Stage, commit, and push all your HTML and CSS changes to your GitHub repository.

## Key Terms

-   HTML (HyperText Markup Language)
-   CSS (Cascading Style Sheets)
-   Tag (opening `<tag>`, closing `</tag>`)
-   Element
-   Attribute (`name="value"`)
-   `<body>`, `<head>`, `<title>`, `<link>`, `<script>`, `<meta>`
-   `<h1>`-`<h6>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<ol>`, `<li>`, `<div>`, `<span>`
-   `href`, `src`, `alt`, `id`, `class`
-   Stylesheet
-   Selector (Type, Class, ID)
-   Declaration (Property, Value)
-   `color`, `background-color`, `font-family`, `font-size`, `text-align`, `padding`, `margin`, `border`
-   Cascade, Specificity, Inheritance
-   DOM (Document Object Model)

## Download the Project (End of Lesson 8 State)

Here are the course files reflecting the state at the end of this lesson:

::download{files="8_index.html, 8_script.js, 8_styles.css"} <br/>

---

# Interactive Web Design with jQuery

We now know how HTML structures content and CSS styles it. The next step is making the page *do* things using JavaScript. JavaScript interacts with the HTML structure (the DOM) to respond to user actions (events) and dynamically change the page content or appearance.

While modern native JavaScript provides powerful tools for DOM manipulation (`document.querySelector`, `element.addEventListener`, etc.), these can sometimes be verbose. **jQuery** is a long-standing, popular JavaScript library designed to *simplify* these common tasks. It lets you "write less, do more."

In this lesson, we'll learn the basics of jQuery for:

1.  Selecting HTML elements.
2.  Modifying element content and style.
3.  Responding to user events (like button clicks).

## Including jQuery

Like Leaflet, jQuery is a library – code written by others that we incorporate into our project. The easiest way is using a **CDN (Content Delivery Network)**.

Open your `index.html` file. Add the following `<script>` tag **before** your own `script.js` tag (order matters!). It's common to place library scripts in the `<head>` or just before your own script at the end of `<body>`. Let's put it before our `script.js`:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- ... other head elements ... -->
    <title>My JavaScript Project</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- ... your page content ... -->
    <h1>My Awesome JavaScript Project</h1>
    <p>Let's make this interactive!</p>
    <button id="myButton">Click Me</button>
    <div id="outputArea"></div>


    <!-- Include jQuery FIRST -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- Then include your script -->
    <script src="script.js"></script>
  </body>
</html>
```

*   We've added a simple button with `id="myButton"` and a div with `id="outputArea"` to `index.html` for testing.
*   The jQuery script tag includes the source (`src`) from jQuery's official CDN, along with `integrity` and `crossorigin` attributes for security. Using a specific version (like 3.7.1) is generally recommended over just using `jquery.min.js` which might change unexpectedly.

## Using jQuery

jQuery code typically starts with the dollar sign `$`, which is shorthand for the `jQuery` function.

### Selecting Elements

jQuery uses CSS-style selectors inside `$()` to find elements. This is much more concise than native methods like `document.getElementById()` or `document.getElementsByClassName()`.

```javascript
// script.js

// Select the H1 element
const heading = $('h1');

// Select the element with ID "myButton"
const button = $('#myButton'); // Use # for ID

// Select all elements with class "important-note"
const notes = $('.important-note'); // Use . for class

// Select all paragraph elements
const paragraphs = $('p');

// You can use more complex CSS selectors too
const firstListItem = $('ul li:first-child');
```

These commands return jQuery objects, which represent the selected element(s) and have special jQuery methods available.

### Modifying Content and HTML

jQuery makes changing element content easy.

*   `.html()`: Gets or sets the inner HTML content.
    ```javascript
    // Get the HTML content of the H1
    console.log( $('h1').html() );

    // Set the HTML content of the H1
    $('h1').html("<em>Interactive</em> Project!"); // Adds emphasis tag too

    // Set the HTML content of the output area
    $('#outputArea').html("<p>Content set by jQuery!</p>");
    ```
*   `.text()`: Gets or sets only the text content (strips out HTML tags).
    ```javascript
    // Get text content
    console.log( $('h1').text() ); // Gets "Interactive Project!"

    // Set text content
    $('#outputArea').text("Just plain text here.");
    ```
*   `.append()`: Adds content to the *end* of the selected element(s).
    ```javascript
    $('#outputArea').append("<span> More text appended.</span>");
    ```
*   `.prepend()`: Adds content to the *beginning* of the selected element(s).
*   `.val()`: Gets or sets the value of form elements (like `<input>`).

Let's try these in `script.js`:

```javascript
// script.js
console.log('Script loaded!');

// Change heading HTML
$('h1').html("jQuery Makes It <em>Easier</em>!");

// Add initial text to output area
$('#outputArea').text("Ready for clicks...");
```

Save `script.js` and refresh `index.html` in your browser. You should see the heading changed and the initial text in the output div.

### Modifying Styles and Attributes

*   `.css()`: Gets or sets CSS properties.
    ```javascript
    // Get a CSS property
    console.log( $('h1').css('color') );

    // Set a single CSS property
    $('h1').css('color', 'darkred');

    // Set multiple CSS properties using an object
    $('#myButton').css({
      'background-color': 'lightblue',
      'padding': '10px 15px',
      'border': 'none',
      'border-radius': '5px', // Note: CSS property names with hyphens are quoted
      'cursor': 'pointer'     // Make the mouse cursor a pointer
    });
    ```
*   `.addClass()`, `.removeClass()`, `.toggleClass()`: Add, remove, or toggle CSS classes (often preferred over setting styles directly).
    ```javascript
    // Add the 'highlight' class (defined in styles.css perhaps)
    $('p:first').addClass('highlight');

    // Remove the 'important-note' class
    $('.important-note').removeClass('important-note');

    // Toggle a class (add if not present, remove if present)
    // We'll use this with a click later
    ```
*   `.attr()`: Gets or sets HTML attributes.
    ```javascript
    // Get the href attribute of the first link
    console.log( $('a:first').attr('href') );

    // Set the href attribute
    $('a:first').attr('href', 'https://jquery.com/');
    ```
*   `.hide()`, `.show()`, `.toggle()`: Change the visibility of elements (manipulates the `display` CSS property).
    ```javascript
    // Hide the first paragraph initially
    $('p:first').hide();

    // We'll use toggle later
    ```

Add the CSS modifications to your `script.js`:

```javascript
// script.js
console.log('Script loaded!');
$('h1').html("jQuery Makes It <em>Easier</em>!");
$('#outputArea').text("Ready for clicks...");

// Style the button with jQuery
$('#myButton').css({
  'background-color': 'cornflowerblue', // Changed color
  'color': 'white',
  'padding': '10px 15px',
  'border': 'none',
  'border-radius': '5px',
  'cursor': 'pointer',
  'font-size': '1em'
});

// Example: Add a class to the first paragraph
// Assuming you have a .highlight class in styles.css
// e.g., .highlight { background-color: yellow; }
$('p:first').addClass('highlight');
```

### Handling Events

Events are actions that happen on the page (user clicks, key presses, mouse movements, page loading). jQuery provides simple ways to **listen** for events and run code (**event handlers** or **callback functions**) when they occur.

The most common event is `click`.

**Syntax:** `$(selector).on(eventName, handlerFunction);` or the shorthand `$(selector).eventName(handlerFunction);`

```javascript
// script.js (add this below the previous code)

// Event handler for the button click
$('#myButton').on('click', function() {
  // Code inside this function runs when the button is clicked

  console.log("Button was clicked!"); // Log to console
  $('#outputArea').html("<strong>Button clicked!</strong> Timestamp: " + Date.now()); // Update the output div

  // Example: Toggle the visibility of the first paragraph on each click
  $('p:first').toggle(); // If hidden, show; if shown, hide.

  // Example: Toggle a CSS class on the heading
  $('h1').toggleClass('active'); // Assumes an .active class exists in styles.css
});

// Add a hover effect (using shorthand methods)
$('#myButton').hover(
  function() {
    // Function runs when mouse enters the button
    $(this).css('background-color', 'darkblue'); // 'this' refers to the button being hovered
  },
  function() {
    // Function runs when mouse leaves the button
    $(this).css('background-color', 'cornflowerblue'); // Restore original color
  }
);

// Add an example .active class to styles.css:
/*
.active {
  text-shadow: 2px 2px 5px grey;
}
*/
```

*   The code inside the `function() { ... }` passed to `.on('click', ...)` or `.click(...)` only runs *when* the click happens.
*   `$(this)` inside an event handler usually refers to the specific HTML element that triggered the event (e.g., the button that was clicked).
*   `.hover()` is a shorthand for handling mouse enter (`mouseover`) and mouse leave (`mouseout`) events.

Save `script.js` (and `styles.css` if you added the `.active` class) and refresh `index.html`. Try clicking the button and hovering over it. Check the console output too.

### Document Ready

Sometimes, JavaScript code tries to manipulate HTML elements *before* the browser has fully loaded and parsed the HTML. This leads to errors because the elements don't exist yet. jQuery provides a way to ensure your code runs only after the DOM is fully ready:

```javascript
$(document).ready(function() {
  // ALL your jQuery code that interacts with the DOM should go inside here.
  console.log("DOM is ready!");

  $('h1').html("jQuery Makes It <em>Easier</em>!");
  $('#outputArea').text("Ready for clicks...");

  // Style the button with jQuery
  $('#myButton').css({ /* ... styles ... */ });

  // Add event handlers
  $('#myButton').on('click', function() { /* ... click handler code ... */ });
  $('#myButton').hover( /* ... hover handler code ... */ );

  // etc.
});

// Shorter version (equivalent to document ready):
$(function() {
  // Code here also runs after DOM is ready
  console.log("DOM ready (shorthand)!");
});
```

It's a standard practice to wrap *all* your jQuery code that interacts with page elements inside a `$(document).ready(...)` block (or the shorthand `$(function() { ... });`). This prevents errors caused by scripts running too early.

Refactor your `script.js` to use the document ready handler:

```javascript
// script.js
$(document).ready(function() {
    console.log('DOM ready, script running!');

    // Change heading HTML
    $('h1').html("jQuery Makes It <em>Easier</em>!");

    // Add initial text to output area
    $('#outputArea').text("Ready for clicks...");

    // Style the button with jQuery
    $('#myButton').css({
        'background-color': 'cornflowerblue',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em'
    });

     // Example: Add a class to the first paragraph
    $('p:first').addClass('highlight');

    // Event handler for the button click
    $('#myButton').on('click', function() {
        console.log("Button was clicked!");
        $('#outputArea').html("<strong>Button clicked!</strong> Timestamp: " + Date.now());
        $('p:first').toggle();
        $('h1').toggleClass('active');
    });

    // Add a hover effect
    $('#myButton').hover(
        function() { $(this).css('background-color', 'darkblue'); },
        function() { $(this).css('background-color', 'cornflowerblue'); }
    );

}); // End of $(document).ready()
```

## Native JavaScript Alternatives (Briefly)

For comparison, here's how you might do some of the above with native JavaScript:

*   **Select element by ID:** `const button = document.getElementById('myButton');`
*   **Select first H1:** `const heading = document.querySelector('h1');`
*   **Select all paragraphs:** `const paragraphs = document.querySelectorAll('p');` (returns a NodeList, similar to an array)
*   **Change HTML:** `heading.innerHTML = 'New Content';`
*   **Change text:** `heading.textContent = 'New Text';`
*   **Change style:** `button.style.backgroundColor = 'red';` `button.style.padding = '10px';`
*   **Add class:** `button.classList.add('active');`
*   **Toggle class:** `button.classList.toggle('active');`
*   **Handle click event:** `button.addEventListener('click', function() { console.log('Clicked!'); });`
*   **Document Ready equivalent:** Place your `<script>` tag just before the closing `</body>` tag, or use the `defer` attribute (`<script src="script.js" defer></script>`) in the `<head>`, or use the `DOMContentLoaded` event listener.

jQuery often requires less code for the same result, especially when selecting multiple elements or chaining actions, which is why it remains useful, particularly for beginners learning DOM manipulation concepts.

## Review Questions

In jQuery, what does the `$` symbol typically represent?

:::quiz
- A variable declaration
- A CSS class selector
- The jQuery function/object*
- A comment
:::

Which jQuery selector would target an HTML element with `id="main-nav"`?

:::quiz
- `$('.main-nav')`
- `$('#main-nav')`*
- `$('main-nav')`
- `$('id=main-nav')`
:::

Which jQuery method is used to set the HTML content of an element?

:::quiz
- `.text()`
- `.content()`
- `.value()`
- `.html()`*
:::

Why is it common practice to wrap jQuery code inside `$(document).ready(function() { ... });`?

:::quiz
- To make the code run faster.
- To ensure the code only runs after the HTML DOM is fully loaded and ready.*
- To automatically include the jQuery library.
- To handle errors more effectively.
:::

## Challenges

1.  **Add More Interaction:** Add a second button to your `index.html` with `id="hideButton"`. In your `script.js` (inside the document ready block), add a click event handler to this new button that uses jQuery's `.hide()` method to hide the `<h1>` element when clicked.
2.  **Input Interaction:** Add an `<input type="text" id="textInput">` element to your `index.html`. In `script.js`, add an event handler to the *first* button (`#myButton`) so that when it's clicked, it gets the current value from the input field using `.val()` and displays it in the `#outputArea` div using `.text()`.
3.  **CSS Class Toggling:** Add a CSS rule in `styles.css` like `.fancy { border: 3px dashed green; background-color: lightgreen; }`. In `script.js`, modify the click handler for `#myButton` to also use `.toggleClass('fancy')` on the `#outputArea` div, so its appearance changes on each click.
4.  **Commit Changes:** Stage, commit, and push all your HTML, CSS, and JS changes to GitHub.

## Key Terms

-   jQuery
-   Library
-   CDN (Content Delivery Network)
-   `$` (jQuery function)
-   Selector (jQuery: `$('...')`, `$('#...')`, `$('....')`)
-   `.html()`, `.text()`, `.append()`, `.val()`
-   `.css()`, `.addClass()`, `.removeClass()`, `.toggleClass()`
-   `.attr()`
-   `.hide()`, `.show()`, `.toggle()`
-   Event (e.g., `click`, `hover`, `mouseover`, `mouseout`)
-   Event Handler / Callback Function
-   `.on()`, `.click()`, `.hover()`
-   `$(document).ready()` or `$(function(){})`
-   `$(this)` (within event handlers)

## Download the Project (End of Lesson 9 State)

Here are the course files reflecting the state at the end of this lesson:

::download{files="9_index.html, 9_script.js, 9_styles.css"} <br/>

---

# Building a Data-Driven Webpage: Poem Analysis

Let's combine our knowledge of HTML, CSS, JavaScript, jQuery, and data handling (arrays, objects) to build a more complex, data-driven webpage. We'll create an interactive version of Walt Whitman's poem "Broadway," allowing users to click on certain words or phrases to get information about literary devices.

This lesson involves several steps and introduces processing data from a separate file (JSON). Take your time with each part.

## The Goal

We want to:

1.  Display Whitman's poem "Broadway" on a webpage.
2.  Structure the poem data (lines and words) in a way JavaScript can easily use.
3.  Make specific words or phrases clickable.
4.  When a clickable element is clicked, display relevant information (e.g., about a literary device) in a separate area on the page.

## Setting Up the Page (poem.html)

1.  **Create Files:** In your project folder, create three new files:
    *   `poem.html`
    *   `poem.css`
    *   `poem.js`
2.  **Link from Index:** Open `index.html` and add a link to the new poem page, perhaps near the top:
    ```html
    <!-- Inside the body of index.html -->
    <h2><a href="poem.html">Explore Walt Whitman's <em>Broadway</em></a></h2>
    <hr> <!-- Optional horizontal rule for separation -->
    ```
3.  **Basic HTML Structure (`poem.html`):** Paste this structure into `poem.html`. It includes placeholders for the poem (`#poem`) and the info display area (`#info`), links the new CSS and JS files, and includes jQuery.

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Walt Whitman's Broadway - Interactive</title>
        <!-- Link to our specific CSS for this page -->
        <link rel="stylesheet" href="poem.css">
      </head>
      <body>
        <div class="container"> <!-- Optional container for layout -->
          <h1><em>Broadway</em> by Walt Whitman (Interactive)</h1>

          <div id="intro">
            <p>Click on highlighted words or phrases below to learn more about the literary devices used in the poem.</p>
          </div>

          <div id="poem">
            <!-- Poem text will be inserted here by JavaScript -->
            Loading poem...
          </div>

          <hr> <!-- Separator -->

          <div id="info">
            <!-- Information about clicked elements will appear here -->
            <p>Click on a highlighted term above.</p>
          </div>
        </div> <!-- End container -->

        <!-- Include jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <!-- Include our specific JS for this page -->
        <script src="poem.js"></script>
      </body>
    </html>
    ```

## Structuring the Poem Data

We need to represent the poem in a structured format. An array where each element represents a line seems logical. Each line could then be an array of word objects. Each word object needs at least the word text, and potentially some associated info if it's a term we want to highlight.

**Example (First Line):**

```javascript
// Representing a line as an array of word objects
const line1 = [
  { text: "What", info: "Anaphora: The repetition of 'What' begins the first four lines, emphasizing the overwhelming nature of Broadway's sights and sounds." },
  { text: "hurrying" },
  { text: "human" },
  { text: "tides," }, // Note comma included
  { text: "or" },
  { text: "day" },
  { text: "or" },
  { text: "night!" } // Note exclamation included
];
```

*   Each word is an object `{}`.
*   The `text` property holds the word itself.
*   The optional `info` property holds the explanation if this word is interactive.

Manually creating this for the whole poem in `poem.js` would be tedious and mix data with code. A better approach is to store the data separately.

## Using JSON for Data

**JSON (JavaScript Object Notation)** is a standard text-based format for representing structured data based on JavaScript object syntax. It's perfect for storing our poem data.

1.  **Create `poem.json`:** In your project folder, create a new file named `poem.json`.
2.  **Format the Data:** Copy and paste the *entire* poem structure below into `poem.json`. Note the specific JSON syntax: keys and strings must be in *double* quotes.

    ```json
    {
      "title": "Broadway",
      "author": "Walt Whitman",
      "lines": [
        [
          {"text": "What", "info": "Anaphora: The repetition of 'What' begins the first four lines, emphasizing the overwhelming nature of Broadway's sights and sounds."},
          {"text": "hurrying"},
          {"text": "human"},
          {"text": "tides,"},
          {"text": "or"},
          {"text": "day"},
          {"text": "or"},
          {"text": "night!"}
        ],
        [
          {"text": "What"},
          {"text": "passions,"},
          {"text": "winnings,"},
          {"text": "losses,"},
          {"text": "ardors,"},
          {"text": "swim"},
          {"text": "thy"},
          {"text": "waters!"}
        ],
        [
          {"text": "What", "info": "Alliteration: Repetition of the 'w' sound in 'What whirls'."},
          {"text": "whirls", "info": "Alliteration: Repetition of the 'w' sound in 'What whirls'."},
          {"text": "of"},
          {"text": "evil,"},
          {"text": "bliss"},
          {"text": "and"},
          {"text": "sorrow,"},
          {"text": "stem"},
          {"text": "thee!"}
        ],
        [
          {"text": "What"},
          {"text": "curious"},
          {"text": "questioning"},
          {"text": "glances—", "info": "Caesura: A pause within a line, often indicated by punctuation (like the em dash here), breaking the rhythmic flow."},
          {"text": "glints"},
          {"text": "of"},
          {"text": "love!"}
        ],
        [
          {"text": "Leer,"},
          {"text": "envy,"},
          {"text": "scorn,"},
          {"text": "contempt,"},
          {"text": "hope,"},
          {"text": "aspiration!", "info": "Accumulation/Listing: A list of abstract nouns, rapidly presenting conflicting emotions seen on Broadway."}
        ],
        [
          {"text": "Thou", "info": "Apostrophe & Personification: Addressing Broadway directly ('Thou') as if it were a person capable of hearing."},
          {"text": "portal—"},
          {"text": "thou"},
          {"text": "arena—"},
          {"text": "thou"},
          {"text": "of"},
          {"text": "the"},
          {"text": "myriad"},
          {"text": "long-drawn"},
          {"text": "lines"},
          {"text": "and"},
          {"text": "groups!"}
        ],
        [
          {"text": "(Could"},
          {"text": "but"},
          {"text": "thy"},
          {"text": "flagstones,"},
          {"text": "curbs,"},
          {"text": "facades,"},
          {"text": "tell"},
          {"text": "their"},
          {"text": "inimitable"},
          {"text": "tales;"}
        ],
        [
          {"text": "Thy"},
          {"text": "windows"},
          {"text": "rich,"},
          {"text": "and"},
          {"text": "huge"},
          {"text": "hotels—"},
          {"text": "thy"},
          {"text": "side-walks"},
          {"text": "wide;)"}
        ],
        [
          {"text": "Thou"},
          {"text": "of"},
          {"text": "the"},
          {"text": "endless"},
          {"text": "sliding,"},
          {"text": "mincing,"},
          {"text": "shuffling"},
          {"text": "feet!"}
        ],
        [
          {"text": "Thou,"},
          {"text": "like", "info": "Simile: Explicit comparison using 'like' or 'as'."},
          {"text": "the"},
          {"text": "parti-colored"},
          {"text": "world"},
          {"text": "itself—"},
          {"text": "like"},
          {"text": "infinite,"},
          {"text": "teeming,"},
          {"text": "mocking"},
          {"text": "life!"}
        ],
        [
          {"text": "Thou"},
          {"text": "visor'd,"},
          {"text": "vast,"},
          {"text": "unspeakable"},
          {"text": "show"},
          {"text": "and"},
          {"text": "lesson!"}
        ]
      ]
    }

    ```

## Processing JSON Data with JavaScript (jQuery)

Now, in `poem.js`, we need to:
1.  Fetch the data from `poem.json`.
2.  Process the data to build the HTML for the poem display.
3.  Insert the generated HTML into the `#poem` div.
4.  Add event listeners to the clickable words.

jQuery's `$.getJSON()` method is perfect for fetching and parsing JSON data.

```javascript
// poem.js

$(document).ready(function() {
    console.log("Poem page ready.");

    // Use jQuery's getJSON method to fetch data from poem.json
    $.getJSON("poem.json", function(data) {
        console.log("Poem data loaded:", data);

        let poemHtml = "<blockquote>"; // Start the blockquote for the poem

        // Iterate through each line in the data (data.lines is the array of lines)
        data.lines.forEach(function(lineArray) {
            poemHtml += "<p>"; // Start a paragraph for the line

            // Iterate through each word object in the current lineArray
            lineArray.forEach(function(wordObject) {
                // Check if the word has an 'info' property
                if (wordObject.info) {
                    // If yes, wrap the word in an <a> tag, store info in data-info attribute
                    // Use template literals for easier string construction
                    poemHtml += `<a href="#" class="info-term" data-info="${wordObject.info}">${wordObject.text}</a> `;
                } else {
                    // If no info, just add the word text
                    poemHtml += wordObject.text + " ";
                }
            }); // End word loop

            poemHtml += "</p>"; // End the paragraph for the line
        }); // End line loop

        poemHtml += "</blockquote>"; // End the blockquote

        // Replace the content of the #poem div with the generated HTML
        $("#poem").html(poemHtml);

        // --- Add Event Listener AFTER poem is loaded ---
        // Select all elements with class 'info-term' INSIDE #poem
        // Use .on() for event delegation - handles elements added dynamically
        $("#poem").on("click", ".info-term", function(event) {
            event.preventDefault(); // Prevent the default link behavior (jumping to '#')

            // Get the info text stored in the data-info attribute of the clicked element
            const infoText = $(this).data("info"); // jQuery's .data() reads data-* attributes

            // Display the info text in the #info div
            $("#info").html(`<p><strong>${$(this).text()}:</strong> ${infoText}</p>`);
            // Optional: Add a class to highlight the info area
            $("#info").addClass("active-info");
        });

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Handle errors if poem.json cannot be loaded
        console.error("Error loading poem.json:", textStatus, errorThrown);
        $("#poem").html("<p style='color:red;'>Error loading poem data.</p>");
    }); // End of $.getJSON

}); // End of $(document).ready()

```

**Explanation:**

1.  **`$(document).ready()`:** Ensures code runs after the basic HTML page structure is ready.
2.  **`$.getJSON("poem.json", function(data) {...})`:**
    *   Fetches `poem.json`.
    *   If successful, it parses the JSON data into a JavaScript object (`data`).
    *   The code inside the callback function `function(data)` runs *after* the data is loaded.
3.  **Building `poemHtml`:**
    *   We initialize an empty string `poemHtml` starting with `<blockquote>`.
    *   We use nested loops (`forEach` is a convenient array iteration method) to go through each `lineArray` in `data.lines`, and then each `wordObject` within that line.
    *   **Conditional Wrapping:** Inside the word loop, `if (wordObject.info)` checks if the word has associated information.
    *   **Clickable Element:** If it has info, the word text (`wordObject.text`) is wrapped in an `<a>` tag.
        *   `href="#"`: Makes it look like a link, but `preventDefault()` later stops it from actually navigating.
        *   `class="info-term"`: Gives these links a common class for easy selection and styling.
        *   `data-info="${wordObject.info}"`: This is crucial. We store the *actual information string* directly onto the HTML element using a **custom data attribute**. `data-info` is the attribute name. jQuery's `.data('info')` method can easily retrieve this later.
    *   Non-info words are added as plain text.
    *   Spaces are added after each word. `<p>` tags wrap each line.
4.  **Displaying the Poem:** `$("#poem").html(poemHtml);` replaces the "Loading poem..." message with our fully constructed HTML.
5.  **Event Listener (`.on()`):**
    *   `$("#poem").on("click", ".info-term", function(event) {...});` This uses **event delegation**. Instead of attaching a listener to *each* `<a>` tag (which might be numerous), we attach *one* listener to the parent `#poem` container. It listens for clicks that *originate* on elements matching the `.info-term` selector within it. This is more efficient and works even for elements added dynamically (like ours).
    *   `event.preventDefault();`: Stops the browser from following the `href="#"`.
    *   `const infoText = $(this).data("info");`: `$(this)` refers to the specific `<a>` tag that was clicked. `.data("info")` retrieves the value stored in its `data-info` attribute.
    *   `$("#info").html(...)`: Updates the `#info` div with the retrieved information, adding some basic formatting.

## Styling (poem.css)

Let's add some basic styles to `poem.css` to make the clickable terms stand out and format the info box.

```css
/* poem.css */

body {
  font-family: Georgia, 'Times New Roman', Times, serif;
  line-height: 1.6;
  margin: 20px;
  background-color: #fdfdfd;
  color: #222;
}

.container {
  max-width: 800px; /* Limit width for readability */
  margin: 0 auto; /* Center the container */
}

h1 {
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 30px;
}

#poem blockquote {
  margin-left: 40px; /* Indent the poem */
  font-size: 1.1em;
  color: #333;
}

#poem p {
    margin-bottom: 0.5em; /* Space between lines */
}

/* Style the clickable terms */
.info-term {
  cursor: pointer; /* Indicate interactivity */
  color: #0066cc;
  border-bottom: 1px dotted #0066cc;
  text-decoration: none; /* Remove default underline */
  transition: background-color 0.2s ease; /* Smooth hover effect */
}

.info-term:hover {
  background-color: #e0f0ff; /* Light blue background on hover */
}

/* Style the info display area */
#info {
  margin-top: 30px;
  padding: 15px;
  border-left: 5px solid #ddd;
  background-color: #f9f9f9;
  min-height: 40px; /* Ensure it has some height even when empty */
}

#info.active-info { /* Style when info is displayed */
   border-left-color: #0066cc; /* Change border color when active */
}

#info p {
    margin: 0; /* Remove default paragraph margin inside info box */
}

hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 30px 0;
}

```

## Testing

1.  Save `poem.html`, `poem.css`, `poem.js`, and `poem.json`.
2.  Open `poem.html` in your browser (using Live Server if possible).
3.  You should see the poem displayed.
4.  Click on the highlighted words (like the first "What").
5.  The information from the `info` property in `poem.json` should appear in the `#info` div at the bottom.

This example demonstrates fetching external data, processing it with loops and conditionals, dynamically building HTML, and adding interactivity with event listeners – core concepts in data-driven web development.

## Review Questions

What is the primary advantage of using a separate JSON file for the poem data instead of embedding it directly in `poem.js`?

:::quiz
- It makes the JavaScript code run faster.
- It separates data from code, making both easier to manage and update.*
- JSON files can include functions, unlike JavaScript objects.
- It's the only way to use loops.
:::

In the code `poemHtml += <a href="#" class="info-term" data-info="${wordObject.info}">${wordObject.text}</a>`, what is the purpose of `data-info="${wordObject.info}"`?

:::quiz
- To style the link using CSS.
- To store the information string directly on the HTML element for later retrieval.*
- To create a link to an external website with more info.
- To define the text content of the link.
:::

What does `event.preventDefault();` do inside the click handler for the `<a>` tags?

:::quiz
- It stops the click event from reaching parent elements.
- It prevents the browser's default action for the link (like navigating to `#`).*
- It hides the element that was clicked.
- It reloads the page.
:::

Why is using `.on("click", ".info-term", ...)` attached to `#poem` generally preferred over attaching `.click()` directly to every `.info-term` element?

:::quiz
- It's shorter to type.
- It only works for the first `.info-term` element.
- It uses event delegation, which is more efficient and works for elements added after the initial page load.*
- It automatically prevents the default link behavior.
:::

## Challenges

1.  **Add More Info:** Add `info` properties to more words/phrases in your `poem.json` file for other literary devices (e.g., find examples of simile, personification, imagery).
2.  **Improve Info Display:** Modify the `poem.js` click handler. Instead of replacing the content of `#info` each time, use `.append()` to add the new information below any existing information already displayed there. Add a clear button maybe?
3.  **Highlight Active Term:** When an `.info-term` is clicked, add a specific CSS class (e.g., `.active-term`) to *that specific term* (`$(this)`). Remove the class from any previously active term. Define styles for `.active-term` in `poem.css` (e.g., a different background color or bold text).
4.  **Commit and Push:** Save all your changes and push them to your GitHub repository.

## Key Terms

-   JSON (JavaScript Object Notation)
-   `$.getJSON()`
-   Callback Function
-   Data Attribute (`data-*`)
-   `.data()` (jQuery method)
-   `.forEach()` (Array method)
-   Event Delegation (`.on()`)
-   `event.preventDefault()`
-   Template Literals (`` `${}` ``)

## Download the Project (End of Lesson 10 State)

Here are the course files reflecting the state at the end of this lesson:

::download{files="10_index.html, 10_script.js, 10_styles.css, 10_poem.html, 10_poem.css, 10_poem.js, poem.json"} <br/>

---

# Mapping With Leaflet.js

Now let's explore **Leaflet.js**, a leading open-source JavaScript library for creating interactive maps. It's relatively lightweight, easy to use, and highly extensible. We'll learn how to add a basic map to our webpage, display markers, popups, and shapes, and handle basic map events.

Interactive maps are powerful tools for visualizing geographic data, telling location-based stories, or simply providing context.

## Leaflet Basics

Leaflet works with map **layers**. Think of layers like transparent sheets stacked on top of each other:

*   **Base Layer (Tile Layer):** The fundamental map image itself (like streets, satellite view). Usually sourced from services like OpenStreetMap, Mapbox, etc.
*   **Overlay Layers:** Things drawn *on top* of the base layer, like markers, circles, polygons (shapes), lines, or GeoJSON data.

Leaflet provides a main object, typically accessed via `L`, which contains methods to create map instances, layers, controls, and manage interactions.

## Getting Started: Adding Leaflet to Your Page

Similar to jQuery, we need to include Leaflet's CSS and JavaScript files in our HTML.

Let's add a map to our `poem.html` page, below the poem analysis section.

**1. Modify `poem.html`:**

*   Add the Leaflet CSS `<link>` in the `<head>` ( **before** your own `poem.css`).
*   Add the Leaflet JavaScript `<script>` in the `<head>` (it's common for mapping libraries) or at the end of the `<body>` **before** your own scripts that use it.
*   Add a `<div>` with a unique `id` (e.g., `map`) where the map will be rendered. Give it a heading.
*   Create and link a *new* JavaScript file, `map.js`, specifically for the map code (keeping concerns separate).

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walt Whitman's Broadway - Interactive</title>

    <!-- Leaflet CSS (Add this!) -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>

    <!-- Your specific CSS -->
    <link rel="stylesheet" href="poem.css">

    <!-- Leaflet JavaScript (Add this!) -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

  </head>
  <body>
    <div class="container">
      <h1><em>Broadway</em> by Walt Whitman (Interactive)</h1>
      <!-- ... intro, poem, info divs ... -->
      <div id="poem">Loading poem...</div>
      <hr>
      <div id="info"><p>Click on a highlighted term above.</p></div>
      <hr>

      <!-- Map Section (Add this!) -->
      <h2>Map Context: New York City</h2>
      <div id="map"></div>
      <!-- End Map Section -->

    </div> <!-- End container -->

    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- Include your poem script -->
    <script src="poem.js"></script>
    <!-- Include your new map script (Add this!) -->
    <script src="map.js"></script>
  </body>
</html>
```
*   We're using version `1.9.4` of Leaflet from the unpkg CDN. Check the [Leaflet download page](https://leafletjs.com/download.html) for the latest stable version if needed.

**2. Create `map.js`:** Create this new file in your project folder.

**3. Define Map Height in CSS (`poem.css`):** Leaflet maps *must* have an explicit height defined in CSS. Add this rule to `poem.css`:

```css
/* poem.css (add this rule) */

#map {
  height: 400px; /* Or any height you prefer */
  width: 100%;   /* Make it fill the container width */
  border: 1px solid #ccc; /* Optional: add a border */
  margin-top: 20px; /* Optional: space above the map */
}
```

## Initializing the Map (`map.js`)

Now, let's write the basic JavaScript in `map.js` to create the map.

```javascript
// map.js

// Wait for the DOM to be ready (optional but good practice)
document.addEventListener('DOMContentLoaded', function() {

    // 1. Initialize the map and set its view
    // L.map('map') creates a map instance linked to the div with id="map"
    const map = L.map('map').setView([40.7128, -74.0060], 13); // NYC Coordinates [lat, lng], Zoom level 13

    // 2. Add a tile layer (the base map image)
    // Using OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, // Max zoom level for these tiles
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Add the tile layer to our map instance

    console.log("Map initialized.");

}); // End DOMContentLoaded listener
```

**Explanation:**

1.  **`document.addEventListener('DOMContentLoaded', ...)`:** Native JavaScript way to wait for the HTML to load before running the map code. This prevents errors if the `<div id="map">` doesn't exist yet when the script runs.
2.  **`L.map('map')`:** Creates the map object, linking it to the HTML element with the ID `map`.
3.  **`.setView([latitude, longitude], zoomLevel)`:** Sets the initial center coordinates and zoom level. `zoomLevel` typically ranges from 0 (fully zoomed out) to ~18/19 (very close).
4.  **`L.tileLayer(urlTemplate, options)`:** Creates the base map layer.
    *   The URL template points to the tile server (OpenStreetMap here). `{s}`, `{z}`, `{x}`, `{y}` are placeholders Leaflet replaces with subdomain, zoom, and tile coordinates.
    *   `options` object includes:
        *   `maxZoom`: Limits how far users can zoom in.
        *   `attribution`: **Required** text displayed on the map, giving credit to the data source(s). Always include this!
5.  **`.addTo(map)`:** Adds the created layer (the tile layer) to our map instance (`map`).

Save all files and open `poem.html`. You should see an interactive map centered on NYC!

## Adding Markers and Popups

Markers pinpoint specific locations. Popups display information when a marker (or shape) is clicked.

```javascript
// map.js (Inside the DOMContentLoaded listener, after map initialization)

// Add a marker for Times Square
const timesSquareCoords = [40.7580, -73.9855];
const timesSquareMarker = L.marker(timesSquareCoords).addTo(map);

// Add a popup to the marker
timesSquareMarker.bindPopup("<b>Times Square</b><br>Mentioned in Whitman's era context.");

// Add a marker for the Graduate Center (approximate)
const gradCenterCoords = [40.7486, -73.9840];
const gradCenterMarker = L.marker(gradCenterCoords).addTo(map)
    .bindPopup("The Graduate Center, CUNY"); // Chain .bindPopup().addTo()

```

*   **`L.marker([lat, lng])`:** Creates a marker at the specified coordinates.
*   **`.bindPopup(htmlContent)`:** Attaches a popup to the marker (or shape). You can use HTML inside the string.
*   **`.addTo(map)`:** Adds the marker to the map. You can chain these methods.

Save and refresh. You should see two markers. Click them to see their popups.

![Map with Markers](/images/times-square.png) *(Conceptual image)*

## Adding Shapes (Circles, Polygons, Polylines)

Leaflet can draw various shapes.

```javascript
// map.js (Inside the DOMContentLoaded listener)

// Add a Circle around Times Square
const circle = L.circle(timesSquareCoords, {
    color: 'red',       // Outline color
    fillColor: '#f03',   // Fill color
    fillOpacity: 0.3,  // Fill transparency (0-1)
    radius: 500        // Radius in meters
}).addTo(map);
circle.bindPopup("Approx. 500m radius around Times Square");

// Add a Polyline (line connecting points)
const linePoints = [
    timesSquareCoords,  // Start point
    gradCenterCoords    // End point
];
const polyline = L.polyline(linePoints, {
    color: 'blue'       // Line color
}).addTo(map);
polyline.bindPopup("Line from Times Square to Grad Center");

// Add a Polygon (closed shape) - Example: Triangle near GC
const trianglePoints = [
    [40.7480, -73.9850],
    [40.7490, -73.9830],
    [40.7480, -73.9830],
    [40.7480, -73.9850] // Close the polygon by repeating the first point
];
const polygon = L.polygon(trianglePoints, {
    color: 'green',
    fillColor: '#0f0',
    fillOpacity: 0.4
}).addTo(map);
polygon.bindPopup("A sample polygon");

```

*   **`L.circle(centerLatLng, options)`:** Creates a circle.
*   **`L.polyline(arrayOfLatLngs, options)`:** Creates a line connecting points.
*   **`L.polygon(arrayOfLatLngs, options)`:** Creates a filled shape. The array of points should form a closed loop (first and last point are the same).

Save and refresh to see the shapes. Click them for their popups.

## Map Events

Leaflet objects fire events in response to user interactions (clicks, zooms, pans) or changes in state. You can listen for these events using the `.on()` method.

```javascript
// map.js (Inside the DOMContentLoaded listener)

// Example 1: Show coordinates on map click
map.on('click', function(e) {
    // 'e' is the event object, e.latlng contains click coordinates
    const coords = e.latlng;
    const popupContent = `You clicked at:<br>Lat: ${coords.lat.toFixed(4)}<br>Lng: ${coords.lng.toFixed(4)}`;

    // L.popup() creates a standalone popup
    L.popup()
        .setLatLng(coords) // Set its location
        .setContent(popupContent) // Set its content
        .openOn(map); // Open it on the map
    console.log(`Map clicked at: Lat ${coords.lat}, Lng ${coords.lng}`);
});

// Example 2: Do something when the Times Square marker is clicked
timesSquareMarker.on('click', function() {
    // This overrides the default bindPopup action *if* you don't call openPopup
    alert("You clicked the Times Square marker!");
    // To still show the original popup, you could call:
    // this.openPopup(); // 'this' refers to timesSquareMarker here
});

// Example 3: Log zoom level changes
map.on('zoomend', function() {
    console.log("Current map zoom level:", map.getZoom());
});
```

*   **`.on(eventName, handlerFunction)`:** Attaches an event listener.
*   The `handlerFunction` receives an **event object** (`e`) containing details about the event (like click coordinates in `e.latlng`).
*   `L.popup()` creates popups that aren't tied to a specific marker/shape.
*   `.toFixed(4)` formats coordinates to 4 decimal places.

Save and refresh. Try clicking on the map, clicking the Times Square marker, and zooming in/out while watching the console.

Leaflet offers a vast API for customization, custom icons, different base maps, plugins for heatmaps, clustering, and much more. Explore the [Leaflet Documentation](https://leafletjs.com/reference.html) and [Tutorials](https://leafletjs.com/examples.html) to discover more.

## Review Questions

In Leaflet, what is the purpose of a Tile Layer?

:::quiz
- To display markers for specific locations.
- To draw shapes like circles and polygons.
- To provide the underlying base map image (e.g., streets, satellite).*
- To handle user click events on the map.
:::

What is the function `L.map('mapDivId')` used for?

:::quiz
- To add a marker to the map.
- To define the map's tile layer URL.
- To initialize a map instance within the HTML element with the specified ID.*
- To set the map's zoom level.
:::

Which method is used to add a layer (like a marker or tile layer) to a Leaflet map instance (e.g., `myMap`)?

:::quiz
- `.setView(myMap)`
- `.bindPopup(myMap)`
- `.on('add', myMap)`
- `.addTo(myMap)`*
:::

In a Leaflet map click event handler `map.on('click', function(e) { ... })`, how do you typically access the latitude and longitude of the click location?

:::quiz
- `e.coords`
- `e.location`
- `e.latlng`*
- `map.getClickCoords()`
:::

## Challenges

1.  **Add Another Marker:** Find the approximate latitude/longitude coordinates for another NYC landmark (e.g., Statue of Liberty, Brooklyn Bridge) and add a marker with a descriptive popup for it on the map.
2.  **Change Map View:** Add a button (in `poem.html`) with an ID like `zoomToNYC`. In `map.js`, add a jQuery click handler for this button that uses `map.setView([40.7128, -74.0060], 13);` to reset the map view to the initial NYC view when clicked.
3.  **Custom Icon (Optional Advanced):** Look at the [Leaflet Custom Icons tutorial](https://leafletjs.com/examples/custom-icons/). Try creating a simple custom icon (you might need a small image file) and use it for one of your markers instead of the default blue one.
4.  **Commit and Push:** Save all changes and push them to GitHub.

## Key Terms

-   Leaflet.js
-   Interactive Map
-   Layer (Base Layer/Tile Layer, Overlay Layer)
-   `L` (Leaflet main object)
-   `L.map()`, `.setView()`
-   `L.tileLayer()`, Attribution
-   `L.marker()`, `L.circle()`, `L.polygon()`, `L.polyline()`
-   `.addTo()`
-   `.bindPopup()`
-   `.on()` (for events like `click`, `zoomend`)
-   Event Object (`e`), `e.latlng`

## Download the Project (End of Lesson 11 State)

Here are the course files reflecting the state at the end of this lesson:

::download{files="11_index.html, 11_script.js, 11_styles.css, 11_poem.html, 11_poem.css, 11_poem.js, poem.json, 11_map.js"} <br/>

---

# Working With GeoSpatial Data (GeoJSON)

In the previous lesson, we created a basic Leaflet map. Now, let's integrate real-world geospatial data using the **GeoJSON** format. GeoJSON is a standard format based on JSON for encoding geographic data structures (points, lines, polygons) along with their non-spatial attributes.

We'll use a dataset of New York City neighborhood boundaries to:

1.  Add neighborhood polygons as a layer on our map.
2.  Style these polygons.
3.  Add popups displaying neighborhood information.
4.  Create interactive elements (like a list or buttons) to navigate the map based on the data.

This combines skills from jQuery, JSON handling, and Leaflet.

## The Dataset: NYC Neighborhoods GeoJSON

We'll use a GeoJSON file containing NYC neighborhood boundaries. GeoJSON has a specific structure.

**Key GeoJSON Concepts:**

*   **`type`:** Specifies the GeoJSON object type (e.g., `FeatureCollection`, `Feature`, `Polygon`, `Point`, `LineString`).
*   **`FeatureCollection`:** A top-level object containing an array of `Feature` objects.
*   **`Feature`:** Represents a spatially bounded thing. It has:
    *   `geometry`: An object describing the shape (e.g., `Polygon`, `Point`) and its `coordinates`.
    *   `properties`: An object containing non-spatial attributes (like name, ID, borough, etc.).
*   **`geometry`:** Contains `type` (e.g., `"Polygon"`) and `coordinates`.
    *   For **Polygons**, `coordinates` is an *array of arrays of points*. The outer array defines the main boundary ring, and subsequent inner arrays could define holes (which we don't have here). Each point is an array `[longitude, latitude]`. **Note the order: Longitude first, then Latitude!**

**Get the Data:**

1.  Download the dataset: [nycneighborhoods.json](https://raw.githubusercontent.com/dwillis/nyc-maps/master/neighborhoods.geojson) (Right-click, Save Link As...) or use the button below.
    ::download{files="nycneighborhoods.json"}<br />
2.  Save it in your `javascript_course` project folder.

**Prepare the Data File for Leaflet (`L.geoJSON`):**

Leaflet's `L.geoJSON()` function works best when the GeoJSON data is directly available as a JavaScript variable.

1.  **Rename:** Rename `nycneighborhoods.json` to `nycneighborhoods.js`.
2.  **Edit `nycneighborhoods.js`:** Open the renamed file in VSCode. Add `const nycNeighborhoods = ` at the very beginning and a semicolon `;` at the very end, effectively wrapping the entire JSON object in a JavaScript variable declaration.

    ```javascript
    // nycneighborhoods.js
    const nycNeighborhoods = { // <<< ADD THIS LINE
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
             // ... properties like neighborhood, borough ...
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [ /* Array of [lng, lat] points */ ]
              // Potentially more rings for holes
            ]
          }
        },
        // ... more features ...
      ]
    }; // <<< ADD THIS SEMICOLON
    ```

## Setting Up the Page (`nyc-data.html`)

Let's create a dedicated page for this map.

1.  **Create Files:**
    *   `nyc-data.html`
    *   `nyc-data.css`
    *   `nyc-data.js`
2.  **Link from Index:** Add a link in `index.html`:
    ```html
    <!-- In index.html -->
    <h2><a href="nyc-data.html">NYC Neighborhood Map</a></h2>
    <hr>
    ```
3.  **Basic HTML (`nyc-data.html`):** Include Leaflet CSS/JS, jQuery, *your new data file (`nycneighborhoods.js`)*, and your specific CSS/JS files. Add a div for the map and other elements we'll need later.

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NYC Neighborhoods Map</title>

        <!-- Leaflet CSS -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
        <!-- Your specific CSS -->
        <link rel="stylesheet" href="nyc-data.css">

        <!-- Leaflet JavaScript -->
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
        <!-- Load the Neighborhood Data (BEFORE your script that uses it) -->
        <script src="nycneighborhoods.js"></script>

      </head>
      <body>
        <div class="container">
          <h1>NYC Neighborhoods</h1>
          <p>Exploring neighborhood boundaries using Leaflet and GeoJSON.</p>
          <p>Data source: <a href="https://data.beta.nyc/dataset/pediacities-nyc-neighborhoods/resource/35dd04fb-81b3-479b-a074-a27a37888ce7" target="_blank" rel="noopener noreferrer">NYC Planning - PediaCities Neighborhoods</a></p>

          <div id="controls">
             <!-- We can add buttons or lists here later -->
             <button id="pan-to-flatbush" style="display: none;">Pan to Flatbush (Example)</button> <!-- Hidden initially -->
          </div>

          <div id="map"></div>

          <div id="neighborhood-list-container">
            <h2>Neighborhoods</h2>
            <div id="neighborhoods">
                <!-- List will be populated here -->
            </div>
          </div>

        </div> <!-- End container -->

        <!-- Include jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <!-- Include your specific map script -->
        <script src="nyc-data.js"></script>
      </body>
    </html>
    ```
    *   Notice `<script src="nycneighborhoods.js"></script>` is included *before* `nyc-data.js` so the `nycNeighborhoods` variable is available when the map script runs.

4.  **Basic CSS (`nyc-data.css`):** Set map dimensions and basic layout styles.

    ```css
    /* nyc-data.css */
    body {
      font-family: sans-serif;
      line-height: 1.5;
      margin: 15px;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    #map {
      height: 500px; /* Adjust as needed */
      width: 100%;
      border: 1px solid #aaa;
      margin-bottom: 20px;
    }
    #neighborhood-list-container {
        margin-top: 20px;
    }
    #neighborhoods {
      columns: 150px 4; /* Aim for 4 columns, min width 150px */
      list-style: none;
      padding-left: 0;
    }
    #neighborhoods li {
        margin-bottom: 5px;
    }
    #neighborhoods a {
        text-decoration: none;
        color: #0066cc;
        cursor: pointer;
    }
    #neighborhoods a:hover {
        text-decoration: underline;
        color: #004080;
    }
    #controls button {
        margin: 5px;
        padding: 8px 12px;
        cursor: pointer;
    }
    ```

5.  **Initialize Map (`nyc-data.js`):** Start with the basic map setup.

    ```javascript
    // nyc-data.js
    $(document).ready(function() {
        console.log("NYC Data page ready.");

        const map = L.map('map').setView([40.7128, -74.0060], 11); // Start slightly more zoomed out

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        console.log("Base map initialized.");

        // --- GeoJSON processing will go here ---

    }); // End document ready
    ```

Test this setup by opening `nyc-data.html` in your browser. You should see the basic page layout and an empty map centered on NYC.

## Adding and Styling GeoJSON Layer

Now, let's add the neighborhood data using `L.geoJSON()`. This method takes the GeoJSON data object (our `nycNeighborhoods` variable) and an optional `options` object.

```javascript
// nyc-data.js
// Inside the $(document).ready()... after map initialization...

// --- GeoJSON processing starts here ---

// Check if the data variable exists (loaded from nycneighborhoods.js)
if (typeof nycNeighborhoods !== 'undefined') {
    console.log("nycNeighborhoods data found.");

    // Create the GeoJSON layer with styling and popups
    const neighborhoodLayer = L.geoJSON(nycNeighborhoods, {
        // Style function for each feature (polygon)
        style: function(feature) {
            return {
                color: "#007bff",       // Border color (blue)
                weight: 1,            // Border weight
                fillColor: "#a8dadc",   // Fill color (light cyan)
                fillOpacity: 0.4      // Fill opacity
            };
        },

        // Function executed for each feature, adding popups
        onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.neighborhood && feature.properties.borough) {
                const popupContent = `<h3>${feature.properties.neighborhood}</h3><hr>Borough: ${feature.properties.borough}`;
                layer.bindPopup(popupContent);
            }
            // Optional: Add mouse hover effect
            layer.on({
                mouseover: function(e) {
                    const currentLayer = e.target;
                    currentLayer.setStyle({
                        weight: 3,
                        color: '#ff7800', // Orange highlight
                        fillOpacity: 0.6
                    });
                    // Bring layer to front (doesn't work perfectly with polygons sometimes)
                   // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                   //     currentLayer.bringToFront();
                   // }
                },
                mouseout: function(e) {
                    // Reset style using the layer reference stored during creation
                     neighborhoodLayer.resetStyle(e.target);
                }
                // click: function(e) {
                //     map.fitBounds(e.target.getBounds()); // Example: Zoom to feature on click
                // }
            });
        }

    }).addTo(map); // Add the processed GeoJSON layer to the map

    console.log("GeoJSON layer added.");

} else {
    console.error("nycNeighborhoods data not found. Check if nycneighborhoods.js is loaded correctly.");
    $('#map').html("<p style='color:red; text-align:center;'>Error: Could not load neighborhood data.</p>");
}

// --- GeoJSON processing ends here ---
```

**Explanation:**

1.  **`L.geoJSON(dataObject, options)`:** The core function. It iterates through the `features` array in `nycNeighborhoods`.
2.  **`style: function(feature) { ... }`:** This option defines how each feature's geometry (the polygons) should look. It receives the current `feature` object as an argument (though we don't need it for uniform styling here) and must return an object with Leaflet path style options (`color`, `weight`, `fillColor`, `fillOpacity`, etc.).
3.  **`onEachFeature: function(feature, layer) { ... }`:** This option defines a function that runs for *every feature* processed.
    *   `feature`: The current GeoJSON feature object (containing `properties` and `geometry`).
    *   `layer`: The Leaflet layer object created for this feature (e.g., `L.Polygon`).
    *   Inside this function, we check if the required properties exist and then use `layer.bindPopup()` to add a popup using data from `feature.properties`.
    *   We also add `mouseover` and `mouseout` event listeners directly to the `layer` to create a highlight effect. `e.target` refers to the layer the event occurred on. `neighborhoodLayer.resetStyle(e.target)` cleverly resets the style back to what was defined in the main `style` function.

Save and refresh `nyc-data.html`. You should see the styled neighborhood polygons, and clicking on them should reveal popups with their names and boroughs. Hovering should highlight them.

![NYC Neighborhoods Styled](/images/nyc-neighborhoods2.png) *(Conceptual image)*

## Adding Interactive Navigation

Let's populate the `#neighborhoods` div with a clickable list of all neighborhoods.

```javascript
// nyc-data.js
// Inside the $(document).ready()... after adding the GeoJSON layer...

// --- Populate Neighborhood List ---
if (typeof nycNeighborhoods !== 'undefined') {

    // 1. Extract and sort neighborhood names
    const neighborhoodNames = nycNeighborhoods.features
        .map(feature => feature.properties.neighborhood) // Get just the name
        .filter(name => name) // Filter out any null/empty names
        .sort(); // Sort alphabetically

    // Remove duplicates (optional but good)
    const uniqueNames = [...new Set(neighborhoodNames)]; // Clever way to get unique values

    console.log(`Found ${uniqueNames.length} unique neighborhoods.`);

    // 2. Add each name to the HTML list
    const listElement = $("#neighborhoods"); // Get the target div
    uniqueNames.forEach(name => {
        // Create a list item with a link inside
        // Store the name in a data attribute for easy retrieval on click
        const listItemHtml = `<li><a href="#" data-neighborhood="${name}">${name}</a></li>`;
        listElement.append(listItemHtml);
    });

    // 3. Add click listener to the list (using event delegation)
    listElement.on('click', 'a', function(event) {
        event.preventDefault(); // Stop link navigation

        const clickedName = $(this).data('neighborhood'); // Get name from data attribute

        // Find the corresponding feature in the GeoJSON data
        const feature = nycNeighborhoods.features.find(
            feat => feat.properties.neighborhood === clickedName
        );

        if (feature) {
            // Option 1: Fly to the feature's bounds (if polygon)
             // Find the layer corresponding to this feature (more complex)
             // A simpler way for now: calculate bounds approx. or pan to first point
             // Let's pan to the approximate center (or first point)

            // Find the layer (might be slow for large datasets)
            let targetLayer = null;
            neighborhoodLayer.eachLayer(function(layer) {
                if (layer.feature.properties.neighborhood === clickedName) {
                    targetLayer = layer;
                }
            });

             if(targetLayer) {
                 map.fitBounds(targetLayer.getBounds().pad(0.1)); // Zoom to fit the neighborhood bounds slightly padded
                 targetLayer.openPopup(); // Open its popup
             } else {
                  // Fallback: Pan to the first coordinate if layer not found directly
                   const coords = feature.geometry.coordinates[0][0]; // [lng, lat]
                   map.panTo(new L.LatLng(coords[1], coords[0])); // PanTo needs [lat, lng]
                   map.setZoom(15); // Set appropriate zoom
             }


        } else {
            console.warn("Could not find feature for:", clickedName);
        }
    });

} // End of list population block
// --- End Populate Neighborhood List ---
```

**Explanation:**

1.  **Extract Names:** We use `.map()` to get an array of just the names, `.filter()` to remove any empty/null names, and `.sort()` to alphabetize.
2.  **Remove Duplicates:** `new Set(array)` creates a Set object, which automatically stores only unique values. The spread syntax `[... ]` converts the Set back into an array `uniqueNames`.
3.  **Populate List:** We loop through `uniqueNames` using `forEach`. For each name, we create an `<li>` containing an `<a>` tag. The actual name is stored in a `data-neighborhood` attribute on the link for easy access later. This HTML is appended to the `#neighborhoods` div.
4.  **Event Listener:** We again use event delegation, attaching one listener to the parent `#neighborhoods` div that listens for clicks on the `<a>` tags inside it.
5.  **Find Feature:** When a link is clicked, we get the neighborhood name from its `data-neighborhood` attribute. We then use the array `.find()` method on our original `nycNeighborhoods.features` array to locate the full GeoJSON feature object matching that name.
6.  **Navigate Map:**
    *   **Finding the Layer:** Getting the *specific Leaflet layer* for a clicked name requires iterating through the layers created by `L.geoJSON`. `neighborhoodLayer.eachLayer(...)` does this. We check if a layer's feature matches the clicked name.
    *   **Fitting Bounds:** If the layer is found, `targetLayer.getBounds()` gets its bounding box, and `map.fitBounds()` zooms the map to show that area. `.pad(0.1)` adds a small margin.
    *   **Opening Popup:** `targetLayer.openPopup()` automatically shows the info for that neighborhood.
    *   **(Fallback):** If finding the layer directly fails (it can be complex), we fall back to just panning to the first coordinate of the polygon using `map.panTo()`, which requires `L.LatLng(latitude, longitude)`. We also set a reasonable zoom level manually.

Save and refresh. You should now see the list of neighborhoods. Clicking a name should pan/zoom the map to that neighborhood and open its popup.

## Review Questions

In GeoJSON, what does a "FeatureCollection" typically contain?

:::quiz
- A single point's coordinates.
- An array of style properties.
- An array of "Feature" objects.*
- The map's tile layer URL.
:::

What information is typically stored in the `properties` object of a GeoJSON "Feature"?

:::quiz
- The type of geometry (e.g., "Polygon").
- The coordinate data for the shape.
- Non-spatial attributes like name, ID, or description.*
- The map projection system.
:::

In Leaflet's `L.geoJSON(data, { onEachFeature: function(feature, layer) {...} })`, what does the `layer` parameter represent?

:::quiz
- The entire GeoJSON dataset.
- The specific GeoJSON feature object being processed.
- The Leaflet layer (e.g., `L.Polygon`, `L.Marker`) created for the current feature.*
- The base tile layer of the map.
:::

What is the primary purpose of using `event.preventDefault()` inside a click handler for an `<a>` tag with `href="#"`?

:::quiz
- To trigger the link's navigation.
- To stop the browser from jumping to the top of the page or adding `#` to the URL.*
- To get the `data-` attributes from the link.
- To hide the link after it's clicked.
:::

## Challenges

1.  **Conditional Styling:** Modify the `style` function within `L.geoJSON`. Check the `feature.properties.borough` value. If the borough is "Manhattan" (check the exact value in your data), return a different `fillColor` (e.g., 'red') than for other boroughs.
2.  **Borough Filter Buttons:** Add buttons to your HTML for each borough (Manhattan, Brooklyn, Queens, Bronx, Staten Island). Add click listeners (using jQuery) so that when a borough button is clicked, the map pans and zooms to show roughly that borough's area. (You'll need to find approximate center coordinates and a suitable zoom level for each borough). *Advanced: Try filtering the displayed GeoJSON layer to *only* show the selected borough's neighborhoods.*
3.  **Data Source Attribution:** Ensure the link to the data source is clearly visible and functional on your `nyc-data.html` page.
4.  **Commit and Push:** Save all your work and push it to GitHub.

## Key Terms

-   GeoJSON
-   `FeatureCollection`, `Feature`
-   `properties`, `geometry`, `coordinates`
-   `L.geoJSON()`
-   `style` function (in `L.geoJSON` options)
-   `onEachFeature` function (in `L.geoJSON` options)
-   `.find()` (Array method)
-   Event Delegation
-   `map.fitBounds()`, `.getBounds()`

## Download the Project (End of Lesson 12 State)

Here are the course files reflecting the state at the end of this lesson:

::download{files="12_nyc-data.html, 12_nyc-data.js, nycneighborhoods.js"} <br/>

---

# Reading Documentation Effectively

Throughout this course, we've linked to official **documentation** for JavaScript, HTML, CSS, jQuery, and Leaflet. Learning to navigate and understand documentation is a fundamental skill for any programmer, as it's impossible to memorize everything. Documentation is your primary resource for finding out how tools and languages work, what features they offer, and how to use them correctly.

However, documentation can often seem dense, technical, and overwhelming. This lesson provides strategies to approach documentation more effectively.

## What is Documentation?

Documentation is the official explanation of how a piece of software, library, or language works. Good documentation typically includes:

*   **Getting Started Guides/Tutorials:** Step-by-step instructions for basic setup and usage.
*   **API References:** Detailed descriptions of every function, method, property, class, or feature available (the Application Programming Interface).
*   **Examples:** Code snippets demonstrating how to use specific features.
*   **Conceptual Guides:** Explanations of underlying principles or architecture.
*   **FAQs/Troubleshooting:** Answers to common questions and solutions to problems.

## "Getting Started" vs. "API Reference"

It's crucial to distinguish between tutorial-style guides and detailed references:

1.  **"Getting Started" / Tutorials:** Designed to be read sequentially, guiding you through initial setup and basic tasks. Examples: Leaflet's ["Quick Start" guide](https://leafletjs.com/examples/quick-start/), MDN's [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide). **Start here** when learning a new tool.
2.  **API References:** Organized like a dictionary or encyclopedia, listing everything available. Designed for lookup when you know *what* you want to do but need specifics on *how*. Examples: [Leaflet Reference](https://leafletjs.com/reference.html), [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference), [jQuery API Documentation](https://api.jquery.com/). **Use these** when you need details on a specific function or property.

## The Art of Skimming and Searching (Referencing, Not Reading)

You rarely "read" API reference documentation cover-to-cover. Instead, you **reference** it:

1.  **Know What You Need:** Have a specific task in mind (e.g., "How do I add a class to an element in jQuery?", "What options does `L.circle` take in Leaflet?", "How does the array `sort` method work in JavaScript?").
2.  **Use the Search:** Most documentation sites have a search bar. Use relevant keywords.
3.  **Use the Index/Sidebar:** Navigate the structure if you know the general category (e.g., "Array Methods", "Leaflet Map Options", "jQuery Events").
4.  **Use Page Search (`Ctrl+F` or `Cmd+F`):** Once on a relevant page, search for specific keywords within that page.
5.  **Skim for Keywords/Syntax:** Look for function names, parameters, property names, and code examples that match what you need.
6.  **Focus on Examples:** Code examples are often the quickest way to understand usage. Copy, paste, and adapt them.
7.  **Understand Parameters and Return Values:** Pay attention to what inputs a function expects (parameters, their types, and if they are optional) and what output it produces (return value and its type).

**Example: Finding CSS `font` properties:**

Go to the [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference). Search for `font`. You'll see results like `font` (the shorthand property), `font-family`, `font-size`, `font-weight`, etc. Clicking `font-family` will give details specifically about setting fonts.

![MDN font search concept](/images/mdn-font.png)

## Key Documentation Resources for This Course:

*   **JavaScript, HTML, CSS:** **Mozilla Developer Network (MDN)** is the gold standard.
    *   [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
    *   [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
    *   [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
*   **jQuery:**
    *   [jQuery API Documentation](https://api.jquery.com/) (Use the search or browse categories)
*   **Leaflet:**
    *   [Leaflet Documentation (Reference)](https://leafletjs.com/reference.html) (Organized by classes: Map, Layers, Controls, etc.)
    *   [Leaflet Tutorials](https://leafletjs.com/examples.html) (Excellent examples)
*   **JSON:** Often covered within JavaScript resources.
    *   [MDN JSON Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## Beyond the Official Docs

Sometimes the official docs aren't enough, especially when you're unsure what to search for or encounter complex errors.

### Effective Web Searches

*   **Be Specific:** Include the language/library name (e.g., "javascript array remove element", "leaflet add marker on click", "jquery change css property").
*   **Use Keywords:** Think about the action ("add", "remove", "change", "find", "loop", "click") and the object ("element", "array", "string", "map", "marker").
*   **Error Messages:** If you have an error message, copy the *core part* (e.g., `TypeError: Cannot read property '...' of undefined`) into your search, perhaps along with the language/library name. Don't necessarily paste the whole stack trace unless searching for very specific bugs.
*   **Describe the Goal:** Phrase your search as a question or goal (e.g., "how to center a div css", "get value from input field javascript").

### Stack Overflow

[Stack Overflow](https://stackoverflow.com/) is a massive Q&A site for programmers.

*   **Search First:** Your question has likely been asked and answered. Search using keywords from your problem or error message.
*   **Evaluate Answers:** Look for answers that are accepted (green checkmark), highly upvoted, and recent (older answers might use outdated techniques). Read the comments.
*   **Understand, Don't Just Copy:** If you find code that works, try to understand *why* it works before pasting it into your project.
*   **Asking Questions (Use Sparingly as a Beginner):** If you must ask, provide a **Minimal, Reproducible Example (MRE)** – the smallest possible code snippet that demonstrates your problem, what you expected, and what actually happened (including error messages). Read their guide on [how to ask a good question](https://stackoverflow.com/help/how-to-ask). (Note: The community can sometimes be harsh on poorly asked questions.)

![Stack Overflow Example](/images/stack_overflow_example.png)

### Other Communities

*   **Reddit:** Subreddits like r/learnjavascript, r/webdev, r/css, r/gis (for mapping) can be helpful and often friendlier than Stack Overflow for beginner questions.
*   **GitHub Issues:** If you suspect a bug in a specific library (like Leaflet), check the "Issues" tab on its GitHub repository. Someone might have reported it already.
*   **Tutorial Sites:** Sites like javascript.info, CSS-Tricks, Smashing Magazine, freeCodeCamp offer articles and tutorials on specific topics.

## Final Thoughts on Documentation & Learning

*   Reading documentation is a skill that improves with practice. Don't expect to understand everything immediately.
*   Focus on finding the specific information you need *right now*.
*   Examples are your best friend.
*   Don't be afraid to combine official docs with web searches and community resources like Stack Overflow.
*   Learning *how to find answers* is as important as memorizing syntax.

As you start your final project, make documentation your go-to resource when you need to know how a specific function works or what options are available.

## Review Questions

What is the main difference between a "Getting Started" guide and an "API Reference"?

:::quiz
- Getting Started is for experts, API Reference is for beginners.
- Getting Started is sequential/tutorial-based, API Reference is a detailed lookup resource.*
- Getting Started covers only errors, API Reference covers only features.
- Getting Started is online, API Reference is offline.
:::

When using API reference documentation, what is generally the most effective first step?

:::quiz
- Reading the entire page from top to bottom.
- Searching for specific keywords related to your task or function name.*
- Looking only at the introduction section.
- Copying the first code example you find.
:::

Which website is considered the primary and most authoritative documentation source for core web technologies like HTML, CSS, and JavaScript?

:::quiz
- Stack Overflow
- W3Schools
- Mozilla Developer Network (MDN)*
- jQuery API Documentation
:::

When searching the web for help with a programming error, what is generally recommended?

:::quiz
- Copy and paste the entire multi-line error stack trace.
- Search only using the error type (e.g., "TypeError").
- Include the language/library name and the core part of the error message.*
- Avoid mentioning the error message in the search.
:::

## Challenges

*(These challenges require you to find information using the documentation links provided earlier or web searches).*

1.  **CSS Challenge:** Using the MDN CSS Reference or a web search, find out how to apply a `box-shadow` effect to a `<div>`. Write down the basic syntax and what the main values control (e.g., horizontal offset, vertical offset, blur, color).
2.  **JavaScript Array Challenge:** Using the MDN JavaScript Reference, find the array method that checks if *at least one* element in an array passes a test implemented by a provided function. What is the method called? (Hint: It's similar to `forEach` or `map` but returns a boolean).
3.  **jQuery Challenge:** Using the jQuery API documentation, find the method used to get the `width` of an element (excluding padding, border, and margin). What is the method name?
4.  **Leaflet Challenge:** Using the Leaflet reference documentation, find the map option used to *disable* zooming with the mouse scroll wheel. What is the option called?

## Key Terms

-   Documentation
-   API (Application Programming Interface) Reference
-   Getting Started Guide / Tutorial
-   MDN (Mozilla Developer Network)
-   Stack Overflow
-   Keyword Search
-   Parameters, Return Value
-   Examples
-   Debugging

---

# Starting Your Final Project

Congratulations on reaching this stage! You've learned the fundamentals of JavaScript, HTML, CSS, and worked with powerful libraries like jQuery and Leaflet. Now it's time to apply these skills to a project of your own design.

The next few weeks are dedicated to developing your final project. This is your chance to explore a topic that interests you, be creative, and solidify the concepts we've covered. Your project will be largely self-directed, but there are some core requirements to demonstrate your understanding.

## Project Requirements

Your final project should showcase the key skills learned in this course. It must include:

1.  **HTML Structure:** At least one well-structured HTML page (`index.html` as the main entry point). Use semantic tags where appropriate.
2.  **CSS Styling:** An external CSS file (`styles.css` or similar) defining the visual appearance and layout of your project. Aim for a clean, readable, and appropriate style. Consider basic responsiveness if possible (making it look okay on different screen sizes).
3.  **JavaScript Interactivity:** An external JavaScript file (`script.js` or similar) that adds dynamic behavior. This should involve:
    *   DOM manipulation (selecting elements, changing content/styles - jQuery is fine here).
    *   Event handling (responding to user actions like clicks).
4.  **Data Integration (JSON):** Include and use data stored in at least one JSON file (`.json` or prepared as a `.js` variable). Your JavaScript should fetch/access this data and use it to populate parts of your page dynamically.
5.  **Leaflet Map:** Integrate an interactive Leaflet map relevant to your project's theme or data. This map should display some data, such as:
    *   Markers with popups.
    *   Polylines or polygons.
    *   Data loaded from your JSON file (e.g., plotting points, showing GeoJSON boundaries).
6.  **GitHub Repository:** Your entire project (HTML, CSS, JS, JSON files, any images) must be contained within a **public** GitHub repository.
7.  **Deployment (GitHub Pages):** Your project must be deployed and accessible live on the web using GitHub Pages.
8.  **Basic Content:** Include a title, a brief description of the project's purpose, clear instructions for interaction (if needed), and attribution for data sources or significant code snippets borrowed.

*The complexity of each component can vary based on your project's focus, but all components must be present and functional.*

## Project Components Checklist

Practically, ensure your project folder contains at least:

*   `index.html` (Your main page)
*   `styles.css` (or similar name for your main CSS)
*   `script.js` (or similar name for your main JS)
*   `your_data.json` (or `your_data.js` if prepared for Leaflet GeoJSON)
*   Any image files used
*   (Potentially other HTML/CSS/JS files if you structure it with multiple pages/scripts)

...all managed within a single GitHub repository and deployed via GitHub Pages.

## Project Ideas Brainstorm

Your project topic is up to you! Connect it to your research, hobbies, or interests. Consider:

*   **Data Exploration:** Visualize a dataset related to your field (e.g., historical events map, literary character locations, scientific data points, campus resources).
*   **Interactive Narrative:** A more advanced Choose Your Own Adventure, a story map, or an annotated text (like our poem example, but with your own content).
*   **Local Guide/Tour:** Map interesting spots in a neighborhood, a historical walking tour, locations related to a specific theme (e.g., best coffee shops, architectural highlights).
*   **Issue Awareness:** Map data related to social or environmental issues (e.g., access to parks, pollution data points, historical redlining - be mindful of ethical data representation).
*   **Personal Interest:** Map your travels, locations from a favorite book/movie, a collection database (e.g., mapping where your vinyl records were recorded).

**Ask Yourself:**

1.  **Topic:** What am I interested in exploring or presenting?
2.  **Story/Goal:** What is the main message or purpose? What should a user learn or be able to do?
3.  **Data:** What information do I need? Can I find existing data (JSON, GeoJSON, CSV)? Or do I need to create it myself (e.g., writing descriptions, finding coordinates)?
4.  **Visualization:** How will the map enhance the project? What should be displayed on it (points, lines, shapes, popups)?
5.  **Interaction:** How will users interact? Clicking map features? Clicking list items? Buttons? Forms (more advanced)?
6.  **Structure:** Single page or multiple pages? How will content be organized?

## Finding Data

If using external data:

*   **NYC Specific:** [NYC Open Data](https://opendata.cityofnewyork.us/)
*   **US Gov:** [Data.gov](https://www.data.gov/)
*   **Mapping/GIS:** Natural Earth Data, OpenStreetMap (data extracts), USGS
*   **General:** Kaggle Datasets, Google Dataset Search, Datahub.io, Data.world
*   **Humanities/Cultural:** Check specific archives, libraries (NYPL Digital Collections), museum APIs.

**Data Format:**

*   **Prefer JSON or GeoJSON.** GeoJSON is ideal for mapping boundaries or points with associated properties.
*   **CSV:** Common format. You can often convert CSV to JSON using online tools (like [CSVtoJSON](https://csvjson.com/csv2json)) or simple scripts (more advanced). Manually structure smaller datasets directly in JSON.
*   **Coordinates:** You might need to find latitude/longitude for points yourself using Google Maps, Wikipedia, or dedicated geocoding tools/services.

## Project Scope - Be Realistic!

This is crucial. You have limited time.

*   **Start Small:** Focus on the core requirements first. Get a basic HTML page, a simple map displaying *some* data from your JSON, and one or two interactive elements working.
*   **Minimum Viable Product (MVP):** What is the absolute simplest version that fulfills the requirements? Aim for that first.
*   **Prioritize:** List desired features. Implement the essential ones first. Add extras (more complex interactions, fancier styling, more data) *only* if you have time after the core is working and deployed. It's better to have a simple, complete, working project than a complex, broken one.

## Getting Started: Your First Steps

1.  **Define Your Idea:** Write a brief (1-2 paragraph) proposal outlining your project topic, the data you plan to use, the main features/interactions, and how it meets the course requirements. Share this with the instructor/class if requested.
2.  **Gather/Create Data:** Locate your dataset(s) online or start structuring your own data in JSON format. Find necessary coordinates if applicable.
3.  **Set Up Repository:** Create a *new, empty* public GitHub repository specifically for this project.
4.  **Clone Repository:** Clone the empty repository to your computer using VSCode or the command line.
5.  **Create Basic Files:** Inside your cloned project folder, create the initial `index.html`, `styles.css`, and `script.js` files. You can copy the basic structure from earlier lessons or start fresh. Add your `data.json` (or `.js`) file as well.
6.  **Initial Commit:** Make your first commit with these basic files (`git add .`, `git commit -m "Initial project setup"`, `git push origin main`).

**Now you have a foundation to start building! Remember to commit and push your changes regularly.**

---

# Putting the Project Together: Strategies

You have your idea, your data, and your repository. Now, how do you assemble the pieces effectively? Here are some strategies:

## Wireframing Your Design

Before diving deep into CSS, sketch out a **wireframe**. This is a simple visual guide, like a blueprint, focusing on the layout and placement of elements, not the visual details.

*   **Purpose:** Helps plan content organization, information hierarchy, and user flow.
*   **Tools:** Pen and paper, whiteboard, or online tools like [Figma](https://figma.com) (free tier), [Excalidraw](https://excalidraw.com/), or [diagrams.net](https://app.diagrams.net/) (formerly draw.io).
*   **Focus On:**
    *   Where will the map go?
    *   Where will text content reside?
    *   Where will interactive elements (buttons, lists, info displays) be placed?
    *   How does a user navigate between different parts (if applicable)?

![Simple Wireframe Example](/images/wireframe_example.png) *(Keep the image reference)*

A wireframe helps you think through the structure *before* getting lost in styling details.

## CSS Layout Strategies: Flexbox and Grid

Getting elements positioned correctly is often challenging. Modern CSS offers powerful layout tools:

*   **Flexbox:** Excellent for arranging items in **one dimension** (either a row or a column). Great for navigation bars, centering items within a container, distributing space along a line, and aligning items vertically or horizontally. We used it briefly for the jokes page. [A Complete Guide to Flexbox (CSS-Tricks)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is an invaluable resource.
*   **CSS Grid:** Designed for **two-dimensional** layouts (rows *and* columns). Ideal for overall page layouts, complex grid structures, and aligning items in both dimensions simultaneously. [A Complete Guide to Grid (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/).

**Which to use?** Often a combination! You might use Grid for the main page layout (header, sidebar, main content, footer) and Flexbox *within* those sections (like centering items in the header or laying out buttons in a row).

*   Read about their relationship: [MDN: Relationship of Grid Layout to other layout methods](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
*   Comparison guide: [Flexbox vs. CSS Grid (Tuts+)](https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184)

Experiment with these in your `styles.css` to achieve the layout envisioned in your wireframe.

## Styling Interactive Elements

Provide visual feedback to the user. Use CSS pseudo-classes like `:hover`, `:active`, and `:focus` to change styles when users interact with elements (buttons, links, etc.).

**Example (Styling a Button):**

```css
/* styles.css */
.action-button {
  padding: 8px 15px;
  background-color: cornflowerblue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer; /* Indicate it's clickable */
  transition: background-color 0.2s ease, transform 0.1s ease; /* Smooth transitions */
}

.action-button:hover {
  background-color: darkblue; /* Darker blue on hover */
}

.action-button:active {
  background-color: navy; /* Even darker when actively clicked */
  transform: scale(0.98); /* Slightly shrink when clicked */
}

.action-button:focus {
   outline: 2px solid dodgerblue; /* Accessibility: show focus */
   outline-offset: 2px;
}
```

```html
<!-- index.html -->
<button id="myBtn" class="action-button">Do Something</button>
```

This CSS-only approach is generally preferred for simple state changes over using JavaScript/jQuery's `.css()` method for hover/active states, as it keeps styling concerns within CSS.

## Incorporating GeoJSON Data (Recap)

If using GeoJSON data with Leaflet's `L.geoJSON()` method:

1.  **Prepare the File:** Ensure your data is in a `.js` file, assigned to a `const` variable (e.g., `const myGeoData = { ... };`).
2.  **Link in HTML:** Include the `<script src="your_data.js"></script>` tag in your HTML file's `<head>` or `<body>` *before* the script that uses the data (`script.js` or `map.js`).
3.  **Use in Leaflet:** Access the variable directly in your Leaflet code: `L.geoJSON(myGeoData, { /* options */ }).addTo(map);`.

This avoids potential issues with asynchronous loading or parsing errors that can occur when trying to load raw `.json` files directly in simpler setups.

## General Advice for Development

*   **Commit Frequently:** Use Git often! Commit small, logical changes with clear messages. Push regularly to GitHub for backup.
*   **Test Often:** Reload your page frequently after making changes to catch errors early. Use the browser console (`Ctrl+Shift+I` or `Cmd+Option+I`) constantly to check for errors and log values.
*   **Break Down Problems:** If something isn't working, isolate the issue. Comment out code, test small parts, use `console.log`.
*   **Read Documentation:** When using a specific function or method (jQuery, Leaflet, JavaScript), look up its documentation to confirm parameters, options, and return values.
*   **Organize Your Code:** Keep HTML structure clean, group related CSS rules, and use functions in JavaScript to organize logic. Add comments to explain complex parts.
*   **Ask for Help:** Don't stay stuck for too long. Ask the instructor, classmates, or search online communities (Stack Overflow, Reddit). Clearly describe the problem, what you've tried, and provide relevant code snippets.
*   **Keep Scope Realistic:** Focus on fulfilling the core requirements first. Add extra features only if time permits. A finished, simple project is better than an unfinished, complex one.

## Challenge: Keep Building!

Continue developing your final project, applying these strategies. Focus on:

1.  Structuring your HTML based on your wireframe.
2.  Applying CSS for layout (consider Flexbox/Grid) and basic styling.
3.  Loading your JSON data in your JavaScript file.
4.  Displaying some initial data on the page or map.
5.  Implementing one core interactive feature (e.g., a button click that does something, displaying info from a map click).
6.  Committing your progress to GitHub regularly.

---

# Going Live: Deploying with GitHub Pages

You've built your project, tested it locally, and pushed everything to your GitHub repository. The final step is to make it accessible to anyone on the web. **GitHub Pages** is a free and straightforward way to host static websites (like the ones we've built using HTML, CSS, and client-side JavaScript) directly from your repository.

## Deployment Steps

Follow these steps carefully:

1.  **Final Push:** Ensure all your latest code (HTML, CSS, JS, JSON/data files, images) is committed and pushed to your main branch (`main` or `master`) on GitHub. Your local project folder and the GitHub repository should be in sync.

2.  **Go to Repository Settings:** Open your web browser and navigate to your project's repository page on GitHub.com.

3.  **Access Pages Settings:**
    *   Click on the **"Settings"** tab (usually near the top right of the repository navigation).
    *   In the left sidebar menu, click on **"Pages"** (under the "Code and automation" section).

4.  **Configure Source Branch:**
    *   Under the "Build and deployment" section, find the "Source" setting. It might say "Deploy from a branch".
    *   In the "Branch" dropdown menu, select your main branch (usually `main` or sometimes `master`).
    *   Leave the folder dropdown next to it as `/ (root)`.
    *   Click **"Save"**.

    ![GitHub Pages Branch Selection](https://docs.github.com/assets/cb-113970/images/help/pages/branch-publishing-selection.png) *(Conceptual image from GitHub Docs)*

5.  **Wait and Visit:**
    *   GitHub Pages will now start building and deploying your site. This might take a minute or two (sometimes longer on the very first deployment).
    *   Refresh the "Pages" settings page after a minute. You should see a green banner appear at the top saying **"Your site is live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`"**.
    *   If you don't see the green banner immediately, wait a bit longer and refresh again. Check the "Actions" tab in your repository for build progress if needed.
    *   **Important:** The URL will include your GitHub username and the repository name.

6.  **Visit Your Live Site:** Click the URL provided in the green banner. Your project should now be publicly accessible on the web!

    *   **Troubleshooting:**
        *   *404 Error?* Double-check that your main HTML file is named exactly `index.html` (all lowercase) and is in the *root* directory of your repository. Wait a few more minutes for deployment. Clear your browser cache.
        *   *Styles/Scripts Not Loading?* Ensure all your file paths in HTML (`href` for CSS, `src` for JS/images) are **relative** (e.g., `styles.css`, `images/logo.png`, `script.js`) and don't start with a `/` unless intended. Check the browser's developer console (Network tab) for loading errors. GitHub Pages URLs are case-sensitive, so make sure filenames in your code match the actual filenames exactly.
        *   *Data Not Loading?* Ensure your JSON/JS data file path is correct in your script and that the file was pushed to GitHub.

## Sharing Your Work

You can now share the `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/` URL with anyone to show them your project.

---

## Final Course Thoughts

**Congratulations!** You've journeyed from the basics of JavaScript syntax to building and deploying interactive, data-driven web pages with maps. This involved understanding:

*   Core programming concepts (variables, types, operators, loops, conditionals, functions, scope).
*   The fundamentals of web technologies (HTML, CSS, JavaScript, the DOM).
*   Working with data formats (Arrays, Objects, JSON, GeoJSON).
*   Utilizing powerful libraries (jQuery, Leaflet).
*   Essential developer tools (Browser Console, VSCode, Git, GitHub).
*   Debugging strategies and how to read documentation.

This course aimed to give you a practical foundation. The world of web development and data visualization is vast, but you now have the essential skills and, more importantly, the ability to *learn how to learn* more. You can read documentation, search effectively, debug problems, and build upon this foundation.

Whether you use these skills for research visualization, digital humanities projects, building personal websites, or simply as a stepping stone to further learning, I hope this course has been valuable and empowering. Keep experimenting, keep building, and don't be afraid to tackle new challenges!

**Good luck with your future coding endeavors!**
