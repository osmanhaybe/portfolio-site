const nav = document.getElementById('nav');
const hmenu = document.getElementById('hmenu');
const exit = document.getElementById('exit');


hmenu.addEventListener('click', function(e) {
  nav.classList.toggle('hide-small');
  e.preventDefault();
});

exit.addEventListener('click', function(e) {
  nav.classList.add('hide-small');
  e.preventDefault();
});