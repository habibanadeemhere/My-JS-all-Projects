
let score = 0;

let user1 = prompt("Q1 : What is Javascript used for? \n Options : styling , functionality , structure");
if (user1 === "functionality") {
    score++;
    document.write("Answer 1 : Your answer was Correct!<br>");
} else {
    document.write("Answer 1 : Your answer was wrong<br>");
}


let user2 = prompt("Q2 : How to declare a variable in js? \n Options : var username; , int username; , variable username;");
if (user2 === "var username;") {
    score++;
    document.write("Answer 2 : Your answer was Correct!<br>");
} else {
    document.write("Answer 2 : Your answer was wrong<br>");
}


let user3 = prompt("Q3 : Which symbol ends a statement in js? \n Options : ! , = , ;");
if (user3 === ";") {
    score++;
    document.write("Answer 3 : Your answer was Correct!<br>");
} else {
    document.write("Answer 3 : Your answer was wrong<br>");
}


let user4 = prompt("Q4 : What is camelCase? \n Options : MyVariable , my_variable , myVariable");
if (user4 === "myVariable") {
    score++;
    document.write("Answer 4 : Your answer was Correct!<br>");
} else {
    document.write("Answer 4 : Your answer was wrong<br>");
}


let user5 = prompt("Q5 : != means? \n Options : not equal , equal to , greater than");
if (user5 === "not equal") {
    score++;
    document.write("Answer 5 : Your answer was Correct!<br>");
} else {
    document.write("Answer 5 : Your answer was wrong<br>");
}

let user7 = prompt("Q7 : How to get 2nd item in array? \n Options : arr[2] , arr[1] , arr(1)");
if (user7 === "arr[1]") {
    score++;
    document.write("Answer 7 : Your answer was Correct!<br>");
} else {
    document.write("Answer 7 : Your answer was wrong<br>");
}


let user8 = prompt("Q8 : What is an array? \n Options : collection of data , loop , string");
if (user8 === "collection of data") {
    score++;
    document.write("Answer 8 : Your answer was Correct!<br>");
} else {
    document.write("Answer 8 : Your answer was wrong<br>");
}


let user9 = prompt("Q9 : typeof '145' returns? \n Options : number , string , nan");
if (user9 === "string") {
    score++;
    document.write("Answer 9 : Your answer was Correct!<br>");
} else {
    document.write("Answer 9 : Your answer was wrong<br>");
}

let user10 = prompt("Q10 : Which means equal in comparison? \n Options : = , == , ===");
if (user10 === "==") {
    score++;
    document.write("Answer 10 : Your answer was Correct!<br>");
} else {
    document.write("Answer 10 : Your answer was wrong<br>");
}

let user11 = prompt("Q11 : What does prompt() do? \n Options : displays a message , asks user input , shows alert");
if (user11 === "asks user input") {
    score++;
    document.write("Answer 11 : Your answer was Correct!<br>");
} else {
    document.write("Answer 11 : Your answer was wrong<br>");
}

let user12 = prompt("Q12 : What does push() do in an array? \n Options : removes the last element , adds an item at the end , adds an item at the start");
if (user12 === "adds an item at the end") {
    score++;
    document.write("Answer 12 : Your answer was Correct!<br>");
} else {
    document.write("Answer 12 : Your answer was wrong<br>");
}


let user13 = prompt("Q13 : What does pop() do? \n Options :  adds item at end , deletes entire array ,  removes last item");
if (user13 === "removes last item") {
    score++;
    document.write("Answer 13 : Your answer was Correct!<br>");
} else {
    document.write("Answer 13 : Your answer was wrong<br>");
}


let user14 = prompt("Q14 :  What does shift() do? \n Options : removes first item , adds item at end ,  adds item at start");
if (user14 === "removes first item") {
    score++;
    document.write("Answer 14 : Your answer was Correct!<br>");
} else {
    document.write("Answer 14 : Your answer was wrong<br>");
}

alert("Ready to see your final score?");

document.write("<div class='score-box'>You got " + score + " out of 14 correct.</div>");

if (score >= 10) {
    document.write("<div class='score-box'>🎉 You passed the quiz!</div>");
} else {
    document.write("<div class='score-box'>❌ You failed the quiz. Try again!</div>");
}








