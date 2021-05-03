import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../../../assets/scss/sass/Page/Admin/_add-movie.scss';

export default function AddMovie() {

    const dispatch = useDispatch();
    const params = useParams();

    const [movie, setMovie] = useState({
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer: '',
        hinhAnh: {},
        moTa: '',
        maNhom: 'GP10',
        ngayKhoiChieu: '',
        danhGia: '',
    })
    //console.log('params', params);
    let title = 'Thêm ';
    if(Object.keys(params).length) title = 'Cập nhật ';

    useEffect(() => {
        if(Object.keys(params).length){
            let items = {
                maPhim: params.maPhim,
                tenPhim: params.tenPhim,
                biDanh: '',
                trailer: params.trailer,
                hinhAnh: {},
                moTa: params.moTa,
                maNhom: 'GP10',
                ngayKhoiChieu: params.ngayKhoiChieu,
                danhGia: params.danhGia,
            }
            setMovie(items);
        }
    }, [params])

    const handleChange = (e) => {
        let target = e.target;
        const {name, value} = e.target;
        //console.log(name, value);
        if(name === 'hinhAnh'){
            let newMovie = {...movie, [name]: target.files[0]}
            setMovie(newMovie);
        }
        else {
            let newMobie = {...movie, [name]:value}
            setMovie(newMobie);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            maPhim: 0,
            tenPhim: movie.tenPhim,
            biDanh: 'abc',
            trailer: movie.trailer,
            hinhAnh: 'abc.png',
            moTa: movie.moTa,
            maNhom: 'GP10',
            ngayKhoiChieu: movie.ngayKhoiChieu,
            danhGia: movie.danhGia,
        }
        if(Object.keys(params).length){
            data.maPhim = movie.maPhim;
            data.danhGia = 0;
        }
        //console.log('data', data)
        let form_data = new FormData();

        form_data.append('hinhAnh', movie.hinhAnh);
        form_data.append('tenPhim', movie.tenPhim);
        form_data.append('maNhom', 'GP10');

        if(Object.keys(params).length){
            console.log('cap nhat');
            dispatch({
                type: 'UPDATE_API_ADMIN_ADD_MOVIE',
                data1: data,
                data2: form_data
            })
        }
        else{
            dispatch({
                type: 'POST_API_ADMIN_ADD_MOVIE',
                data1: data,
                data2: form_data,
            })
        }

        
    }

    return (
        <div className="content">
            <div className="addMovie">
            <div className="title">
                <h3>{title} phim</h3>
            </div>
            <hr className="line" />
            <div className="group-addMovie">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <input value={movie.maPhim} name="maPhim" onChange={handleChange} className="input-value" placeholder="Mã phim" />
                            <input value={movie.tenPhim} name="tenPhim" onChange={handleChange} className="input-value" placeholder="Tên phim" />
                            <input name="trailer" onChange={handleChange} className="input-value" placeholder="Trailer" />
                        </div>
                        <div className="col-6">
                            <input name="ngayKhoiChieu" onChange={handleChange} className="input-value" placeholder="Ngày khởi chiếu" />
                            <input value={movie.danhGia} name="danhGia" onChange={handleChange} className="input-value" placeholder="Đánh giá" />
                            <input name="hinhAnh" onChange={handleChange} type="file" className="input-value" placeholder="Hình ảnh" />
                        </div>
                    </div>
                    <div className="input-text">
                        <input value={movie.moTa} name="moTa" onChange={handleChange} className="input-value" placeholder="Mô tả" />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="back">
                                <Link to="/movie">trở lại</Link>
                            </div>
                        </div>
                        <div className="col-6">
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
