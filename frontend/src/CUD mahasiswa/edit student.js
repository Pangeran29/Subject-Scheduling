/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

export const EditStudent = () => {
    const [student, setStudent] = useState("");
    const [subject, setSubject] = useState("");
    const [subjectCode, setSubjectCode] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getDataByID()
        getSubject();
    }, [])

    const updateData = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/edit/${id}`, {
                student,
                subject,
                subjectCode,
            })
            navigate("/students")
        } catch (error) {
            console.log(error);
        }
    }

    const getDataByID = async () => {
        const response = await axios.get(`http://localhost:5000/students/${id}`)
        setStudent(response.data.student);
        setSubject(response.data.subject);
        setSubjectCode(response.data.subjectCode);
    }


    const [subjects, setSubjects] = useState([]);
    const getSubject = async () => {
        const response = await axios.get("http://localhost:5000/subjects");
        setSubjects(response.data);
    }

    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-half'>
                <form onSubmit={updateData}>
                    <div className='field'>
                        <label className='label'>Nama</label>
                        <div className="control">
                            <input type="text" className='input' value={student} onChange={(e) => setStudent(e.target.value)} placeholder='Input Name' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Mata Kuliah</label>
                        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="select is-fullwidth">
                            {subjects.map((matkul) => (
                                <option key={matkul.id} value={matkul.subject}>{matkul.subject}</option>
                            ))}
                        </select>
                    </div>
                    <div className='field'>
                        <label className='label'>Kode Mata Kuliah</label>
                        <select value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)} className="select is-fullwidth">
                            {subjects.map((matkul) => (
                                <option key={matkul.id} value={matkul.subject_code}>{matkul.subject_code}</option>
                            ))}
                        </select>
                    </div>
                    <div className='field'>
                        <button type='submit' className='button is-success'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
