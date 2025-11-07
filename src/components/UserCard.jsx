import React from 'react'

const UserCard = ({ users }) => {
    console.log(users)
    return (
        users && users.map((user) => (
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src= {user.image}
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
        )
        )
    )
}

export default UserCard