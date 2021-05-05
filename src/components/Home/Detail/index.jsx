import React, { Fragment, useEffect, useState } from 'react'
import '../../../assets/scss/sass/Page/Home/_detail.scss'
import ticket from '../../../assets/img/list-movie/icon-ticket.png';
import rap from '../../../assets/img/theater/bhd-star-vincom-thao-dien-16105955634183.png';
import arrow from '../../../assets/img/detail/arrow-down.png';
import { Link } from 'react-router-dom';
import icon from '../../../assets/img/detail/icon.jpg'
import listStar from '../../../assets/img/detail/listStar.png'
// import xControl from '../../../assets/img/detail/xController.png'
import starSelect from '../../../assets/img/detail/StarSelect.png'
import fb from '../../../assets/img/detail/facebook.svg'
import star1 from '../../../assets/img/detail/star1.png';
// import star2 from '../../../assets/img/detail/star1.2.png';
// import like from '../../../assets/img/detail/like.png';
import { useDispatch, useSelector } from 'react-redux';
// import Alert from 'react-bootstrap/Alert'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

export default function Detail(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'GET_API_COMMENT' })
    }, [dispatch])

    const comments = useSelector(state => state.CommentReducer.comments);

    const renderHeThongRap = () => {
        if (Object.keys(props.items).length)
            return props.items.heThongRapChieu.map((items, index) => {
                return (
                    <li key={index} className={`nav-item cinemas`} role="presentation" style={{ cursor: 'pointer' }}>
                        <a href="?" role="tab" className={`nav-link items ${index === 0 ? ' active' : ''}`} id={`pills-${items.maHeThongRap}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${items.maHeThongRap}`} aria-controls={`pills-${items.maHeThongRap}`} aria-selected="false">
                            <img src={items.logo} alt="" />
                            <span>{items.tenHeThongRap}</span>
                        </a>
                    </li>
                )
            })
    }

    const handleBuy = (id) => {
        if (localStorage.getItem("KhachHang")) {
            //accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
            props.history.push(`/buy/${id}`);
        }
        else {
           props.history.push('/login')
        }
    }

    const renderContent = () => {
        //console.log(props.items);
        if (Object.keys(props.items).length)
            return props.items.heThongRapChieu.map((items, index) => {
                let arrRap = [];
                let arrTheoNgay = [];
                return (
                    <div key={index} className={`tab-pane fade show${index === 0 ? ' active' : ''}`} id={`pills-${items.maHeThongRap}`} role="tabpanel" aria-labelledby={`pills-${items.maHeThongRap}-tab`}>
                        <div className="scrollbar dayOfWeek" id="style-2">
                            <div className="nav nav-pills mb-3 wrapDayOfWeek" id role="tablist" aria-orientation="vertical">
                                {items.cumRapChieu.map((rap, indexRap) => {

                                    for (let temp = 1; temp < rap.lichChieuPhim.length; temp++) {
                                        let dateA = new Date(rap.lichChieuPhim[temp].ngayChieuGioChieu).toLocaleDateString();
                                        let dateB = new Date(rap.lichChieuPhim[temp - 1].ngayChieuGioChieu).toLocaleDateString();
                                        if (dateA !== dateB) {
                                            arrRap.push(rap.lichChieuPhim[temp - 1])
                                        }
                                    }

                                    let index = 1;
                                    let tam = 'Thứ ';
                                    let result;
                                    return arrRap.map((res, indexRes) => {
                                        if (index === 'Chủ nhật') index = 2;
                                        else if (index === 7) index = 'Chủ nhật'
                                        else index++;

                                        if (index === 'Chủ nhật') result = index;
                                        else result = tam + index;

                                        return (
                                            <div key={indexRes} className={`nav-link ${indexRes === 0 ? ' active' : ''} listDay`} id={`${items.maHeThongRap}-date${indexRes}`} data-bs-toggle="pill" data-bs-target={`#content-${items.maHeThongRap}-date${indexRes}`} aria-controls={`content-${items.maHeThongRap}-date${indexRes}`} aria-selected="false">
                                                <p className="date">{result}</p>
                                                <p className="numer">{new Date(res.ngayChieuGioChieu).toLocaleDateString().substr(2, 1)}</p>
                                            </div>
                                        )
                                    })
                                })}
                            </div>
                        </div>
                        <div className="blockContent">
                            <div className="tab-content wrapContent" id="v-pills-tabContent">
                                {arrRap.map((rapchieu, indexRapchieu) => {
                                    return (
                                        <div key={indexRapchieu} className={`tab-pane fade show ${indexRapchieu === 0 ? ' active' : ''} contents`} id={`content-${items.maHeThongRap}-date${indexRapchieu}`} role="tabpanel" aria-labelledby={`${items.maHeThongRap}-date${indexRapchieu}`}>
                                            <div className="scrollbar" id="style-1">
                                                {items.cumRapChieu.map((theater, indexTheater) => {
                                                    arrTheoNgay = [];
                                                    for (let temp = 0; temp < theater.lichChieuPhim.length; temp++) {
                                                        let dateA = new Date(theater.lichChieuPhim[temp].ngayChieuGioChieu).toLocaleDateString();
                                                        let dateB = new Date(rapchieu.ngayChieuGioChieu).toLocaleDateString();
                                                        if (dateA === dateB)
                                                            arrTheoNgay.push(theater.lichChieuPhim[temp]);
                                                    }

                                                    let i = theater.tenCumRap.search(' - ');
                                                    return (
                                                        <div key={indexTheater} className="content-items">
                                                            <div className="items-movie">
                                                                <img src={rap} alt="" />
                                                                <div className="movie-info">
                                                                    <p className="title-1">
                                                                        <span className="type">{theater.tenCumRap.substr(0, i)}</span>
                                                                        <span className="info">{theater.tenCumRap.substr(i)}</span>
                                                                    </p>
                                                                    <p className="title-2">L5-Vincom 3/2, 3C Đường 3/2, Q.10</p>
                                                                </div>
                                                            </div>
                                                            <div className="info-items">
                                                                <div className="type">
                                                                    2D Digital
                                                        </div>
                                                                <div className="time">
                                                                    {arrTheoNgay.map((timeMovie, indexTime) => {
                                                                        let time = new Date(timeMovie.ngayChieuGioChieu).toLocaleTimeString();
                                                                        if(time[2] === ':') time = time.substr(0, 5);
                                                                        else time = time.substr(0, 4);
                                                                        return (
                                                                            //to={`/buy/${timeMovie.maLichChieu}`}
                                                                            <Link key={indexTime} onClick={() => handleBuy(timeMovie.maLichChieu)} className="watch">
                                                                                <span className="watch-1">{time} </span>
                                                                            </Link>
                                                                        )
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

    const renderReview = () => {
        if (props.review.length)
            return props.review.map((itemReview, indexReview) => {
                return (
                    <div key={indexReview} className="col-4 items-post">
                        <img src={itemReview.hinhAnh} alt="" />
                        <h3>
                            <Link to={`/detail-review/${itemReview.id}`}>
                                {itemReview.title}
                            </Link>
                        </h3>
                    </div>
                )
            })
    }

    const renderComment = () => {
        if (Object.keys(comments).length) {
            let i = comments.findIndex(item => item.maPhim === props.items.maPhim);
            if (i !== -1) {
                return comments[i].comment.map((items, index) => {
                    let arrStar = [];
                    for (let i = 1; i <= items.star; i++) {
                        arrStar.push(1);
                    }
                    return (
                        <div key={index} className="wrapper" style={{ paddingBottom: 0 }}>
                            <div className="row info">
                                <div className="col-6 reviewer">
                                    <div className="image">
                                        <img src={icon} className="main" alt="" />
                                        <img src={fb} className="fb" alt="" />
                                    </div>
                                    <div className="info" style={{ marginTop: 5 }}>
                                        <p className="name">
                                            {items.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 star">
                                    <div style={{ paddingTop: 10 }} className="star">
                                        {arrStar.map((a, b) => {
                                            return (
                                                <Fragment key={b}>
                                                    <img src={star1} alt="" />
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <p style={{ fontWeight: 600, color: '#000 !important' }}>{items.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        }

    }

    const [star, setStar] = useState({
        list: [true, false, false, false, false]
    })

    const HandleStar = (id) => {
        let newList = [true, false, false, false, false];
        for (let index = id.i; index >= 1; index--) {
            newList[index - 1] = true;
        }
        setStar({ list: newList });
    }

    const [content, setContent] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent({ [name]: value })
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        if (localStorage.getItem("KhachHang")) {
            //accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
            
        let i = comments.findIndex(item => item.maPhim === props.items.maPhim);

        if (i !== -1) {
            let count = 0;
            star.list.forEach((items) => {
                if (items) count++;
            })

            let tam = {
                name: 'Nguyen Van A',
                star: count,
                content: content.content
            }

            comments[i].comment.push(tam);

            dispatch({
                type: 'PUT_API_COMMENT',
                items: {
                    id: comments[i].id,
                    value: comments[i]
                }
            })

        }
        else {
            let count = 0;
            star.list.forEach((items) => {
                if (items) count++;
            })
            let temp = content.content;
            let comment = [{
                name: 'Nguyen Van A',
                star: count,
                content: temp
            }]

            let arr = {
                id: props.items.maPhim,
                maPhim: props.items.maPhim,
                comment
            }
            dispatch({
                type: 'POST_API_COMMENT',
                data: arr
            })
        }
        setContent({ content: '' })
        }
        else {
            alert('Vui lòng đăng nhập !!!');
        }
        
    }

    const handleClose = () => {

    }

    const [isOpen, setOpen] = useState(false);
    let idYoutube;
    if(Object.keys(props.items).length){
        idYoutube = props.items.trailer.substr(32);
    }
    // console.log(props.items.trailer.substr(32));
    // console(idYoutube);
    return (
        <section className="detailPhim ">
            <div className="wrapper-detail container">
                <div className="trailer">
                    <div className="overplay" />
                    <div className="trailer-button">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={idYoutube} onClose={() => setOpen(false)} />
                        <button onClick={()=> setOpen(true)}>
                            <span />
                        </button>
                    </div>
                </div>
                <div className="detail">
                    <div className="detail-img">
                        <img src={props.items.hinhAnh} alt="" />
                    </div>
                    <div className="detail-info">
                        <Link to={`/list-movie/${props.items.maPhim}`} className="info-title">
                            <h1>{props.items.tenPhim}</h1>
                        </Link>

                        <div className="info-content">
                            <div className="info-items">
                                Thể loại
                                <p>Hành động</p>
                            </div>
                            <div className="info-items">
                                Thời lượng: 
                                <p>110 phút</p>
                            </div>
                            <div className="info-items">
                                Khởi chiếu:
                                <p>16/04/2021</p>
                            </div>
                            <div className="info-items">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={idYoutube} onClose={() => setOpen(false)} />
                                <button onClick={()=> setOpen(true)} className="btn btn-warning">TRAILER</button>
                            </div>
                        </div>

                        <div className="info-content-1">
                            <span className="info">
                                <span className="title">Thời lượng:</span>115 phút</span>
                            <span className="info">
                                <span className="title">Khởi chiếu từ:</span>Ngày 12/03/2021</span>
                            <span className="info">
                                <span className="title">Thể loại:</span>Tâm lý</span>
                            <span className="info">
                                <span className="title">Định dang:</span>2D</span>
                            <span className="info">
                                <span className="title">Đạo diễn:</span> Bảo Nhân – Namcito</span>
                            <span className="info actor">
                                <span className="title">Diễn viên:</span>NSND Lê Khanh, Kaity Nguyễn, NSND Hồng Vân, NSND Hoàng Dũng, Khương Lê, Lê Khánh, Anh Dũng…</span>
                            <span className="info">
                                <span className="title">Độ tuổi:</span>
                                <span className="type">C16 - </span>PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI 16 TUỔI</span>
                            <a href="#showtime-tabContent" className="button-info">
                                <img src={ticket} alt="" />đặt vé</a>
                            <div className="type-right">
                                <span>C16</span>
                            </div>
                        </div>

                       
                    </div>
                </div>
                <div className="content-detail">
                    <div className="show" />
                    <div className="text">
                        <p className="first">
                            {props.items.moTa}
                        </p>
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
                            {/*  */}
                            <div className="tab-pane fade show active showtime-full" id="showtime-home" role="tabpanel" aria-labelledby="showtime-home-tab">
                                <div className="wrapper-list" id="style-2">
                                    <ul className="nav flex-column nav-pills listCinemas" id="pills-tab" role="tablist">
                                        {renderHeThongRap()}
                                    </ul>
                                </div>
                                
                                <div className="tab-content listDayOfWeek" id="pills-tabContent">
                                    {renderContent()}
                                </div>
                            </div>
                            {/* showing */}
                            <div className="tab-pane fade showContent" id="showtime-profile" role="tabpanel" aria-labelledby="showtime-profile-tab">
                                {/* 
     */}
                                <div className="wrapper-showing">
                                    <div className="row detailMain">
                                        <div className="col-12 main">
                                            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <span className="icon">
                                                    <img src={icon} alt="" />
                                                </span>
                                                <p className="text-comment" style={{ marginBottom: 0, padding: 15, paddingLeft: 50, paddingTop: 20, fontSize: 14, fontWeight: 500 }}>Bạn nghĩ gì về phim này?</p>
                                                <span className="star">
                                                    <img src={listStar} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listComment">
                                        <div className="list-items">
                                            {renderComment()}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="wrapper">
                        <div className="row">
                            <div className="wrapper-post col-12 col-xl-8">
                                <h3 className="title">bài viết mới</h3>
                                <div className="row group-post">

                                    {renderReview()}
                                </div>
                            </div>


                            <div className="wrapper-movie col-12 col-xl-4">
                                <div className="row">
                                    <h3 className="title">Phim đang chiếu</h3>
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
                                        <img src="https://touchcinema.com/storage/slider-app/bo-gia-16144973149878.png" alt="" />
                                    </Link>
                                    <Link to="#" className="movie-items">
                                        <img src="https://touchcinema.com/storage/slider-app/kieu-c16-16170954820036.jpg" alt="" />
                                    </Link>
                                    <Link to="#" className="movie-items">
                                        <img src="https://touchcinema.com/storage/slider-app/untitled.png" alt="" />
                                    </Link>
                                    <Link to="/list-movie" className="btn-more">
                                        <h3>xem thêm</h3>
                                        <img src={arrow} alt="" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal fade modal-comment`} id="exampleModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button onClick={handleClose} style={{ border: 'none', backgroundColor: 'transparent' }}
                            className="iconClose" type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            refs="cancle"
                        >
                            
                        </button>
                        <div className="star" style={{ marginTop: 30 }}>
                            {star.list.map((items, index) => {
                                let i = index + 1;
                                if (items)
                                    return (
                                        <button key={index} style={{ opacity: 1 }} onClick={() => HandleStar({ i })}>
                                            <img src={starSelect} alt="" />
                                        </button>
                                    )
                                else {
                                    return (
                                        <button key={index} style={{ opacity: 0.6 }} onClick={() => HandleStar({ i })}>
                                            <img src={starSelect} alt="" />
                                        </button>
                                    )
                                }
                            })}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="comment">
                                <input name="content" onChange={handleChange} placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..." />
                            </div>
                            <div className="btn-push">
                                <button>Đăng</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </section>



    )
}
