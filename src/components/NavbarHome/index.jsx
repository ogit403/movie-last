import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../assets/scss/sass/Layouts/_header.scss'
// import icon from './../../assets/img/header/touchcinema.png';
import datve from './../../assets/img/header/dat-ve-ngay.png';
import vn from './../../assets/img/header/vn.png';
import soDa from './../../assets/img/header/so-da.png';
import bongNgo from './../../assets/img/header/bong-ngo.png';
import image from './../../assets/img/header/avatar.png'
import { useDispatch} from 'react-redux';


export default function NavbarHome() {

    // const user = useSelector(state => state.LoginReducer.users);
    const dispatch = useDispatch();

    const [resetUser, setResetUser] = useState(false);

    const handleUser = () => {
        localStorage.removeItem('KhachHang');
        dispatch({
            type: 'loginReducer/DANG_XUAT'
        })
        let newReset = !resetUser;
        setResetUser(newReset);
    }

    const renderUser = () => {
        // console.log(user);
        if(localStorage.getItem("KhachHang")){
            let user = JSON.parse(localStorage.getItem("KhachHang"));
            return (
                <div className="info">             
                    <ul className="group-user">
                        <li>
                            <img src={image} alt="" />
                        </li>
                        <li>
                        <span className="name">
                        <div className="title">
                            <p>{user.hoTen}</p>
                            <p>Member</p>
                        </div>
                    </span>
                        </li>
                        <li>
                        <span className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <li><Link className="dropdown-item" to={`/detail-user/${user.taiKhoan}`}>Thông tin cá nhân</Link></li>
                            <hr />
                            <li><button onClick={handleUser} className="dropdown-item">Đăng xuất</button></li>
                        </ul>
                    </span>
                        </li>
                    </ul>
                    
                    
                </div>
            )
        }
        else {
            return (
                <>
                    <Link to="/login" className="login">
                        <img src={soDa} alt="" />
                        <span>ĐĂNG NHẬP</span>
                    </Link>
                    
                    <Link to="/sign-up" className="regist">
                        <img src={bongNgo} alt="" />
                        <span>ĐĂNG KÍ 
                            <p>THÀNH VIÊN</p>
                        </span>
                    </Link>
                </>
            )
        }
    }

    const renderUser2 = () => {
        // console.log(user);
        if(localStorage.getItem("KhachHang")){
            // console.log('abc');
            const user = JSON.parse(localStorage.getItem("KhachHang"));
            return (
                <div className="info">             
                    <span className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={image} alt="" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <li><Link className="dropdown-item" to={`/detail-user/${user.taiKhoan}`}>Thông tin cá nhân</Link></li>
                            <hr />
                            <li><button onClick={handleUser} className="dropdown-item">Đăng xuất</button></li>
                        </ul>
                    </span>
                </div>
            )
        }
        else {
            return (
                <button id="btnGroupDrop1 dropdown-btn" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                     <i className="fa fa-door-open"></i>
                </button>
            )
        }
    }

    //let comRect = element.getBoundingClientRect();
    const heightHeader = 139;
    const [header, setHeader] = useState(false);

    

    const handleScroll = () => {
        if(window.scrollY > heightHeader) {
            let newHeader = true;
            setHeader(newHeader)
        }
        if(window.scrollY <= heightHeader){
            let newHeader = false;
            setHeader(newHeader);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <header>
                <div className={`header-2 ${header ? ' header-show header-fixed' : ' header-none'}`}>
                    <div className="icon">
                    </div>
                    <div className="content-header">
                        <nav className="bottom-button">
                            <ul className="bottom-group">
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" exact activeClassName="active" to="/">TRANG CHỦ</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/list-movie">PHIM</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/list-date">LỊCH CHIẾU</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/event/1">ƯU ĐÃI - SỰ KIỆN</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/review/1">ĐÁNH GIÁ PHIM</NavLink>
                                </li> 
                            </ul> 
                            <div className="group">
                                <div className="btn-group group-login" role="group" aria-label="Button group with nested dropdown">
                                <button id="btnGroupDrop1 dropdown-btn" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-door-open"></i>
                                </button>
                                    <ul className="dropdown-menu dropdown-group" aria-labelledby="btnGroupDrop1">
                                        
                                        <li><Link className="dropdown-item dropdown-items" to="/login">Đăng nhập</Link></li>
                                        <li><Link className="dropdown-item dropdown-items" to="/sign-up">Đăng ký</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


                <div className="container">
                    <Link to="/">
                        <div className="icon">
                            {/* <a href="#">
                                <img src={icon} alt="" />
                            </a> */}
                        </div>
                    </Link>
                   
                    <div className="content-header">
                        <div className={`top-button`}>
                            <div className="row">
                                <div className="col-sm-0 col-md-4 col-lg-6 col-xl-8 datVeNgay" style={{ paddingBottom: 5 }}>
                                    <a className="buy-ticket" href="#book-home">
                                        <img src={datve} alt="" />
                                    </a>
                                    <Link to="?#" style={{pointerEvents: 'none'}} className="flags">
                                        <img src={vn} alt="" />
                                    </Link>
                                    {/*<StyledButton>ABC</StyledButton>*/}
                                    {/*<styledText></styledText>*/}
                                    {/*<form className="d-flex form-search">
                                        <StyledTextField id="outlined-basic" label="Tìm kiếm" variant="outlined"/>
                                        <button className="button-search" type="submit"><i className="fa fa-search" /></button>
                                    </form>*/}
                                </div>
                                <div className="col-sm-12 col-md-8 col-lg-6 col-xl-4 right-button">
                                    {renderUser()}
                                    
                                </div>
                            </div>
                        </div>
                        <nav className="bottom-button">
                             <ul className="bottom-group">
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" exact activeClassName="active" to="/">TRANG CHỦ</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/list-movie">PHIM</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/list-date">LỊCH CHIẾU</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/event/1">ƯU ĐÃI - SỰ KIỆN</NavLink>
                                </li>
                                <li className="bottom-items">
                                    <NavLink className="bottom-link" to="/review/1">ĐÁNH GIÁ PHIM</NavLink>
                                </li> 
                            </ul> 
                            {/* <ul className="navbar-right">
                                <li>
                                    <div className="notifi">
                                        <i className="fa fa-bell" />
                                    </div>
                                </li>
                            </ul> */}
                            <div className="group">
                                <div className="btn-group group-login" role="group" aria-label="Button group with nested dropdown">
                                    {/* <button id="btnGroupDrop1 dropdown-btn" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-door-open"></i>
                                    </button> */}
                                    {renderUser2()}
                                    <ul className="dropdown-menu dropdown-group" aria-labelledby="btnGroupDrop1">
                                        <li><Link className="dropdown-item dropdown-items" to="/login">Đăng nhập</Link></li>
                                        <li><Link className="dropdown-item dropdown-items" to="/sign-up">Đăng ký</Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </nav>
                    </div>
                </div>
            </header>
            <div className="header-fixed-bottom">
                <div className="quickmenu">
                    <NavLink activeClassName="header-active" exact to="/" className="items">
                        <div><i className="fa fa-align-justify"></i></div>
                        TRANG CHỦ
                    </NavLink>
                    <NavLink activeClassName="header-active" to="/list-movie" className="items">
                        <div className=""><i className="fa fa-film"></i></div>
                        PHIM
                    </NavLink>
                    <NavLink activeClassName="header-active" to="/list-date" className="items">
                        <div className=""><i className="fa fa-calendar"></i></div>
                        LỊCH CHIẾU
                    </NavLink>
                    <NavLink activeClassName="header-active" to="/event/1" className="items">
                        <div><i className="fa fa-dice"></i></div>
                        SỰ KIỆN
                    </NavLink>
                    <NavLink activeClassName="header-active" to="/review/1" className="items">
                        <div className=""><i className="fa fa-chalkboard"></i></div>
                        ĐÁNH GIÁ
                    </NavLink>
                </div>
            </div>
        </>
    )
}
