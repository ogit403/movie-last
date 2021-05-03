import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Admin/_lich_chieu.scss';
export default function LichChieu(){

	const dispatch = useDispatch();
	const params = useParams();
	//console.log(params);
	const list = useSelector(state => state.LichChieuReducer.list);
	//console.log('list', list);

	useEffect(() => {
		dispatch({
			type: 'GET_API_LICH_CHIEU',
			data: params.id
		})
	}, [dispatch, params.id])

	// let maxPage = '';
    // if(list.length){
    //     maxPage = Math.floor(list.length / 16);
    // }
    let page = params.page ? params.page : 1;

	const renderContent = () => {
		if(Object.keys(list).length){
			page = parseInt(page);
			//console.log('page', page);
			return list.lichChieu.map((items, index) => {
				if(index >= 16 * (page - 1) && index <= 16 * page + page - 1)
				{
					//console.log('abc');
					return (
						<tr key={index}>
							<td>{items.maLichChieu}</td>
							<td>{items.thongTinRap.tenHeThongRap}</td>
							<td>{items.thongTinRap.tenCumRap}</td>
							<td>{new Date(items.ngayChieuGioChieu).toLocaleTimeString()}</td>
							<td>{items.giaVe}</td>
							<td>{items.thoiLuong}</td>
							<td className="btn-movie">
								<button className="btn btn-danger">Hủy</button>
							</td>
						</tr>
					)
				}	
				else return <></>
			})
		}
	}

	const renderPage = () => {
        if(Object.keys(list).length){
            //console.log('render page', list.length)
            let arr = [];
            for(let i = 1; i <= list.lichChieu.length / 16; i++){
                arr.push(i);
            }
            //console.log(arr);
            return arr.map((items, index) => {
                return (
                    <li key={index} className={`page-item ${page === index + 1 ? ' active' : ''}`}>
                        <Link className="page-link" to={`/lich-chieu/${params.id}/${index + 1}`}>{index + 1}</Link>
                    </li>
                )
            })
        }
    }

	const [movie, setMovie] = useState({ngayChieu: '', gioChieu: ''})

	const handleChange = (e) => {
		const {name, value} = e.target;
		let newMovie = {...movie, [name]: value};
		setMovie(newMovie);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let time = movie.ngayChieu + 'T' + movie.gioChieu;
		let items = {
			maPhim: 0,
			ngayChieuGioChieu: time,
			maRap: 0,
			giaVe: 0,
		}

		console.log(items);
		dispatch({
			type: 'POST_API_ADD_LICH_CHIEU',
			date: items
		})
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
                                <li><a className="dropdown-item" href="?#">Thông tin cá nhân</a></li>
                                <li><a className="dropdown-item" href="?#">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
			<div className="lich-chieu">
				<div className="title" style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
					<div>
						<h1>Thông tin lịch chiếu phim của phim</h1>
						<h1 className="text-center">{Object.keys(list).length ? list.tenPhim: ''}</h1>      
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="lich-chieu-content row" style={{marginTop: 20}}>
							<div className="col-4 left" style={{paddingLeft: 50}}> 
								<div className="dropdown-hethongrap">
									<select className="form-select" aria-label="Default select example">
										<option defaultValue>Chọn hệ thống rạp</option>
										<option value={1}>One</option>
										<option value={2}>Two</option>
										<option value={3}>Three</option>
									</select>
								</div>
								<div className="dropdown-cumrap">
									<select className="form-select" aria-label="Default select example">
										<option defaultValue>Chọn cụm rạp</option>
										<option value={1}>One</option>
										<option value={2}>Two</option>
										<option value={3}>Three</option>
									</select>
								</div>
								<div className="dropdown-rap">
									<select className="form-select" aria-label="Default select example">
										<option defaultValue>Chọn rạp</option>
										<option value={1}>One</option>
										<option value={2}>Two</option>
										<option value={3}>Three</option>
									</select>
								</div>
							</div>
							<div className="col-8 right" style={{paddingLeft: 150}}>
								<div className="input-select">
									<span>Chọn ngày chiếu: </span>
									<input name="ngayChieu" onChange={handleChange} />
								</div>
								<div className="input-select">
									<span>Chọn giờ chiếu: </span>
									<input name="gioChieu" onChange={handleChange} type="text" placeholder="Nhập giờ chiếu..." />
								</div>
								<div className="input-select">
									<span>Nhập thời lượng phim: </span>
									<input type="text" placeholder="Nhập thời lượng phim..." />
								</div>
								<div className="input-select">
									<span>Mã nhóm mặc định: </span>
									<input type="text" placeholder="Nhập mã nhóm..." />
								</div>
								<div className="input-select">
									<span>Giá vé: </span>
									<input type="text" placeholder="Nhập giá vé..." />
								</div>
							</div>
					</div>
					<div  style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
						<button className="btn btn-success">Đăng</button>
					</div>
				</form>
				
					<div className="lich-chieu-phim">
						<div className="table-list">
						<table>
							<thead>
								<tr>
								<th>Mã</th>
								<th>Hệ thống rạp</th>
								<th>Cụm rạp</th>
								<th>Ngày giờ chiếu</th>
								<th>Giá vé</th>
								<th>Thời lượng phim</th>
								<th><i className="fa fa-cog" /></th>
								</tr>
							</thead>
							<tbody>
								{renderContent()}
							</tbody>
						</table>
						</div>
						<nav className="pagination-movie" aria-label="Page navigation example" style={{display: 'flex', justifyContent: 'center'}}>
							<ul className="pagination">
							<li className="page-item disabled"><a className="page-link" href="?#">Previous</a></li>
								{renderPage()}
							<li className="page-item"><a className="page-link" href="?#">Next</a></li>
							</ul>
						</nav>
					</div>
			</div>
		</div>
	)
}