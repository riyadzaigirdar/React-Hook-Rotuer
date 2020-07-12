import React from 'react'
import {
    Link
} from "react-router-dom";
import { useAxios } from '../Hooks/hooks';

function Home() {

    const url = 'https://5f0aedd05e512a00161c1984.mockapi.io/products'

    let response = useAxios(url).data


    if (response) {

        return (
            <div className="rounded overflow-hidden shadow-lg">
                {response.map((data, index) => {
                    return (
                        <div className="py-5" key={index}>
                            <img className="w-full" src={data.image} alt="loading..."></img>

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl">{data.name}</div>
                                <div className="py-4">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$ {data.price}</span>
                                </div>
                                <p className="text-gray-700 text-base">{data.description}</p>
                            </div>

                            <div className="flex justify-center">
                                <Link
                                    to={`/product/${data.id}`}
                                >
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        view
                                </button>
                                </Link></div>
                        </div>
                    )
                })}



            </div>
        )
    }

    return (
        <div className="w-full flex justify-center">
            <img src="https://i.imgur.com/UbwGglQ.gif" alt="loading..."></img>
        </div>
    )
}

export default Home