import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../store/slices/feedSlice';
import { useEffect } from 'react';
import UserCard from '../components/UserCard';

const Feed = () => {
    const base_url = import.meta.env.VITE_BASE_URL;
    const dispatch = useDispatch()
    const feeds = useSelector((store) => store.feed)
    // console.log(feeds)

    const getFeed = async () => { 
        try {
            const res = await axios.get(`${base_url}/feed`, { withCredentials: true })
            console.log(res)
            dispatch(addFeed(res.data))
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }

    useEffect(() => {
        getFeed()
    }, [])

    return (
        <div className='flex justify-center m-30'>
            <UserCard users={feeds} />
        </div>
    )
}

export default Feed