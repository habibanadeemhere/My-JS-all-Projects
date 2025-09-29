alert("Welcome to the Secret Door Game!")
var choice = prompt("Choose a door: 1, 2, or 3")


if (choice === "1") {
    alert("Oops! A monster jumps out!🧟‍♂️")
    document.write("<h1 class = 'head1'>You opened Door 1... and got eaten by a monster! 😱</h1>")
    document.write("<img class = 'img1' src = 'https://www.icegif.com/wp-content/uploads/jump-scare-icegif-5.gif'></img>")
    document.write("<h2 class = 'head1'>Better Luck next time 😂</h2>")
}

else if (choice === "2") {
    alert("Congratulations! You found the treasure! 💰")
    document.write("<h1 class = 'head1'>You opened Door 2... and found a chest full of gold! 🎉</h1>")
    document.write("<img class = 'img1' src = 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyOXprMmNydnM4MzZtaXd3bHEyb2RqaGM2OTY3ZWF4N3k5cW93ZG15cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0IynKSD9UkNZ88a4/source.gif'></img>")
}


else if (choice === "3") {
    alert("Oh no! You fell into a trap hole! 🕳️")
    document.write("<h1 class = 'head1'>You opened Door 3... and fell into a deep trap. Ouch!</h1>")
    document.write("<img class = 'img1' src = 'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUycGdpbzkxMWE2ZXB5dG9ubjhrNHduMm5ueDI3ODU4Yjdxc2xwYTlzZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2JdTvi1rDgzQ67zW/source.gif'></img>")
    document.write("<h2 class = 'head1'>Better Luck next time 😂</h2>")
}

else {
    alert("That door doesn't exist!");
    document.write("<h1 class = 'head1'>Please choose a valid door next time. 🧐</h1>");
    document.write("<img class = 'img2' src = 'https://cdn0.iconfinder.com/data/icons/web-notifications-1/64/1._bad_gateway_502_error_http_code_server_problem_invalid_response_door_blocked-512.png'></img>")
}

