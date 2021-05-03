import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Admin/_movie.scss';

export default function Movie() {
    const list = useSelector(state => state.AdminMovieReducer.list);
    console.log(list);
    const dispatch = useDispatch();
    const [movieDelete, setMovieDelete] = useState(false)

    useEffect(() => {
        // console.log('chay');
        dispatch({
            type: 'GET_API_ADMIN_MOVIE'
        })
    }, [movieDelete, dispatch])

    const params = useParams();

    // let maxPage = '';
    // if(list.length){
    //     maxPage = Math.floor(list.length / 7);
    // }
    let page = Object.keys(params).length ? params.page : 1;
    
    const handleDelete = (id) => {
        console.log(id);
        dispatch({
            type: 'DELETE_ADMIN_MOVIE',
            data: id
        })
        let newMovieDelete = !movieDelete;
        setMovieDelete(newMovieDelete);
    }

    const renderContent = () => {
        if(list.length){
            page = parseInt(page);
            return list.map((items, index) => {
                let link = `/lich-chieu/${items.maPhim}`;
                let link2 = `/add-movie/${items.maPhim}/${items.tenPhim}/trailer/${items.ngayKhoiChieu}/${items.danhGia}/hinhAnh/${items.moTa}`;
                if(index >= 7 * (page - 1) && index <= 7 * page + page - 1)
                {
                    return (
                        <tr key={index}>
                            <td>{items.maPhim}</td>
                            <td>{items.tenPhim}</td>
                            <td><img style={{width: 50}} src={items.hinhAnh} alt=""></img></td>
                            <td>{items.moTa.substr(0, 50) + '...'}</td>
                            <td>{items.maNhom}</td>
                            <td>{new Date(items.ngayKhoiChieu).toLocaleDateString()}</td>
                            <td className="btn-movie">
                                <Link to={link} className="btn btn-success">Tạo lịch chiếu</Link>
                                <Link to={link2} className="btn btn-info">chỉnh sửa</Link>
                                <button onClick={() => handleDelete(items.maPhim)} className="btn btn-danger">X</button>
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
            console.log('render page', list.length)
            let arr = [];
            for(let i = 1; i <= list.length / 7; i++){
                arr.push(i);
            }
            console.log(arr);
            return arr.map((items, index) => {
                return (
                    <li key={index} className={`page-item ${page === index + 1 ? ' active' : ''}`}>
                        <Link className="page-link" to={`/movie/${index + 1}`}>{index + 1}</Link>
                    </li>
                )
            })
        }
    }

    return (
        <div className="content">
            <div className="infoUser">
                <div className="user">
                    <img src="./img/admin/avatar.png" alt="" />
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
                                <li><a href="?#" className="dropdown-item">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listMovie">
                <div className="title-list">
                    <div className="title">
                        Danh sách phim
      </div>
                    <div className="btn-list">
                        <button type="button" id="btnThem" data-bs-toggle="modal" data-bs-target="#myModal">
                            <Link to="/add-movie">
                                Thêm phim
          </Link>
                        </button>
                    </div>
                </div>
                <hr className="line" />
                <div className="search">
                    <input className="form-control me-2" placeholder="Tìm kiếm phim..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                        <i className="fa fa-search" />
                    </button>
                </div>
                <div className="table-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Mã phim</th>
                                <th>Tên phim</th>
                                <th>Hình ảnh</th>
                                <th>Mô tả</th>
                                <th>Mã nhóm</th>
                                <th>Ngày khởi chiếu</th>
                                <th><i className="fa fa-cog" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderContent()}
                        </tbody>
                    </table>
                </div>
                <nav className="pagination-movie" aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item disabled"><a href="?#" className="page-link">Previous</a></li>
                        {renderPage()}
                        <li className="page-item"><a href="?#" className="page-link">Next</a></li>
                    </ul>
                </nav>
            </div>

            

        </div>




    )
}
