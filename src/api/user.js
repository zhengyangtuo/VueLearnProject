import {request} from './request'

//获取全部用户
export function getAllUser(){
    return request({
        url:'/user',
        method:'get',
    });
}
//根据单个id查询用户
export function selectById(id){
    return request({
        url:'/user/'+id,
        method:'get',
    });
}
//更新用户信息
export function updateById(user){
    return request({
        url:'/user',
        method:'put',
        data:user,
    });
}
//增加用户信息
export function addUser(user){
    return request({
        url:'/user',
        method:'post',
        data:user,
    });
}
//删除用户信息
export function deleteUser(id){
    return request({
        url:'/user/'+id,
        method:'delete',
    });
}