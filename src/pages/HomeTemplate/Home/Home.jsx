import React, { useEffect } from 'react'
import AppMobile from '../../../components/Home/App'
import Book from '../../../components/Home/Book/index.jsx'
import Carousel from '../../../components/Home/Carousel'
import Event from '../../../components/Home/Event'
import List from '../../../components/Home/List'
import Theater from '../../../components/Home/Theater.jsx'
// import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
// import Loading from '../../../components/Loading'

export default function Home(props) {

    const dispatch = useDispatch();
    const list = useSelector(state => state.HomeReducer.list);
    const theater = useSelector(state => state.TheaterReducer.theater);
    const arrTheoRap = useSelector(state => state.TheaterTheoRapReducer.arrTheoRap);
    const event = useSelector(state => state.EventsReducer.events)
    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({type: 'GET_API_HOME_SAGA'});
        dispatch({type: 'GET_API_THEATER_SAGA'});
        dispatch({type: 'GET_API_THEATERTHEORAP_SAGA'});
        dispatch({type: 'GET_EVENTS_API'});
        dispatch({type: 'GET_REVIEW_API'});
        
    }, [dispatch])
    

    return (
        <>
            <Carousel/>
            <Book list={list} theater={arrTheoRap}/>
            <List list={list}/>
            <Theater history={props.history} theater={theater} arrTheoRap={arrTheoRap}/>
            <Event event={event}/>
            <AppMobile/>
        </>
    )
}
