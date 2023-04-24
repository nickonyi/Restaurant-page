import foodLogo from './food-logo.png';
const wrapper = document.createElement('div');
wrapper.classList.add('container');
content.appendChild(wrapper);

function pageHeader() {



}

function navBar() {
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const logo = new Image();
    logo.classList.add('logo');
    logo.src = foodLogo;


    wrapper.appendChild(logo);


}



export { pageHeader, navBar }