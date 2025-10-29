import './styles.css'
import { images } from './data/images';
import { navigationDot } from './view/navigationDots';
import ImageHandler from './viewModel/imageHandler';
import { updatedSelectedDot } from './view/navigationDots';

const displayImg = document.querySelector('#displayImg');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const navigationDotsContainer = document.querySelector('#navigationDotsContainer');

const imageHandler = new ImageHandler();

let currentIndex = 0;

export const getCurrentIndex = ()=>{
    return currentIndex;
}

export const setCurrentIndex = (index)=>{
    currentIndex = index;
}

// Helper to set the image src safely
const setImage = (index) => {
    if (!displayImg) return;
    displayImg.setAttribute('src', images[index]);
}

// Initialize display
setImage(currentIndex);

// Advance to the next image (wraps around)
const showNext = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updatedSelectedDot(currentIndex);
    setImage(currentIndex);
}

// Go to the previous image (wraps around)
const showPrev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setImage(currentIndex);
}

if (next) next.addEventListener('click', showNext);
if (prev) prev.addEventListener('click', showPrev);
if (navigationDotsContainer) imageHandler.navigationsDots(navigationDotsContainer, images, navigationDot, displayImg);
