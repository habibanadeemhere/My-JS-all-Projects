alert("Welcome to this Animated, Fully responsive website!")

 var isDark = false;

    var button = document.getElementById("toggleBtn");
    var body = document.getElementById("pageBody");

    button.onclick = function () {
      if (isDark === false) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        isDark = true;
      } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        isDark = false;
      }
    };











