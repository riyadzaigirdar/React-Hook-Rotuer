import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../Hooks/hooks'


function Product() {
    const { id } = useParams()
    const url = `https://5f0aedd05e512a00161c1984.mockapi.io/products/${id}`

    let response = useAxios(url)

    if (response.loading) {
        return (
            <div className="w-full flex justify-center">
                <img src="https://i.imgur.com/UbwGglQ.gif" alt="loading..."></img>
            </div>
        )
    }

    if (response.error) {
        return (
            <div className="w-full flex justify-center">
                <p>There has been a problem </p>
            </div>
        )
    }

    if (response.data) {
        return (
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={response.data.image} alt="loading..."></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{response.data.name}</div>
                    <p className="text-gray-700 text-base">{response.data.description}</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{response.data.price}</span>

                </div>
            </div>
        )
    }

    return (

        <div className="w-full flex justify-center">
            <img src="https://i.imgur.com/UbwGglQ.gif" alt="loading..."></img>
        </div>

    )


}

export default Product