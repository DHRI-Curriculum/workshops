---
title: This is the title
cover title: short title!
description: A description of the workshop.

# for programming language, choices are: jupyter, python, javascript, computer (for command line), html_css, or none
programming_language: python

learning objectives:
    - Understand what Python is and, in general terms, what it can do.
    - Run Python programs, both by interacting directly with the interpreter and by preparing and running scripts.
    - Distinguish among common Python data types (integers, floats, strings, booleans, and lists).
    - Become familiar with variables and control flow.
    - Engage with error output and use the internet and documentation to independently research language features.
    - Learn how to find and import code from external sources to solve more complex problems.

estimated time:
    - 3 - 4 hours

# has to be formatted like this!
prerequisites: 
    - name: command line
      description: Introduction to the Command Line (Required). Participants need basic command line knowledge before learning Python programming.
      required: true
    - name: data ethics
      description: Data Ethics (Recommended) This workshop will give you a basis for thinking through the ethical considerations of your programming projects.
      recommended: true

instructors: 
    - 'Stephen Zweibel'
    - 'Leanne Fan'

authors:
    - 'Kalle Westerling'
    - 'Di Yoong'
    - 'Lisa Rhody'
    - 'Jojo Karlin'
    - 'Stephen Zweibel'
    - 'Patrick Smyth'

editors:
    - 'Di Yoong'
    - 'Lisa Rhody' 
    - 'Stephen Zweibel'

