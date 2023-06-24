import PDF from './Whitepaper.pdf'
const Whitepaper = () => {

    return (
        <div className='fifth'>
            <div className='heading' style={{ overflow: 'hidden' }}>
                <h1>100% SECURE</h1>
                <p>
                    Contract fully audited by Coinsult and shown to be 100% secure. Team fully verified by Coinsult to ensure anti-rug and complete project security.
                </p>
                <div className='btn__container'>
                    <button onClick={() => window.open('https://github.com/Coinsult/solidity/blob/main/Coinsult_DogeRush_0x2d...30Db_Audit.pdf', '_blank')}>Audit</button>
                    <a href={'https://dogerush.gitbook.io/docs'} target='_blank' >Whitepaper</a>
                    <button onClick={() => window.open('https://coinsult.net/projects/doge-rush/', '_blank')}>KYC</button>
                </div>
            </div>
        </div>
    )
}

export default Whitepaper
