import React from 'react';
import styles from './RadioButtonBox.module.css';

export type RadioButtonBoxProps = {
    children: React.ReactNode;
    name: string;
    value: string;
}

export default function RadioButtonBox({children, name, value}: RadioButtonBoxProps) {
    return(
        <label className={styles.component}>
            <span className={styles.child}>
                {children}
            </span>
            <input className={`${styles.input} visually-hidden`} type="radio" name={name} value={value}/>
            <span className={styles.border}/>
        </label>
    )
}