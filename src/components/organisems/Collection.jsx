import React, { useState, useEffect } from "react";
import Card from '../molecules/Card'
import axios from "axios";

export default function Collection() {
    const [products, setProducts] = useState([]);
    const api_url = import.meta.env.VITE_API_URL;

    // USE FETCH
    // useEffect(() => {
    //     fetch(`${api_url}/products`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setProducts(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching products:", error);
    //         });
    // }, [api_url]);

    // USE AXIOS
    useEffect(() => {
        axios.get(`${api_url}/products`)
            .then((response) => {
                console.log('ini debug', response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [api_url]);

    return (
        <>
            <section class="pt-16 bg-[#FFFDF3]">
                <div class="container max-w-[1200px] mx-auto px-4 text-start">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Koleksi Video Pembelajaran Unggulan</h2>
                    <p class="text-gray-700 text-lg md:text-xl mb-10">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

                    <div class="flex justify-start space-x-7 mb-12 overflow-x-auto whitespace-nowrap">
                        <a href="#" class="text-red-500 font-semibold border-b-4 border-red-500 pb-2">Semua Kelas</a>
                        <a href="#" class="text-gray-500 hover:text-gray-900">Pemasaran</a>
                        <a href="#" class="text-gray-500 hover:text-gray-900">Desain</a>
                        <a href="#" class="text-gray-500 hover:text-gray-900">Pengembangan Diri</a>
                        <a href="#" class="text-gray-500 hover:text-gray-900">Bisnis</a>
                    </div>


                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    subtitle={product.subtitle}
                                    avatar={
                                        product.title
                                            ? `https://robohash.org/${product.title}.png?set=set2`
                                            : defaultAvatar
                                    }
                                    mentor={product.mentor}
                                    rolementor={product.rolementor}
                                    price={product.price ? `Rp${product.price}` : "Gratis"}
                                    photos={product.photos || "https://via.placeholder.com/300"}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Tidak ada produk tersedia.</p>
                    )}
                    <div class="mt-12 text-center">
                        <a href="#" class="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600">Lihat Semua Video</a>
                    </div>
                </div>
            </section>
        </>
    )
}
