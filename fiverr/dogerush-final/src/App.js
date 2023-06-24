import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Claim from './pages/Claim'
import Disclaimer from './pages/Disclaimer'
import Main from './pages/Main'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './scss/normalize.css'
import './scss/reset.css'

import ReactGA from 'react-ga'
var Spinner = require('react-spinkit')
ReactGA.initialize(process.env.REACT_APP_TRACKER__CODE)
function App() {
    let [loading, setLoading] = useState(true)
    let [color, setColor] = useState('#fff')
    const containerRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    })
    return (
        <>
            <main>
                <Routes>
                    <Route exact path='/' element={<Main />} />

                    <Route path='/terms' element={<Terms />} />
                    <Route path='/privacy-policy' element={<Privacy />} />
                    <Route path='/disclaimer' element={<Disclaimer />} />
                    <Route path='/claim' element={<Claim />} />
                </Routes>
            </main>
        </>
    )
}

export default App
