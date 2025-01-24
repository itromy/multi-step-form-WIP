import { PlanInterval, PlanOptions } from "@/components/PlanOption";

export type FormDataStep1Type = {
    name: string;
    email: string;
    phoneNumber: string;
}

export type FormDataStep2Type = {
    plan: PlanOptions;
    interval: PlanInterval;
}

export type FormValidationStep1Type = {
    name?: string;
    email?: string;
    phoneNumber?: string;
}