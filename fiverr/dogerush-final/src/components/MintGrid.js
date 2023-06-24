import { useCallback, useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import Web3 from 'web3'
import { chainIdToUse } from '../constants/chains'
import { AppContext } from '../context/AppContext'
import addressData from '../solidity/constants/addresses.json'
import { percentage, returnToZeroString, trimToDecimalPlaces } from '../utils'
import { handleSwitchChain } from '../utils/connection'
import {
    approveERC20IfNotApproved,
    presaleContract,
    sendTransaction,
    tokenContract,
    usdtContract,
} from '../utils/contracts'
import { parseProviderErrorMessage } from '../utils/errorHandlers'
import ReactGA from 'react-ga';
import img1 from "../assests/Doge.png";
import icon1 from '../assests/swap icons/ETH.png'
import icon3 from '../assests/swap icons/icon.png'
import icon2 from '../assests/swap icons/USDT.png'
import "../scss/mint.scss";
ReactGA.initialize(process.env.REACT_APP_TRACKER__CODE)
const topOption = [
    {
        value: 'ETH',
        label: 'ETH',
    },
    {
        value: 'USDT',
        label: 'USDT',
    },
]
const bottomOption = [
    {
        value: 'DR',
        label: 'DR',
    },
    {
        value: 'other',
        label: 'other',
    },
]


const initialInputValues = {
    source: '',
    destination: '',
}

const SOURCE_CURRENCY_INPUT = 'source-currency-input'
const DESTINATION_CURRENCY_INPUT = 'destination-currency-input'

const MAX_INVESTMENT = Web3.utils.toWei('1075000')

const MintGrid = () => {
    // const [img, setImg] = useState()
    const [selectedOptionTop, setSelectedOptionTop] = useState(topOption[0])
    // const [selectedOptionBottom, setSelectedOptionBottom] = useState()

    const {
        account,
        library,
        provider,
        connectWallet,
        getAccBalance,
        networkId,
    } = useContext(AppContext)

    const [totalInvestment, setTotalInvestment] = useState()

    const [ethPrice, setEthPrice] = useState()

    const [inputValues, setInputValues] = useState(initialInputValues)

    useEffect(() => {
        setInputValues(initialInputValues)
    }, [selectedOptionTop])

    const [balances, setBalances] = useState()

    const [lastUpdateTime, setLastUpdateTime] = useState(0)

    const [pending, setPending] = useState(false)
    const calculateTimeLeft = () => {
        const difference = new Date('2023-06-04') - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [time, setTime] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = num => {
        return num.toString().padStart(2, '0');
    };
    const loadTotalInvestment = async () => {
        const _totalInvestment = await presaleContract(chainIdToUse())
            .methods.totalInvestment()
            .call()

        setTotalInvestment(_totalInvestment)
    }

    useEffect(() => {
        ; (async () => {
            try {
                loadTokenPrices()
                loadTotalInvestment()
            } catch {
                // do nothing
            }
        })()
    }, [])

    const loadTokenPrices = useCallback(async () => {
        const notExpired = () => {
            const now = Date.now()
            return now - lastUpdateTime < 60 * 1e3 // 60 seconds
        }

        if (ethPrice && notExpired()) return ethPrice

        setLastUpdateTime(Date.now())

        const ethToUsd = await presaleContract(chainIdToUse())
            .methods.getLatestPrice()
            .call()

        const prices = { price: ethToUsd, decimal: 8 }

        setEthPrice(prices)

        return prices
    }, [lastUpdateTime])

    const convert = async (e) => {
        let { name, value } = e.target

        if (isNaN(value)) {
            return
        }

        const _prices = await loadTokenPrices()

        const ethToUsd = _prices.price / 10 ** _prices.decimal

        if (name === SOURCE_CURRENCY_INPUT) {
            setInputValues({
                source: value,
                destination: trimToDecimalPlaces(
                    selectedOptionTop?.label === 'USDT'
                        ? value * '181'
                        : value * (ethToUsd * 181),
                    18,
                ),
            })
        } else {
            setInputValues({
                source: trimToDecimalPlaces(
                    selectedOptionTop?.label === 'USDT'
                        ? value / 181
                        : value / (181 * ethToUsd),
                    18,
                ),
                destination: value,
            })
        }
    }

    const loadBalances = async () => {
        const { _hex: ETHBalance } = await getAccBalance()

        const tokenBalance = await tokenContract(chainIdToUse())
            .methods.balanceOf(account)
            .call()

        const USDTBalance = await usdtContract(chainIdToUse())
            .methods.balanceOf(account)
            .call()

        const user = await presaleContract(chainIdToUse())
            .methods.user(account)
            .call()

        const raisedBalance = user.lockedAmount

        const Web3 = require('web3')

        setBalances({
            ETHBalance,
            humanFriendlyEthBalance: trimToDecimalPlaces(
                Web3.utils.fromWei(ETHBalance),
                6,
                true,
            ),

            tokenBalance,
            humanFriendlyTokenBalance: trimToDecimalPlaces(
                Web3.utils.fromWei(tokenBalance),
                6,
                true,
            ),

            raisedBalance,
            humanFriendlyRaisedBalance: Web3.utils.fromWei(raisedBalance),

            USDTBalance,
            humanFriendlyUSDTBalance: trimToDecimalPlaces(
                Web3.utils.fromWei(USDTBalance, 'Mwei'),
                6,
                true,
            ),
        })
    }

    useEffect(() => {
        if (!library || !account) return

        loadBalances()
    }, [library, account])

    const max = (_input) => {
        if (!account || !balances) return
        if (_input === 'source') {
            let _sourceValue
            if (selectedOptionTop?.label === 'ETH') {
                _sourceValue = trimToDecimalPlaces(
                    Web3.utils.fromWei(balances.ETHBalance),
                    18,
                )
                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            } else if (selectedOptionTop?.label === 'USDT') {
                _sourceValue = trimToDecimalPlaces(
                    Web3.utils.fromWei(balances.USDTBalance, 'Mwei'),
                    18,
                )

                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            }

            convert({
                target: {
                    name: SOURCE_CURRENCY_INPUT,
                    value: _sourceValue,
                },
            })
        } else if (_input === 'destination') {
            let _destValue = trimToDecimalPlaces(
                Web3.utils.fromWei(balances.tokenBalance),
                18,
            )

            setInputValues((prev) => ({
                ...prev,
                destination: _destValue,
            }))

            convert({
                target: {
                    name: DESTINATION_CURRENCY_INPUT,
                    value: _destValue,
                },
            })
        }
    }

    const half = (_input) => {
        if (!account || !balances) return
        if (_input === 'source') {
            let _sourceValue
            if (selectedOptionTop?.label === 'ETH') {
                _sourceValue = trimToDecimalPlaces(
                    (Web3.utils.fromWei(balances.ETHBalance) / 2).toString(),
                    18,
                )
                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            } else if (selectedOptionTop?.label === 'USDT') {
                _sourceValue = trimToDecimalPlaces(
                    (
                        Web3.utils.fromWei(balances.USDTBalance, 'Mwei') / 2
                    ).toString(),
                    18,
                )
                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            }

            convert({
                target: {
                    name: SOURCE_CURRENCY_INPUT,
                    value: _sourceValue,
                },
            })
        } else if (_input === 'destination') {
            // TODO Use avaialble supply instead of balance

            let _destValue = trimToDecimalPlaces(
                (Web3.utils.fromWei(balances.tokenBalance) / 2).toString(),
                18,
            )

            setInputValues((prev) => ({
                ...prev,
                destination: _destValue,
            }))

            convert({
                target: {
                    name: DESTINATION_CURRENCY_INPUT,
                    value: _destValue,
                },
            })
        }
    }

    const handleBuy = async () => {
        ReactGA.event({ category: 'swap', action: 'main', label: 'swap' })
        setPending(true)
        try {
            if (!account) {
                throw new Error('You need to connect before you can purchase!')
            }

            if (!inputValues.source) {
                throw new Error('Please input a value to convert')
            }

            if (provider && networkId && +networkId !== +chainIdToUse()) {
                await handleSwitchChain(chainIdToUse(), provider)
            }
            if (selectedOptionTop.label === 'USDT') {
                const valueToSend = Web3.utils.toWei(
                    inputValues.source,
                    'ether',
                )

                await approveERC20IfNotApproved(
                    usdtContract(chainIdToUse(), library),
                    addressData.presale[chainIdToUse()],
                    Web3.utils.toWei(inputValues.source, 'Mwei'),
                    { from: account },
                )

                await sendTransaction(
                    presaleContract(
                        chainIdToUse(),
                        library,
                    ).methods.purchaseTokensWithStableCoin(valueToSend),
                    { from: account },
                )
            } else if (selectedOptionTop.label === 'ETH') {
                const valueToSend = Web3.utils.toWei(inputValues.source)

                await sendTransaction(
                    presaleContract(
                        chainIdToUse(),
                        library,
                    ).methods.purchaseTokensWithETH(),
                    { from: account, value: valueToSend },
                )
            }

            loadTotalInvestment()
            loadBalances()
            setInputValues(initialInputValues)
        } catch (error) {
            alert(parseProviderErrorMessage(error))
        }
        setPending(false)
    }


    return (
        <>
            <section className='mint__grid' id='buy'>
                <div className='container'>
                    <div className='about__grid'>
                        <div
                            data-aos='fade-up'
                            className='aos-init aos-animate details'
                        >

                            <div>
                                <div className="topper">
                                    <h2>STAGE 1 HAS STARTED</h2>
                                    <div className='timer' >
                                        <div>{formatTime(time.days)}d</div>
                                        <div>{formatTime(time.hours)}h</div>
                                        <div>{formatTime(time.minutes)}m</div>
                                        <div>{formatTime(time.seconds)}s</div>
                                    </div>
                                    <div className="line">
                                        <div className="color" style={{ width: `45%` }}>

                                        </div>
                                        <p>
                                            Until Next Price: $0.0057
                                        </p>
                                    </div>
                                    <p>
                                        USDT Raised: $
                                        {totalInvestment &&
                                            trimToDecimalPlaces(
                                                Web3.utils.fromWei(totalInvestment),
                                                2,
                                            )
                                            ? trimToDecimalPlaces(
                                                Web3.utils.fromWei(totalInvestment),
                                                2,
                                                true,
                                            )
                                            : '0.0'}{' '}
                                        / $
                                        {trimToDecimalPlaces(
                                            Web3.utils.fromWei(MAX_INVESTMENT),
                                            0,
                                            true,
                                        )}
                                    </p>
                                </div>
                                <p style={{
                                    padding: '10px 0px 9px',
                                    textAlign: 'center',
                                    width: '80%',
                                    margin: 'auto',
                                    lineHeight: '1.4',
                                    color: 'rgb(201, 210, 215)'
                                }}>1 $DR = 0.0055 USDT</p>
                                <div className="options__grid">

                                    <div className="item" onClick={() => setSelectedOptionTop(topOption[0])}>
                                        <div className="img">
                                            <img src={icon1} />
                                        </div>
                                        <span>
                                            {topOption[0].value}
                                        </span>
                                    </div>
                                    <div className="item" onClick={() => setSelectedOptionTop(topOption[1])}>
                                        <div className="img">
                                            <img src={icon2} />
                                        </div>
                                        <span>
                                            {topOption[1].value}
                                        </span>
                                    </div>
                                </div>
                                <div className='payment__header'>
                                    <div className='supply'></div>
                                </div>
                                <div className='grid__two'>
                                    <div className='payment__info'>

                                        <div className='top'>
                                            <p>Amount in ETH you pay</p>         <div className='end'>
                                                <button
                                                    onClick={() => max('source')}
                                                >
                                                    Max
                                                </button>
                                                <button
                                                    onClick={() => half('source')}
                                                >
                                                    Half
                                                </button>
                                            </div>
                                        </div>
                                        <div className='middle'>
                                            <div className='start'>
                                                <div className='logo'>
                                                    <img
                                                        src={
                                                            selectedOptionTop?.label ===
                                                                'USDT'
                                                                ? icon2
                                                                : icon1
                                                        }
                                                        alt=''
                                                    />
                                                </div>

                                            </div>
                                            <div className='mid'>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    onChange={convert}
                                                    name={SOURCE_CURRENCY_INPUT}
                                                    placeholder={`${selectedOptionTop?.label} amount`}
                                                    aria-label={`${selectedOptionTop?.label} amount`}
                                                    value={inputValues.source}
                                                    aria-describedby='basic-addon1'
                                                />
                                            </div>
                                        </div>
                                        <div className='top' style={{ padding: '5px' }}>
                                            <span>From</span>
                                            <span>
                                                Balance:&nbsp;
                                                {!account && 'Wallet not connected'}
                                                {selectedOptionTop?.label ==
                                                    'ETH' &&
                                                    account &&
                                                    returnToZeroString(
                                                        balances?.humanFriendlyEthBalance,
                                                    )}
                                                {selectedOptionTop?.label ==
                                                    'USDT' &&
                                                    account &&
                                                    returnToZeroString(
                                                        balances?.humanFriendlyUSDTBalance,
                                                    )}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='payment__info'>

                                        <div className='top'>
                                            <p>Amount in $DR you receive</p>
                                            <div className='end' style={{ opacity: '0', width: '0px' }}>
                                                <button
                                                    onClick={() =>
                                                        max('destination')
                                                    }
                                                >
                                                    Max
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        half('destination')
                                                    }
                                                >
                                                    Half
                                                </button>
                                            </div>
                                        </div>
                                        <div className='middle'>
                                            <div className='start'>
                                                <div className='logo'>
                                                    <img src={icon3} alt='' />
                                                </div>
                                            </div>
                                            <div className='mid'>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    onChange={convert}
                                                    name={
                                                        DESTINATION_CURRENCY_INPUT
                                                    }
                                                    placeholder={`DR amount`}
                                                    aria-label={`DR amount`}
                                                    value={
                                                        inputValues.destination
                                                    }
                                                    aria-describedby='basic-addon1'
                                                />
                                            </div>
                                        </div>
                                        <div className='top' style={{ padding: '5px' }}>
                                            <span>To</span>
                                            <span>
                                                Purchased:&nbsp;
                                                {account
                                                    ? returnToZeroString(
                                                        balances?.humanFriendlyRaisedBalance,
                                                    )
                                                    : 'Wallet not connected'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p
                                    style={{
                                        padding: '0px 0px 9px',
                                        textAlign: 'center',
                                        width: '80%',
                                        margin: 'auto',
                                        lineHeight: '1.4',
                                        color: '#c9d2d7'
                                    }}
                                >
                                    0.015 ETH is reserved for gas. The actual amount used will depend on the network.
                                </p>
                                {!account ? (
                                    <div
                                        onClick={async () => {
                                            window.scrollTo(0, 0)
                                            await new Promise((resolve) =>
                                                setTimeout(resolve, 1000),
                                            )
                                            connectWallet(true)
                                            ReactGA.event({
                                                category: 'Button',
                                                action: 'main',
                                                label: 'connect',
                                            })
                                        }}
                                        className='btns'
                                    >
                                        <button>CONNECT WALLET</button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={pending ? () => { } : handleBuy}
                                        className='btns'
                                    >
                                        <button>
                                            {pending ? 'PENDING...' : 'SWAP'}{' '}
                                        </button>
                                    </div>
                                )}
                                <p
                                    style={{
                                        padding: '15px 15px 0 15px',
                                        textAlign: 'center',
                                        width: '80%',
                                        margin: 'auto',
                                        lineHeight: '1.4',
                                    }}
                                >
                                    LISTING PRICE: $0.0099
                                </p>
                                {!account && (
                                    <p
                                        style={{
                                            color: 'rgb(201, 210, 215)',
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            marginTop: '16px',
                                        }}
                                    >
                                        Connect To Ethereum Wallet
                                    </p>
                                )}

                                {false && account && (
                                    <div
                                        className='offerCode'
                                        style={{
                                            display: 'flex',
                                        }}
                                    >
                                        <input
                                            style={{
                                                color: 'rgb(201, 210, 215)',
                                                fontWeight: '400',
                                                fontSize: '16px',
                                                margin: '16px auto auto auto',
                                            }}
                                            placeholder='Offer code?'
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MintGrid
