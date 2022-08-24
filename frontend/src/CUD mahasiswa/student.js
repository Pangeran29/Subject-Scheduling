import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Student = () => {
    const [students, setStudent] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    
    const getData = async () => {
        const response = await axios.get("http://localhost:5000/students");
        setStudent(response.data);
    }

    const deleteData = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/delete/${id}`);
            getData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-three-quarters'>
                <Link to={"/students/add"} className="button is-big is-success">Add new</Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Mata Kuliah</th>
                            <th>Kode Mata Kuliah</th>
                        </tr>
                    </thead>
                    <tbody> 
                        { students.map((student,index) => (
                        <tr key={ student.id }>
                            <td>{ index+1 }</td>
                            <td>{ student.student }</td>
                            <td>{ student.subject }</td>
                            <td>{ student.subjectCode }</td>
                            <td>
                                <Link to={`/students/edit/${student.id}`} className='button mr-1 is-small is-info'>Edit</Link>
                                <button onClick={()=> deleteData(student.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

