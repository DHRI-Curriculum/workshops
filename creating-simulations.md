---
title: Creating Simulations With Python
cover title: Simulations With Python
description: "In this workshop, you will learn how to create very basic simulations in Python. The workshop will employ the logic of Python's 'object-oriented' methodology to create two small simulations:  a dice rolling simulation and a Critter simulation that tracks the population growth of an imaginary species of critter based on a variety of factors. These exercises are intended to be a fun introduction to higher-level Python concepts, and to give you a sense of how you can use Python to create simulations that model real-world scenarios."

programming_language: 'jupyter'

learning objectives:
    - 'Become familiar with core programming concepts, including classes, functions, and methods.'
    - 'Understand the interplay between functions and methods in a larger, more complex program.'
    - 'Create objects with custom attributes and functionality.'
    
facilitators: 
    name: 'Zachary Lloyd'

estimated time:
    - 3 hours

prerequisites: 
    - Intro to Python: 
        description: (required) This workshop relies heavily on concepts from the Python workshop, and having a basic understanding of how to use the commands discussed in the workshop will be central for anyone who wants to learn about higher-level Python concepts.
        required: true
    - Data Ethics: 
        description: (recommended) This workshop will give you a basis for thinking through the ethical considerations of your programming projects.
        recommended: true

authors:
    - 'Zachary Lloyd'

readings:
    - Want to learn programming, but not convinced that the Python language is the right language? Check out [Five Reasons Why Learning Python Is The Best Decision](https://medium.com/datadriveninvestor/)
    - "Some concrete ideas for how to use Python: [What Can I Do With Python?](https://realpython.com/what-can-i-do-with-python/)"

ethical considerations:
    - Simulations are often used to model real-world scenarios. In this workshop, we will be creating a simulation that tracks the population growth of a proposed (imaginary) species of Critter, taking into account a variety of biological and environmental factors. While this simulation is not meant to be a realistic model, it is important to consider the ethical implications of creating simulations that are meant to model real-world scenarios. For example, what are the implications of creating a simulation that models the spread of a disease? What are the consequences if we fail to consider the racial or socioeconomic factors that might influence the spread of that disease? What about using that simulation to make policy decisions? These are all important questions to consider when creating simulations, and we encourage you to think through the ethical implications of your own simulations as you create them.

projects:
    - 4 Cool Simulation Projects with Python:
        description: This video will give you some project ideas and links to the code for creating simulations in Python.
        link: https://www.youtube.com/watch?v=M39R2A8kuh8

---

# Introduction

A simulation is a model of a real-world system or process. Simulations are used to predict the behavior of a system, to test various conditions, or to analyze the effects of different variables. Simulations are often used in scientific research, but they can also be used to model social, economic, or political systems. For instance, during the Covid-19 pandemic, researchers used simulations to model the spread of the virus and to predict the effects of various public health measures. While the simulations we will create today will be very basic, they follow the same underlying logic as more complex simulations. 

In this workshop, you will learn how to create very basic simulations using Jupyter notebooks and the Python programming language. The workshop will employ the logic of Python's "object-oriented" methodology to create two small simulations:  a dice rolling simulation and a Critter simulation that tracks the population growth of an imaginary species of critter based on a variety of factors. 

:::info
[Object-oriented programming](https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP#:~:text=Object%2Doriented%20programming%20(OOP)%20is%20a%20computer%20programming%20model,has%20unique%20attributes%20and%20behavior.) is a programming paradigm that uses objects and their interactions to design applications and computer programs. It is based on the concept of objects, which can contain data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).
:::

In general, these exercises are meant to expose you to some of the higher-level concepts integral to Python programming. So, without further ado, let's begin!

# Part 1 - Throwing Some Dice

First, let's create our dice rolling simulation. We will create a program that allows us to simulate a die roll x number of times and analyze the overall results.

The general outline and goals for this part of the workshop are as follows:

__1)__ Create a simple dice rolling program to demonstrate classes and objects on a basic level.

Concepts we'll focus on:
- Class declaration and naming conventions
- Constructors/init
- Methods (functions within classes)
- Objects and instantiation

__2)__ Run the simulation by rolling the dice as many times as we want, and evaluate the results.

Concepts we'll focus on:
- Passing methods as arguments into other classes/functions
- Specifying iterations
- Using stats methods
- Printing results

