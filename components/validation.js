// add a class with an error
const showInputError = (formElement, inputElement, errorMessage, settings) => { 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    const phoneRegex = /[^0-9+]/;
    if (inputElement.type === 'email' && inputElement.validity.typeMismatch) {
      errorElement.textContent = "Invalid email.";
    } else if (inputElement.type === 'tel' && phoneRegex.test(inputElement.value)) { 
      errorElement.textContent = "Invalid phone number."; 
    } else if (inputElement.type === 'text' && inputElement.value.trim() === '') {
      errorElement.textContent = "Error";
    } else {
      errorElement.textContent = "This field is required."; 
    }
    inputElement.classList.add(settings.inputErrorClass); 
    errorElement.classList.add(settings.errorClass); 
  }; 
   
  // delete a class with an error
  const hideInputError = (formElement, inputElement, settings) => { 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(settings.inputErrorClass); 
    errorElement.classList.remove(settings.errorClass); 
    errorElement.textContent = ""; 
  }; 
   
  // check the validation of the field
  const isValid = (formElement, inputElement, settings) => { 
    if (!inputElement.validity.valid) { 
        showInputError(formElement, inputElement, inputElement.validationMessage, settings); 
    } else { 
        hideInputError(formElement, inputElement, settings); 
    } 
  }; 
   
  // there is one invalid field - return TRUE
  const hasInvalidInput = (inputList) => { 
    // проходим по этому массиву методом some 
    return inputList.some((inputElement) => { 
        return !inputElement.validity.valid; 
    }); 
  }; 
   
  const disableButton = (buttonElement) => { 
    buttonElement.disabled = true; 
  }; 
  const enableButton = (buttonElement) => { 
    buttonElement.disabled = false; 
  }; 

  // change the properties of the button
  const toggleButtonState = (inputList, buttonElement, settings) => { 
    if (hasInvalidInput(inputList)) { 
        disableButton(buttonElement); 
    } else { 
        enableButton(buttonElement); 
    } 
  }; 

  const toggleErrorMessage = (formElement, inputList, errorMessageElement) => {
    if (hasInvalidInput(inputList)) {
      errorMessageElement.classList.add('popup__text_active');
    } else {
      errorMessageElement.classList.remove('popup__text_active');
    }
  };
   
  // call up function isValid 
  const setEventListeners = (formElement, settings) => { 
    const inputList = Array.from(formElement.querySelectorAll(settings.inputElement)); 
    const buttonElement = formElement.querySelector(settings.submitButtonElement);
    const errorMessageElement = formElement.querySelector(".popup__text");
   
    // call up toggleButtonState
    toggleButtonState(inputList, buttonElement, settings);
    toggleErrorMessage(formElement, inputList, errorMessageElement);
    inputList.forEach((inputElement) => { 
        inputElement.addEventListener("input", () => { 
            isValid(formElement, inputElement, settings); 
            toggleButtonState(inputList, buttonElement, settings);
            toggleErrorMessage(formElement, inputList, errorMessageElement);
        }); 
    }); 
  }; 
   
  // call up setEventListeners 
  export const enableValidation = (settings) => { 
    const formList = Array.from(document.querySelectorAll(settings.formElement)); 
    formList.forEach((formElement) => { 
        formElement.addEventListener("submit", (evt) => { 
            evt.preventDefault(); 
        }); 
        setEventListeners(formElement, settings); 
    }); 
  }; 
 
  
  