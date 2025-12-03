---
title: 'Text Analysis Workshop'
description: 'Analyzing textual data opens a new way to interrogate the world. Put simply, it is a way to "read" and interpret the incredible amount of text generated past and present. This workshop will introduce techniques that can help you get a handle on textual data, turn qualitative texts into quantitative objects. We will be using the Natural Language Toolkit (NLTK) package in Python and thinking through how to clean data and start using our analytical muscles to conceptualize and operationalize this textual data.'
cover_image: '/images/workshops/img7.jpg'
editor_tabs:
    - python
    - jupyter

learning objectives:
    - Expand data manipulation possibilities beyond quantitative data
    - Experiment and play with data, this time with canonical or well-established data, helping us understand the conceptualization and operationalization steps of analysis.
    - Use and examine NLTK as a package, which presents an opportunity to look under the hood.
    - Prepare texts for computational analysis, using stemmers and lemmatizers, and stop words removal

estimated time:
    - 2 hours

dependencies:
    workshop prerequisites:
        python:
            description: (required) This workshop relies heavily on concepts from previous Python workshops, and having a basic understanding of how to use the commands discussed in this workshop serves as a foundation for conducting text analysis.
            required: true
        command-line:
            description: (recommended) This workshop makes some reference to concepts from the Command Line workshop, and having basic knowledge about how to use the command line will be central for anyone who wants to learn about text analysis with Python and NLTK.
            recommended: true
    installations:
        pythonguide: 
            description: (Required) You can use any installation of Python (but make sure it is of version 3). For our purposes, Anaconda will provide everything necessary for all the workshops that are part of the DHRI curriculum.
            required: true
        nltk:
            description: (required) You will need to install the NLTK package into your Python packages for the purposes of this workshop. This guide will help you along the way.
            required: true
    insights:
        jupyter-notebooks:
            description: (recommended) This workshop uses Jupyter Notebooks to process the Python commands in a clear and visual way. Anyone who wants to follow along in the workshop on text analysis with Python and NLTK should read this very short introduction to how to use Notebooks.

readings:
    - "[A Beginner’s Tutorial to Jupyter Notebooks](https://towardsdatascience.com/a-beginners-tutorial-to-jupyter-notebooks-1b2f8705888a)"
    - "[What is text analysis](https://www.scribbr.com/methodology/textual-analysis/)"

projects:
    - "[Short list of academic Text & Data mining projects](https://libguides.bc.edu/textdatamining/projects)"
    - "[Building a Simple Chatbot from Scratch in Python](https://github.com/parulnith/Building-a-Simple-Chatbot-in-Python-using-NLTK)"
    - "[Classifying personality type by social media posts](https://github.com/TGDivy/MBTI-Personality-Classifier)"

ethical considerations:
    - In working with massive amounts of text, it is natural to lose the original context. We must be aware of that and be careful when analyzing it.
    - It is important to constantly question our assumptions and the indexes we are using. Numbers and graphs do not tell the story, our analysis does. We must be careful not to draw hasty and simplistic conclusions for things that are complex. Just because we found out that author A uses more unique words than author B, does it mean that A is a better writer than B?

resources:
    - "[Jupyter Notebook shortcuts, tips and tricks](http://maxmelnick.com/2016/04/19/python-beginner-tips-and-tricks.html)"
---

# Text as Data

When we think of "research data," we often think of numbers, things that can be summarized, statisticized, summed/subtracted, multiplied/divided, and charted. 

In _Data Ethics_, we covered what data is, which can include text. Whether it's 'Moby Dick,' every romance novel written since 1750, or today's newspaper or Twitter feed, we can transform both written and spoken language into data that can be quantified and visualized.

This workshop approaches text analysis similar to introductions to quantitative analysis, starting with text analysis equivalents of the basics like mean, median, and mode. 

 * What are basic ways to think about text as data?
 * How do we get text ready to be analyzed?
 * What can we learn from the text computationally? 

 The following button will load a JupyterLite notebook with necessary code for the workshop.
 
::jupyter{ipynb="https://raw.githubusercontent.com/GC-DRI/DRI24/main/uploads/text-analysis/TextAnalysis.ipynb"}


## Corpora