As you can see, we will be covering quite a lot of new concepts and skills. It is natural to feel a bit overwhelmed at first, but don't worry--we will be taking things step-by-step. Let's begin!

## Getting Started

A full source file of the program we will be writing in this section can be imported here: 

::jupyter{ipynb="https://raw.githubusercontent.com/GC-DRI/DRI24/main/uploads/creating-simulations/DiceSim_full.ipynb"}

You are welcome to use the source file as a reference, but we encourage you to try to write the code yourself first. If you get stuck, you can always refer to the source file for help. 

Let's begin writing our own program by opening Jupyter notebooks. On the side of the screen, click the "Open Code Editor" button to slide out the Jupyter environment. First, let's create a new Python file called `DiceSim` (the Python (Pyodide) version will suffice). Because we will be using random numbers, and because we want to perform statistical methods on values, we will need to import two libraries at the top:

```python
import random
import statistics as stats
```

This import will allow us to use Python's `random` module. Remember to press <kbd>shift</kbd> + <kbd>enter</kbd> to run the cell.

:::info
If you have used other programming languages you might be familiar with the concept of [seeding](https://www.w3schools.com/python/ref_random_seed.asp). For our purposes, we do not need to explicitly seed random number generation when using Python's random library, as it will use either current system time or OS random resources by default.
:::

Because we will be referencing the statistics library a few times in our code, we can `import` it `as stats`, just to shorten what we have to type every time.

## Creating Our Class

Next, let's create a `class` to represent our die object.  You can think of a class like a user-defined blueprint or prototype from which objects are created. Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made. Each class instance can have features attached to it for maintaining and modifying its state.

For example, if we were to define a `Car` class, we might consider what attributes a car has:  brand, mileage, top speed, diesel or gas, stick or auto, 2-door or 4-door, etc. We could begin defining these characteristics as part of the overall class `Car` using variables. Variables particular to a class are called __data members__. We could then consider what actions a car can perform:  e.g., drive, brake, refuel, etc., and begin to write some functions in our `Car` class that describe these actions. Generally, functions that are specific to a certain class are called __methods__.  Unlike functions proper, methods use __.__ (dot) notation in order to be called--you'll see exactly what that means here shortly.

Because we are creating a dice simulator here, let's go ahead and create a new class `Die`. In a new cell in your Jupyter notebook, type the following:

```python
# create a new die class
class Die:  
    def __init__(self, sides):  
        self.sides = sides
```

We begin by defining our class. By convention, class names in Python are always Uppercase. We then initialize our class using the `__init__` method.  

The `__init__` method is a special method that Python runs automatically whenever we create a new "instance" (a new object) of a class. This method has two leading underscores and two trailing underscores, a convention that helps prevent Python’s default method names from conflicting with your own method names. The `self` parameter is required in the method definition, and it must come first before any other parameters. It _must_ be included in the definition because whenever we call this method later, the method call will automatically pass the `self` argument. Every method call associated with an object (in this case, our die object) automatically passes `self`, which is a reference to the object itself; it gives the individual instance access to the attributes and methods in the class. If this still seems a bit confusing, don't worry--we'll see how this works in practice throughout the workshop.

Our other parameter is `sides`. We include this in our `__init__` because every die object that is created will have a certain number of sides (typically 6) as an attribute. In short, your `__init__` parameters should always include characteristics that you want _every newly created object in your class_ to have.  

Next, we define our parameters, prefixed with `self`. Any variable prefixed with `self` is available to every method in the class, and we’ll also be able to access these variables through any instance created from the class. The line `self.sides`, for example, takes the value associated with the parameter `sides` and assigns it to the local variable `sides`, which is then attached to the object being created.

## Creating Our Method

Next, let's create a __method__ that allows us to roll our die object. Because methods are a part of a class, make sure you are indenting the method so that it is _within_ our overall `Die` class, in the same cell.

```python
    # create a 'roll' method to return a random # between 1-6
    def roll(self):
        return random.randint(1, self.sides)
```

We first define (`def`) our method, and pass in the parameter `self`, which allows us to access the data members of our class. Next, we generate a random number using the `random` library. The `randint` method returns an integer in a range between the first value (`1`) and the second (`self.sides`). We also `return` the value from the method so we can check the results.

## Displaying Results

Now that we have our class and our method set up, we can create (or "instantiate") a new die object and give it a roll. In a new cell, type the following:

```python
die = Die(6)   
print(die.roll())
```

To create a new object, you begin as you would with any variable definition. Here we indicate that our `die` (lowercase!) object will belong to our class `Die`. Because we also need to pass in a value for how many sides our object has, we will give it a value of `6`.

Next, we use a `print` statement to display the results of our roll method. To call our roll method, we must use our die object and __.__ (dot) notation--recall that methods _need to act upon an object or instance of the class_ in order to be called.

And that's it! You have successfully created a new die object that can be rolled.  If you run the cell, you should see your roll displayed. Additionally, each time you run the cell, you should see a new random number between 1 and 6 in your display.

## Challenge!

If the user rolls a six, tell them that they're a winner and get a prize. If they didn't roll a 6, display that they're a loser.



:::secret
Create a new variable that stores a roll. Then, use an `if` statement to check if the roll is equal to 6, and display the appropriate message using an `f-string`:

```python
r = die.roll()
if r == 6:
    print(f"You won a prize for rolling {r}!")
else:
    print(f"You rolled a {r}, not nearly as cool as a 6...")
```
:::

## Evaluation

How are methods called?

:::quiz
- `method_name()`
- `method_name.method()`
- `object.method_name()`*
- `object.method_name.method()`
:::

# Part 1 Cont'd - The Dice Simulator

Now that we have our basic die object, let's create a dice rolling simulator. We will create a program that allows us to simulate our die roll `x` number of times and analyze the overall results. 

In particular, let's say that we wanted to throw our die object 1000 times (instead of just once) and analyze the results of *all* the rolls. We can simulate this process by creating a new class devoted specifically to this task, so let's go ahead and make it now.

## Creating a New Class

Let's call our class `DiceSim`. As we mentioned, what we want this class to do is to roll our die x amount of times, and print the results. Thinking this through, we will likely want two methods as part of this class:

1. A method that utilizes our `roll()` method we've already created above and runs it 1000 times, instead of just once.
2. A method that analyzes the results of those 1000 rolls.  

So, let's do just that:

```python
class DiceSim:
    """Rolls our dice x amount of times and prints the results

    Parameters:
        dice_method: The dice method that we'll pass in
        iterations: The number of times to run the sim"""

    def __init__(self, dice_method, iterations):
        # take initial parameters
        self.dice_method = dice_method
        self.iterations = iterations
        self.results = []
        self.run()
```

We will pass in our two parameters for the class, one for our roll method we created previously and the other for the number of iterations we want the simulator to run. Like before, we prefix each data member with `self` so that we can access the values from anywhere within our class. We also create a new empty list `results`, so that we have a place to store the results of our dice rolls. We also have one method call, `run()`. Calling a method in the initializer area like this means that it will automatically run every time a new object of the `DiceSim` class is created.

## Creating Our Class Methods

Next, let's define the methods for our simulator class. We will want one to run our roll method, and one to analyze and print our results:

```python
    # run our die roll method and store the results
    def run(self):
        for i in range(self.iterations):
            result = self.dice_method()
            self.results.append(result)
        self.report()
```

In our `run()` method, we use a `for` loop to cycle through by the number of iterations we will set. We then store the results of the die roll method in a local variable `result`, and `append()` that result to our `results` list. Again, because we have called the `run()` method in our class initializer, it will run every time a new object of the `DiceSim` class is created. You can also see that we are running a new `report()` method at the end of our `run()` method, so that we have a chain of events that will occur every time a new object is created.

We then want to define our next method, `report()`, to analyze the results from `run()`.

```python
    # analyze and report the results
    def report(self):
        max_num = max(self.results)
        min_num = min(self.results)
        mean = stats.mean(self.results)
        median = stats.median(self.results)
        mode = stats.mode(self.results)
        std_dev = stats.stdev(self.results)
        variance = stats.variance(self.results)
        print(
            f"""Number of Simulations: {self.iterations}
            Max: {max_num}
            Min: {min_num}
            Mean: {mean}
            Median: {median}
            Mode: {mode}
            Standard Deviation: {std_dev}
            Variance: {variance}"""
        )
```

Our `report()` method uses Python's built-in `max()` and `min()` functions to catch the highest and lowest roll in the list. Using the `stats` library, we also check the mean, median, mode, standard deviation, and variance of the results and print it to the terminal.

Our last step is to create a new instance of our simulator class in a new cell, like we did before:

```python
die1 = Die(6)
sim = DiceSim(die1.roll, 1000)
```

First, we create a new instance of our `Die` class (remember, you can create as many new objects of a class as you'd like) and give it 6 sides. Then, we create a new `sim` object. As parameters, we pass in our roll method and 1000, for the number of iterations to run.

And that's it! If you run the final cell, you should see a report of the results of the simulation.

## Evaluation

What are some differences and similarities between a function and a method?

:::secret
__Definition:__
_Function_: A function is a self-contained block of code that performs a specific task and can be defined independently of any class or object. It takes input arguments, processes them, and returns a result.
_Method_: A method is a function that is associated with an object or class. It is called on an object and can access the data within that object.

__Usage:__
_Function_: Functions are standalone entities and can be called from anywhere in the code, provided they are in the scope.
_Method_: Methods are associated with objects or classes and are called on instances of those objects or the class itself.

__Syntax:__
_Function_: Functions are defined using the `def` keyword and can be called using the function name.
_Method_: Methods also use the def keyword but are defined within a class and are accessed using dot notation (`object.method()` or `class.method()`).
:::

:::keywords
- class
Classes allow us to create new types of software objects, with their own attributes and functionalities.

- method
Methods are functions that belong to a class. They are called using __.__ (dot) notation.

- self
The keyword self represents an instance of a class and binds its attributes with the given arguments.
:::

# Part 2 - The Critter Simulator

__Goal:__  Create a simulation that tracks the population growth of a proposed (imaginary) species of Critter, taking into account a variety of biological and environmental factors.

__General Process:__
1. Create global variables to define initial parameters for use in the simulation
2. Create Critter class and constructors/initializers for each critter object
3. Consider what critters need to survive, creating relevant methods (reproducing, gathering food, etc.).
4. Create 'run year' function to simulate a yearly run-through of all variables and factors
5. Create 'populate simulator' function to produce our starting population
6. Print results of each aspect of simulation to monitor changes
7. Add more complexity/factors to the simulator (e.g., disasters)

__Concepts to focus on:__
- Creating logical environment parameters
- Component-driven design: separating out functions so that each has a single general purpose
- Working with lists
- Coordinating data among member functions and methods

## Getting Started

You can import the full source file for this section here: 

::jupyter{ipynb="https://raw.githubusercontent.com/GC-DRI/DRI24/main/uploads/creating-simulations/CritterSim_full.ipynb"}

Again, while you can use the source file as a reference, we encourage you to try to write the code yourself first. If you get stuck, you can always refer to the source file for help.

To begin, let's create a new Jupyter Python file called `CritterSim`. Because we will be using a lot of random values in our program, we'll first want to `import` the `random` module at the beginning of the file, like we did in the previous section:

```python
import random
```

## Setting Up Our Global Variables

When we write variables outside a specific function or class, they are considered __global__ variables. Global variables can be accessed and used anywhere in your program. This is in contrast to __local__ variables, which have limited scope (i.e., they can only be accessed in the particular function or class in which they live).

Global variables are useful when you want multiple functions to be able to easily access their values. It is important to note, however, that it is generally good coding practice to _keep your use of global variables to a minimum_. Too many global variables will make your programs confusing for other programmers looking over your code, and will require more overhead/computing power than is usually necessary.

Since our program is relatively small, and just to keep things simple for our example, we'll set up our initial parameters for the simulation as a series of global variables in a new cell below our `import` statement, like so:

```python
# initial global parameters - variables that can be accessed anywhere in your program
startPopulation = 50  # the beginning population
year = 0  # the starting year
resources = 2   # the number of units of food each able critter can produce
food = 0    # total value of food available (able critters * resources)
fertility_x = 10  # lowest age at which critter can give birth
fertility_y = 20  # upper age at which critter can give birth
disasterChance = 10 # chance of a disaster occurring
critterList = []  # list to hold all critter objects
```

As you can see, each variable is commented to give some context for its use. These variables will make more sense once we actually start to employ them, but let's do a quick run-through of their purposes:

<table>
    <tr>
        <th>Variable</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>startPopulation</strong></td>
        <td>The initial number of Critters we want to start with in our simulation. Although 50 is not a realistic number (considering the real-life genetic consequences of inbreeding), it will work for the purposes of our simulation.</td>
    </tr>
    <tr>
        <td><strong>year</strong></td>
        <td>The variable we'll use to track what year of the simulation it is.</td>
    </tr>
    <tr>
        <td><strong>resources</strong></td>
        <td>The number of individual food units our critters can produce. For our simulation, each critter will need exactly one unit of food to survive, so to give them a fighting chance we'll let each "able" critter (more on that later) produce 2 units.</td>
    </tr>
    <tr>
        <td><strong>food</strong></td>
        <td>The total number of units of food that all critters produce and have to eat in a given year.</td>
    </tr>
    <tr>
        <td><strong>fertility_x</strong></td>
        <td>The lowest possible age at which a critter can give birth (so they're not too young). Let's be optimistic with these critters and propose they can live for a rather long time (perhaps 50 years or so), and set the low fertility level to 10.</td>
    </tr>
    <tr>
        <td><strong>fertility_y</strong></td>
        <td>The highest possible age at which a critter can give birth (so they're not too old). To start, let's keep the fertility period rather short and set the maximum age to 20 (we can always adjust it later).</td>
    </tr>
    <tr>
        <td><strong>disasterChance</strong></td>
        <td>The chance of a disaster occurring. We'll set this to 10% for now, but we can always adjust it later.</td>
    </tr>
    <tr>
        <td><strong>critterList</strong></td>
        <td>A list that will contain the entire population of our critters. We will access and modify this list continuously in order to assess our total population growth.</td>
    </tr>
</table>

## Creating the Critter Class

Now that we have our initial parameters, let's begin writing our Critter class in a new cell:

```python
# create our Critter class
class Critter:
    def __init__(self, age):
        self.sex = random.randint(0,1)  # 0 for male, 1 for female
        self.age = age # we'll set the age differently based on diff factors
```

We begin by defining our class, passing the `self` parameter like usual. Our other parameter is `age`. We include this in our `__init__` because every critter object that is created will have an age that we want to track and modify. In short, as a reminder, your `__init__` parameters should always include characteristics that you want _every newly created object in your class_ to have. Because we want our critters to reproduce, we also give them a variable `sex`. For every critter instance created, we will assign them a random sex:  0 for male, 1 for female.

## Populating the Simulation

Now that we have created our Critter class, let's create a function that will populate our simulation with critters. I say function (not method), because it will live outside of our Critter class. Were we building a much more complex program, we'd likely want to create an entirely new Simulation class to control this aspect. Because our program is relatively simple, however, we'll simplify our code using a function. Take a look at the following code:

```python
#populate our simulation with critters
def popSim():
    for x in range(startPopulation):
        critterList.append(Critter(random.randint(2, 45)))
    print(len(critterList))
```

Try to read through it line by line and describe what it does. Can you explain it? After giving it a try, you can reveal the description below.

:::secret
Here we have created a new function `popSim()`. This function will take our `startPopulation` variable defined above and populate our `critterList` with that many objects. To give our simulation an added element of randomness, each starting critter will be created with a random age between 2 and 45. Lastly, we print the length of our `critterList` to make sure it is working properly.
:::

To run the function, create a new cell and type the following:

```python
popSim()
```

### Challenge

How might we see the age of each critter in our list? Remember, we defined an `age` attribute in our initializer.

:::secret
```python
# print out the age of each critter
for critter in critterList:
    print(critter.age)
```
:::

## Creating Our Class Methods

Now that we have set up some very basic characteristics of our critters and a population to work with, we will want to let them perform some actions. We can do this by writing __methods__. Let's create two very basic methods, `gather()` and `reproduce()`.

Each of these methods serve different purposes in our simulation. The `gather()` method will allow our critters to gather food, and will also determine if any critters starve to death from a stockpile shortage (we'll attempt this latter part later). The `reproduce()` method will allow our critters to reproduce (obviously), and will allow our overall population to grow as the years advance. Let's start with the `gather()` method.

## The gather() Method

Because we will certainly want our critters to eat, let's create a method that allows them to gather food. Make sure you properly indent your method so it is contained _within_ the Critter class we defined above, in the same cell.

```python
    # method for critters to gather food
    def gather(food, resources):
        ableCritters = 0  # start with a fresh value, then add based on current population
        for critter in critterList:
            if critter.age > 10 and critter.age < 40:
                ableCritters +=1
        food += ableCritters * resources
        print(f"Food stockpile: {food}.")
        print(f"Able critters: {ableCritters}.")
```

We first define our `gather` method, and pass two arguments into it:  `food` and `resources`, which we have already declared above as global variables. We then create a new variable, local to the `gather` method:  `ableCritters`. Because we wouldn't want our newborn baby critters going out to gather food until they've grown up a bit, we will use `ableCritters` to ensure they won't gather food until they're of a certain age. For now, let's set this value to 10 (anticipating a generous long life and old age for our critters), and let them enjoy their retirement from gathering food at 40. So, using a `for` loop, we'll then cycle through our `critterList` and see if any existing critters are over the age of 10 and under the age of 40. If they are, we'll add them to the number able to gather food and store the number. Next, we'll use this value, multiplied by our resource value, to determine the current total quantity of food stores. Lastly, we print out the results of both our food stockpile and our number of able critters.

To see this method in action and make sure we are getting proper results, we can call it below, in the cell where we populate our sim. As you should recall, every method needs an object or a class to act upon. In this case, we can simply designate our class like so:

```python
popSim()
Critter.gather(food, resources)
```

If you run the program now, you should see the results of our `gather` method displayed. If you run it again, you should see the results change, as the number of able critters will be different each time. In any case, there should always be twice the amount of food as there are able critters, because each able critter can produce two units.

## The reproduce() Method

For a population growth simulation, another basic action our critters should take is to reproduce. Let's specify some parameters to determine which critters are able to produce offspring. Again, within your Critter class, create a new method called `reproduce()` like so:

```python
    def reproduce(fertility_x, fertility_y):
        for critter in critterList:
            if critter.sex == 1:    # if the critter is female and of defined fertile age
                if critter.age >= fertility_x:
                    if critter.age <= fertility_y:
                        if random.randint(0, 4) == 1:  # give a 1 in 5 (20%) chance of pregnancy
                            critterList.append(Critter(0)) # add newborn critter                
```

Our method will take the two fertility parameters we established before (which determine the ages at which a critter can reproduce) and use a `for` loop to take a look at each critter in the list to see if they are suitable candidates for giving birth. We first check if they are female, and if so, check if they are within our circumscribed fertility age. If both of these conditions are satisfied, we'll then give the critter a 20% chance of getting pregnant with a simple `random` calculation. If the result is a 1, we'll create a new critter and append it to the critter list with an age of 0.

We can now run the `reproduce()` method in the same cell as the `gather()` method, like so:

```python
popSim()
Critter.gather(food, resources)
Critter.reproduce(fertility_x, fertility_y)
```

This will show you if any new critters were born in the first (and currently only) year of the simulation. Note that at the moment, you will not be able to see the new critters in the list, because we have not yet advanced the years or aged our existing critters. We will tackle those aspects soon.

### Challenge!

Occasionally, new critters may not be born during a year. To analyze this, once the reproduction cycle has finished, print out a short message to the terminal saying "New critters have been born!", if indeed new critters were born that year.

:::secret
At the start of the reproduce method, create a new local variable to record how many critters we start out with. Then, outside of the `for` loop, compare that initial value with the new quantity or length (`len()`) of the critter list. So, your modified code should look something like this:

```python
    def reproduce(fertility_x, fertility_y):
        # Challenge: print statement to show that new critters were born
        initial_pop = len(critterList)    # create a local var to store how many critters we start with

        for critter in critterList:
            if critter.sex == 1:    # if the critter is female and of defined fertile age
                if critter.age >= fertility_x:
                    if critter.age <= fertility_y:
                        if random.randint(0, 4) == 1:  # give a 1 in 5 (20%) chance of pregnancy
                            critterList.append(Critter(0)) # add newborn critter                

        # If new critters have been added, print the message
        if initial_pop < len(critterList):    
            print("New critters were born!")
```

Note that if you printed the message inside the `for` loop (instead of outside of its scope) you would display messages _every single_ time a new critter is created (making your readout rather messy), rather than after _all_ new critters are created.
:::

## The runYear() Function

Now that our critters can gather food and reproduce, we will want to create the function that allows our simulation to run through a year and age our critters accordingly. Because this is a standalone function, write the following in a new cell below your `popSim()` function and method calls:

```python
def runYear(food, resources, fertility_x, fertility_y):
    Critter.gather(food, resources)
    Critter.reproduce(fertility_x, fertility_y)

    # age our existing critters
    for critter in critterList:
        if critter.age > 50:
            critterList.remove(critter)
        else:
            critter.age +=1
```

We will pass 4 arguments into this function:  our food, resource, and fertility values. The reason we need to get at these values is because we will want to then pass them into our Critter method calls. That is the first step we take: calling our `gather()` and `reproduce()` functions, at the beginning of each year. Because we are calling these methods outside of their class, we need to prefix the calls with our class name `Critter`. Because this function is meant to encapsulate the activities our critters undertake each year, it makes sense to call these methods here. Since we are calling them here, you can delete both method calls from the previous cell (in the cell with the `popSim()` function).

Next, we will age our existing critters by one year. For now, let's set their maximum age to 50 years--once they are over 50 years, we will assume they die of old age, and we `remove` the critter from our list. If they are not over 50, we simply add one year to their age.

## Running the Simulation

If you call and run the `runYear()` function, you'll notice that we are not yet actually advancing the years in our simulation. Our goal is to run our simulation for a certain number of years, and then print out the results for each year.

To do this, we will want to create a `while` loop that will run our simulation repeatedly until certain conditions are met. To do this, we can define a new cell that encapsulates both our `popSim()` function and our `runYear()` function. Firstly, then, delete any cells that contain these functions calls (we will call them in the new designated cell instead).

In the new cell, type the following:

```python
print("--------The Critter Simulation has begun!---------\n\n")
popSim()
while len(critterList) < 100 and len(critterList) > 1:
    runYear(food, resources, fertility_x, fertility_y)
    year += 1
    print(f"Current year: {year}\n")
```

We first print a message notifying the user the simulation has started. Next, we run our `popSim()` function to initially populate our critter species. Then, we use a `while` loop to make sure the program runs until certain conditions are satisfied. Our conditions will be population limits:  so, the simulation will terminate once either all critters have died (until the population reaches 0), or until the population reaches over 100. Until this happens, we will continue to run our `runYear()` function, and increase the current year. We also print that year to the screen, so we can keep track of our simulation.

Run all cells in your notebook again, and you should see the simulation run through a variable number of years (however many it takes that particular instance of the simulation to reach 100 critters).

Great! We now have a functioning simulation that allows our critters to gather food, reproduce, and age. However, our critters are currently living in a kind of critter utopia, without any dangers or environmental factors to worry about. Let's add some more complexity to our simulation.

## Starvation and Death

Sadly, starvation is a reality for many species. If the current food stockpile is not sufficient to feed every critter in a given year, we will (unfortunately) need to reduce our critter population accordingly.

In order to simulate this on a basic level, we will want to add a few more lines to our `gather` method (because this method is concerned with food production/consumption). Let's go back to that method and add the following code:

```python
        # if there are not enough able critters to produce food in the pop, food will deplete
        if food < len(critterList):   
            del critterList[0:int(len(critterList) - food)] # del a slice of the list based on how many critters starve
                # since we are starting from the beginning of our list, we are likely killing older critters (because they will have aged)
            food = 0
            print(f"Some critters starved to death! :(")
        else:
            food -= len(critterList) # otherwise, just remove food equal to the amount of critters, the rest is stored for next year

        print(f"Population after starvation/feeding is: {len(critterList)}.")
        print(f"After eating, food stockpile is currently {food}.") # food = initial food - pop after eating
```

As mentioned, for each critter to survive they will need exactly one unit of food per year. So, in this modified method, we first check to see if our food stockpile is smaller than the amount of existing critters. If so, we use the `del` statement to remove a slice of our critter list. As you can see, we are taking a slice starting from the beginning of the list and removing an amount equal to the excess amount of critters. While this is not quite as random as it could be (because we are always starting at the beginning of our list), it might make sense that more elderly critters are not able to reach the food stockpile as quickly as their younger, more able counterparts. If some critters starve, then we display a message telling us so. If no critters starve, we simply remove an amount of food equal to the critter population, and store the surplus for next year. We then print our overall results.

## Environmental Disasters

Lastly, let's set up a basic environmental disaster scenario. To add this functionality, we will want to add a few lines to our `runYear()` function, so that every year we have a potential chance for a disaster. Let's go back to that function and add the following:

```python
    # set up chance for a disaster
    if random.randint(0, 100) < disasterChance:  
            del critterList[0:int(random.uniform(0.05,0.2)*len(critterList))]
            print("A disaster has occurred!")
            print(f"There are now {len(critterList)} surviving critters.")

    print(f"After reproducing and/or any disasters, critter population is currently {len(critterList)}.")
```

Using our `disasterChance` global value we set at the outset of the program, we test to see if a random number falls in its range (i.e., if it's within 0-9, so a 10% chance). If so, we will `del` (delete) some critters from our list, again taking a slice. We generate a random number between 5% and 20% to see how much damage the disaster will inflict. We multiply this value by the length of our critter list to get a 5-20% slice of our population, and then delete that slice. To keep tabs in our readout, we display a message saying a disaster has occurred, and print out the surviving population.

If you run the simulation now, you should see that we now have a more interesting simulation playing out, with the new elements we defined factoring into our critter population growth (or lack thereof!).

## Evaluation

What is the difference between a global and a local variable?

:::secret
__Global variables__ are variables that are defined outside of a function or class. They can be accessed _anywhere_ in your program. 

__Local variables__, on the other hand, are variables that are defined within a function or class/method. They are only accessible _within_ the scope of that function or class.
:::

:::keywords
- len()
The length function allows us to catch the number of elements in a given list.

- remove()
Removes the current single value from a list.

- del()
Removes a particular range or slice from a list.

- while
While statements will loop through a set of instructions until certain conditions are met.
:::

# Theory to Practice

Congratulations for making it this far! You now have a working simulation and a basic understanding of how to create your own classes, methods, and functions. These are key concepts in object-oriented programming, and will be useful to you as you continue to learn Python and other programming languages.

Below are some additional ideas, challenges, and resources to help you continue to build on what you've learned.

### Complicate Things! 

To gain more familiarity with managing larger programs, try to add some more complexity to your simulation. Here are some ideas:

- Create a new "play" method that allows your critters some much needed time for relaxation and fun. If critters are not able to play, they will become sad and unmotivated/unable to gather food for the population in a given year. If they are able to find time to play, however, they will be more motivated to gather food and will produce extra resources.
- Add a new method that allows your critters to die of disease (instead of just starvation and disasters). If a critter survives a disease, they will be immune to it for the rest of their lives.
- Create different temperaments or personalities for individual critters. For instance, some critters might be more aggressive and less likely to die of starvation, but more likely to die due to infighting with other critters. Other critters might be more motivated to find a mate and reproduce, but less likely to gather food. There are endless combinations you can envision and create!

### Visualize Your Simulation

At the moment, our simulation output isn't very user-friendly. It is quite difficult to read and assess trends in the population growth (along with just not being very pretty to look at). If you want to take your simulation to the next level, you might try using the `matplotlib` library to create a visualization of your simulation. This will allow you to see the population growth in a plot graph, and will give you a better sense of how your population is evolving over time. 

Let's look at a brief example of how we might achieve this functionality by plotting the population growth over time.

To do this, you will first need to import the `matplotlib` library at the beginning of your program, like so:

```python
import matplotlib.pyplot as plt
```

Then, you will want to create a new list to store the population of your critters at the end of each year. To do this, add the following line to your global variables:

```python
popList = []
```

Next, you will want to add a new line to your `runYear()` function, like so:

```python
    # add the current population to our list
    popList.append(len(critterList))
```

This will add the current population to our `popList` at the end of each year. Finally, you will want to add the following lines to the end of your simulation, after the `while` loop:

```python
# plot the results
plt.plot(popList)
plt.ylabel('Population')
plt.xlabel('Year')
plt.show()
```

This will plot the results of your simulation, showing the population growth over time. You can add this functionality to your program, and then run all cells to see how it works.

To get more practice, try adding more elements to your plot, such as the food stockpile, or the number of able critters. You might also create entirely new plots detailing the trends of disasters or starvation. You can also try adding a legend to your plots, or changing the color of the lines. There are many ways to customize your plots using the `matplotlib` library, so check out the documentation linked in resources below and feel free to experiment! 

### Additional Resources

If you want to learn more about object-oriented programming in Python, I recommend checking out this W3 schools tutorial:  [Python Classes and Objects](https://www.w3schools.com/python/python_classes.asp)

If you want to learn more about how to use `matplotlib`, you can check out the [official documentation](https://matplotlib.org/stable/tutorials/pyplot.html).

If you are interested in doing more with simulations in Python, you might want to check out the SimPy library, which allows you to create discrete event simulations. You can find the documentation [here](https://simpy.readthedocs.io/en/latest/). 

PyChrono is another Python library that allows you to create simulations, but with a focus on physics. You can find more about the library [here](https://projectchrono.org/pychrono/).



