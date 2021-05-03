// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './../../../assets/scss/sass/Page/Home/_login.scss';
import { Button, TextField} from '@material-ui/core';

export default function Regist(props) {

    const [user, setUser] = useState({
        taiKhoan: '',
        matKhau1: '',
        matKhau2: '',
        hoTen: '',
        email: '',
        soDienThoai: ''
    })

    const [error, setError] = useState({
        taiKhoan: '',
        matKhau1: '',
        matKhau2: '',
        hoTen: '',
        email: '',
        soDienThoai: ''
    })

    // const [isValid, setIsValid] = useState(false);

    const [valid, setValid] = useState({
        taiKhoan: false,
        matKhau1: false,
        matKhau2: false,
        hoTen: false,
        email: false,
        soDienThoai: false,
        isValid: false
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        let newUser = {...user, [name]: value};
        setUser(newUser);
    }
    const handleError = (e) => {
        const {name, value} = e.target;
        let mess = '';
        let newUser = user;

        if(name === "taiKhoan"){
            mess = value === '' ? 'Tài khoản không được rỗng' : '';
            if((value && value.length < 4) || (value && value.length > 12)){
                mess = 'Vui lòng nhập từ 4 - 12 kí tự!';
            }
        }
        else if(name === "matKhau1"){
            mess = value === '' ? 'Mật khẩu không được rỗng' : '';
        }
        else if(name === "matKhau2"){
            mess = value === '' ? 'Mật khẩu không được rỗng' : '';
            if(value && value !== newUser.matKhau1){
                mess = 'Mật khẩu không trùng nhau!'
            }
        }
        else if(name === "hoTen") {
            mess = value === '' ? 'Họ tên không được rỗng' : '';
            if(value && value.match(/^[0-9]+$/)){
                mess = 'Tên không được chứa chữ số';
            }
        }
        else if(name === "email") {
            mess = value === '' ? 'Email không được rỗng' : '';
            if(value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                mess = 'Vui lòng nhập đúng định dạng';
            }
        }
        else {
            mess = value === '' ? 'Số điện thoại không được rỗng' : '';
            if(value && !value.match(/^[0-9]+$/)){
                mess = 'Không được chứa chữ cái';
            }
        }

        // switch(name){
        //     case "taiKhoan": {
        //         mess = value === '' ? 'Tài khoản không được rỗng' : '';
        //         if((value && value.length < 4) || (value && value.length > 12)){
        //             mess = 'Vui lòng nhập từ 4 - 12 kí tự!';
        //         }
        //     } break;
        //     case 'matKhau1': {
        //         mess = value === '' ? 'Mật khẩu không được rỗng' : '';
        //     } break;
        //     case 'matKhau2': {
        //         mess = value === '' ? 'Mật khẩu không được rỗng' : '';
        //         if(value && value !== newUser.matKhau1){
        //             mess = 'Mật khẩu không trùng nhau!'
        //         }
        //     } break;
        //     case 'hoTen': {
        //         mess = value === '' ? 'Họ tên không được rỗng' : '';
        //         if(value && value.match(/^[0-9]+$/)){
        //             mess = 'Tên không được chứa chữ số';
        //         }
        //     } break;
        //     case 'email': {
        //         mess = value === '' ? 'Email không được rỗng' : '';
        //         if(value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
        //             mess = 'Vui lòng nhập đúng định dạng';
        //         }
        //     } break;
        //     default: {
        //         mess = value === '' ? 'Số điện thoại không được rỗng' : '';
        //         if(value && !value.match(/^[0-9]+$/)){
        //             mess = 'Không được chứa chữ cái';
        //         }
        //     } break;
        // }
        let newError = {...error, [name]: mess};
        setError(newError);
    }
    
    useEffect(()=>{
        let {taiKhoan, matKhau1, matKhau2, hoTen, email, soDienThoai} = user;
        let newValid = {...valid};
        newValid.taiKhoan = taiKhoan !== '' ? true : false;
        newValid.matKhau1 = matKhau1 !== '' ? true : false;
        newValid.matKhau2 = matKhau2 !== '' ? true : false;
        newValid.hoTen = hoTen !== '' ? true : false;
        newValid.email = email !== '' ? true : false;
        newValid.soDienThoai = soDienThoai !== '' ? true : false;
        newValid.isValid = newValid.taiKhoan && newValid.matKhau1 && newValid.matKhau2 && newValid.hoTen && newValid.email && newValid.soDienThoai;
        setValid(newValid);
    },[error, user, valid])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
  
        let data = {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau1,
            email: user.email,
            soDT: user.soDienThoai,
            maNhom: 'GP01',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: user.hoTen
        }
        // axios
       
        dispatch({
            type: 'POST_DANG_KY',
            data,
            history: props.history
        })
    }

    const err = useSelector(state => state.DangKyReducer.err);

    const renderError = () => {
        if(Object.keys(err).length) {
            return (
                <div style={{color: 'red', marginBottom: 10, fontSize: 20}}>{err.data}</div>
            )
        }
    }
    
    return (

        <section className="login">
            <div className="wrapper-login">
                
                <div className="form-group" style={{marginTop: 10}}>
                    <div style={{marginBottom: 15, fontSize: 20, color: '#f29438'}}>Đăng Ký</div>
                    {renderError()}
                    <form onSubmit={handleSubmit} className="dangKy-content">
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">  
                                    <TextField style={{display: 'block'}} color="secondary" name="taiKhoan" onBlur={handleError} onKeyUp={handleError} onChange={handleChange} label="Tài khoản"/>
                                    {error.taiKhoan ? <span style={{color: 'red', float: 'left', fontSize: 13, marginBottom: 10}}>* {error.taiKhoan}</span> : ''}
                                </div>
                                <div className="mb-3">
                                    <TextField style={{display: 'block', marginTop: 30}} color="secondary" name="matKhau1" onBlur={handleError} onKeyUp={handleError} onChange={handleChange} type="password" label="Mật khẩu" />
                                    {error.matKhau1 ? <span style={{color: 'red', float: 'left', fontSize: 13, marginBottom: 10}}>* {error.matKhau1}</span> : ''}
                                </div>
                                <div className="mb-3">
                                    <TextField style={{display: 'block', marginTop: 30}} color="secondary" name="matKhau2" onBlur={handleError} onKeyUp={handleError} onChange={handleChange} type="password" label="Nhập lại mật khẩu"/>
                                    {error.matKhau2 ? <span style={{color: 'red', float: 'left', fontSize: 13, marginBottom: 10}}>* {error.matKhau2}</span> : ''}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <TextField style={{display: 'block'}} color="secondary" name="hoTen" onBlur={handleError} onKeyUp={handleError} onChange={handleChange} type="text" label="Họ tên"/>
                                    {error.hoTen ? <span style={{color: 'red', float: 'left', fontSize: 13, marginBottom: 10}}>* {error.hoTen}</span> : ''}
                                </div>
                                <div className="mb-3">
                                    <TextField style={{display: 'block', marginTop: 30}} color="secondary" name="email" onBlur={handleError} onKeyUp={handleError} onChange={handleChange} type="email" label="Email"/>
                                    {error.email ? <span style={{color: 'red', float: 'left', fontSize: 13, marginBottom: 10}}>* {error.email}</span> : ''}
                                </div>
                                <div className="mb-3">
                                    <TextField style={{display: 'block', marginTop: 30}} color="secondary" name="soDienThoai" onBlur={handleError} onKeyUp={handleError} onChange={handleChange} type="text" label="Số điện thoại"/>
                                    {error.soDienThoai ? <span style={{color: 'red', float: 'left', fontSize: 13, marginBottom: 10}}>* {error.soDienThoai}</span> : ''}
                                </div>
                            </div>
                        </div>
                        
                        
                        <Button color="secondary" variant="contained" disabled={!valid.isValid} type="submit">Đăng ký</Button>

                    </form>
                </div>
            </div>
        </section>


    )
}
