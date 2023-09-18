import React from 'react';
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./redux/store";
import {setThemeAC} from "./redux/reducers/counterReducer";
import {TwoDisplayCounter} from "./Components/TwoDisplayCounter";
import {OneDisplayCounter} from "./Components/OneDisplayCounter";

function App() {
  const theme = useSelector<StateType, 'white' | 'dark'>(state => state.counter.theme)
  const dispatch = useDispatch()
  const toggleTheme = () => {
    const newTheme = theme === 'white' ? 'dark' : 'white'
    dispatch(setThemeAC(newTheme))
  }

  const AppClassName = 'App ' + theme

  return (
    <div className={AppClassName}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <OneDisplayCounter/>
      <TwoDisplayCounter/>
    </div>
  );
}

export default App;
