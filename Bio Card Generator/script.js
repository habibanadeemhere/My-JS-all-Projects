var name = prompt("What is your name?");
var age = prompt("How old are you?");
var city = prompt("Which city do you live in?");
var hobby = prompt("What is your favorite hobby?");
var color = prompt("What is your favorite color?");
var dreamJob = prompt("What is your dream job?");
var quote = prompt("What's your favorite quote?");
var pictureURL = prompt("Paste a URL of your profile picture (e.g. from your social media):");

document.write("<div class='card'>");
if (pictureURL !== "" && pictureURL !== null) {
  document.write("<img src='" + pictureURL + "' alt='Profile Picture' class='profile-pic'>");
}
document.write("<h1>🌟 My Bio Card 🌟</h1>");
document.write("<p><strong>Name:</strong> " + name + "</p>");
document.write("<p><strong>Age:</strong> " + age + "</p>");
document.write("<p><strong>City:</strong> " + city + "</p>");
document.write("<p><strong>Hobby:</strong> " + hobby + "</p>");
document.write("<p><strong>Favorite Color:</strong> " + color + "</p>");
document.write("<p><strong>Dream Job:</strong> " + dreamJob + "</p>");
document.write("<p><strong>Favorite Quote:</strong><br><em>“" + quote + "”</em></p>");
document.write("</div>");
