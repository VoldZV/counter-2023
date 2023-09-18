export const initialState = {
    maxValue: 5 as number,
    minValue: 0 as number,
    isSettingMode: false as boolean,
    currentValue: 0 as number,
    error: false as boolean,
    theme: 'white' as 'white' | 'dark'
}

export const counterReducer = (state: typeof initialState = initialState, action: CounterReducerAT): typeof initialState => {
    switch (action.type) {
        case "Theme/SetTheme":
            return {
                ...state,
                theme: action.theme
            }
        case "Settings/ToggleSettingMode":
            return {
                ...state,
                isSettingMode: !state.isSettingMode
            }
        case "CurrentValue/Increment":
            return {
                ...state,
                currentValue: action.countValue
            }
        case "CurrentValue/Reset":
            return {
                ...state,
                currentValue: state.minValue
            }
        case "Settings/ChangeSettingValues":
            return {
                ...state,
                maxValue: action.newMaxValue,
                minValue: action.newMinValue,
                isSettingMode: false,
                currentValue: action.newMinValue
            }
        case "Error/SetError":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export type CounterReducerAT =
    ReturnType<typeof incCurrentValueAC>
    | ReturnType<typeof changeSettingValuesAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setThemeAC>
    | ReturnType<typeof toggleSettingModeAC>
    | ReturnType<typeof resetCurrentValueAC>

export const incCurrentValueAC = (countValue: number) => ({
    type: "CurrentValue/Increment",
    countValue
} as const)
export const resetCurrentValueAC = () => ({
    type: "CurrentValue/Reset",
} as const)
export const changeSettingValuesAC = (newMaxValue: number, newMinValue: number) => ({
    type: "Settings/ChangeSettingValues",
    newMaxValue,
    newMinValue
} as const)
export const toggleSettingModeAC = () => ({
    type: "Settings/ToggleSettingMode",
} as const)
export const setErrorAC = (error: boolean) => ({
    type: "Error/SetError",
    error
} as const)
export const setThemeAC = (theme: 'white' | 'dark') => ({
    type: "Theme/SetTheme",
    theme
} as const)
