import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import DetailReview from '../../../components/Home/DetailReview';

export default function DetailReviewHome() {

    const dispatch = useDispatch();
    const params = useParams();
    const review = useSelector(state => state.DetailReviewReducer.detailReview);

    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch({type: 'GET_DETAIL_REVIEW_API', params})
    }, [dispatch, params])

    return (
        <>
            <DetailReview review={review}/>
        </>
    )
}
