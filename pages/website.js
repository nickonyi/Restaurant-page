import navImg from "../assets/nav-logo.png";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.appendChild(createNav());

    return header;

}

function createNav() {
    const nav = document.createElement("nav");

    const navLogo = new Image();
    navLogo.classList.add("nav-logo");
    navLogo.src = navImg;

    const navBtnContainer = document.createElement("div");
    navBtnContainer.classList.add("nav-btn-container");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("button-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("button-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn);
    });

    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("button-nav");
    aboutBtn.textContent = "About us";
    aboutBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutBtn);
    });

    const bookBtn = document.createElement("button");
    bookBtn.classList.add("button-nav");
    bookBtn.textContent = "Book now";
    bookBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(bookBtn);
    });



    navBtnContainer.appendChild(homeBtn);
    navBtnContainer.appendChild(menuBtn);
    navBtnContainer.appendChild(aboutBtn);
    navBtnContainer.appendChild(bookBtn);
    nav.appendChild(navLogo);
    nav.appendChild(navBtnContainer);

    return nav;
}

function setActiveButton(btn) {
    const navBtns = document.querySelectorAll(".button-nav");

    navBtns.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove("active");
        }
    });
    btn.classList.add("active");
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}

export default initializeWebsite;