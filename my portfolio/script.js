var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');

menuToggle.onclick = function () {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  } else {
    navLinks.classList.add('active');
  }
};

var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href').substring(1);
    var target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  };
}
