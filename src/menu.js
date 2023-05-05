import contentImg1 from './pancakes-1.jpg';
import contentImg2 from './french-toast.jpg';
import contentImg3 from './steak-1.jpg';
import contentImg4 from './bbq-ribs-1.jpg';
import contentImg5 from './salad.jpg';
import contentImg6 from './egg-muffin.png';

function menu() {
    const menu = document.createElement('section');
    menu.classList.add('menu');

    //creating menu header container
    const menuHeaderContainer = document.createElement('div');
    menuHeaderContainer.classList.add('menu-header');

    //creating menu header contents
    const menuHeader = document.createElement('h2');
    menuHeader.classList.add('menu-header-content');
    menuHeader.textContent = 'Menu';
    const menuHeaderSubTitle = document.createElement('h1');
    menuHeaderSubTitle.classList.add('menu-header-subtitle');
    menuHeaderSubTitle.textContent = 'Explore our best menu';
    const menuHeaderText = document.createElement('p');
    menuHeaderText.classList.add('menu-header-text');
    menuHeaderText.textContent = 'Explore our best dishes and enjoy the taste of our food. We have a wide range of dishes to choose from.';

    //creating menu content container
    const menuContentContainer = document.createElement('div');
    menuContentContainer.classList.add('menu-content-container');

    //creating menu content container contents

    for (let i = 0; i < 6; i++) {
        const menuContent = document.createElement('div');
        menuContent.classList.add('menu-content');
        menuContentContainer.appendChild(menuContent);
    }

    const menuContent1 = menuContentContainer.children[0];
    const menuContent2 = menuContentContainer.children[1];
    const menuContent3 = menuContentContainer.children[2];
    const menuContent4 = menuContentContainer.children[3];
    const menuContent5 = menuContentContainer.children[4];
    const menuContent6 = menuContentContainer.children[5];

    //creating menucontent1 container elements
    const menuContent1Img = document.createElement('img');
    menuContent1Img.classList.add('menu-content-img', 'img-box');
    menuContent1Img.src = contentImg1;
    const menuContent1SmallHeaderContainer = document.createElement('div');
    menuContent1SmallHeaderContainer.classList.add('menu-content-small-header-container');
    const menuContent1HeaderContainer = document.createElement('div');
    menuContent1HeaderContainer.classList.add('menu-content-header-container');
    const menuContent1Header = document.createElement('h2');
    menuContent1Header.classList.add('menu-content-header');
    menuContent1Header.textContent = 'Pancakes';
    const menuContent1Price = document.createElement('p');
    menuContent1Price.classList.add('menu-content-price');
    menuContent1Price.textContent = '$10.00';


    //serve div
    const serveDiv1 = document.createElement('div');
    serveDiv1.classList.add('serve-div');
    serveDiv1.textContent = "Served with french fries + drinks";
    const serveDivText1 = document.createElement('div');
    serveDivText1.classList.add('serve-div-text');
    serveDivText1.textContent = "Choice of: Coke,Fanta,Sprite, Upgrade to large fries,And whopper party,And tender crisp party and more...";
    const menuContent1FooterDivContainer = document.createElement('div');
    menuContent1FooterDivContainer.classList.add('menu-content-footer-div-container');
    const menuContent1FooterDiv1 = document.createElement('div');
    menuContent1FooterDiv1.classList.add('menu-content-footer-div-1');
    const icon1 = document.createElement('i');
    icon1.classList.add('fas', 'fa-plus');
    menuContent1FooterDiv1.appendChild(icon1);


    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        ratingContainer.appendChild(star);
    }

    // Assuming you want to add the rating container to the body element
    menuContent1FooterDivContainer.appendChild(ratingContainer);
    menuContent1FooterDivContainer.appendChild(menuContent1FooterDiv1);



    //creating menucontent2 container elements
    const menuContent2Img = document.createElement('img');
    menuContent2Img.classList.add('menu-content-img', 'img-box');
    menuContent2Img.src = contentImg2;
    const menuContent2SmallHeaderContainer = document.createElement('div');
    menuContent2SmallHeaderContainer.classList.add('menu-content-small-header-container');
    const menuContent2HeaderContainer = document.createElement('div');
    menuContent2HeaderContainer.classList.add('menu-content-header-container');
    const menuContent2Header = document.createElement('h2');
    menuContent2Header.classList.add('menu-content-header');
    menuContent2Header.textContent = 'French Toast';
    const menuContent2Price = document.createElement('p');
    menuContent2Price.classList.add('menu-content-price');
    menuContent2Price.textContent = '$12.00';
    //serve div
    const serveDiv2 = document.createElement('div');
    serveDiv2.classList.add('serve-div');
    serveDiv2.textContent = "Served with french fries + drinks";
    const serveDivText2 = document.createElement('div');
    serveDivText2.classList.add('serve-div-text');
    serveDivText2.textContent = "Choice of: Coke,Fanta,Sprite, Upgrade to large fries,And whopper party,And tender crisp party and more...";
    const menuContent2FooterDivContainer = document.createElement('div');
    menuContent2FooterDivContainer.classList.add('menu-content-footer-div-container');
    const menuContent2FooterDiv1 = document.createElement('div');
    menuContent2FooterDiv1.classList.add('menu-content-footer-div-1');
    const icon2 = document.createElement('i');
    icon2.classList.add('fas', 'fa-plus');
    menuContent2FooterDiv1.appendChild(icon2);


    const ratingContainer2 = document.createElement('div');
    ratingContainer2.classList.add('rating');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        ratingContainer2.appendChild(star);
    }

    // Assuming you want to add the rating container to the body element
    menuContent2FooterDivContainer.appendChild(ratingContainer2);
    menuContent2FooterDivContainer.appendChild(menuContent2FooterDiv1);


    //creating menucontent3 container elements
    const menuContent3Img = document.createElement('img');
    menuContent3Img.classList.add('menu-content-img', 'img-box');
    menuContent3Img.src = contentImg3;
    const menuContent3SmallHeaderContainer = document.createElement('div');
    menuContent3SmallHeaderContainer.classList.add('menu-content-small-header-container');
    const menuContent3HeaderContainer = document.createElement('div');
    menuContent3HeaderContainer.classList.add('menu-content-header-container');
    const menuContent3Header = document.createElement('h2');
    menuContent3Header.classList.add('menu-content-header');
    menuContent3Header.textContent = 'Steak';
    const menuContent3Price = document.createElement('p');
    menuContent3Price.classList.add('menu-content-price');
    menuContent3Price.textContent = '$15.00';
    //serve div 3
    const serveDiv3 = document.createElement('div');
    serveDiv3.classList.add('serve-div');
    serveDiv3.textContent = "Served with french fries + drinks";
    const serveDivText3 = document.createElement('div');
    serveDivText3.classList.add('serve-div-text');
    serveDivText3.textContent = "Choice of: Coke,Fanta,Sprite, Upgrade to large fries,And whopper party,And tender crisp party and more...";
    const menuContent3FooterDivContainer = document.createElement('div');
    menuContent3FooterDivContainer.classList.add('menu-content-footer-div-container');
    const menuContent3FooterDiv1 = document.createElement('div');
    menuContent3FooterDiv1.classList.add('menu-content-footer-div-1');
    const icon3 = document.createElement('i');
    icon3.classList.add('fas', 'fa-plus');
    menuContent3FooterDiv1.appendChild(icon3);


    const ratingContainer3 = document.createElement('div');
    ratingContainer3.classList.add('rating');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        ratingContainer3.appendChild(star);
    }

    // Assuming you want to add the rating container to the body element
    menuContent3FooterDivContainer.appendChild(ratingContainer3);
    menuContent3FooterDivContainer.appendChild(menuContent3FooterDiv1);


    //creating menucontent1 container elements
    const menuContent4Img = document.createElement('img');
    menuContent4Img.classList.add('menu-content-img', 'img-box');
    menuContent4Img.src = contentImg4;
    const menuContent4SmallHeaderContainer = document.createElement('div');
    menuContent4SmallHeaderContainer.classList.add('menu-content-small-header-container');
    const menuContent4HeaderContainer = document.createElement('div');
    menuContent4HeaderContainer.classList.add('menu-content-header-container');
    const menuContent4Header = document.createElement('h2');
    menuContent4Header.classList.add('menu-content-header');
    menuContent4Header.textContent = 'BBQ Ribs';
    const menuContent4Price = document.createElement('p');
    menuContent4Price.classList.add('menu-content-price');
    menuContent4Price.textContent = '$25.00';

    //serve div
    const serveDiv4 = document.createElement('div');
    serveDiv4.classList.add('serve-div');
    serveDiv4.textContent = "Served with french fries + drinks";
    const serveDivText4 = document.createElement('div');
    serveDivText4.classList.add('serve-div-text');
    serveDivText4.textContent = "Choice of: Coke,Fanta,Sprite, Upgrade to large fries,And whopper party,And tender crisp party and more...";
    const menuContent4FooterDivContainer = document.createElement('div');
    menuContent4FooterDivContainer.classList.add('menu-content-footer-div-container');
    const menuContent4FooterDiv1 = document.createElement('div');
    menuContent4FooterDiv1.classList.add('menu-content-footer-div-1');
    const icon4 = document.createElement('i');
    icon4.classList.add('fas', 'fa-plus');
    menuContent4FooterDiv1.appendChild(icon4);



    const ratingContainer4 = document.createElement('div');
    ratingContainer4.classList.add('rating');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        ratingContainer4.appendChild(star);
    }

    // Assuming you want to add the rating container to the body element
    menuContent4FooterDivContainer.appendChild(ratingContainer4);
    menuContent4FooterDivContainer.appendChild(menuContent4FooterDiv1);


    //creating menucontent5 container elements
    const menuContent5Img = document.createElement('img');
    menuContent5Img.classList.add('menu-content-img', 'img-box');
    menuContent5Img.src = contentImg5;
    const menuContent5SmallHeaderContainer = document.createElement('div');
    menuContent5SmallHeaderContainer.classList.add('menu-content-small-header-container');
    const menuContent5HeaderContainer = document.createElement('div');
    menuContent5HeaderContainer.classList.add('menu-content-header-container');
    const menuContent5Header = document.createElement('h2');
    menuContent5Header.classList.add('menu-content-header');
    menuContent5Header.textContent = 'Salads';
    const menuContent5Price = document.createElement('p');
    menuContent5Price.classList.add('menu-content-price');
    menuContent5Price.textContent = '$10.00';
    //serve div 5
    const serveDiv5 = document.createElement('div');
    serveDiv5.classList.add('serve-div');
    serveDiv5.textContent = "Served with french fries + drinks";
    const serveDivText5 = document.createElement('div');
    serveDivText5.classList.add('serve-div-text');
    serveDivText5.textContent = "Choice of: Coke,Fanta,Sprite, Upgrade to large fries,And whopper party,And tender crisp party and more...";
    const menuContent5FooterDivContainer = document.createElement('div');
    menuContent5FooterDivContainer.classList.add('menu-content-footer-div-container');
    const menuContent5FooterDiv1 = document.createElement('div');
    menuContent5FooterDiv1.classList.add('menu-content-footer-div-1');
    const icon5 = document.createElement('i');
    icon5.classList.add('fas', 'fa-plus');
    menuContent5FooterDiv1.appendChild(icon5);


    const ratingContainer5 = document.createElement('div');
    ratingContainer5.classList.add('rating');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        ratingContainer5.appendChild(star);
    }

    // Assuming you want to add the rating container to the body element
    menuContent5FooterDivContainer.appendChild(ratingContainer5);
    menuContent5FooterDivContainer.appendChild(menuContent5FooterDiv1);


    //creating menucontent6 container elements
    const menuContent6Img = document.createElement('img');
    menuContent6Img.classList.add('menu-content-img', 'img-box');
    menuContent6Img.src = contentImg6;
    const menuContent6SmallHeaderContainer = document.createElement('div');
    menuContent6SmallHeaderContainer.classList.add('menu-content-small-header-container');
    const menuContent6HeaderContainer = document.createElement('div');
    menuContent6HeaderContainer.classList.add('menu-content-header-container');
    const menuContent6Header = document.createElement('h2');
    menuContent6Header.classList.add('menu-content-header');
    menuContent6Header.textContent = 'Egg muffin';
    const menuContent6Price = document.createElement('p');
    menuContent6Price.classList.add('menu-content-price');
    menuContent6Price.textContent = '$17.00';
    //serve div 6
    const serveDiv6 = document.createElement('div');
    serveDiv6.classList.add('serve-div');
    serveDiv6.textContent = "Served with french fries + drinks";
    const serveDivText6 = document.createElement('div');
    serveDivText6.classList.add('serve-div-text');
    serveDivText6.textContent = "Choice of: Coke,Fanta,Sprite, Upgrade to large fries,And whopper party,And tender crisp party and more...";
    const menuContent6FooterDivContainer = document.createElement('div');
    menuContent6FooterDivContainer.classList.add('menu-content-footer-div-container');
    const menuContent6FooterDiv1 = document.createElement('div');
    menuContent6FooterDiv1.classList.add('menu-content-footer-div-1');
    const icon6 = document.createElement('i');
    icon6.classList.add('fas', 'fa-plus');
    menuContent6FooterDiv1.appendChild(icon6);


    const ratingContainer6 = document.createElement('div');
    ratingContainer6.classList.add('rating');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        ratingContainer6.appendChild(star);
    }

    // Assuming you want to add the rating container to the body element
    menuContent6FooterDivContainer.appendChild(ratingContainer6);
    menuContent6FooterDivContainer.appendChild(menuContent6FooterDiv1);


    //appending menuContent1Header elements to menuContent1HeaderContainer
    menuContent1SmallHeaderContainer.appendChild(menuContent1Header);
    menuContent1SmallHeaderContainer.appendChild(menuContent1Price);
    menuContent1HeaderContainer.appendChild(menuContent1SmallHeaderContainer);
    menuContent1HeaderContainer.appendChild(serveDiv1);
    menuContent1HeaderContainer.appendChild(serveDivText1);
    menuContent1HeaderContainer.appendChild(menuContent1FooterDivContainer);

    //Appending menuContent1 elements to menuContent1
    menuContent1.appendChild(menuContent1Img);
    menuContent1.appendChild(menuContent1HeaderContainer);

    //appending menuContent2Header elements to menuContent1HeaderContainer
    menuContent2SmallHeaderContainer.appendChild(menuContent2Header);
    menuContent2SmallHeaderContainer.appendChild(menuContent2Price);
    menuContent2HeaderContainer.appendChild(menuContent2SmallHeaderContainer);
    menuContent2HeaderContainer.appendChild(serveDiv2);
    menuContent2HeaderContainer.appendChild(serveDivText2);
    menuContent2HeaderContainer.appendChild(menuContent2FooterDivContainer);

    //Appending menuContent2 elements to menuContent2
    menuContent2.appendChild(menuContent2Img);
    menuContent2.appendChild(menuContent2HeaderContainer);

    //appending menuContent3Header elements to menuContent1HeaderContainer
    menuContent3SmallHeaderContainer.appendChild(menuContent3Header);
    menuContent3SmallHeaderContainer.appendChild(menuContent3Price);
    menuContent3HeaderContainer.appendChild(menuContent3SmallHeaderContainer);
    menuContent3HeaderContainer.appendChild(serveDiv3);
    menuContent3HeaderContainer.appendChild(serveDivText3);
    menuContent3HeaderContainer.appendChild(menuContent3FooterDivContainer);

    //Appending menuContent3 elements to menuContent3
    menuContent3.appendChild(menuContent3Img);
    menuContent3.appendChild(menuContent3HeaderContainer);

    //appending menuContent4Header elements to menuContent1HeaderContainer
    menuContent4SmallHeaderContainer.appendChild(menuContent4Header);
    menuContent4SmallHeaderContainer.appendChild(menuContent4Price);
    menuContent4HeaderContainer.appendChild(menuContent4SmallHeaderContainer);
    menuContent4HeaderContainer.appendChild(serveDiv4);
    menuContent4HeaderContainer.appendChild(serveDivText4);
    menuContent4HeaderContainer.appendChild(menuContent4FooterDivContainer);

    //Appending menuContent4 elements to menuContent4
    menuContent4.appendChild(menuContent4Img);
    menuContent4.appendChild(menuContent4HeaderContainer);

    //appending menuContent5Header elements to menuContent5HeaderContainer
    menuContent5SmallHeaderContainer.appendChild(menuContent5Header);
    menuContent5SmallHeaderContainer.appendChild(menuContent5Price);
    menuContent5HeaderContainer.appendChild(menuContent5SmallHeaderContainer);
    menuContent5HeaderContainer.appendChild(serveDiv5);
    menuContent5HeaderContainer.appendChild(serveDivText5);
    menuContent5HeaderContainer.appendChild(menuContent5FooterDivContainer);

    //Appending menuContent5 elements to menuContent5
    menuContent5.appendChild(menuContent5Img);
    menuContent5.appendChild(menuContent5HeaderContainer);

    //appending menuContent6Header elements to menuContent6HeaderContainer
    menuContent6SmallHeaderContainer.appendChild(menuContent6Header);
    menuContent6SmallHeaderContainer.appendChild(menuContent6Price);
    menuContent6HeaderContainer.appendChild(menuContent6SmallHeaderContainer);;
    menuContent6HeaderContainer.appendChild(serveDiv6);
    menuContent6HeaderContainer.appendChild(serveDivText6);
    menuContent6HeaderContainer.appendChild(menuContent6FooterDivContainer);

    //Appending menuContent1 elements to menuContent1
    menuContent6.appendChild(menuContent6Img);
    menuContent6.appendChild(menuContent6HeaderContainer);

    //appending menu header contents to the menu header container
    menuHeaderContainer.appendChild(menuHeader);
    menuHeaderContainer.appendChild(menuHeaderSubTitle);
    menuHeaderContainer.appendChild(menuHeaderText);


    //adding menu children to the menu section
    menu.appendChild(menuHeaderContainer);
    menu.appendChild(menuContentContainer);
    //appending menu to the body
    document.body.appendChild(menu);
}

function ratingSystem() {
    function initializeStars(container) {
        let stars = container.querySelectorAll('.star');
        let rating = 0;

        stars.forEach((star) => {
            star.addEventListener('click', (e) => {
                resetStars(stars);
                rating = parseInt(e.target.getAttribute('data-rating'));
                setRating(rating, stars);
            });


        });

        function setRating(rating, stars) {
            stars.forEach((star) => {
                if (parseInt(star.getAttribute('data-rating')) <= rating) {
                    star.classList.add('active');
                }
            });
        }

        function resetStars(stars) {
            stars.forEach((star) => {
                star.classList.remove('active');
            });
        }
    }

    const ratingContainers = document.querySelectorAll('.rating');
    ratingContainers.forEach(initializeStars);
}


export { menu, ratingSystem }