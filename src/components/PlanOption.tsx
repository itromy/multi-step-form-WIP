
import styles from './PlanOption.module.css';

type PlanOptionProps = {
    type: PlanOptions,
    interval?: PlanInterval
}

export enum PlanOptions {
    Arcade = "arcade",
    Advanced = "advanced",
    Pro = "pro",
}

export enum PlanInterval {
    Annual = 'annual',
    Monthly = 'monthly',
}

const Prices = {
    [PlanOptions.Arcade]: {
        [PlanInterval.Monthly]: 9,
        [PlanInterval.Annual]: 90,
        yearlyNote: '2 months free'
    },
    [PlanOptions.Advanced]: {
        [PlanInterval.Monthly]: 12,
        [PlanInterval.Annual]: 120,
        yearlyNote: '2 months free'
    },
    [PlanOptions.Pro]: {
        [PlanInterval.Monthly]: 15,
        [PlanInterval.Annual]: 150,
        yearlyNote: '2 months free'
    }
};

export default function PlanOption({type, interval}: PlanOptionProps) {
    function getName() {
        switch(type) {
            case PlanOptions.Arcade: return 'Arcade';
            case PlanOptions.Advanced: return 'Advanced';
            case PlanOptions.Pro: 
            default: return 'Pro';
        }
    }

    function getPrice() {
        if(interval === PlanInterval.Monthly) {
            return `$${Prices[type][PlanInterval.Monthly]}/mo`
        }

        return `$${Prices[type][PlanInterval.Annual]}/yr`
    }

    function getNote() {
        if(interval === PlanInterval.Monthly) {
            return;
        }

        return (
            <span className={styles.note}>
                {Prices[type].yearlyNote}
            </span>
        )
    }
    
    return (
        <div className={styles.component}>
            <span className={`${styles.icon} ${styles[type]}`}/>
            <p className={styles.text}>
                <span className={styles.name}>{getName()}</span>
                <span className={styles.price}>{getPrice()}</span>
                {getNote()}
            </p>
        </div>
    )
}