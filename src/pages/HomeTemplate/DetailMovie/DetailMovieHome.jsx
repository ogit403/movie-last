import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import DetailMovie from '../../../components/Home/DetailMovie'

export default function DetailMovieHome() {
    const dispatch = useDispatch();
    const params = useParams();
    const list = useSelector(state => state.DetailMovieReducer.cinemas);
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch({
            type: 'GET_API_DETAIL_MOVIE',
            params
        })
    },[dispatch, params])

    return (
        <>
            <DetailMovie list={list}/>   
        </>
    )
}
