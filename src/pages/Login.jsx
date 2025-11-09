import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [emailId, setEmailId] = useState("dipti.chalke@gmail.com");
    const [password, setPassword] = useState("Dipti@123");
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${baseUrl}/login`, {
                emailId: emailId,
                password: password
            }, { withCredentials: true });
            // console.log(res.data);
            dispatch(addUser(res.data))
            return navigate("/feed")
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-4">

            <div className="card card-side bg-base-100 shadow-xl max-w-3xl p-4 rounded-xl">

                {/* Image */}
                <figure>
                    <img
                        className="w-60 h-full object-cover rounded-xl"
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Login visual"
                    />
                </figure>

                {/* Login form */}
                <div className="card-body">
                    <h2 className="text-2xl font-semibold mb-2">Welcome Back 👋</h2>
                    <p className="text-sm text-gray-500">
                        Please login to continue
                    </p>

                    <div className="flex flex-col gap-3 mt-3">
                        <input
                            type="email"
                            placeholder="Email"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            className="input input-bordered w-full"
                        />

                        <input
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <p className="text-red-500">{error}</p>

                    <div className="card-actions justify-end mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
