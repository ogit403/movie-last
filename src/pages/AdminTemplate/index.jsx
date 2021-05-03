import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import NavbarAdmin from '../../components/NavbarAdmin'
import '../../assets/scss/sass/Page/Admin/_admin-base.scss';
import '../../assets/scss/sass/Page/Admin/_title-user.scss';

function AdminLayout(props){
    return (
        <>
            <section className="admin">
                <NavbarAdmin />
                {props.children}
            </section>
        </>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route {...props} render={propsComponent => {
            if (localStorage.getItem('QuanTri'))
                return <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout>
            return <Redirect to='/login' />
        }} />
    )
}
