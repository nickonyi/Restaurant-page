function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "This is the header";

    return header;

}

function createNav() {

}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}

export default initializeWebsite;