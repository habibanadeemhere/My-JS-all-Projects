    var currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;


    function contactMe() {
      Swal.fire({
  icon: 'success',
  title: 'Thank you for your interest!',
  text: 'You can contact me at habibanadeem075@gmail.com',
  confirmButtonText: 'Got it!'
});
    }


    var skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "AOS Animations", "Responsive Design"];

    function filterSkills() {
      var input = prompt("Enter a skill to check if I have it (e.g., JavaScript):");
      var match = false;

      for (var i = 0; i < skills.length; i++) {
        if (skills[i].toLowerCase() === input.toLowerCase()) {
          match = true;
          break;
        }
      }

      if (match) {
         Swal.fire({
    icon: 'success',
    title: 'Great!',
    text: `✅ Yes! I know ${input}.`,
    confirmButtonText: 'Awesome'
  });
        
      } else {
         Swal.fire({
    icon: 'info',
    title: 'Not yet',
    text: `❌ I don't know ${input} yet, but I'm eager to learn!`,
    confirmButtonText: 'Got it'
  });
      }
    }


     function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btn.innerHTML = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btn.innerHTML = "Show Less";
    }
  }

