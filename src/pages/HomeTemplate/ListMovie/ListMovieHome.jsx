import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListMovie from '../../../components/Home/ListMovie'
// import Loading from '../../../components/Loading'
export default function ListMovieHome(props) {

    const dispatch = useDispatch();
    const listMovie = useSelector(state => state.ListMovieReducer.listMovie);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({type: 'GET_API_LISTMOVIE_SAGA'});
    }, [dispatch])

    return (
        <>
            <ListMovie listMovie={listMovie}/>   
        </>
    )
}
