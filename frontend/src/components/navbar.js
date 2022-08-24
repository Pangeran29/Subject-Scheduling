import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout')
            alert("success logout")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://telkomuniversity.ac.id/">
                        <img src="https://telkomuniversity.ac.id/wp-content/uploads/2019/03/Logo-Telkom-University-png-3430x1174.png" alt='' width="112" height="28" />
                    </a>

                    <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href='/dashboard' className="navbar-item">
                            Home
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">                           
                            <Link to={"/"} className="button is-light">
                                Login
                            </Link>   
                        </div>
                        <div className="navbar-item">                           
                            <Link to={"/register"} className="button is-light">
                                Register
                            </Link>   
                        </div>
                        <div className="navbar-item">                           
                            <Link to={"/"} onClick={ logout } className="button is-light">
                                Log out
                            </Link>   
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

