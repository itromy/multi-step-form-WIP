'use client';

import TextInput from "@/components/form-elements/TextInput";
import MultiStepForm from "@/components/MultiStepForm";
import { validateFormDataFirstStep } from "@/services/validateFormData";
import { FormDataStep1Type, FormValidationStep1Type } from "@/types/Form";
import { useState } from "react";

export default function YourInfoPage() {
  const [formState, setFormState] = useState<FormDataStep1Type>({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [errorState, setErrorState] = useState<FormValidationStep1Type>({});

  function onChange(changedValues: {name: string, value: string}) {
    setFormState({
      ...formState,
      [changedValues.name]: changedValues.value
    })
  }
  
  function nextStep() {
      const error = validateFormDataFirstStep(formState);
      setErrorState(error);
  }

  

  return (
    <>
      <MultiStepForm step={1}>
        <h1>Your Personal Info</h1>
        <TextInput onChange={onChange} name="name" value={formState.name} label="Name" placeholder="g.e. Stephen king" error={errorState.name} required/> 
        <TextInput onChange={onChange} name="email" value={formState.email} label="Email Address" placeholder="g.e. Stephenking@lorem.com"  error={errorState.email} required/>
        <TextInput onChange={onChange} name="phoneNumber" value={formState.phoneNumber} label="Phone Number" placeholder="g.e. + 1 234 567 890"  error={errorState.phoneNumber} required/> 
        <button onClick={nextStep}>Next Step</button>
      </MultiStepForm>
    </>
  );
}
