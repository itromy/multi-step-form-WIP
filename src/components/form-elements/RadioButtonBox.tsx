import React from 'react';
import styles from './RadioButtonBox.module.css';

export type RadioButtonBoxProps = {
    children: React.ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    onChange: ({name , value}: {name:string, value: string}) => void;
}

export default function RadioButtonBox({children, name, value, checked, onChange}: RadioButtonBoxProps) {
    function handleOnChange() {
        onChange({
            name: name,
            value: value,
        })
    }
    
    return(
        <label className={`${styles.component} ${checked ? styles.checked : ''}`}>
            <span className={styles.child}>
                {children}
            </span>
            <input onChange={handleOnChange} className={`${styles.input} visually-hidden`} type="radio" name={name} value={value} checked={checked}/>
       </label>
    )
}