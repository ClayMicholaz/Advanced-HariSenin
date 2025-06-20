import React from 'react'
import backgroundImage from '../../assets/images/background-board.jpg';
import LabelHeroSection from '../atoms/LabelHeroSection';

export default function Hero() {
    return (
        <>
            <section
                className="relative bg-cover bg-center py-16 rounded-xl overflow-hidden mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-6 md:mt-10 lg:mt-16"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <LabelHeroSection 
                    title = "Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
                    subtitle = "ini subtitle"
                />
            </section>
        </>
    )
}
