import Axios from 'axios';
import {DOMAIN_MOVIE} from './../util/contants/settingSystem';

export class mainService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: 'GET'
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: 'POST',
            data: model
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: 'DELETE'
        })
    }

    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: 'PUT',
            data: model
        })
    }
}
