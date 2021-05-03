import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListDate from '../../../components/Home/ListDate'

export default function ListDateHome(props) {
    const list = useSelector(state => state.TheaterReducer.theater);
    const arr = useSelector(state => state.TheaterTheoRapReducer.arrTheoRap);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <ListDate history={props.history} list={list} arr={arr}/>   
        </>
    )
}
