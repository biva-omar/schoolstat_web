import axios from "axios"
import jwtDecode from 'jwt-decode'
import {getItem, addItem, removeItem } from './LocalStorage'

export  function hasAuthenticated(){
    const token = getItem('token')
    const isValid = token ? tokenIsValid(token) : false

    if(isValid === false){
        removeItem('token')
        removeItem('username')
    }

    return isValid
}

export async function login(credentients){
    return axios
        .post('http://localhost:8081/auth/sign-in',null , {headers: credentients})
        //.then(response => response.data.token)
        .then(
            response => {
                addItem('token', response.data.jwttoken)
                addItem('username', response.data.username)
                addItem('sessionId', response.data.sessionId)
                return true;
            }
        )
}


export async function logout(credentients){
    return axios
        .post('http://localhost:8081/auth/logout',null , {headers: credentients})
        //.then(response => response.data.token)
        .then(
            response => {
                removeItem('token')
                removeItem('username')
                removeItem('sessionId')
                localStorage.clear()
                return true;
            }
        )
}



function tokenIsValid(token){
    const { exp } = jwtDecode(token)

    if(exp > new Date().getTime() ){
        return true
    }
    return false
}