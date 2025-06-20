import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({
    id,
    title,
    subtitle,
    avatar,
    mentor,
    rolementor,
    price,
    photos,
}) {
    return (
        <>
            <div className="bg-white rounded-lg border overflow-hidden">
                <Link to={`/product/${id}`}>
                    <img src={photos} alt="Course Image" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
                        <div className="flex items-center mb-4">
                            <img src={avatar} alt="avatar" className="w-10 h-10 mr-4" />
                            <div>
                                <p className="text-gray-900 font-medium">{mentor}</p>
                                <p className="text-gray-600 text-sm">{rolementor}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-yellow-500">
                                <span className="text-xl">★★★★☆</span>
                                <span className="text-gray-600">(30)</span>
                            </div>
                            <div className="text-green-500 font-bold">{price}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
