const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBar = document.querySelector('ul');
const body = document.querySelector('body');
const navLinks = document.getElementsByClassName('nav-link');

let menuOpen = false;

toggleButton.addEventListener('click', () => {
    // if(menuOpen) {
    //     toggleButton.classList.remove('open');
    //     menuOpen = false;
    // } else {
    //     toggleButton.classList.add('open');
    //     menuOpen = true;
    // }
    toggleButton.classList.toggle('open');
   
    body.classList.toggle('lock-scroll');

    navBar.classList.toggle('active');
});

for (i=0;i<navLinks.length;i++) {
    navLinks[i].addEventListener('click',() => {
        navBar.classList.remove('active');
        toggleButton.classList.remove('open');
        body.classList.remove('lock-scroll');
    });
   
}


var scroll = new SmoothScroll('a[href*="#"] ,button',{
	speed:800
}); 