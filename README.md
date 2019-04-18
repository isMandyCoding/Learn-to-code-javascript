# Learn to Code: Introduction to JavaScript

Brought to you by Galvanize. Learn more about the way we teach code at [galvanize.com](http://galvanize.com).

Get to this repo by typing in URL: **jsrepo.sage.codes**

## Overview
The goal of this brief course is to provide you with a fun introduction to the world of web development with Javascript.

#### Here's what we'll be doing:
* Overview of basic JavaScript concepts
* How to Solve a common interview Question
* Playing around and break things


#### What is programming?
Programming is giving your computer a set of instructions to perform a task. 

This sounds simple but it can get complicated! 


## Setting up your computer


#### Please set up the following:

* A web browser to see what we're working on as others see it (Recommend Google Chrome: [chrome.google.com] (http://chrome.google.com))
* We will be using an online text editor for this workshop. You can sign up here: [https://repl.it/](https://repl.it/)


Well... that was easy! 


## What this workshop is

A super friendly introduction to JavaScript No previous experience expected! 

You can't learn EVERYTHING in ~2 hours. But you can learn enough to get excited and comfortable to keep working and learning on your own! 

- This course is for absolute beginners
- Ask Questions!
- Answer Questions!
- Help others when you can
- Its ok to get stuck, just ask for help!
- Feel free to move ahead
- Be patient and nice


## About me:

Hello I'm [Sage Elliott](http://sageelliott.com/). I'm a Technology Evangelist here at Galvanize! For the past decade I've worked as a software and hardware engineer with Startups and Agencies in Seattle, WA and Melbourne, FL. I love making things with technology! I'm Currently learning more about computer vision and deep learning deep learning!

**Note:** I'm not a Galvanize Instructor, they're way better at teaching!

- Website: [sageelliott.com](http://sageelliott.com/)
- Twitter: [@sagecodes](https://twitter.com/@sagecodes)
- LinkedIn: [sageelliott](https://www.linkedin.com/in/sageelliott/) 
- Email: [sage.elliott@galvanize.com](mailto:sage.elliott@galvanize.com)

Reach out to me if interested in:

- breaking into the tech industry 
- learning resources
- meetup recommendations 
- learning more about Galvanize
- giving me suggestions for events!
- being friends


## About you!

Give a quick Intro!

- Whats your name?
- Whats your background?
- Why are you interested in JavaScript?

## What is javaScript?

### A very brief history

Created by Brendan Eich in 1995 in ONLY 10 days during his time at Netscape Communications.

A lot of updates have happened of course since then, but its still fun to see some of the [quirks](https://www.destroyallsoftware.com/talks/wat) still in the language!

Read more about the history of JavaScript [here](https://en.wikipedia.org/wiki/JavaScript).

Javascript is often used with HTML and CSS to create dynamic web pages. 

### Who uses javaScrip?

Almost everyone!

- Large Companies (Google, Facebook)
- Startups
- Agencies
- Pretty much anyone using web technology

It's one of the safest languages to learn for getting a job!


### What can you do with JavaScript

- Web Development
	- Front-End
	- Back-End
- Mobile Development 
- [Machine learning](https://js.tensorflow.org/) 😱
- [Embedded(Hardware) Programming](http://ejs.co/) 😲

#### Popular Frameworks to keep in mind

When learning more about JS you'll probably keep learning about these!

- Node
- Express
- React
- Angular
- Vue

We're doing a [React workshop next week](https://www.meetup.com/Learn-Code-Seattle/events/260067513/)!


## JavaScript Basics:

## Comments
You'll see comments throughout code. In Javascript they are made with `//`. They are a great way of explaining what your code is doing. So when you come back to it months later it won't be as confusing. Or when a new team member works on your code base

```
// I am a comment. I do not change any output
```

```
/*
I am 
a
multi
line 
comment
*/
```

## Print output

In programming its tradition to start with printing the output of "Hello, World!". You do this in JavaScript with the `console.log()` function!

print Hello, World!

`console.log("Hello, World!")`

## Variables:
Variable are a way to store information.
This is super useful! You can then receive or update the variable in your program. You'll see this later!

Think of it as naming a piece of data.

We're going to define our variable using the keyword `var`. 

```
var twitter = "@sagecodes";
var score = 0;

console.log(twitter)

```

### Declaring Variables

In newer versions of JavaScript you may see `let` or `const` used instead of `var`.

- `Const` is used to declare variables you do not want to change later in your code. 

- `let` is similar to `var`, but has a newer featured called block scoping and perhaps more importantly prevents name collision.

### Examples:

using `var`

```
var globalvar = 'hello'

// CAN declare new variable with existing name (it overwrites)
var globalvar = 'by'

// CAN assign new value to variable
globalvar = 'new value'

```

using `let`

```
let globalvar = 'hello'

// CANNOT declare new variable with existing name
let globalvar = 'by'

// CAN assign new value to variable
globalvar = 'by'
``` 

using `const`

```
const globalvar = 'hello'

// CANNOT declare new variable with existing name
const globalvar = 'by'

// CANNOT assign new value to variable
globalvar = 'by'
``` 

Essentially `let` and `const` are considered "safer" to use.


We're going to use `var` for the rest of the workshop today and we won't dive deeper into the differences today, but you can read more about `let` & `const` [here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75). 


## Interact with dialog boxes
Using dialog boxes can be simple way to get started interacting with users.

**Note**: These don't work in repl, but we can use them in our own files or in our developer console. I'll show you how to do this!

Alert: Pop up information in a dialog box

`alert("Hello, I'm a pop up");`
 
Prompt: get information from a user in dialog box

`prompt("I'm a pop up you can type in!");`

### Challenge: Get a users name

Use the `prompt()` function above to ask a user for a name, save it in a variable called `name` and print the variable using `console.log()`

You will have to use your developer console for this one!


## Data Types:
We're going to stick with the basics, so We wont be going over EVERY data type in javascript, but you you can read a more comprehensive list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).  

Feel free to try these code samples out in your [repl](https://repl.it/)!

### Numbers:

Numbers are written just like you would think. Just the number! No quotes or symbols to worry about. If you do put quotes around a number it will become a string (see next)

`25` `100`

Multiple, Add, Divide, Compare

- `5 * 5` | output: 25
- `5 + 5` | output: 10
- `8 / 2` | output: 4
- `8 > 2` | output: true
- `8 % 8` | output: 0

### Strings:
Strings can be a collection of letters, symbols and/or numbers. They are made by surrounding the content with quotation marks.

`"Hello, World."`
`"CrAzy Random String 987879896jvdjvda &&(&(@*(*"`

Can we add strings together? Try it out!

#### Print strings with variable in them:

Concatenation

```
var name = "Alexa"
var age = 40
var career = "programmer"

var s = "My name is " + name + ". I am " + age + " years old. I am a " + career + "." ;

console.log(s)

```

A newer ES6 way! 
This is much cleaner and easier to edit later.

**note** The string containing the variable using back-ticks |  ` | not single quotes. 

```
var name = "Alexa"
var age = 40
var career = "programmer"

var s = `My name is ${name}. I am ${age} years old. I am a ${career}. `;

console.log(s);

```

### Booleans:
You can think of Booleans as yes(true) and no(false)

`true` `false`

We'll go into how to use these in a little bit. For now just remember they exist!

### Arrays (lists):

Often used to store a list of values.

#### Create array

```
var tvshows = ['West World','Mr. Robot', 'Game of Thrones'];
console.log(tvshows);
```

#### Access Items in Array

```
var tvshows = ['West World','Mr. Robot', 'Game of Thrones'];

// print the first item in array;
console.log(tvshows[0]);
```

#### Update Items in Array

```
var tvshows = ['West World','Mr. Robot', 'Game of Thrones']

console.log(tvshows[0]);

// Assign new value to first item of array
tvshows[0] = "Robots in the west";

// print the first item in array
console.log(tvshows[0]);
```

#### Adding Items in Array

```
var tvshows = ['West World','Mr. Robot', 'Game of Thrones']

console.log(tvshows);

// add new value to first item of array
tvshows.push("Firefly");

// print the first item in array
console.log(tvshows);
```

#### Removing Items from Array


```

var tvshows = ['West World','Mr. Robot', 'Game of Thrones', "Firefly"]

console.log(tvshows);

// remove last item with pop
tvshows.pop();
console.log(tvshows);

// Target item to remove
tvshows.splice(0, 2)


// print the first item in array
console.log(tvshows);

```

### Objects (Dictionaries):

#### Create Object

`person =	{ "name": "Bob", "age": 50, "occupation": 'programmer' }`

```
var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer'
};

```

#### Access Items in an Object


```
var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer'
};


console.log(person);

// two ways of accessing items
console.log(person.name);
console.log(person['age']);

// example using object inside a string senence. 
var s = `My name is ${person.name}. I am ${person["age"]} years old. I am a ${person.occupation}. `;

console.log(s);

```

#### Update Items in Object


```
var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer'
};


console.log(person);

// Select element and assign new variable
person.name = "Bob";

console.log(person);

```

#### Adding Items in Object

```
var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer'
};


console.log(person);

// or person['newkey']
person.newkey = "Im a new item";

console.log(person);

```

#### Removing Items from Object

```

var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer',
  "newkey": "Im a new item"
};


console.log(person);

// use delete
delete person.newkey

console.log(person);

```


### Access Object value in Array 

```
var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer',
  "newkey": "Im a new item"
};

// Add object to list
var listy = [3, "hello", person]

console.log(listy)

// Access a object item from object in array
console.log(listy[2].name)

// Access a object item from object in array
console.log(listy[2]["age"])

```

### Access Array item in Object

```
var favfoods = ["apples", "mac & cheese", "chcolate"]

var person =	{
  "name": "Alexa",
  "age": 40,
  "occupation": 'programmer',
  "favs": favfoods
};


// Access a object item from object in array
console.log(person.favs[0])

// Access a object item from object in array
console.log(person.favs[1])

```




## Comparison Operators:
Comparison Operators are used quite frequently in programming. Its a great way to compare and use data.

Again we won't cover ALL of the comparison operators in this workshop, but you can see a full list of them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- `==` Equal
- `===` Strict Equal
- `!=` Not Equal
- `>` Greater Than
- `>=` Greater Than or Equal
- `<` Less Than
- `<=` Less Than or Equal

Example use:

`current_score >= highest_score`
This would return a boolean value. Depending on the values of these variables this would return either `true` or `false`. Try it in your console using numbers instead of variables!

`===` Strict Equal vs `==` Equal?



## Conditionals

When writing a program you'll often want to check if data meets a certain condition or not. We can use conditionals to make decision about our data and create different outcomes

 In javascript you'll often use the `if` statement. This may be followed by `else if` or `else` depending on how many conditions need to be checked.

Example:

```
if (guess == answer) {
    message = "You Win!";
} else if (guess < answer) {
    message = "Your guess is too low!";
} else if (guess > answer){
    message = "your guess is too high!";
} else {
	message = "I think you entered something wrong...";
}
```

### Challenge: Dynamic output

Use conditionals to compare two variable and change its output depending on the variables. 


## Loops
We're going to go over some of the basic loops in javascript, but yet again we're not going to cover everything, so you may want to read more about loops [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

Loops are used when you want to repeat something. You can repeat the exact same thing, or change some variable and repeat the action again.

two common types of loops are `for` and `while`.
`for` loops are often used to run a loop a specified amount of time.

`while` loops are often used to run a loop indefinitely until certain criteria are met.

Example:

This `for` loop will run 5 times, and print out the value of `i` to the console. 

```
var i;
for (i = 1; i <= 5; i++) {
    console.log(i)
}
```

Example:

This `while` loop will run until is no longer less than 8 

```
var i = 0;
while (i < 8) {
    console.log("I will crash your browser")
    i++
}

```

If `i` were set to 1 it would run this loop and print the string until the value of `i` changed. If you run this in your browser it will probably crash it!

```
var i = 0;
while (i == 1) {
    console.log("I will crash your browser")
}
```

### Challenge: FizzBuzz

[Fizzbuzz](https://en.wikipedia.org/wiki/Fizz_buzz) and variations of it is a popular interview question. 

"From 1 to 100.

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number."

Lets break it down and solve it together!




## Functions
Reduce, Reuse, Recycle

Functions make it easy to reuse code. If you find yourself repeating code you may want to turn it into a function!

Example:
This function takes in two arguments(a, b) and returns the value of them added together. 

```
function add(a, b) {
	return a + b; 
};
```
to use the function call it by writing its name and open/close parenthesis(). With arguments passed inside the parenthesis():

- `add(5,5)` | output: 10
- `add(2,5)` | output: 7

In this simple example you're not saving a ton of code, but imagine a function that uses many lines of code! 

### Challenge: Make a fizzBuzz function

Make our FizzBuzz Solution a function.

Allow that function to take in a number and run fizzbuzz on it.


```


for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

```


## Built in functions

JavaScript has a lot of built in functions ready to use!

Check them out [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)!



<!--## Lets do some code!



We're going to build a number guessing game using:


What are some ideas for improvements? 

- Exit on command
- data validation
- input the number range from popup
- output grammar depending on number of tries-->


# YOU DID IT! YOU'RE NOW A PROGRAMMER!

### Welcome! :)

### Keep learning!


Build project! You can start simple!

- Number guessing game
- todo list
- Look into making an interactive webpage


- [Hack Reactor Software Engineer Prep](http://bit.ly/gsoftprep) FREE | study at your own pace

- [Galvanize Data Science Prep Course](http://bit.ly/gprepdata) - FREE | study at your own pace



## Upcoming Events!

Visit the [Learn to code Seattle](https://www.meetup.com/Learn-Code-Seattle/) meetup for all upcoming events.


- [Intro to Data Science with Python](https://www.eventbrite.com/e/intro-to-data-science-with-python-tickets-58878207303) - 4/18 630pm
- [Intro to React](https://www.eventbrite.com/e/intro-to-react-tickets-58878540299) - 4/24 6:30pm
- [SQL 101](https://www.eventbrite.com/e/sql-101-tickets-58878275507) - 4/25 630pm
- [JavaScript Mini Bootcamp: Fundamentals II](https://www.eventbrite.com/e/javascript-mini-bootcamp-fundamentals-ii-tickets-58878315627) - 4/27 10am - 430pm
- [Intro to Web Scraping for Data Science](https://www.eventbrite.com/e/intro-to-web-scraping-with-python-for-data-science-tickets-58878488143) 5/2 6:30pm

## Galvanize Classes

#### Immersive Bootcamp


- [Software Engineer](https://www.galvanize.com/web-development) - 4/15/19 - 8/23/19
- [Data Science](https://www.galvanize.com/data-science) - 5/6/19 - 8/2/19


#### Part-Time Courses

- [Intro to Data Science](https://www.galvanize.com/part-time/intro-to-data-science) - 5/7/19 - 6/27/19

- [Digital Marketing](https://www.galvanize.com/part-time/digital-marketing) - 5/13/19 - 7/3/19

- [Data Analytics](https://www.galvanize.com/part-time/data-analytics) - 5/6/19 - 7/24/19

#### Co-working Space

[work in our building!](https://www.galvanize.com/entrepreneur)

## Questions

Please feel free to reach out to me with any questions! Let me know what you're planning to do next and how I can help!


- Website: [sageelliott.com](http://sageelliott.com/)
- Twitter: [@sagecodes](https://twitter.com/@sagecodes)
- LinkedIn: [sageelliott](https://www.linkedin.com/in/sageelliott/) 
- Email: [sage.elliott@galvanize.com](mailto:sage.elliott@galvanize.com)




