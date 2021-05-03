import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Detail from '../../../components/Home/Detail'

export default function DetailHome(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.DetailReducer.detail);
    const theater = useSelector(state => state.TheaterReducer.theater);
    const arrTheoRap = useSelector(state => state.TheaterTheoRapReducer.arrTheoRap);
    const review = useSelector(state => state.ReviewReducer.review);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: 'GET_API_DETAIL_SAGA',
            params
        })
        dispatch({
            type: 'GET_API_COMMENT',
        });
    }, [dispatch, params])
    
    return (
        <>
            <Detail history={props.history} items={items} theater={theater} arrTheoRap={arrTheoRap} review={review}/>
        </>
    )
}
