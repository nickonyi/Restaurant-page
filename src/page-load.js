import img from './rest-1.jpg';
import imeg from './don.png';
import emo from './oval.png';

function pageLoard() {
    const content = document.getElementById('content');
    const headingO = document.createElement('h1');
    const myImage = new Image();
    const para = document.createElement('p');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    headingO.textContent = "Explanation on the Best Restaurant";
    myImage.src = img;
    para.textContent = "Quality of food: The quality of the food is obviously the most important factor to consider. The best restaurant should serve high-quality, fresh, and tasty food. The presentation of the food should also be considered, as visually appealing foodcan enhance the overall dining experience.";
    const image = new Image();
    image.classList.add('img');
    image.src = imeg;
    para1.textContent = " Variety of menu: A good restaurant should offer a diverse menu, with something for everyone, including vegetarians or people with allergies.</li>   Friendly, attentive staff: The staff should be friendly, attentive, and knowledgeable about the menu. They should also make you feel welcome and comfortable.Cleanliness: The restaurant should be clean and well-maintained, with tidy restrooms and comfortable seating arrangements.";
    const ovali = new Image();
    ovali.src = emo;
    para2.textContent = "Price: The best restaurant should offer good value for money, with reasonable and affordable prices.Ambience: The atmosphere of a restaurant can greatly affect the dining experience, so the best restaurant should have an atmosphere that suits your preferences, whether it be formal or casual, romantic or familial, lively or tranquil.always helpful to read reviews from other customers to get a sense of what others think of the restaurant. You can check out review sites like Yelp, TripAdvisor, or Google Reviews, to learn more about a particular restaurant"

    const elements = [headingO, myImage, image, ovali, para, para1, para2];
    for (let i = 0; i < elements.length; i++) {
        content.appendChild(elements[i]);

    }


}

export { pageLoard }