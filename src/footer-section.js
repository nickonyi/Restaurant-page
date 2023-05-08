import footerLogo from './food-logo.png';

function footerSection() {
    const footerSection = document.createElement('section');
    footerSection.classList.add('footer-section');
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    const footerHeader = document.createElement('h1');
    footerHeader.classList.add('footer-header');
    footerHeader.textContent = 'Have Question in mind? Let us help you';
    //input text area
    const inputTextArea = document.createElement('input');
    inputTextArea.classList.add('input-text-area');
    inputTextArea.setAttribute('type', 'text');
    inputTextArea.setAttribute('placeholder', 'yourmail@gmail.com');
    inputTextArea.setAttribute('name', 'email');
    inputTextArea.setAttribute('id', 'email');
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.textContent = 'Send';
    inputTextArea.appendChild(submitButton);

    //const footer content
    const footerContentContainer = document.createElement('div');
    footerContentContainer.classList.add('footer-content-container');
    const footerContentHeader = document.createElement('div');
    footerContentHeader.classList.add('footer-content-header');
    const footerContentHeaderImage = document.createElement('img');
    footerContentHeaderImage.classList.add('footer-content-header-image');
    footerContentHeaderImage.src = footerLogo;
    const footerContentHeaderDivLinks1 = document.createElement('div');
    footerContentHeaderDivLinks1.classList.add('footer-content-header-paragraph');
    footerContentHeaderDivLinks1.textContent = 'Home';
    const footerContentHeaderDivLinks2 = document.createElement('div');
    footerContentHeaderDivLinks2.classList.add('footer-content-header-paragraph');
    footerContentHeaderDivLinks2.textContent = 'Menu';
    const footerContentHeaderDivLinks3 = document.createElement('div');
    footerContentHeaderDivLinks3.classList.add('footer-content-header-paragraph');
    footerContentHeaderDivLinks3.textContent = 'About us';
    const footerContentHeaderDivLinks4 = document.createElement('div');
    footerContentHeaderDivLinks4.classList.add('footer-content-header-paragraph');
    footerContentHeaderDivLinks4.textContent = 'Contact us';

    //the last bit of the footer section
    const footerContentHeaderTextArea = document.createElement('div');
    footerContentHeaderTextArea.classList.add('footer-content-header-text-area');
    const footerContentContainerDivO = document.createElement('div');
    footerContentContainerDivO.classList.add('footer-content-container-div-O');
    const footerContentHeaderTextContainer1 = document.createElement('div');
    footerContentHeaderTextContainer1.classList.add('footer-content-header-text-container');
    const footerContentHeaderTextContainer2 = document.createElement('div');
    footerContentHeaderTextContainer2.classList.add('footer-content-header-text-container');
    const footerContentHeaderTextContainer3 = document.createElement('div');
    footerContentHeaderTextContainer3.classList.add('footer-content-header-text-container');
    const footerContentHeaderTextContainer4 = document.createElement('div');
    footerContentHeaderTextContainer4.classList.add('footer-content-header-text-container');

    //foooter content header text Area text 1
    const footerContentHeaderTextAreaTextIcon1 = document.createElement('i');
    footerContentHeaderTextAreaTextIcon1.classList.add("fa-brands", "fa-facebook-f");
    const footerContentHeaderTextAreaTextIcon2 = document.createElement('i');
    footerContentHeaderTextAreaTextIcon2.classList.add("fa-brands", "fa-youtube");
    const footerContentHeaderTextAreaTextIcon3 = document.createElement('i');
    footerContentHeaderTextAreaTextIcon3.classList.add("fa-brands", "fa-vimeo-v");
    const footerContentHeaderTextAreaTextIcon4 = document.createElement('i');
    footerContentHeaderTextAreaTextIcon4.classList.add("fa-brands", "fa-twitter");

    //appending footer content header text icon 1 to footer content header text container 1
    footerContentHeaderTextContainer1.appendChild(footerContentHeaderTextAreaTextIcon1);
    footerContentHeaderTextContainer1.appendChild(footerContentHeaderTextAreaTextIcon2);
    footerContentHeaderTextContainer1.appendChild(footerContentHeaderTextAreaTextIcon3);
    footerContentHeaderTextContainer1.appendChild(footerContentHeaderTextAreaTextIcon4);


    //foooter content header text container 2
    const footerContentHeaderTextContainer2Div1 = document.createElement('div');
    footerContentHeaderTextContainer2Div1.classList.add('txt-content');
    footerContentHeaderTextContainer2Div1.textContent = 'Quality';
    const footerContentHeaderTextContainer2Div2 = document.createElement('div');
    footerContentHeaderTextContainer2Div2.classList.add('txt-content');
    footerContentHeaderTextContainer2Div2.textContent = 'Help';
    const footerContentHeaderTextContainer2Div3 = document.createElement('div');
    footerContentHeaderTextContainer2Div3.classList.add('txt-content');
    footerContentHeaderTextContainer2Div3.textContent = 'Share';
    const footerContentHeaderTextContainer2Div4 = document.createElement('div');
    footerContentHeaderTextContainer2Div4.classList.add('txt-content');
    footerContentHeaderTextContainer2Div4.textContent = 'Careers';

    //appending footer content header text container 2 children to footer content header text container 2
    footerContentHeaderTextContainer2.appendChild(footerContentHeaderTextContainer2Div1);
    footerContentHeaderTextContainer2.appendChild(footerContentHeaderTextContainer2Div2);
    footerContentHeaderTextContainer2.appendChild(footerContentHeaderTextContainer2Div3);
    footerContentHeaderTextContainer2.appendChild(footerContentHeaderTextContainer2Div4);

    //foooter content header text container 3
    const footerContentHeaderTextContainer3Div1 = document.createElement('div');
    footerContentHeaderTextContainer3Div1.classList.add('txt-content');
    footerContentHeaderTextContainer3Div1.textContent = '244-575-7648';
    const footerContentHeaderTextContainer3Div2 = document.createElement('div');
    footerContentHeaderTextContainer3Div2.classList.add('txt-content');
    footerContentHeaderTextContainer3Div2.textContent = 'hellow@food.com';
    const footerContentHeaderTextContainer3Div3 = document.createElement('div');
    footerContentHeaderTextContainer3Div3.classList.add('txt-content');
    footerContentHeaderTextContainer3Div3.textContent = 'press@food.com';

    //appending footer content header text container 3 children to footer content header text container 3
    footerContentHeaderTextContainer3.appendChild(footerContentHeaderTextContainer3Div1);
    footerContentHeaderTextContainer3.appendChild(footerContentHeaderTextContainer3Div2);
    footerContentHeaderTextContainer3.appendChild(footerContentHeaderTextContainer3Div3);

    //foooter content header text container 4
    const footerContentHeaderTextContainer4Div1 = document.createElement('div');
    footerContentHeaderTextContainer4Div1.classList.add('txt-content');
    footerContentHeaderTextContainer4Div1.textContent = 'Terms and Conditions';
    const footerContentHeaderTextContainer4Div2 = document.createElement('div');
    footerContentHeaderTextContainer4Div2.classList.add('txt-content');
    footerContentHeaderTextContainer4Div2.textContent = 'Privacy Policy';

    //appending footer content header text container 4 children to footer content header text container 4
    footerContentHeaderTextContainer4.appendChild(footerContentHeaderTextContainer4Div1);
    footerContentHeaderTextContainer4.appendChild(footerContentHeaderTextContainer4Div2);


    //appending foooter content children to footer content header
    footerContentHeader.appendChild(footerContentHeaderImage);
    footerContentHeader.appendChild(footerContentHeaderDivLinks1);
    footerContentHeader.appendChild(footerContentHeaderDivLinks2);
    footerContentHeader.appendChild(footerContentHeaderDivLinks3);
    footerContentHeader.appendChild(footerContentHeaderDivLinks4);


    //appending footer content header text container children to footer content header text area    
    footerContentHeaderTextArea.appendChild(footerContentHeaderTextContainer1);
    footerContentHeaderTextArea.appendChild(footerContentContainerDivO);
    footerContentContainerDivO.appendChild(footerContentHeaderTextContainer2);
    footerContentContainerDivO.appendChild(footerContentHeaderTextContainer3);
    footerContentContainerDivO.appendChild(footerContentHeaderTextContainer4);










    //appending children to footerSection
    footerContentContainer.appendChild(footerContentHeader);
    footerContentContainer.appendChild(footerContentHeaderTextArea);
    footerSection.appendChild(footerContainer);
    footerSection.appendChild(inputTextArea);
    footerSection.appendChild(submitButton);
    footerSection.appendChild(footerContentContainer);
    footerContainer.appendChild(footerHeader);


    document.body.appendChild(footerSection);

}

export { footerSection }