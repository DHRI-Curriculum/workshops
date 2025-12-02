---
title: 'Introduction to HTML and CSS'
cover title: HTML & CSS
description: 'HTML (Hypertext Markup Language) is used to create and organize the content of a website. CSS (Cascading Style Sheets) is used for website design and layout. Together, these languages form the foundation of the World Wide Web. They are the basis of what one needs to know to create useful and well-designed websites, and to read the source code of existing websites and website templates. This workshop walks participants through the fundamentals of HTML and CSS. The purpose of this unit is to help participants understand the rudiments of making websites, with the intention of providing a strong base of knowledge from which to imagine web-based digital humanities projects.'

programming_language: html

learning objectives:
    - Familiarize yourself with the anatomy of a webpage and how the Internet works.
    - Understand the basics of the HTML and CSS markup languages.
    - Use HTML, CSS, and a text editor to build a small locally-hosted website.
    - Draw connections between HTML, CSS, and the workshops on the Command Line and Data Literacies.

authors:
    - 'Ian G. Williams'
    - 'Patrick Smyth'

instructors:
    - 'Ian G. Williams'

editors:
    - 'Ian G. Williams'

# facilitators: 
#     name: 'Ian G. Williams'
#     description: "Ian (he/him) is a doctoral student in the PhD Program in Social Welfare at the CUNY Graduate Center. He researches the intersections of emerging technologies, human services, and organizational systems. A licensed social worker, Ian has a strong foundation in the humanities. He likes to hang out with digital humanists and public interest technologists. Ian's first experiences with HTML date back to creating a website for his band back in the early 2000s."

estimated time:
    - 2-3 hours

