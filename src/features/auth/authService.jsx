
import axios from 'axios'

const api_url = 'https://anand-techdom.onrender.com/api/user'

const registerUser = async (user) => {
    const res = await axios.post(api_url , user)
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