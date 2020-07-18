const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBar = document.querySelector('ul');

toggleButton.addEventListener('click', () => {
    console.log('clicked');
    navBar.classList.toggle('active');
})