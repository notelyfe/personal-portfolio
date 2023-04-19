import axios from 'axios'

function getAccessToken() {
    const token = localStorage.getItem("access_token") || "";

    return token === "" ? null : token
}

const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})

export default api
export {
    getAccessToken
}