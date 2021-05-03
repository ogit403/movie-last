import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import './../../../assets/scss/sass/Page/Home/_login.scss';
import { Button, TextField} from '@material-ui/core';
export default function Login(props) {

    const [user, setUser] = useState({name: '', password: ''})
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        const newUser = {...user, [name]: value};
        setUser(newUser);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            taiKhoan: user.name,
            matKhau: user.password
        }   
        

        dispatch({
            type: 'POST_API_LOGIN',
            data,
            history: props.history
        })
    }

    const renderError = () => {
        if(Object.keys(props.err).length){
            return (
                <div style={{color: 'red', marginBottom: 10, fontSize: 20}}>{props.err.data}</div>
            )
        }
    }

    return (
        <section className="login">
            <div className="wrapper-login">
                <div className="form-group">
                    <div style={{marginBottom: 15, fontSize: 20, color: '#f29438'}}>Đăng Nhập</div>
                    {renderError()}
                    <div className="tab-content v-form-login" id="v-form-login">
                            <form  onSubmit={handleSubmit} className="dangNhap-content">
                                <div className="mb-3">
                                    <TextField color="secondary" id="standard-basic" value={user.name} name="name" onChange={handleChange} type="text" label="Tài khoản" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <TextField color="secondary" id="standard-basic" value={user.password} name="password" onChange={handleChange} type="password" label="Mật khẩu" className="form-control"/>
                                </div>
                                <Button color="secondary" variant="contained" type="submit">Đăng nhập</Button>
                            </form>
                    </div>
                </div>
            </div>
        </section>


    )
}
