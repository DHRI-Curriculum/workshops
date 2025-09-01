---
title: 'Command Line Workshop'
cover title: 'Command Line'
description: 'The command line is a way to interact with our computer via text. It is a foundational skill for digital projects as it allows us to understand the architecture of computer systems. In this workshop, you will be able to learn basic commands while working on DHRIFT with an emulated command line. At the end of the workshop, you will learn how to transfer these skills to your computer. After that, you will have working knowledge to continue learning according to the needs of your projects.'
cover_image: '/images/workshops/Cover_RT-11_help.jpg'

programming_language: 'computer'

learning objectives: 
    - description: 'At the end of this workshop, you will be able to' 
    - Identify the command line and historicize it among other forms of human-computer interaction. 
    - Explain the benefits of interacting with your computer from the command line.
    - Navigate your filesystem using the command line. 
    - Create new files and directories.  
    - Move content and files in the filesystem. 
    - Search across and within text files.

estimated time: 4 hours

prerequisites: 
    - None: 
        description: This workshop does not have any prerequisites. 
        required: true
instructors:
    - 'Silvia Rivera Alfaro'
    
authors:
    - 'Silvia Rivera Alfaro'
    - 'Stefano Morello'
    - 'Kelsey Chatlosh'
    - 'Patrick Smyth'
    - 'Mary Catherine McKinniburgh' 
    - 'Jojo Karlin'
    - 'Kalle Westerling'

editors:
    - 'Leanne Fan'
    - 'Di Yoong'
    - 'Lisa Rhody' 
    - 'Kalle Westerling'

readings:
    - Neal Stephenson's [*In the Beginning... Was the Command Line*](https://web.stanford.edu/class/cs81n/command.txt) is a useful piece to grasp the relationship between (and the affordances of) the command line and the GUI.
    - In [*Accessibility of Command Line Interfaces*](https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445544), Harini Sampath, Alice Merrick, and Andrew Macvean reflect on the challenges of interacting with the computer via command line for users with visual disabilities.
    - Douglas Rushkoff's [*Program or Be Programmed*](http://www.youtube.com/watch?v=BXjRaoTPlPE) based on his book with the same title.

ethical considerations:
    - "'The command line' is laden with masculine and military metaphors, which is reflective of the history of computing and programming. As Wendy Hui Kyong Chun discusses in *On Software, or the Persistence of Visual Knowledge* (2004), almost all human computers in the US during World War II were young women. Human computers received commands from analysts —predominantly men with the military— that they then had to interpret and act upon the machine. As Chun argues, 'computation depends on 'yes, sir' in response to short declarative sentences and imperatives that are in essence commands'."  
    
projects:
    - Feminist Linguistics Repository:
        description: This digital repository was created by Silvia Rivera Alfaro as her Interactive Technology and Pedagogy project. It belongs to Indisciplinadxs, a community of practice that was founded by LAILaC students along with feminist linguists from across the Americas. The command line is used in the project for doing installations of different programs required for DSpace and to install this repository software. The repository is hosted on a single-board computer so the command line was used to configure it as a home server. The command line is used to go into developer mode and make improvements in the front–end of the repository. It is also used for collaborating remotely in case of troubleshooting and to give general maintenance to the project.
        link: https://repositorio.linguisticafeminista.com/
    - Fair World 64::
        description: A Text-Based Game of the 1964–1965 World's Fair. A recent digital capstone project by Christofer Gass runs a Python script on the command line.
        link: https://academicworks.cuny.edu/gc_etds/3786/
   
resources: 
    - Command Line Basics by The Odin Project:
        description: The Odin Project is an open learning resource. The Command Line Basics lessons include several projects for people interested in learning about the Command Line. 
        link: https://www.theodinproject.com/lessons/foundations-command-line-basics 
    - Awesome Bash:
        description: A curated list of useful Bash scripts and resources
        link: https://github.com/awesome-lists/awesome-bash 
---

# Introduction

Learning how to use the command line and how to navigate your computer's information architecture is an important skill upon which future workshops and technical concepts rely. The command line is a text-based form of human-computer interaction that allows you to communicate directly with your computer. Understanding how your computer works and how to navigate and search without relying on the graphical interface of your operating system (usually MacOS, Windows, or Linux) provides a knowledge base for learning programming languages like Python, R, or Javascript. 

The command line looks like a blinking cursor on the screen waiting for a user to type in instructions. Working from the command line, you can:

- Automate tasks such as creating, copying, and converting files
- Set up your programming environment
- Run programs you create
- Access the (many) programs and utilities that do not have graphical equivalents
- Access and control other computers remotely 
- Collaborate with others working across a distributed network of computers
- Install software, including server-side software 

And there are other uses that you will find according to your interests and the places your future projects might take you! 

This workshop will show you some features of the command line, and over time, you may prefer to use the command line rather than your operating system's graphical interface for many tasks. 

# What is the command line?

The command line is a text-based interface that allows you to communicate with your computer. You input text commands and the interface interprets them into appropriate operating system functions. 
You might already be familiar with operating systems such as MacOS, Windows, Linux, Android, or iOS. An operating system is a software that manages the hardware and programs of your computer. When you opened your browser to start this workshop, you used your operating system's graphical interface to find an icon that represents your browser (either Google Chrome, Mozilla Firefox, or another) and you double clicked on it to open. 

The following image shows a command line on a Mac, where it is called Terminal. The command line allows you to send commands to your operating system's shell to be interpreted as instructions for your computer to follow.

![It is a simple program with a plain background and letters. On the first line, it says: Last Login: Wed Dec 27 16:34:06 on console. The second line says: base _silvira@Silvias-MBP ~ % immediately followed by the cursor showing it is where you write](/images/command-line/How-command-Line-looks-like.png "Terminal")

