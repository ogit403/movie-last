import * as acType from './constant';
import Axios from 'axios';





// export const act_detailMovieAPI = (id) => {
//     return (dispatch) => {
//         dispatch(act_detailMovieRequest());

//         axios({
//             url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
//             method: "GET"
//         })
//         .then(res => dispatch(act_detailMovieSuccess(res.data)))
//         .catch(err => dispatch(act_detailMovieFailed(err)))
//     }
// }

// const act_detailMovieRequest = () => {
//     return {
//         type: actType.DETAIL_MOVIE_REQUEST,
//     }
// }

// const act_detailMovieSuccess = (data) => {
//     return {
//         type: actType.DETAIL_MOVIE_SUCCESS,
//         payload: data
//     }
// }

// const act_detailMovieFailed = (err) => {
//     return {
//         type: actType.DETAIL_MOVIE_FAILED,
//         payload: err
//     }
// }