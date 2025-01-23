import styles from './Stepper.module.css';

export type StepperProps = {
    steps: Array<Step>;
    active: number;
}

export type Step = {
    label: string;
}

export default function Stepper({steps, active}: StepperProps) {
    function renderStep(step: Step, index: number) {
        return (
            <li key={'stepper-' + index} className={styles.step}>
                <span className={`${styles.index} ${(index + 1) === active ? styles.activeIndex:  ''}`}>{index + 1}</span>
                <span className={styles.sublineLabelWrapper}>
                    <span className={styles.stepSubline}>Step {index + 1}</span>
                    <span className={styles.label}>{step.label}</span>
                </span>
            </li>
        )
    }

    return (
        <nav>
            <ul className={styles.list}>
                {steps.map(renderStep)}
            </ul>
        </nav>
    )
}

