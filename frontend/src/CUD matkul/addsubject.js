import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const AddSubject = () => {
    const [subject, setSubject] = useState("");
    const [subject_code, setSubject_code] = useState("");
    const [schedule, setSchedule] = useState("Senin");
    const navigate = useNavigate();

    const saveSubject = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/subject", {
                subject,
                subject_code,
                schedule
            })
            navigate("/subjects")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-half'>
                <form onSubmit={saveSubject}>
                    <div className='field'>
                        <label className='label'>Mata Kuliah</label>
                        <div className="control">
                            <input type="text" className='input' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Input Mata Kuliah' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Kode Mata Kuliah</label>
                        <div className="control">
                            <input type="text" className='input' value={subject_code} onChange={(e) => setSubject_code(e.target.value)} placeholder='Input Kode Mata Kuliah' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Mata Kuliah</label>
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
                        <button type='submit' className='button is-success'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

