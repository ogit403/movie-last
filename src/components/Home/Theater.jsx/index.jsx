import React, { useState } from 'react'
import './../../../assets/scss/sass/Layouts/_theater.scss';
import img from '../../../assets/img/theater/bhd-star-bitexco-16105952137769.png'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// {`${index === 0 ? 'true' : 'false'}`}
export default function Theater(props) {
    const renderRap = () => {
        if(props.theater.length) 
        return props.theater.map((items, index) => {
            return (
                <a href="?" role="tab" key={index} className={`nav-link ${index === 0 ? ' active' : ''}`} id={`v-pills-${items.maHeThongRap}-tab`} data-bs-toggle="pill" data-bs-target={`#v-pills-${items.maHeThongRap}`} aria-controls={`v-pills-${items.maHeThongRap}`} aria-selected="true">
                    <img src={items.logo} alt="" />
                </a>
            )
        })
    }

    
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const handleBuy = (id) => {
        if (localStorage.getItem("KhachHang")) {
            //accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
            props.history.push(`/buy/${id}`);
        }
        else {
            setOpen(o => !o);
            
            //console.log('abc');
            props.history.push(`/login`);
            // alert('Vui lòng đăng nhập !!!');
            //<Alert variant="success">
            //    <p>
            //        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            //        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            //        fermentum.
            //    </p>
            //</Alert>
        }
    }

    const renderContent = () => {
        if(props.arrTheoRap.length)
        return props.arrTheoRap.map((items, index) => {
            return (
                <div key={index} className={`tab-pane fade show ${index === 0 ? ' active' : ''} theater-${items.maHeThongRap}`} id={`v-pills-${items.maHeThongRap}`} role="tabpanel" aria-labelledby={`v-pills-${items.maHeThongRap}-tab`}>
                    <div className="d-flex align-items-start" style={{height: '703px'}}>
                        <div className="nav flex-column nav-pills me-3" style={{height: '2000px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                            {items.lstCumRap.map((theater, indexTheater) => {
                                let i = theater.tenCumRap.search(' - ');
                                return (
                                    <div key={indexTheater} className={`nav-link ${indexTheater === 0 ? ' active': ''}`} id={`v-pills-${items.maHeThongRap}-tab${indexTheater}`} data-bs-toggle="pill" data-bs-target={`#v-pills-${items.maHeThongRap}${indexTheater}`} aria-controls={`#v-pills-${items.maHeThongRap}${indexTheater}`} aria-selected="true">
                                        <div className="theater-items" style={{cursor:'pointer'}}>
                                            <img className="items-img" src={img} alt="" />
                                            <div className="items-title" style={{width: '215px'}}>
                                                <span className="items-name">
                                                    <span className="items-name-1">{theater.tenCumRap.substr(0, i)} </span>
                                                        {theater.tenCumRap.substr(i)}
                                                            </span>
                                                <span className="items-address">
                                                    {theater.diaChi}
                                                        </span>
                                                <span className="items-btn">
                                                    <Link to={`/detail-cinema/${items.maHeThongRap}`}>[chi tiết]</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="tab-content theater-content scrollbar" id="style-0">
                            {items.lstCumRap.map((theater, indexTheater) => {
                                return (
                                    <div key={indexTheater} className={`tab-pane fade show ${indexTheater === 0 ? ' active' : ''}`} id={`v-pills-${items.maHeThongRap}${indexTheater}`} role="tabpanel" aria-labelledby={`v-pills-${items.maHeThongRap}-tab${indexTheater}`}>
                                        {theater.danhSachPhim.map((movie, indexMovie) => {
                                            return (
                                                <div key={indexMovie} className="items-content">
                                                    <div className="items-movie">
                                                        <img src={movie.hinhAnh} alt="" />
                                                        <div className="movie-info">
                                                            <p className="title-1">
                                                                <span className="type">P</span>
                                                                <span className="info" style={{cursor:'pointer'}}>{movie.tenPhim}</span>
                                                            </p>
                                                            <p className="title-2">117 phút - TIX 9 - IMDb 0</p>
                                                        </div>
                                                    </div>
                                                    <div className="info-items">
                                                        <div className="type">2D Digital</div>
                                                        <div className="time">
                                                            {movie.lstLichChieuTheoPhim.map((time, indexTime) => {
                                                                let setTime = new Date(time.ngayChieuGioChieu).toLocaleTimeString();
                                                                if(setTime[2] === ':') setTime = setTime.slice(0, 5);
                                                                else setTime = setTime.slice(0,4);
                                                                // console.log(time);
                                                                if(indexTime <= 20){
                                                                    return (
                                                                        <button key={indexTime} onClick={() => handleBuy(time.maLichChieu)} className="watch">
                                                                            <span className="watch-1">{setTime} </span>
                                                                        </button>
                                                                    )
                                                                }
                                                                else return <Fragment key={indexTime}></Fragment>
                                                                
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })
    }

    const renderPopUp = () => {
        return (
            <Popup open={open} closeOnDocumentClick position="top center" onClose={closeModal}>
                <div className="theater-popup" style={{textAlign: 'center'}}>
                    <h3>Thông báo</h3>
                    <p>Vui lòng đăng nhập</p>
                </div>
            </Popup>
        )
    }
  
    return (
        <section className="theater">
            {renderPopUp()}
            

            <div className="wrapper-theater">
                {/* <button style={{position: 'absolute'}} onClick={() => setOpen(o => !o)}>ABC</button> */}
                <div className="theater-title">
                    <a href="?#">Cụm rạp - Lịch chiếu</a>
                </div>
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3 theater-first" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {/* {renderHeThongRap()} */}
                        {renderRap()}
                    </div>
                    <div className="tab-content theater-second" id="v-pills-tabContent" style={{ color: 'white' }}>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>

    )
}