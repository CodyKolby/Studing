/* last days i spend on learning fundamentals of HTML and CSS but only a little still most of time course was about JS so today i will speak some about connecting JS and HTML
okey, first what i learned was how to get information from html to js and the only one commend i learnd was */

document.querySelector(/* class or id of HTML item */ ".score");

// and if we want get content from this (unless it's button or input then instead .textContent we use .value) so... 

document.querySelector(/* class or id of HTML item */ ".score").textContent // if string/number/etc;
document.querySelector(/* class or id of HTML item */ ".score").value // if input/button;

// some intresting things about it, we can use -- and ++ for this

document.querySelector(/* class or id of HTML item */ ".score").textContent--; // takes 1 from score
document.querySelector(/* class or id of HTML item */ ".score").textContent++; // addes 1 to score

// some important thing i learned is that the best what you can do is creating a lot variables, for storing data from documents, like this one

let score = 20;

document.querySelector(/* class or id of HTML item */ ".score").textContent = score;

// it's helpes later and you store data which are important in javaScript, one more important thing is that always first if should be if input data are missing, like you 
// need to input number, and first if should be like this
if (!number) {}

// Math.trunc works like toFixed(0);

// creating function for button

document.querySelector(".check").addEventListener("click", function() {"What should clicked button do if it will be clicked"} )


// and i think it's all for today :) 
