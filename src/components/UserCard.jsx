import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../store/slices/feedSlice';

const UserCard = ({ users }) => {
    const userList = Array.isArray(users) ? users : [users];
    const base_url = import.meta.env.VITE_BASE_URL;
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    const handleRequests = async (status, _id) => {
        try {
            await axios.post(`${base_url}/request/send/${status}/${_id}`, {}, { withCredentials: true });
            dispatch(removeUserFromFeed(_id));
        } catch (error) {
            setError(error.response?.data || 'Something went wrong');
        }
    };

    return (
        <div className="relative w-96 h-[500px] mx-auto ">
            {userList.map((user, index) => {
                const { _id, image, firstName, lastName, age, skills, location } = user;
                const offset = index * 6; // space between stacked cards

                return (
                    <div
                        key={_id}
                        className="absolute inset-0 transition-all duration-300"
                        style={{
                            transform: `translateY(${offset}px)`,
                            zIndex: userList.length - index,
                            filter: index === userList.length - 1 ? 'none' : 'brightness(90%)',
                            opacity: index === userList.length - 1 ? 1 : 1,
                        }}
                    >
                        <div className="card bg-base-200 border shadow-lg hover:shadow-xl h-full">
                            <figure className="p-4">
                                <img
                                    src={image}
                                    alt={`${firstName} ${lastName}`}
                                    className="rounded-xl h-60 w-full object-contain"
                                />
                            </figure>
                            <div className="card-body text-center text-neutral">
                                <h2 className="card-title justify-center text-primary">
                                    {firstName} {lastName}
                                </h2>
                                <p className="text-base-content/80">Age: {age}</p>
                                <p className="text-base-content/80">Skills: {skills?.join(', ')}</p>
                                <p className="text-base-content/80">Location: {location}</p>

                                <div className="card-actions justify-center mt-4">
                                    <button
                                        className="btn btn-sm bg-purple-700 hover:bg-purple-800 text-secondary"
                                        onClick={() => handleRequests('ignored', _id)}
                                    >
                                        Ignore
                                    </button>
                                    <button
                                        className="btn btn-sm bg-purple-700 hover:bg-purple-800 text-primary"
                                        onClick={() => handleRequests('interested', _id)}
                                    >
                                        Interested
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserCard;
