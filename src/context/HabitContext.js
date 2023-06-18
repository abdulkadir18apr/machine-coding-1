import { createContext, useContext, useReducer } from "react";
import { HabitReducer } from "../reducer/HabitReducer";
import { HabitData } from "../data/HabitData";

export const HabitContext=createContext();

export const HabitProvider=({children})=>{

    const [state,dispatch]=useReducer(HabitReducer,{
        habits:[...HabitData]
    })

    return(
        <HabitContext.Provider value={{state,dispatch}}>
            {children}
        </HabitContext.Provider>
    )
}

export const useHabitContext=()=>useContext(HabitContext);