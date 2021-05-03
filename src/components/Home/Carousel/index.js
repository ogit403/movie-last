import React from "react";
import '../../../assets/scss/sass/Layouts/_carousel.scss';
import Slider from 'react-slick';
// import slide1 from '../../../assets/img/carousel/1920x1080-4.png';
// import slide2 from '../../../assets/img/carousel/1920wx1080h.jpg';
// import slide3 from '../../../assets/img/carousel/1920x1080-3.png';
// import slide4 from '../../../assets/img/carousel/1920x1080-36.jpg';

export default function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
  return (
    <section className="carousel" style={{ overflow: "hidden" }}>
      <div className="carousel-group">
		<Slider dots={settings.dots} slidesToShow={settings.slidesToShow} slidesToScroll={settings.slidesToScroll}>
			<div className="items">
				<img src="https://touchcinema.com/storage/slider-app/copy-of-1920x1080-3.jpg" alt="" />
			</div>
			<div className="items">
				<img src="https://touchcinema.com/storage/slide-web/1920wx1080h-1-1-1618121537.jpg" alt="" />
			</div>
			<div className="items">
				<img src="https://touchcinema.com/storage/slide-web/1920wx1080h-6.jpg" alt="" />
			</div>
			<div className="items">
				<img src="https://touchcinema.com/storage/slide-web/1920wx1080h-5.jpg" alt="" />
			</div>
		</Slider>
      </div>
    </section>
  );
}
