import React, { useEffect, useState } from 'react'
import '../../../assets/scss/sass/Page/Home/_buy.scss'
import screen from '../../../assets/img/buy/screen.png';
import avatar from '../../../assets/img/buy/avatar.png';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';

export default function Buy({ user, history }) {

    const list = useSelector(state => state.BuyReducer.buy);
    const [listGhe, setlistGhe] = useState([]);
    const [isCombo, setIsCombo] = useState(true);
    const [listCombo, setListCombo] = useState([0, 0, 0, 0, 0, 0]);
    const listMoney = [55, 60, 55, 60, 80, 75];
    const stateCombo = [
        {
            name: 'Pepsi + Bắp Ngọt',
            content: '1 Bắp rang bơ, 1 Ly Pepsi',
            money: 55000
        },
        {
            name: 'Pepsi + Bắp Phô mai',
            content: '1 Bắp phô mai, 1 Ly Pepsi',
            money: 60000
        },
        {
            name: '7up + Bắp Ngọt',
            content: '1 Bắp ngọt, 1 Ly 7UP',
            money: 55000
        },
        {
            name: '7up + Bắp Phô Mai',
            content: '1 Bắp phô mai, 1 Ly 7UP',
            money: 60000
        },
        {
            name: '2 Pepsi + Bắp Ngọt',
            content: '1 Bắp ngọt, 2 Ly Pepsi',
            money: 75000
        },
        {
            name: '2 Pepsi + Bắp Phô mai',
            content: '1 Bắp rang bơ, 2 Ly Pepsi',
            money: 80000
        },
    ];

    const dispatch = useDispatch();
    const params = useParams();


    let tempList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const [datve, setDatve] = useState(false);

    useEffect(() => {
        dispatch({
            type: 'GET_API_BUY',
            params
        })
    }, [datve, dispatch, params])

    const handleDatVe = () => {
        console.log(listGhe);
        const arr = [];
        listGhe.forEach(items => {
            const temp = { maGhe: items.maGhe, giaVe: items.giaVe };
            arr.push(temp);
        })
        const items = {
            maLichChieu: params.id,
            danhSachVe: arr,
            taiKhoanNguoiDung: user.taiKhoan
        }
        console.log(items);
        dispatch({
            type: 'POST_API_DAT_VE',
            data: items
        })
        let newDatVe = !datve;
        setDatve(newDatVe);
    }

    const [checkBox, setCheckBox] = useState(false);

    const handleBuy = (e) => {
        let newCheck = !checkBox;
        setCheckBox(newCheck);
    }

    const handlePush = () => {
        localStorage.removeItem("KhachHang");
        history.push('/login');
    }

    const renderFirst = () => {
        if (Object.keys(list).length) {
            const temp = JSON.parse(localStorage.getItem("KhachHang"));
            return (
                <>
                    <div className="member">
                        <div className="avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="info">
                            <p className="name">{temp.hoTen}</p>
                            <p>Member</p>
                        </div>
                    </div>
                    <div className="price-total">
                        <span className="total">{(CounttotalGhe() + countTotalCombo()).toLocaleString()}</span>đ
                    </div>
                    <div className="showtimes-detail">
                        <div className="movie-name">{list.thongTinPhim.tenPhim}</div>
                        <div className="date">Hôm nay, ngày {list.thongTinPhim.ngayChieu.slice(0, 5)} {list.thongTinPhim.gioChieu} - {list.thongTinPhim.tenRap} </div>
                    </div>
                    <div className="current-select">
                        <div className="select seats">
                            Ghế:
                            <div className="seat-code" style={{ marginLeft: 5 }}>
                                {listGhe.map((items, index) => {
                                    let number = parseInt(items.tenGhe);
                                    number--;
                                    let tam = number / 12;
                                    tam = Math.floor(tam);
                                    let i = number % 12 + 1;
                                    let res;
                                    if (i <= 9) res = '0' + (i);
                                    else res = i;
                                    // console.log(tam);
                                    // console.log(temp[tam])
                                    if(index === 0){
                                        return (
                                            <span key={index}>
                                                {tempList[tam]}{res}
                                            </span>
                                        )
                                    }
                                    else {
                                        return (
                                            <span key={index}>
                                                ,{tempList[tam]}{res}
                                            </span>
                                        )
                                    }
                                   
                                })}
                            </div>
                            <div className="price">
                                <div className="totalPrice">{CounttotalGhe().toLocaleString()}</div>đ
                        </div>
                        </div>
                        <div className="select combo">
                            <button onClick={handleCombo}>
                                Chọn Combo
                            </button>
                            <div className="price">
                                <div className="totalPrice">{countTotalCombo().toLocaleString()}</div>đ
                                </div>
                        </div>
                    </div>
                    <div className="login">
                        <h3 className="title"><a href="?#">Thông tin đặt vé</a></h3>
                        {renderThongTin()}
                        <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={handlePush} className="warn">Đăng nhập tài khoản khác  hoặc Đổi thông tin</button>
                    </div>
                    <p style={{fontWeight: 600, marginBottom: 0, marginTop: 10}}>Chọn phương thức thanh toán:</p>
                    <div>
                        <input name="check" onChange={handleBuy}type="checkbox"/>
                        <label style={{fontWeight: 500, paddingLeft: 10}}>Thanh toán trực tuyến</label>
                    </div>

                    <div className="payment">
                        <p className="first">
                            <b>Lưu ý:</b>
                        </p>
                        <p>- Vé đã mua không thể đổi hay trả lại.</p>
                        <p>- Khi được yêu cầu, vui lòng xuất trình giấy tờ tùy thân để chứng thực độ tuổi khi xem phim.</p>
                    </div>
                    <button disabled={!checkBox} onClick={handleDatVe} style={{ border: 'none' }} className="btn-booking active">
                        đặt vé
                    </button>
                </>
            )
        }
    }



    const renderGhe = () => {

        if (Object.keys(list).length){
            return list.danhSachGhe.map((items, index) => {
                let i = index % 12;
                let tam = index / 12;
                let res;
                if (i + 1 <= 9) res = '0' + (i + 1);
                else res = (i + 1);

                let daDat1 = listGhe.findIndex(item => item === items);

                if (index <= 95) {
                    if (items.daDat) {
                        return (
                            <button key={index} style={{ width: 34, color: '#000', textDecoration: 'none', pointerEvents: 'none' }} className={`seat-number booked ${i === 0 ? ' first' : ''} ${i === 1 ? ' left' : ''}`}>
                                {tempList[Math.floor(tam)]}{res}
                            </button>
                        )
                    }
                    if (daDat1 === -1)
                        return (
                            <button key={index} onClick={() => handleGhe(items)} style={{ width: 34, color: '#000', textDecoration: 'none' }} className={`seat-number ${i === 0 ? ' first' : ''} ${items.loaiGhe === 'Thuong' ? ' normal' : ' vip'} ${i === 1 ? ' left' : ''}`}>
                                {tempList[Math.floor(tam)]}{res}
                            </button>
                        )
                    else {
                        // ${items.loaiGhe === 'Thuong' ? ' normal select-normal' : ' vip select-vip m h '}
                        return (
                            <button key={index} onClick={() => handleGhe(items)} style={{ width: 34, color: '#000', textDecoration: 'none' }} className={`seat-number ${i === 0 ? ' first' : ''} select-ghe   ${i === 1 ? ' left' : ''}`}>
                                {tempList[Math.floor(tam)]}{res}
                            </button>
                        )
                    }
                }
                else return <></>
            })
        }
    }

    const CounttotalGhe = () => {
        let newTotalGhe = 0;
        newTotalGhe = listGhe.reduce((a, b) => {
            return a + b.giaVe;
        }, 0)
        return newTotalGhe;
    }
    const countTotalCombo = () => {
        let newTotalCombo = 0;
        listCombo.forEach((items, index) => {
            newTotalCombo += items * listMoney[index] * 1000;
        })
        return newTotalCombo;
    }

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const handleGhe = (items) => {
        let newList = [...listGhe];

        let i = newList.findIndex(item => item === items);
        if (i === -1) {
            if (newList.length === 5) {
                setOpen(o => !o)
                return;
            }
            newList.push(items);
        }
        else {
            newList.splice(i, 1);
        }

        setlistGhe(newList);
    }

    const changeCombo = (id, type) => {
        let newListCombo = [...listCombo];
        if (type) {
            newListCombo[id]++;
        }
        else {
            if (newListCombo[id] >= 1) newListCombo[id]--;
        }
        setListCombo(newListCombo);
    }

    const handleCombo = () => {
        const newCombo = !isCombo;
        setIsCombo(newCombo);
    }
    const renderCombo = () => {
        return (
            <div className={`combo-popup ${isCombo ? ' trans-combo' : ''}`} id="combo-popup">
                <p className="title">Combo</p>
                {stateCombo.map((items, index) => {
                    return (
                        <div key={index} className="combo-items">
                            <div className="image"></div>
                            <div className="combo-info">
                                <span className="name">{items.name}</span>
                                <p>{items.content}</p>
                                <span className="money">{items.money.toLocaleString()} đ</span>
                            </div>
                            <div className="info-count">
                                <button onClick={() => changeCombo(index, false)} className="in">-</button>
                                <span>{listCombo[index]}</span>
                                <button onClick={() => changeCombo(index, true)} className="de">+</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

    }

    const renderCombo2 = () => {
        return (
            <div className={`combo-popup-2 ${isCombo ? ' hide-combo' : ' show-combo'}`} id="combo-popup">
                <p className="title">Combo</p>
                {stateCombo.map((items, index) => {
                    return (
                        <div key={index} className="combo-items">
                            <div className="image"></div>
                            <div className="combo-info">
                                <span className="name">{items.name}</span>
                                <p>{items.content}</p>
                                <span className="money">{items.money.toLocaleString()} đ</span>
                            </div>
                            <div className="info-count">
                                <button onClick={() => changeCombo(index, false)} className="in">-</button>
                                <span>{listCombo[index]}</span>
                                <button onClick={() => changeCombo(index, true)} className="de">+</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderThongTin = () => {
        if (Object.keys(user).length) {
            return (
                <div className="info">
                    <p style={{ fontWeight: 600 }} className="main">
                        Họ tên:
                        <span style={{ fontWeight: 700 }}> {user.hoTen}</span>
                    </p>
                    <p style={{ fontWeight: 600 }} className="main">
                        Số điện thoại:
                <span style={{ fontWeight: 700 }}> {user.soDT}</span>
                    </p>
                    <p style={{ fontWeight: 600 }} className="main">
                        Email:
                    <span style={{ fontWeight: 700 }}> {user.email}</span>
                    </p>
                </div>
            )
        }
    }

    if (datve) {
        const userDatVe = JSON.parse(localStorage.getItem('KhachHang'));
        return (
            <div className="buySuccess">
                <div className="container">
                    <h3 className="title-datVe">ĐẶT VÉ THÀNH CÔNG</h3>
                    <p className="book-no">Booking No. :
                        <span>{Math.floor(Math.random() * 100000000 + 1)}</span>
                    </p>
                    <h1 className="ten-datVe">{list.thongTinPhim.tenPhim}</h1>
                    <div className="row group-datVe">
                        <div className="col-6 items-datVe">
                            <p style={{ color: '#EA3B92' }}>Thông tin vé</p>
                            <div>
                                <span className="title">Mã vé:</span>
                                <span className="info" style={{ color: 'red' }}>#{Math.floor(Math.random() * 10000000 + 1)}</span>
                            </div>
                            <div>
                                <span className="title">Vị trí ghế:</span>
                                <span className="info">
                                    {listGhe.map((items, index) => {
                                        let number = parseInt(items.tenGhe);
                                        number--;
                                        let tam = number / 12;
                                        tam = Math.floor(tam);
                                        let i = number % 12 + 1;
                                        let res;
                                        if (i <= 9) res = '0' + (i);
                                        else res = i;
                                        if(index === 0){
                                            return (
                                                <span key={index}>
                                                    {tempList[tam]}{res}
                                                </span>
                                            )
                                        }
                                        else {
                                            return (
                                                <span key={index}>
                                                    ,{tempList[tam]}{res}
                                                </span>
                                            )
                                        }
                                    })}
                                </span>
                            </div>
                            <div className="">
                                <span className="title">Suất chiếu:</span>
                                <span className="info">
                                    {list.thongTinPhim.ngayChieu.slice(0, 5)} {list.thongTinPhim.gioChieu}
                                </span>
                            </div>
                            <div className="">
                                <span className="title">Thông tin phim:</span>
                                <span className="info">
                                    <span>Phòng chiếu - {list.thongTinPhim.tenRap}</span>
                                </span>
                            </div>

                        </div>
                        <div className="col-6 items-datVe">
                            <p style={{ color: '#EA3B92' }}>Thông tin thanh toán</p>
                            <div className="">
                                <span className="title">Phương thức: </span>
                                <span className="info">Trực tuyến</span>
                            </div>
                            <div className="">
                                <span className="title">Tổng tiền: </span>
                                <span className="info">{(CounttotalGhe() + countTotalCombo()).toLocaleString()}</span>
                            </div>
                            <div className="">
                                <span className="title">Họ tên:</span>
                                <span className="info"><span>{userDatVe.hoTen}</span></span>
                            </div>
                            <div className="">
                                <span className="title">Email:</span>
                                <span className="info"><span>{userDatVe.email}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex" style={{ justifyContent: 'center' }}>
                        <Link to="/" style={{ marginTop: 30, marginBottom: 15 }} className="text-center btn btn-success">Quay về trang chủ</Link>
                    </div>
                </div>
            </div>

        )
    }
    else {
        return (
            <section className="buy">
                <Popup open={open} position="top center" closeOnDocumentClick onClose={closeModal}>
                <button style={{cursor: 'pointer'}} className="close" onClick={closeModal}>
                    &times;
                </button>
                    <div className="modal-buy">
                        <p>Thông báo</p>
                        <h3>Chỉ được chọn tối đa 5 ghế!!!</h3>
                    </div>
                </Popup>
                <div className="wrapper-buy">
                    <div className="main-left">
                        <div className="buy-content">
                            <div className="contentBuy">
                                <div className="tab-content wrap-buy" id="content-buy">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="note-time">
                                            <div className="note">
                                                * Không được bỏ trống 01 ghế bên cạnh hoặc ghế đầu tiên của dãy
                    </div>
                                        </div>
                                        <div className="row seat">
                                        <div className="scroll-seat" id="style-2">
                                            <div className="seat-right">
                                                <div className="screen">
                                                    <div className="namescreen">
                                                        <div className="logo">
                                                            <img src={screen} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="exit">
                                                    <div className="go">
                                                        Lối vào
                                                            </div>
                                                    <div className="out">
                                                        Lối ra
                                                </div>
                                                </div>
                                                    <div className="seat-full">
                                                        {renderGhe()}
                                                </div>
                                               
                                            </div>
                                            </div>
                                            <div className="seat-left">
                                                <div className="note">
                                                    <div className="seat normal">
                                                        <span />
                                                        Ghế thường
                                                    </div>
                                                    <div className="seat vip">
                                                        <span />
                                                    Ghế VIP
                                                    </div>
                                                    <div className="seat booking">
                                                        <span />
                                                    Ghế đang chọn
                                                    </div>
                                                    <div className="seat not">
                                                        <span />
                                                    Ghế không thể chọn
                                                    </div>
                                                    <div className="range-center">
                                                        <span />
                                                                Ghế trung tâm
                                                                </div>
                                                    <div className="range-nice">
                                                        <span />
                                                    Ghế đẹp
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="main-right-content">
                            <div className="main-full">
                                {renderFirst()}
                                {renderCombo2()}                            
                            </div>
                        </div>
                        
                    </div>
                    {renderCombo()}
                </div>
            </section>

        )
    }

}







