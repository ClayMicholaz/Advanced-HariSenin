import React from 'react'
import Logo from '../../assets/images/logo.png'

export default function Footer() {
    return (
        <>
            <footer className="bg-white py-8 border-t-[0.5px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-start space-y-8 lg:space-y-0">
                        <div className="w-full lg:w-1/3">
                            <img src={Logo} alt="Logo" className="h-6 md:h-8 mb-5" />
                            <p className="text-gray-600">Gali Potensi Anda Melalui <br /> Pembelajaran Video di hariesok.id</p>
                            <address className="text-gray-600 mt-2">
                                Jl. Usman Effendi <br /> No. 50 Lowokwaru, Malang +62-877-7123-1234
                            </address>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-wrap justify-between space-y-8 lg:space-y-0">
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h4 className="font-bold text-gray-900 mb-4">Kategori</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li><a href="#" className="hover:underline">Digital & Teknologi</a></li>
                                    <li><a href="#" className="hover:underline">Pemasaran</a></li>
                                    <li><a href="#" className="hover:underline">Manajemen Bisnis</a></li>
                                    <li><a href="#" className="hover:underline">Pengembangan Diri</a></li>
                                    <li><a href="#" className="hover:underline">Desain</a></li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h4 className="font-bold text-gray-900 mb-4">Perusahaan</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                                    <li><a href="#" className="hover:underline">FAQ</a></li>
                                    <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
                                    <li><a href="#" className="hover:underline">Ketentuan Layanan</a></li>
                                    <li><a href="#" className="hover:underline">Bantuan</a></li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <h4 className="font-bold text-gray-900 mb-4">Komunitas</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li><a href="#" className="hover:underline">Tips Sukses</a></li>
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                </ul>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
