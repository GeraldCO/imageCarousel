export const navigationDot = (src, clickHandler, displayImg) => {
    const dot = document.createElement('div');
    dot.classList.add('circle');
    dot.addEventListener('click', (e)=> clickHandler(e, src, displayImg));
    return dot;
} 

export const dotClickHandler = (e, src, displayImg)=>{
    e.target.classList.add('selected');
    displayImg.setAttribute('src', src);
}

export const updatedSelectedDot = (index)=>{
    const currentSelected = document.querySelector('.selected');
    currentSelected.classList.remove('selected');
    const allCircles = document.querySelectorAll('.circle');
    allCircles[index].classList.add('selected');
}