import React from 'react'
import Header from './Header'
import Home from './Home';
import About from './About';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

export default function App() {

    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/png" href="./image/appa.png" />
            </Helmet>
            <Header />
            <Home />
            <About />
            <Footer />
        
        </div>
    )
}