readings:
    - For a case for Python as a first language, see [Five Reasons Why Learning Python Is The Best Decision](https://medium.com/datadriveninvestor/)
    - For examples of Python projects, see [What Can I Do With Python?](https://realpython.com/what-can-i-do-with-python/)

ethical considerations:
    - Programmers use Python to make data portable and readable. In a beginner lesson, show strings for text before you move to numbers or lists. You can read more about Python values at [the Zen of Python](https://www.python.org/dev/peps/pep-0020/).
    - As we learn about Python data types and grammar, track the choices involved in designing a digital format. When using Python, name the assumptions you add while encoding data. For more on data types and ethical data work, see our [Data Literacies workshop](https://www.github.com/DHRI-Curriculum/data-literacies).

projects:
# Title and then description and link
    - name: The NEH Impact Index
      description: Former Digital Fellow Patrick Smyth built The NEH Impact Index to show how the National Endowment for the Humanities distributes funds across the United States. Smyth used Python to map NEH-supported projects and institutions. You can check out the code on Github.
      link: http://www.nehimpact.org/about
    - name: Mapping Arts NYC
      description: Mapping Arts NYC, created in 2019 by the Graduate Center’s Data for Public Good fellows, “is a project that explores the geography and representation of arts and culture in New York City over time.” The project team wrote Python scripts to clean and interpret the data.
      link: http://gcdiprojects.org/MappingArtsNYC/

resources:
    - name: Digital Fellows’ Python Cheat Sheet
      description: See the Digital Fellows’ Python Cheat Sheet for handy commands that we cover in this workshop.
      link: https://curriculum.dhinstitutes.org/shortcuts/workshop/python

---

<!---
README: This workshop is a template for creating new workshops. Please read the instructions carefully.

General instructions for editing this template:
1) Duplicate this file (to avoid overwriting it) and rename/save it to the name of the workshop you are creating. If you are creating your own workshop repository, save the file as a Markdown file (`.md`) in the `workshops` folder, with hyphens to indicate spaces.
2) Edit the YAML front matter at the top of the file to include the correct information for your workshop (see more about that below).
3) Edit the content of the workshop with your lessons.

YAML Metadata:

Everything above this comment section (the YAML) is metadata for the front page. It must be placed at the very top of your workshop file, beginning and ending with the three hyphens ---. Everything below (starting with #) is the actual content of your workshop.

Copy the metadata fields you need:
- Title and excerpt for the front page
- Learning objectives as bullet points
- Estimated time to complete the workshop
- Dependencies for required or recommended workshops
- Current and past authors, when applicable
- Current and past editors, when applicable
- Readings that support the workshop
- Ethical considerations for the topic or method
- Projects that use the skills taught here
- Resources for participants
- Goals for the workshop

The metadata above can serve as a starting point for your own workshop; after copying it, keep the syntax intact and remove fields that do not apply. At minimum, include title and description; cover title is optional.
---> 

# Page 1

Welcome to my workshop. This is the first page (the first lesson).

<!--- DHRIFT starts a new page when you use an h1 or h2 markdown header (the #). Use them to structure lessons in your workshops. --->

To add a lesson, simply type your lesson content below the header. You can use typical markdown styles to format your text.

## Subsection 1

This is a subsection of the first lesson.

### Sub-subsection 1

This is a sub-subsection of the first lesson. DHRIFT keeps level 3 headings on the same page as the level 1 or 2 heading they are nested under, and it leaves them out of the table of contents. Use them to break up long sections without adding table-of-contents entries or new pages.

In addition to text content, you can add images to your workshop. Add images to clarify a concept or show the thing being discussed.

### Images

To add an image to your workshop, you can use standard markdown syntax for images. Here is an example:

```markdown
![Alt text](/path/to/image.jpg)
```

Replace `/path/to/image.jpg` with the path to your image file (located in designated folder in the /images folder)

### Code Snippets

You can include code snippets in your workshop using standard markdown syntax for code blocks. You can use three backticks (```) to start and end the code block, followed by the language identifier (e.g., python) to specify the language of the code snippet.

```python
print("Hello, world!")
```

Add `python` after the opening backticks so DHRIFT formats the code block correctly. You can replace `python` with another supported language such as `javascript` or `html`.

## Components

There are several components you can incorporate into your lessons, including:

1. Embed the Python REPL with this directive:

::pythonrepl

2. Add a download button with the file list you want participants to receive:

::download{files="your_file1.csv, your_file2.md"}

Here, `your_file1` and `your_file2` are the files to download. You can add as many as you need; separate each file with a comma. Include copies of the files indicated in the `uploads` folder.

3. Add an info box with `:::info` to highlight an aside:

:::info
Here's an interesting aside!
:::

4. Link internally to another workshop with `:link`.

:link[some text]{workshop="python" page="5"}

Use the `:link` directive when linking to another workshop page. `workshop` is the workshop file name, and `page` can be found in the URL query string, for instance: `?user=dhri-curriculum&repo=workshops&file=command-line&page=15&instUser=dhri-curriculum&instRepo=dhrift-site-template`

<!--- Most workshop lessons should include some form of a challenge, a solution, key terms, and an evaluation. See below for an example of each. --->

## Evaluation

This evaluation uses a quiz. For the syntax, see the example question and quiz below:

What are the characteristics of the REPL? Select all that apply.

:::quiz
- The REPL has a prompt that begins with `$`.
- The REPL has a prompt that begins with `>>>`.*
- The REPL and the terminal are the same thing.
- The REPL can be used to evaluate mathematical expressions like `2 + 2`.*
:::

<!--- For quizzes, each list item in the :::quiz directive is a potential answer. To indicate correct answers, place an asterisk at the end. --->

<!-- Each section end should have a collection of key words related to the lesson, like so: -->
:::keywords
- keyword 1
definition 1

- keyword 2
definition 2
:::

<!--- Keep each keyword definition to one paragraph. --->

<!--- To create a challenge with a solution that you can show/hide, you can use the following custom markdown syntax: --->

### Challenges

Where are DHRIFT workshops stored?

### Solution

:::secret
In a GitHub repository.
:::

Write a challenge and place the solution inside `:::secret`.

# Section 2

This is the second section (the second lesson) of the workshop. Provide as many pages as you'd like.

# Section 3

# Section 4

# Section etc.
