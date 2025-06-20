import React from 'react'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/avatar.png'

export default function Navbar() {
    return (
        <>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="h-6 md:h-8" />
                    <div className="relative flex items-center space-x-5 md:space-x-7">
                        <a href="#" className="text-gray-500 hover:text-gray-900 text-sm md:text-base">Kategori</a>
                        <div className="relative">
                            <img id="avatar" src={Avatar} alt="User Avatar"
                                className="h-8 w-8 md:h-12 md:w-12 rounded-md cursor-pointer" />
                            <div id="dropdown"
                                className="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Hi, user
                                </p>
                                <a href="./login.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</a>
                                <hr />
                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
