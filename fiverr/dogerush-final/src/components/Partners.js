import { partners } from '../assests/data'
import '../scss/partners.scss'
const Partners = () => {
    return (
        <>
            <section className='partners' id='partner'>
                <div className='heading'>
                    <h1 data-aos='fade-down' className='aos-init aos-animate'>
                        Featured In
                    </h1>
                </div>
                <div className='container'>
                    <div className='grid'>
                        {
                            partners.map((item, index) => {
                                return (
                                    <div className="img" style={{ cursor: 'pointer' }}>
                                        <img src={item.src} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners
