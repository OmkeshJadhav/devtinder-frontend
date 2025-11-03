import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeLogIn = () => {

    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-4">

            <div className="card card-side bg-base-100 shadow-xl w-3xl p-4 rounded-xl">

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={hanldeLogIn}
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
