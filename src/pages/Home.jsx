import React from 'react'
import HomeLayouts from '../layouts/HomeLayouts'
import Hero from '../components/molecules/Hero'
import Collection from '../components/organisems/Collection'
import Newsletter from '../components/organisems/Newsletter'

export default function Home() {
    return (
        <>
            <HomeLayouts>
                <Hero />
                <Collection />
                <Newsletter />
            </HomeLayouts>
        </>
    )
}
