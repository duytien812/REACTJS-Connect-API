import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoid, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoid}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}
