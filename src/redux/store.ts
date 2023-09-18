import {combineReducers, legacy_createStore, Store} from "redux";
import {counterReducer, CounterReducerAT} from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

type StoreDispatch = CounterReducerAT
export type StateType = ReturnType<typeof rootReducer>
export type StoreType = Store<StateType, StoreDispatch>

export const store: StoreType = legacy_createStore(rootReducer)