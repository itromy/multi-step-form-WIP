import React from "react"
import styles from './Button.module.css'

export type ButtonProps = {
    type?: 'submit' | 'button' | 'reset',
    children: React.ReactNode;
    onClick: (values: unknown) => void
}

export default function Button({type, children, onClick}: ButtonProps) {
    return (
        <button className={styles.button} type={type ? type : 'button'} onClick={onClick}>
            {children}
        </button>
    )
}