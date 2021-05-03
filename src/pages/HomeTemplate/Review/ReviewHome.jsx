import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Review from '../../../components/Home/Review'

export default function ReviewHome() {

    // const dispatch = useDispatch();
    const list = useSelector(state => state.ReviewReducer.review)
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Review list={list}/>   
        </>
    )
}
