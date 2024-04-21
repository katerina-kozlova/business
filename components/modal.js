'use strict';

export const openPopup = (el) => {
    el.classList.add("popup_opened");
    document.addEventListener("keydown", handleEscClose); 
};

export const closePopup = (el) => {
    el.classList.remove("popup_opened");
    document.removeEventListener("keydown", handleEscClose);
};

// close the modal window with the esc key
export const handleEscClose = (evt) => {
    if (evt.key === "Escape") { 
        const popupOpened = document.querySelector('.popup_opened'); 
        closePopup(popupOpened); 
    } 
};

export const handleOverlayClose = (evt) => { 
    if (evt.target === evt.currentTarget) { 
        const popupOpened = document.querySelector('.popup_opened'); 
        closePopup(popupOpened); 
    } 
};