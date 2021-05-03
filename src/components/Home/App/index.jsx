import React from 'react'
import Slider from 'react-slick'
import './../../../assets/scss/sass/Layouts/_app.scss'
import mobile from '../../../assets/img/app/mobile.png'
import slide1 from '../../../assets/img/app/slide1.jpg'
import slide2 from '../../../assets/img/app/slide2.jpg'
import slide3 from '../../../assets/img/app/slide3.jpg'
import slide4 from '../../../assets/img/app/slide4.jpg'
import slide5 from '../../../assets/img/app/slide5.jpg'
import slide6 from '../../../assets/img/app/slide6.jpg'
import slide7 from '../../../assets/img/app/slide7.jpg'
import slide8 from '../../../assets/img/app/slide8.jpg'


export default function AppMobile() {
    const settings = {
        dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
        arrow: false
    }
    return (
        <section className="app">
            <div className="wrapper-app">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 left">
                        <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                        <p className="textLeft">người yêu điện ảnh</p>
                        <br />
                        <p className="textSmall">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <br />
                        <button className="btnLeft">App miễn phí - Tải về ngay!</button>
                        <p className="textBottom">
                            TIX có hai phiên bản
                            &nbsp;
                            <a href="?#">IOS</a>
                            &nbsp;
                            &amp;
                            &nbsp;
                            <a href="?#">Android</a>
                        </p>
                    </div>
                    <div className="col-6 right">
                        <img className="img-main" src={mobile} alt="" />
                        <div className="sliderScreen">
                            <div className="right-group">
                                <Slider dots={settings.dots} arrows={settings.arrow} slidesToScroll={settings.slidesToScroll} slidesToShow={settings.slidesToShow}>
                                    <div className="right-items">
                                        <img className="right-img" src={slide1} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide2} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide3} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide4} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide5} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide6} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide7} alt="" />
                                    </div>
                                    <div className="right-items">
                                        <img className="right-img" src={slide8} alt="" />
                                    </div>
                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
