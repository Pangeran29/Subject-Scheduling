/* eslint-disable */
import { useState, useEffect } from 'react'
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

export const Lecturers = () => {

  const [token, setToken] = useState("")
  const [expire, setExpire] = useState("")
  const [users, setUsers] = useState([])
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
    setUsers(response.data)
  }



  return (

    <div className='columns mt-3 is-centered'>
      <div className='column is-three-quarters'>
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Pegajar</th>
              <th>No induk Pengajar</th>
              <th>Mata kuliah</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.nip}</td>
                <td>{user.matkul}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

