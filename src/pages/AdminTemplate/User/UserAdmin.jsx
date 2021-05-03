import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useParams } from 'react-router';
import User from '../../../components/AdminTemplate/User'

export default function UserAdmin() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_API_ADMIN_USER'
        })
    },[dispatch])

    return (
        <>
            <User/>   
        </>
    )
}
