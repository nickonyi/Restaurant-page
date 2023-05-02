import contentImg1 from './pancakes-1.jpg';

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

    //creating menu content container elements
    const menuContent1Img = document.createElement('img');
    menuContent1Img.classList.add('menu-content-img', 'img-box');
    menuContent1Img.src = contentImg1;
    const menuContent1HeaderContainer = document.createElement('div');
    menuContent1HeaderContainer.classList.add('menu-content-header-container');
    const menuContent1Header = document.createElement('h2');
    menuContent1Header.classList.add('menu-content-header');
    menuContent1Header.textContent = 'Pancakes';
    const menuContent1Price = document.createElement('p');
    menuContent1Price.classList.add('menu-content-price');
    menuContent1Price.textContent = '$10.00';

    //appending menuContent1Header elements to menuContent1HeaderContainer
    menuContent1HeaderContainer.appendChild(menuContent1Header);
    menuContent1HeaderContainer.appendChild(menuContent1Price);

    //Appending menuContent1 elements to menuContent1
    menuContent1.appendChild(menuContent1Img);
    menuContent1.appendChild(menuContent1HeaderContainer);



    //appending menu header contents to the menu header container
    menuHeaderContainer.appendChild(menuHeader);
    menuHeaderContainer.appendChild(menuHeaderSubTitle);
    menuHeaderContainer.appendChild(menuHeaderText);

    //appending menu content container to the menu content container

    //adding menu children to the menu section
    menu.appendChild(menuHeaderContainer);
    menu.appendChild(menuContentContainer);
    //appending menu to the body
    document.body.appendChild(menu);
}

export { menu }