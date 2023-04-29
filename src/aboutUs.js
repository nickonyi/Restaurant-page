import aboutImage from './bg-img-2.png';

function aboutUs() {
    const aboutUsSec = document.createElement('section');
    aboutUsSec.classList.add('about-us-section');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('about-us-image');
    const imageHolder = new Image();
    imageHolder.classList.add('image-holder');
    imageHolder.src = aboutImage;

    const aboutContentHolder = document.createElement('div');
    aboutContentHolder.classList.add('about-us-content')
    const para = document.createElement('p');
    para.classList.add('about-sub-title');
    const heading = document.createElement('h1');
    heading.classList.add('about-sub-header');
    const para2 = document.createElement('p');
    para2.classList.add('about-sub-para-2');
    const para3 = document.createElement('p');
    para3.classList.add('about-sub-para-3');


    para.textContent = "About";
    heading.textContent = "Food Is An Important Part Of A Balanced Diet";
    para2.textContent = "Welcome to Delicious Delights – the go-to spot for foodies in downtown! Our restaurant offers a cozy atmosphere, friendly staff, and, of course, mouth-watering dishes. From classic burgers to authentic Italian pizza, we have something for everyone.";
    para3.textContent = "Delicious Delights is owned and operated by chef John Doe, who trained in some of the best kitchens in Europe and has a passion for creating unique and delicious dishes. Our culinary team consists of seasoned chefs, sous chefs, and line cooks, all dedicated to providing our customers with an unforgettable culinary experience.";
    const elementList = [para, heading, para2, para3];
    for (let i = 0; i < elementList.length; i++) {
        aboutContentHolder.appendChild(elementList[i]);
    }


    imageContainer.appendChild(imageHolder);
    aboutUsSec.appendChild(imageContainer);
    aboutUsSec.appendChild(aboutContentHolder);
    document.body.appendChild(aboutUsSec);
}

export { aboutUs }