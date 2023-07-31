import React from 'react'
import AxiosClientLogin from '../common/AxiosClientLogin'

const LoginAPI = {
    logIn: async (params) => {
        console.log(params)
        // post bảo mặt hơn get, Get hiện thị thanh địa chỉ, Post ẩn địa chỉ đi
        //Post chuyền qua request Body(ẩn bên trong khi chuyền than số), Get chuyền qua urn
        const result = await AxiosClientLogin.post('/auth', {
            userName: params.username,
            passWord: params.password
        })
        return result;
    }
}

export default LoginAPI
