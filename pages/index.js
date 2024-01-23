import { openPopup, closePopup } from "../components/modal.js";
import { validationConfig } from "../components/constants.js";
import { enableValidation } from "../components/validation.js";

// CONSTANTS FOR CONTACT MODAL
const popupContact = document.querySelector("#popup-contact");
const buttonsOpenPopupContact = Array.from(document.querySelectorAll(".contact-button"));
const buttonClosePopupContact = document.querySelector("#close-button-contact");
const formAddContact = document.querySelector("#popup-form-contact");
const popupPoliteness = document.querySelector("#popup-politeness");
const buttonSuper = document.querySelector("#submit-button-politeness");
const buttonClosePopupPoliteness = document.querySelector("#close-button-politeness");

enableValidation(validationConfig); 

buttonsOpenPopupContact.forEach(button => { 
    button.addEventListener("click", function () {
        formAddContact.reset(); 
        openPopup(popupContact); 
    })
}); 
buttonClosePopupContact.addEventListener("click", function () { 
    closePopup(popupContact);
});

function handleFormAddSubmit(evt) { 
    evt.preventDefault();
    closePopup(popupContact);
    openPopup(popupPoliteness);
} 
formAddContact.addEventListener("submit", handleFormAddSubmit); 

buttonClosePopupPoliteness.addEventListener("click", function () { 
    closePopup(popupPoliteness);
});

buttonSuper.addEventListener("click", function () { 
    closePopup(popupPoliteness);
});