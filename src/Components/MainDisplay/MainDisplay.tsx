import React from 'react';
import {useDispatch} from "react-redux";
import styles from './MainDisplay.module.css'
import {ButtonBlock} from "../ButtonBlock/ButtonBlock";
import {
    incCurrentValueAC,
    resetCurrentValueAC,
    toggleSettingModeAC
} from "../../redux/reducers/counterReducer";

type MainDisplayPropsType = {
    isError?: boolean
    currentValue: number
    maxValue: number
    minValue: number
    isSettingMode: boolean
    isOneDisplay?: boolean
}

export const MainDisplay: React.FC<MainDisplayPropsType> = ({isError, currentValue, minValue,maxValue,isSettingMode,isOneDisplay= true}) => {
    const dispatch = useDispatch()
    const incrementValue = () => {
        dispatch(incCurrentValueAC(currentValue + 1))
    }
    const resetValue = () => {
        dispatch(resetCurrentValueAC())
    }
    const toggleSettingMode = () => {
        dispatch(toggleSettingModeAC())
    }

    const classNames = styles.mainDisplay + ' ' + (isError || currentValue === maxValue && !isSettingMode ? styles.error : '')

    return (
        <div className={classNames}>
            {isSettingMode ?
                <div className={styles.settingMessage}>Change values and press Set</div>
                :
                <div className={styles.currentValue}>{currentValue}</div>
            }
            <ButtonBlock toggleSettingMode={toggleSettingMode}
                         resetValue={resetValue}
                         incrementValue={incrementValue}
                         withSetButton={isOneDisplay}
                         incrementDisabled={currentValue === maxValue || isSettingMode}
                         resetDisabled={currentValue === minValue || isSettingMode}
                         setDisabled={isSettingMode}
            />
        </div>
    );
};
