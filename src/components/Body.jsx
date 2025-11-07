import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUser } from '../store/slices/userSlice'

const Body = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const userData = useSelector((store) => store.user)

    const fetchUser = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true })
            dispatch(addUser(res.data))
            navigate("/feed")
        } catch (error) {
            if(error.status === 401){
                navigate("/login")
            }
            console.log("ERROR: " + error)
        }
    }

    useEffect(() => {
        if (!userData) fetchUser();
    }, [])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body