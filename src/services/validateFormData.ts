import { FormDataStep1Type, FormValidationStep1Type } from "@/types/Form";

export function validateFormDataFirstStep(formData: FormDataStep1Type): FormValidationStep1Type {
    return {
        name: formData.name.trim().length === 0 ? "This field is required" : undefined,
        email: formData.email.trim().length === 0 ? "This field is required" : undefined
    }
}