import React from "react"
import styles from './Button.module.css'

export type ButtonProps = {
    children: React.ReactNode;
    onClick: (values: unknown) => void;
    styleType?: ButtonStyleType,

}

export enum ButtonStyleType {
    Primary = 'primary',
    Secondary = 'secondary',
}

export default function Button({children, styleType, onClick}: ButtonProps) {
    return (
        <button className={`${styles.button} ${styles[styleType ?? ButtonStyleType.Primary]}`} type="button" onClick={onClick}>
            {children}
        </button>
    )
}