/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"


export const ShowSchedulebyDay = () => {
    const { day } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getSubject();
    }, [])

    const clearSchedule = async () => {
        try {
            await axios.delete(`http://localhost:5000/subject/${day}`);
            navigate("/schedule")
        } catch (error) {
            console.log(error)
        }
    }

    const [subjects, setSubjects] = useState([]);
    const getSubject = async () => {
        const response = await axios.get(`http://localhost:5000/subject/${day}`);
        setSubjects(response.data);
    }

    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-three-quarters'>
                <button onClick={() => clearSchedule()} className='button is-small is-danger'>Delete all schedule</button>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>Mata Kuliah</th>
                            <th>Kode Mata Kuliah</th>
                            <th>Jam</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((matkul) => (
                            <tr key={matkul.id}>
                                <td>{matkul.subject}</td>
                                <td>{matkul.subject_code}</td>
                                <td>{matkul.scheduleTime}</td>
                                <td>
                                    <Link to={`/schedule/${matkul.schedule}/${matkul.id}`} className='button mr-1 is-small is-info'>Pilih jam</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
