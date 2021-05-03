import React from 'react'
import './../../../assets/scss/sass/Layouts/_theater.scss';
import img from '../../../assets/img/theater/bhd-star-bitexco-16105952137769.png'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
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

    const handleBuy = (id) => {
        if (localStorage.getItem("KhachHang")) {
            //accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
            props.history.push(`/buy/${id}`);
        }
        else {
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
    return (
        <section className="theater">
            <div className="wrapper-theater">
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
                        {/* <div className="tab-pane fade show active theater-bhd" id="v-pills-bhd" role="tabpanel" aria-labelledby="v-pills-bhd-tab">
                            <div className="d-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" style={{height: '703px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                                    {renderCumRap('bhd', 0)}
                                </div>
                                <div className="tab-content theater-content scrollbar" id="style-0">
                                    
                                    <div className="tab-pane fade show active" id="v-pills-bhd1" role="tabpanel" aria-labelledby="v-pills-bhd-tab1">
                                        {renderPhim(0, 0)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-bhd2" role="tabpanel" aria-labelledby="v-pills-bhd-tab2">
                                        {renderPhim(1, 0)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-bhd3" role="tabpanel" aria-labelledby="v-pills-bhd-tab3">
                                        {renderPhim(2, 0)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-bhd4" role="tabpanel" aria-labelledby="v-pills-bhd-tab4">
                                        {renderPhim(3, 0)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-bhd5" role="tabpanel" aria-labelledby="v-pills-bhd-tab5">
                                        {renderPhim(4, 0)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-bhd6" role="tabpanel" aria-labelledby="v-pills-bhd-tab6">
                                        {renderPhim(5, 0)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade theater-cinestar" id="v-pills-cinestar" role="tabpanel" aria-labelledby="v-pills-cinestar-tab">
                            <div className="d-flex align-items-start" style={{height:'703px'}}>
                                <div className="nav flex-column nav-pills me-3" style={{maxHeight: '1850px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                                    {renderCumRap('cinestar', 1)}
                                </div>
                                <div className="tab-content theater-content scrollbar" id="style-0">
                                    <div className="tab-pane fade show active" id="v-pills-cinestar1" role="tabpanel" aria-labelledby="v-pills-cinestar-tab1">
                                        {renderPhim(0, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar2" role="tabpanel" aria-labelledby="v-pills-cinestar-tab2">
                                        {renderPhim(1, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar3" role="tabpanel" aria-labelledby="v-pills-cinestar-tab3">
                                        {renderPhim(2, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar4" role="tabpanel" aria-labelledby="v-pills-cinestar-tab4">
                                        {renderPhim(3, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar5" role="tabpanel" aria-labelledby="v-pills-cinestar-tab5">
                                        {renderPhim(4, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar6" role="tabpanel" aria-labelledby="v-pills-cinestar-tab6">
                                        {renderPhim(5, 1)}
                                    </div>
                                    <div className="tab-pane fade" id=" v-pills-cinestar7" role="tabpanel" aria-labelledby="v-pills-cinestar-tab7">
                                        {renderPhim(6, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar8" role="tabpanel" aria-labelledby="v-pills-cinestar-tab8">
                                        {renderPhim(7, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar9" role="tabpanel" aria-labelledby="v-pills-cinestar-tab9">
                                        {renderPhim(8, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar10" role="tabpanel" aria-labelledby="v-pills-cinestar-tab10">
                                        {renderPhim(9, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar11" role="tabpanel" aria-labelledby="v-pills-cinestar-tab11">
                                        {renderPhim(10, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar12" role="tabpanel" aria-labelledby="v-pills-cinestar-tab12">
                                        {renderPhim(11, 1)}
                                    </div>
                                    <div className="tab-pane fade" id=" v-pills-cinestar13" role="tabpanel" aria-labelledby="v-pills-cinestar-tab13">
                                        {renderPhim(12, 1)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cinestar14" role="tabpanel" aria-labelledby="v-pills-cinestar-tab14">
                                        {renderPhim(13, 1)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade theater-ddc" id="v-pills-ddc" role="tabpanel" aria-labelledby="v-pills-ddc-tab">
                            <div className="d-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" style={{height: '703px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                                    {renderCumRap('ddc', 2)}
                                </div>
                                <div className="tab-content theater-content scrollbar" id="style-0">
                                    <div className="tab-pane fade show active" id="v-pills-ddc1" role="tabpanel" aria-labelledby="v-pills-ddc-tab1">
                                        {renderPhim(0, 2)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-ddc2" role="tabpanel" aria-labelledby="v-pills-ddc-tab2">
                                        {renderPhim(1, 2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade theater-mega" id="v-pills-mega" role="tabpanel" aria-labelledby="v-pills-mega-tab">
                            <div className="d-flex align-items-start" style={{height:'703px'}}>
                                <div className="nav flex-column nav-pills me-3" style={{height: '803px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                                {renderCumRap('mega', 3)}
                                </div>
                                <div className="tab-content theater-content scrollbar" id="style-0">
                                    <div className="tab-pane fade show active" id="v-pills-mega1" role="tabpanel" aria-labelledby="v-pills-mega-tab1">
                                        {renderPhim(0, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega2" role="tabpanel" aria-labelledby="v-pills-mega-tab2">
                                    {renderPhim(1, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega3" role="tabpanel" aria-labelledby="v-pills-mega-tab3">
                                    {renderPhim(2, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega4" role="tabpanel" aria-labelledby="v-pills-mega-tab4">
                                    {renderPhim(3, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega5" role="tabpanel" aria-labelledby="v-pills-mega-tab5">
                                    {renderPhim(4, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega6" role="tabpanel" aria-labelledby="v-pills-mega-tab6">
                                    {renderPhim(5, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega7" role="tabpanel" aria-labelledby="v-pills-mega-tab7">
                                    {renderPhim(6, 3)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-mega8" role="tabpanel" aria-labelledby="v-pills-mega-tab8">
                                    {renderPhim(7, 3)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade theater-dcine" id="v-pills-dcine" role="tabpanel" aria-labelledby="v-pills-dcine-tab">
                            <div className="d-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" style={{height: '703px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                                {renderCumRap('dcine', 4)}
                                </div>
                                <div className="tab-content theater-content scrollbar" id="style-0">
                                    <div className="tab-pane fade show active" id="v-pills-dcine1" role="tabpanel" aria-labelledby="v-pills-dcine-tab1">
                                        {renderPhim(0, 4)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-dcine2" role="tabpanel" aria-labelledby="v-pills-dcine-tab2">
                                        {renderPhim(1, 4)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-dcine3" role="tabpanel" aria-labelledby="v-pills-dcine-tab3">
                                        {renderPhim(2, 4)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-dcine4" role="tabpanel" aria-labelledby="v-pills-dcine-tab4">
                                        {renderPhim(3, 4)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-dcine5" role="tabpanel" aria-labelledby="v-pills-dcine-tab5">
                                        {renderPhim(4, 4)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-dcine6" role="tabpanel" aria-labelledby="v-pills-dcine-tab6">
                                        {renderPhim(5, 4)}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-dcine7" role="tabpanel" aria-labelledby="v-pills-dcine-tab7">
                                        {renderPhim(6, 4)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade theater-lotte" id="v-pills-lotte" role="tabpanel" aria-labelledby="v-pills-lotte-tab">
                            <div className="d-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" style={{height: '703px', overflowY: 'scroll', width:'50%'}} id="style-0" role="tablist" aria-orientation="vertical">
                                {renderCumRap('lotte', 5)}
                                </div>
                                <div className="tab-content theater-content scrollbar" id="style-0">
                                    <div className="tab-pane fade show active" id="v-pills-lotte1" role="tabpanel" aria-labelledby="v-pills-lotte-tab1">
                                        {renderPhim(0, 5)}
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>

    )
}