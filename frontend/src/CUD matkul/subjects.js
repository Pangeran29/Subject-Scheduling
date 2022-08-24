import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Subjects = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getSubject();
    }, [])

    
    const getSubject = async () => {
        const response = await axios.get("http://localhost:5000/subjects");
        setSubjects(response.data);
    }

    const deleteSubject = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/subjects/${id}`);
            getSubject()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-three-quarters'>
                <Link to={"/subjects/add"} className="button is-big is-success">Add new</Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Mata Kuliah</th>
                            <th>Kode Mata Kuliah</th>
                            <th>Jadwal</th>
                        </tr>
                    </thead>
                    <tbody> 
                        { subjects.map((subject,index) => (
                        <tr key={ subject.id }>
                            <td>{ index+1 }</td>
                            <td>{ subject.subject }</td>
                            <td>{ subject.subject_code }</td>
                            <td>{ subject.schedule }</td>
                            <td>
                                <Link to={`/subjects/edit/${subject.id}`} className='button mr-1 is-small is-info'>Edit</Link>
                                <button onClick={()=> deleteSubject(subject.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