As we mentioned on the front page of this workshop, the command line is laden with masculine and military metaphors that come from the incarnated relationship of computer development and the technological arms race. To understand the relationship between computers and warfare, the essay [As We May Think](https://www.w3.org/History/1945/vbush/vbush-all.shtml), written in 1945, is a good source to reflect on the role of science in World War II. 

## Command line and humans

The command line is a way of interacting with computers. Historically, [human-computer interaction (HCI)](https://ieeexplore.ieee.org/abstract/document/9140327) has driven hardware development. In this section, we learn about different forms HCI to understand why the command line is a basic and useful digital skill.

The first "computers" were humans: it was an occupation. Before electronic computers, people were paid to develop mathematical operations. The [majority](https://www.jstor.org/stable/25147356?seq=1) were women:they were contracted as cheaper labor, despite having the same abilities, who were treated as secretaries. The photo below shows the women computers who calculated the trajectory of the first US satellite, the Explorer 1. 
 
![A group of all women human computers](/images/command-line/ComputersForExplorer1Trayectory.jpg)

<Info>
To learn about the hidden labor of African-American women at NASA starting in 1943, we recommend [Human Computers at NASA](https://omeka.macalester.edu/humancomputerproject/), a digital archive.
**Bonus:** This archive is done with Omeka, a program that requires installations using the command line.
</Info>

The Electrical Numerical Integrator and Calculator (ENIAC), which was created in 1945, was the first electronic, programmable computer. At 1,800 square feet (167 square meters) it occupied an entire room. In fact, it would have been as large as the average house at the time. Its purpose was [warfare](https://www.jstor.org/stable/45363261). The enormous size of computers in the 1940s alone made them challenging to interface with. 

<Info>
Although ENIAC was developed by women and men, available histories typically focus on  hardware developers, who were often male, over programmers, who were often female. [The Forgotten Female Programmers Who Created Modern Tech](https://www.npr.org/sections/alltechconsidered/2014/10/06/345799830/the-forgotten-female-programmers-who-created-modern-tech) is a six-minute radio program that includes the voice of one of the ENIAC programmers. 
</Info>

In order to tell ENIAC –and other early computers– what to do, programmers used *punch cards*, a piece of thick paper with holes. The holes represented machine code, which is the information electronic computers need to perform calculations. This is how punched cards look: 

![A used punch card](/images/command-line/Punch-card.png "Punch card")

<Info>
Punch cards have been around since 1725 to operate looms in textile manufacturing. In the 1800s, they were used to automate the operation of the loom, key to the Industrial Revolution.  This type of card became important for computing way before electrical computers existed. The idea of a mechanical computer device was intertwined with the loom machines. To learn about it we recommend this [article about Ada Lovelace](https://theconversation.com/ada-lovelaces-skills-with-language-music-and-needlepoint-contributed-to-her-pioneering-work-in-computing-193930), who proposed the use of punch cards and created a program. She is known as the first computer programmer.
</Info>

Punching cards was not a quick or friendly way to interact with computers -even after mechanical keypunches were invented. Interacting with the computers required physically traveling to a place and going into a specific room. Also, to communicate with those first machines, people required very specialized knowledge, especially mathematics. 

## Resizing computers 
 
New technologies, including hardware and software, were required to allow new ways of interacting with computers. 

![A computer terminal](/images/command-line/DEC_VT100_terminal_transparent.png "Computer terminal")

The command line dates from the 1950s. It emerged related to teletype machines and computer terminals, which included keyboards! This way of HCI was much friendlier and more efficient than the punch cards:

>"It allowed programmers to directly enter their programs and data into the computer, execute those programs, view the results, and make any needed corrections – all without the need for clunky keypunch machines, massive printers, and human operators. When personal computers began to emerge in the late 1970's and early 1980's, they too adopted the command line interface." ([Watson Interactive Learning Suite Suite](http://watson.latech.edu/book/future/futureEvolving.html#))

Looking for new ways of HCI, another user-friendly option emerged: the Graphic User Interface (GUI, pronounced "gooey"). This is the interface we are more familiar with, this is the pointing and clicking. In GUI, you communicate with the computer by selecting icons. 

![A Graphic User Interface from the 1980s](/images/command-line/GUI-IBM_PC_GEM.jpg "GUI")

At first, the interface was limited to specific programs. After the 1980s, it became central to operating systems, such as macOS, Linux, and Windows. You can navigate GUI with the keyboard, but the mouse -invented in 1963- was central to its popularization. 

Today, with computers that can be transported in our hands, we interact with them via touchscreen. And far from the first computers making mathematical operations, we use these machines for as many tasks as we can imagine, from performing basic calculations to asking for directions on a map.

GUI is the friendliest interface for user experience. However, the command line continues to be a faster and more efficient way to interact with our computers. These characteristics make the CLI especially important for people working on digital projects. So, far from being something from the past, as many users might have felt when GUI became popular, the command line is actually an everyday skill for many people working with computers, especially those working with networks, systems, and servers.  

<Info>
We recommend [Hello, World - Command Line Heroes Season 2](https://www.redhat.com/en/command-line-heroes/season-2/hello-world), a podcast episode about the computer programming pioneer Grace Hopper. In 1951, Hopper invented the first *compiler*, a program to translate a source code (e.g. English) to machine code (bytecode) or other programming languages. For her huge contribution to HCI, in the field people refer to her as the mother of computer science or the godmother of independent programming languages. Hopper was a computer scientist, mathematician, and rear admiral who joined the US Navy Reserves during World War II. Her career illustrates the relationship between computer innovation and warfare. 
</Info>

# Talking computer
### What is *text* for computers?

To communicate with the computer via the command line we use *text inputs*. It is important to stop for a minute to define what *text* means in this context. 

![A word is written colorfully. It says "Text! In simple plain lines and letters we see a mark that selects all "Text!" to annotate that that is a "string". Then, on the "x" it annotates "character". On the bottom you can read "character equals code unit" and "a code unit has a number of bites". ](/images/command-line/Text-computers.png "text")

For computers, text is merely the strings of *characters*. Characters are individual symbols that are represented by bytes to the computer. For example, in this image, we have a string of 5 characters. Characters are letters(a, ñ, ș, î), numbers (1,٣,3), spaces, tab (tab), punctuation marks (¿?, ""), and symbols (@ , %, \), control characters (bell, new line, end of text), even emojis can count as characters. So in "This %%??# i5 s7ilL t3xt for a computer" the computer will count 39 characters, including the spaces. 

As humans, we are used to thinking of written texts as interweaving the words, syntax, and discourse that together form a fabric ("text" comes from the same Latin root that "textile": *texere*, "to weave"). Because of this, we usually interpret the formatting of a written piece along with the text to give meaning. Formatting includes fonts, sizes, bold and cursive letters, etc. These characteristics are part of the text as a textile, they work for our human interpretation of a text. 

As English-speaking humans, we recognize here a word ("text") with an exclamation mark. The computer does not recognize a word, it looks at the string for code units.

If we don't want to get our computer lost in translation when communicating with it, we need to contrast *word processors* and *text editors* and the kind of text these tools produce. In other words, we need a basic understanding of what happens on the computer side.

## Word processors

Word processors are programs to write and edit a document, such as Microsoft Word or Google Docs. When we use these programs, we input text (in the computer sense) and the processor encodes our desired changes into the text appearance. For example, when choosing a new typography, we immediately see the change on our end. What we don't see is that the program has a hidden code to do the formatting. 

![The image is a screenshot of Microsoft Word. We see what is written in the document. The title is "What do we mean by "text editor"?" The body of the text says: "While these words on this assumed "blank" document will hopefully print the way they look to you on your screen (with margins and fonts as you design them), this text is far from plain. In fact, Microsoft Word is a processor (emphasis on processor) with many hidden codes to help you with your desktop publishing. While these features enable many visual effects, the hidden codes become obstacles when you attempt to automate processing with the computer.](/images/command-line/worddoc.png "Word Doc")

To put it in another way, what looks like "just words!" in a word processor to us as humans is being encoded for the computer to execute changes. For example, the words of the Microsoft Word document reproduced above are comprised of an archive of extensible markup language (XML). XML works as instructions that only Microsoft Word can read. If we ask the command line to read that same Word .docx file, the result would be a mixture of symbols as we show below:

![This screenshot of the Command Line trying to read a .docx file shows a very long string of symbols, letters from different alphabets, and even characters that our fonts can not recognize (which show up as question marks). Here we reproduce only a very small part of the long result to give you a bit of the taste of the nonsense it is for humans: P K exclamation mark control character question mark l Z square bracket Content_Types square bracket .xml question mark question mark question mark question mark n question mark 0E](/images/command-line/CatWordDoc.png "Word Doc as visualized by Command Line")

The computer tried to read with the encoding, but only Microsoft Word could read those instructions. The styled text produced by word processors is known as *rich text*.

Rich text is text -in the computer sense- with rich encoding. The implementation of that encoding can be proprietary, as it is in the case of Microsoft Word, or can be open source, such as in Libre Office. In short, rich text carries complex formatting information that would cause our computer to get lost in translation! 

## Text editors

We need *plain text* to communicate with our computer. Plain text is the text without hidden formatting. It has the advantage of being manipulable in different editors, readable within the command line, and used for programming languages. 

Following [Unicode](https://www.unicode.org/versions/Unicode13.0.0/UnicodeStandard-13.0.pdf) (version 13.0), which is the international standard for displaying letters and symbols in a computer, "Plain text is a pure sequence of character codes" (p.18); "is the underlying content stream to which formatting can be applied. [It is] public, standardized, and universally readable" (p.19). We could say that plain text shows its cards to the computer. 

To produce plain text we need *text editors*. Text editors are programs for editing plain text files. Some of the types of files that include plain text are  .txt, .csv, or .md. Because we need plain text to interact with the computer, text editors are an important tool for programming and working in the command line. 

Text editors are not used to edit rich text documents because of the encoding. In the same line, word processors should not be used to edit plain text files because we would add encoding that would prevent programs from running and configuration files from being read correctly.

While it doesn't matter which text editor you choose, you should try to become comfortable with at least one. Ultimately, choosing a text editor has as much to do with personality as it does with functionality!

## Review
### Evaluation

What is the command line? (Select one)

<Quiz>
- A program to edit plain text.
- A text-based interface to communicate with the computer.*
- A Graphical User Interface.
- A programming language.
</Quiz>

What is the difference between a plain text document and a rich text document? (Select all that apply)

<Quiz>
- Plain text contains no formatting, only line breaks and spacing.*
- Plain text cannot be marked up.*
- Rich text is styled text, _i.e.,_ plain text completed by information such as font size, format, and colors.*
- One can't determine whether there is a difference between the two without looking at their content.
</Quiz>

### Reflection
As the command line is a way to interact with a computer, think of how you interact with computers in your everyday life. For example, consider the number of hours you interact with computers per day, the reasons or goals for interacting with them, and the number of computers you might interact with within a day.
Now, think of factors that can affect how people interact with computers and the consequences. Consider how gender, disability, or other socioeconomic factors you might want to consider can affect the interaction. For example, some studies demonstrate there is a gender digital divide in the reasons to interact with computers. 

<Keywords>
- Character
 An individual symbol that is represented by bytes to the computer.

- Command line (CLI)
An interface to communicate with our computers via text.

- Graphical User Interface (GUI, pronounced "gooey")
A graphical interface that allows the user to interact with the computer by selecting icons or text boxes via keyboard, mouse, touchscreen or other stimulus.

-Operating system
Software that manages the hardware and programs of your computer. Windows, MacOS, and Linux are examples of operative systems.

-Text
"A string of characters. 

-Plain text
Text without any encoding, which means without formatting the text in terms of fonts, colors, etc.

-Rich text 
Text that contains encoding, proprietary or open, for formatting the text.

-Text editor
A program used for creating plain text.

-Word processor
A program used to create rich text.
</Keywords>

# Hands-on!

Now we start to interact with the computer via the command line! Every command we learn in the next pages will require you to practice it. 

For the purposes of this workshop, we included an emulator of the command line on DHRIFT. It is a program that allows us to recreate the terminal (program where you use the command line) in this very tab of your browser without having to open the terminal on your computer. The emulator contains all the necessary files for the exercises. 

We are demonstrating the function and language of the command line in this emulator because it ensures that anyone taking the workshop has the same conditions to follow. Using this emulator is a pedagogical decision that comes from previous experiences teaching this workshop with users working on different Operative Systems (e.g. macOS and Windows) at the same time, where the passing of the workshop would be affected for differences in the systems. At the end of the workshop, we include a section that will allow you to transfer the knowledge to your own computer. 

To access the emulator, check the top-right side of the screen (or the top if you are using a small device). There is a rectangle with the text "Open Code Editor". When you click on it, the emulator will be displayed as part of the same windows where you are reading this text in your navigator. 

Once it is open, you can resize it by clicking on the left border of the rectangle and dragging it to the desired size. (Your mouse pointer should change into the resize icon, a horizontal two-sided arrow).

You can hide the emulator to continue reading through the workshop. For this, click on the "Close Code Editor" button, which will appear on the top. You can close it and reopen it every time you need; the information you have entered will continue to be there!

Additionally, we want to share these tips to get ready:
 
**1. Go slow at first and check your spelling.** One of the biggest things you can do to make sure your code runs correctly and you can use the command line successfully is to make sure you check your spelling! Keep this in mind! If at first, something doesn't work, check your spelling! Unlike in human reading, where letters operate simultaneously as atomistic symbols and as complex contingencies, in coding, each character has a discrete function including (especially!) spaces. We invite you to read [From A to Screen](https://genius.com/Johanna-drucker-from-a-to-screen-annotated) by Johanna Drucker. 

**2. Pay attention to detail.** Keep in mind that the command line and file systems are usually pre-configured as cAsE-pReSeRvInG—so capitalizations also matter when typing commands and file and folder names.

**3. Don't cheese the game.** While copying and pasting from this handy tutorial may be tempting to avoid spelling errors and other things, we encourage you not to! Typing out each command will help you remember them and how they work.

Now, you are ready to get started!

## Navigating the command line

**Command prompt $**

```console
$ 
```

We will refer to '$' as the 'command prompt.' It is the place where you type commands for the computer to execute. We will now learn some of the most common commands.

When you see the '$', you're in the right place. In the following lessons, we will refer to the command prompt using a '$'. 

However in different Operative Systems, the sign varies somewhat, and sometimes the sign is a '%' or a '#'. In all cases, we call it a command prompt. It lets us know the computer is ready to receive a command.

## Getting started 

There is a basic pattern of use in the command line: type a command, press enter on your keyboard, and receive output. 

Let's try our first command! 

**Know thyself**

Type the following command and press enter on your keyboard:

```console
$ whoami
```

The `whoami` command should print out your username. On DHRIFT the response should be 

```console
user
```

If you notice, the command `whoami` stands for 'who am i?.' While this command might sound a bit silly, it is a very useful command. 

For example, we might have multiple users for a digital project. Sometimes we might need to change from one user to another as not all users have the same permissions for making specific changes. Therefore, we might want to check what user we are at a given moment to know if the command will be successful or change into the right user for the command.

Now that we know 'thyself', our next step should be to understand where we are. 

<Info>
**Transfering `whoami` to your computer**
Computers have the option of including multiple users. The output to `whoami` will be the individual username. Thus, it changes not only from one computer to another, but also from user to user.
</Info>


# The file system 
### Information structure on the computer 

To work with the command line it is important to understand that, in computers, information is organized hierarchically. The method of organization and data structure is called the *file system*. 

![Diagram of the filesystem. The top level has a folder called users with a line indicating that it has other folders over it. If we one level down there are there users, each of them with a folder. The users are user-name, someonelse and me-too. User-name has documents, applications, and desktop, and inside of documents has two other folders. The user someonelse has documents, applications, and desktop; additional this user has a folder called whatever that contains two folders. One of those folders contains another folder. The user called me-too has documents, applications, and desktops, and has one folder inside of documents](/images/command-line/Filesystem-diagram.png "Diagram of the filesystem")

The adoption of this method responds to the possibilities new computers and became generalized at the beginning of the 1960s. According to [Microsoft](https://learn.microsoft.com/en-us/windows/win32/stg/the-evolution-of-file-systems): 

>"The advent of computer systems that could run more than one application required a mechanism to ensure that applications did not write over each other's data. Application developers addressed this problem by adopting a single standard for distinguishing disk sectors in use from those that were free by marking them accordingly. In time, these standards coalesced to become a disk operating system, which provided various services to the applications, including a file system for managing persistent storage. With the advent of a file system, applications no longer had to deal directly with the physical storage medium. Instead, they simply told the file system to write blocks of data to the disk and let the file system worry about how to do it. In addition, the file system allowed applications to create data hierarchies through an abstraction known as a directory. A directory could contain not only files but other directories, which in turn could contain their own files and directories, and so on".

As the file system is a way of structured storage, we can think of a library as a metaphor for visiting the inside of a computer. Libraries have very systematic ways of organizing knowledge with a hierarchical system. When we approach a shelf, we can see that books are located by subject and that, even within a subject, there are subtopics, that can be categorized even further. The library contains many books and needs to be able to include new books over time. Additionally, libraries need to organize their books in a way that their many users can easily find the path in the building to access the shelf and retrieve any book they want from the collection. 

![Four videos together. One with a person taking a book from a bookshelf at a library. One video of boxes at an archive. A  person looking at the cards in the card catalog. A person opening a card catalog with their hand](/images/command-line/FileSystem.gif "Libraries and Archives")

The file system is named after a method to store paper documents. It is quite close to the idea of the library, where each book could be taken as a file. In fact, we could move from libraries to archives. Archives also organize knowledge, but they differ by keeping unpublished materials and gray literature. As many of those materials are files, they keep these files in folders. In this case, the organization should also enable us to easily find the path to the documents. 

The metaphor is not about the material means to keep the files, but about keeping a hierarchical global organization to contain information within a space. Computers are very alike libraries and archives in the amount of information they keep. The only difference is the materiality of the documents. 

## Issues of a metaphor

As we mentioned, the file system dates from the 1960s. At that time, only a limited audience had access to computers Those users, mostly researchers and specialists, might have a close relationship with the spaces we mentioned in the metaphor. Additionally, thinking of hardware, when computers were the size of a room, people shared a physical space to store information (in punch cards), just as the library of our metaphor. This picture of two programmers at ENIAC helps us imagine how this shared room required as much organization as possible.

![Two of the women who programmed ENIAC operating it](/images/command-line/Two_women_operating_ENIAC.jpg)

As computers became smaller, anyone -with the purchasing power- could take home.  For many of these new users, the metaphor might have been more distant. However, files and folders were pretty common, and the users could relate to them. So, even if part of the information structure got fuzzy, the metaphor of the objects as a means to keep order was useful as one computer was shared per household or office. Later on, individuals started to have laptops as their personal digital space. And it is no secret that not everyone keeps their room tidy! 

![A smartphone being hold by someone in their hand](/images/command-line/pexels-mohi-syed-50614.jpg)

The metaphor that originated the term file system is not so clear in our lives anymore. This can challenge those teaching and learning about computers, as you can read in the article [File Not Found](https://www.theverge.com/22684730/students-file-folder-directory-structure-education-gen-z). However, as for the command line, understanding the hierarchical structure of the file system continues to be an essential task to be able to interact with the computer and give it commands!

<Info>
Going back to the metaphor, now libraries store digital collections. We can visit them without the physical experience of the shelves and the information organized in the space. We also relate to new information structures in our everyday practices, as  the [Arium: Beyond the Desktop Metaphor](https://kilthub.cmu.edu/articles/thesis/Arium_Beyond_the_Desktop_Metaphor_A_new_way_of_navigating_searching_and_organizing_personal_digital_data/6723005) elaborates. 
</Info>

## Orienting yourself in the command line 

We're going to try another command. This time it will help us to understand where we are on the computer. Write the following command and press enter:
 
```console
$ pwd
```
You should get the output 

```console
/home/user 
```

The command `pwd`, which stands for 'print working directory,' allows you to know the current working directory where you are located. "Print" as a word can be somewhat misleading. This command is easier to grasp when we interpret 'print' as 'display' because the information is printed on our screen,  specifically, on the Terminal.

Note that we are using the word 'directory' interchangeably with 'folder.' They both refer to the same thing, even though the folder is the container and the directory  is how it relates to the hierarchy in the file system. 

Previously we shared a diagram of the file system. You might be familiar with this representation through the GUI of your favorite operative system. For example, we illustrate below with an image of the MacOS file explorer: 

![Screen shot of the icons of folders organized as a tree of the filesystem MacOS](/images/command-line/hierarchical-filesystem-example.png "An example of how a hierarchical filesystem looks")

Upper in the hierarchy, there are directories that we do not see in this representation. There's a top-level or `root` folder on your system. That folder has other folders in it, and those folders have folders in them, and so on. The `root` or highest-level folder contains mostly files for the operating system, and we usually don't have to go there. These folders are called just `/` on macOS and are called `C:` on Windows. 

When you execute `pwd` in your computer, the output will be similar to `/Users/your-username`. It means you're in the `your-username` directory in the `Users` folder inside the `root` directory. This directory is often called the `home`, as our output in the emulator: 

```console
/home/user 
```

Now we know where we are. But what if we want to know what this directory contains? 

## What's in the folder?

To check the content of the folder, try entering:

```console
$ ls
```

In this command, `ls` stands for list. It is a request to print the list of the contents of your current working directory. 

The output is the list of folders and files contained by the directory. Usually, it might include folders such as `Documents`, and `Desktop`, and you may also see some files. In the case of the emulator, you should see `command-line-treasure-hunt` and `data`. 

**Are you wondering what's in `data`?** Let's access the folder with the following command:

```console
$ cd data
```

The `cd` command stands for 'change directory.' (Make sure the 'd' in `data` is not capitalized.) If the command is successful, you won't see any output. This is normal—often, the command line will succeed silently. 

However, there is an important change before the command prompt that indicates it succeeded. When we used `pwd` and the result was `/home/user`, this is what we could see before `$`:

```console
user@:~$
```
After executing `cd data`, we see:

```console
user@:~/data$
```
The left side shows where we are located. However, as the filesystem contains so many directories and we will move across the system, the command `pwd` will always be central for retrieving the *path* to our working directory. Let's verify our location:

```console
$ pwd
/home/user/data
```

Now, use the command `ls` to get a list of what `data` contains. We need to be located inside a specific folder to find what it contains.

All `pwd`, `ls`, and `cd` are very commonly used commands. With them, you can orient yourself and move around.

Another command you might find useful right now is `cd ..` (a `cd` with two periods), which will allow you to move  one directory up in the file system:

```console
$ cd ..
/home/user
```

Because we changed our location within the file system, the information to the left of `$` also changed. 

## Review

### Evaluation
What command do you run to identify the directory where you are currently located?

<Quiz>
- $ `ls`
- $ `pwd`*
- $ `cd`
- $ `whoami`
</Quiz>

<Keywords>
- Directory
Cataloging structure that organizes the folders within the file system hierarchy. 

- File
A unit to store data as bytes on a storage device, such as a hard drive, which can be accessed by a computer.

- File system (or filesystem)
Hierarchical method to organize the information in the computers composed of files and folders. 

-Folder
A storage space that contains files and other folders.
</Keywords>

# Creating files and folders 

So far, we've only performed commands that give us information. Let's use commands that create something new on the computer! 

![Animation of a collage that says hello world and has a vintage computer.](/images/command-line/HelloWorld.gif "Hello World")

## Creating files

We will start with a file.

First, make sure you're in your home directory:

```console
$ pwd
/home/user
```

Once you've made sure, let's try a new command:

```console
$ touch foo.txt
```

The `touch` command is used to create a file without any content. This command can be used when you don't have any data yet to store in it. `Touch` creates a new file if it doesn't exist, but when the file exists, it will only modify the time when it was last accessed. 

In this case, we are creating a .txt, which means it is a new plain text file. It could have been a .csv file, which is a spreadsheet in plain text.

You won't see any output after executing this command. Let's make sure the file is now part of your folder by using the command `ls`

```console
$ ls
```

See any differences? If the command was successful, you should see a file called foo.txt in the home folder. Pretty cool, right?

<Info>
**Why the file is called foo.txt?**
As we mentioned in the ethical considerations of this workshop, the command line is laden with masculine and military metaphors. You could use any name, but *foo* is a common name in Computer Science which possibly comes from the unfortunate abbreviation for "fucked up beyond all repair" from the Second World War. 
</Info>

## Handy Tip 

Let's say you liked that 'foo.txt' file so much you'd like another! Instead of writing, now press the <kbd>up arrow</kbd> on your keyboard. You'll notice this action populates the terminal with the last command you wrote: `touch foo.txt` 

If you keep pressing the <kbd>up arrow</kbd>, you will see all the commands you have written so far. You can navigate the commands with <kbd>up</kbd> and <kbd>down</kbd> arrows. 

The <kbd>up arrow</kbd> is a great shortcut for efficiency. It will save us time typing, especially when writing longer commands.

You can also use your <kbd>left</kbd> and <kbd>right</kbd> arrows to move the insert cursor within the line you are typing. This will allow you to make changes in one command if necessary. 

## Creating folders 

OK, so we're going to create a `projects` folder!
First, double check you are located at `home` using the `pwd` command:

```console
$ pwd
/home/user
```

Great! Use the `mkdir` or "make directory" command to create a folder called `projects`:

```console
$ mkdir projects
```

Access the folder with the command `cd`.

```console
$ cd projects
```

Pay attention to the change before `$`, and double-check that you are in the new folder

```console
$ pwd
/home/user/projects
```

Congratulations! You've got yourself a `projects` folder! 

In this case `projects` is the name of the folder, but it could be called any name we wanted. For example, we could have used `$ mkdir bananas` and the directory would be `bananas`.

<Info>
    
When you work on your computer and create folders, they will be visible on your GUI too. Paying attention to the path will help you find them easily later when you interact with your computer out of the command line.

</Info>

## Moving a file

Now that you have a `projects` folder, let's move foo.txt to this folder. 

You need to be located in the same folder that contains the file to be able to move it. This is why it is important to know the path to the file. In our case, we created foo.txt in `/home/user/`. 

Use `pwd` to make sure you are in the right folder.

```console
$ pwd
/home/user
```

If needed, use the commands we have learned so far to navigate to the right directory. In bigger projects, you might also use `ls` if you want to double-check that you are in the folder that contains the file.

Once you are there, type the `mv` command followed by the name of the file that you want to move. After this, include the path to the folder where you want to move the file to:

```console
$ mv foo.txt /home/user/projects
```

To check the result, use `cd` to access `/projects`. Then use `ls` to check that the file is there. 

## Review

### Challenge

- Check the directory you are in. 
- Create a subfolder 
- Now go to that folder and create a file! 

Do you want to check the solution?

<Secret>
1. Type `pwd` to see where you are located. If you are not in the projects folder we just created, navigate to that folder using the commands `cd` and `cd ...` that we learned before
2. Type `mkdir` name-of-your-subfolder to create a subfolder.
3. Type `cd name-of-your-folder` to navigate to that folder.
4. Type `name-of-your-file.txt` to create a new text file.
5. Type `ls` to check whether you created the file correctly.
</Secret>

### Evaluation

What does the <kbd>up arrow</kbd> do?

<Quiz>
- It quits the terminal.
- It undoes my last command.
- It inserts my last command.*
- It shows me what folder I am working in.
</Quiz>

### Reflection

*How do you organize your digital information?*. Think of the digital information you produce and store: 
Where do you keep it? 
Do you follow a specific system to organize it? 
Is it possible for you to draw a diagram representing it? 
Now, keep in mind your responses to these questions and relate them to the information from the workshop: what practices could help you improve in managing your digital information?

<Keywords>
- Home
User's directory in a multi-user computer. 

- Path
A string of characters that represents the location of a file or folder within a directory.

- Root
Highest directory in the hierarchy of the file system, e.g. "C:/" on Windows and "Macintosh HD" on Mac
</Keywords>

## Creating a cheat sheet 

We will create a text file to keep all the commands we learned in this workshop. But first, let's make sure we save it in the `projects` folder by checking our current working directory:

```console
$ pwd
/home/user/projects
```

It might seem repetitive or basic to check our location once again. However, when you are working on a bigger project, documenting the location of files is important, as we need to know the path to access them. Think again of the metaphor of the library: to find a book, you need to know how to get to the right shelf. 

<Info>
A useful command when you have to navigate from one path to another is 

```console
$ cd ~
```

The sign `~` is called *tilde*. The command `cd ~` gets you to your user folder, `home`. Once you are there, it will be easier to get to a new location. 
</Info>

### Now that we are ready, let's create the cheat sheet!

For this project, we will use `echo`. `Echo` is a command to print plain text. Write
 
```console
$ echo "Hello world from the command line"
```

The output will be a line of text on the command line:

```console
Hello world from the command line
```

This is how the CLI prints the text. How can we ask the computer to print this same text on a file instead of printing it in the terminal? 

We use the redirect symbol `>` (a greater-than symbol): 

```console
$ echo "This is my cheat sheet"  > cheat-sheet.txt
```
In this case, the computer will create a new file while including the content. Now, for our learning objective, let's check the file is there with the command 

```console
$ ls 
```

The output should include the file cheat-sheet.txt as part of the list. 

### Opening the file

We also want to make sure that our phrase "This is my cheat sheet" is in the file! Write: 

```console
$ cat cheat-sheet.txt 
```

The command `cat` is used to request your computer to print the file. It stands for 'concatenate,' because it links strings of characters or files together from end to end. 

The output should be the content of the file. In this case:

```console
This is my cheat sheet.
```

## Adding more content

As we have been learning commands, we need to add more information in our cheat sheet.

**Be aware!** To write in the file we used the `>` command. Redirect takes the output and overwrites the file. It means that, if we use `>` again on the same file -trying to add new content- it would erase our previous `This is my cheat sheet` by overwriting it. We knew that we were creating a new file so it was no problem.

With a pedagogical intention, let's overwrite the text by using `>` again. 

```console
$ echo "Yup, I know I am overwriting my cheat sheet!"  > cheat-sheet.txt 
```

Check the file: 

```console
$ cat cheat-sheet.txt 
```

The output is different now! 

### Editing the text
**How could we edit the text of our cheat sheet?** 

Try 

```console
$ nano cheat-sheet.txt 
```
`Nano` is a basic text editor. Once you are in `nano`, navigate the text with the keyboard arrows. Then, erase the phrase we used to demonstrate the overwrite and write instead:

```console
pwd     prints the working directory
ls	    lists the content of a folder
cd	    changes directory
cd ..	goes up one directory 
cd ~	goes to the home directory 
touch   creates a new file
mv 	    move file
mkdir   creates a new folder 
echo    prints plain text 
>     	uses the output of a command as input for a file
```

`Nano` includes a menu at the bottom. You select options with the keyboard. When you are done editing, press <kbd>control + X</kbd> to exit the text editor. Respond <kbd>Y</kbd> to save changes and press enter to execute it. You will go back to the command prompt.

Now we can check our file: 

```console
$ cat cheat-sheet.txt 
```

<Info>
**Bonus:** There is another way to add new text from the command line without overwriting. It is using append `>>`. This symbol uses two greater-than symbols together, but for the computer field, it is called *append*. In this workshop, we prefer `nano` for its efficiency in editing the text of our cheat sheet. Append has its own uses for specific purposes, such as adding new entries to a data file. 
</Info>

## Organizing your cheat sheet

To organize the content of the cheat sheet, try

```console
$ cat cheat-sheet.txt | sort
```

As output, you should see the contents of the cheat sheet file with each line rearranged in alphabetical order. Let's say you want to save this output in a new file named MySortedCheatSheet.txt. You could use a `>` command to print it to the new file, like this:

```console
$ cat cheat-sheet.txt | sort > MySortedCheatSheet.txt
```

To verify that the file was created use the command `ls`. You should see the new file listed in the output.

### Pipe `|`
**What did we just do?**

We used `|` as part of our last two commands. This symbol is called *pipe*. Pipes tell your computer to take the output of one command and use it as the input of the next one. They allow us to combine multiple commands on a single line without any extra steps.

This diagram illustrates the process the computer will do when we use a pipe.

![The image shows three commands connected with pipes and describes the flux in which the computer will complete one command, go to the next command, and then go to the third command. Then, it has an arrow coming from the last part of the process indicating that only after completing all the commands we will have an output](/images/command-line/Pipe-diagram.png "Pipes diagram")

Now we will describe how the diagram relates to our recent commands: 

To sort the document: 
- **Command 1** `$ cat cheat-sheet.txt`
- **Command 2**  `Sort`

The pipe allows us to put the printing of the file into the request to sort it as a single command, which generates one single output. 

To create the new file with the sorted information: 
- **Command 1**  `$ cat cheat-sheet.txt`
- **Command 2**  `sort > MyCheatSheet.txt`

In this case, `|` has the same function but we added the command to redirect that output to a new file as part of the second command.


## On naming files and folders

Just as organizing the information is important, the names of the files make a difference when we are working on the command line. 

Your cheat sheet is titled cheat-sheet.txt instead of cheat sheet.txt for a reason. Can you guess why?

### Experiment
**Check your response**  

Access the folder `project` (check where you are first!) and create a new subfolder: 

```console
$ mkdir test
```
We will use `test` for this specific project. Go to that directory 

```console
$ cd test
```

Now try creating a new file with the name *cheat sheet.txt*  

```console
$ touch "This is my cheat sheet" 
```
And include the same text that we included before

```console
$ echo "This is my cheat sheet"  > cheat sheet.txt
```

What was the output?

### Understanding what happened**

Print the list of files contained in the folder to observe the problem.

```console
$ ls
```

Were you close in your first guess?

<Secret>
The output of printing the list of files in `test` will be
    
```console
cheat  sheet.txt
```

It means that we created two files instead of a single one. The first of them `cheat` has no extension. The second one is a .txt file.
</Secret>


### Practices for better interaction with the computer

Our graphical user interfaces allow us to save files with spaces between words in the name (e.g. 'interesting name.docx'), and we usually don't think about the consequences of those naming practices. Imagine instead of 'cheat sheet.txt' you were attempting to open in the command line a very important file for a project such as '*final data.csv*' using the CLI! 

For best digital practices, we recommend:
- Make sure that file names do *not* contain spaces.
- Use creative capitalization (InterestingName.docx), dashes (interesting_name.docx), or underscores (interesting_name.docx) instead. Keep in mind that the command line is case-preserving, which means that capitalization matters when you type commands.
- Avoid using periods in your file and folder names, as they sometimes can prompt you to confuse them with file extensions (e.g., the full name of a PDF file is usually file.pdf) or system files (which contain core functions for your operative system). 

## Review
### Evaluation

What effect does the following command produce? (select one)

```console
$ echo "Hello! My Name is Mark!" > introduction.txt
```

<Quiz>
- It adds the line "Hello! My Name is Mark!" to the existing content of the `introduction.txt` file.
- It checks whether the content of the `introduction.txt` file contains the line "Hello! My Name is Mark!"
- It replaces the content of the `introduction.txt` file with the line "Hello! My Name is Mark!"*
- None of the above.
</Quiz>

## Interlude

These two command lines are a treasure to make your work at the CLI easier and more efficient.

### Clearing the terminal

After running all the commands we have learned so far, the terminal might be quite full of text. For our next section, it might be nice to `clear` the terminal and have a fresh start. Use the command `clear`: 

```console
$ clear
```

The output should be the terminal clear! 

### <kbd>Tab</kbd> for completion

When you are navigating in the command line, typing folder and file names can feel against the promise of easier communication with your computer. Here comes *<kbd>tab</kbd> completion*, stage right!

When you need to type out a file or folder name (e.g. cheat-sheet.txt) in the command line and want to move quickly, you can just type out the first characters of that file name up until it's distinct in that folder. At that point, click the <kbd>tab</kbd> key and voilà! This action will complete the rest of the name for you. 

Note that it only works if that file or folder already exists within your working directory. In other words, anytime in the command line, you can type the part of the file or folder name that is unique within that directory, and <kbd>tab</kbd> complete the rest! 

The same happens with almost all commands: they will only be executable if you are in the right location of the filesystem where the files are located. If not, the command will not be successful.

# Working with text data

The command line can be a very powerful tool to analyze text data, especially when we use it for a large amount of text, one that would be too large to work with by hand. In this section, we will analyze a large text data set. 

The data we will be using is already on the DHRIFT emulator. The path to find it is 

```console
/home/user/data 
```

Check where you are located using `pwd`. Use the necessary commands to access that path.

Now that you are there, use `ls` to find what our data set is. You should see a file named nypl_items.csv

Our data set is a list of public domain items from the New York Public Library in .csv format, which is a plain text spreadsheet. The extension *.csv* stands for 'comma-separated values' because each field in the spreadsheet is separated by a comma. It's all still plain text, though, so we can manipulate the data using the command line.

## Exploring the text file

We said it is a large data set. Let's make some simple tests to observe the length. 

First, try using the `cat` command to look at the data. 

```console
$ cat nypl_items.csv 
```

What do you think of this outcome in comparison to our earlier practice with the `cat` command? You might find the text being printed out goes by too fast to get any sense of the content!  

### Characteristics of our dataset
**How long is that file anyway?**

```console
$ cat nypl_items.csv | wc -w
```

With larger amounts of data, it might take some seconds to run each command before printing the single output we are requesting. If the output is taking too long, you can click <kbd>control + C</kbd> on your keyboard to cancel it.

What is the output?

<Secret>
The total of words in the file should be 2,298,575.
</Secret>

### The symbol `-`
**What did we do here?**

We had two commands combined as one single line with a pipe. The first command, `cat`, is to display the text of nypl_items.csv. The second command is `wc -w`. It asks the computer to print the number of words. `wc` stands for 'word count'. The symbol `-` is a new element for us. It marks that the immediate element that follows it is a *flag*. 

Flags indicate options that belong to specific commands. For example, in the command `wc` we have various options. We used `-w` to select the `number of words`, but it could also be `wc -l` to show the number of lines or `wc -m` to count the number of characters. You can try these by making changes in our last command. Remember that you can use the arrows to make the task easier.

## Viewing Data in the command line

We saw that the `cat` command was not very useful for this large data set. Instead, let's use another tool: the `less` command. It allows us to get data one page at a time.

```console
$ less nypl_items.csv
```

`less` gives you a paginated view of the data; it will show you the contents of a file or the output from a command or string of commands, page by page. To view the file contents page by page, you may use the following keyboard shortcuts: 

- Press the <kbd>f</kbd> key to view forward one page
- Press the <kbd>b</kbd> key to view back one page.
- Press the key <kbd>q</kbd> to exit this view.

'less' waits for user input, this is why you need to exit the view to see the command prompt again.

Let's try two more commands for viewing the contents of a file. The first is `head`:

```console
$ head nypl_items.csv
```

The output should be the very first section of the file, which is called *head*. By contrast, the next command, `tail`, prints out the very last part of the file, which is called *tail*:

```console
$ tail nypl_items.csv
```
## Cleaning the data

We didn't tell you this before, but there are duplicate lines in our data! Three, to be exact. Before removing them, let's see how many entries are in our .csv file 

```console
$ cat nypl_items.csv | wc -l
100004
```

This tells us there are 100,004 lines in our file. 

To find and remove duplicate lines, we can use the `uniq` command combined via `|` with other commands we used before. Let's try it out:

```console
$ cat nypl_items.csv | uniq | wc -l
100001
```

The count went down by three because the `uniq` command removed the duplicate lines. But which lines were duplicated?

```console
$ cat nypl_items.csv | uniq -d
```

In this line, we are combining two commands:
- The first one is to print out the data.
- The second one is the `uniq` command with the `-d` flag, which is the option to print out the lines that have duplicates.

## Review

### Challenge

Use the commands you've learned so far to create a new version of the nypl_items.csv file with the duplicated lines removed. Hint: we created a new version of our cheat sheet after sorting it alphabetically. 

<Secret>
```console
$ cat nypl_items.csv | uniq > clean_nypl_items.csv
```

This will allow you to create a new version of the nypl_items.csv file with the duplicated lines removed. You can decide on any name you prefer for your file!
</Secret>

### Evaluation

What do command line flags allow you to do? (select one)

<Quiz>
- Flags allow you to mark the file you are working on.
- Flags are useful to create a new version of the file you are working on while preserving the old version for future access.
- Flags are a common way to specify options for the command line programs.* 
</Quiz>

## Search the data 

So we've cleaned our data set, but how do we find entries that use a particular term? 

Let's find all the entries in our data set that use the term "Paris."

Here we can use the `grep` command, which stands for *global regular expression print.* The `grep` command processes text line by line and prints any lines that match a specified pattern. 

On the command line write:

```console
$ cat nypl_items.csv | grep -i "paris"
```

This will print out all the lines that contain the word "Paris." The `-i` flag makes the command ignore capitalization. 

Now we can use our `wc -l` command to see how many lines there are:

```console
$ cat nypl_items.csv | grep -i "paris" | wc -l
191
```

In this last command, we have used the `cat` command to read nypl_items.csv. We take the output, and pipe it into the `grep -i` command, which will ignore capitalization and find all instances of the word 'paris'. Then we take the output of that `grep` command and pipe it into the word count, `wc`, command with the `-l` lines option. The pipeline returns 191 letting us know that "Paris" (or "paris") occurs on 191 lines of our data set.

### Regular expressions

In this command, we used `grep` and said that it stands for regular expressions. Regular expressions are special strings representing a pattern to be matched in a search operation. `grep` gives us access to the power of regular expressions as we search for text. Regular expressions (or regex) provide methods to search for text in more advanced ways, including specific wildcards, matching ranges of characters such as letters and numbers, and detecting features such as the beginning and end of lines. Regular expressions are commonly used in different programming languages.

## Review

### Challenge

Use the `grep` command to explore our .csv file a bit. What areas are best covered by the data set? 

If you want to get a little more mileage out of the `grep` command, refer to [this tutorial on grep and regular expressions](https://www.digitalocean.com/community/tutorials/using-grep-regular-expressions-to-search-for-text-patterns-in-linux). If you want to experiment with regular expressions in an easy-to-use environment, numerous regex test interfaces are available from [a simple google search](https://www.google.com/search?w&q=regex+tester), such as [RegExr](https://regexr.com/), which includes a handy cheat sheet.

### Evaluation

What do `|` allow you to do? (select all that apply)

<Quiz>
- Pipes let you take the output of one command and use it as the input for another.*
- Pipes allow you to combine multiple commands in a single line.*
- Pipes let you work on multiple files at the same time.
</Quiz>

Let's think about the `grep` command. Select all that pertain to the command.

<Quiz>
- It searches the given file for lines containing a match to the given strings or words.*
- It can be combined with other commands, so as to produce a search that matches their output.*
- It produces a new file with the lines containing the strings or words you are searching.
- It delete the strings or words you are searching from a file.
</Quiz>

### Adding to the cheat sheet
Go to your projects folder and open your cheat-sheet.txt file using the `nano` command to add the new commands learned in the workshop: 

```console
wc 	  	    word count 
sort        organizes the content of the file in alphabetically by line
mv          moves files 
less        gets a paginated view of the data. To navigate: "f" for forward, b for back, q for quit 
head       	shows only the first part of the file
tail        shows only the last part of the file
uniq        prints repeat lines only once
grep       	stands for "global regular expression print' 
wc -w      	asks to print the number of words
sort -f     makes sort non case sensitive
ls -l	  	shows the long list (the details of the content)
wc -l    	shows the number of lines
wc -m       counts the number of characters 
head -n     shows a specific number of lines of the head
tail -n		shows a specific number of lines of the head
```

<Info>
**Bonus:** We included the `flag -n` in the commands for your cheat sheet. It works as an option for head and tail, to show only a specific number of lines. You can select the number of lines you want to see by replacing the number symbol for the specific number of lines you want. Try it with our dataset:

```console
head -n 1 nypl_items.csv 
```

```console
tail -n 3 nypl_items.csv
```
</Info>

# Summary 

You've made it through this introduction to the command line! By now, you have experienced some of the power of communicating with your computer using text commands. Now is the time to do a quick review! 

The command line interface is a way to interact with our computer that dates from the 1950s. In the present, it continues to be an important means for interacting with computers because it is more efficient and faster than other system interactions. 

We explored the difference between word processors and text editors and their relationship with rich text and plain text respectively. For CLI, we need plain text because rich text includes hidden code that cannot be read by the terminal.

Via our emulator, we interacted with the computer on a terminal and practiced commands for

1. Navigating the file structure in a computer (`pwd`, `ls`, `cd`, `cd ..`, `cd~`).
2. Creating new files and directories (`touch`, `echo`, `mkdir`).
3. Moving content ( `>`, `|`) and files (`v`) to new locations within the file structure.
4. Searching within text files (`cat`, `nano`)
5. Doing a basic exploration of a text dataset (`grep`, `less`, `head`, `tail`, `uniq`, `|`, `-`)

We documented the commands on a cheat sheet that can be used for reference! Additionally, we learn important tips to navigate the file system and to make our experience with the command line smoother and more efficient.

The basic steps you learned today will help as you'll further your digital skills. For example, you might work with the command line interface to set up your version control with git, or you'll have your text editor open while writing Python scripts or building basic websites with HTML and CSS. Having a grasp of command line basics will not only make you more familiar with how your computer and basic programming work, but it will also give you access to tools and communities that will expand your research.

On the next page, we make a general review. Then, we will explain how you can transfer this knowledge to your computer. We also share resources for independent learning. 

## Review
### From the lessons of the workshop!

What does the <kbd>up</kbd> arrow command do? (Select one of the following)
   
<Quiz>
- It inserts my last command.*
- It quits the Terminal/GitBash.
- It undoes my last command.
- It shows me what folder I am working in.
</Quiz>

What do command line flags allow you to do? (Select one of the following)

<Quiz>
- Flags are a common way to specify options for command line programs.*
- Flags allow you to earmark the file you are working on.
- Flags are useful to create a new version of the file you are working on while preserving the old version for future access.
</Quiz>

What effect does the following command produce?

```console
$ echo "Hello! My Name is Mark!" > introduction.txt
```

(Select one of the following)

<Quiz>
- It replaces the content of the introduction.txt file with the line "Hello! My Name is Mark!"*
- It adds the line "Hello! My Name is Mark!" to the existing content of the introduction.txt file.
- It checks whether the content of the introduction.txt file contains the line "Hello! My Name is Mark!"
- None of the above.
</Quiz>

What do `|` allow you to do? (Select all that apply)

<Quiz>
- Pipes let you take the output of one command and use it as the input for another.*
- Pipes allow you to combine multiple commands in a single line.*
- Pipes let you work on multiple files at the same time.
</Quiz>

What command do you run if you are trying to identify where in the filesystem you are currently located/working? (Select all that apply)
   
<Quiz>
- `$ pwd`*
- `$ ls`
- `$ cd`
- `$ whoami`
</Quiz>

Let's think about the `grep` command. Select all that pertain to the command.
   
<Quiz>
- It searches the given file for lines containing a match to the given strings or words.*
- It can be combined with other commands, so as to produce a search that matches their output.*
- It produces a new file with the lines containing the strings or words you are searching.
- It delete the strings or words you are searching from a file. 
</Quiz>

What is the difference between a plain text document and a rich text document? (Select all that apply)

<Quiz>
- Plain text contains no formatting, only line breaks and spacing.*
- Rich text is styled text, i.e., plain text completed by information such as font size, format, and colors.*
- Plain text cannot be marked up.*
- One can't determine whether there is a difference between the two without looking at their content. 
</Quiz>

**Reflection**

Thinking of the experience with the CLI in this workshop, what are some operations that the command line allowed you to perform that you cannot perform with the GIU? What new information have you learned about your relationship with your machine in this workshop?

## Game 
**Treasure hunting!** 

Now that you have learned how to interact in the command line, we will go on a treasure hunt.

To start the hunt
1. Access the folder `command-line-treasure-hunt`
2. Once there, ask the computer to print the instructions from README.md

Right now you should be able to read those instructions! Pay attention to them and remember to take your time to check spelling and case sensitivity so that your commands work well! 

Good luck! 

![Image that looks like a vintage videogame and has a cat saying you can do it next to a treasure.](/images/command-line/TreasureHunting.gif "Treasure Hunting")

# Transferring knowledge
### How to use find the terminal in your computer

Now that you understand the CLI, you can apply this knowledge to your computer. In this section, we help you get to the command line depending on your Operating System. We will talk about MacOS, Windows, and Linux. As you will see, companies such as Apple and Windows have proprietary software, the case can be too for the terminal.

## MacOS Users

If you're using macOS:

1. Click the Spotlight Search button (the magnifying glass) in the top right of your desktop.
2. Type "terminal" into the bar that appears.
3. Select the first item that appears in the list.
4. When the Terminal pops up, you will likely see either a window with black text over a white background or colored text over a black background.

You can change the color of your Terminal or BashShell background and text by selecting Shell from the top menu bar, and then selecting a theme from the menu under New Window.

## Windows Users

### Alternative 1: Git Bash (recommended)

To use all the commands just as we used them in this workshop, we recommend using Git Bash. If you haven't installed it yet, you can follow [these instructions](https://github.com/DHRI-Curriculum/install/blob/v2.0/guides/git.md). 

The reason to use Git Bash as the command line on Windows is that it allows you to run the same commands as you would on a computer running macOS or Linux. Git Bash includes core utilities available on Linux that are not available on Windows.
- Look for Git Bash in your programs menu and open it.
- If you can't find the git folder, just type git bash in the search box and select git bash when it appears.
- Open the program.
- When the terminal pops up, you will likely see either a window with black text over a white background or colored text over a black background. You know you're in the right place when you see the `$`.

Note that the sign for you being in the right place might also be a `%` or a `#` depending on your operating system.

Bonus points: if you want to get the groove of just typing instead of pointing and clicking, you can press windows to open the Start menu, start typing git bash, and then hit enter to open a git bash window. This will pull up a command window without touching your mousepad.

### Alternative 2: Power Shell

With this terminal, you will apply many of the commands we have learned today, but not all of them. Here you can find the [Windows documentation to use Power Shell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.4). To access this terminal you have two options:

1. Go to the Start menu. Type PowerShell. Click on the Windows Power Shell to open it.
2.  Go to the Start menu. Click Start. Then click on All Programs. Go to Accessories. There, click the Windows PowerShell folder. There you will see Windows PowerShell. Click on it to open it.


 ### Alternative 3: Command 
 
Windows also has a proprietary version of the command line. For this reason, some of the commands differ from those we studied in this workshop. Use [this Windows documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) to find the commands if you want to use this version. 

To use it:

1. Open the start menu or press the Windows key at the same time that the letter R. 
2. Type "cmd" and you will run the command box. 
3. Press enter 


## Linux Users

If you are a Linux user, you can learn about the command line in [this Ubuntu tutorial](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview). You have two options to get to the terminal:

1. Go to the applications menu. There will be a terminal icon. Click to launch it.
2. Use the Search button (the magnifying glass) a, write "terminal", "command", "prompt" or "shell". Launch the terminal. 


# Resources to continue learning

- Are you wondering how (else) the command line can be deployed for your scholarship? [Dennis Tenen and Grant Wythoff's "Sustainable Authorship in Plain Text using Pandoc and Markdown"](https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown) have some answers for you.
- [Stephen Ramsay](https://www.unl.edu/english/stephen-ramsay) is a scholar who has thought at length about the way the command line is (or can be!) embedded in a researcher's praxis. If you're interested in reading his work, here are two of his finest essays: ["Life on the Command Line"](https://files.zotero.net/eyJleHBpcmVzIjoxNTkyNjY1MDk3LCJoYXNoIjoiODFkNDJmZmU1ZjU3YzRmMDE2YTQ1ZmQwY2YzOTUwYmIiLCJjb250ZW50VHlwZSI6InRleHRcL2h0bWwiLCJjaGFyc2V0IjoidXRmLTgiLCJ6aXAiOjF9/07826342b83ea870f846cfa48f1b0eb8d3d51b78ceb1b05b1e014467d7241904/life-on-the-command-line.html) and ["Programming with Humanists: Reflections on Raising an Army of Hacker-Scholars in the Digital Humanities"](https://www.openbookpublishers.com/htmlreader/DHP/chap09.html)

**Other Tutorials**
- [*Data Science at the Command Line*](https://www.datascienceatthecommandline.com/) is an open-access e-book by Jeroen Janssens, a hands-on guide that can help you become a more efficient and productive data scientist through the use of the command line.
- [BashGuide](http://mywiki.wooledge.org/BashGuide) offers some good practice techniques for taking your BASH skills to a higher level by teaching you to write some simple scripts.

**Projects or Challenges to Try**
- [More command line challenges](https://github.com/DHRI-Curriculum/command-line/blob/main/sections/15-challenges.md) devised by the GCDI team are available here.
- When working with digital tools, it's usually a good idea to familiarize yourself with their documentation. Here's the [Bash Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html), where you can find Bash features for beginners and advanced users.
- [Pandoc](https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown) is an online software that allows users to convert file types through the command line (from markdown to PDF, for example).
- [youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html) is a command-line exercise to download videos from YouTube.com. It requires a Python interpreter.
- Feeling super brave? You might want to give [MALLET (MAchine Learning for LanguagE Toolkit)](http://mallet.cs.umass.edu/) a shot! MALLET is "a Java-based package for statistical natural language processing, document classification, clustering, topic modeling, information extraction, and other machine learning applications to text." It includes tools for document classification, sequence tagging, topic modeling, and numerical optimization.
