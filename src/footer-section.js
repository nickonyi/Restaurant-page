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

    //appending footer content header text icon 1 to footer content header text container 1
    footerContentHeaderTextContainer1.appendChild(footerContentHeaderTextAreaTextIcon1);

    //appending foooter content children to footer content header
    footerContentHeader.appendChild(footerContentHeaderImage);
    footerContentHeader.appendChild(footerContentHeaderDivLinks1);
    footerContentHeader.appendChild(footerContentHeaderDivLinks2);
    footerContentHeader.appendChild(footerContentHeaderDivLinks3);
    footerContentHeader.appendChild(footerContentHeaderDivLinks4);


    //appending footer content header text container children to footer content header text area    
    footerContentHeaderTextArea.appendChild(footerContentHeaderTextContainer1);
    footerContentHeaderTextArea.appendChild(footerContentHeaderTextContainer2);
    footerContentHeaderTextArea.appendChild(footerContentHeaderTextContainer3);
    footerContentHeaderTextArea.appendChild(footerContentHeaderTextContainer4);










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