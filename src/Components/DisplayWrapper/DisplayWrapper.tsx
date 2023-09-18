import React from 'react';
import styles from './DisplayWrapper.module.css'

type DisplayWrapperPropsType = {
    children?: React.ReactNode
}

export const DisplayWrapper: React.FC<DisplayWrapperPropsType> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

