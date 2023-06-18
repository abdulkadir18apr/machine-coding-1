import React, { useState } from 'react'
import { CreatePopup } from './CreatePopup';
import { AiFillDelete } from "react-icons/ai"
import { BsFillArchiveFill } from "react-icons/bs";
import { useHabitContext } from '../context/HabitContext';
import { useLocation } from "react-router-dom"
import { HiArchiveBoxXMark } from "react-icons/hi2"

export function HabitCard({ habitData }) {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();

    const { dispatch } = useHabitContext();
    const bgColors = [
        "#c084fc", "#d946ef", "#ec4899", "#fb7185", "#14b8a6"
    ]
    const randomColorGenerator = () => {
        return bgColors[Math.floor(Math.random() * 6)];
    }
    const markAsArchive = (id) => {
        dispatch({ type: 'Set-Archive', payload: id });
    }
    const markAsUnArchive = (id) => {
        dispatch({ type: 'Un-Set-Archive', payload: id });
    }
    const markAsDelete = (id) => {
        dispatch({ type: 'Delete-Habit', payload: id });
    }
    const color = randomColorGenerator();
    return (
        <>

            <div className='Habit-card' style={{ backgroundColor: color }}>
                <div className="icon" onClick={() => markAsDelete(habitData.id)}>
                    <AiFillDelete />
                </div>

                <h1 onClick={() => setShow(true)}>{habitData.habit}</h1>
                {
                    pathname === "/" && <div className="icon-left" onClick={() => markAsArchive(habitData.id)}>
                        <BsFillArchiveFill />
                    </div>

                }
                {
                    pathname === "/archive" && <div className="icon-left" onClick={() => markAsUnArchive(habitData.id)}>
                    <HiArchiveBoxXMark />
                </div>

                }

            </div>

            {
                show && <CreatePopup setShow={setShow} edit={true} habitData={habitData} />
            }
        </>
    )
}
