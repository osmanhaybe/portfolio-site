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


// Open Modal for  Project 1
const openModalButton1 = document.getElementById('open-modal1');
const closeModalButton1 = document.getElementById('close-modal1');
const overlay1 = document.getElementById('overlay1');
const modal1 = document.getElementById("modal1");

openModalButton1.addEventListener('click', () => {
    openModal1(modal1);
  });



closeModalButton1.addEventListener('click', () => {
    closeModal1(modal1);
  });


function openModal1(modal1) {
  modal1.classList.add('active');
  overlay1.classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
}

function closeModal1(modal1) {
  modal1.classList.remove('active');
  overlay1.classList.remove('active');
  document.querySelector("body").style.overflow = 'visible';
}




//Open modal for Project 2
const openModalButton2 = document.getElementById('open-modal2');
const closeModalButton2 = document.getElementById('close-modal2');
const overlay2 = document.getElementById('overlay2');
const modal2 = document.getElementById("modal2");

openModalButton2.addEventListener('click', () => {
    openModal2(modal2);
  });



closeModalButton2.addEventListener('click', () => {
    closeModal2(modal2);
  });


function openModal2(modal2) {
  modal2.classList.add('active');
  overlay2.classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
}

function closeModal2(modal2) {
  modal2.classList.remove('active');
  overlay2.classList.remove('active');
  document.querySelector("body").style.overflow = 'visible';
}



// Open modal for Project 3
const openModalButton3 = document.getElementById('open-modal3');
const closeModalButton3 = document.getElementById('close-modal3');
const overlay3 = document.getElementById('overlay3');
const modal3 = document.getElementById("modal3");

openModalButton3.addEventListener('click', () => {
    openModal3(modal3);
  });



closeModalButton3.addEventListener('click', () => {
    closeModal3(modal3);
  });


function openModal3(modal3) {
  modal3.classList.add('active');
  overlay3.classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';

}

function closeModal3(modal3) {
  modal3.classList.remove('active');
  overlay3.classList.remove('active');
  document.querySelector("body").style.overflow = 'visible';
}


// Open modal for Project 4

const openModalButton4 = document.getElementById('open-modal4');
const closeModalButton4 = document.getElementById('close-modal4');
const overlay4 = document.getElementById('overlay4');
const modal4 = document.getElementById("modal4");

openModalButton4.addEventListener('click', () => {
    openModal4(modal4);
  });



closeModalButton4.addEventListener('click', () => {
    closeModal4(modal4);
  });


function openModal4(modal4) {
  modal4.classList.add('active');
  overlay4.classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
}

function closeModal4(modal4) {
  modal4.classList.remove('active');
  overlay4.classList.remove('active');
  document.querySelector("body").style.overflow = 'visible';
}
