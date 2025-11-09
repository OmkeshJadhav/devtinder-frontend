import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../store/slices/connectionSlice'

const Connections = () => {
    const base_url = import.meta.env.VITE_BASE_URL
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const connections = useSelector(store => store.connections)

    const getConenctions = async () => {
        try {
            const res = await axios.get(`${base_url}/user/connections`, { withCredentials: true })
            dispatch(addConnections(res.data.data))
            console.log(res.data.data)
        } catch (error) {
            setError(error.response.data)
        }
    }

    useEffect(() => {
        getConenctions()
    }, [])

    if (!connections) return

    if (connections.length === 0) return <h1>You have no connections. Please make new connections.</h1>

    return (
        <div className='text-center my-10'>
            <h1 className='text-bold text-2xl'>Connections</h1>

            {connections.map((connection) => {
                const { image, firstName, lastName, age, gender, about } = connection;
                return (
                    <div className='flex mx-auto my-4 p-4 max-w-3xl border rounded-lg bg-gray-100 '>
                        <div>
                            <img src={image} className='w-20 h-20 rounded-full' />
                        </div>
                        <div className='text-left ml-6'>
                            <h2 className='font-bold text-xl'>{firstName} {lastName}</h2>
                            <p>{age} - {gender}</p>
                            <p>{about}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Connections