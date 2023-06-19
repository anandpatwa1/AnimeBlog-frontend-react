import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../features/auth/authSlice'
import { Navigate, useNavigate } from 'react-router-dom'

function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isSuccess, isLoading, isError, message, user } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { name, email, password } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }
    useEffect(() => {
        if (isError) {
            alert(message)
        }
        if (isSuccess || user) {
            navigate("/")
        }
    }, [isSuccess, isLoading, isError, message, user])
    if (isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="box">
                <div className="input-box">
                    <label htmlFor="name">Name</label>
                    <input name='name' value={name} onChange={handleChange} id='name' type="text" placeholder='Enter your name' />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input name='email' value={email} onChange={handleChange} id='email' type="email" placeholder='Enter your email' />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input name='password' value={password} onChange={handleChange} id='password' type="password" placeholder='Enter your password' />
                </div>
                <div className="btn">
                    <button type='submit'>Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
