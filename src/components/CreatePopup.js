import React, { useState } from 'react'
import { useHabitContext } from '../context/HabitContext';
import { v4 as uuidv4 } from 'uuid';

export function CreatePopup({show ,setShow,edit=false, habitData={}}) {

    const [habit,setHabit]=useState(!edit?{goal:"1 times a day",repeat:"Daily" ,time:"Morning"}:habitData);

    const {dispatch}=useHabitContext();

    const onInputChange=(e)=>{
        setHabit((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const habitCreateHandler=(e)=>{
        e.preventDefault();
        const payload={id:uuidv4(), ...habit}
        if(!edit){
            dispatch({type:"Add-Habit",payload:{...payload}});
        }
        else{

            dispatch({type:"Edit-Habit",payload:{...habit}})
        }
       
        setShow(()=>false)
    }

  return (
    <div className='modal'>
        <h1>Create Habit</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="habit" id="name" value={habit?.habit} onChange={onInputChange} required/>
            <div className="child">
                <div className="item">
                    <label htmlFor="repeat" >Repeat</label>
                    <select name="repeat" id="reapeat" vlaue={habit?.repeat} onChange={onInputChange}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="goal">Goal</label>
                    <select name="goal" id="goal" value={habit?.goal}  onChange={onInputChange}>
                        <option value="1 times a Day">1 times a Day</option>
                        <option value="2 times a Day">2 times a Day</option>
                        <option value="3 times a Day"> times a Day</option>
                    </select>
                </div>
            </div>
            <div className="child">
                <div className="item">
                    <label htmlFor="time">Time of Day</label>
                    <select name='time' value={habit?.time} id='time'  onChange={onInputChange} >
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="start Date">Start-Date</label>
                    <input type="date" name="startDate" id="start Date"  value={habit?.startDate}  onChange={onInputChange} required/>
                </div>
            </div>
            <div className="child popup-btn">
                    <button onClick={()=>setShow(()=>false)}>Discard</button>
                    <button onClick={(e)=>habitCreateHandler(e)}>{!edit?"Create":"Edit"}</button>
            </div>
        </form>
    </div>
  )
}
