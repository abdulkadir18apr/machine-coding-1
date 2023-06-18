import React from 'react'
import { useHabitContext } from '../context/HabitContext'
import { HabitCard } from '../components/HabitCard';

export  function Archive() {
    const {state}=useHabitContext();


    return (
        <>
        <h1>Archives</h1>
     
        <div className="home">
            {
                state.habits.map((habit)=>(
                    <div className="habit">
                        {habit.isArchive && <HabitCard habitData={habit} />}
                    </div>
                ))
            }        
        
        </div>
    </>
    )
}
