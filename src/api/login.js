import {request} from './request'
export function login(data){
    return request({
        url:'/consumer',
        method:'get',
        data,
    })
}