import foodLogo from './food-logo.png';
import bgImageOne from './bg-img-1.png';
const wrapper = document.createElement('section');
wrapper.classList.add('header');
document.body.appendChild(wrapper);



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
    const navDivTwoLink = document.createElement('a');
    navDivTwoLink.classList.add('a-link');
    navDivTwoLink.setAttribute('href', '#menu');
    navDivTwoLink.textContent = "Menu";
    navDivTwo.appendChild(navDivTwoLink);
    const navDivThree = document.createElement('li');
    const navDivFive = document.createElement('li');
    const navBtn = document.createElement('btn');
    const navDivContainer = document.createElement('ul');
    navDivContainer.classList.add('nav-div-container');
    navBtn.classList.add('nav-btn');
    navDivFive.appendChild(navBtn);

    const navDivList = [navDivOne, navDivTwo, navDivThree, navDivFive];
    for (let i = 0; i < navDivList.length; i++) {
        navDivContainer.appendChild(navDivList[i]);

    }

    navDivOne.textContent = "Home";
    navDivThree.textContent = "About us";
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
    const divContainBtn = document.createElement('div');
    divContainBtn.classList.add('div-container-btn');
    const divContentBtn = document.createElement('btn');
    divContentBtn.classList.add('div-content-btn');
    divContainBtn.appendChild(divContentBtn);

    const iconLabel = document.createElement("i");
    iconLabel.classList.add("fa-solid", "fa-arrow-right");






    divContentH.textContent = "Your favourite food delivered Hot & Fresh";
    divContentPara.textContent = "Healthy switcher chefs do all the prep work,like peeding,chopping & marrinating,so you can cook a fresh food";
    divContentBtn.textContent = "Order Now";
    divContentBtn.appendChild(iconLabel);


    //creatinng right side divs
    const imageContent = new Image();
    imageContent.classList.add('content-image');
    imageContent.src = bgImageOne;


    divHeaderContentOne.appendChild(divContentH);
    divHeaderContentOne.appendChild(divContentPara);
    divHeaderContentOne.appendChild(divContainBtn);

    divHeaderContentTwo.appendChild(imageContent);

    divHeader.appendChild(divHeaderContentOne);
    divHeader.appendChild(divHeaderContentTwo);
    wrapper.appendChild(divHeader);

}

function links() {

    const element = document.getElementById("menu");
    const linktag = document.querySelector('.a-link');
    linktag.addEventListener('click', () => {
        console.log(element);
        element.scrollIntoView({
            behavior: "smooth"
        });
    });

}

export { navBar, pageHeaderContent, links }