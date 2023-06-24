import BuyPageInfo from '../components/BuyPageInfo'
import Footer from '../components/Footer'
import MintGrid from '../components/MintGrid'
import NavigationSec from '../components/NavigationSec'
import '../scss/mint.scss'

const MintContainer = () => {
    return (
        <section className='mint'>
            <div className='container'></div>
        </section>
    )
}

const BuyPage = () => {
    const stylo = {
        background: '#113c5a',

    }
    window.scroll(0, 0)
    return (
        <>
            {/* <MintContainer /> */}
            <BuyPageInfo MintGrid={MintGrid} />

        </>
    )
}

export default BuyPage
