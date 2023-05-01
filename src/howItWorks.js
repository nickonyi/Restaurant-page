function howItworks() {
    const howItWorks = document.createElement('section');
    howItWorks.setAttribute('id', 'how-it-works');
    howItWorks.setAttribute('class', 'how-it-works');
    const howItWorksHeaderContainer = document.createElement('div');
    howItWorksHeaderContainer.setAttribute('class', 'how-it-works-header-container');

    //how  it works header
    const howItWorksHeader = document.createElement('h2');
    howItWorksHeader.setAttribute('class', 'how-it-works-header');
    howItWorksHeader.textContent = 'Work';
    const howItWorksSubHeader = document.createElement('h1');
    howItWorksSubHeader.setAttribute('class', 'how-it-works-sub-header');
    howItWorksSubHeader.textContent = 'How it works';
    const howItWorksParagraph = document.createElement('p');
    howItWorksParagraph.setAttribute('class', 'how-it-works-paragraph');
    howItWorksParagraph.textContent = 'Reserve your table online or by phone, and join us for an unforgettable meal. You can also call us for any special requests or dietary restrictions.';

    //how it works contents
    const howItWorksContentHeader = document.createElement('div');
    howItWorksContentHeader.setAttribute('class', 'how-it-works-content-header');
    const howItWorksContentHeaderChild1 = document.createElement('div');
    howItWorksContentHeaderChild1.setAttribute('class', 'how-it-works-content-header-child1');
    const howItWorksContentHeaderChild2 = document.createElement('div');
    howItWorksContentHeaderChild2.setAttribute('class', 'how-it-works-content-header-child2');
    const howItWorksContentHeaderChild3 = document.createElement('div');
    howItWorksContentHeaderChild3.setAttribute('class', 'how-it-works-content-header-child3');

    //how it works content header child 1
    const howItWorksContentHeaderChild1Icon = document.createElement('i');
    howItWorksContentHeaderChild1Icon.classList.add("fa-solid", "fa-pizza-slice");
    const howItWorksContentHeaderChild1Header = document.createElement('h3');
    howItWorksContentHeaderChild1Header.setAttribute('class', 'how-it-works-content-header-child1-header');
    howItWorksContentHeaderChild1Header.textContent = 'Pick Meals';
    const howItWorksContentHeaderChild1Paragraph = document.createElement('p');
    howItWorksContentHeaderChild1Paragraph.setAttribute('class', 'how-it-works-content-header-child1-paragraph');
    howItWorksContentHeaderChild1Paragraph.textContent = 'Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.';

    //how it works content header child 2
    const howItWorksContentHeaderChild2Icon = document.createElement('i');
    howItWorksContentHeaderChild2Icon.classList.add("fa-solid", "fa-hand-pointer");
    const howItWorksContentHeaderChild2Header = document.createElement('h3');
    howItWorksContentHeaderChild2Header.setAttribute('class', 'how-it-works-content-header-child2-header');
    howItWorksContentHeaderChild2Header.textContent = 'Choose How Often';
    const howItWorksContentHeaderChild2Paragraph = document.createElement('p');
    howItWorksContentHeaderChild2Paragraph.setAttribute('class', 'how-it-works-content-header-child2-paragraph');
    howItWorksContentHeaderChild2Paragraph.textContent = 'Our team of chefs do the prep work no more chopping, measuring, or sink full of dishes. Enjoy a new menu each week!';
    //how it works content header child 3
    const howItWorksContentHeaderChild3Icon = document.createElement('i');
    howItWorksContentHeaderChild3Icon.classList.add("fa-solid", "fa-truck");
    const howItWorksContentHeaderChild3Header = document.createElement('h3');
    howItWorksContentHeaderChild3Header.setAttribute('class', 'how-it-works-content-header-child3-header');
    howItWorksContentHeaderChild3Header.textContent = 'Fast Deliveries';
    const howItWorksContentHeaderChild3Paragraph = document.createElement('p');
    howItWorksContentHeaderChild3Paragraph.setAttribute('class', 'how-it-works-content-header-child3-paragraph');
    howItWorksContentHeaderChild3Paragraph.textContent = 'Your freshly prepped meal kit arrives in a refrigerated box. Follow simple recipe steps to create your culinary masterpiece.';

    //appending of child elements to the content header child 1
    howItWorksContentHeaderChild1.appendChild(howItWorksContentHeaderChild1Icon);
    howItWorksContentHeaderChild1.appendChild(howItWorksContentHeaderChild1Header);
    howItWorksContentHeaderChild1.appendChild(howItWorksContentHeaderChild1Paragraph);
    //appending of child elements to the content header child 2
    howItWorksContentHeaderChild2.appendChild(howItWorksContentHeaderChild2Icon);
    howItWorksContentHeaderChild2.appendChild(howItWorksContentHeaderChild2Header);
    howItWorksContentHeaderChild2.appendChild(howItWorksContentHeaderChild2Paragraph);
    //appending of child elements to the content header child 3
    howItWorksContentHeaderChild3.appendChild(howItWorksContentHeaderChild3Icon);
    howItWorksContentHeaderChild3.appendChild(howItWorksContentHeaderChild3Header);
    howItWorksContentHeaderChild3.appendChild(howItWorksContentHeaderChild3Paragraph);

    //apending of header child elements to the header element
    howItWorksHeaderContainer.appendChild(howItWorksHeader);
    howItWorksHeaderContainer.appendChild(howItWorksSubHeader);
    howItWorksHeaderContainer.appendChild(howItWorksParagraph);
    //appending of content child elements to the content element
    howItWorksContentHeader.appendChild(howItWorksContentHeaderChild1);
    howItWorksContentHeader.appendChild(howItWorksContentHeaderChild2);
    howItWorksContentHeader.appendChild(howItWorksContentHeaderChild3);

    //appending of child elements to the root element
    howItWorks.appendChild(howItWorksHeaderContainer);
    howItWorks.appendChild(howItWorksContentHeader);
    document.body.appendChild(howItWorks);

}

export { howItworks }