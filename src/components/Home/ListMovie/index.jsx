import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../assets/scss/sass/Page/Home/_list-movie.scss'

export default function ListMovie(props) {
 

     const renderShowing = () => {
        if(props.listMovie.length)
        return props.listMovie.map((items, index) => {
            return (
                <div key={index} className="movie-items col-lg-4 col-xl-3">
                    <div className="items-img">
                        <img src={items.hinhAnh} alt="" />
                        <div className="items-hidden">
                            <Link to={`/list-movie/${items.maPhim}`} className="detail">&gt; chi tiết</Link>
                            
                            <Link to={`/list-movie/${items.maPhim}`} className="buy">
                                mua vé
                                <img src="./img/list-movie/icon-ticket.png" alt="" />
                            </Link>
                            <span className="info">
                                <p><span>Thời Lượng: </span>128 Phút</p>
                                <p><span>Thể loại: </span>Hài Hước</p>
                                <p><span>Định Dạng </span>2D</p>
                            </span>
                        </div>
                    </div>
                    <div className="items-info">
                        <h2>{items.tenPhim}</h2>
                        <span>Khởi chiếu 12/02/2021</span>
                    </div>
                </div>
            )
        })
    }

    const renderSooning = () => {
        if(props.listMovie.length)
        return props.listMovie.map((items, index) => {
            return (
                <div key={index} className="movie-items col-lg-4 col-xl-3">
                    <div className="items-img">
                        <img src={items.hinhAnh} alt="" />
                        <div className="items-hidden">
                            <Link to={`/list-movie/${items.maPhim}`} className="detail">&gt; chi tiết</Link>
                            
                            <Link to={`/list-movie/${items.maPhim}`} className="buy">
                                mua vé
                                <img src="./img/list-movie/icon-ticket.png" alt="" />
                            </Link>
                            <span className="info">
                                <p><span>Thời Lượng: </span>128 Phút</p>
                                <p><span>Thể loại: </span>Hài Hước</p>
                                <p><span>Định Dạng </span>2D</p>
                            </span>
                        </div>
                    </div>
                    <div className="items-info">
                        <h2>{items.tenPhim}</h2>
                        <span>Khởi chiếu 12/02/2021</span>
                    </div>
                </div>
            )
        })
    }

    const renderShowing2 = () => {
        if(props.listMovie.length){
            return props.listMovie.map((items, index) => {
                return (
                    <div key={index} className="col-12 items">
                        <div className="items-img">
                            <Link to={`/list-movie/${items.maPhim}`}>
                                <img src={items.hinhAnh} alt="" />
                            </Link>
                        </div>
                        <div className="items-info">
                            <p className="title">{items.tenPhim}</p>
                            <p style={{marginTop: 10}}>Khởi chiếu: <span>{new Date(items.ngayKhoiChieu).toLocaleDateString()}</span></p>
                            <p>Mô tả: <span>{items.moTa.slice(0, 60) + '...'}</span></p>
                        </div>
                    </div>
                )
            })
        }
    }   

    const renderSoon2 = () => {
        if(props.listMovie.length){
            // console.log(props.listMovie)
            return props.listMovie.map((items, index) => {
                return (
                    <div key={index} className="col-12 items">
                        <div className="items-img">
                            <Link to={`/list-movie/${items.maPhim}`}>
                                <img src={items.hinhAnh} alt="" />
                            </Link>
                        </div>
                        <div className="items-info">
                            <p className="title">{items.tenPhim}</p>
                            <p style={{marginTop: 10}}>Khởi chiếu: <span>{new Date(items.ngayKhoiChieu).toLocaleDateString()}</span></p>
                            <p>Mô tả: <span>{items.moTa.slice(0, 100) + '...'}</span></p>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <section className="list-movie">
            <div className="wrapper-list-movie container">
                <div className="title">
                    <h3>
                        Danh sách phim
                    </h3>
                </div>
                <div className="content-listMovie">
                    <ul className="nav nav-pills mb-3 list-title" id="pills-tab" role="tablist">
                        <li className="nav-item left" role="presentation">
                            <a href="?#" className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                <img src="./img/list-movie/icon-ticket.png" alt="" />
                                <span>phim đang chiếu</span>
                                <span className="border-movie" />
                            </a>
                        </li>
                        <li className="nav-item right" role="presentation">
                            <a href="?#" className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                <span>phim sắp chiếu</span>
                                <img src="./img/list-movie/icon-sap-chieu.png" alt="" />
                                <span className="border-movie" />
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content list-content" id="pills-tabContent">
                        <div className="tab-pane fade show active movieShowing" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row movies">
                                {renderShowing()}
                            </div>
                            <div className="movies-showing-2">
                                <div className="row">
                                    {renderShowing2()}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade movieSoon" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row movies">
                                {renderSooning()}
                                {/* <button className="btnRead-more" id="btn-read-more-2">Xem thêm</button> */}
                            </div>
                            <div className="movies-soon-2">
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
