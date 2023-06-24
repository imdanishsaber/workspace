import React, { useEffect } from "react"
import Footer from '../components/Footer'
import NavigationSec from '../components/NavigationSec'
import SendMessage from '../components/SendMessage'
import TokenInfo from '../components/TokenInfo'
import '../scss/claim.scss'
import '../scss/steps.scss'
const Claim = () => {
    const stylo = {

    }
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <NavigationSec />
            <section className='steps'>
                <span></span>
                <div className='container'>
                    <div className='heading'>
                        <h1 style={{ marginTop: "100px" }}>CLAIM YOUR DOGE RUSH TOKENS</h1>
                        <p >
                            Pre-sale is now under progress. You can use this page to claim your purchased $DR tokens. Hit the connect wallet button below, and you’ll be able to see your claimable token balance. Once you’ve connected your wallet, hit claim and authorise the transaction. You can use the token information to track your $DR in your wallet.</p>
                        <button style={{
                            background: '#13c0b8',
                            border: '0',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer',
                            height: '50px',
                            justifySelf: 'self-end',
                            textTransform: 'uppercase',
                            transition: 'all .3s',
                            width: '100%',
                            margin: '15px auto',
                            maxWidth: '205px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>CONNECT WALLET
                        </button>
                    </div>
                    <TokenInfo />
                    <SendMessage />
                </div>
            </section>
            <Footer stylo={stylo} />
        </>
    )
}

export default Claim