prerequisites:
    - Command Line:
        description: (Required) This workshop makes reference to concepts from the Command Line workshop, in particular, in creating new folders and files, as well as moving around in file directories. It includes opportunities to utilize Command Line on your operating system.  Completing the Command Line workshop will make you more comfortable with working with HTML/CSS.
        required: true

    - Visual Studio Code: 
        description: (Strongly recommended) You can use any plain text editor, but for our purposes [Visual Studio Code](https://github.com/DHRI-Curriculum/install/blob/v2.0/guides/visual-studio-code.md) ("VS Code") will be used and the exercise instructions are designed for this. It is recommended that you also enable the [Live Server plugin](https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/), but it is not necessary to follow the exercises.

readings:
    - "[Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) by Tim Berners-Lee. This concept paper, originally published in 1989 and converted to HTML format here, is the proposal that led to HTML. It is a foundational document of the Internet."
    - "[Rediscovering the Small Web](https://neustadt.fr/essays/the-small-web/) by Parimal Satyal argues for the intrinsic value and utility of simple website designs for non-commercial purposes that don't see infinite scale, including websites in pure HTML and CSS that reflect an aesthetic of the early Internet. The essay helps contextualize the development of web design and surveillance capitalism, arguing that 'small' websites can be maintained through pure HTML and CSS as forms of digital art."
    - "[Digital History: A Guide To Gathering, Preserving, and Presenting the Past on the Web](http://chnm.gmu.edu/digitalhistory/) by Daniel J. Cohen and Roy Rosenzweig provides clear introduction to what a life-cycle of web-based digital humanities project might look like. The book covers a variety of aspects of a website project from initial planning, to website design, and even cultivating an audience. Participants are welcome to read as much of this free online book as suits them. I highly recommend reading the [Introduction](http://chnm.gmu.edu/digitalhistory/introduction/) which helpfully explains the affordances and difficulties of web-based digital projects."
    - "[Taking a Glance at the History of HTML5](https://www.researchgate.net/publication/318259638_Taking_a_Glance_at_the_History_of_HTML5/references) by Raúl Tabarés Gutiérrez contextualizes the historical development and evolution of HTML within the context of the platform economy and Web 2.0. Gutiérrez argues that the arrival of HTML5 signaled a new moment in web standards, with social, political, and economic consequences we will see play out. A revised version of this conference paper can also be accessed through your institional library [here](https://doi.org/10.1016/j.techsoc.2021.101529)."
    - "[Historiographies of Hypertext](https://dl.acm.org/doi/abs/10.1145/3603163.3609038) by Simon Rowberry takes a critical examination of historical narratives about the origins of hypertext, arguing that scholars should pay more attention to user communities and situate hypertext histories in broader, more comparative contexts."

podcasts:
    - "[Command Line Heroes: A Language For The Web](https://www.redhat.com/en/command-line-heroes/season-7/html) A fascinating and accessible discussion on the origins of HTML and some of the technological basis required to make it happen."
    - "[Marketplace Tech: How The History of Blackness On The Internet Was Erased](https://www.marketplace.org/shows/marketplace-tech/how-the-history-of-blackness-on-the-internet-was-erased/) this podcast interview is with Charlton McIlwain, Professor of Media, Culture, and Communications at New York University, on his book [_Black Software: The Internet and Racial Justice, from AfroNet to Black Lives Matter_](https://global.oup.com/academic/product/black-software-9780190863845). The discussion touches upon the invisibility and erasure of Black voices, perspectives, and contributions to the development of the Internet."

projects:
    - description: "HTML and CSS are fundamental to building websites, and to the Internet as we know it today. Almost all web-based projects use HTML and CSS in some aspect of their web design. I have included three different kinds of projects that use HTML and CSS to to bring to notice a diversity of ways of using the internet and websites in digital humanities projects:"
    - "[Colored Conventions](https://coloredconventions.org/): The Colored Conventions project is a community-based archive of nineteenth-century Black political organization. In its early stage, this project crowdsourced much of its data-gathering efforts by building an interface for volunteers to digitally transcribe archival texts. This project uses HTML and CSS in many of its aspects."
    - "[Musical Passage](http://www.musicalpassage.org/): Musical Passage is an exhibit of early African diasporic music. This website reproduces a transcriptions and renditions of songs performed by enslaved African people in the Caribbean in the early eighteenth century. This project uses HTML, CSS, and other languages to provide a multimodal experience for its visitors, who can see a historical document as well as listen to the earliest known record of African diasporic music."
    - "[The Disability History Museum](https://www.disabilitymuseum.org/dhm/index.html) is a virtual museum that 'aims to provide all site visitors, people with and without disabilities, researchers, teachers and students, with a wide array of tools to help deepen their understanding of human variation and difference, and to expand appreciation of how vital to our common life the experiences of people with disabilities have always been.' In addition to its rich resources, the website's HTML code offers useful examples of inclusive design and use of alt text for images."

ethical considerations:
    - Building websites can involve making information public on the internet, which raises a host of intellectual property and legal concerns. It is very important to make sure that you prominently declare which creative commons licenses you are using for your website so that visitors to your website are aware of the ways in which they can use the information that you are providing. Learn more about choosing the appropriate creative commons license on [the Creative Commons website](https://creativecommons.org/choose/). Similarly, if your website uses images, videos, or any kind of document from other sources (like archives, artists, newspapers, etc.) you must be sure to cite these sources and make sure that you have the necessary permissions to reproduce these works.
    - Creating websites also involves making sure that it is designed to be accessible for those with disabilities. If your website displays images, then each image should also contain [alt text](https://accessibility.psu.edu/images/alttext/) metadata that describes the image such that it is usable for screenreaders. Screenreaders make websites accessible for those with visual and/or auditory disabilities. Similarly, if your website involves showcasing audio-based information (like interviews or lectures) then you should provide a transcription of the audio. We will go over basic practices of making websites accessible in this workshop. You can learn more about accessibility standards and guidelines at the [W3C's page on Web Accessibility](https://www.w3.org/standards/webdesign/accessibility). Furthermore, there are also services like the [WAVE tool](https://wave.webaim.org/) that help identify ways of making websites more accessible.
    - Creating websites, and posting them online, builds things that may be simultaneously ephemeral and permanent. A website may break down at a future point and require ongoing maintenance of dependencies, design modification, or other form of care. A website may even disappear over time through future changes to hosting infrastructure or other technological factors. Yet a website may also find itself living on, even after it has been removed deliberately or otherwise, through [search engine indexes](https://www.searchenginejournal.com/search-engines/website-indexing/) and databases such as [The Internet Archive's Wayback Machine](https://archive.org/web/).

resources:
    - "[HTML Cheat Sheet](http://www.simplehtmlguide.com/cheatsheet.php): A cheat sheet with some common HTML commands."
    - "[CSS Cheat Sheet](https://courses.cs.washington.edu/courses/cse154/15sp/cheat-sheets/css-cheat-sheet.pdf): A cheat sheet with some common CSS commands."
    - "[Web Development with Accessibility in Mind](https://www.w3.org/standards/webdesign/accessibility): This guide was created by the W3C, which is the international community that develops Web standards. This guide provides information on ways of making websites more accessible to those with disabilities."
    - "[Library of Congress: Sustainability of Digital Formats: Hypertext Markup Language (HTML) Format Family](https://www.loc.gov/preservation/digital/formats/fdd/fdd000475.shtml): This guide provides an archivist's view on preservation and sustainability concerns regarding HTML."

---

# Getting Started with HTML and CSS

Websites seem like these magical things that appear when we open our web browser (i.e. Chrome, Firefox, Safari). We know that websites are hypertext, meaning that we can click between navigate through information via links, traveling from page to page until we find what we need. Our journey through hypertext is unique to our experience. Information retrieval systems such as encyclopedia indexes and library cataloging systems pre-date digital navigation tools such as links, but follow the same logic. With **hypertext**, we can explore linked information in non-linear paths. What may be less obvious about websites is that, fundamentally **websites are plain text documents**, usually written in HTML or another web-based markup language, such as XML or XHTML.
  
:::info
**Fun fact**: More than 90% of all websites (whose markup language we know) use HTML
[(w3techs.com)](https://w3techs.com/technologies/details/ml-html/all/all).
:::

### Hypertext Markup Language (HTML)

**HTML** is a markup language used to write web-based documents. It enables us to provide web browsers with information about the _content_ of a document. We can, for example, indicate that some part of our document is a paragraph, image, heading, or link. The browser uses this information when displaying the document for users.

### Markup Language vs. Programming Language

HTML is a *markup* language, not a programming language. **Programming languages** are used to transform data, by creating scripts that organize an output of data based on a particular input of data. **A markup language** is used to control the presentation of data.

For a practical example of this difference, we can think about tables, asking what each type of language can and cannot do. A programming language can help you search through a table, understand the kinds of data the table includes, find particular data points, or transform its content into other kinds of data, such as frequencies. A markup language would instead determine the content, layout, and visual presentation of the table. Put simply, a programming table is **dynamic** while a markup table  is **static**.

<!--- TODO: Add images or diagrams of tables --->

Fundamentally, then, a script or program is *a set of instructions given to the computer*. It follows the same logic as explored in the command line workshop. A document in a markup language determines how information is presented to a user.

:::info
**Markup vs Markdown:** [Markdown](https://www.markdownguide.org/) and HTML are both types of markup languages; Markdown is a play on words. [Markup languages](https://instruct.uwo.ca/english/706a/site/site/MLGen.html) help format content.
:::

### Cascading Style Sheets (CSS)

**CSS** is usually used in conjunction with HTML, and was developed by [Håkon Wium Lie](https://www.wiumlie.no/en) in 1994 to add more control over display. Prior to CSS's introduction, websites were often displayed in different styles depending upon the web browser used, the computer's monitor, or other factors external to the code itself.

HTML tells the browser what the different parts of a document _are_. CSS tells the browser what the parts of the document should _look like_. It is essentially a set of rules that are applied when rendering an HTML document. Its name—Cascading Style Sheets—refers to the fact that there is an order of precedence in how the browser applies CSS rules to a document. The __"style sheets"__ refers to print publishing practices of having uniform styles and standards, such as used in American Pscyhological Association, Chicago, and Modern Language Association formatting guidelines. They are __"cascading"__ because more specific rules overwrite less specific rules.

### Where Does the Internet Come In?

Together, **HTML** and **CSS** can be used to write and style a website using a text editor (such as Visual Studio Code) directly from your computer. No internet access needed.

However, internet access is necessary if you plan on making your website available to the public. At the end of this workshop, we will briefly discuss :link[`how to get your website from your local computer onto the internet`]{workshop="html-css" page="49"}.

In our activities during this workshop we will focus on building locally-hosted websites. These are websites that you can open on your web browser, however, they only exist on your own device and are only accessible to you. Locally-hosted websites are not yet on the internet.

## Evaluation

**True or False**: The primary difference between markup languages and programming languages is that markup languages are used to determine the format, appearance, and purpose of content, whereas programming languages are used to transform data.

:::quiz
- True*
- False
:::

### Keywords

Do you remember the glossary terms from this section?

- [CSS](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/css.md)
- [HTML](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/html.md)
- [Markdown](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/markdown.md)
- [Programming Language](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/programminglanguage.md)

# Opening Activity

**_Note_: please use Firefox or Chrome. Safari will not allow you to complete this activity.**

1. Open a web browser, preferably [Firefox](https://www.github.com/DHRI-Curriculum/install/blob/v2.0/guides/firefox.md).

2. Go to any website. The example below is from [paramajmera.github.io](http://paramajmera.github.io/).

![A screenshot of the sample website](/images/html-css/param_capture.png)

3. Open the secondary menu (using a mouse, this would be the menu that opens when you right click on the page; on Mac computers, this is usually a two-finger tap on the track pad, or you can press the <kbd>control</kbd> button then click the track pad).

4. Select `View Page Source` from the dropdown menu.

![Image showing dropdown menu that appears when right clicking on a website in Chrome or Firefox](/images/html-css/index_blank_viewsource.png)

### What You Are Seeing

A second tab should open in your browser displaying the underlying code of the page. This is the code that is used to make and render the page in your web browser.

![Image showing the page source information and underlying HTML code of a webpage](/images/html-css/param_capture_pagesource.png)

In this workshop, we are going to learn how to read and write this code, and render it in the browser on your local computer. At the end we will discuss the next steps for how you could host your new website, making it available for browsing by others via the internet.

# Basic Template for HTML

Below is a basic template for an empty HTML document.

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        ...
    </head>

    <body>
        ...
    </body>

</html>
```

HTML documents start with a `DOCTYPE` declaration that states what version of HTML is being used. This tells the browser how to read the code below it to render the page. If the webpage were written with a different markup language (i.e. XML, XHTML), it would tell you here.  
  
After the `DOCTYPE`, we see the start of the **Root Element**. EVERYTHING—all content—that you want presented on this page and all information about how you want that information to be organized and styled goes in the root element, and it is demarcated by `<html>` and `</html>`.  
  
The root element begins by indicating which language the document is written in; and in this basic template, `en` tells us and the computer that we are writing in English.  
  
Within the root element of the basic template above, you'll notice the two main sections of all HTML documents: a head section (demarcated by `<head>` and `</head>`) and a body section (demarcated by `<body>` and `</body>`).  
  
The **head section** contains basic information about the file such as the title, keywords, authors, a short description, and so on. This is also where you will link to your CSS stylesheet which describes how you want the page styled—colors, fonts, size of text, and positioning of elements on the page.  
  
The **body section** contains the content of the page, including paragraphs, images, links, and more, and indicates how this content is to be structured on the page.

## Activity

:::info
__Tip__:
If you have not already installed Visual Studio Code, you can [follow our installation guide here](https://github.com/DHRI-Curriculum/install/blob/v2.0/guides/visual-studio-code.md). You can also click the following links for corresponding operation system specific installation instructions: [macOS](https://code.visualstudio.com/docs/setup/mac), [Windows](https://code.visualstudio.com/docs/setup/windows), [Linux](https://code.visualstudio.com/docs/setup/linux). You may also want to enable the [Live Server plugin](https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/).
:::

In this activity we aim to complete the following tasks (instructions follow):

1. Create a folder called `projects` (`~/Desktop/projects/htmlpractice`)

2. Create a sub-folder called `htmlpractice` in your projects folder (`~/Desktop/projects/htmlpractice`).

3. Inside that folder, create a new text file and save it as `index.html`.

4. Add the basic HTML template to `index.html`

5. Open `index.html` in a browser and view the source code.

To do this, we'll follow these steps. We'll use the command line to create the folders and file:

1. Open your terminal:

    On macOS, press `⌘ + space` (**command** and **space**) to open up `Spotlight Search`, then type `Terminal`. Click the `Terminal` icon.

    On Windows, press `Windows + R` (**Windows** and **R**) to open up the **Run** dialogue box. Then type `wt` and click `Ok`.

2. Navigate to your projects folder using this command:

    ```console
    $ cd ~/Desktop/
    ```

3. Create the `projects` folder:

    ```console
    $ mkdir projects
    ```

4. Navigate to the `projects`folder:

    ```console
    $ cd projects
    ```

5. Create the `htmlprojects` subfolder:

    ```console
    $ mkdir htmlpractice
    ```

6. Create the `index.html` file:

    ```console
    $ touch index.html
    ```

7. Open the `index.html` file with VS Code:

```console
$ code index.html
```

8. Copy and paste the **HTML template** we saw in the last page into the new file:

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        ...
    </head>

    <body>
        ...
    </body>

</html>
```
9. Save the changes to the file.

**Note**
    The `index.html` file is your default homepage for the website we are creating. This is an industry standard, because web browsers tend to recognize the `index.html` page as the opening page to the directory that is your website. See [here](https://www.lifewire.com/index-html-page-3466505) for more explanation.

10. Once you've created your new file, open it with a web browser using your graphical user interface (GUI):

    - On macOS, click on the **Finder** in your dock (the apps at the bottom of the screen) and click on **Desktop** on the left. From there, navigate to `projects`, then `htmlpractice`. Alternately, you can click the projects folder icon on your **Desktop** and find it from there. 
        If you're using a Mac and would prefer to use the command line, you can also type `open index.html` from within your `htmlpractice` folder.

        ```console
        $ open index.html
        ```

    - On Windows, click the `projects` folder icon on your desktop. Navigate to `projects`, then `htmlpractice`. Double click the `index.html` file. If it does not open in a browser, right click the `index.html` icon and select "Open with..." from the menu.

    - For both operating systems, select **Firefox** or **Google Chrome** from the app list that appears.

:::info
__Tip__:
You can also use the **Live Server plugin** to open `index.html` from within VS Code. Right-click `index.html` and left-click `"Open With Live Server"`. The advantage to this is that changes will automatically refresh if you keep the file open.
:::

### What Happens?

When you open the empty template, you'll see a mostly blank web page that displays nothing except `... ...`. Open your secondary menu (right click on Windows, hold <kbd>control</kbd> and click with macOS) and view the page source.

![Secondary menu](/images/html-css/index_blank_rightclick.png)

### What Should Happen?

When you "**View Page Source**," you should see the code for the basic template.

![Source code](/images/html-css/index_blank_source.png)

Viewing the page, no content should render except for `... ...`, because there is no content in the template at this time.

![Front matter](/images/html-css/index_blank.png)

## Evaluation

Which one of these two HTML commands is also known as the "root element"?

:::quiz
- `<!DOCTYPE html>`
- `<html lang="en">`*
:::

### Keywords

Do you remember the glossary terms from this section?

- [Root Element](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/rootelement.md)

# Tags and Elements

Tags and elements are the structuring components of html webpages.  

![Diagram of tags and elements](/images/html-css/HTML_tags_elements.png)

**Elements** identify the different parts of a page, such as paragraphs, headings, titles, body text, images and more. Elements are demarcated by tags which enclose the content of an element (ex. `<head>` and `</head>` are tags that denote the head element of your page).  
  
**Tags** demarcate elements in one of two ways. As with the paragraph element below, an element can have an opening and a closing tag, with the content in between.

```html
<p>This is a paragraph.</p>

<p>
    This is also a paragraph.
</p>
```

Elements which have an opening and closing tag can have other elements inside them. Inside the paragraph element below is a `<strong>` element, which emphasizes the included text by making it bold.

```html
<p>
    When I came home from school, I saw he had <strong>stolen</strong> my chocolate pudding.
</p>
```

Other elements have self-closing tags as with the `<img>` (image) element below. These tags are also called **void tags**. Read more about void tags [here](https://developer.mozilla.org/en-US/docs/Glossary/Void_element).

```html
<img src="image.jpeg" />
```

These elements don't require a separate closing tag. Closing tags aren't needed because you wouldn't add content inside these elements. For example, it doesn't make sense to add any additional content inside an image. It is common practice to end void tags like the one above with a `/` to mark the end of it.  
  
Below is HTML that adds alternative text to an image—or text that describes the image. This information added is an attribute—or something that modifies the default functionality of an element.

```html
<img alt="This is an image" src="image.jpeg" />
```

Adding alternative text to an image, as was done in this example, is vitally important. That information makes the image more accessible to those viewing your site. For instance, users with poor vision who may not be able to see your image will still understand what it is and why it's there if you provide alternative text describing it.  
  
If you look back at the basic template in your `index.html` file, you'll see that the main sections of your file have **opening** and **closing** tags. Each of these main elements will eventually hold many other elements, many of which will be the content of our website.

## Evaluation

Which one of the following statements is correct:

:::quiz
- Elements have opening and closing tags.*
- Tags have opening and closing elements.
:::

### Keywords

Do you remember the glossary terms from this section?

- [Tag](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/tag.md)
- [Elements](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/elements.md)

# Paragraphs and Headings

**Paragraphs** and **headings** are the main textual elements of the body of your webpages. Because these contain content that you want to organize and display on your webpage, these are entered in the body element.

The `<h1>`, `<h2>`, `<h3>`, etc. tags denote **headings** and **subheadings**, with `<h1>` being the largest and `<h6>` the smallest.

The `<p>` tags denote **paragraphs**, or blocks of text.

```html
<!DOCTYPE html>
    <html lang="en">

    <head>
        <title>A boring story</title>
    </head>

    <body>
        <h1>
            Cleaning my boiler
        </h1>
        <p>
            When I got to my basement that day, I knew that I just had to clean my boiler. It was just too dirty. Honestly, it was getting to be a hazard. So I got my wire brush and put on my most durable pair of boiler-cleaning overalls. It was going to be a long day.
        </p>
    </body>

</html>
```

Note that the `<title>` is in the `<head>` element, which is where information about the webpage goes. The title doesn't appear on the page, but instead elsewhere in the browser when the page is displayed. For example, in Chrome, the title appears on the tab above the navbar.

![Image showing where the title appears in the Chrome web browser](/images/html-css/title.png)

Note also that the elements and tags used in HTML have _meaning_. They provide information about the **structure** of a web page, showing how its parts work together. Those who make use of assistive technologies such as screen readers rely on this semantic information to navigate the page. Thus, it's important to use elements such as headers only when the information being marked calls for it. Making text large and/or bold for visual effect should be done using CSS. The Mozilla Developer Network has some good [introductory information on semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML).

## Activity

Using your text editor, add the following elements to your `index.html`. Add text of your choosing between the opening and closing tags of each element. Feel free to copy from the example in the last page or create your own:

- **Title**

```html
<title></title>
```

- **Heading**

```html
<h1></h1>    
```

- **Paragraph**

```html
<p></p> 
```

For reference, here is an updated template:

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <title></title>
    </head>

    <body>
        <h1>

        </h1>
        <p>

        </p>
    </body>

</html>
```

Once you have updated your ``index.hmtl`` file, re-save it. Open it in your browser again or refresh the page if still opened.

What do you notice about how the information is organized in the webpage? In other words, where are the title, heading, and paragraph text?

:::info
__Tip__:
Although you don't need to break lines between opening and closing tags, note the conventions in the sample code of the boiler story, which follow industry standards.
:::

### What Should You See?

The heading should appear at the top of the page, followed by the paragraph text. The heading text should be larger. The title should appear in the browser window tab.

![Image of the boiler example above rendered in Google Chrome](/images/html-css/boiler-example.png)

## Evaluation

If I wanted to indicate that "About" is a subheading in my page, which element should I use?

:::quiz
- `<head>`
- `<h2>`*
:::

# Links

**Links** are the foundation of the World Wide Web, and thus are an important component of most websites. Hyperlinking text enables users to move between the different webpages on your site (sometimes in the form of a menu or navigation bar), or connect to other resources or information on other websites. They allow the user to call and connect with information beyond the present file.

![Diagram of links between pages in HTML](/images/html-css/HTML_links.png)

The **`<a>`** tag, or **anchor tag**, creates a link to another document. You can use the `<a>` tag to link to other documents or webpages you created for the same site or to documents located elsewhere on the web. You can also use it to link to a particular location on a page—we'll see an example of this in the section on Classes and IDs.

```html
<a> </a>
```

Within the <a> tag, you'll need a hyperlink reference, or href, to direct a link to a specific destination.

```html
<a href=""> </a>
```
In the following pages we'll explore relative and absolute links.

## Option One: Relative Links

**Relative links** take the current page as an origin point and search for other files within the same folder or directory. They do not search outside of the bounded object in which it is located. This method is useful for creating links to pages within your own site.

The following appears as a link to the `about.html` page in the same folder as `index.html`:

```html
<a href="about.html">About</a>
```

On your webpage it will appear as:

[About](/about.html)

This link is asking the browser to look for a file titled `about.html` in the same folder. If a file named `about.html` is not in the same folder, clicking the link will result in a `404` ("Page Not Found") error (as this broken link does).

## Option Two: Absolute Links

An **absolute link** includes information that allows the browser to find resources on other websites, folders, and directories. In other words, it follows absolute and specific instructions to the path of something. This information includes the site domain—such as `google.com`—and often the protocol—such as `http` or `https`.

```html
<a href="https://www.google.com">Google</a>
```

On your webpage it will appear as:

[Google](https://www.google.com)

This pathway is directing your browser to look online for this text document at the URL address provided.

:::info
__Tip:__
HTTP stands for 'hypertext transfer protocol', and is also a foundational component of the internet. HTTPS stands for 'hypertext transfer protocol secure', which encrypts the data transferred through the protocol.
:::

## More on Links

Each example from the previous two pages includes an `href`—a hypertext reference—which is an example of an **attribute**. Attributes offer __secondary information__ about an element.

The `<a>` tag, or anchor tag, creates a link. The text within the `<a>` and `</a>` tags, the anchor text, is what a visitor to the site will see and can click on. The `href=` attribute tells the browser where the user should be directed when they click the link.

There is another technical difference between the two options above.

### Relative vs. Absolute Links: When to Use Which One

![diagram of HTML relative vs absolute links](/images/html-css/HTML_links2.png)

Use relative links when referring to pages on your own site. The main advantage of using relative links to pages on your site is that your site will not break if it is moved to a different folder or environment.

For other instances, such as referring to pages or information on external sites (or directories), use absolute links.

## Activity

**Note**
If you closed your command line you will first need to re-open it and navigate to the the `htmlpractice` sub-folder.

```console
$ cd ~Desktop/projects/htmlpractice
```

1. Create a new text file called `about.html` in your `htmlpractice` folder. Copy over the HTML from your `index.html` file, but change the text in the `<h1>` element to "About."

From your command line you can enter this code:

```console
$ touch about.html
```

2. Switch to VS Code. If you closed your `index.html` file, re-open it. In your `index.html` file, add a relative link leading to your "About" page.

```html
<a href="about.html">About</a>
```

3. Also add a relative link from your "About" page to your `index.html` page. In this link, call your `index.html` page "Home" (Reminder: `index.html` is the default homepage)

```html
<a href="index.html">Home</a>
```

4. Lastly, include an absolute link to a page of your choosing. Remember that an absolute link includes the protocol (for example, `http:`) and also a domain (for example, `cuny.edu`), such as `http://cuny.edu/about`.

```html
<a href="http://cuny.edu/about">CUNY</a>
```

5. Re-save your text files (`index.html` and `about.html`) and reopen or refresh them in your browser.

### Check If It Worked

When your pages are updated, you should be able to navigate from your "Home" page to your "About" page, and vice versa. You should also be able to navigate to the external web page (but not back to your page, though you can click 'back' on your brower to return).

![diagram of links in updated sample files](/images/html-css/HTML_links3.png)

Congratulations, you have just created hyperlinks. This is a foundational component of the entire Internet.

## Evaluation

Which one of the following options is a relative link?

:::quiz
- `<a href="https://www.nytimes.com/">The New York Times</a>`
- `<a href="digitalProject.html">Digital Project</a>`*
:::

### Keywords

Do you remember the glossary terms from this section?

- [Attributes](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/attributes.md)

# Images

**Images** are another important component of websites. Sometimes these just help bring your website to life, but other times they can help communicate information to users.  
  
Images are referenced with the **`<img>`** tag. Similar to the `<a>` tag, `<img>` requires an attribute, in this case `src`. The **`src`** attribute stands for **"source"** and communicates __secondary information__ to your browser that identifies and locates the image. Unlike many other tags, the `<img>` tag does not need to be closed, making it an example of a void tag.  
  
The following element pulls in an image located in the same folder as the `.html` file:  
  
```html
<img src="scream.jpeg" />
```

The same rules apply here as with the `href` attribute: __if the image is not located in the same folder as the document you are writing in, the browser won't find it__. If the browser cannot find an image resource, you will see a broken image icon, such as this one from Chrome:
  
![Chrome broken image icon](/images/html-css/broken.png)
  
**Note:** __Some sites use a lot of images__. When this is the case, it can be helpful to keep images in a separate folder within your site's structure. To enable the browser to find an image in that case, just add the directory in front of the file name. For example, if you have a folder named images in the same folder as your `index.html` file, and `scream.jpeg` is in that folder, you'd change the void tag above to `<img src="images/scream.jpeg" />`.

## Making Images Accessible

As briefly noted earlier, alternative text, or **alt text**, is descriptive "text associated with an image that __serves the same purpose and conveys the same essential information__ as the image" (see [Wikipedia Manual of Style/Accessibility/Alternative Text for Images](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Accessibility/Alternative_text_for_images) for more), and is important for ensuring content conveyed by images is more accessible than an image alone.

To add alternative text to an image, you add an additional attribute, `alt` followed by your descriptive text. For example:

```html
<img src="filename.png" alt="Text in these quotes describes the image" />
```

For more information about using alt text, see what the [Social Security Administration](https://www.ssa.gov/accessibility/files/SSA_Alternative_Text_Guide.pdf) has to say.

### What Images May I Use On My Site?

If you're planning to use images that you did not take or make yourself, you'll need to use "public domain" or "open license" images.

This [guide by the OpenLab at City Tech](https://openlab.citytech.cuny.edu/blog/help/following-copyright-guidelines-for-images/) includes more information on licensure and a list of places where you can find reuseable images.

## Activity

Download and save an image from the web, download and save this image of a boiler, or move an image from your computer into the same folder as your `index.html` file.

![Image of a boiler](/images/html-css/boiler.jpg)

:::info
__Tip:__
Give the file a simple name. Also, the name **cannot** have spaces. A good practice is to use either dashes or underscores where there would otherwise be spaces. For example: `this-is-an-image.jpg` or `this_is_an_image.jpg`.
:::

```html
<img alt="This is an image" src="image.jpeg" />
```

You can also control the display size of the image by adding `style`. These are defined in terms of pixel sizes, which the brower will interpret. Check out [this guide](https://www.w3schools.com/html/html_images.asp) for more on setting image size.

```html
<img alt="This is an image" src="image.jpeg" style=width:640px;height:480px;/>
```

Using the code above as a reference, add that image into your `index.html` file, re-save the file, and re-open or refresh the page in your browser. Your image should now appear on the page.

For reference, here is the modified boiler story.

```html
<!DOCTYPE html>
    <html lang="en">

    <head>
        <title>A boring story</title>
    </head>

    <body>
        <h1>
            Cleaning my boiler
        </h1>
        <p>
            When I got to my basement that day, I knew that I just had to clean my boiler. It was just too dirty. Honestly, it was getting to be a hazard. So I got my wire brush and put on my most durable pair of boiler-cleaning overalls. It was going to be a long day.
        </p>
         <img alt="This is an image" src="image.jpeg" style="width:800px;height:600px;" />
    </body>

</html>
```

The updated verison should display as follows.

![Screenshot of updated index.html with image added](/images/html-css/boilerstoryimage_capture.png)

## Evaluation

Does including "alt text" in websites improve their accessibility?

:::quiz
- Yes*
- No
:::

What unit does the browser use for setting image size?

:::quiz
- Inches
- Centimeters
- Pixels*
:::

# Conventions

As we’ve gone through the different components of creating a webpage, you likely have noticed some common **conventions** or **industry standards** for creating a webpage using HTML. Can you guess any of these?  
  
Here are a few examples:

- Some tags are self-closing, while others require a closing tag. Self-closing tags are called **void tags**, and are generally self-closing because you wouldn't need or want to add another element within a tag. They also generally end with a forward slash (`/`) to mark the end of the tag.
- Use lower case. While HTML is not case sensitive, it makes scanning the code easier, and makes it look more consistent.
- Your code should be **nested**. This is not a technical necessity either—blank space has no meaning in html. However, this makes it easier to scan the code quickly, which is particularly helpful when you run into errors! It also makes it easier for others to read your code.

This is an example of the boiler story code, without any nesting:

```html
<!DOCTYPE html><html lang="en"><head><title>A boring story</title></head><body><h1>Cleaning my boiler</h1><p>When I got to my basement that day, I knew that I just had to clean my boiler. It was just too dirty. Honestly, it was getting to be a hazard. So I got my wire brush and put on my most durable pair of boiler-cleaning overalls. It was going to be a long day.</p><img alt="This is an image" src="boiler.jpg" style="width:800px;height:600px;" /></body></html>
```

This is the same code, with nesting:

```html
<!DOCTYPE html>
    <html lang="en">

    <head>
        <title>A boring story</title>
    </head>

    <body>
        <h1>
            Cleaning my boiler
        </h1>
        <p>
            When I got to my basement that day, I knew that I just had to clean my boiler. It was just too dirty. Honestly, it was getting to be a hazard. So I got my wire brush and put on my most durable pair of boiler-cleaning overalls. It was going to be a long day.
        </p>
         <img alt="This is an image" src="image.jpeg" style="width:800px;height:600px;" />
    </body>

</html>
```


:::info
__Tip:__
While VSCode usually auto-indents and auto-completes tags, it’s not foolproof. Always double check your code for errors.
:::

# Major Challenge: Create a Small Website

In this major challenge, we will begin creating a "small" website, which you can use as the starting point for a portfolio of your digital projects and academic work. Using the tags we've just reviewed, and two additional ones (see below), we will make a barebones website that provides information about yourself (or a fictional character). Parim Satyal's website on [Rediscovering the Small Web](https://neustadt.fr/essays/the-small-web/) may provide some inspiration.
  
The first step is to create a new folder called `website` in your `projects` folder on your desktop. Create an `index.html` as well as an `about.html` file inside that folder. These will be the landing page of your site, and a supplemental page that provides information about yourself.  
  
Add HTML to your `index.html` file. This page should include the following component:

- Doctype
- Root element
- Head and a body
- Title for the page
- One heading
- One paragraph
- One image with alt text
- A menu or navigation bar that links to your Home and About pages

Think about the order of your content as you assemble the body of your page. Feel free to take language from your CV, or make something up for a fictional character. 
  
Don't worry about getting the content just right. The important aspect of this exercise is to review the **structure of a webpage**, and **practice creating a webpage**.

## Additional Tags

Here are three additional tags that might come in handy in assembling your page:

To **make a list**, you open and close it with the **`<ul>`** tags, and each item is an enclosed **`<li>`** tag:

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

The HTML above will produce an unordered (bulleted) list. To create an ordered (numbered) list instead, just substitute **`<ol>`** and **`</ol>`** for `<ul>` and `</ul>`.

(This may come in handy when making your menu or navigation bar.)

To **make a line break** or give space between different elements:

```html
<br />
```

To **make a comment** or add text that will not display on the rendered page, enter text between `<!---` and `--->`. Comments are useful for helping annotate large chunks of code, to isolate snippets of code that contain errors you cannot identify, and for communicating your process with other coders and readers.

```html
<!--- --->
```

## Optional: Advanced Challenge

Here is a more advanced challenge if you're up for it. Feel free to try this on your on time.

1. Add a **list** and an **unordered list** to your website. They can contain anything.
2. Add a **table** containing a list of projects, research areas, or interests for your website.
3. Insert a **break** before and after the table.
4. Add a **comment** somewhere in the body of the text.

You can learn more about making tables using HTML [here](https://www.w3schools.com/html/html_tables.asp). Here is the sample code from the previous section.

**List**

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

**Ordered list**

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

**Line break**

```html
<br />
```

**Comment**

```html
<!--- --->
```

# CSS Basics

Now that we have covered the fundamentals of HTML, it's time to move on to CSS.

**CSS** stands for **Cascading Style Sheets**. This language works in coordination with HTML, but is its own language with its own rules and terminology. In contrast to HTML, which is responsible for the content of the page, CSS is responsible for the presentation of the page. Like HTML, CSS is fundamental to much of the Internet today. Even if you use another means for creating a website (such as WordPress, GitHub Pages, or Wix), styling it effectively will involve the use of CSS.
  
Examples of what CSS can help you determine include:

- What background color you want to use for the page or a paragraph.
- What font or font size you want for your headings or your normal text.
- How large you want the images, and whether you want them aligned center, left, or right.
- Where elements appear on the page.
- Whether elements are visible to a user or not.

## Evaluation

Is CSS a __markup language__ or a __programming language__?

:::quiz
- Markup Language*
- Programming Language
:::

# Integrating CSS and HTML

In order for CSS to inform the style of the content on the page, it must be integrated with your HTML. CSS can be integrated into your HTML in three ways:

1. inline
2. internal
3. external (_recommended_)

## Option 1: Inline

**Inline** styling adds CSS directly into the HTML of a page to adjust the style of particular parts of a page.

For example, if you want the text of your first paragraph to be red, but the text of your second paragraph to be blue:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>About</title>
    </head>

    <body>
        <p style="color: red">
            Content of paragraph
        </p>
        <p style="color: blue">
            Content of paragraph
        </p>
    </body>
</html>
```
Here's what the code looks like displayed in a browser.

![Screenshot of inline css rendered in browser](/images/html-css/css_inline.png)

## Option 2: Internal

**Internal** styling also adds CSS directly into the HTML, but keeps it separate from the content code of the page by adding it into the head using the `<style>` tag. When using internal styling you are providing styling rules for the entire page. For example, if you want all headings to be blue:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>About</title>
        <style>
            h1 {
              color: blue;
            }
        </style>
    </head>

    <body>
        <h1>
            Heading One
        </h1>
        <p>
            Content of paragraph
        </p>
        <h1>
            Heading Two
        </h1>
        <p>
            Content of paragraph
        </p>
    </body>
</html>
```
Here's what the code looks like displayed in a browser.

![Screenshot of internal CSS rendered in browser](/images/html-css/css_internal.png)

## Option 3: External (Recommended)

**External** styling creates a completely separate document for your CSS that will be linked to your HTML in the head section of your HTML document using the code below. This separate document is called a _stylesheet_ and is often named `style.css`. The document is linked through a void `<link>` tag that lives inside the parent `<head>` tag. Its `href` attribute is a relative link to the document somewhere in relation to the document that references it.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>CSS Example</title>
        <link rel="stylesheet" href="style.css" />
    </head>

    <body>
        <h1>
            Heading One
        </h1>
        <p>
            Content of paragraph
        <p>
    </body>
</html>
```

Styling instructions from CSS is then contained in the `style.css` document.

```css
        h1 {
          color: solid red;
          text-decoration: underline;
    
        }
        p {
            color: violet;
            font-family: cursive;
        }
```

Here's what the code looks like displayed in a browser.

![Screeshot of the external CSS code rendered in a browser](/images/html-css/css_external.png)

## Best Practices

It's best practice to use Option 3, **external styling**, for a number of reasons:

1. **Clarity** It helps us remember what each language focuses on: HTML is for _content_, CSS is for _styling_. (This is sometimes referred to as the principle of ["separation of concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/))
2. **Consistency** It helps us maintain consistency across the various pages of our site as _multiple HTML files can link to the same stylesheet_.
3. **Simplicity** Because multiple HTML files can link to the same CSS file, it's not necessary to write the same CSS code multiple times. Once suffices. (This is sometimes referred to as the ["Don't Repeat Yourself" principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), or simply _DRY_.)

Option 3, external styling, is preferred by most web developers because __it's more manageable__ and because __it lends itself to greater consistency across the entire site__.

## Challenge: Activity

Create a blank stylesheet using the command line (following option 3, external styling, described above). In your `index.html` document, link to your style sheet and re-save the file.

Make sure you're in the `projects` folder

```console
$ cd ~/Desktop/htmlpractice/projects
```

Create `style.css`

```console
$ touch style.css
```

Open `style.css` in VS Code

```console
$ code style.css```

To link your stylesheet with your `index.html` file, insert the following code into the `<head>` element of that `index.html` file:

```html
<link rel="stylesheet" href="style.css" />
```

The `style.css` file will then contain style information, such as this

```css
     h1 {
        color: solid red;
        text-decoration: underline;
    
    }
    p {
        color: violet;
        font-family: cursive;
    }
```

## Evaluation

Is the following code-snippet an example of **inline styling** or **internal styling**?  
  
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Homepage</title>
        <style>
            h1 {
              font-family: monospace;
            }
            p {
             font-family: fantasy;
            }
        </style>
    </head>

    <body>
        <h1>
            Online Library for All!
        </h1>
        <p>
            Free books here!
        </p>
    </body>
</html>
```
:::quiz
- Inline Styling
- Internal Styling*
:::

# Rule Sets

![anatomy of a sample CSS rule set](/images/html-css/CSS_syntax.png)

CSS is based on **selectors** and **declarations**, which together form rule sets (or just "rules"). Rule sets comprise an external styling file with a **`.css`** extension. Here is the contents of a sample `.css` file:

```css
h1 {
    color: orange;
    font-style: italic;
}

p {
    font-family: sans-serif;
    font-style: normal;
}

#navbar {
    background-color: yellow;
    padding: 80px;
}

.intro {
    font-family: arial;
    background-color: grey;
    color: dark-grey;
}
```

The first rule (which starts with the `h1` selector) applies to **all** `<h1>` tags on each page where your HTML document links to your stylesheet, and changes the font style and display of those headings. In other words, every time the `<h1>` tag is called, the contents of this rule will also be applied.
  
The lines within the curly braces (i.e. `{ ... }`) are called **declarations**, and they change the formatting of the elements in the HTML document. Each line in the declaration sets the value for a **property** and ends with a semicolon **(`;`)**.  For `h1`, the declarations set  `font-family` to `arial`, `background-color` to `grey`, and `color` to `dark grey`.
  
Note the different syntax being used to select items for for styling with rule sets. The bottom two selectors (`#navbar` and `.intro`) are used to apply rule sets to **IDs** and **classes**. In general, adding classes and IDs to HTML elements allows for more specific styling—more on these soon!

## Challenge

Copy and paste the CSS rules from :link[`the previous section`]{workshop="html-css" page="36"} into your `style.css` file and re-save the file. Then open or refresh your `index.html` file in your browser and see what happens.  
  
```css
h1 {
    color: orange;
    font-style: italic;
}

p {
    font-family: sans-serif;
    font-style: normal;
}

#navbar {
    background-color: yellow;
    padding: 80px;
}

.intro {
    font-family: arial;
    background-color: grey;
    color: dark-grey;
}
```
### What should happen?
  
The formatting of the text on your page should change accordingly. Your `<h1>` should be orange and italic, for example.  

<!--TODO: screenshot of output -->

What are some other rules you might set for different HTML elements? Do a quick Google search for a CSS rule that changes the appearance of your page, such as [putting a border around an element](https://www.w3schools.com/css/css_border.asp).

## Evaluation

How do we associate a CSS file with an HTML page?

:::quiz
- By including a link to the CSS file in the HTML page's `<head>` element.*
- By putting the CSS file in the same folder as the HTML page.
:::

### Keywords

Do you remember the glossary terms from this section?

- [CSS Selectors](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/cssselectors.md)
- [Class](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/class.md)
- [ID](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/id.md)

# Filtering

Some of you may be wondering whether it matters what order you add the rule sets to your `style.css` document. The answer is no. CSS has an automatic filtering function where **the most specific rule in CSS always takes precedence.**  
  
So if your stylesheet contained the following rule sets:

```css
p {
    color: green;
}

p strong {
    color: red;
}
```

...then the text of your paragraph would be green, but where the strong tag is found in the paragraph, __the text would be bold and red__. In other words, the more specific styling for the `<strong>` text in your paragraph will override the less specific styling of the paragraph in general. This would occur **regardless of the order these rule sets appear in the stylesheet.**  
  
This rule also applies to how you integrate CSS into your HTML to style your content. For example, if you link to an external stylesheet, and you add inline or internal CSS into your HTML, the inline or internal CSS will override the rules set in the external stylesheet. Similarly, the inline CSS will override the internal CSS.

# Classes and IDs

**Classes** and **IDs** enable more fine-grained styling by allowing you to define your own selectors. The difference between classes and IDs is that IDs are __unique__, used to identify one specific element or part of an element, whereas classes are used to identify multiple instances of the same type of element.  
  
Basically, if you're styling a part of your page that is unique, such as the navbar or footer, use an ID. If you're styling something that recurs in different places, like an info box or form field, use a class. 
  
Incorporating classes and IDs into the styling of your document includes two steps:

1. Some HTML code that CSS selectors can refer back to must be added to your HTML document.
2. CSS rules that select that code must be added to your style sheet.

The code for classes and IDs is different in both CSS and HTML.

## HTML Code

In HTML, classes and ids are added to the first part of a tag. Here's an example of what HTML code with classes and ids looks like:

```html
<ul id="navbar">
    <li>Home</li>
    <li>About</li>
</ul>


<h1 class="football">Football teams</h1>

<ul>
    <li class="football" id="colts">Indianapolis Colts</li>
    <li class="football" id="packers">Green Bay Packers</li>
</ul>


<h1 class="baseball">Baseball teams</h1>

<p>American League teams</p>
<ul>
    <li class="baseball american" id="twins">Minnesota Twins</li>
    <li class="baseball american" id="tigers">Detroit Tigers</li>
</ul>

<p>National League teams</p>
<ul>
    <li class="baseball national" id="dodgers">Los Angeles Dodgers</li>
    <li class="baseball national" id="mets">New York Mets</li>
</ul>
```

Note that it's possible to assign more than one class to an element—just leave a blank space between the two classes, as in the baseball examples above.

**Bonus:** ID selectors can be used to create links that can be used for navigation _within_ a page. For example, to add a link to the page that takes the user directly to the line that reads "New York Mets," we might write a HTML link like this:

```html
`<a href="#mets">Mets</a>`
```

## CSS Selectors

**Class selectors** in CSS are denoted with a period in front of the class name you're creating. They look like this:

```css
#navbar {
    padding: 80px;
    background-color: red;
    color: white;
}

.football {
    font-family: arial;
    background-color: lightgrey;
    color: blue;
}

.baseball {
    font-weight: bold;
    color: green;
}

.american {
    background-color: yellow;
}
```

## ID Selectors

**ID selectors** look like this in the CSS—the name of the selector preceded by a hashmark (`#`) (also known as a pound sign or octothorpe):

```css
#navbar {
    background-color: yellow;
    padding: 80px;
}
```

...and in the HTML they are incorporated into elements like this:

```html
<ul id="navbar">
    <li>Home</li>
    <li>About</li>
</ul>
```

:::info
__Tip__

If you run into an error, be sure to _check your punctuation_. Oftentimes the problem is a typo, or overlooking a semi-colon, a period, etc. See the:link[`Troubleshooting`]{workshop="html-css" page="47"} section for more information on common issues.
:::

## Evaluation

**True or False:** Classes are used to create categories of related elements, IDs are used create unique identifiers.

:::quiz
- True*
- False
:::

### Keywords

Do you remember the glossary terms from this section?

- [CSS Selectors](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/cssselectors.md)
- [Class](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/class.md)
- [ID](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/id.md)

# Useful Properties

Below is a list of **useful properties** that can be modified with CSS, compiled by Digital Fellow [Patrick Smyth](http://smythp.com). There are also [CSS cheatsheets](https://courses.cs.washington.edu/courses/cse154/15sp/cheat-sheets/css-cheat-sheet.pdf) available online.

### Color

Determines text color. Can be a word or a hex value, like `#FFFFFF`:

```css
color: blue;
color: #000000;
```

### Background Color

Sets the background color of an element.

```css
background-color: pink
background-color: #F601F6;
```

### Text Align

Aligns text to the left, center, or right.

```css
text-align: center;
```

### Padding

The space between contents and the "box" (`<div>`) surrounding it.

```css
padding: 10px;
padding-right: 10px
```

### Margin

The space between an element's box and the next element (or the edge of the page).

```css
margin: 10px;
margin-top: 10px;
```

### Width and Height

Sets the width or height of an element. Typically, don't set both of these.

```css
width: 50%;
height: 40px;
```

### Float

Determines if text wraps around an element.

```css
float: left;
```

### Display

Determines if an element is treated as a block or inline element. Can also be set to `none`, which makes the element disappear.

```css
display: inline;
display: block;
display: none;
```

### List Style

Determines default styling on lists. Usually best to set it to `none`.

```css
list-style-type: none;
```

### Font Family

Sets the font. Usually best to copy this from [Google Fonts](https://fonts.google.com/) or another web font repository.

```css
font-family: 'Lato', sans-serif;
```

# Major Challenge: Styling Your Personal Website Using CSS

Using the CSS basics we've just reviewed, and the list of properties found on the :link[`Properties page`]{workshop="html-css" page="45"} and online, give your website some styling.
  
I encourage you to use an external stylesheet with classes and IDs to style particular aspects of your site more specifically, but feel free to also play around with inline and internal styling if desired.

For this challenge:
- Change the color and size of your heading text.
- Change the font of your paragraph text.
- Change the background color of your navigation bar or menu.
- Center your image on your page.
- [Shape up your navigation bar.](https://github.com/DHRI-Curriculum/html-css/blob/v2.0/sections/_navbar-hint.md)
  
**Reminder:** After creating a stylesheet, you must link it to all HTML documents that you want this styling to apply to. You can do so with the `<link>` tag:

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

This will tell your HTML document to apply the style rules from the text file named `style.css` in the same folder.

# Troubleshooting

It is common—especially in the beginning—that you'll add or amend something to/in your text editor, but it won't present when rendered by your browser.  
  
**Your first inclination should be to scan the text in your editor for errors**. Nesting will help tremendously with this task. Oftentimes it is as little as forgetting a semicolon or closing tag.  
  
Another investigative tactic is to **View Page Source** on the page opened in the browser.  
  
If you think it is an **error with the HTML**, you'll be able to see it there.  
  
If you think it is an **error with the CSS**, then from the Page Source you'll need to click on the link for the `style.css` page. The link to this page should be found in the head of your page. Don't see it? That may be the problem! If you do see it, open the link to see what CSS the browser is reading and applying to your HTML. It should match what you have in your text editor. If it looks like an earlier version of your style sheet, then maybe you need to re-save the document.

# Workshop Summary

Through this workshop, you have learned the basics of two of the most commonly-used languages for building on the web: HTML and CSS.
  
**HTML, or Hypertext Markup Language**, organizes content on your page using elements denoted by tags (`<...>`). When rendered by your browser, these tags tell your browser that certain content is paragraph text, while other content is heading or title text, and so on. You can also use image (`<img>`) and link or anchor (`<a>`) tags to tell the browser to render an image on the page, or take the visitor to another page on your or another website. We also discussed some important conventions to consider when creating HTML documents, such as nesting.  
  
**CSS, or Cascading Style Sheets**, allows for further styling of your website through the application of a series of rule sets that are applied to different aspects/elements of your site. In order for CSS to render on a webpage, it must be integrated with your html, which can happen in three ways: inline, internal, and external. CSS rules can be of varying specificity, and in particular, through creating classes and IDs. We also discussed how the ordering of rule sets doesn't matter, because an important function of CSS is the way it filters and applies rules in accordance with the specificity of the rule.  
  
Through understanding these languages in combination with one another, you can also reframe your understanding of the web—not as _poof! magic!_, but as a series of intentionally styled, hyperlinked text documents, with each website representing a folder of documents. The choices made in designing websites are thus the products of particular circumstances that can be understood as socially, culturally, and historically specific. They set the foundation for the Internet as we know it today, and understanding a little HTML and CSS can go a long way in looking under the 'black box'.
  
While this is a good starting point, one important question remains: how can I get these text documents on the Internet so they can be accessed, and interacted with, and linked to by others? This is what we will discuss in the final lesson of this workshop.

# Making Your Website Public

Great job! Now you have an amazing website, but it's stuck on your computer where no one else can find it or view it. How do you get your website onto the Internet so it can be shared?
  
To get your site on the internet, you'll need **hosting**—that is, a remote computer that will stay on day in and day out to serve the website to visitors. In theory, you could host your website on your own computer, but in practice, it usually makes sense to purchase hosting from a hosting company or use a free service.  
  
You'll also need a way of getting your website to your host. That's where FTP, or File Transfer Protocol, comes in.

## FTP

**FTP** is a protocol used to share files from your computer (_a client_) to another computer called a server, and back again over the Internet. This is something we do _all the time_, but we refer to it as "uploading" and "downloading."  
  
Note: Though FTP stands for **file transfer protocol**, you are not really transferring or moving your files from your computer; instead they are _copied_ to the server. Fear not!  
  
In order to transfer your website files (also called your website's **directory**) to a server you will need:

1. Access to the Internet.
2. An FTP Client.
3. A server that is connected to the Internet where you can send your files.

Assuming you all can manage accessing the internet on your own, let's focus on the latter two.

### FTP client

An **FTP client** is software designed specifically for the purpose of sharing files between computers. There are widely-used, freely-available GUI applications (i.e., applications that use a graphic user interface, or the point-and-click, user-friendly software interfaces you are used to) that you can download for use, including [Filezilla](https://filezilla-project.org/) and [Cyberduck](https://cyberduck.io/). You can also run an FTP client program through the command line on most computers, though the process varies by operating system.

### Other Resources about FTP

- [FTP for Beginners, *Wired*](https://www.wired.com/2010/02/ftp_for_beginners/)
- [The Three Best FTP Clients for Windows](https://www.makeuseof.com/tag/free-ftp-clients-windows/)
- [How To Use FTP Through the Command Line in Mac OS X](http://www.techradar.com/how-to/software/operating-systems/how-to-use-ftp-through-the-command-line-in-mac-os-x-1305664)
- [How to Use the Mac Terminal as an FTP or SFTP Client](https://beebom.com/how-to-use-mac-terminal-ftp-sftp-client/)

## Web Hosting

You also need a server to transfer your files to, where they can be stored and shared on the Internet. This is what we call **web hosting** and there are multiple options here as well. The GCDI (CUNY Graduate Center Digital Initiatives) website contains a list of [low-cost cloud hosting services for students](https://gcdi.commons.gc.cuny.edu/digital-resource-guide/#cloud). As long as your site is just plain HTML and CSS, it's also possible to host your website for free on services such as [GitHub Pages](https://pages.github.com/).

### Guides to Web Hosting Services

- [The Best Web Hosting Services](https://www.makeuseof.com/tag/best-web-hosting-services/)
- [Top 7 Easy and Free Web Hosting Services](https://www.makeuseof.com/tag/top-7-easy-and-free-web-hosting-services/)
- [10 Ways That Free Web Hosting Is Bad for Your First Website](https://www.makeuseof.com/tag/free-web-hosting-is-bad/)


## Keywords

Do you remember the glossary terms from this section?

- [FTP](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/ftp.md)
- [Web Hosting](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/webhosting.md)

# Theory to Practice

This workshop has provided an introduction to HTML and CSS. Through its discussion of tags, elements, and attributes, we have tried to cover the basic ways in which web pages are initially constructed in plaintext and then rendered on browsers. As we concieve of digital humanities projects, however, our visions quickly exceed the capacity of the commands that was covered in this workshop. Not only might we be interested in making information public on the internet, but we might also be interested in providing tools that facilitate interactivity and ease of use with the content that we are curating. Building these tools and incorporating them in our websites requires the additional knowledge of languages like Javascript, SQL, and [Python](http://www.github.com/DHRI-Curriculum/python), among many others. Digital humanities projects are often collaborative endeavors and bringing someone into the project who has these skills is an effective way to building well-designed websites.  
  
Another way to build more complex design and functionality into your websites is by using a **Content Management System (CMS)**, which refers to a suite of tools that facilitates easy website development and hosting on the internet. Most modern-day websites require functionalities that strains the limits of HTML and CSS. Content Management Systems allow users without any familiarity with advanced web-design languages and concepts to quickly build websites that are visually appealing and contain a variety of features. CMS platforms often provide a variety of tools that users can simply click, drag, and input content to create websites. No coding required! Popular content management systems in the digital humanities include [Omeka](https://www.omeka.net/), [Scalar](https://scalar.me/anvc/scalar/), [Libguides](https://www.springshare.com/libguides/), and [Wordpress](https://wordpress.org/). These CMS have robust documentation and an active user community, both of which can help solve issues in website development. The suggested readings and tutorials provided below link to more information on selecting and using a CMS.

We may also want to use our newfound HTML and CSS skills to **more carefully examine existing online content**, through comparisons of timestamped website backups using the [Internet Archive Wayback Machine](https://web.archive.org/). We may also want to utilize our skills in more advance programming to conduct web scraping exercises, examining in the words of Michael L Black, [**The World Wide Web as a Complex Data Set**](https://www.euppublishing.com/doi/pdf/10.3366/ijhac.2016.0162). After completing the Python workshops on DHRIFT, we may want to incorporate our HTML skills into creating a web scraping script.

## Review your knowledge: 10 questions from the lessons

__1. True or False: Classes are used to create categories of related elements, IDs are used create unique identifiers. (Select one of the following)__

:::quiz
- True*
- False
:::

Revisit lesson :link[`Classes and IDs`]{workshop="html-css" page="40"} to learn more.

__2. Which one of the following options is a relative link? (Select one of the following)__

:::quiz
- `<a href="digitalProject.html">Digital Project</a>`*
- `<a href="https://www.nytimes.com/">The New York Times</a>`
:::

Revisit lesson:link[`Links`]{workshop="html-css" page="13"} to learn more.

__3. Is the following code-snippet an example of inline styling or internal styling?__

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Homepage</title>
        <style>
            h1 {
              font-family: monospace;
            }
            p {
             font-family: fantasy;
            }
        </style>
    </head>
    <body>
        <h1>
            Online Library for All!
        </h1>
        <p>
            Free books here!
        </p>
    </body>
</html>
```

:::quiz
- `Inline styling`
- `Internal styling`*
:::

Revisit lesson :link[`Integrating CSS and HTML`]{workshop="html-css" page="29"} to learn more.

__4. If I wanted to indicate that "About" is a subheading in my page, which element should I use? (Select one of the following)__

:::quiz
- `<h2>`*
- `<head>`
:::

Revisit lesson :link[`Paragraphs and Headings`]{workshop="html-css" page="10"} to learn more.

__5. Which one of these two HTML commands is also known as the “root element”? (Select one of the following)__

:::quiz
- `<html lang="en">`
- `<!DOCTYPE html>`*
:::

Revisit lesson :link[`Basic Template for HTML`]{workshop="html-css" page="5"} to learn more.

__6. How do we associate a CSS file with an HTML page? (Select one of the following)__

:::quiz
- By including a link to the CSS file in the HTML page’s <head> element.*
- By putting the CSS file in the same folder as the HTML page.
:::

Revisit lesson :link[`Rule Sets`]{workshop="html-css" page="36"} to learn more.

__7. Which one of the following statements is correct: (Select one of the following)__

:::quiz
- Elements have opening and closing tags.*
- Tags have opening and closing elements.
:::

Revisit lesson :link[`Tags and Elements`]{workshop="html-css" page="8"} to learn more.

__8. True or False: Does including “alt text” in websites improve their accessibility? (Select one of the following)__

:::quiz
- True*
- False
:::

Revisit lesson :link[`Images`]{workshop="html-css" page="19"} to learn more.

__9. Is CSS a markup language or a programming language? (Select one of the following)__

:::quiz
- Markup Language*
- Programming Language
:::

Revisit lesson :link[`CSS Basics`]{workshop="html-css" page="27"} to learn more.

__10. True or False: The primary difference between markup languages and programming languages is that markup languages are used to determine the format, appearance, and purpose of content, whereas programming languages are used to transform data. (Select one of the following)__

:::quiz
- True*
- False
:::

Revisit lesson :link[`Getting Started with HTML and CSS`]{workshop="html-css" page="2"} to learn more.

## Suggested Further Readings

### Platforms

- Digital Archives Research Collective, ["What is a CMS?"](https://darc.gcdiprojects.org/What_is_a_CMS%3F), _DARC Wiki_. This entry from the DARC wiki introduces the concept of Content Management Systems and raises a number of factors that influence which one is better suited for your project.

- [“Choosing a Platform for Your Project Website”](http://digitalhumanities.berkeley.edu/blog/13/12/04/choosing-platform-your-project-website), _Digital Humanities at Berkeley_. This post provides a thicker description of Content Management Systems. It raises factors such as functionality, familiarity, community, support, and cost when choosing a particular platform on which to build a website.

### Theories

- Vincent Brown, [“Mapping a Slave Revolt: Visualizing Spatial History through the Archives of Slavery”](https://doi.org/10.1215/01642472-3315826) _Social Text_ 33, no. 4 125 (2015): 134–41. This is a scholarly article that provides insight into how websites are used as digital humanities research tools. In this article, Vincent Brown describes the [_Slave Revolt in Jamaica, 1760–1761: A Cartographic Narrative_](http://revolt.axismaps.com/) project, a digital archive and interactive map of Tacky's Rebellion. The article explores the potential of the digital in enabling a "rhetorical practice that can define, clarify, and advocate visions of the world that might otherwise go unarticulated."  

- Elizabeth Maddock Dillon, [“By Design: Remapping the Colonial Archive”](https://doi.org/10.1215/01642472-3315838), _Social Text_ 33, no. 4 125 (2015): 142–147. This scholarly article also discusses the [_Slave Revolt in Jamaica, 1760–1761: A Cartographic Narrative_](http://revolt.axismaps.com/) project, a digital archive and interactive map of Tacky's Rebellion. Elizabeth Maddock Dillon argues for the centrality of the question of design in building websites. Dillon underscores the importance of thoughtful attention to the arrangement of imagery and text, the choice of iconography used to express information, and the form of data visualizations when creating online digital humanities projects.

- Marc McDayter, ["English 405F: Hypertext Editions: Theory, Practice, and Problems"](https://instruct.uwo.ca/english/706a/site/). This class website provides a thorough overview of literary theory and technical background about hypertext. It helps the reader navigate HTML in a larger context of literature and technical languages.

## Other Tutorials

- [W3School HTML Tutorial](https://www.w3schools.com/html/default.asp) provides an indepth overview of HTML and introduces a number of commands and protocols not covered in our introductory workshop.  

- [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp) covers a lot more ground with CSS and provides very helpful "how to" guides for making menus and integrating with other websites.

- [Omeka](https://www.omeka.net/) is a platform for building digital archives and digital exhibits. It is designed to help those without deep technical knowledge build simple interactive websites. Instead of using HTML and CSS, Omeka provides a [Graphical User Interface](https://en.wikipedia.org/wiki/Graphical_user_interface) for building websites. Omeka is a wonderful point of beginning to understand how a content management system works. Graduate Center Digital Fellow and digital archivist, Stefano Morello, has put together a very helpful workshop on [getting started with Omeka](https://github.com/GCDigitalFellows/omeka).

- [Wordpress](https://wordpress.org/) is the most widely used content management service. Similar to Omeka, it provides a Graphical User Interface for building websites. However, unlike Omeka, Wordpress provides many additional functionalities that vary in their use, scale, and complexity. Wordpress can be used to make a variety of different kinds of websites, from course-websites to scholarly publications, and much more. The [Wordpress Turorial for Beginners](https://wordpress.com/learn/) provides a helpful introduction to this tool. 

- [Github Pages](https://pages.github.com/) can be useful to more advanced users for hosting HTML/CSS files and publishing them directly on the internet. It draws on a Github repository to build static websites. Websites that are hosted on Github pages tend to have a URL that ends in `github.io`. The official Github documentation has a well written guide on [creating a Github Pages site](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

-[Neocities](https://neocities.org/tutorials) is a social network of over 700,000 ad-free websites designed to "bring back the lost individual creativity of the web". The platform offers free static web hosting and integrated tools, including an in-browser HTML editor. 


## Projects or Challenges to Try

### Build a Course Website

This project is designed to help you practice the HTML/CSS fundamentals covered in this workshop. The goal of this project will be to create a locally-hosted course website using HTML and CSS that contains the following:

- Course Description 
- Readings
- Schedule of Classes
- Assignments
- Instructor's Contact Details and Office Hours
- Menu that allows users to navigate the different sections of the website.

You are free to decide how this information is presented and styled in your website. You could put all of the information in a single page. Alternatively, you might consider making different pages for each aspect of the course website. However, as you develop your website, be sure to cover the following key aspects of thoughtful website design:

- All links should be correctly formatted and point in the right direction.
- Include alt-text with all images.
- Ensure that your use of color, font, and images facilitates ease of access for those with disabilities. 

To begin, create a folder called "courseWebsite" in your working directory. This folder will contain your index.html file, any other HTML files you create for additional pages, any CSS files you use to style your website, as well as images that you would like to use in your Course Website. Now its time start using elements, attributes, classes, IDs, and all the other aspects of HTML and CSS to start building your website!

If you are unsure of which HTML/CSS commands to use, check out the [HTML Cheat Sheet](http://www.simplehtmlguide.com/cheatsheet.php) and the [CSS Cheat Sheet](https://courses.cs.washington.edu/courses/cse154/15sp/cheat-sheets/css-cheat-sheet.pdf), which provides a quick reference guide.


## Discussion Questions

1. In this workshop, we focused on the fundamentals of HTML and CSS. The point was to provide an introduction to the workings of websites. In practice, however, the websites that we desire to build will have complex use cases. What are some websites that you imagine building? What kinds of interactive features would you like to have in your website?

2. Some websites provide information clearly and in an engaging manner. Others might inundate with a barrage of content that leaves one mystified. What would you say are some of the characteristics of well-designed websites? Which websites do you consider a joy to use? What design elements (such as font, color, layout, and menus) stand out to you as being particularly important in making good websites?
