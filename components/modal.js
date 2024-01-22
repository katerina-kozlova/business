export function openPopup(el) {
    el.classList.add("popup_opened");
    document.addEventListener("keydown", handleEscClose); 
}

export function closePopup(el) {
    el.classList.remove("popup_opened");
    document.removeEventListener("keydown", handleEscClose);
}

// close the modal window with the esc key
export function handleEscClose(evt) {
    if (evt.key === "Escape") { 
        const popupOpened = document.querySelector('.popup_opened'); 
        closePopup(popupOpened); 
    } 
}
