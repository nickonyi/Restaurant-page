import testimosImg from "./testimonials.jpg";

function testimonials() {
    const testimonials = document.createElement('section');
    //header of the testimonials section
    testimonials.classList.add('testimonials');
    const testimonialsHeaderContainer = document.createElement('div');
    testimonialsHeaderContainer.classList.add('testimonials-header-container');
    const testimonialSubTitle = document.createElement('p');
    testimonialSubTitle.classList.add('testimonial-sub-title');
    testimonialSubTitle.textContent = 'Testimonial';
    const testimonialTitle = document.createElement('h2');
    testimonialTitle.classList.add('testimonial-title');
    testimonialTitle.textContent = 'What They Are Saying';
    const testimonialsText = document.createElement('p');
    testimonialsText.classList.add('testimonials-text');
    testimonialsText.textContent = 'The best restaurant in town, with the best food and the best service. I will definitely come back!';

    // testimonial card
    const testimonialCard = document.createElement('div');
    testimonialCard.classList.add('testimonial-card');
    const testimonialCardImage = document.createElement('img');
    testimonialCardImage.classList.add('testimonial-card-image');
    testimonialCardImage.src = testimosImg;
    const testimonialCardText = document.createElement('div');
    testimonialCardText.classList.add('testimonial-card-text');
    testimonialCardText.textContent = 'I love this restaurant! The food is delicious and the service is excellent. I will definitely come back!';
    //rating stars container
    const testimonialRateStars = document.createElement('div');
    testimonialRateStars.classList.add('testimonial-rate-stars');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star', 'active', 'star-edit');
        star.setAttribute('data-rating', i);
        star.textContent = '★';
        testimonialRateStars.appendChild(star);
    }

    //appending children to testimonialCardText
    testimonialCard.appendChild(testimonialCardImage);
    testimonialCard.appendChild(testimonialCardText);
    testimonialCard.appendChild(testimonialRateStars);




    //appending children to testimonialsHeaderContainer
    testimonialsHeaderContainer.appendChild(testimonialSubTitle);
    testimonialsHeaderContainer.appendChild(testimonialTitle);
    testimonialsHeaderContainer.appendChild(testimonialsText);
    testimonials.appendChild(testimonialsHeaderContainer);
    testimonials.appendChild(testimonialCard);
    document.body.appendChild(testimonials);
}

export { testimonials }