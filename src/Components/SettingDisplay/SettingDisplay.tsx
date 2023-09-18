import React, {ChangeEvent, useState} from 'react';
import {changeSettingValuesAC, setErrorAC, toggleSettingModeAC} from "../../redux/reducers/counterReducer";
import styles from './SettingDisplay.module.css'
import {useDispatch} from "react-redux";

type SettingDisplayPropsType = {
    maxValue: number
    minValue: number
    isSettingMode: boolean
    isError: boolean
}

export const SettingDisplay: React.FC<SettingDisplayPropsType> = ({minValue,maxValue,isSettingMode, isError}) => {
    const dispatch = useDispatch()

    const [inputMaxValue, setInputMaxValue] = useState(maxValue)
    const [inputMinValue, setInputMinValue] = useState(minValue)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value <= inputMinValue) {
            dispatch(setErrorAC(true))
        } else if (inputMinValue >= 0) {
            dispatch(setErrorAC(false))
        }
        setInputMaxValue(+e.currentTarget.value)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value < 0 || +e.currentTarget.value === inputMaxValue) {
            dispatch(setErrorAC(true))
        } else if (+e.currentTarget.value < inputMaxValue ) {
            dispatch(setErrorAC(false))
        }
        setInputMinValue(+e.currentTarget.value)
    }

    const changeSetting = () => {
        dispatch(changeSettingValuesAC(inputMaxValue,inputMinValue))
    }
    const toggleSettingMode = () => {
       if(!isSettingMode)  dispatch(toggleSettingModeAC())
    }
    const errorMaxInput = inputMaxValue <= inputMinValue || inputMaxValue === 0
    const errorMinInput = inputMaxValue <= inputMinValue || inputMinValue < 0
    const isDisabledSetButton = errorMaxInput || errorMinInput

    return (
        <div className={styles.settingDisplay}>
            <input onFocus={toggleSettingMode} className={errorMaxInput ? styles.error : ''} onChange={onChangeMaxValue} value={inputMaxValue} type="number"/>
            <input onFocus={toggleSettingMode} className={errorMinInput ? styles.error : ''} onChange={onChangeMinValue} value={inputMinValue} type="number"/>
            <button disabled={isDisabledSetButton} onClick={changeSetting}>SET</button>
        </div>
    );
};
