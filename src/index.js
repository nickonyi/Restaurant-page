import { pageLoard } from "./page-load";
import './style.css';
import { FaApple } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.css'
const content = document.getElementById('content');
const targetElement = document.createElement('div');

// use the faHome icon in your code


// use the faHome icon in your code
console.log(FaApple);
// Create a new i element for the icon
const icon = document.createElement("i");

// Add classes for the desired icon and any additional styling
icon.classList.add("fas", "fa-user");

// Get the element you want to attach the icon to
targetElement.setAttribute('id', 'my-element');


// Append the icon element to the target element
targetElement.appendChild(icon);
content.appendChild(targetElement);



console.log("New project baby");
console.log("We bana uko wapi");
console.log("boring");
pageLoard();