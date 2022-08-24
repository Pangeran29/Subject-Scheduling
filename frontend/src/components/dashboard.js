/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate, Link } from 'react-router-dom'

export const Dashboard = () => {
  const [token, setToken] = useState("")
  const [name, setName] = useState("")
  const [expire, setExpire] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken()
    getUsers()
  }, [])

  const refreshToken = async (req, res) => {
    try {
      const response = await axios.get('http://localhost:5000/token')
      setToken(response.data.accessToken)
      const decoded = jwt_decode(response.data.accessToken)
      setExpire(decoded.exp)
      setName(decoded.name)
    } catch (error) {
      if (error.response) {
        navigate("/")
      }
    }
  }

  const axiosJwt = axios.create()

  axiosJwt.interceptors.request.use(async (config) => {
    const currentDate = new Date()
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token')
      config.headers.Authorization = `Bearer ${response.data.accessToken}`
      setToken(response.data.accessToken)
      const decoded = jwt_decode(response.data.accessToken)
      setExpire(decoded.exp)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })


  const getUsers = async (req, res) => {
    const response = await axiosJwt.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
  }
  
  return (
    < div className='container mt-5 ' >
      <h1 className='title is-3'>Welcome mr/mrs. {name}</h1>
      <table className='table is-fullwidth'>
        <thead>
          <tr>
            <th>
              <Link to={"/lecturers"} className="button is-big is-success is-outlined">Data Pengajar</Link>
            </th>
            <th>
              <Link to={"/subjects"}  className="button is-big is-success is-outlined">Data Mata Kuliah</Link>
            </th>
            <th>
              <Link to={"/students"}  className="button is-big is-success is-outlined">Data Mahasiswa</Link>
            </th>
            <th>
              <Link to={"/schedule"}  className="button is-big is-success is-outlined">Atur Jadwal</Link>
            </th>
          </tr>
        </thead>
      </table>
    </div >
  )
}

