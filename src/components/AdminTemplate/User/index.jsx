import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Admin/_user.scss';
import image from '../../../assets/img/admin/avatar.png';
import { useDispatch, useSelector } from 'react-redux';

export default function User() {
    const list = useSelector(state => state.AdminUserReducer.list);
    const params = useParams();
    const dispatch = useDispatch();

    let [userDelete, setUserDelete] = useState(false);
    //let [temp, setTemp] = useState(0);
    useEffect(() => {
        console.log('truoc')
        dispatch({
            type: 'GET_API_ADMIN_USER'
        })
    }, [userDelete, dispatch])
    
    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_ADMIN_USER',
            data: id
        })
        let newUser = !userDelete;
        setUserDelete(newUser);
    }

    let maxPage = '';
    if(list.length){
        maxPage = Math.floor(list.length / 7);
    }
    let page = Object.keys(params).length ? params.page : 1;

    const renderContent = () => {
        console.log(list);
        if(list.length){
            page = parseInt(page);
            return list.map((items, index) => {
                if(index >= 7 * (page - 1) && index <= 7 * page + page - 1)
                {
                    console.log(items);
                    let link = `/add-user/${items.taiKhoan}/${items.matKhau}/${items.hoTen}/${items.email}/${items.soDt}/${items.maLoaiNguoiDung}`
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{items.taiKhoan}</td>
                            <td>{items.matKhau}</td>
                            <td>{items.hoTen}</td>
                            <td>{items.email}</td>
                            <td>{items.soDt}</td>
                            <td className="btn-user">
                                <button className="btn btn-success">Ghi danh</button>
                                <Link to={link} className="btn btn-info">Sửa</Link>
                                <button onClick={() => handleDelete(items.taiKhoan)} className="btn btn-danger">X</button>
                            </td>
                        </tr>
                    )
                }   
                else return <></>
            })
        }
    }

    const renderPage = () => {
        if(list.length){
            let arr = [];
            for(let i = 1; i <= list.length / 7; i++){
                arr.push(i);
            }
            return arr.map((items, index) => {
                return (
                    <li key={index} className={`page-item ${page === index + 1 ? ' active' : ''}`}>
                        <Link className="page-link" to={`/user/${index + 1}`}>{index + 1}</Link>
                    </li>
                )
            })
        }
    }

    const [userTimKiem, setTimKiem] = useState({timKiem: ''})

    const handleTim = () => {
        
    }

    const handleTimKiem = (e) => {
        const {name, value} = e.target;
        let newUserTimKiem = {...userTimKiem, [name]: value};
        console.log(newUserTimKiem);
        setTimKiem(newUserTimKiem);
    }

    const handleSubmitTimKiem = (e) => {
        e.preventDefault();
        console.log('abc');
        dispatch({
            type: 'GET_API_ADMIN_USER_TIM',
            data: userTimKiem.timKiem
        })
    }

    return (
        <div className="content">
            <div className="infoUser">
                <div className="user">
                    <img src={image} alt="" />
                    <div className="content-user">
                        <span className="hello">
                            Chào,<span> Nguyễn Hồng Quân</span>
                        </span>
                        <p className="type">Admin</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><Link className="dropdown-item" to="/info-user">Thông tin cá nhân</Link></li>
                                <li><a className="dropdown-item" href="?#">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listUser">
                <div className="title-list">
                    <div className="title">
                        Danh sách người dùng</div>
                    <div className="btn-list">
                        <button type="button" id="btnThem" data-bs-toggle="modal" data-bs-target="#myModal">
                            <Link to="/add-user">
                                Thêm người dùng</Link>
                        </button>
                    </div>
                </div>
                <hr className="line" />
                <div className="search">
                    <form onSubmit={handleSubmitTimKiem}>
                        <input name="timKiem" onChange={handleTimKiem} onBlur={handleTim} onKeyUp={handleTim} className="form-control me-2" placeholder="Tìm kiếm người dùng..." aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <i className="fa fa-search" />
                        </button>
                    </form>
                    
                </div>
                <div className="table-list">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th> Họ tên</th>
                                <th>Email</th>
                                <th>số điện thoại</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderContent()}

                        </tbody>
                    </table>
                </div>
                <nav className="pagination-movie" aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ul className="pagination">
                        <li className={`page-item ${page !== 1 ? '' : ' disabled'}`}><a className="page-link" href="?#">Previous</a></li>
                        {renderPage()}
                        <li className={`page-item ${page === maxPage ? ' disabled' : ''} `}><a className="page-link" href="?#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}
