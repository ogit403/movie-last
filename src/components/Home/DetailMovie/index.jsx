import React from 'react'
import '../../../assets/scss/sass/Page/Home/_detail-cinema.scss'
import bg from '../../../assets/img/detail-cinema/background.png';
import image from '../../../assets/img/detail-cinema/bhd-star-bitexco-16105952220224.png';
import ticket from '../../../assets/img/list-movie/icon-ticket.png';
import star from '../../../assets/img/detail-cinema/star1.png';

export default function DetailMovie({list}) {
    // console.log(list);

    const renderRap = () => {
        if(list.length)
        return list[0].lstCumRap.map((items, index) => {
            return (
                <li className="nav-item cinemas" role="presentation">
                    <a href="?" className={`nav-link ${index === 0 ? ' active' : ''} items`} id={`pills-${list[0].maHeThongRap}-tab${index}`} data-bs-toggle="pill" data-bs-target={`#pills-${list[0].maHeThongRap}${index}`} type="button" role="tab" aria-controls={`pills-${list[0].maHeThongRap}${index}`} aria-selected="true">
                        <img src={image} alt="" />
                        <div className="info">
                            <p className="title">{items.tenCumRap}</p>
                            <p className="address">{items.diaChi}</p>
                        </div>
                    </a>
                </li>
            )
        })
    }

    const renderContent = () => {
        if(list.length)
        return list[0].lstCumRap.map((items, index) => {
            let arrNgay = [];
            // let movieNgay = [];
            // let moviePhim = [];
            let ngay = 1;
            let thu = 'Thứ ';
            let res;
            items.danhSachPhim.forEach((movie) => {
                movie.lstLichChieuTheoPhim.forEach((date) => {
                    let temp = new Date(date.ngayChieuGioChieu).toLocaleDateString();
                    let i = arrNgay.findIndex(item => item === temp);
                    if(i === -1) arrNgay.push(temp);
                })
            })
            arrNgay = arrNgay.slice(0, 10);

            return (
                <div className={`tab-pane fade show ${index === 0 ? ' active' : ''}`} id={`pills-${list[0].maHeThongRap}${index}`} role="tabpanel" aria-labelledby={`pills-${list[0].maHeThongRap}-tab${index}`}>
                    <div className="scrollbar dayOfWeek" id="style-2">
                        <div className="nav nav-pills mb-3 wrapDayOfWeek" id role="tablist" aria-orientation="vertical">
                            {arrNgay.map((date, indexDate) => {
                                ngay++;
                                if(ngay === 8) {
                                    ngay = 2;
                                    res = 'Chủ nhật'
                                }
                                else {
                                    res = thu + ngay;
                                }
                                let count = 0;
                                let co = -1;
                                for(let i = 0; i < date.length; i++){
                                    if(date[i] === '/'){
                                        count++;
                                        co = i;
                                        if(count === 2) break;
                                    }
                                }
                                    // console.log(date[i]);

                                return (
                                    <div className={`nav-link ${indexDate === 0 ? ' active' : ''} listDay`} id={`v-pills-${list[0].maHeThongRap}${index}-tab${indexDate}`} data-bs-toggle="pill" data-bs-target={`#v-pills-${list[0].maHeThongRap}${index}${indexDate}`} aria-controls={`v-pills-${list[0].maHeThongRap}${index}${indexDate}`} aria-selected="true">
                                        <p className="date">{res}</p>
                                        <p className="numer">{date.slice(0,co)}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="blockContent">
                        <div className="tab-content wrapContent" id="v-pills-tabContent">
                            {arrNgay.map((date, indexDate) => {
                                return (
                                    <div className={`tab-pane fade show ${indexDate === 0 ? ' active' : ''} contents`} id={`v-pills-${list[0].maHeThongRap}${index}${indexDate}`} role="tabpanel" aria-labelledby={`v-pills-${list[0].maHeThongRap}${index}-tab${indexDate}`}>
                                        <div className="scrollbar" id="style-2">
                                            {items.danhSachPhim.map((movie, indexMovie) => {
                                                return (
                                                    <div className="content-items">
                                                        <div className="items-movie">
                                                            <img src={movie.hinhAnh} alt="" />
                                                            <div className="movie-info">
                                                                <p className="title-1">
                                                                    <span className="type">
                                                                        <span className="left">C16</span>
                                                                        {movie.tenPhim}
                                                                    </span>
                                                                </p>
                                                                <p className="title-2">115 phút - TIX 7.1 - IMDb 0</p>
                                                            </div>
                                                        </div>
                                                        <div className="info-items">
                                                            <div className="type">
                                                                2D Digital
                                                                </div>
                                                            <div className="time">
                                                                {movie.lstLichChieuTheoPhim.map((list, indexList)=>{
                                                                    let tam = new Date(list.ngayChieuGioChieu).toLocaleDateString();
                                                                    let tam2 = date;
                                                                    
                                                                    if(tam === tam2){
                                                                        let time = new Date(list.ngayChieuGioChieu).toLocaleTimeString().slice(0, 4);
                                                                        return (
                                                                            <a href="?#" className="watch">
                                                                                <span className="watch-1">{time} </span>
                                                                              
                                                                            </a>
                                                                        )
                                                                    }
                                                                    else return <></>
                                                                })}
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <section className="detailCinema">
            <div className="wrap-image">
                <img style={{width: '100%'}} src={bg} className="bg-cinema" alt="" />
                <div className="blockWhite" />
            </div>
            <div className="wrapper-detail container">
                <div className="detail">
                    <div className="detail-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="detail-info">
                        <a href="?" className="info-title">
                            <h1>{list.length ? list[0].tenHeThongRap : ''}</h1>
                        </a>
                        <span className="info">
                            <span className="title">Điện thoại:</span>
                            028 62 670 670
                        </span>
                        <span className="info">
                            <span className="title">Email:</span>
                            info@bhdstar.com
                        </span>
                        <span className="info">
                            <span className="title">Phòng chiếu:</span>
                            7 2D. 4 3D
                        </span>
                        <span className="info">
                            <span className="title">Giờ mở cửa:</span>
                            8:00 - 24:00
                        </span>
                        <span className="info actor">
                            <span className="title">Giới thiệu:</span>
                            BHD Star Cineplex ICON 68 là một trong những cụm rạp được đầu tư quy mô nhất hiện nay tại Việt Nam, với tổng diện tích hơn 2.000 m2, bao gồm 7 phòng chiếu được trang bị theo tiêu chuẩn quốc tế. Âm thanh đạt chuẩn Dolby 7.1 với hệ thống cách âm hiện đại, trong đó có 4 phòng 3D,  cùng hơn 1.000 ghế ngồi được thiết kế theo kiểu dáng đẹp mắt và tiện dụng để mang lại sự thoải mái nhất cho khán giả.
                        </span>
                        <a href="?#" className="button-info">
                            <img src={ticket} alt="" />
                            mua vé
                        </a>
                        <div className="wrap-rate">
                            <div className="circleStar">
                                <div className="circlePercent">
                                    <div className="circleBorder" />
                                    <span className="score">8</span>
                                    <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className="starMain">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <div className="count">
                                <span>198 người đánh giá</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="showtime">
                    <div className="wrapper-showtime">
                        <ul className="nav nav-pills mb-3 showtime-title" id="showtime-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a href="?" className="nav-link active" id="showtime-home-tab" data-bs-toggle="pill" data-bs-target="#showtime-home" type="button" role="tab" aria-controls="showtime-home" aria-selected="true">
                                    Lịch Chiếu
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="?" className="nav-link" id="showtime-profile-tab" data-bs-toggle="pill" data-bs-target="#showtime-profile" type="button" role="tab" aria-controls="showtime-profile" aria-selected="false">
                                    Đánh Giá
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content showtime-content" id="showtime-tabContent">
                            <div className="tab-pane fade show active showtime-full"  id="showtime-home" role="tabpanel" aria-labelledby="showtime-home-tab">
                                <ul className="nav flex-column nav-pills listCinemas" style={{display:'inline', maxHeight: '710px', overflowY: 'scroll', overflowX: 'hidden', width: '35%'}} id="style-2" role="tablist">
                                    {renderRap()}
                                </ul>
                                <div className="tab-content listDayOfWeek" id="pills-tabContent">
                                    {renderContent()}
                                </div>
                            </div>
                            {/* showing */}
                            <div className="tab-pane fade showContent" id="showtime-profile" role="tabpanel" aria-labelledby="showtime-profile-tab">
                                <div className="wrapper-showing">
                                    <div className="row detailMain">
                                        <div className="col-12 main">
                                            <a href="?" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <span className="icon">
                                                    <img src="./img/detail/icon.jpg" alt="" />
                                                </span>
                                                <input className="inputMain" type="text" placeholder="Bạn nghĩ gì về phim này?" />
                                                <span className="star">
                                                    <img src="./img/detail/listStar.png" alt="" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="listComment">
                                        <div className="list-items">
                                            <div className="wrapper">
                                                <div className="row info">
                                                    <div className="col-6 reviewer">
                                                        <div className="image">
                                                            <img src="./img/detail/icon.jpg" className="main" alt="" />
                                                            <img src="./img/detail/facebook.svg" className="fb" alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <p className="name">
                                                                Nguyễn Quân
                          </p>
                                                            <p className="time">
                                                                24 phút trước
                          </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 star">
                                                        <div className="core">
                                                            <p>5</p>
                                                        </div>
                                                        <div className="star">
                                                            <img src="./img/detail/star1.png" alt="" />
                                                            <img src="./img/detail/star1.png" alt="" />
                                                            <img src="./img/detail/star1.2.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    <p>ABCD</p>
                                                </div>
                                                <div className="count-like">
                                                    <div className="countMain">
                                                        <img src="./img/detail/like.png" alt="" />
                                                        <span className="count">1</span>
                                                        <span className="like">Thích</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
