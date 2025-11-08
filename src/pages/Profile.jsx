import React from 'react'
import EditProfile from '../components/EditProfile'
import { useSelector } from 'react-redux';
import UserCard from '../components/UserCard';

const Profile = () => {
    const user = useSelector(store => store.user)

    return (
        user && 
        <div className='flex justify-center my-20 mx-auto'>
            <EditProfile user={user}/>

            <UserCard users={user}/>
        </div>
    )
}

export default Profile