import React from 'react'
import '../../../assets/scss/sass/Page/Admin/_info-user.scss';

export default function InfoUser() {

    if(localStorage.getItem("QuanTri")){
        let items = JSON.parse(localStorage.getItem("QuanTri"));
        return (
            <div className="content">
                <div className="infoUser">
 
                    <div className="detailUser">
                        <div className="title">
                            <h3>Thông tin</h3>
                        </div>
                        <div className="info">
                            <p>Tên:<span> {items.hoTen}</span></p>
                            <p>Tài khoản:<span> {items.taiKhoan}</span></p>
                            <p>Email:<span> {items.email}</span></p>
                            <p>Số điện thoại:<span> {items.soDT}</span></p>
                            <p>Loại người dùng:<span> Quản trị</span></p>
                            {/*<button className="btn btn-success">Sửa</button>*/}
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }

    


    
}
