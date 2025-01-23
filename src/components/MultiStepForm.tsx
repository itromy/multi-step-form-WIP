import React from 'react';
import styles from './MultiStepForm.module.css';
import Stepper from './Stepper';
import STEPPER_STEPS from '@/constants/StepperSteps';

export type MultiStepFormProps = {
    children: React.ReactNode;
    step: number;
}

export default function MultiStepForm({ children, step }: MultiStepFormProps) {
    return (
        <div className={styles.form}>
            <div className={styles.sidebar}>
                <Stepper active={step} steps={STEPPER_STEPS} />
            </div>
            <div className={styles.content}>
                <div className={styles.contentBody}>
                    { children }
                </div>
            </div>
        </div>
    )
}