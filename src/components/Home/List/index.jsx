import React from 'react';
import './../../../assets/scss/sass/Layouts/_list.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function List(props) {
    const settings = {
        dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    }

    const renderShowing = () => {
        return props.list.map((items, index) => {
            return (
                <Link key={index} to={`/list-movie/${items.maPhim}`}>
                    <div className="items" >
                        <div className="items-image">
                            <div className="showHidden">
                                <button>
                                    <img src="./img/list/play-video.png" alt="" />
                                </button>
                            </div>
                            <img className="img-main" src={items.hinhAnh} alt="" />
                            <span className="type isShow">
                                <img src="./img/list/c-13.png" alt="" />
                            </span>
                            <span className="rate isShow">
                                <p className="point">{items.danhGia}</p>
                                <p className="star">
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.2.png" alt="" />
                                </p>
                            </span>
                            <span className="screen-soon isShow">Suất chiếu sớm</span>
                            <div className="showBuy">
                                <button style={{textDecoration: 'none', textAlign:'center', cursor:'pointer'}} type="button" className="buy-btn">
                                    <img style={{marginLeft:'-20px', marginRight: '10px'}} src="./img/list/icon-ticket.png" alt="" />
                                    <span>Mua Vé Ngay</span>
                                </button>
                            </div>
                        </div>
                        <div className="items-info isShow">
                            <p className="title">{items.tenPhim}</p>
                            <p className="time">117 phút</p>
                        </div>
                    </div>
                </Link>
                
            )
        })
    }

    const renderSooning = () => {
        return props.list.map((items, index) => {
            return (
                <Link key={index} to={`/list-movie/${items.maPhim}`}>
                    <div className="items" key={index}>
                        <div className="items-image">
                            <div className="showHidden">
                                <button>
                                    <img src="./img/list/play-video.png" alt="" />
                                </button>
                            </div>
                            <img className="img-main" src={items.hinhAnh} alt="" />
                            <span className="type isShow">
                                <img src="./img/list/c-13.png" alt="" />
                            </span>
                            <span className="rate isShow">
                                <p className="point">{items.danhGia}</p>
                                <p className="star">
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.png" alt="" />
                                    <img src="./img/list/star1.2.png" alt="" />
                                </p>
                            </span>
                            <span className="screen-soon isShow">Suất chiếu sớm</span>
                            <div className="showBuy">
                                <button className="buy-btn">
                                    <img src="./img/list/icon-ticket.png" alt="" />
                                    <span>Mua Vé Ngay</span>
                                </button>
                            </div>
                        </div>
                        <div className="items-info isShow">
                            <p className="title">{items.tenPhim}</p>
                            <p className="time">117 phút</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    const renderShowing2 = () => {
        if(props.list.length){
            return props.list.map((items, index) => {
                return (
                    <Link key={index} to={`/list-movie/${items.maPhim}`}>
                        <div className="col-12 items">
                            <div className="items-img">
                                    <img src={items.hinhAnh} alt="" />    
                            </div>
                            <div className="items-info">
                                <p className="title">{items.tenPHim}</p>
                                <p style={{marginTop: 10}}>Khởi chiếu: <span>{new Date(items.ngayKhoiChieu).toLocaleDateString()}</span></p>
                                <p>Mô tả: <span>{items.moTa.slice(0, 100) + '...'}</span></p>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }   

    const renderSoon2 = () => {
        if(props.list.length){
            return props.list.map((items, index) => {
                return (
                    <Link key={index} to={`/list-movie/${items.maPhim}`}>
                        <div className="col-12 items">
                            <div className="items-img">
                                <img src={items.hinhAnh} alt="" />
                            </div>
                            <div className="items-info">
                                <p className="title">{items.tenPHim}</p>
                                <p style={{marginTop: 10}}>Khởi chiếu: <span>{new Date(items.ngayKhoiChieu).toLocaleDateString()}</span></p>
                                <p>Mô tả: <span>{items.moTa.slice(0, 100) + '...'}</span></p>
                            </div>
                        </div>
                    </Link>
                    
                )
            })
        }
    }

    return (
        <section className="list">
            <div className="wrapper-list">
                <div className="list-content">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 list-left">
                            <ul className="nav nav-pills mb-3 list-title" id="pills-tab" role="tablist">
                                <li className="nav-item now-showing" role="presentation" style={{ paddingRight: 30 }}>
                                    <a href="?#" className="nav-link active" id="pills-showing-tab" data-bs-toggle="pill" data-bs-target="#pills-showing" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Đang chiếu <sup>({props.list.length} phim)</sup> </a>
                                </li>
                                <li className="nav-item now-soon" role="presentation">
                                    <a href="?#" className="nav-link" id="pills-soon-tab" data-bs-toggle="pill" data-bs-target="#pills-soon" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sắp chiếu</a>
                                </li>   
                            </ul>
                        </div>
                        <div className="col-6 list-right">
                            {/* <form className="d-flex" style={{ float: 'right' }}>
                                <input className="form-control me-2 search-movie" placeholder="Tìm kiếm..." aria-label="Search" />
                                <button className="btn btn-outline-success search-button" type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </form> */}
                        </div>
                    </div>
                    <div className="tab-content container-fluid " id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-showing" role="tabpanel" aria-labelledby="pills-showing-tab">
                            <div className="list-showing">
                                <Slider
                                    dots={settings.dots}
                                    infinite={settings.infinite}
                                    slidesToShow={settings.slidesToShow}
                                    slidesToScroll={settings.slidesToScroll}
                                    centerMode={settings.centerMode}
                                    centerPadding={settings.centerPadding}
                                >
                                    {renderShowing()}
                                </Slider>
                            </div>
                            <div className="list-showing-2">
                                <div className="row">
                                    {renderShowing2()}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-soon" role="tabpanel" aria-labelledby="pills-soon-tab">
                            <div className="list-soon">
                                <Slider
                                    dots={settings.dots}
                                    infinite={settings.infinite}
                                    slidesToShow={settings.slidesToShow}
                                    slidesToScroll={settings.slidesToScroll}
                                    centerMode={settings.centerMode}
                                    centerPadding={settings.centerPadding}
                                >
                                    {renderSooning()}
                                </Slider>
                            </div>
                            <div className="list-soon-2">
                                <div className="row">
                                    {renderSoon2()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
