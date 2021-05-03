import React from 'react'
// import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../../../assets/scss/sass/Page/Home/_detail-events.scss'
import arrow from '../../../assets/img/detail/arrow-down.png';

export default function DetailReview(props) {

    const renderHTML = () => {
        if(Object.keys(props.review).length)
        return (
                <div className="detailEvents-group">
                    <h1 className="title" style={{color: '#eb1689'}}>{props.review.title}</h1>
                    <p style={{color: '#000', fontWeight:'600', margin:'20px 0px'}}>{props.review.first}</p>
                    <div className="pull">
                        <div className="wrap-img">
                            <img src={props.review.hinhAnh} alt="" />
                        </div>
                        <h3 style={{marginTop: '20px'}}>Đánh giá về nội dung phim</h3>
                        <div className="post-content" style={{marginTop: '0px'}}>
                            <p style={{fontWeight: '500'}}>{props.review.content}</p>
                        </div>
                    </div>
                </div>

        )
    }

    return (
        <section className="detailEvents">
            <div className="wrapper-detailEvents container">
                <div className="row">
                    <div className="col-12 col-xl-8">
                    {renderHTML()}
                    </div>
                    <div className="col-12 col-xl-4 sidebar">
                        <div className="row movieSoon" style={{display: 'flex', justifyContent:'center'}}>
                            <h3 className="title-soon">Phim đang chiếu</h3>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/1440wx600h-1-1617891050.jpg" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/2048wx858h-1-1617890027.jpg" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/2048wx858h.jpg" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/lotte-btdq-1920x1080-2-1617890403.jpg" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/bo-gia-16144973149878.png" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/kieu-c16-16170954820036.jpg" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/untitled.png" alt="" />
                            </Link>
                            <Link to="#" className="movie-items">
                                <img src="https://touchcinema.com/storage/slider-app/song-song-16170936284000.jpg" alt="" />
                            </Link>
                            <Link to="/list-movie" className="btn-more">
                                <h3>xem thêm</h3>
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
