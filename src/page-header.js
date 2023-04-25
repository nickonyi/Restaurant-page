import foodLogo from './food-logo.png';
const wrapper = document.createElement('div');
wrapper.classList.add('container');
content.appendChild(wrapper);

function pageHeader() {



}

function navBar() {
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check-btn';

    const checkLabel = document.createElement('label');
    checkLabel.setAttribute('for', 'check-btn');
    checkLabel.classList.add('check');
    const iconLabel = document.createElement("i");
    iconLabel.classList.add("fas", "fa-bars");
    checkLabel.appendChild(iconLabel);

    const logoDiv = document.createElement('label');
    const logo = new Image();
    logo.classList.add('logo');
    logo.src = foodLogo;
    logoDiv.appendChild(logo);

    const navDivOne = document.createElement('li');
    const navDivTwo = document.createElement('li');
    const navDivThree = document.createElement('li');
    const navDivFour = document.createElement('li');
    const navDivFive = document.createElement('li');
    const navBtn = document.createElement('btn');
    const navDivContainer = document.createElement('ul');
    navDivContainer.classList.add('nav-div-container');
    navBtn.classList.add('nav-btn');
    navDivFive.appendChild(navBtn);

    const navDivList = [navDivOne, navDivTwo, navDivThree, navDivFour, navDivFive];
    for (let i = 0; i < navDivList.length; i++) {
        navDivContainer.appendChild(navDivList[i]);

    }

    navDivOne.textContent = "Home";
    navDivTwo.textContent = "Menu";
    navDivThree.textContent = "About us";
    navDivFour.textContent = "Contact us";
    navBtn.textContent = "Booking Now";


    navBar.appendChild(logoDiv);
    navBar.appendChild(navDivContainer);
    navBar.appendChild(checkLabel);
    navBar.appendChild(checkbox);
    wrapper.appendChild(navBar);



}



export { pageHeader, navBar }