import { openPopup, closePopup } from "../components/modal.js";
import { validationConfig } from "../components/constants.js";
import { enableValidation, clearValidation } from "../components/validation.js";

// CONSTANTS
const popupContact = document.querySelector("#popup-contact");
const buttonsOpenPopupContact = Array.from(document.querySelectorAll(".contact-button"));
const buttonClosePopupContact = document.querySelector("#close-button-contact");
const formAddContact = document.querySelector("#popup-form-contact");
const popupPoliteness = document.querySelector("#popup-politeness");
const buttonSuper = document.querySelector("#submit-button-politeness");
const buttonClosePopupPoliteness = document.querySelector("#close-button-politeness");

const buttonOpenBusinessContent = document.querySelector("#business");
const buttonOpenCustomersContent = document.querySelector("#customers");
const blockBusinessContent = document.querySelector(".contact-button_place_intro");
const blockCustomerContent = document.querySelector(".store");

const popupMenu = document.querySelector("#popup-menu");
const buttonOpenPopupMenu = document.querySelector(".intro__menu");
const buttonClosePopupMenu = document.querySelector("#close-button-menu");
const buttonOpenPopupContactPlaceMenu = document.querySelector(".contact-button_place_menu");

const popupCookie = document.querySelector("#popup-cookie");
const buttonClosePopupCookie = document.querySelector("#close-button-cookie");
const buttonAcceptPopupCookie = document.querySelector("#acceptBtn");
const buttonDeclinePopupCookie = document.querySelector("#declineBtn");

const intro = document.querySelector(".intro");

enableValidation(validationConfig); 

setTimeout(() => {
    popupCookie.classList.add("popup_opened");
}, 5000);
buttonClosePopupCookie.addEventListener("click", () => {
    closePopup(popupCookie);
});
buttonAcceptPopupCookie.addEventListener("click", () => {
    closePopup(popupCookie);
});
buttonDeclinePopupCookie.addEventListener("click", () => {
    closePopup(popupCookie);
});

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

buttonOpenBusinessContent.addEventListener("click", () => {
    blockBusinessContent.classList.add("contact-button_place_intro_active");
    blockCustomerContent.classList.remove("store_active");
    buttonOpenBusinessContent.classList.add("header__button_active");
    buttonOpenCustomersContent.classList.remove("header__button_active");
});

buttonOpenCustomersContent.addEventListener("click", () => {
    blockCustomerContent.classList.add("store_active");
    blockBusinessContent.classList.remove("contact-button_place_intro_active");
    buttonOpenCustomersContent.classList.add("header__button_active");
    buttonOpenBusinessContent.classList.remove("header__button_active");
});

buttonOpenPopupMenu.addEventListener("click", () => {
    openPopup(popupMenu);
});

buttonOpenPopupContactPlaceMenu.addEventListener("click", () => {
    closePopup(popupMenu)
    openPopup(popupContact);
});

buttonClosePopupMenu.addEventListener("click", () => {
    closePopup(popupMenu);
});

function introFixedOnTop() {
    if (window.scrollY > 38) {
        intro.classList.add("intro_active");
    } else {
        intro.classList.remove("intro_active");
    }
}
window.addEventListener("scroll", introFixedOnTop);