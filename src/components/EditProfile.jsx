import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from "../store/slices/userSlice"

const EditProfile = ({ user }) => {
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender)
    const [image, setImage] = useState(user.image);
    const [password, setPassword] = useState("Omkesh@123");
    const [skills, setSkills] = useState(user.skills);
    const [about, setAbout] = useState(user.about);
    const [error, setError] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const base_url = import.meta.env.VITE_BASE_URL;
    const dispatch = useDispatch()

    const handleProfileUpdate = async () => {
        setError(false)
        try {
            const res = await axios.patch(`${base_url}/profile/edit`, { gender, image, skills, age, about }, { withCredentials: true })
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000)
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-4">

                <div className="card card-side bg-base-100 shadow-xl min-w-xl p-4 rounded-xl">

                    <div className="card-body">
                        <h2 className="text-2xl font-semibold mb-2">Update Profile</h2>

                        <div className="form-control flex flex-col gap-3 mt-3">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={`${user.firstName} ${user.lastName}`}
                                className="input input-bordered w-full"
                                disabled
                            />

                            <label className="label">
                                <span className="label-text font-medium">Gender</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="input input-bordered w-full"
                            />

                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={user.emailId}
                                className="input input-bordered w-full"
                                disabled
                            />

                            <label className="label">
                                <span className="label-text font-medium">Age</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="input input-bordered w-full"
                            />

                            <label className="label">
                                <span className="label-text font-medium">Image</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="input input-bordered w-full"
                            />

                            {/* <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                        /> */}

                            <label className="label">
                                <span className="label-text font-medium">Skills</span>
                            </label>
                            <input
                                type="text"
                                placeholder="text"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                className="input input-bordered w-full"
                            />

                            <label className="label">
                                <span className="label-text font-medium">About</span>
                            </label>
                            <input
                                type="text"
                                placeholder="text"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <p className="text-red-500">{error}</p>

                        <div className="card-actions justify-end mt-4">
                            <button
                                className="btn btn-primary"
                                onClick={handleProfileUpdate}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-info">
                    <span>{`${user.firstName}, your profile updated successfully`}</span>
                </div>
            </div>}
        </>
    )
}

export default EditProfile