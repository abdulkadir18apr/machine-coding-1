import { useState } from "react";
import { CreatePopup } from "../components/CreatePopup";
import { HabitCard } from "../components/HabitCard"
import { useHabitContext } from "../context/HabitContext"
import {NavLink} from "react-router-dom";

export const Home=()=>{
    const [show,setShow]=useState(false);

    const {state}=useHabitContext();
    return (
        <>
        <h1>Habit Tracker</h1>
        <NavLink to="/archive" >See Archive</NavLink>
     
        <div className="home">
            <div className="Habit-card creteHabitCard" >
                <button className="createBtn" onClick={()=>setShow(()=>true)}>
                <h1>Create Your Own</h1>
                </button>
               
            </div>
            {
                state.habits.map((habit)=>(
                    <div className="habit">
                        {!habit.isArchive && <HabitCard habitData={habit} />}
                    </div>
                ))
            }        
        
        </div>
        {
            show  &&   <CreatePopup show={show} setShow={setShow} />
        }
      
    </>
    )

}