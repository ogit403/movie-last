import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import NavbarHome from '../../components/NavbarHome'

function HomeLayout(props){
    return (
        <>
            <Loading/>
            <NavbarHome/>
                {props.children}
            <Footer/>
        </>
    )
}

export default function HomeTemplate({Component, ...props}) {
    return (
        <Route 
        {...props} 
        render ={(propsComponent) => (
            <HomeLayout>
                <Component {...propsComponent}/>
            </HomeLayout>
        )} 
        />
    )
}
