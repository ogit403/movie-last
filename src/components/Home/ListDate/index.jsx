import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Home/_listdate.scss';

export default function ListDate({list, arr, history}) {
    // console.log(list);

    const renderHeThongRap = () => {
        if(list.length)
            return list.map((items, index) => {
                return (
                    <a href="?" className={`nav-link ${index === 0 ? ' active' : ''} cinema-items`} role="tab" id={`cinema-${items.maHeThongRap}`} data-bs-toggle="pill" data-bs-target={`#v-${items.maHeThongRap}`} aria-controls={`v-${items.maHeThongRap}`} aria-selected="true">
                        <img src={items.logo} alt="" />
                        <span className="name">{items.tenHeThongRap}</span>
                    </a>
                )
            })
    }

    const handleBuy = (id) => {
        if (localStorage.getItem("KhachHang")) {
            history.push(`/buy/${id}`);
        }
        else {
            history.push('/login');
        }
    }
    
    const renderContent = () => {
        if(arr.length)
        return arr.map((items, index) => {
            return (
                <>
                    <div className={`tab-pane fade show ${index === 0 ? ' active' : ''} items-movie`} id={`v-${items.maHeThongRap}`} role="tabpanel" aria-labelledby={`cinema-${items.maHeThongRap}`}>
                        <div className="title-group">
                            <p>rạp chiếu phim</p>
                        </div>
                        <div className="scroll-items" id="style-2">
                            <div className="nav nav-pills mb-3 items-group" id="bhd-title" role="tablist" aria-orientation="vertical">
                                {items.lstCumRap.map((theater, indexTheater) => {
                                    let temp = theater.tenCumRap.search(' - ');
                                    return (
                                        <div className={`nav-link ${indexTheater === 0 ? ' active' : ''} items`} id={`${items.maHeThongRap}-${indexTheater}`} data-bs-toggle="pill" data-bs-target={`#${items.maHeThongRap}-content-${indexTheater}`} aria-controls={`${items.maHeThongRap}-content-${indexTheater}`} aria-selected="true">
                                            <img src="./img/list-date/bhd-star-bitexco-16105952137769.png" alt="" />
                                            <span className="name">
                                                {theater.tenCumRap.substr(0, temp)}
                                                    <p className="main">{theater.tenCumRap.substr(temp)}</p>
                                            </span>
                                            <span className="address">
                                                {theater.diaChi}
                                                            </span>
                                            <a href="?" className="detail">
                                                [chi tiết]
                                                    </a>
                                        </div>
                                    )
                                })}                  
                            </div>
                        </div>
                        
                        <div className="list-content">
                            <div className="tab-content movie-content" id="bhd-content">
                                {items.lstCumRap.map((theater, indexTheater) => {
                                    return (
                                        <div className={`tab-pane fade show ${indexTheater === 0 ? ' active' : ''} movie-group`} id={`${items.maHeThongRap}-content-${indexTheater}`} role="tabpanel" aria-labelledby={`${items.maHeThongRap}-${indexTheater}`}>
                                            {theater.danhSachPhim.map((movie, indexMovie) => {
                                                return (
                                                    <div className="row movie-content">
                                                        <div className="col-12 col-lg-3 col-xl-3 movie-image">
                                                            <div className="poster">
                                                                <Link to={`/list-movie/${movie.maPhim}`}>
                                                                    <img src={movie.hinhAnh} alt="" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-9 col-xl-9 movie-info">
                                                            <div className="age">
                                                                <span>C13</span>
                                                            </div>
                                                            <div className="type">12-3</div>
                                                            <div className="name-movie">
                                                                <h2>{movie.tenPhim}</h2>
                                                            </div>

                                                            <div className="star">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </div>
                                                            <div className="row movie-center">
                                                                <div className="col-4 first">
                                                                    <i className="fa fa-clock" />
                                                                    <span className="main">
                                                                        Thời lượng:
                                                                        <span> 128 phút</span>
                                                                    </span>
                                                                </div>
                                                                <div className="col-4 second">
                                                                    <i className="fa fa-align-left" />
                                                                    <span className="main">
                                                                        Thể loại:
                                                                        <span> Hài Hước</span>
                                                                    </span>
                                                                </div>
                                                                <div className="col-4 third">
                                                                    <i className="fa fa-user" />
                                                                    <span className="main">
                                                                        Đạo diễn:
                                                                        <span> Vũ Ngọc Đãng &amp; Trấn Thành</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="time">
                                                                {movie.lstLichChieuTheoPhim.map((date, indexDate) => {
                                                                    return (
                                                                        <a onClick={() => handleBuy(date.maLichChieu)} href="?#" className="watch">
                                                                            <span className="watch-1">{new Date(date.ngayChieuGioChieu).toLocaleTimeString().slice(0,5)} </span>
                                                                         
                                                                        </a>
                                                                    )
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
                </>
            )
        })
    }

    return (
        <section className="list-date">
            <div className="wrapper-list container">
                <div className="title">
                    <p>cụm rạp chiếu phim</p>
                </div>
                <div className="list-cinemas" id="style-2">
                    
                    <div className="cinemas">
                        <div className="nav nav-pills me-3 group-cinemas" id="v-list-cinemas" role="tablist" aria-orientation="vertical">
                            {renderHeThongRap()} 
                        </div>
                    </div>
                </div>
                <div className="list-movies">
                    <div className="title">
                        <p>lịch chiếu phim</p>
                    </div>
                    <div className="tab-content group-movie" id="bhd-list">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>

    )
}
