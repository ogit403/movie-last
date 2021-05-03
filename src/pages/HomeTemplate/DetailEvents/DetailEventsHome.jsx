import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import DetailEvent from '../../../components/Home/DetailEvent'

export default function DetailEventsHome() {
    
    const dispatch = useDispatch();
    const params = useParams();
    const item = useSelector(state => state.DetailEventsReducer.detailEvents)
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: 'GET_EVENT_API',
            params
        })
    }, [dispatch, params])

    return (
        <>
            <DetailEvent item={item}/>   
        </>
    )
}
