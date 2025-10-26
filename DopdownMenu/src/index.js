import "./styles.css"

const dropbtn = document.querySelector('.dropbtn');
const dropContainer = document.querySelector('.dropdown');
const dropDownContent = document.querySelector('.dropdown-content');

const createDropdown = (showButton, dropContent, container)=>{
    showButton.addEventListener('mouseover', ()=>{    
        dropContent.removeAttribute('hidden')
    });

    dropContent.addEventListener('mouseout', ()=>{
        dropContent.setAttribute('hidden', '');
    });

    container.addEventListener('mouseout', ()=>{
        dropContent.setAttribute('hidden', '');
    });
}

createDropdown(dropbtn, dropDownContent, dropContainer);