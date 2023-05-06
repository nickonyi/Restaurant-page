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






    //appending children to footerSection
    footerSection.appendChild(footerContainer);
    footerSection.appendChild(inputTextArea);
    footerSection.appendChild(submitButton);
    footerContainer.appendChild(footerHeader);


    document.body.appendChild(footerSection);
}

export { footerSection }