import { FormDataStep1Type, FormValidationStep1Type } from "@/types/Form";

export function validateFormDataFirstStep(formData: FormDataStep1Type): FormValidationStep1Type {
    return {
        name: _validateName(formData.name),
        email: _validateEmail(formData.email),
        phoneNumber: validatePhoneNumer(formData.phoneNumber),
    }
}

function _validateName(name: string): string | undefined {
    if(!_isValueGiven(name)) {
        return "This field is required";
    }

    return;
}

function _validateEmail(email: string): string | undefined  {
    if(!_isValueGiven(email)) {
        return "This field is required";
    }

    if(!_isValidEmail(email)) {
        return "This is not a valid email";
    }

    return;
}

function _isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return emailPattern.test(email);
  }

function validatePhoneNumer(phoneNumber: string): string | undefined {
    if(!_isValueGiven(phoneNumber)) {
        return "This field is required";
    }

    if(!_isValidPhoneNumber(phoneNumber)) {
        return "This is not a valid phone number";
    }

    return;
}

function _isValidPhoneNumber(phoneNumber: string): boolean {
    const phonePattern = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phonePattern.test(phoneNumber);
  }

  function _isValueGiven(value: string): boolean {
    return !!value && value.trim().length > 0;
  }