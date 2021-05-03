import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Buy from '../../../components/Home/Buy'


export default function BuyHome() {
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.LoginReducer.users);
    const params = useParams();

    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch({
            type: 'GET_API_BUY',
            params
        })
    },[dispatch, params])

    return (
        <>
            <Buy user={user}/>
        </>
    )
}
