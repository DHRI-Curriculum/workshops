---
title: 'Data Literacies'
cover title: Data Literacies
description: 'What is data? What counts as data? What are the ethical implications when working with data? How can we manage our data? These are questions we will explore throughout the workshop. Data is foundational to nearly all digital projects and often help us to understand and express our ideas and narratives. Hence, in order to do digital work, we should know how data is captured, constructed, and manipulated. We will also engage with the ethical dimensions of what it means to work with data, from collection to visualization to management.'

learning objectives:
    - Define data in the context of digital research
    - Distinguish forms of data and data formats
    - Review the stages of data from collection to analysis
    - Differentiate institutional ethical requirements and situated ethical responsibilities 
    - Use the “impact approach” to evaluate the possible effects of different decisions made by the researchers in the different stages on data
    - Apply data management practices to store and manage data

estimated time:
    - 2 - 3 hours

prerequisites: 
    - Command Line:
        description: (required) This workshop makes reference to concepts from the Command Line workshop, and having some knowledge about how to use the command line will be central for anyone who wants to learn about how to handle and process data and data analysis.

instructors: 
    - 'Tuka Al-Sahlani'
    
authors:
    - 'Leanne Fan'
    - 'Di Yoong'
    - 'Stephen Zweibel'
    - 'Kelsey Chatlosh' 
    
editors:
    - 'Patrick Sweeney'
    - 'Patrick Smyth' 
    - 'Lisa Rhody' 

before getting started:
    - "[Download the workshop dataset](https://raw.githubusercontent.com/DHRI-Curriculum/data-literacies/v2.0/files/moSmall.csv) (required) The dataset, `moSmall.csv`, will be used throughout the challenges in the workshop. To save the file to your local computer, right click on the _Download the workshop dataset_ link and choose `Save Link As...`. Note: It is important to make sure your file is saved as a `.csv` file. Original dataset taken from [The Metropolitan Museum of Art's Creative Commons Zero](https://github.com/metmuseum/openaccess). "
    
readings:
    - "In [Big? Smart? Clean? Messy? Data in the Humanities](http://journalofdigitalhumanities.org/2-3/big-smart-clean-messy-data-in-the-humanities/), Christof Schöch discusses what data means in the humanities and the necessity of 'smart big data.'"
    - "The book, [Bit By Bit: Social Research in the Digital Age](https://www.bitbybitbook.com/en/1st-ed/preface/), written by Matthew Salganik, approaches data and social research from a computational social science perspective. He also discusses the idea of 'readymade' and 'custommade' data alongside ethics."
    - "[Ten Simple Rules for Responsible Big Data Research](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5373508/) explores some guidelines for addressing complex ethical issues that arise in any research project."
    - "In [The Challenges and Possibilities of Social Media Data: New Directions in Literary Studies and the Digital Humanities](https://dhdebates.gc.cuny.edu/read/debates-in-the-digital-humanities-2023/section/a57b98ab-0f10-45d0-b205-3e563aab7ea8), Melania Walsh advises researchers to think beyond the IRB and consider 'community engagement, citation, and data sharing' for ethically responsible digital research."
    - "In the article ['Data Colonialism: Rethinking Big Data’s Relation to the Contemporary Subject'](https://journals.sagepub.com/doi/abs/10.1177/1527476418796632?journalCode=tvna) Nick Couldry and  Ulises A. Mejias argue that our relationship with data is a new form of colonialism where the 'exploitation of human beings through data' is akin to historical colonialism. You may access the full version through your university's library system."

projects:
    - "The [Data for Public Good](https://dataforgood.commons.gc.cuny.edu/) is a semester-long collaborative project led by CUNY graduate students. Each semester, a different public-interest dataset is explored to present information that is useful and informative to a public audience."
    - "[SAFElab](https://www.asc.upenn.edu/research/centers/safe-lab) led by Dr. Desmond U. Patton, uses computational and social work approaches to understand the mechanisms of violence and work on prevention and intervention in violence that occur in neighborhoods and on social media."

