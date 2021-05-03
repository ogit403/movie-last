import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../assets/scss/sass/Page/Admin/_navbar-admin.scss';

export default function NavbarAdmin() {
    return (
        <div className="sidebar-left">
            <h3>Admin</h3>
            <ul className="list">
                <li className="active">  
                    <NavLink activeClassName to="/movie">
                        <i className="fa fa-film" />
                        Phim
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <i className="fa fa-user" />
                        Người dùng
                    </NavLink>
                </li>
            </ul>
        </div>

    )
}
