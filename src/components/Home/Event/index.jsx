import React from 'react'
import Slider from 'react-slick'
import './../../../assets/scss/sass/Layouts/_event-news.scss'

// import slide1 from '../../../assets/img/event-news/hssv.jpg';
// import slide2 from '../../../assets/img/event-news/big-star-_-trang-chủ-web.jpg';
// import slide3 from '../../../assets/img/event-news/c_monday.jpg';
// import slide4 from '../../../assets/img/event-news/c_ten.jpg';
// import slide5 from "../../../assets/img/event-news/c'member.jpg";
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function Event(props) {

    const renderEvent = () => {
        // console.log(props.event);
        if(props.event.length)
            return props.event.map((items, index) => {
                if(index >= 1 && index <= 8){
                    // console.log(items.content[0].substr(0, 50));
                    return (
                        <div key={index} className={`items-${index % 2 ? 'left' : 'right'}`}>
                            <div className="info" style={{marginRight: 190}}>
                                <Link style={{cursor:'pointer', textDecoration:'none'}} to={`/detail-event/${items.id}`} className="title">
                                    {items.title}
                                    </Link>
                                <p className="txt" style={{fontWeight: 600}}>
                                   {items.content[0].substr(0,50) + '...'}
                                    </p>
                            </div>
                            <div className="img">
                                <img style={{height: '85%', width: 180}} src={items.hinhAnh} alt="" />
                            </div>
                        </div>
                    )
                }
                else return <Fragment key={index}></Fragment>
               
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
                                    <a href="?#">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/big-star-_-trang-chủ-web.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="event-items">
                                    <a href="?#">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="event-items">
                                    <a href="?#">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="event-items">
                                    <a href="?#">
                                        <div className="event-img">
                                            <img src="http://cinestar.com.vn/pictures/c_ten.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <div className="event-items">
                                    <a href="?#">
                                        <div className="event-img">
                                            <img src={slide5} alt="" />
                                        </div>
                                    </a>
                                </div> */}
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
                        {/* <div className="items-left read-more">
                            <div className="info">
                                <h4 className="title">[TOM &amp; JERRY: QUẬY TUNG NEW YORK] - Khi các nhân vật hoạt đóng chính trong những bộ phim live-action đình đám: Ai ấn tượng nhất?</h4>
                                <p className="txt">
                                    [TOM &amp; JERRY: QUẬY TUNG NEW YORK] - Khi các nhân vật hoạt đóng chính trong những bộ phim live-action đình đám: Ai ấn tượng nhất?
                                    </p>
                            </div>
                            <div className="img">
                                <img src="./img/event-news/publicpreview--1-.jpg" alt="" />
                            </div>
                        </div>
                        <div className="items-right read-more">
                            <div className="info">
                                <h4 className="title">[AINBO: NỮ CHIẾN BINH AMAZON] - Phim hoạt hình đầy màu sắc và giàu ý nghĩa mở đầu năm mới 2021</h4>
                                <p className="txt">
                                    [TOM &amp; JERRY: QUẬY TUNG NEW YORK] - Khi các nhân vật hoạt đóng chính trong những bộ phim live-action đình đám: Ai ấn tượng nhất?
                                     </p>
                            </div>
                            <div className="img">
                                <img src="./img/event-news/415x815.jpg" alt="" />
                            </div>
                        </div>
                        
                        <div className="items-content read-more">
                            <div className="items-center">
                                <div className="info">
                                    <h4 className="title">[AINBO: NỮ CHIẾN BINH AMAZON] - Phim hoạt hình đầy màu sắc và giàu ý nghĩa mở đầu năm mới 2021</h4>
                                    <p className="txt">
                                        [TOM &amp; JERRY: QUẬY TUNG NEW YORK] - Khi các nhân vật hoạt đóng chính trong những bộ phim live-action đình đám: Ai ấn tượng nhất?
                            </p>
                                </div>
                                <div className="img">
                                    <img src="./img/event-news/415x815.jpg" alt="" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <button className="btn-read-more" id="btn-read-more">Xem thêm</button> */}
                </div>
            </div>
        </section>

    )
}
