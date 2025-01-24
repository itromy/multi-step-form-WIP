import React from 'react';
import styles from './MultiStepForm.module.css';
import Stepper from './Stepper';
import STEPPER_STEPS from '@/constants/StepperSteps';
import Button, { ButtonStyleType } from './Button';

export type MultiStepFormProps = {
    children: React.ReactNode;
    step: number;
    onNext?: (values: unknown) => void;
    onPrevious?: (values: unknown) => void;
    nextText?: string;
    previousText?: string;
}

export default function MultiStepForm({ children, step, onNext, nextText, onPrevious, previousText}: MultiStepFormProps) {
    
    function renderNextButton() {
        if (!onNext) {
            return;
        }

        return  <Button onClick={onNext}>{nextText ?? 'Next Step'}</Button>
    }

    function renderPreviousButton() {
        if (!onPrevious) {
            return;
        }

        return  <Button onClick={onPrevious} styleType={ButtonStyleType.Secondary}>{previousText ?? 'Previous Step'}</Button>
    }
    
    return (
        <div className={styles.form}>
            <div className={styles.sidebar}>
                <Stepper active={step} steps={STEPPER_STEPS} />
            </div>
            <div className={styles.contentButtonWrapper}>
                <div className={styles.content}>
                    <div className={styles.contentBody}>
                        { children }
                    </div>
                </div>
                <div className={`${styles.buttonWrapper} ${onPrevious ? styles.withPrev : ''}`}>
                    {renderPreviousButton()}
                    {renderNextButton()}
                </div>
            </div>
        </div>
    )
}