function Night() {
  document.body.classList.remove('day');
  document.body.classList.add('night');
  document.getElementById('icon').textContent = '🌙';
  document.getElementById('greeting').textContent = 'Good Night!';
}

function Day() {
  document.body.classList.remove('night');
  document.body.classList.add('day');
  document.getElementById('icon').textContent = '🌞';
  document.getElementById('greeting').textContent = 'Good Morning!';
}





