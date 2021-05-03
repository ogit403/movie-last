import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Login from '../../../components/Home/Login'

export default function LoginHome(props) {
    
    const err = useSelector(state => state.LoginReducer.err)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Login history={props.history} err={err}/>   
        </>
    )
}
