/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

export const EditSubject = () => {
    const [subject, setSubject] = useState("");
    const [subject_code, setSubject_code] = useState("");
    const [schedule, setSchedule] = useState("Senin");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getSubjectByID();
    }, [])

    const updateSubject = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/subjects/${id}`, {
                subject,
                subject_code,
                schedule
            })
            navigate("/subjects")
        } catch (error) {
            console.log(error);
        }
    }

    const getSubjectByID = async () => {
        const response = await axios.get(`http://localhost:5000/subjects/${id}`)
        setSubject(response.data.subject);
        setSubject_code(response.data.subject_code);
        setSchedule(response.data.schedule);
    }
    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-half'>
                <form onSubmit={updateSubject}>
                    <div className='field'>
                        <label className='label'>Mata Kuliah</label>
                        <div className="control">
                            <input type="text" className='input' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Input Subject' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Subject Code</label>
                        <div className="control">
                            <input type="text" className='input' value={subject_code} onChange={(e) => setSubject_code(e.target.value)} placeholder="Input subject's code" />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Jadwal</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={schedule} onChange={(e) => setSchedule(e.target.value)}>
                                    <option value="Senin">Senin</option>
                                    <option value="Selasa">Selasa</option>
                                    <option value="Rabu">Rabu</option>
                                    <option value="Kamis">Kamis</option>
                                    <option value="Jumat">Jumat</option>
                                    <option value="Sabtu">Sabtu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <button type='submit' className='button is-success'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
