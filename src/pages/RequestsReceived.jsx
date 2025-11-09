import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../store/slices/requestsSlice'

const RequestsReceived = () => {
    const base_url = import.meta.env.VITE_BASE_URL
    const dispatch = useDispatch()
    const requests = useSelector(store => store.requests)
    const [error, setError] = useState(false)

    const getRequestsReceived = async () => {
        try {
            const res = await axios.get(`${base_url}/user/requests/received`, { withCredentials: true })
            dispatch(addRequests(res?.data?.data))
        } catch (error) {
            setError(error.response.data)
        }
    }

    useEffect(() => {
        getRequestsReceived()
    }, [])

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(`${base_url}/request/review/${status}/${_id}`, {}, { withCredentials: true })
            dispatch(removeRequest(_id))
        } catch (error) {
            setError(error.response.data)
        }
    }

    if (!requests) return;

    if (requests.length === 0) return <h1>No new requests available!</h1>

    return (
        <div className='text-center my-10'>
            <h1 className='text-bold text-2xl'>Requests Received</h1>

            {requests.map((request) => {
                const { _id, image, firstName, lastName, age, gender, about } = request.fromUserId;
                return (
                    <div key={_id} className='flex justify-between items-center mx-auto my-4 p-4 max-w-3xl border rounded-lg bg-gray-100 '>
                        <div className="flex items-center">
                            <img src={image} className='w-20 h-20 rounded-full' />
                            <div className='text-left ml-6'>
                                <h2 className='font-bold text-xl'>{firstName} {lastName}</h2>
                                <p>{age} - {gender}</p>
                                <p>{about}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <button
                                className="btn mx-2 flex items-center gap-2"
                                onClick={() => reviewRequest("accepted", request._id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19a108" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>                                Accept
                            </button>
                            <button
                                className="btn mx-2 flex items-center gap-2"
                                onClick={() => reviewRequest("rejected", request._id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f00000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                Reject
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RequestsReceived


