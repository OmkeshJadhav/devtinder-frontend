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

            {/* <div className="stack stack-end size-20">
                <div className="border-base-content bg-base-100 border text-center">
                    
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={user.image}
                                alt="Photo" />
                        </figure>
                        <div className="card-body">
                            <div className=''>
                                <h2 className="card-title">{user.firstName} {user.lastName}</h2>
                                <p>Age: {user.age}</p>
                                <p>Skills: {user.skills?.join(', ')}</p>
                                <p>Location: {user.location}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Ignore</button>
                                <button className="btn btn-secondary">Interested</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> */}
        </div>
    )
}

export default Profile