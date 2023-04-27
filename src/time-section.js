function timeSection() {
    const divTimeSection = document.createElement('section');
    divTimeSection.classList.add('div-time-section');

    const timeSectionDivOne = document.createElement('div');
    const iconItem1 = document.createElement('i');
    iconItem1.classList.add("fa-solid", "fa-clock");
    const midSecContent1 = document.createElement('div');
    midSecContent1.textContent = "Today 10.00am - 7.00pm";
    const footerContentOne = document.createElement('div');
    footerContentOne.textContent = "Working hours";
    timeSectionDivOne.appendChild(iconItem1);
    timeSectionDivOne.appendChild(midSecContent1);
    timeSectionDivOne.appendChild(footerContentOne);

    const timeSectionDivTwo = document.createElement('div');
    const iconItem2 = document.createElement('i');
    iconItem2.classList.add("fa-solid", "fa-location-dot");
    const midSecContent2 = document.createElement('div');
    midSecContent2.textContent = "Kitengela 100";
    const footerContentTwo = document.createElement('div');
    footerContentTwo.textContent = "Get directions";
    timeSectionDivTwo.appendChild(iconItem2);
    timeSectionDivTwo.appendChild(midSecContent2);
    timeSectionDivTwo.appendChild(footerContentTwo);

    const timeSectionDivThree = document.createElement('div');
    const iconItem3 = document.createElement('i');
    iconItem3.classList.add("fa-solid", "fa-square-phone");
    const midSecContent3 = document.createElement('div');
    midSecContent3.textContent = "+38(633)453 23 12";
    const footerContentThree = document.createElement('div');
    footerContentThree.textContent = "Call online";
    timeSectionDivThree.appendChild(iconItem3);
    timeSectionDivThree.appendChild(midSecContent3);
    timeSectionDivThree.appendChild(footerContentThree);



    divTimeSection.appendChild(timeSectionDivOne);
    divTimeSection.appendChild(timeSectionDivTwo);
    divTimeSection.appendChild(timeSectionDivThree);
    document.body.appendChild(divTimeSection);
}

export { timeSection }