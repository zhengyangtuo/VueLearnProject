import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL:'http://localhost:8091',
        timeout:5000,

    })
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.interceptors.request.use(config => {
        return config;
    },err=>{
        console.log("request interceptors err =>",err);
        return err;
    })
    instance.interceptors.response.use(res => {
        console.log("request响应拦截=>",res.data);
        if (res.data.success == false)
        {
            console.log("非success,请重试");
        }
        return res ? res.data : res;
    },err=>{
        console.log("响应异常信息",err);
        throw err;
    })
    return instance(config)
}