import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DetailUsers from '../../../components/Home/DetailUsers'

export default function DetailUserHome() {
    
    const params = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.DetailUserReducer.detailUser)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: 'GET_API_DETAIL_USER',
            params
        })
    }, [dispatch, params])

    return (
        <>
            <DetailUsers user={items}/>   
        </>
    )
}
