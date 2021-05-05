import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Home/_events.scss'
import arrow from '../../../assets/img/detail/arrow-down.png';
export default function EventMovie(props) {

    const params = useParams();
    const renderEvent = () => {
        if(props.listEvent.length)
        return props.listEvent.map((items, index) => {
            let number = parseInt(params.page);
            if(index >= number * number  && index <= number * number + 4){
                return (
                    <div key={index} className="items-event">
                            <img src={items.hinhAnh} alt="" />
                        <div className="info">
                            <Link to={`/detail-event/${items.id}`}>
                                <h3>{items.title}</h3>
                            </Link>
                            <div className="detail">
                                <p>{items.content[0].slice(0, 150) + '...'}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            else return <div key={index}></div>
        })
    }

    return (
        <section className="events">
            <div className="wrapper-events container">
                <div className="row">
                    <div className="col-12 col-xl-8 events-group">
                        <div className="title">
                            <h2>ưu đãi - sự kiện</h2>
                        </div>
                        {renderEvent()}
                        <div className="list-pagination">
                            <ul className="pagination ds-events">
                                <li className={`page-item pre ${params.page === '1' ? ' disabled' : ''}`}><Link className="page-link" to={`/event/${parseInt(params.page) - 1}`}>«</Link></li>
                                <li className={`page-item ${params.page === '1' ? ' active' : ''}`}><Link className="page-link" to="/event/1">1</Link></li>
                                <li className={`page-item ${params.page === '2' ? ' active' : ''}`}><Link className="page-link" to="/event/2">2</Link></li>
                                <li className={`page-item ${params.page === '3' ? ' active' : ''}`}><Link className="page-link" to="/event/3">3</Link></li>
                                <li className={`page-item next ${params.page === '3' ? ' disabled' : ''}`}><Link className="page-link" to={`/event/${parseInt(params.page) + 1}`}>»</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 sidebar">
                        <div className="row movieSoon">
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
