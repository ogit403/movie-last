import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Movie from '../../../components/AdminTemplate/Movie'

export default function MovieAdmin() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_API_ADMIN_MOVIE'
        })
    }, [dispatch])

    return (
        <>
            <Movie/>   
        </>
    )
}
