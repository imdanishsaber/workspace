import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assests/tkf.mp4'
import AboutNft from '../components/AboutNft'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import MintGrid from '../components/MintGrid'
import NavigationSec from '../components/NavigationSec'
import Partners from '../components/Partners'
import RoadMapOne from '../components/RoadMapOne'
import TokenInfo from '../components/TokenInfo'
import Whitepaper from '../components/Whitepaper'
import '../scss/buttons.scss'
import '../scss/glitch.scss'
import '../scss/main.scss'
import PDF from './Whitepaper.pdf'
const Main = () => {
    const [navToggler, setNavToggler] = useState(false)
    const [height, setHeight] = useState()
    window.addEventListener('scroll', () => {
        setHeight((window.scrollY / 4918) * 100)
    })

    function barBtn() {
        setNavToggler(!navToggler)
    }
    const navigate = useNavigate()
    const dataRoadmap = [
        {
            id: 1,
            time: 'PHASE 1',
            list: [
                { text: 'Full Security audit' },
                { text: 'Develop game concept' },
                { text: 'Verification of all socials' },
                { text: 'Pre-sale website live' },
                { text: 'Pre-sale live' },
                { text: '10,000+ Telegram members' },
                { text: 'YouTube campaign' },
                { text: 'Massive PR Marketing campaigns' },
                { text: 'Sponsorships on crypto websites' },
            ],
            positon: 'left',
            style: 'normal',
        },
        {
            id: 2,
            time: 'PHASE 2',
            list: [
                {
                    text: 'Launch on Uniswap',
                },
                {
                    text: 'CMC & CG listing',
                },
                {
                    text: 'Tier 1 CEX listings',
                },
                {
                    text: 'Launch Dogehub',
                },
                {
                    text: 'Influencer marketing',
                },
                {
                    text: 'Launch Dogewin',
                },
            ],
            positon: 'right',
            style: 'normal',
        },
        {
            id: 3,
            time: 'PHASE 3',
            list: [
                {
                    text: 'Doge Rush NFT drop',
                },
                {
                    text: 'Third-Party Audits (Certik as the main one)',
                },
                {
                    text: 'Large focus on the CEX partnerships',
                },
                {
                    text: 'P2E leaderboard and giveaways',
                },
                {
                    text: 'Celebrity marketing',
                },
                {
                    text: 'YouTube shoutouts from known influencers',
                },
            ],
            positon: 'left',
            style: 'normal',
        },
        {
            id: 4,
            time: 'PHASE 4',
            list: [
                {
                    text: 'Doge Rush aims to be on all main exchanges',
                },
                {
                    text: 'Partnerships with top-tier gaming studios',
                },
                {
                    text: 'Expanding Doge Rush',
                },
            ],
            positon: 'right',
            style: 'normal',
        },
    ]

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <NavigationSec text={'JOIN NOW!'} />
            <section className='main'>


                <div className='container'>
                    <div className='grid'>
                        {/* <div className='btns__container'>
                            <button onClick={() => navigate('/home')}>
                                HOME
                            </button>
                            <button onClick={() => navigate('/buy')}>
                                Buy Now
                            </button>
                            <a href={PDF} style={{
                                fontSize: '18px',
                                fontFamily: '\'Barlow-medium\''
                            }}>Whitepaper</a>
                            <button onClick={() =>
                                window.open("https://t.me/dogerushcommunity", "_blank")
                            }>Telegram</button>
                        </div> */}
                        <div className='btn__box'>

                        </div>
                        <MintGrid />
                    </div>
                </div>
                {/* <p className='bottom'>
                    Copyright © 2022, Doge Rush | All Rights Reserved.
                </p> */}
            </section>
            <AboutNft />
            <div className='top__bg'>
                {/* <RoadMap  /> */}
                {/* <PlayEarn /> */}
                <RoadMapOne data={dataRoadmap} />
                {/* <Roadmap /> */}
                {/* <Token /> */}
                {/* <Teams /> */}
            </div>

            <Partners />
            <Whitepaper />
            <section className='steps'>
                <span></span>

                <div className='container'>
                    {/* <TokenInfo /> */}
                    {/* <SendMessage /> */}
                </div>
            </section>

            <Faq />

            <Footer />
        </>
    )
}

export default Main
