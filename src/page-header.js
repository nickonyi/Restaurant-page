import foodLogo from './food-logo.png';
const wrapper = document.createElement('section');
wrapper.classList.add('header');
document.body.appendChild(wrapper);

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

    navBar.appendChild(checkbox);
    navBar.appendChild(checkLabel)
    navBar.appendChild(logoDiv);
    navBar.appendChild(navDivContainer);
    wrapper.appendChild(navBar);

}


function pageHeaderContent() {
    const divHeader = document.createElement('div');
    divHeader.classList.add('div-header');

    //ceating left side div
    const divHeaderContentOne = document.createElement('div');
    divHeaderContentOne.classList.add('header-content-1');
    const divHeaderContentTwo = document.createElement('div');
    divHeaderContentTwo.classList.add('header-content-2');

    const divContentH = document.createElement('h1');
    const divContentPara = document.createElement('p');
    const divContentBtn = document.createElement('btn');

    divContentH.textContent = "Your favourite food delivered Hot & Fresh";
    divContentPara.textContent = "Healthy switcher chefs do all the prep work,like peeding,chopping and marrinating,so you can cook a fresh food";
    divContentBtn.textContent = "Order Now";

    //creatinng right side divs
    const imageContent = new Image();


    divHeaderContentOne.appendChild(divContentH);
    divHeaderContentOne.appendChild(divContentPara);
    divHeaderContentOne.appendChild(divContentBtn);

    divHeader.appendChild(divHeaderContentOne);
    divHeader.appendChild(divHeaderContentTwo);
    wrapper.appendChild(divHeader);

}


export { pageHeader, navBar, pageHeaderContent }