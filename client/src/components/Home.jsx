import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Questions from './Questions'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Questions />
            <Footer />
        </div>
    )
}

export default Home