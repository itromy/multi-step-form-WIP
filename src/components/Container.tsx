import React from 'react';
import styles from './Container.module.css';

export type ContainerProps = {
    children: React.ReactNode;
    backgroundColor?: string;
}

export default function Container({ children, backgroundColor } : ContainerProps) {
    const style = {
        backgroundColor,
    }

    return (
        <div className={styles.container} style={style}>
            {children}
        </div>
    )
}