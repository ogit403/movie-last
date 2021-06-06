import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Admin/_add-user.scss';

export default function AddUser() {

    const [user, setUser] = useState({taiKhoan: '', matKhau: '', email: '', soDT: '', maNhom: 'GP14', maLoaiNguoiDung: '', hoTen: ''});
    const [dangKy, setDangKy] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {name, value} = e.target;
        const newUser = {...user, [name]: value};
        setUser(newUser);
    }
    const params = useParams();
    // console.log(params);
    let title = 'Thêm ';
    if(Object.keys(params).length) title = 'Cập nhật ';

    //console.log('params', params);
    useEffect(() => {
        if(Object.keys(params).length){
            let item = {
                taiKhoan: params.taiKhoan,
                matKhau: params.matKhau,
                email: params.email,
                soDT: params.soDT,
                maNhom: user.maNhom,
                maLoaiNguoiDung: params.maLoaiNguoiDung,
                hoTen: params.hoTen
            }
            setUser(item);
        }
    }, [params, user.maNhom])

    useEffect(() => {
        let items = {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: user.soDT,
            maNhom: user.maNhom,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            hoTen: user.hoTen
            
        }
        
        if(Object.keys(params).length){
            //console.log('cap nhat');
            dispatch({
                type: 'UPDATE_API_ADD_USER',
                data: items
            })
        }
        else {
            //console.log('them moi');
            dispatch({
                type: 'POST_API_ADD_USER',
                data: items
            })
        }
        
    }, [dangKy])

    const handleSubmit = (e) => {
        e.preventDefault();
        let newDangKy = !dangKy;
        setDangKy(newDangKy)
    }

    return (
        <div className="content">
                 <div className="addUser">
            <div className="title">
                <h3>{title}người dùng</h3>
            </div>
            <hr className="line" />
            <div className="group-addUser">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <input value={user.taiKhoan} name="taiKhoan" onChange={handleChange} className="input-value" placeholder="Tài khoản" />
                            <input value={user.matKhau} name="matKhau" onChange={handleChange} type="password" className="input-value" placeholder="Mật khẩu" />
                            <input value={user.hoTen} name="hoTen" onChange={handleChange} className="input-value" placeholder="Họ tên" />
                            <div className="back">
                                <Link to="/user">
                                    trở lại</Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <input value={user.email} name="email" onChange={handleChange} type="email" className="input-value" placeholder="Email" />
                            <input value={user.soDT} name="soDT" onChange={handleChange} className="input-value" placeholder="Số điện thoại" />
                            <select value={user.maLoaiNguoiDung} name="maLoaiNguoiDung" onChange={handleChange} className="form-select" aria-label="Default select example">
                                <option selected>Chọn vị trí</option>
                                <option value="KhachHang">Khách hàng</option>
                                <option value="QuanTri">Quản trị</option>
                            </select>
                            <div className="btn-add">
                                <button className="btn btn-success">Thêm</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        </div>
       

    )
}
