import React from 'react'
import Slider from 'react-slick'
import './../../../assets/scss/sass/Layouts/_event-news.scss'
import { Link } from 'react-router-dom';

export default function Event(props) {

    const renderEvent = () => {
        if(props.event.length)
            return props.event.map((items, index) => {
                    return (
                        <Link style={{textDecoration: 'none'}} key={index} to={`/detail-event/${items.id}`} className={`items-${index % 2 ? 'left' : 'right'} ${index >= 1 && index <= 8 ? '' : ' d-none'}`}>
                            <div className="info" style={{marginRight: 190}}>
                                <Link style={{cursor:'pointer', textDecoration:'none'}} className="title">
                                    {items.title}
                                    </Link>
                                <p className="txt" style={{fontWeight: 600}}>
                                {items.content[0].substr(0,50) + '...'}
                                    </p>
                            </div>
                            <div className="img">
                                <img style={{height: '85%', width: 180}} src={items.hinhAnh} alt="" />
                            </div>
                        </Link>  
                    )        
            })
    }

    const settings = {
        dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
        arrow: false
    }

    return (
        <section className="event">
            <div className="wrapper-event-news">
                <div className="wrapper-event">
                    <div className="event-title">
                        <h2 className="title">
                            ƯU ĐÃI
        </h2>
                    </div>
                    <div className="event-content">
                        <div className="event-group">
                            <Slider
                                dots={settings.dots}
                                slidesToShow={settings.slidesToShow}
                                slidesToScroll={settings.slidesToScroll}
                                arrows={settings.arrow}
                            >
                                <div className="event-items">
                                    <Link to="/">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/big-star-_-trang-chủ-web.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="event-items">
                                    <Link to="/">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="event-items">
                                    <Link to="/">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="event-items">
                                    <Link to="/">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/c_ten.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </Slider>
                            
                        </div>
                    </div>
                </div>
                <div className="wrapper-news">
                    <div className="news-title">
                        <h3 className="title">tin tức</h3>
                    </div>
                    <div className="news-content">
                        {renderEvent()}
                    </div>
                </div>
            </div>
        </section>

    )
}