:::info
A corpus is, simply put, a text under study or a set of texts to study (the plural is corpora) [Source](https://libguides.tulane.edu/text_analysis/corpora)
:::

That is, *any* collection of texts that are somehow related to each other. 

In your own research, as we’ve learned in the Data Ethics, the relationship between corpus selection and research question is iterative. 

However, in this workshop, we will set aside the larger theoretical questions regarding corpus selection and focus on demonstrating the basics using a commonly used, publicly available set of texts for our corpus.

There are infinitely many corpora, and, sometimes, you will want to make your own—that is, one that best fits your research question.

<p style="text-align: center;">What’s an example of textual corpora in your field of research?
</p>

## A Note About Languages

Languages are inherently social, fraught with the power dynamics inherent in any social phenomenon. No citation needed, just the whole body of post-structuralist scholarship. 

Many existing tools for textual analysis, including the NLTK package used in this workshop, support many other languages, due to amazing contributions from the Python Text Analysis community. The support, however, varies according to the desired task. Not all functions and tools will be available for all the supported languages. The good news is that the available tools keep growing in quantity and quality.

:::info
**Fun fact**: What five languages most frequently used for web content as of 2023, by share of websites [(Source)](https://www.statista.com/statistics/262946/most-common-languages-on-the-internet/)?

* English at 58.8%
* Russian at 5.3%
* Spanish at 4.3 %
* French at 3.7%
* German at 3.7%
:::


<p style="text-align: center;">Is this surprising?
</p>


## Evaluation

Which of the following could be considered a corpus?

:::quiz
- My 2-year-old nephew’s random keyboard mashings
- Your grocery list for this past week
- All of our grocery lists from this past week *
- Your grocery lists from 2013-2023 *
- Random sample of tweets containing #blessed *
:::

## Keywords

Do you remember the glossary terms from this section? 

- [NLTK](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/nltk.md)
- **Libraries** are sets of instructions that Python can use to perform specialized functions. The Natural Language ToolKit (`nltk`) is one such library. As the name suggests, its focus is on language processing.


# Using the NLTK Corpus

In the following sections, we will learn how to work with texts that come with the NLTK package and go through a series of built-in methods in NLTK that enable us to convert our words into numbers and create visualizations. 

The Python we will be learning builds on the foundations from Intro to Python and the Pandas workshop.

## Getting Started

Start with a new JupyterLite file.

**Reviewing JupyterLite**

*Edit Mode* - to edit code, <kbd>Enter</kbd> any cell

*Command Mode* - to edit the notebook (move up and down cells, etc), <kbd>Escape</kbd> on any cell

When in *Command Mode*
 * Add new cells with <kbd>A</kbd>
 * Delete cells with <kbd>D</kbd>

Run code in cell with (<kbd>shift</kbd> + <kbd>enter</kbd>).

:::info
If you don't see an error when you run the notebook—that is, if there is no output—you can move on to the next step. It is not rare in programming that when you do things right, the result will be nothing happening. This is what we like to call a _silent success_.
:::

JupyterLite print outputs/returns without the `print` function, but it will only print one thing per cell (the last output/return). Some times we want to print more than one thing so we should specify `print`. 


## Loading Corpus

First lines of code - import `NLTK` library and the patch for running external (HTTP) links in our JupyterLite, `pyodide_http`. 

```
import nltk
import pyodide_http
pyodide_http.patch_all()
```

We will also need the `wordcloud`, `matplotlib`, and `tkinter` libraries for data visualization, so let's import them now:

Because of a quirk of Jupyter notebooks, we need to specify that `matplotlib` should display its graphs in the notebook (as opposed to in a separate window), so we type this command (this is technically a Jupyter command, not Python):


```
from wordcloud import WordCloud
import matplotlib.pyplot as plt
%matplotlib inline
%pip install tk
import tk
```
Next, we need to load all of the NLTK corpora into our program. `all-corpora` will download every resource within NLTK (a bit of an overkill) but interesting to see. Takes a couple minutes to load.  

```
nltk.download('all-corpora')
```

OR you can copy and paste the following for just the resources we need in this workshop.

```
nltk.download('genesis')
nltk.download('gutenberg')
nltk.download('inaugural')
nltk.download('nps_chat')
nltk.download('treebank')
nltk.download('webtext')
nltk.download('wordnet')
nltk.download('stopwords')

```
The pre-loaded NLTK texts are preformatted data sets. 

Where do we find more information about this package? [NLTK Documentation] (https://www.nltk.org/)

Here, we are importing just the books from NLTK:

```
from nltk.book import *
```

Notice that each of the texts already have a variable name. _Moby Dick_ is `text1`, _Sense and Sensibility_ is `text2`, and so on. When we want to work with those books, we will call them by their variable name, as you'll see soon.

## Explore
Let's pick one of these books for exploration...

```python 
text3
```
What is this object? 

How can we poke at this thing? What commands from previous workshops can we use?

```python
type(text3)
```
Huh that's interesting, what does that mean? 

These text objects are a special type of python object specific to NLTK (it isn't a string, list, or dictionary). 

At the end of this workshop, we will make our own corpus, which will demonstrate how "processed" this NLTK text object is.

Let's check out what is in the object. Let’s look at the first 10 elements in this object...

```python
text3[0:10]
```

Pop quiz: 

1. This may be the most famous <u> number of words </u>  in the Western canon. 

:::secret
10! Get the elements from position 0 to position 10 (not included)
:::

2. As far as we can tell, is this text structured...?

*Recall the Data Ethics workshop section on structured data.*

:::secret
No, it is not organized or structured in a well-defined way or according to any rules. It appears to be just a list of all the words in the book. The text is not arranged in rows or columns, for example.
:::

**What's Next?**

So what we'll be doing the rest of the workshop is to whittle down this text to a smaller list of words, a "more meaningful" list of words. 

:::info
If you got any error messages, check the code and make sure you typed everything correctly. Even spaces before words matter!
:::

## Keywords

Do you remember the glossary terms from this section?

- [Corpus](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/corpus.md)
- [Library](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/library.md)
- [Matplotlib](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/matplotlib.md)

# Conceptualization

Pick a text, text1 through text9, and think about its topic. 

Some of these texts, such as the _Book of Genesis_ or a collection of _Inaugural Addresses of US Presidents_, come with preconceived notions. These notions are often shaped by cultural, societal, and popular perceptions and references.

In our own research, these preconceived notions constitute **theory**. 

:::info
Based on THEORY, what can we expect from a dataset about ice cream consumption and temperature? I'm trying to think of the least controversial question possible.
:::

The conceptualization stage of research is *defining* the concept of our research question.
 
Key Question: "Who are the domain experts, and how have they approached the topic? We are looking for a definition of the concept that is flexible enough to apply on our dataset, yet formal enough for computational research.
[Source](https://www.frontiersin.org/articles/10.3389/frai.2020.00062/full)

Example: Suppose we want to examine the concept of patriotism in the Inaugural Addresses corpus. We find that political theorist, Maurizio Viroli, defines the "language of patriotism" as "been used over the centuries to strengthen or invoke love of political institutions and the way of life that sustains the common liberty of a people, that is love of the republic." [Source](https://academic.oup.com/book/12461)

# Searching for the Words

What should we do with this definition of patriotism?

The first function we will look at is `concordance`. "Concordance" in this context means the characters on either side of the word. 

Our text is behaving like one giant string, so concordance will just count the number of characters on either side. By default, this is 25 characters on either side of our target word (including spaces), but [you can change that if you want](http://www.nltk.org/_modules/nltk/text.html#Text.concordance).

In the next JupyterLite cell, try:

```python
text4.concordance("love")
```

The output shows us the 25 characters on either side of the word "love" in _Inaugural Addresses of US Presidents_. Let's try this with another word, "patriotism." Just replace the word "love" with "patriotism," and we get the contexts in which Presidents uses "patriotism" in their speeches.

Our question maybe, is the way "love" is used similar to how "patriotism" is used?

Let's now see whether "love" and "patriotism" share similar neighbor words. NLTK has a built-in function for this as well: `similar`.

```python
text4.similar("love")
```
How does this work? similar("love") returns a list of other words that appear in similar contexts as "love," the same context being the words on either side of this target word. 

```python
text4.similar("patriotism")
```

:::secret
They actually don't share the same contexts - "patriotism" does not show up on the list of similar words for "love". But "people", "government", "confidence", "freedom" showed up on both lists. Perhaps this is how patriotism relates to love -- through these concepts.
:::

## Operationalization

After conceptualization, we measure for these concepts: reach for the empirical. 

"Choices made during this phase are always tied to the question “Are we
measuring what we intend to measure?” Does our operationalization match
our conceptual definition? To ensure validity we must recognize gaps between
what is important and what is easy to measure." [Source](https://www.frontiersin.org/articles/10.3389/frai.2020.00062/full)

As good researchers, we know that we must make a strong theoretical and empirical case for why what we're measuring reflects our concept. 

"When a measure becomes a target, it ceases to be a good measure" - [Goodhart's law](https://arxiv.org/pdf/1803.04585.pdf)

:::info
Maybe paying per captured cobra head isn't the best way to incentivize eradication of cobras?
:::
<!-- this doesn't make any sense-->

## Evaluation

Which one of the following sentences is correct?

:::quiz
- The similar method brings a list of words that are similar in writing, but not necessarily in meaning, like "whale" and "while".
- Using the `concordance` method with a specific word, such as "whale", returns the words that surround "whale" in different sentences, helping us to get a glimpse of the contexts in which the word "whale" shows up.*
:::

## Keywords

Do you remember the glossary terms from this section?

- [Concordance](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/concordance.md)


# Positioning Words

In many ways, `concordance` and `similar` are heightened word searches that tell us something about what is happening near the target words. 

Another metric we can use is to visualize where the words appear in the text. In the case of _Moby Dick_, we want to compare where "whale" and "monster" appear throughout the text. In this case, the text is functioning as a list of words, and will make a mark where each word appears, offset from the first word. We will _pass_ this _function_ a _list_ of _strings_ to plot. In the next cell, type:

```python
text1.dispersion_plot(["whale", "monster"])
```

A graph should appear with a tick mark everywhere that "whale" appears and everywhere that "monster" appears. Knowing the story, we can interpret this graph and align it to what we know of how the narrative progresses, helping us develop a visual of the story — where the whale goes from being a whale to being a monster to being a whale again. If we did not know the story, this could give us hints of the narrative arc.

```python
text2.dispersion_plot(["Brandon","Elinor","Lucy","Edward","Marianne","Margaret"])
```

Looking at the resulting visualization, who is the main character?

Why might a tool like this be useful? A graph should appear with a tick mark everywhere each “character name” appears. Without having even read the book of _Sense and Sensibility_, we might be able to guess the narrative, maybe even relationships between characters, helping us develop a visual of the story.

## Challenge

Pick another text with a few words you want to compare. You can compare an unlimited number, but it's easier to read a few at a time. 

:::info
Note that the comma in our writing here is _inside_ the quotation mark, because that is how proper English grammar works. However, in Python, you would have to put commas _outside_ of the quotation marks to create a _list_.
:::

## Solution

Examples:

```python
text2.dispersion_plot(["love", "marriage"])
```

```python
text2.dispersion_plot(["husband", "wife"])
```

## Evaluation

Check all sentences below that are correct:

:::quiz
- You can get a visual representation of occurrences of a word with the `dispersion_plot` method.*
- The `dispersion_plot` method allows you to input a list of strings, as long as you split them with commas.*
- Contrary to grammatical rules, in a list of strings, the commas must come outside of the quotation marks.*
:::

# Types vs. Tokens

**Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo**

How many words are there in this sentence?

Depends on whether you are asking whether words refers to tokens or types.

A word "token" is a particular appearance of a given word in a text, there are 8 instances of the word b/Buffalo. 

A word "type" is the unique form of the word as a particular sequence of letters, which there are 2, "Buffalo" and "buffalo." 

This terminology is important to understand how we cutting down our list to be more meaningful.

How many words are in Moby Dick?

```python
len(text1)
```

Let's find out how many times a given word appears in the corpus. In this case (and all cases going forward), our text will be treated as a list of words, using ‘count’ function. 



```python
text1.count("whale")
```

We see that "whale" occurs 906 times.

How about “Whale”?

```python
text1.count("Whale")
```
How about “WHALE”?

```python
text1.count("WHALE")
```

What is clear here is that the `count` method is case-sensitive.

Three types for the word whale:

| Type  | # of Tokens |
| ----- |:------:|
| whale | 906|
| Whale | 282|
| WHALE | 38 |


But what do we need to do to the corpus so that all of the types of “whale” get treated the same way? 

:::secret
Make a list of all the words lowercase!

Bonus: That also means removing non-words (i.e. punctuation)
:::

Why would we want each type to be treated the same way?

## Make a list of all the words lowercase!

Just like in cooking, let’s think about what we know and gather our ingredients to achieve our recipe: “Make a list of all the words lowercase”

[Mise en place](https://www.escoffier.edu/blog/culinary-arts/what-is-mise-en-place-and-why-is-it-so-important-to-chefs/)

 * Python has a built-in function, `isalpha()` that will allow us know (**True or False**) if a string object contains only alphabetic characters
 * Python has a built-in function, `lower()` that takes a character string and converts all the letters to lower case
 * Lastly, we have our original corpus object, text1 but performing any operation on the original would be irreversible

**Practice**

```python
string = "ELI5"
print(string.isalpha())
print(string.lower())

```

Let’s think through what we can do with these three ingredients to make a list of all the words lowercase:

What do we need the code to do? 

:::secret
>>Create new list.

>>In each element (in our case, it is each word) of the original corpus object, we ask, **True or False**,
 * If **True**, we want to convert it to lower case
 * If **False**, ignore it

>>Take this new lower case object and add it to our list
:::

Python Code version

:::secret
```
text1_tokens = []
for t in text1:
	if t.isalpha():
    	t = t.lower()
    	text1_tokens.append(t)
```
:::


If everything went right, you should get no output: 

_jazz hands_

Silent success! 

_jazz hands_

You just wrote your first for-loop!

## Make a list of all the words lowercase with ONE LINE OF CODE


Another way to perform the same action more succinctly is to use what's called a [list comprehension](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions). 

A list comprehension is a shorter, faster way to write a for-loop. It is syntactically a little more difficult to read (for a human), but, in this case, it's much faster to process.

```
text1_tokens_LC = [t.lower() for t in text1 if t.isalpha()]
```

Let's check if they are the same...

```
text1_tokens == text1_tokens_LC 
```

## Take a Breath

Let's take a breath, because this was a difficulty spike. For loops are weird and not super intuitive. It usually takes some time for us to get used to them.

I suggest going back to the loop above, review it, try to understand why all indentations are where they are.

Feel like you understand it? Try deleting it and writing the loop yourself without looking at this guide.

Play around! What happens if we got rid of the if statement? What happens when you change the order of the commands? How about the indentation? Don't be afraid to break it.

If you feel like you are done playing with the loop, time to move to the next section to see the results.

## Evaluation

Check all sentences below that are correct:

:::quiz
- "Whale", "WHALE", and "whale" are all different tokens of the same type.
- The `lower()` method returns the lowercase form of all of the alphabetical characters in a string.*
- The `isalpha()` method transforms integers in alphabetical strings.
- The `append()` method adds an item to the end of the list.*
:::


## Keywords

Do you remember the glossary terms from this section?

- [Token](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/token.md)
- [Tokenizing](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/tokenizing.md)
- [Type](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/type.md)

# Length and Unique Words

Great! Now `text1_tokens` is a list of all of the tokens in our corpus, with the punctuation removed, and all the words in lowercase. Let's check it:

```python
text1_tokens.count("whale")
```
And now we have 1226 tokens for "whale", which is the exact sum of the counts we did before. 

All the instances of "Whale", "whale", "WHALE" are now just "whale".
```python
text1_tokens.count("Whale")
```
```python
text1_tokens.count("WHALE")
```

Now we want to know how many words there are in our corpus—that is, how many tokens in total. 

Therefore, we can ask, "What is the length of that list of words?" Python has a built-in `len` function that allows you to find out the length of different types of objects. 

 * Pass it a list, and it will tell you how many items are in the list
 * Pass it a string, and it will tell you how many characters are in the string
 * Pass it a dictionary, and it will tell you how many items are in the dictionary. 

How does the length of text1_tokens compare to original text1 object?

```
len(text1)
len(text1_tokens)
```
From our list of tokens, how do we get a list of the types? AKA how do we want a list of unique words? 

Why would that be analytically important?

In order to get unique words, rather than just all words in general, we will make a **set** from the list. A `set` in Python works just like it would [in math](https://en.wikipedia.org/wiki/Set_(mathematics)), it's all the unique values, with any duplicate items removed.

```python
list_example = [2,3,4,12,3,12,3,1,32]
```

What should expect from set(list_example)?

:::secret
32, 1, 2, 3, 4, 12
:::

So let's find out the length of our set. just like in math, we can also nest our functions. So, rather than saying `x = set(text1_tokens)` and then finding the length of "x", we can do it all in one step.

How do we do that? 

:::secret
```python
len(set(text1_tokens))
```
:::


# Lexical Density

Now we can calculate the **lexical density**, the number of unique words per total words. [Statistical studies](https://pdfs.semanticscholar.org/c2a8/56959d7f5880c98ccd4cfeb4b4f5b7133ec7.pdf) have shown that lexical density is a good metric to approximate lexical diversity—the range of vocabulary an author uses. This by no means suggests more or less sophistication.

Gertrude Stein's "A rose is a rose is a rose is a rose" would be rendered meaningless otherwise.  

Or the book Jack Nicholson was writing in _The Shining_? "All work and no play, makes Jack a dull boy," typed out into haunted eternity? It would be less scary if there was only one sentence...

For our first pass at lexical density, we will simply divide the number of unique words by the total number of words:

```python
len(set(text1_tokens)) / len(text1_tokens)
```
## Challenge

Let's compare the lexical density of _Moby Dick_ with _Sense and Sensibility_. Make sure to:

1. Make all the words lowercase and remove punctuation.
2. Make a slice of the first 10,000 words.
3. Calculate lexical density by dividing the length of the set of the slice by the length of the slice.

Remember to be aware of the ethical implications for the conclusions that we might draw about our data. What assumptions might we be reifying about these writers?

## Solution

```python
text2_tokens = []
for t in text2:
	if t.isalpha():
    	t = t.lower()
    	text2_tokens.append(t)

text2_slice = text2_tokens[0:10000]

len(set(text2_slice)) / len(text2_slice)
```

## Evaluation

Check all sentences below that are correct:

:::quiz
- The `len` method returns the length of the input, which can mean different things depending on its type. If it is a string, it will return the number of characters; if it is a list or dictionary, it will return the number of items.*
- The lexical density measures the number of unique words per total word, and it is an objective measure of writing quality.
- Comparing the lexical density between texts of different sizes can give a problematic result. A possible solution is to use list slice and compare parts of both texts of a similar size.*
:::





# Cleaning and Normalizing

Once we have a corpus—whether that is one text or millions—we usually want to clean and normalize it. 

There are three terms we are going to need:

- **Text normalization** is the process of taking a list of words and transforming it into a more uniform sequence. Usually, this involves removing punctuation, making the words all the same case, removing _stop words_, and either _stemming_ or _lemmatizing_ the words. It can also include expanding abbreviations or matching misspellings (but these are advanced practices that we will not cover).

You probably know what removing punctuation and capitalization refer to, but the other terms may be new:

- **Stop words** are words that appear frequently in a language, often adding grammatical structure, but little semantic content. There is no official list of stop words for any language, though there are some common, all-purpose lists built in to NLTK. However, different tasks require different lists. The purpose of removing stop words is to remove words that are so common that their meaning is diminished across a large number of texts.

- **Stemming and lemmatizing** both of these processes try to consolidate words like "laughs" and "laughing" to  "laugh" since they all mean essentially the same thing, they are just inflected differently. So again, in an attempt to reduce the number of words, and get a realistic understanding of the meaning of a text, these words are collapsed. Stemming does this by cutting off the end (very fast), lemmatizing does this by looking up the dictionary form (very slow).

Language is messy, and created for and by people, not computers. There is a lot of grammatical information in a sentence that a computer cannot use. For example, I could say to you:

> The house is burning.

and you would understand me. You would also understand if I say

> house burn.

The first has more information about tense, and which house in particular, but the sentiment is the same either way.

What's happening between "the house is burning" and "house burn"

We removed the stop words (_the_ and _is_), and removed punctuation and case, and simplified what was left (_burning_ becomes _burn_). 

This results in what is essentially a "bag of words," or a corpus of words without grammar. 

Because normalizing your text reduces the number of words (and therefore the number of dimensions in your data), and keeps only the words that contribute meaning to the document, this cleaning is usually desirable.

There is "clean" and "dirty" versions of text data. Sometimes our questions are about the clean data, but sometimes our questions are in the "dirt."


## A Note on Ethics

The act of cleaning/normalizing subscribes text to predetermined categories of meaning, forcing meaning into existing "boxes," so to speak. This doesn't mean that we should avoid cleaning or normalizing text, but that we should be aware of how some textual reductions have the potential to affect meaning. How does quantification reinforce differences or stratifications within our data? We have to be careful about the kinds of questions we are asking, and how we might be reproducing some of our assumptions in our inquiry.

To read more about ethics and text analysis, see Lauren Klein's "[Distant Reading After Moretti](https://arcade.stanford.edu/blogs/distant-reading-after-moretti)," where she questions, "Instead of first asking what can be modeled—what phenomena we can track at scale—we might instead ask: what might be hidden in this corpus?”

## Evaluation

Which one of the following sentences is correct:

:::quiz
- Stop words are useless for text analysis, therefore the first step in any project is to remove them from the text.
- In any type of data analysis, we usually want to cleanse the data in order to prepare it for the analysis. In text analysis, this process is called "text normalization" and can involve tasks such as removing undesired words and punctuation.*
- Textual alterations can potentially change the original intended meaning. Therefore, we must always strive to work with the data exactly as it is in the source.
:::

## Keywords

Do you remember the glossary terms from this section?

- [Machine Learning](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/machine-learning.md)
- [Text Normalization](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/text-normalization.md)

# Word Cloud

Let's use another visual tool to see where we are in our data exploration process...a word cloud. It is a collection, or cluster, of words depicted in different sizes. The bigger and bolder the word appears, the more often it's mentioned within a text.

We are all familiar and we can use our list of tokens. Why would our list of unique words not be appropriate for a word cloud?

The following code is copied from the [Word Cloud Python Package documentation](https://amueller.github.io/word_cloud/auto_examples/simple.html#sphx-glr-auto-examples-simple-py). 

```python
text = text1_tokens
wordcloud = WordCloud().generate(text)
plt.imshow(wordcloud)
```

```python
text = str(text1_tokens)
wordcloud = WordCloud().generate(text)
plt.imshow(wordcloud)
```

Is this useful? What are all these words? Does this tell me anything about Moby Dick? 

No, we need to clean this text!

# Data Cleaning: Removing Stop Words

We've completed one out of three steps of data cleaning.

1. Remove capitalization and punctuation
2. Remove stop words.
3. Lemmatize (or stem) our words, i.e. "jumping" and "jumps" become "jump."

This next section, we will be cleaning our corpus by removing the stop words. In seeing getting the most frequent words, a lot of them were extremely common words, so we should get rid of them because they don't tell us anything meaningful about the text, very little semantic meaning and most often have grammatical functions. Usually, these are function words such as determiners, prepositions, auxiliaries, and others.

To use NLTK's stop words, we need to import the list of words from the corpus. 

```python
from nltk.corpus import stopwords
```

We need to specify the English list, and save it into its own variable that we can use in the next step:

```python
stops = stopwords.words('english')
```

Now let's take a look at those words:

```python
print(stops)
```

What's the logic we'll use to make a new list of the corpus without stop words?

:::secret
Start with a new empty list.

we have a list of words from our corpus, we also have a list of words (stopword) we don't want in our new list, to check if every element is in this stopword list. 

If the word is not in that list, we will append to our new list.
:::

Python Code Version

:::secret
```python
text1_stops = []
for t in text1_tokens:
	if t not in stops:
    	text1_stops.append(t)
```
:::

Now try it with the one-liner, AKA list comprehension

```python
text1_stops = [t for t in text1_tokens if t not in stops]
```

To check the result:

```python
print(text1_stops[:30])
```

## Verifying List Contents

Now that we removed our stop words, let's see how many words are left in our list:

```python
len(text1_stops)
```

## Revised Word Cloud

```python

text = str(text1_stops)
wordcloud = WordCloud().generate(text)
plt.imshow(wordcloud)

```

## How do we get rid of apostrophes? 

Googling for the answers to your coding questions is an essential part of being a coder. Let's try out how to google a problem: how to get rid of the apostrophes in our WordCloud?

Try googling: 
[Word Cloud python library displays apostrophes](https://www.google.com/search?q=Word+Cloud+python+library+displays+an+apostrophe)

:::secret
Google search results may vary but this is one I got in Jan. 2024:

[Word Cloud python library displays an apostrophe at the end of every word](https://stackoverflow.com/questions/59529467/word-cloud-python-library-displays-an-apostrophe-at-the-end-of-every-word)
:::

Direct Copy and Paste from Stack Overflow: 

```
string_text = ' '.join(tokenized_text)    
wordcloud = WordCloud(width=1600, height=800).generate(string_text)
```

How do we need to adapt it to our code with our variables?

```
string_text = ' '.join(text1_stops)    
wordcloud = WordCloud(width=1600, height=800).generate(string_text)
```

```
wordcloud = WordCloud().generate(string_text)
plt.imshow(wordcloud)
```


## Evaluation

Check all sentences below that are correct:

:::quiz
- Stop words are words that usually don't contribute with much semantic content, like prepositions, determiners, etc.*
- To use stop words we need to import them from the nltk corpus, using the following code: `import stopwords from nltk.corpus`
- List comprehensions are faster ways of iterating and creating lists when compared with for loops.*
:::

## Keywords

Do you remember the glossary terms from this section?

- [Stop Words](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/stop-words.md)

# Data Cleaning: Lemmatizing and Stemming Words

Now that we've removed the stop words from our corpus, the next step is to stem or lemmatize the remaining words. This means that we will strip off the grammatical structure from the words. For example, `cats ⭢ cat`, and `walked ⭢ walk`. This gets complicated, such as in the case of `men ⭢ man` and `sang ⭢ sing`. 

Lemmatization deals with this by looking up the word in a reference and finding the appropriate root. So I have to import this module.

NLTK comes with pre-built lemmatizers. The Porter is the most common Stemmer. 

We will use the WordNet Lemmatizer from the NLTK Stem library, so let's import both:

```python
from nltk.stem import WordNetLemmatizer
from nltk.stem import PorterStemmer
```

Because of the way that it is written "under the hood," an instance of the lemmatizer and stemmber needs to be called. We know this from reading [the docs](https://www.nltk.org/).

```python
wordnet_lemmatizer = WordNetLemmatizer()
porter_stemmer = PorterStemmer()

```
Let's compare stemming and lemmatizing

```python
print(wordnet_lemmatizer.lemmatize('berry'))
print(wordnet_lemmatizer.lemmatize('berries'))
print(porter_stemmer.stem('berry'))
print(porter_stemmer.stem('berries'))
```

Now try this one:

```python
wordnet_lemmatizer.lemmatize("better")
```

It didn't work, but...

```python
wordnet_lemmatizer.lemmatize("better", pos='a')
```

... sometimes we can get better results if we define a specific part of speech(pos). "a" is for "adjective", as we learned [here](http://www.nltk.org/_modules/nltk/corpus/reader/wordnet.html).

```python
print(wordnet_lemmatizer.lemmatize('abandon'))
print(wordnet_lemmatizer.lemmatize('abandoned'))
print(wordnet_lemmatizer.lemmatize('abandonly'))
print(wordnet_lemmatizer.lemmatize('abandonment'))
print(porter_stemmer.stem('abandon'))
print(porter_stemmer.stem('abandoned'))
print(porter_stemmer.stem('abandonedly'))
print(porter_stemmer.stem('abandonment'))
```
Still not perfect, but a bit better. So the question is, how to choose between stemming and lemmatizing? As many things in text analysis, that depends. The best way to go is experimenting, seeing the results and choosing the one that better fits your goals.

As a general rule, stemming is faster while lemmatizing is more accurate (but not always, as we just saw). There is a body of literature that discusses this [question](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html).

Now we will lemmatize and stem the words in one go:

```python
text1_clean = []
for t in text1_stops:
    t_stem = 
	t_lem = wordnet_lemmatizer.lemmatize(t)
	text1_clean.append(t_lem)
```

Maybe we stem THEN lemmatize...

```python
text1_clean_test = []
for t in text1_stops:
    t_lem = wordnet_lemmatizer.lemmatize(t)
    t_stem = porter_stemmer.stem(t_lem)
    text1_clean_test.append(t_stem)
```

How do these compare two compare?

```python
print(len(text1_clean))

print(len(text1_clean_test))
```
## Evaluation

How to write the previous two for-loops in list comprehension?


Lemmatize then stem:

:::secret
```python
text1_clean = [wordnet_lemmatizer.lemmatize(porter_stemmer.stem(t)) for t in text1_stops]
```
:::

Stem then lemmatize:

:::secret
```python
text1_clean_test = [porter_stemmer.stem(wordnet_lemmatizer.lemmatize(t)) for t in text1_stops]
```
:::


## Verifying Clean List Contents

Let's check now to see the length of our final, cleaned version of the data, and then check the unique set of words. 


```python
print(len(text1_clean))
print(len(set(text1_clean)))
```
If everything went right, you should have the same length as before, but a smaller number of unique words. That makes sense since we did not remove any word, we only changed some of them.

Now let's have a look at the words Melville uses in _Moby Dick_. We'd like to look at all of the _types_, but not necessarily all of the _tokens._ We will order this set so that it is in an order we can handle. In the next cell, type:

```python
sorted(set(text1_clean))[:30]
```

`sorted` combined with `set` should give us a list of all the unique words in _Moby Dick_ in alphabetical order, but we only want to see the first ones. Notice how there are some words we wouldn't have expected, such as 'abandon', and 'abandonedli'. This process is far from perfect, but it is useful. 

## Evaluation

Check all sentences below that are correct:

:::quiz
- Stemming and lemmatizing are different forms of reducing word variations to their roots.*
- `sorted(set(list_of_strings))` returns the unique items of `list_of_strings` in alphabetical order.*
:::

## Keywords

Do you remember the glossary terms from this section?

- [Lemmatization](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/lemmatization.md)
- [Lexical Density](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/lexical-density.md)
- [Stemming](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/stemming.md)


## Evaluation

Check all sentences below that are correct:

:::quiz
- Both Stemming and Lemmatizing are far from perfect, so they must be used with caution.*
- There is no obvious best choice between Stemmers and Lemmatizers, so the best way to go is experimenting and seeing what results better fit your goals.*
:::

# Data Cleaning: Results

Now that we've seen some of the differences between both, we will proceed using our lemmatized corpus, which we saved as `text1_clean`:

```python
my_dist = FreqDist(text1_clean)
```

If nothing happened, that is normal. Check to make sure it is there by calling for the type of the "my_dist" object.

```python
type(my_dist)
```

The result should say it is a nltk probability distribution (`nltk.probability.FreqDist`). It doesn't matter too much right now what that is, only that it worked. We can now plot this with `matplotlib`'s function called `plot`. We want to plot the first 20 entries of the `my_dist` object.

```python
my_dist.plot(20)
```

We've made a nice image here, but it might be easier to comprehend as a list. Because this is a special probability distribution object we can call the `most_common` on this, too. Let's find the twenty most common words:

```python
my_dist.most_common(20)
```



## Challenge

What about if we are interested in a list of specific words—perhaps to identify texts that have biblical references. Let's make a (short) list of words that might suggest a biblical reference and see if they appear in _Moby Dick_. Set this list equal to a variable:

```python
b_words = ['god', 'apostle', 'angel']
```

Then we will loop through the words in our cleaned corpus, and see if any of them are in our list of biblical words. We'll then save into another list just those words that appear in both.

:::secret
```python
my_list = []
for word in b_words:
	if word in text1_clean:
    	my_list.append(word)
	else:
    	pass
```
:::


And then we will print the results.

:::secret
```python
print(my_list)
```
:::

Now try with list comprehension

## Challenge Part 2

1. A solution using a list comprehension would look like this:

	```python
	my_list2 = [word for word in b_words if word in text1_clean]
	```

2. To compare the lists, you could run the following command:

	```python
	my_list == my_list2
	```

## Evaluation

Which one of the following sentences is correct:

- We can create a frequency distribution of a list of strings with `FreqDist` and plot it with the `plot` method.*
- `my_dist.most_common(50)` will check the first 50 words in the distribution and return you the most common one among them.

# Make Your Own Corpus

Now that we have seen and implemented a series of text analysis techniques, let's go to the Internet to find a new text. 

You could use something such as historic newspapers, or Supreme Court proceedings, or use any txt file on your computer. Here we will use [Project Gutenberg](http://www.gutenberg.org). 

Project Gutenberg is an archive of public domain written works, available in a wide variety of formats, including `.txt`. You can download these to your computer or access them via a url. We'll use the former in this example. We found _Don Quixote_ in the archive, and will work with that.

First, [open the link in your browser](http://www.gutenberg.org/files/996/996-0.txt) to see the text. Next, save the text to your computer. You can do this by right-clicking anywhere on the page and selecting "Save As." Save the file as `don-quixote.txt`.

Next, you'll want to upload the file to your Jupyter Notebook. You can do this by clicking on the "Upload" button in the Jupyter Notebook interface (it looks like a little arrow pointing up). You should see the file amidst your other files in the notebook directory.

Next, we will open the file and read its contents. We will use the `open` function to open the file, and the `read` method to read its contents. 

```python
file_path = 'don-quixote.txt'
with open(file_path, 'r', encoding='utf-8') as file:
    don = file.read()
```

Now we have the full text of _Don Quixote_ in the variable `don`.

Now let's check on what kind of object we have in the "don" variable. Type:

```python
type(don)
```
This should be a string. 

Great! We have just read in our first file.

# Make Your Own Corpus (continued)

Now we are going to transform that string into a text that we can perform NLTK functions on. Since we already imported nltk at the beginning of our program, we don't need to import it again, we can just use its functions by specifying `nltk` before the function. The first step is to tokenize the words, transforming the giant string into a list of words. A simple way to do this would be to split on spaces, and that would probably be fine, but we are going to use the NLTK tokenizer to ensure that edge cases are captured (i.e., "don't" is made into 2 words: "do" and "n't"). In the next cell, type:

```python
don_tokens = nltk.word_tokenize(don)
```

You can check out the type of `don_tokens` using the `type()` function to make sure it worked—it should be a list. Let's see how many words there are in our novel:

```python
len(don_tokens)
```

Since this is a list, we can look at any slice of it that we want. Let's inspect the first ten words:

```python
don_tokens[:10]
```

:::info
That looks like metadata—not what we want to analyze. We will strip this off before proceeding. If you were doing this to many texts, you would want to use [Regular Expressions](https://regexone.com/). Regular Expressions are an extremely powerful way to match text in a document.
:::

We are just using this text, so we could either guess, or cut and paste the text into a text reader and identify the position of the first content (i.e., how many words in is the first word). That is the route we are going to take. We found that the content begins at word 320, so let's make a slice of the text from word position 320 to the end.

```python
dq_text = don_tokens[320:]
```

Now print the first 30 words to see if it worked:

```python
print(dq_text[:30])
```

Finally, if we want to use the NLTK specific functions:

- `concordance`
- `similar`
- `dispersion_plot`
- or others from the [NLTK book](https://www.nltk.org/book/)

```python
dq_text.similar("WINDMILLS")
```
Did that work?

:::secret
```python
dq_nltk_text = nltk.Text(dq_text)
```

We would have to make a specific NLTK `Text` object.
:::

How do we check if that worked?

:::secret
```python
type(dq_nltk_text)
dq_nltk_text.similar("WINDMILLS")
```
:::

But if we only need to use the built-in Python functions, we can just stick with our list of words in `dq_text`.

## Challenge

Using the `dq_text` variable:

- Remove the stop words
- Remove punctuation
- Remove capitalization
- Lemmatize the words

If you want to spice your challenge up, do the first three operations _in a single if statement_. Google "python nested if statements" for examples.

## Solution

1. Lowercase, remove punctuation and stop words:

	```python
	dq_clean = []
	for word in dq_text:
    	if word.isalpha():
        	if word.lower() not in stops:
            	dq_clean.append(word.lower())
	print(dq_clean[:50])
	```

2. Lemmatize:

	```python
	from nltk.stem import WordNetLemmatizer
	wordnet_lemmatizer = WordNetLemmatizer()

	dq_lemmatized = []
	for t in dq_clean:
    	dq_lemmatized.append(wordnet_lemmatizer.lemmatize(t))
	```

## Evaluation

Check all sentences below that are correct:

:::quiz
- To use NLTK functions on a string, we can transform it into a NLTK Text object.*
- NLTK let's you tokenize (split) a giant string into a list of substrings, considering punctuations and edge cases like `don't`.*
:::

## Keywords

Do you remember the glossary terms from this section?

- [Metadata](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/metadata.md)
- [Regular Expressions](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/regular-expressions.md)

