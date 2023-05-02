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

    //appending menu header contents to the menu header container
    menuHeaderContainer.appendChild(menuHeader);
    menuHeaderContainer.appendChild(menuHeaderSubTitle);
    menuHeaderContainer.appendChild(menuHeaderText);

    //adding menu header to the menu section
    menu.appendChild(menuHeaderContainer);
    //appending menu to the body
    document.body.appendChild(menu);
}

export { menu }