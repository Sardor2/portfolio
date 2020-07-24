const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBar = document.querySelector('ul');
const body = document.querySelector('body');

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
})
