import React from 'react';
import styles from './Container.module.css';

export type ContainerProps = {
    children: React.ReactNode;
}

export default function Container({ children } : ContainerProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}