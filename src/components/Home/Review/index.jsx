import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../../assets/scss/sass/Page/Home/_review.scss';
import arrow from '../../../assets/img/detail/arrow-down.png';

export default function Review(props) {
    const {page} = useParams();
    const renderReview = () => {
        let number = parseInt(page);
        return props.list.map((items, index) => {
            if(number === 1 && index >= 0 && index <= 7) {
                return (
                    <div key={index} className="items-reviews">
                            <img src={items.hinhAnh} alt="" />
                        {/* <div className="items-img">
                        </div> */}
                        <div className="info">
                            <Link to={`/detail-review/${items.id}`}>
                                <h3>{items.title}</h3>
                            </Link>
                            <div className="detail">
                                <p>  
                                    {items.content.slice(0, 100) + '...'}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            else if(number === 2 && index >= 8 && index <= 14) {
                return (
                    <div key={index} className="items-reviews">
                        <div className="items-img">
                            <img src={items.hinhAnh} alt="" />
                        </div>
                        <div className="info">
                            <a href="?#">
                                <h3>{items.title}</h3>
                            </a>
                            <div className="detail">
                                <p>  
                                    {items.content.slice(0, 100) + '...'}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            else return <></>
        })
    }

    return (
        <section className="reviews">
            <div className="wrapper-reviews container">
                <div className="row">
                    <div className="col-12 col-xl-8 reviews-group">
                        <div className="title">
                            <h2>ưu đãi - sự kiện</h2>
                        </div>
                        {renderReview()}
                        <div className="list-pagination">
                            <ul className="pagination ds-events">
                                <li className={`page-item pre ${page === '1' ? ' disabled' : ''}`}><Link className="page-link" to={`/review/${parseInt(page) - 1}`}>«</Link></li>
                                <li className={`page-item ${page === '1' ? ' active' : ''}`}><Link className="page-link" to="/review/1">1</Link></li>
                                <li className={`page-item ${page === '2' ? ' active' : ''}`}><Link className="page-link" to="/review/2">2</Link></li>
                                <li className={`page-item next ${page === '2' ? ' disabled' : ''}`}><Link className="page-link" to={`/review/${parseInt(page) + 1}`}>»</Link></li>
                            </ul>
                        </div>
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
