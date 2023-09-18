import React from 'react';
import {DisplayWrapper} from "./DisplayWrapper/DisplayWrapper";
import {SettingDisplay} from "./SettingDisplay/SettingDisplay";
import {useSelector} from "react-redux";
import {StateType} from "../redux/store";
import {MainDisplay} from "./MainDisplay/MainDisplay";
import {initialState} from "../redux/reducers/counterReducer";

export const TwoDisplayCounter = () => {
    const state = useSelector<StateType, typeof initialState>(state => state.counter)
    const {maxValue,minValue,currentValue,error, isSettingMode} = state

    return (
        <>
            <DisplayWrapper>
                <SettingDisplay maxValue = {maxValue} minValue = {minValue} isSettingMode = {isSettingMode} isError={error}/>
            </DisplayWrapper>
            <DisplayWrapper>
                <MainDisplay isOneDisplay={false} maxValue = {maxValue} minValue = {minValue} isSettingMode = {isSettingMode}  isError={error} currentValue={currentValue}/>
            </DisplayWrapper>
        </>
    );
};
