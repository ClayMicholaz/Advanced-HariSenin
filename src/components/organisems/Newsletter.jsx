import React from "react";
import backgroundImage from "../../assets/images/background-board.jpg";

export default function Newsletter() {
    return (
        <>
            <section
                className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16 mb-10"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="relative container mx-auto px-4 md:px-6 lg:px-10 pt-12 text-center text-white">
                    <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                        NEWSLETTER
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Mau Belajar Lebih Banyak?
                    </h1>
                    <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br />{" "}
                        penawaran spesial dari program-program terbaik hariesok.id
                    </p>
                    <div className="relative w-full max-w-[500px] mt-8 gap-2 flex mx-auto">
                        <input
                            type="text"
                            placeholder="Masukkan Emailmu"
                            className="w-full py-2.5 pr-12 pl-2.5 border border-gray-300 rounded-md outline-none"
                        />
                        <button className="absolute top-0 right-0 h-[80%] mt-1 mr-1 px-4 bg-[#FFBD3A] text-white rounded-lg cursor-pointer hover:bg-orange-600">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
