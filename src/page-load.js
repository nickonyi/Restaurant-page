function pageLoard() {
    const content = document.getElementById('content');
    const headingO = document.createElement('h1');
    const myImage = document.createElement('img');
    const para = document.createElement('p');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    headingO.textContent = "Explanation on the Best Restaurant";
    myImage.src = "../dist/rest-1.jpg";
    para.textContent = "Quality of food: The quality of the food is obviously the most important factor to consider. The best restaurant should serve high-quality, fresh, and tasty food. The presentation of the food should also be considered, as visually appealing foodcan enhance the overall dining experience.";
    para1.textContent = " Variety of menu: A good restaurant should offer a diverse menu, with something for everyone, including vegetarians or people with allergies.</li>   Friendly, attentive staff: The staff should be friendly, attentive, and knowledgeable about the menu. They should also make you feel welcome and comfortable.Cleanliness: The restaurant should be clean and well-maintained, with tidy restrooms and comfortable seating arrangements.";
    para2.textContent = "Price: The best restaurant should offer good value for money, with reasonable and affordable prices.Ambience: The atmosphere of a restaurant can greatly affect the dining experience, so the best restaurant should have an atmosphere that suits your preferences, whether it be formal or casual, romantic or familial, lively or tranquil.always helpful to read reviews from other customers to get a sense of what others think of the restaurant. You can check out review sites like Yelp, TripAdvisor, or Google Reviews, to learn more about a particular restaurant"

    const elements = [headingO, myImage, para, para1, para2];
    for (let i = 0; i < elements.length; i++) {
        content.appendChild(elements[i]);

    }


}

export { pageLoard }