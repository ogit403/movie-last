import React from 'react'
import '../../../assets/scss/sass/Page/Home/_detail-user.scss';
import rap from '../../../assets/img/theater/bhd-star-bitexco-16105952137769.png';

export default function DetailUsers(props) {
    // console.log(props.user);


    const renderDatVe = () => {;
        if(Object.keys(props.user).length){
            return props.user.thongTinDatVe.map((items, index) => {
                return (
                    <div className="row group-datve">
                        <div className="col-12">
                            <div className="top">
                                <img src={rap} alt="" />
                                {items.danhSachGhe.map((ghe, indexGhe) => {
                                    return (
                                        <div className="info">
                                            <div className="title">{ghe.tenHeThongRap}</div>
                                            <p style={{fontWeight: 700}}>Tên ghế: {ghe.tenGhe}</p>
                                        </div>
                                    )
                                })}
                                
                            </div>
                            <div className="bottom">
                                <p style={{marginBottom: 10}}>Tên phim: {items.tenPhim}</p>
                                <span style={{color: '#000', fontWeight: 700, marginRight: 50}}>
                                    Ngày đặt: {new Date(items.ngayDat).toLocaleDateString()}
                                </span>
                                <span style={{color: '#000', fontWeight: 700, marginRight: 50}}>
                                    Giờ đặt: {new Date(items.ngayDat).toLocaleTimeString().substr(0, 5)}
                                </span>
                                <span style={{color: '#000', fontWeight: 700, marginRight: 50}}>
                                    Giá vé: {items.giaVe}
                                </span>
                                <span style={{color: '#000', fontWeight: 700}}>
                                    Mã vé: {items.maVe}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <section className="detailUser">
            <div className="wrapper container">
                <div className="nav nav-tabs user-title" id="user-title" role="tablist">
                    <a href="?" className="nav-link active" id="user-home-tab" role="tab" data-bs-toggle="tab" data-bs-target="#user-info" aria-controls="user-home" aria-selected="true">Thông tin cá nhân</a>
                    <a href="?" className="nav-link" id="user-profile-tab" role="tab" data-bs-toggle="tab" data-bs-target="#user-datve" aria-controls="user-profile" aria-selected="false">Lịch sử đặt vé</a>
                </div>
                <div className="tab-content user-content" id="user-content">
                    <div className="tab-pane fade show active" id="user-info" role="tabpanel" aria-labelledby="user-home-tab">
                        <div className="row user-group">
                            <div className="col-12 col-md-6">
                                <div>
                                    <span className="title">Họ tên: </span>
                                    <span className="content-user">{props.user.hoTen}</span>
                                </div>
                                <div>
                                    <span className="title">Email: </span>
                                    <span className="content-user">{props.user.email}</span>
                                </div>
                                <div>
                                    <span className="title">Số điện thoại: </span>
                                    <span className="content-user">{props.user.soDT}</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <span className="title">Tài khoản: </span>
                                    <span className="content-user">{props.user.taiKhoan}</span>
                                </div>

                                <div className="btn-update" style={{marginTop: 30}}>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="user-datve" role="tabpanel" aria-labelledby="user-profile-tab">
                        <div className="history-datve">
                            {renderDatVe()}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
