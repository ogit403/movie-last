import React, { useEffect } from 'react'
import Regist from '../../../components/Home/Regist'
export default function RegistHome(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Regist history={props.history}/>
        </>
    )
}
