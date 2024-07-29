
import { Carousel } from 'bootstrap';

const carouselElem = document.getElementById('multiple-items-carousel');
new Carousel(carouselElem, {
    touch: false,
    interval: false,
    wrap: false,
});