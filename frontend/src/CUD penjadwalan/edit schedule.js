/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

export const EditSchedule = () => {
    const [scheduleTime, setScheduleTime] = useState("07.30 - 10.00");
    const [msg, setmsg] = useState("");
    const navigate = useNavigate();
    const { day, id } = useParams();

    useEffect(() => {
        getTime();
    }, [])

    const updateData = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/subjects/${day}/${id}`, {
                scheduleTime: scheduleTime,
            })
            navigate(`/schedule/${day}`)
        } catch (error) {
            if (error.response) {
                setmsg(error.response.data.msg)
            }
        }
    }

    const [times, setTime] = useState([]);
    const getTime = async () => {
        const response = await axios.get("http://localhost:5000/time");
        setTime(response.data);
    }


    // 
    const clearSchedule = async () => {
        try {
            await axios.patch(`http://localhost:5000/subject/${day}/${id}`);
            navigate(`/schedule/${day}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-half'>
                <p className='has-text-centered'>{msg}</p>
                <form onSubmit={updateData}>
                    <div className='field'>
                        <label className='label'>Jam</label>
                        <select value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} className="select is-fullwidth">
                            {times.map((time) => (
                                <option key={time.id} value={time.times}>{time.times}</option>
                            ))}
                        </select>
                    </div>
                    <div className='field'>
                        <button type='submit' className='button is-success'>Update</button>
                    </div>
                </form>
                <button onClick={() => clearSchedule()} className='button is-danger mt-2'>Cancle</button>
            </div>
        </div>
    )
}
