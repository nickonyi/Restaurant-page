function timeSection() {
    const divTimeSection = document.createElement('section');
    divTimeSection.classList.add('div-time-section');

    const timeSectionDivOne = document.createElement('div');
    timeSectionDivOne.classList.add('time-sec-1');
    const iconItem1 = document.createElement('i');
    iconItem1.classList.add("fa-solid", "fa-clock");
    const midSecContent1 = document.createElement('div');
    midSecContent1.classList.add('midsec-content');
    midSecContent1.textContent = "Today 10.00am - 7.00pm";
    const footerContentOne = document.createElement('div');
    footerContentOne.classList.add('foot-content');
    footerContentOne.textContent = "Working hours";
    timeSectionDivOne.appendChild(iconItem1);
    timeSectionDivOne.appendChild(midSecContent1);
    timeSectionDivOne.appendChild(footerContentOne);

    const timeSectionDivTwo = document.createElement('div');
    timeSectionDivTwo.classList.add('time-sec-2');
    const iconItem2 = document.createElement('i');
    iconItem2.classList.add("fa-solid", "fa-location-dot");
    const midSecContent2 = document.createElement('div');
    midSecContent2.classList.add('midsec-content');
    midSecContent2.textContent = "Kitengela 100";
    const footerContentTwo = document.createElement('div');
    footerContentTwo.classList.add('foot-content');
    footerContentTwo.textContent = "Get Directions";
    timeSectionDivTwo.appendChild(iconItem2);
    timeSectionDivTwo.appendChild(midSecContent2);
    timeSectionDivTwo.appendChild(footerContentTwo);

    const timeSectionDivThree = document.createElement('div');
    timeSectionDivThree.classList.add('time-sec-3');
    const iconItem3 = document.createElement('i');
    iconItem3.classList.add("fa-solid", "fa-square-phone");
    const midSecContent3 = document.createElement('div');
    midSecContent3.classList.add('midsec-content');
    midSecContent3.textContent = "+38(633)453 23 12";
    const footerContentThree = document.createElement('div');
    footerContentThree.classList.add('foot-content');
    footerContentThree.textContent = "Call Online";
    timeSectionDivThree.appendChild(iconItem3);
    timeSectionDivThree.appendChild(midSecContent3);
    timeSectionDivThree.appendChild(footerContentThree);



    divTimeSection.appendChild(timeSectionDivOne);
    divTimeSection.appendChild(timeSectionDivTwo);
    divTimeSection.appendChild(timeSectionDivThree);
    document.body.appendChild(divTimeSection);
}

export { timeSection }