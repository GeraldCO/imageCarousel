import { dotClickHandler } from "../view/navigationDots";
import { images } from "../data/images";

export default class ImageHandler{
    currentIndex = 0;

    getCurrentIndex = () => {
        return this.currentIndex;
    }

    navigationsDots = (navigationDotsContainer, imagesList, navigationDotComponent, imgDisplay )=> {
        imagesList.map((e)=>{
            navigationDotsContainer.appendChild(navigationDotComponent(e, dotClickHandler, imgDisplay));
        })
    }
}
