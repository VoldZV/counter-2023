import React from 'react';
import {DisplayWrapper} from "./DisplayWrapper/DisplayWrapper";
import {MainDisplay} from "./MainDisplay/MainDisplay";
import {useSelector} from "react-redux";
import {StateType} from "../redux/store";
import {SettingDisplay} from "./SettingDisplay/SettingDisplay";
import {initialState} from "../redux/reducers/counterReducer";

export const OneDisplayCounter = () => {
    const state = useSelector<StateType, typeof initialState>(state => state.counter)
    const {maxValue,minValue,currentValue,error, isSettingMode} = state

    return (
        <DisplayWrapper>
            {isSettingMode ?
                <SettingDisplay maxValue = {maxValue} minValue = {minValue} isSettingMode = {isSettingMode} isError={error}/>
                :
                <MainDisplay maxValue = {maxValue} minValue = {minValue} isSettingMode = {isSettingMode} currentValue={currentValue} isError={error}/>
            }
        </DisplayWrapper>
    );
};
