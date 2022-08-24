import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Schedule = () => {

    useEffect(() => {
        getDay()
    }, [])

    const [days, setDay] = useState([]);
    const getDay = async () => {
        const response = await axios.get("http://localhost:5000/day");
        setDay(response.data);
    }
    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-three-quarters'>
                <table className='table is-fullwidth'>
                    <thead>
                        <tr>
                            {days.map((day) => (
                                <td key={day.id}>
                                    <Link to={`/schedule/${day.days}`} className="button is-big is-success is-outlined"> {day.days} </Link>
                                </td>
                            ))}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

