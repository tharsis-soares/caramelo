import axios from 'axios'

const API_URL = 'https://intranet-teste.alibin.io/users/'

const login = (username, password) => {
    return axios
        .post(API_URL + 'signin', { username, password })
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem("user-teste-tharsis", JSON.stringify(response.data))
            }
        return response.data
        })
}

const logout = () => {
    localStorage.removeItem("user-teste-tharsis")
}

const register = (username, email, password) => {
    return axios
        .post(API_URL + 'signup', { username, email, password })
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user-teste-tharsis"))
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService