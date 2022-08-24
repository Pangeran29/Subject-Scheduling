import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const [name, setName] = useState("")
    const [nip, setNip] = useState("")
    const [matkul, setMatkul] = useState("Kewarganegaraan")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const navigate = useNavigate()
    // eslint-disable-next-line
    const [msg, setmsg] = useState("")

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                nip: nip,
                matkul: matkul,
                username: username,
                password: password,
                confPassword: confPassword
            })
            navigate('/')
        } catch (error) {
            if (error.response) {
                setmsg(error.response.data.msg)
            }
        }
    }

    /*  */

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getSubject();
    }, [])   

    const getSubject = async () => {
        const response = await axios.get("http://localhost:5000/subjects");
        setSubjects(response.data);
    }


    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className='box'>
                                <p className='title is-5 has-text-centered'>- Register Page -</p>
                                <p className='has-text-centered'>{msg}</p>
                                <div className="field mt-5">
                                    <label className='label'>Name</label>
                                    <div className="controls">
                                        <input type="text" className='input' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>NIP</label>
                                    <div className="controls">
                                        <input type="text" className='input' placeholder='Enter 16 digit NIP' value={nip} onChange={(e) => setNip(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Mata Kuliah</label>
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select value={matkul} onChange={(e) => setMatkul(e.target.value)}>
                                                {subjects.map((subject)=>(
                                                    <option key={subject.id} value={subject.subject}>{subject.subject}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Username</label>
                                    <div className="controls">
                                        <input type="text" className='input' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Password</label>
                                    <div className="controls">
                                        <input type="password" className='input' placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className='input' placeholder='******' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className='button is-success is-fullwidth'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

//export default login