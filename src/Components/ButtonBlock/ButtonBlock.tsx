import React from 'react';
import styles from './ButtonBlock.module.css'

type ButtonBlockPropsType = {
    withSetButton?: boolean
    incrementValue: () => void
    resetValue: () => void
    toggleSettingMode?: () => void
    setDisabled: boolean
    incrementDisabled: boolean
    resetDisabled: boolean
}

export const ButtonBlock: React.FC<ButtonBlockPropsType> = ({withSetButton,incrementValue,
                                                                resetValue,toggleSettingMode,resetDisabled,
                                                                incrementDisabled,setDisabled}) => {

    return (
        <div className={styles.buttonBlock}>
            {withSetButton && <button disabled={setDisabled} onClick={toggleSettingMode}>SET</button>}
            <button disabled={incrementDisabled} onClick={incrementValue}>INC</button>
            <button disabled={resetDisabled} onClick={resetValue}>RESET</button>
        </div>
    );
};