ethical considerations:
    - Data and data analysis is [not free from bias](https://medium.com/@angebassa/data-alone-isnt-ground-truth-9e733079dfd4). There is no magic blackbox for which data emerges from and is contextually driven. As we think about the automation process of looking at "big" data, we have to be aware of [the biases that gets reproduced that is "hidden."](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
    - De-identified information can be [reconstructed from piecemeal data](https://techscience.org/a/2015092903/) found across different sources. When we consider what we are doing with the data we have collected, we also need to think about the possible re-identification of our participants. 
    - Consider how you may use [differential privacy](https://theconversation.com/explainer-what-is-differential-privacy-and-how-can-it-protect-your-data-90686) as a strategy against re-identification. Consider the [US Census 2020 example](https://www.ncsl.org/research/redistricting/differential-privacy-for-census-data-explained.aspx) on utilizing this strategy to address privacy concerns.
    - Big data projects oftentimes require sharing data sets across different individuals and teams. In addition, we need to ensure that our work is reproducible and accountable, we may also feel inclined to share the data collected. As such, figuring out [how to share such data](https://techscience.org/a/2015101601/) is crucial in the project planning stage.

additional datasets:
    - "[National Science Foundation's open datasets](https://catalog.data.gov/organization/nsf-gov)"
    - "[Resources to Find the Data You Need (2016)](https://flowingdata.com/2016/11/10/find-the-data-you-need-2016-edition/)"
    - "[Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets)"
---

# Data is Foundational

In this workshop we will be discussing the basics of research data in terms of material, transformation, and presentation. We will also be discussing the ethical issues that arise in data collection, cleaning, and representation. Because everyone has a different approach and understanding to data and ethics, this workshop will also include multiple sites for discussions to help us think through what data literacies mean within our projects and broader applications.

## What Constitutes Research Data?

These quotes below offers **a variety of perspectives** to understand research data across different stakeholders. The inclusion of these different approaches to research data is to suggest that there is no singular, definitive approach, and is dependent on multiple factors, including your project considerations.

*University*

Material or information on which an argument, theory, test or hypothesis, or another research output is based.

>>— [Queensland University of Technology. Manual of Procedures and Policies. Section 2.8.3.](http://www.mopp.qut.edu.au/D/D_02_08.jsp)


*Digital Project Management*

What constitutes such data will be determined by the community of interest through the process of peer review and program management. This may include, but is not limited to: data, publications, samples, physical collections, software and models.

>>— [Marieke Guy](http://www.slideshare.net/MariekeGuy/bridging-the-gap-between-researchers-and-research-data-management)


*Government Institution*

Research data is defined as the recorded factual material commonly accepted in the scientific community as necessary to validate research findings, but not any of the following: preliminary analyses, drafts of scientific papers, plans for future research, peer reviews, or communications with colleagues.

>>— [OMB-110, Subpart C, section 36, (d) (i)](https://www.whitehouse.gov/wp-content/uploads/2017/11/Circular-110.pdf)

*Data Science*

The short answer is that we can’t always trust empirical measures at face value: data is always biased, measurements always contain errors, systems always have confounders, and people always make assumptions

>>— [Angela Bassa](https://medium.com/@angebassa/data-alone-isnt-ground-truth-9e733079dfd4)


Broadly, research data can be understood as **materials or information necessary to come to your conclusion** but what these materials and information is depends on your project.

<!--## Being Data

Data exists in different forms and goes through a series of stages. It can be in any of these forms, or types/methods of storing gathered data, at different stages of manipulation by a researcher to take the data from information to conclusion.

Here you will find the terms we will use throughout the workshop for the stages of data and the terms for the forms of data.

![Table of the Stage of Data and Form of Data. Stages of data are raw, cleaned, processed, analyzed, and visualized. Forms of data are textual, numeric, audio, video, image, and code.](/images/data-ethics/being-data.gif) -->

<!-- make below page a gif form vs format-->

## Forms of Data 

There are many ways to represent data, just as there are many sources of data. What can you/do you count as data? Here's a small list of possibilities of collections of digital objects acquired and generated during research.

<br />
<table>
    <caption><strong>A small list of open multimedia formats (more information of each file format is linked in their entries):</strong></caption>
    <tr>
        <th>Form</th>
        <th>Format</th>
        <th>Common file extensions</th>
    </tr>
    <tr>
        <th rowspan="3">Images</th>
        <td><a href="https://www.lifewire.com/tif-tiff-file-2622393">TIFF</a> (Tagged Image File Format) </td>
        <td>`.tiff`, `.tif`</td>
    </tr>
    <tr>
        <td><a href="https://en.wikipedia.org/wiki/JPEG_2000">JPEG2000</a></td>
        <td>`.jp2`, `.jpf`, `.jpx`</td>
    </tr>
    <tr>
        <td><a href="http://www.libpng.org/pub/png/pngintro.html">PNG</a> (Portable Network Graphics)</td>
        <td>`.png`</td>
    </tr>
    <tr>
        <th rowspan="3">Text</th>
        <td><a href="https://help.ceda.ac.uk/article/4429-ascii-formats">ASCII</a>  (American Standard Code for Information Interchange)</td>
        <td>`.ascii`, `.dat`, `.txt`</td>
    </tr>
    <tr>
        <td><a href="https://en.wikipedia.org/wiki/PDF">PDF</a> (Portable Document Format)</td>
        <td>`.pdf`</td>
    </tr>
    <tr>
        <td><a href="https://en.wikipedia.org/wiki/Comma-separated_values">CSV</a> (Comma-Separated Values</td>
        <td>`.csv`</td>
    </tr>
    <tr>
        <th rowspan="2">Audio</th>
        <td><a href="https://xiph.org/flac/index.html">FLAC</a> (Free Lossless Audio Codec)</td>
        <td>`.flac`</td>
    </tr>
    <tr>
        <td><a href="https://xiph.org/ogg/">ogg</a></td>
        <td>`.ogg`</td>
    </tr>
    <tr>
        <th rowspan="1">Video</th>
        <td><a href="https://www.lifewire.com/mp4-file-2622024">MPEG-4</a></td>
        <td>`.mp4`</td>
    </tr>
    <tr>
        <th rowspan="3">Others</th>
        <td><a href="https://www.w3schools.com/xml/xml_whatis.asp">XML</a> (Extensible Markup Language)</td>
        <td>`.xml`</td>
    </tr>
    <tr>
        <td><a href="https://www.json.org/json-en.html">JSON</a> (JavaScript Object Notation)</td>
        <td>`.json`</td>
    </tr>
    <tr>
        <td><a href="https://www.3dsystems.com/quickparts/learning-center/what-is-stl-file">STL</a> (STereoLithography file format—used in 3D modeling)</td>
        <td>`.stl`</td>
    </tr>
    <tr>
        <th colspan="3"> For a list of file formats, consider the Library of Congress' list of <a href="https://www.loc.gov/preservation/digital/formats/fdd/browse_list.shtml#"> Sustainability of Digital Formats</a>.</th>
    </tr>
</table>

## The Importance of Using Open Data Formats

Open data formats are usually available to anyone free-of-charge and allows for easy reusability. Proprietary formats often hold copyrights, patents, or have other restrictions placed on them, and are dependent on (expensive) licensed softwares. If the licensed software ceases to support its proprietary format or it becomes obsolete, you may be stuck with a file format that cannot be easily opened or (re)used (e.g. .mac). For accessibility, future-proofing, and preservation, keep your data in open, sustainable formats. 

An illustration:

1. A screenshot of the moSmall dataset as a cvs file.

![A screenshot of the csv file of the moSmall dataset.](/images/data-ethics/moSmall-csv.png)

2. A screenshot of the moSmall dataset as an Excel file (.xlsx). Unlike the previous image, this is a proprietary format.

![A screenshot of the excel file of the moSmall dataset.](/images/data-ethics/moSmall-xlsx.png)
 
 
Sustainable formats are generally unencrypted, uncompressed, and follow an open standard. 


<!--**What are some forms of data you use in your research?**

<Secret>
- Non-digital text (lab books, field notebooks)
- Digital texts or digital copies of text
- Statistical analysis (SPSS, SAS, R)
- Scientific sample collections
- Data visualizations
- Computer code
- Standard operating procedures and protocols
- Protein or genetic sequences
- Artistic products
- Curriculum materials (e.g. course syllabi)
</Secret>


**The above forms of data can be arranged in different structures using various open source or proprietary computing applications. For example, the text in your application can be formatted as a spreadsheet or a database. What formats have you used to structure or organize your data?**

<Secret>
- Spreadsheets (e.g. `.xlsx`, `.numbers`, `.csv`)
- Audio (e.g. `.mp3`, `.wav`, `.aac`)
- Video (e.g. `.mov`, `.mp4`)
- Computer Aided Design/CAD (`.cad`)
- Databases (e.g. `.sql`)
- Geographic Information Systems (GIS) and spatial data (e.g. `.shp`, `.dbf`, `.shx`)
- Digital copies of images (e.g. `.png`, `.jpeg`, `.tiff`)
- Web files (e.g. `.html`, `.asp`, `.php`)
- Matlab files & 3D Models (e.g. `.stl`, `.dae`, `.3ds`)
- Metadata & Paradata (e.g. `.xml`, `.json`)
</Secret>
Adapted from: [NC State](https://www.lib.ncsu.edu/do/data-management/defining-research-data/)

<Info>
As mentioned in the Command Line workshop, proprietary software is owned by the individual or company who published it and often comes with restrictions. Open source software is available for anyone to access or change the code and is less restrictive than proprietary software. (add note about format)
</Info> -->


## What forms of data do you use?

![A bar graph of the types of data DRI Winter 2024 participants use in their research.](/images/data-ethics/DRI24-participant-research-data-type.png)


## Evaluate

Research data can be defined as: (select all that apply)

<Quiz>
- materials or information necessary to come to my conclusion.*
- the recorded factual material commonly accepted in the scientific community as necessary to validate research findings.*
- method of collection and analysis.
- objective and error-free.
</Quiz>

## Challenge: Forms of Data 

Below you will find two front matter pages of two distinct digital projects. As you inspect the information present in each image, consider these questions:
1. What are some forms of data used in the project?
2. What are some forms of data outputted by the project?
3. Where was the data retrieved from to complete the project? 

![Screenshot of the landing page for the digital archive project called Human-Computers-At-NASA](/images/data-ethics/Human-Computers-At-NASA.png)

[Human Computers at NASA](https://omeka.macalester.edu/humancomputerproject/) is an archival project that "seeks to shed light on the buried stories of African American women with math and science degrees who began working at NACA (now NASA) in 1943 in secret, segregated facilities."

<Secret>
From the image, we can deduce that newspaper articles (digital copies of text) and photographs (digital copies of images) were used to compile this archive. Noticing the highlighted name in the news article, the data may be outputted as searchable text, searchable database, and/or searchable images. The data most likely was retrieved from a database and/or non-digital field notes. This is the [data source page](https://omeka.macalester.edu/humancomputerproject/items/browse) for Human Computers At NASA.
</Secret>

![Screenshot of the frontmatter of an audio community mapping project called Listen for the Iraqis in NYC!](/images/data-ethics/Listen-for-the-Iraqis-in-NYC.png)

[Listen for the Iraqis in NYC!](https://www.arcgis.com/apps/Cascade/index.html?appid=caace3a2d1624aecac2754b5802de3fc) is an audio community mapping project that seeks to locate the Iraqi population in NYC using their own voices. 

<Secret>
From the image, we can deduce that audio recordings of participants and a map (geospatial data) were used to compile this project. Given the details in the text on the right of the screen, we learn that the researcher will provide a map (geospatial data) and testaments (audio files) for us to peruse. The researcher has gathered digital field notes in the form of audio files from participants through a survey. The Call for Participants for Listen for the Iraqis in NYC! can be found [here](https://docs.google.com/document/d/1G8RxmEILImlW4O5LgRQ5I3e3JOlg0Sg6b7dM2CmrvEQ/edit).
</Secret>

# Institutional Compliance for Data and Research
 
### Institutional Review Board (IRB)

[The Institutional Review Board (IRB)](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/institutional-review-boards-irbs-and-protection-human-subjects-clinical-trials) is a floor for ethical responsibility at your university that came to pass after outrage about horrific unethical research studies done on people. A prime example of these grotesque studies is the [Tuskegee Syphilis Study (1932-1972)](https://www.cdc.gov/tuskegee/index.html). 

Born from concerns of the ethical choices made in biomedical and behavioral research, IRB compliance is not broadly applicable. This leaves holes in institutional  ethical regulations and requires researches in other fields, such as the social sciences, to find other ethical regulations or devise field specific ethical considers.

<!--The policies and principles stipulated in the [Belmont Report](https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html#xbasic) largely inform those of an Institutional Review Board (IRB). 

It is important to note that the Belmont Report (1979) was published by The National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research after attention and outrage was brought about harm done to people during unethical research studies, such as the [Tuskegee Syphilis Study (1932-1972)](https://www.cdc.gov/tuskegee/index.html).

Three core principles of the Belmont report are:

1. **Respect for persons**:

<Secret>
>> "Respect for persons incorporates at least two ethical convictions: first, that individuals should be treated as autonomous agents, and second, that persons with diminished autonomy are entitled to protection. The principle of respect for persons thus divides into two separate moral requirements: the requirement to acknowledge autonomy and the requirement to protect those with diminished autonomy."
</Secret>

2. **Beneficence**:

<Secret>
>> "Persons are treated in an ethical manner not only by respecting their decisions and protecting them from harm, but also by making efforts to secure their well-being... Two general rules have been formulated as complementary expressions of beneficent actions in this sense: (1) do not harm and (2) maximize possible benefits and minimize possible harms."
</Secret>

3. **Justice**:

<Secret>
>> "Who ought to receive the benefits of research and bear its burdens? This is a question of justice, in the sense of "fairness in distribution" or "what is deserved." An injustice occurs when some benefit to which a person is entitled is denied without good reason or when some burden is imposed unduly... There are several widely accepted formulations of just ways to distribute burdens and benefits... These formulations are (1) to each person an equal share, (2) to each person according to individual need, (3) to each person according to individual effort, (4) to each person according to societal contribution, and (5) to each person according to merit."
</Secret>

Every university or research institution must, legally, have its own or an affiliated IRB. The IRB is intended to provide oversight, administrative support, and educational training to ensure that research done at that location complies with federal and state regulations, and university or institutional policy.make 1 page-->

### When is an IRB required?

Usually, IRB review is required when *ALL* of the criteria below are met:

* The investigator is conducting **research** or **clinical investigation**,
* The proposed **research** or **clinical investigation** involves human subjects, and
* Your university or research institution is **engaged** in the research or clinical investigation involving human subjects.

An IRB is an institutional compliance that may not consider other ethical impacts. As we move forward in this workshop we will consider data and digital project ethics beyond compliance.

#### Example: Oral History Projects

Your oral history project does the following; do you need a CUNY HRPP/IRB?

1. Open-ended interviews, that ONLY document a specific historical event or the experiences of individuals without intent to draw conclusions or generalize findings.

HRPP/IRB Required?

<Secret>
No
</Secret>

2. Systematic investigations involving open-ended interviews that are designed to develop or contribute to generalizable knowledge (e.g.,designed to draw conclusions, inform policy, or generalize findings).

HRPP/IRB Required?

<Secret>
Yes
</Secret>

3. Creation of archives for the purpose of providing a resource for others to do research. The intent of the archive is to create a repository of information for other investigators to conduct research.

HRPP/IRB Required?

<Secret>
Yes
</Secret>

For guidance and  more examples see [The CUNY Human Research Protection Program (HRPP), "CUNY HRPP Guidance: When is CUNY HRPP or IRB Review Required?"](https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/research/research-compliance/human-research-protection-program-hrpp/hrpp-policies-procedures/HRPP_IRB_Review_Required.pdf) 


# Stages of Data

![Stages of data illustration with images of the data corresponding to the stage.](/images/data-ethics/stages-of-data-linear.png)

We begin without data. Then it is observed, or made, or imagined, or generated. After that, it goes through further transformations. Stages of data typically consist of:

**collection of "raw" data**

We start with formulating a research question(s) or hypotheses and set up a project to answer our question(s).

- E.g. What proportion of the artwork collected and/or hosted in the Met are by non cis-gender men artists and also in public domain?

**processing and/or transforming data**

In the process of setting up the project, we make decisions on what kind of data we think can help us to answer the question.

- E.g. We may retrieve the data from the Met's [open access data set](https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv). We will need to look at what variables exist in the dataset to find out if we can filter by gender and the variables that will correspond to copyrights.( Note: if the file opens as a web page, you would need to use your machine's 'save as' option to save it as a csv file to view it in a tabular form.)

**cleaning**

After collecting our data we then consider and make decisions in the processes of cleaning.

- E.g. We have to transform some of the gender values and decide what to do with the missing fields.

**analysis**

We then run our preliminary analysis of the data.

- E.g. We can run an analysis of the subset of non cis-gender men and public domain media objects against the total number of media objects to find out the proportion.

**visualization**

At the end of our analysis, a decision is then made about how we would present the data and its analysis.
- E.g. We can present the result in a pie chart or a bar graph.

## Stages of Data: Non-linear

![Stages of data are non-linear](/images/data-ethics/stages-of-data-non-linear.png)

<Info>

There is no one way to go through the stages. For example, we could do a preliminary analysis first, such as running a correlation of variables, to explore what is missing before we begin the process of cleaning. Often, we also end up doing multiple iterations of cleaning and analysis, making decisions and choices to collapse particular variables or remove them entirely at each iteration. Making sure that we keep a clear documentation of our process will ensure that we are accountable to the data we have collected/are using and also ensure that our results can be replicated and reproduced if others choose to work on our "raw" data. While making these decisions seems innocuous, there are ethical considerations, beyond the institution, and impacts we must evaluate in the process.

</Info>

# Ethics Beyond Compliance 

As we learn to manipulate data, we will consider our ethical obligations beyond institutional compliance such as an IRB. We will think of ethics as the moral principles that an individual aims to follow in practice to the best of their ability, research, and foresight. Using this definition of ethics, we then consider ethics as situated.

 **Situated ethics refers to the notion that a person's understandings of and commitments to ethics or morality are greatly linked to their own experiences, positionalities, and political orientations, as well as the particular context in which that person is putting such ethics into practice** [Helen Simons and Robin Usher, Situated Ethics in Educational Research, 2000](https://api.taylorfrancis.com/content/books/mono/download?identifierName=doi&identifierValue=10.4324/9780203354896&type=googlepdf). 

<!--Situated ethics argues that ethical concerns will vary amongst people, disciplines, projects, tools, and contexts depending on the particular situated perspective of that person, group, or project.-->

Thinking through how ethical ideas and practices, or lack thereof, are situated may prompt questions such as: How is data retrieved? By whom? For whom? From where? Why? 

<Info>
In the Command Line workshop you learned about the history of the computer and considered the questions: How were computers developed? By whom? Where? Why?
</Info>

## Levels of Impact

Annette Markham in ["OKCupid data release fiasco: It’s time to rethink ethics education", 2016](https://annettemarkham.com/2016/05/okcupid-data-release-fiasco-its-time-to-rethink-ethics-education/) asserts that ethical digital research is a methodology dependent on reflection, awareness of the debates and concerns in our respective fields, and accountability for the choices we make at each stage of our research. Thus, given the precarious nature of digital research and data we need to use a "what if" approach that will help us evaluate "the possible or probable impact, rather than the prevention of the impact This "impact approach" helps us expand our ethical imagination and consider ethics beyond prescriptives and compliance. 

Drawing from Markham (2016), we will focus on three levels of impact:

1. Direct impacts on people
2. Ramifications of (re)producing categories
3. Social, political and economic effects. 

Additionally, this workshop will address the range of impact, or the range of accessibility to our work:

- to people with disabilities,
- to people in different countries or who speak different languages, and
- in terms of cost and proprietary accessibility.

Throughout the workshop we will refer to the impacts by number for quick reference.

<!--<Info>
**Reflection**
Now would be a good point to reflect on some ethical debates and concerns happening in your field
</Info>-->

## Challenge: Ethics Beyond Compliance 

Think of the following scenario and the possible considerations and impacts for working with data. 

A graduate student decides to analyze a data set they collected through surveying fellow graduate students. The survey asks students to denote their graduate level, current job, gross income, and housing status. The graduate student hopes to analyze the survey and present their findings at a student council meeting as part of the council's attempt to persuade the administration to provide more funding to the graduate students. The student learns that they can analyze the data and create a visual using Chat GPT. For the sake of time, they decide to use Chat GPT to analyze and visualize the data set. What ethical considerations should the student evaluate? How might using Chat GPT impact the students surveyed?

<Secret>
Using a large language model application such as Chat GPT to analyze personal information collected by the survey can cause direct impact on the "human subjects" and reproduce categories and information that can be harmful to the participants. The data inputted into Chat GPT is stored and used to produce outputs for other prompts unbeknownst to the graduate student researcher or the participants. Considering these impacts, it is better ethical practice for the graduate student to use a tool that is private and secure for their analysis and visualization.
</Secret> 

<Info>
The reveal above is only one of the possible considerations, but there might be many others to evaluate.
</Info>


# Stages of Data: Raw

"Raw" data is yet to be processed, meaning it has yet to be manipulated by a human or computer. Received or collected data could be in any number of formats, locations, etc. It could be in any of the forms listed in the <Link workshop='data-literacies' page='4'>Forms of Data Section.</Link>. 

But "raw" data is a relative term, inasmuch as when one person finishes processing data and presents it as a finished product, another person may take that product and work on it further, and for them that data is "raw" data. For example, we may consider the [General Social Survey](http://gss.norc.org/) data to be "raw" as it will require us to filter out missing entries and collapse variables or fields before we can run our analysis. A researcher who participated in the creation of this survey may not consider the version on the site as "raw" because the "raw" version is the physical paper copies of the file. As you can see, this consideration of what is "raw" is non-definitive and is dependent on the project you are working on and the narrative you want to tell with the results.

If you are interested in further exploration and discussion of the ethics of "raw" data, please consider reading [Drucker's article](http://www.digitalhumanities.org/dhq/vol/5/1/000091/000091.html) which has made useful distinctions between "data" (understood as given) and "capta" (taken or "captured") that also troubles the distinction between "raw" and "processed" data. 

## Level of Impact I: Direct Impacts on People through Data Collection

#### Direct effects on people

![An image of two people at two separate screens with the person on the left calmly typing and the person on the right aggressively typing.](/images/data-ethics/realperson.png)

"At the most basic level of an impact approach, we might ask **how our methods of data collection impact humans, directly.** If one is interviewing, or the data is visibly connected to a person, this is easy to see. But a distance principle might help us recognize that when the data is very distant from where it originated, it can seem disconnected from persons, or what some regulators call ‘human subjects." ([Annette Markham, 2016](https://annettemarkham.com/2016/05/okcupid-data-release-fiasco-its-time-to-rethink-ethics-education/),emphasis added)

This brings us to several questions:
1. [What counts as "human"? What data should be off limits?](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact1.md)
2. [How do we account for personhood?](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact1cont.md)
3. [What is the distance principle? How does it impact the data we decide to collect?](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact1.md)
4. [What is "public" data?](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact1cont.md)

The definitions of terms such as "human" and "public" are ambiguous. They are dependent on the forms of data, the context of the data, and the relationship of the data to the source and the researcher. 

We return to our data set [Research_Data_DRI24.csv](https://raw.githubusercontent.com/GC-DRI/DRI24/main/uploads/data-literacies/Research_Data_DRI24.csv) that is now on a public site that is designed to be widely accessible. Would we consider this data set, "public" date from our understanding of the general term "public"?

For guidelines and working definitions of "human", "public", and "personhood" see [the 2012 Ethical Decision-Making and Internet Research report by the AoIR Ethics Working Committee](http://aoir.org/reports/ethics2.pdf).

## Data and Labor

As we think about data collection, we should also consider the labor involved in the process. Many researchers rely on Amazon Mechanical Turk (sometimes also referred to as MTurk) for data collection, [often paying less than minimum wage for the task.](https://www.theatlantic.com/business/archive/2018/01/amazon-mechanical-turk/551192/) Often the assumption made of these workers is someone who is retired, bored, and participating in online gig work for fun or to kill time. While this may be true for some, [more than half of those surveyed in a Pew Research study cite that the income from this work is essential or important](https://www.pewresearch.org/internet/2016/11/17/labor-platforms-technology-enabled-gig-work/). Those who do view the income from this work as essential or important are also mostly from underserved communities. 

In addition to being mindful of paying a fair wage to the workers on such platforms, this kind of working environment also brings some further considerations to the data that is collected. For instance, to get close to minimum wage, workers cannot afford to spend much time on each task. Thinking through these circumstances, how do you think it impacts the data we collected? 

For a deeper discussion on data and labor, consider Catherine D'Ignazio and Lauren Klein's chapter [Show Your Work](https://data-feminism.mitpress.mit.edu/pub/0vgzaln4/release/2?readingCollection=0cd867ef) in *[Data Feminism](https://data-feminism.mitpress.mit.edu/)*.

## Evaluation

1. The stages of data is a single iteration process, i.e. there is a fixed stage progression from data collection to visualization.

<Quiz>
- True
- False*
</Quiz>

2. Which of the following statements are true for "raw" data: (select all that apply)

<Quiz>
- is data that is yet to be processed.*
- is data that is received and/or collected.*
- is the same to every researcher/research team.
- can only be collected from participants.
</Quiz>

## Challenge: Raw Data

<!--1. Do you think "big data" is "raw data"? Why or why not? Does the quantity of data play into our assumptions of "rawness"?

<Secret>
I think big data can be raw data depending on how the data is obtained and the processes I need to take before I can apply an analysis. I think that with large datasets, I always assume "rawness" because I won't need all of the variables or there will be decisions that need to be made about missing entries.
</Secret>

2. How should we approach data that we have "scraped"?

<Secret>
I think my approach to scraped data is similar to big data.
</Secret>

3. How do you collect "raw" data? What are some of your practices? What are your field's practices?

<Secret>
Currently I collect through either pushshift.io or scrap permissible social media sites on my own or with my collaborator (who will have appropriate authorship). I know that my field of psychology is guilty of the discussion on mechanical turk and also often rely on undergraduates for experimental data collection who would have to sign up for experiments for credits in class or do the labour of working in the lab for the promises of bettering their resume for grad school applications.
</Secret>-->

If you have not done so, please download [`moSmall.csv`](https://raw.githubusercontent.com/DHRI-Curriculum/data-literacies/v2.0/files/moSmall.csv) and open it from your local computer/laptop. As the original file has about 500,000 entries, we've taken a random sample of 1% of the [original dataset](https://github.com/metmuseum/openaccess). In this case, would you consider this file to be a "raw" dataset?

<Secret>
The dataset would be a "raw" dataset for you because you would most likely need to remove certain variables/entries to work towards your question or in this case our question: “What proportion of the artwork collected and/or hosted in the Met are by non cis-gender men artists?”
</Secret>

### Keywords

- [Data](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/data.md)
- ["Raw" Data](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/raw-data.md)

# Stages of Data: Processed/Transformed

Processing data puts it into a state more readily available for analysis and makes the data legible. For instance, it could be rendered as structured data. **Structured data consists of clearly defined data types with patterns that make them easily searchable**; while unstructured data is “everything else.”Unstructured data can be an open source book from the Gutenberg project and a structured data can be a csv file or a our dataset. 

Here is a reminder of the list of structured forms and formats we reviewed earlier in the workshop:
- Spreadsheets (e.g. `.xlsx`, `.numbers`, `.csv`)
- Audio (e.g. `.mp3`, `.wav`, `.aac`)
- Video (e.g. `.mov`, `.mp4`)
- Computer Aided Design/CAD (`.cad`)
- Databases (e.g. `.sql`)
- Geographic Information Systems (GIS) and spatial data (e.g. `.shp`, `.dbf`, `.shx`)
- Digital copies of images (e.g. `.png`, `.jpeg`, `.tiff`)
- Web files (e.g. `.html`, `.asp`, `.php`)
- Matlab files & 3D Models (e.g. `.stl`, `.dae`, `.3ds`)
- Metadata & Paradata (e.g. `.xml`, `.json`)

## Data Structures: Tidy Data

There are different guidelines to the processing of data, one of which is the [Tidy Data](https://www.jstatsoft.org/article/view/v059i10) format, which follows these rules in structuring data:

1. Each variable is in a column.
2. Each observation is a row.
3. Each value is a cell.

Look at this example of cats to see how they may or may not follow those guidelines. **Important note:** Some data formats allow for more than one dimension of data (like the `JSON` structure below). How might that complicate the concept of **Tidy Data**?

```json
{
    "Cats": [
            {
                "Calico": [
                    {
                        "firstName": "Smally",
                        "lastName":"McTiny"
                    },
                    {
                        "firstName": "Kitty",
                        "lastName": "Kitty"
                    }
                ],
                "Tortoiseshell": [
                    {
                        "firstName": "Foots",
                        "lastName":"Smith"
                    },
                    {
                        "firstName": "Tiger",
                        "lastName":"Jaws"
                    }
                ]
            }
        ]
}
```

How would you convert this nested data set into a tidy data structure? 

![Cat Json data converted to a tidy data table](/images/data-ethics/cat-tidy-table.png)

While tiny data is a really popular method of structuring and organizing data, it is not the only way to do so. Depending on the type of data you have, it is also not always the best way to structure data.

### Table form does not equal Tidy

But not all rectangular data is tidy. Here is an example of how tabular (or rectangular) data can be transformed into more tidy data. 

![One large graph showing untidy data and three smaller graphs showing tidy data](/images/data-ethics/tidy-v-untidy.png)

What new variables were created? 

What does each of the three tables represent?

## Data Managment 

![A story told by file names. Image of inconsistant file names.](/images/data-ethics/file-naming-version-control.png)

Before beginning your data collection, manipulation, and transformation, a good practice is to determine your file naming conventions. How many times have named something as `XXX_FinalFINALFINAL.pdf` or have difficulty searching for a version of the file that contained all that good idea that was edited out in the `XXX_FinalFINALFINALFINAL.pdf` version? While tools like version controlling with git can be helpful, we can also begin with setting up file naming conventions that can help us succeed! Here's an example from [Stanford](https://library.stanford.edu/research/data-management-services/case-studies/case-study-file-naming) that demonstrates the problems of badly name files in our projects.

For example, The Graduate Center's [Data Management](https://libguides.gc.cuny.edu/c.php?g=159618&p=1045090) guide suggest that top level folders (such as your main project folder) should include your project title, a unique identifier and the date (year) of your project (e.g. `dataliteracies_XYZ_2020`). Your sub folders and individual files should follow a similar system, with an identifiable activity or project in the file name (e.g. a sub-folder of the project: `sections_xyz_2020`, a file in the project: `lessons_XYZ_2020.doc`).

For a thorough understanding of the impact of data management on our research and the ethical quandries that may arise from poor data management, please head over to Stephen Zweibel's interactive website [Data Management](https://zweibel.net/presentations/data.html#/).


## Level of Impact II: Politics of Knowledge Production and Categorization

### Politics of Knowledge Production

![Image of a diagram where bias goes in nand bias goes out](/images/data-ethics/bias.png)

"At another level, we can ask how our methods of organizing data, analytical interpretations, or findings as shared datasets are being used—or might be used—**to build definitional categories or to profile particular groups** in ways that could impact livelihoods or lives. Are we contributing positive or negative categorizations?" ([Annette Markham, 2016](https://annettemarkham.com/2016/05/okcupid-data-release-fiasco-its-time-to-rethink-ethics-education/),emphasis added)

For ethical considerations of the [impact of our knowledge production](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact2cont.md),it can be helpful to think through the concepts of Gramsci's hegemony, Foucault's discourse, and  Hall's "policing the crisis". An example of the politics of power production can be found in Julia Angwen's and Jeff Larson's, ["Bias in Criminal Risk Scores Is Mathematically Inevitable, Researchers Say," 2016](https://www.propublica.org/article/bias-in-criminal-risk-scores-is-mathematically-inevitable-researchers-say) article.

[Decisions on the categories and boundaries scholars use shape our:](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact2cont.md)
- Datasets
- Catalogs
- Maps
- Algorithms

<!-- hidden: formats table start -->
## The Importance of Using Open Data Formats

A small detour to discuss data formats. Open data formats are usually available to anyone free-of-charge and allows for easy reusability. Proprietary formats often hold copyrights, patents, or have other restrictions placed on them, and are dependent on (expensive) licensed softwares. If the licensed software ceases to support its proprietary format or it becomes obsolete, you may be stuck with a file format that cannot be easily opened or (re)used (e.g. .mac). For accessibility, future-proofing, and preservation, keep your data in open, sustainable formats. A demonstration:

1. Open [this file](https://raw.githubusercontent.com/GC-DRI/DRI24/main/uploads/data-literacies/Research_Data_DRI24.csv) in a [text editor](https://github.com/DHRI-Curriculum/insights/blob/v2.0/pages/choosing-a-text-editor.md) (e.g. Visual Studio Code, TextEdit (macOS), NotePad (Windows) ), and then in an app like Excel. This is a CSV, an open, text-only, file format. To save the file onto your local computer, right click on `Research_Data_DRI24.csv` and click `Save Link As` to download the file to your local computer (it's the same Research_Data_DRI24.csv from above!)
2. Now do the same with [this Excel file](https://github.com/DHRI-Curriculum/data-literacies/blob/v2.0/files/cats.xlsx?raw=true). Unlike the previous, this is a proprietary format!

Sustainable formats are generally unencrypted, uncompressed, and follow an open standard. 

<br />
<table>
    <caption><strong>A small list of open multimedia formats (more information of each file format is linked in their entries):</strong></caption>
    <tr>
        <th>Form</th>
        <th>Format</th>
        <th>Common file extensions</th>
    </tr>
    <tr>
        <th rowspan="3">Images</th>
        <td><a href="https://www.lifewire.com/tif-tiff-file-2622393">TIFF</a> (Tagged Image File Format) </td>
        <td>`.tiff`, `.tif`</td>
    </tr>
    <tr>
        <td><a href="https://en.wikipedia.org/wiki/JPEG_2000">JPEG2000</a></td>
        <td>`.jp2`, `.jpf`, `.jpx`</td>
    </tr>
    <tr>
        <td><a href="http://www.libpng.org/pub/png/pngintro.html">PNG</a> (Portable Network Graphics)</td>
        <td>`.png`</td>
    </tr>
    <tr>
        <th rowspan="3">Text</th>
        <td><a href="https://help.ceda.ac.uk/article/4429-ascii-formats">ASCII</a>  (American Standard Code for Information Interchange)</td>
        <td>`.ascii`, `.dat`, `.txt`</td>
    </tr>
    <tr>
        <td><a href="https://en.wikipedia.org/wiki/PDF">PDF</a> (Portable Document Format)</td>
        <td>`.pdf`</td>
    </tr>
    <tr>
        <td><a href="https://en.wikipedia.org/wiki/Comma-separated_values">CSV</a> (Comma-Separated Values</td>
        <td>`.csv`</td>
    </tr>
    <tr>
        <th rowspan="2">Audio</th>
        <td><a href="https://xiph.org/flac/index.html">FLAC</a> (Free Lossless Audio Codec)</td>
        <td>`.flac`</td>
    </tr>
    <tr>
        <td><a href="https://xiph.org/ogg/">ogg</a></td>
        <td>`.ogg`</td>
    </tr>
    <tr>
        <th rowspan="1">Video</th>
        <td><a href="https://www.lifewire.com/mp4-file-2622024">MPEG-4</a></td>
        <td>`.mp4`</td>
    </tr>
    <tr>
        <th rowspan="3">Others</th>
        <td><a href="https://www.w3schools.com/xml/xml_whatis.asp">XML</a> (Extensible Markup Language)</td>
        <td>`.xml`</td>
    </tr>
    <tr>
        <td><a href="https://www.json.org/json-en.html">JSON</a> (JavaScript Object Notation</td>
        <td>`.json`</td>
    </tr>
    <tr>
        <td><a href="https://www.3dsystems.com/quickparts/learning-center/what-is-stl-file">STL</a> (STereoLithography file format—used in 3D modeling)</td>
        <td>`.stl`</td>
    </tr>
    <tr>
        <th colspan="3"> For a list of file formats, consider the Library of Congress' list of <a href="https://www.loc.gov/preservation/digital/formats/fdd/browse_list.shtml#"> Sustainability of Digital Formats</a>.</th>
    </tr>
</table>
<!-- hidden: formats table end -->

## Evaluation

1. Structured data can be: (select all that apply)

<Quiz>
- a XML list.*
- a Excel table.*
- an email chain.
- a collection of text files.
</Quiz>

2. We may choose to store our data in open data formats because they: (select all that apply)

<Quiz>
- are sustainable.*
- allow for easy reusability.*
- are free-of-charge to use.*
</Quiz>

3. Tiny data format only allows one value per cell.

<Quiz>
- True*
- False
</Quiz>

## Challenge: Processed/Transformed

1. Explore the `moSmall.csv` dataset, what questions might you ask with this dataset? What columns (variables) will you keep?

<Secret>
You would keep columns (variables) relevant to our question, such as the `Artist Gender`, `Is Public Domain` and `Rights and Reproduction` columns. We would also keep some of the descriptive columns such as `Object ID` and `Artist Role` to help contextualize the results (e.g. what kind of roles do female artists tend to take on?)
</Secret>

2.  If you are saving the file `moSmall.csv` in a proprietary spreadsheet application like Microsoft Excel (Windows/macOS) or Numbers (macOS), you may be prompted to save the file as `.xlsx` or `.numbers`. What format would you choose to save it in? Why would you choose to do so?

<Secret>
It is recommended to keep it in a `.csv` file type as it can be opened up by more programs and if Microsoft stops supporting `.xlsx` file types you may no longer have access to opening the dataset. **or** you will choose to switch to a `.xlsx` format as it is easier to use on a graphical user interface like Microsoft Excel. Any stylistic changes you'd have made to the file will remain as well, such as alternative highlighting rows for readability or bolding column headings.
</Secret>

### Keywords

- [CSV (file format)](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/csv.md)
- [Open Data Formats](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/open-data-formats.md)
- [Tidy Data](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/tidy-data.md)




# Stages of Data: Cleaned

High quality data is measured in its **validity**, **accuracy**, **completeness**, **consistency**, and **uniformity**.

Processed data, even in a table, is going to be full of errors:

1. Empty fields
2. Multiple formats, such as "yes" or "y" or "1" for a positive response.
3. Suspect answers, like a date of birth of 00/11/1234
4. Impossible negative numbers, like an age of "-37"
5. Dubious outliers
6. Duplicated rows
And many more!

Cleaning data is the work of correcting the errors listed above, and moving towards high quality. This work can be done manually or programmatically.

### Validity

![Image of a data set with invalid values.](/images/data-ethics/cleaning-validity.png)


Measurements must be valid, in that they must conform to set constraints:

1. The aforementioned "yes" or "y" or "1" should all be changed to one response.
2. Certain fields cannot be empty, or the whole observation must be thrown out.
3. Uniqueness, for instance no two people should have the same social security number.

### Accuracy

Measurements must be accurate, in that they must represent the correct values. While an observation may be valid, it might at the same time be inaccurate. 123 Fake street is a valid, inaccurate street address.

![Image of Open Maps with error for 123 Fake street.](/images/data-ethics/cleaning-accuracy.png)

Unfortunately, accuracy is mostly achieved in the observation process. To be achieved in the cleaning process, an outside trusted source would have to be cross-referenced.

### Completeness

Measurements must be complete, in that they must represent everything that might be known. *This also is nearly impossible to achieve in the cleaning process!* For instance in a survey, it would be necessary to re-interview someone whose previous answer to a question was left blank.

### Consistency

Measurements must be consistent, in that different observations must not contradict each other. For instance, one person cannot be represented as both dead and still alive in different observations.

### Uniformity

Measurements must be uniform, in that the same unit of measure must be used in all relevant measurements. If one person's height is listed in meters and another in feet, one measurement must be converted.

## Evaluation

Measurements are *accurate* when: (select one)

<Quiz>
- observations do not contradict each other.
- they represent the correct values.*
- when they are unique responses (e.g. no duplication).
- when the same unit of measure is used in all relevant measurements.
</Quiz>

## Challenge: When Do We Stop Cleaning?

1. How do we know when our data is cleaned enough?

<Secret>
Often this is decided before the cleaning process begins, perhaps after some quick visualization or analysis of the "raw" data. Generally, empty entries are removed from the data sets. Perhaps if one is working with social media data, they may remove URLs as these influence the topic modeling algorithms (e.g. "http" may end up being the most prominent topic of the corpus). One may decide here is where to stop cleaning. Some might suggest the removal of stop words like "the" "a" "an," but some may consider impact II, politics of knowledge production, and feel uncertain about the removal of these words. This is especially because the dictionary of stop words were generated through canon western texts that is not representative of the many variations of English. For example, if one were looking at the tweets of Singaporean youths, the stop word dictionary may not be appropriate.
</Secret>

2. What happens to the data that is removed?

<Secret>
Usually the IRB desires that the data is destroyed. Removed data can remain in the original "raw" file. The file that is cleaned is usually a duplicate file to allow for recovery in case a researcher made a poor decision in the process of cleaning.
</Secret>

3. Explore the `moSmall.csv` dataset.
    - Are all the measurements valid? Try checking the `Object ID` column for duplicates.
    - How might you check if the `Is Public Domain` accurately represents the copyrights of the media objects?
    - Is the data collected completed? How might you deal with the NA or empty fields?
        - What assumptions do you have to make when you clean NA or empty fields?
    - Is the collected data consistent? Does the column `Is Public Domain` correspond with the data in `Rights and Reproduction`? If it does not, which would you follow? Why?
    - As the dataset is not one that we personally collected, how do we make sense that only `Female` or `|` is collected as responses in the column (with the exception of NA and empty fields)? What do we have to do to the data to make sure it is uniform? What decisions do we make in this process?

<Secret>
Exploring the dataset, here are possible responses to the questions:
    - Using `Object ID` indicates that there is no duplicates in the dataset. Every entry is unique.
    - You may choose to compare it to another trusted source like a database from [The Getty Research Institute](https://www.getty.edu/research/tools/).
    - The data collected is not completed. There are missing fields. Depending on where the missing field is, you may choose to code it as `0` for the ease of analysis. For example, the column `Dynasty` only contain 1 meaningful entry within this sample data set, as such, you may choose to not run any analysis that may rely on this column and choose to drop it. The column `Accession Year` only has 1 NA and you may choose to drop that row if this becomes a useful variable for your analysis.
    - While the `Rights and Reproduction` contains a lot of NA and inappropriate responses (e.g. "Ceramics"), for the most part, for the items labeled as `YES` in the column `Is Public Domain` the corresponding column in `Rights and Reproduction` does not record a copyright holder. You may assume that the NA can stand in for the object being in the public domain.
    - Taking only `Female` as a valid gender response, everything else will be converted to a `0` for ease of analysis. You may assume `|` as equivalent to a NA or an empty field rather than an alternative gender. Hence in this analysis, the proportion will only record female artists' objects against the rest of the collected items. You may not be able to necessarily answer the larger question of all non-cisgender men against the total in this case.
</Secret>

## Level of Impact III: Social, Political, and Economic Impacts of Projects or Research

![Image of a water rippling.](/images/data-ethics/ripple.jpg)

Each choice we make while manipulating our data ripples to other areas of our scholarship, institution, and communities (locally and globally). 

"At a third level of impact, we can consider **the social, economic, or political changes caused** by one’s research processes or products, in both the short and long term." ([Annette Markham, 2016](https://annettemarkham.com/2016/05/okcupid-data-release-fiasco-its-time-to-rethink-ethics-education/),emphasis added)

We can consider this [level of impact](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/impact3.md) by asking questions about labor, surveillance, social and political discourse, etc. 

1. Whose labor and what materials are used to make the digital tools you use? How should we (those who benefit from the labor of other people) attribute others' labor? How can we (users of these tools) be held accountable?
2. Could your research or project be used to justify or facilitate potentially harmful control or surveillance?
3. Could it influence social or political discourse? Modes of profit?

<!--We are visiting this impact between discussing cleaning data and analyzing data, because as we discussed earlier most of our reflections and decision making happen at these two stages.<--> 

# Stages of Data: Analyzed

Analysis can take many forms (just like the rest of this stuff!), but many techniques fall within a couple of categories:

### Descriptive Analysis

Techniques geared towards summarizing a data set, such as:

- Mean
- Median
- Mode
- Average
- Standard deviation

### Inferential Analysis

Techniques geared towards testing a hypothesis about a population, based on your data set, such as:

- Extrapolation
- P-Value calculation/Regression

### Qualitative Analysis

Techniques geared towards understanding a phenomenon, rather than predicting and testing hypotheses, such as:

- Grounded Theory/[Computational Grounded Theory](https://journals.sagepub.com/doi/full/10.1177/0049124117729703)
- Content Analysis
- Text Analysis

As we have discussed thus far, data are not neutral or objective. They are guided by and produced through our interests and assumptions, often shaped by our socio-political contexts. Hence, we must also understand that the forms of analyses we take to our data further shapes how we are choosing to tell the story. We are crafting a narrative through each of the stages of data that helps us communicate our projects to a wider audience. This is not to say that our analyses are not "empirical" or "scientific" but a suggestion to make transparent the theoretical foundations and perspectives that are guiding our interpretations. For a more nuanced perspective, consider [The Numbers Don't Speak for Themselves](https://data-feminism.mitpress.mit.edu/pub/czq9dfs5/release/2) in *[Data Feminism](https://data-feminism.mitpress.mit.edu/).*


## Evaluation

Descriptive analysis helps us summarize a data set.

<Quiz>
- True*
- False
</Quiz>

## Challenge: Analysis

1. As we consider the types of analysis that we choose to apply onto our data set, what are we representing and leaving out?

<Secret>
You may choose to leave out data that are perceived to be outliers, especially if they differ too much from the "normal" curve. You may end up representing only those who fall within the "normal" curve which may not actually be an equitable representation. This would require considering ethical impact two: the ramifications of (re)producing categories.
</Secret>

2. How do we guide our decisions of interpretation with our choices of analyses?

<Secret>
The interpretation of the results should align itself with the type of analyses that you ran. In addition, it should be guided in some capacity by previous work in this area to inform your understanding and the ethical implications you have evaluated.
</Secret>

3. Are we comfortable with the intended use of our research? Are we comfortable with the unintended use of our research? What are potential misuses of our outputs?

<Secret>
Potential misuse we should concern ourselves with is the weaponization of marginalized participants' words and thoughts. We need to be wary of the unintended use of our research because we can't consider every circumstance that the analysis can be misused or misquoted. When working on an oral history project, we may set up some layers of boundaries to prevent too easy of an access to audio files as an attempt at negotiating access and protection of my narrators. Walsh in [The Challenges and Possibilities of Social Media Data: New Directions in Literary Studies and the Digital Humanities](https://dhdebates.gc.cuny.edu/read/debates-in-the-digital-humanities-2023/section/a57b98ab-0f10-45d0-b205-3e563aab7ea8#ch18) gives us an example of the Inter-University Consortium for Political and Social Research (ICPSR) that requires different "levels of restriction and access" to social media data.
</Secret>

4. What can happen when we are trying to just go for the next big thing (tool/methods/algorithms) or just ran out of time and/or budget for our project?

<Secret> 
In chasing the next big thing, the original intentions for beginning the project might be lost. When working with communities, our priority is that our work is meaningful to them and the excitement of exploring a new tool can sometimes distract us from this intention. Running out of time and/or budget can also mean that the project may end abruptly, and relationships built could be strained in a haphazard wrap up. This brings us back to making sure that before the project begins to spend a significant amount of time on project planning to reduce the chances of this happening.
</Secret>

### Keywords

- [Descriptive Analysis](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/descriptive-analysis.md)
- [Inferential Analysis](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/inferential-analysis.md)
- [Qualitative Analysis](https://github.com/DHRI-Curriculum/glossary/blob/v2.0/terms/qualitative-analysis.md)

# Stages of Data: Visualized

Visualizing your data helps you tell a story and construct a narrative that guides your audience in understanding your interpretation of a collected, cleaned, and analyzed dataset. Depending on the type of analysis you ran, different kinds of visualization can be more effective than others. In the table below are some examples of data visualization that can help you convey the message of your data and the ethical considerations you have been evaluating throughout your project. 

### Examples of Data Visualization
<table>
    <tr>
        <th>Types of Analysis</th>
        <th>Types of Visualization</th>
         <th>When to Use</th>
        <th>Example of Visualization</th>
    </tr>
    <tr>
        <th rowspan="3">Comparisons</th>
         <td>Bar charts</td>
         <td>Comparison across distinct categories</td>
        <td><img src="/images/data-ethics/D4PG_bar.png" alt="Bar Chart" /><figcaption>From <a href="https://dataforgood.commons.gc.cuny.edu/report-on-covid-19s-impact-on-cuny-students/" target="_blank">The Data for Public Good</a> at the Graduate Center.</figcaption></td>
    </tr>
    <tr>
        <td>Histograms</td>
        <td>Comparison across continuous variable</td>
        <td><img src="/images/data-ethics/PolicyViz_histogram.png" alt="Histogram" /><figcaption>From <a href="https://policyviz.com/2018/11/27/histogram-design-decisions/" target="_blank">Policy Viz.</a></figcaption></td>
    </tr>
    <tr>
        <td>Scatter plots</td>
        <td>Useful to check for correlation (not causation!)</td>
        <td><img src="/images/data-ethics/538_scatter.png" alt="Scatter plot" /><figcaption>From <a href="https://fivethirtyeight.com/features/the-gops-primary-rules-might-doom-carson-and-cruz/" target="_blank">FiveThirtyEight.</a></figcaption></td>
    </tr>
    <tr>
        <th rowspan="3">Time</th>
        <td>Stacked area charts</td>
        <td>Evolution of value across different groups</td>
        <td><img src="/images/data-ethics/DatatoViz_stackedarea.png" alt="Stacked area chart" /><figcaption>From <a href="https://www.data-to-viz.com/graph/stackedarea.html" target="_blank">Data to Viz.</a></figcaption></td>
    </tr>
    <tr>
        <td>Sankey Diagrams</td>
        <td>Displaying flows of changes</td>
        <td><img src="/images/data-ethics/DatatoViz_sankey.png" alt="Sankey" /><figcaption>From <a href="https://www.data-to-viz.com/graph/sankey.html" target="_blank">Data to Viz.</a></figcaption></td>
    </tr>
   <tr>
        <td>Line graphs</td>
        <td>Tracking changes over time</td>
        <td><img src="/images/data-ethics/D4PG_line.jpg" alt="Line Graph" /><figcaption>From <a href="https://dataforgood.commons.gc.cuny.edu/report-on-covid-19s-impact-on-cuny-students/" target="_blank">The Data for Public Good</a> at the Graduate Center.</figcaption></td>
    </tr>
    <tr>
        <th rowspan="2">Small numbers/percentages</th>
        <td>Pie charts</td>
        <td>Demonstrate proportions between categories</td>
        <td><img src="/images/data-ethics/DB_pie.jpg" alt="Pie chart" /><figcaption>From <a href="https://www.loc.gov/pictures/search/?q=%22lot%2011931%22%20NOT%20medal&st=grid&co=anedub&loclr=blogpic" target="_blank">The Library of Congress.</a></figcaption></td>
    </tr>
    <tr>
        <td>Tree maps</td>
        <td>Demonstrate hierarchy and proportion</td>
        <td><img src="/images/data-ethics/DataViz_treemap.png" alt="Tree map" /><figcaption>From <a href="https://datavizcatalogue.com/methods/treemap.html" target="_blank">The Data Visualization Catalogue.</a></figcaption></td>
    </tr>
    <tr>
        <th rowspan="2">Survey responses</th>
        <td>Stacked bar charts</td>
        <td>Compares total amount across each group (e.g. plotting Likert scale)</td>
        <td><img src="/images/data-ethics/DB_stackedbar.jpg" alt="Stacked bar charts" /><figcaption>From <a href="https://www.loc.gov/pictures/search/?q=%22lot%2011931%22%20NOT%20medal&st=grid&co=anedub&loclr=blogpic" target="_blank">The Library of Congress.</a></figcaption></td>
    </tr>
    <tr>
        <td>Nested area graphs</td>
        <td>Visualize branching/nested questions</td>
        <td><img src="/images/data-ethics/evergreen_nestedarea.jpg" alt="Nested area graph" /><figcaption>From <a href="https://stephanieevergreen.com/nested-area-graph/" target="_blank">Evergreen Data.</a></figcaption></td>
    </tr>
    <tr>
        <th rowspan="2">Place</th>
        <td>Choropleth maps</td>
        <td>Visualize values over a geographic area to demonstrate pattern</td>
        <td><img src="/images/data-ethics/DB_choropleth.jpg" alt="Choropleth map" /><figcaption>From <a href="https://www.loc.gov/pictures/search/?q=%22lot%2011931%22%20NOT%20medal&st=grid&co=anedub&loclr=blogpic" target="_blank">The Library of Congress.</a></figcaption></td>
    </tr>
    <tr>
        <td>Hex(bin) or Tile maps</td>
        <td>Similar to Choropleth with the hexbin/tile representing regions equally rather than by geographic size</td>
        <td><img src="/images/data-ethics/rgraph_hexbin.png" alt="Hexbin graph" /><figcaption>From <a href="https://www.r-graph-gallery.com/328-hexbin-map-of-the-usa.html" target="_blank">R Graph Gallery.</a></figcaption></td>
    </tr>
</table>

Adapted from [Stephanie D. Evergreen (2019) Effective data visualization : The right chart for the right data](https://us.sagepub.com/en-us/nam/effective-data-visualization/book265203_), [The Data Visualization Catalogue](https://datavizcatalogue.com/), and [From Data to Viz](https://www.data-to-viz.com/)

<!--This table is a teaser for the many possibilities of what data visualization can be. Creating a visual for your data is an art form and you can sometimes find yourself spending a significant amount of time looking for the best ways to visualize your data. -->


An example of effective data visualization can be seen in W.E.B. Du Bois [data portraits at the Paris Exposition in 1900](https://www.loc.gov/pictures/search/?q=%22lot%2011931%22%20NOT%20medal&st=grid&co=anedub&loclr=blogpic), as part of [the Exhibit of American Negroes](https://en.wikipedia.org/wiki/The_Exhibit_of_American_Negroes_). Using engaging hand-drawn visualizations, he tells the narrative of what it meant to be Black in post-Emancipation America as he translates sociological research and census data to reach beyond the academy. Head [here](https://hyperallergic.com/476334/how-w-e-b-du-bois-meticulously-visualized-20th-century-black-america/) to read more about Du Bois' project.

## Range of impact, or the range of accessibility

"[The]impact approach is targeted toward the possible or probable impact, rather than the prevention of impact in the first place. It acknowledges that we change the world as we conduct even the smallest of scientific studies, and therefore, we must take some personal responsibility for our methods." ([Annette Markham, 2016](https://annettemarkham.com/2016/05/okcupid-data-release-fiasco-its-time-to-rethink-ethics-education/))

Some areas to consider as we expand our [range](https://raw.githubusercontent.com/DHRI-Curriculum/ethics/master/sections/range.md) of ethical imagination beyond the three levels of impact are:

- Accessibility to people with disabilities

- International accessibility and language access

- Openness and accessibility

- What or when *not* to make things accessible

- When might we decide *not* to record data or delete it

## Challenge: Visualizations

As we transform our results into visuals, we are also trying to tell a narrative about the data we collected. Data visualization can help us to decode information and share quickly and simply. Consider the range of impacts as you think through these questions.

1. What are we assuming when we choose to visually represent data in particular ways?

<Secret>
An underlying assumption we make is that the conventions of top-down, left-right are universal or at least universal enough for most folx to understand. This neglects potential right-to-left readers. Certain conventions that use color as a way to represent good and bad (e.g. green as good and red as bad) also assume that this is an effective differentiation that excludes those who have visual impairments and can decipher the data in a similar fashion.
</Secret>

2. As you may have realized, many of the visualization examples work with quantitative data, as such, how do you think we can visualize qualitative data? (e.g. Word Clouds, Heat Map)

<Secret>
Exploring [Voyant-Tools](https://voyant-tools.org/) can be a good place to start to see how visualization of qualitative data can look like.
</Secret>

3. How can data visualization mislead us? (for e.g. Nathan Yau discusses [how data visualization can lie](https://flowingdata.com/2017/02/09/how-to-spot-visualization-lies/))

<Secret>
Exaggerated differences through the choice of scales on the x and y-axis can mislead a casual viewer to think that the data is representing a larger difference than it actually is reporting.
</Secret>

4. How can data visualization help us tell a story? (for e.g. Data Feminism's [On rational, Scientific, Objective Viewpoints from Mythical, Imaginary, Impossible Standpoints](https://data-feminism.mitpress.mit.edu/pub/5evfe9yd/release/3?readingCollection=0cd867ef))

<Secret>
Data visualization can help us convey dense information quickly. The casual viewer can glance at the visualization and understand what we are trying to communicate with our data. Data visualization also can be affective device, like the DuBois' examples which helps to tell the urgency of the narrative/story.
</Secret>

5. Can you try to plot the `moSmall.csv` dataset based on the `Artist Gender` variable? What would you have to do before you can plot this graph? How might you explain what your visualization represents?

<Secret>
The difficulty of representing this dataset is how at first glance there's an assumption that gender is binary given that only 2 bars are representing the dataset. Even though the other bar is labeled `Unknown` to suggest that this is not a comprehensive breakdown, it makes one wonder how effective it is.
![Plot of media objects in public domain by gender of artist](/images/data-ethics/genderPD.png)
</Secret>

<!--# Data Literacy and Ethics

Throughout the workshop we have been thinking together through some of the potential ethical concerns that might crop up as we proceed with our own projects. Just as we have discussed thus far, we hope that you see that data and ethics is an ongoing process throughout the lifespans of your project(s) and don’t often come with easy answers.-->

### Additional Exploration

- If you were collecting and/or analyzing data on folx in power, such as looking at the data from [Tweets of Congress'](https://alexlitel.github.io/congresstweets/) project, would that change the way you consider your answers to the previous questions?
- Current [ethical guidelines](https://www.asc.upenn.edu/research/centers/safe-lab/ethics) from SAFE Lab at University of Pennsylvania have decided to alter the text of social media posts to render it unsearchable. Why and when would you consider (or not) altering the collected tweets for publication? 

# Concluding Thoughts

Data and ethics are contextually driven. As such, there isn’t always a risk-free approach. We often have to work through ethical dilemmas while thinking through information that we may not have (what are the risks of doing/not doing this work?). We have approached a moment where the question is no longer what we could do but what we should do. Given this saturated data-driven world we currently live in, there is value in pausing and considering why and what we are collecting, researching, analyzing, and understanding. Starting on a new project, especially one dealing with "big" data can be exciting but we now also have to first consider who does the data collected benefit and [why is it important are important](https://www.manifestno.com/). The IRB (Institutional Review Board)'s regulations may form the starting point of our considerations but should not be the ending point of how we consider contextually-driven ethics and data projects.

In addition, open access is not always the answer to concerns of reproducibility and/or ethical considerations. There are moments where the decision to not have a dataset or analysis openly accessible is valid. For example, when you are working with marginalized or vulnerable populations, concerns for causing more harm justifies restricting access. We may choose to control who has access to decrease the chances of misrepresentations (intentional or otherwise) or having results taken out of context.

For a set of great questions to help you think through your data exploration and project planning, please check out Kristen Hackett's Tagging the Tower post, [What to Consider when Planning a Digital Project.](https://digitalfellows.commons.gc.cuny.edu/2019/10/30/what-to-consider-when-planning-a-digital-project/)

## Review your knowledge: questions from the lessons

__1. Structured data can be: (Select all that apply)__

<Quiz>
- a XML list.*
- a Excel table.*
- an email chain.
- a collection of text files.
</Quiz>

Revisit Lesson <Link page='20' workshop='data-literacies'>Stages of Data: Processed/Transformed</Link> to learn more.

__2. Descriptive analysis help us summarize a data set. (Select one of the following)__

<Quiz>
- True*
- False
</Quiz>

Revisit lesson <Link page='29' workshop='data-literacies'>Stages of Data: Analyzed</Link> to learn more.

__3. Measurements are accurate when: (Select one of the following)__

<Quiz>
- they represent the correct values.*
- observations do not contradict each other.
- when they are unique responses (e.g. no duplication).
- when the same unit of measure is used in all relevant measurements.
</Quiz>

Revisit Lesson <Link page='25' workshop='data-literacies'>Stages of Data: Cleaned</Link> to learn more.

__4. Research data can be defined as: (Select all that apply)__

<Quiz>
- materials or information necessary to come to my conclusion.*
- the recorded factual material commonly accepted in the scientific community as necessary to validate research findings.*
- method of collection and analysis.
- objective and error-free.
</Quiz>

Review lesson <Link page='2' workshop='data-literacies'>Data is Foundational</Link> to learn more.

__5. The stages of data is a single iteration process, i.e. there is a fixed stage progression from data collection to visualization. (Select one of the following)__

<Quiz>
- False*
- True
</Quiz>

Revisit Lesson <Link page='15' workshop='data-literacies'>Stages of Data: Raw</Link> to learn more.

__6. Tiny data format only allows one value per cell. (Select one of the following)__

<Quiz>
- True*
- False
</Quiz>

Revisit Lesson <Link page='21' workshop='data-literacies'>Data Structures: Tidy Data</Link> to learn more.

# Theory to Practice

Now that you've gained an understanding of some of the considerations around data and ethics, let's think a bit further about how you may apply some of what we have discussed in your work.  {/* Below the quiz segment you will find some additional readings that dives deeper into some of the topics that were covered in our lessons. If you would like, you can also consider exploring the "Projects or Challenges to Try" to see how you might apply what you've learnt. */}

We invite you to consider the ethical implications of the dataset of [Refugee Arrivals](https://raw.githubusercontent.com/GC-DRI/DRI24/main/uploads/refugee-arrivals-by-destination.csv) that you will learn to manipulate in the Pandas workshop. This dataset is adapted from the one compiled by Jeremy Singer-Vine for his 2015 BuzzFeed article [“Where U.S. Refugees Come From — And Go — In Charts.”](https://www.buzzfeednews.com/article/jsvine/where-us-refugees-come-from-and-go-in-charts#.vooNwy74jO) which includes information on refugee arrivals to the United States between 2005 and 2015 from the Department of State’s Refugee Processing Center." 

Some questions to ask in preparation are:
- Who collected this data? 
- How and why is this data being collected? 
- What assumptions are baked into this data? 
- What consequences does this data have in the world? 
- What does this data tell us about our world?

{/* ### Review your knowledge: 6 questions from the lessons

TODO: fix links to pages of lessons

__1. Structured data can be: (Select all that apply)__

<Quiz>
- a XML list.*
- a Excel table.*
- an email chain.
- a collection of text files.
</Quiz>

Revisit lesson [Stages of Data: Processed/Transformed](/workshops/data-ethics/?page=5) to learn more.

__2. Descriptive analysis helps us summarize a data set. (Select one of the following)__

<Quiz>
- True*
- False
</Quiz>

Revisit lesson [More Stages of Data: Analyzed](/workshops/data-ethics/?page=8) to learn more.

__3. Measurements are accurate when: (Select one of the following)__

<Quiz>
- they represent the correct values.*
- observations do not contradict each other.
- when they are unique responses (e.g. no duplication).
- when the same unit of measure is used in all relevant measurements.
</Quiz>

Revisit lesson [More Stages of Data: Cleaned](/workshops/data-ethics/?page=7) to learn more.

__4. Research data can be defined as: (Select all that apply)__

<Quiz>
- materials or information necessary to come to my conclusion.*
- the recorded factual material commonly accepted in the scientific community as necessary to validate research findings.*
- method of collection and analysis.
- objective and error-free.
</Quiz>

Revisit lesson [Data is Foundational](/workshops/data-ethics/?page=2) to learn more.

__5. The stages of data is a single iteration process, i.e. there is a fixed stage progression from data collection to visualization. (Select one of the following)__

<Quiz>
- False*
- True
</Quiz>

Revisit lesson [Stages of Data: Raw](/workshops/data-ethics/?page=4) to learn more.

__6. Tiny data format only allows one value per cell. (Select one of the following)__

<Quiz>
- True*
- False
</Quiz>

Revisit lesson [Side Note on Data Structures: Tidy Data](/workshops/data-ethics/?page=6) to learn more. */}

## Suggested Further Resources

### Data management

- [Marieke Guy's data management presentation](https://www.slideshare.net/MariekeGuy/bridging-the-gap-between-researchers-and-research-data-management) discusses some ideas around planning for data management before, during, and after a project.
- [Queensland University of Technology's Management of Research Data](http://www.mopp.qut.edu.au/D/D_02_08.jsp) provides some ideas around ownership, roles and responsibilities of data-driven projects. While this is specific to Queensland University of Technology, it is useful for understanding some of the different roles in a research project.
- [The Graduate Center, CUNY's Data Management](https://libguides.gc.cuny.edu/c.php?g=159618&p=1045072) research guide provides resources and specific steps for CUNY faculty, staff, and students. 

### Ethics and ("big" data) research

- [The Council for Big Data, Ethics, and Society's Perspectives on Big Data, Ethics, and Society](https://bdes.datasociety.net/council-output/perspectives-on-big-data-ethics-and-society/) is a white paper that consolidates the council's discussions on big data, ethics, and society.
- [Catherine D'Ignazio & Lauren F. Klein's Data Feminism](https://data-feminism.mitpress.mit.edu/) (scroll down the page to access the book chapters for free). It looks at "big" data from a feminist perspective, and discusses the importance of understanding long histories and socio-political contexts in research, as well as providing an overview of the field.
- [Feminist Data's Manifest-No](https://www.manifestno.com) discusses the realities of "big" data and the fallacies of unequal harm and risk distribution, particularly towards marginalized communities.
- [Mimi Onuoha's Missing Data Sets](https://github.com/MimiOnuoha/missing-datasets) looks at "blank spots that exist in spaces that are otherwise data-saturated," that usually affect those who are the most vulnerable.
- [Digital Rhetorical Privacy Collective](https://drpcollective.com/) "is a coalition approach to studying privacy and surveillance in rhetoric, composition, and technical communication." The collective hosts the DRPC Privacy Week, provides teaching resources, and publishes a blog on all things privacy and writing. 

### Other Tutorials

- [Computational social science with R](https://compsocialscience.github.io/summer-institute/curriculum) is a 2-week summer institute program that follows the [Bit By Bit: Social Research in Digital Age](https://www.bitbybitbook.com/en/1st-ed/preface/) format. The current repository (updated: Jul, 2020) contains the institute's workshops and materials. 
- [The European Data Portal's tutorial on Open Data](https://www.europeandataportal.eu/elearning/en/module9/#/id/co-01) offers a guided insight to the importance of choosing the right format for open datasets.
- [The Data Visualization Catalogue](https://datavizcatalogue.com/search.html) by Severino Ribecca provides a guide to data visualizations for different types of data and narratives.
- [From Data to Viz](https://www.data-to-viz.com/) by From Data to Viz also provides a guide to data visualization for different types of data and narratives.

### Projects or Challenges to Try

- Consider a project where you are interested in the trend of Euro-American political views. You've decided to look at the [2018 European Social Survey](http://nesstar.ess.nsd.uib.no/webview/index.jsp?v=2&previousmode=table&regMod=corr&submode=variable&analysismode=table&study=http%3A%2F%2F129.177.90.83%3A80%2Fobj%2FfStudy%2FESS9e02.0&gs=undefined&variable=http%3A%2F%2F129.177.90.83%3A80%2Fobj%2FfVariable%2FESS9e02.0_V93&mode=documentation&top=yes) and the U.S.-based [2018 General Social Survey](https://gssdataexplorer.norc.org/variables/vfilter?utf8=%E2%9C%93&user_search_id=&state_id=&search_type=&keyword=politic&doslider=0&yrmin=1972&yrmax=2018&years=2018&subjects=&ssearch=&commit=SEARCH). How would you approach the data? If you're interested in reporting on the trend of global political views, what do you have to consider when you join these data sets? What assumptions do you have to make? How would you collapse responses?

### Discussion Questions

- How does increased data literacy add to your project planning? 
- How do you address your use of data and your ethics? For example,how might ethics play a part in the way you think about (a) data collection? (b) anonymity and confidentiality? (c) data and its relation to the communities it emerges from?
- Consider your next project, what are some considerations from this workshop that you might bring into your project?
