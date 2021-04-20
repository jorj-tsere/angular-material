// import { NotificationService } from '@crystal-one-services/notification.service';
// import requestPromise from 'request-promise';
// import { fetch } from 'isomorphic-fetch';
// import {fetch as fetchPolyfill} from 'whatwg-fetch';
// const requestPromise = require('request-promise');

import axios from 'axios';

export async function baseService<T = any>(method: string, url: string, data?: any, header?: Headers, hostname?: string) {

    const option: any = {
        withCredentials: true,
        // mode: 'cors',
        method: method,
        url: hostname ? hostname + url : localStorage.getItem('baseApiUrl') + url,
        headers: {
           Accept: 'application/json',
        },
    };

    if (header) {
        option.headers = header;
    }

    if (data instanceof FormData) {
        option.data = data;
    } else if (typeof data === 'object') {
        const formdata = new FormData();
        formdata.append('json_post', JSON.stringify(data));
        option.data = formdata;
    }

    let response = await axios(option)
        .then(res => {
            return res.data as Promise<T>;
        }).catch((error) => {
            if (error.response) {
                // console.log('Error Response: ', error.response);
                error.myBody = error.response.data;
                if (error.response.status === 401) {
                    // alert(error.myBody);
                    location.replace('/');
                }
                throw error;
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                error.myBody = 'The request was made but no response was received';
                // console.log('XHR response was not received. URL: ', (option.url.slice(BaseApiUrl.length, option.url.length) || ''));
                throw error;
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error Message: ', error.message);
            }
            throw error;
        });

    return response;
}
