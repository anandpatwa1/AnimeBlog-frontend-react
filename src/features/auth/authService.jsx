
import axios from 'axios'

const api = '/api/user'

const registerUser = async (user) => {
    const res = await axios.post(api , user)
    if(res.data){
        localStorage.setItem('user' , JSON.stringify(res.data))
    }
    console.log(res.data);
    console.log(res);
    return res.data
}

const loginUser = async (user) => {
    const res = await axios.post(api + '/login', user)
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    console.log(res.data);
    return res.data
}

const authService = {
    registerUser,
    loginUser
}

export default authService