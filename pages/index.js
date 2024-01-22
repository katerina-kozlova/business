import { openPopup, closePopup } from "../components/modal.js";
import { validationConfig } from "../components/constants.js";
import { enableValidation } from "../components/validation.js";

// CONSTANTS FOR CONTACT MODAL
const popupContact = document.querySelector("#popup-contact");
const buttonOpenPopupContact = document.querySelector(".contact-button");
const buttonClosePopupContact = document.querySelector("#close-button-contact");
const formAddContact = document.querySelector("#popup-form-contact");
const buttonSaveNewContact = document.querySelector('#submit-button-contact');

// call up validation
enableValidation(validationConfig); 

// call up functions
buttonOpenPopupContact.addEventListener("click", function () { 
    formAddContact.reset(); 
    openPopup(popupContact); 
}); 
buttonClosePopupContact.addEventListener("click", function () { 
    closePopup(popupContact);
});

// Функция «отправки» формы добавления новой карточки 
function handleFormAddSubmit(evt) { 
    evt.preventDefault();
    closePopup(popupContact); 
} 
formAddContact.addEventListener("submit", handleFormAddSubmit); 