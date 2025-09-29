
var lines = prompt("Enter number of lines:");
for (var i = 1; i <= lines; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars = stars + "⭐";
    }
    document.write(stars + "<br>");
}

