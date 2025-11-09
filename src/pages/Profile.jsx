import React from 'react'
import EditProfile from '../components/EditProfile'
import { useSelector } from 'react-redux'
import UserCard from '../components/UserCard'

const Profile = () => {
    const user = useSelector((store) => store.user)

    return (
        user && (
            <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-12 py-10 px-6">
                <div className="w-full lg:w-[450px] flex justify-center">
                    <EditProfile user={user} />
                </div>

                <div className="w-full lg:w-[400px] flex justify-center">
                    <UserCard users={user} />
                </div>
            </div>
        )
    )
}

export default Profile
