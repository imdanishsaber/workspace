import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../scss/aboutnft.scss'
import img2 from "../assests/Images/DogeHub.webp";
import img3 from "../assests/New/dogewin.webp";
import img4 from "../assests/for about us.png"
const AboutNft = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 100,
        })
    }, [])

    return (
        <>
            {/* <div className="mar">
        <Marquee
          Reverse={false}
          speed={100}
          background="#fff"
          height="80px"
          gradient={false}
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <h1
                style={{
                  textTransform: "uppercase",
                  marginRight: "20px",
                  fontWeight: "700",
                  fontSize: "20px !important",
                  width: "400px",
                  color: "black",
                }}
              >
                Skeleton Shop
              </h1>
            );
          })}
        </Marquee>
      </div> */}
            <section id='about' className='about'>
                <div className='container'>
                    <h1>
                        <h1>Doge Rush</h1> - Gaming, Gaining, and Winning in the Crypto World
                    </h1>
                    <div className='about__grid first'>
                        <div
                            className='img aos-init aos-animate'
                            data-aos='zoom-out'
                            data-aos-delay='400'
                        >
                            <img src={img4} style={{
                                width: '100%',
                                borderRadius: '0px',
                                height: '500px',
                                objectFit: 'contain'
                            }} alt='' />
                        </div>
                        <div
                            data-aos='fade-up'
                            className='aos-init aos-animate details'
                        >
                            <div>
                                <div>
                                    <span>THE STORY</span>
                                </div>
                                <h1>The Ultimate   <h1 >Meme Coin</h1>Revolution</h1>
                            </div>
                            <p>
                                <span>
                                    Welcome to Doge Rush, the unstoppable force in the meme coin universe! We're smashing boundaries, fusing viral internet culture with real-world utilities. We're the first to do this. And who's leading the charge? Only the most iconic duo: Doge and Elon. Here, memes aren't just about fun; they're about strategic financial growth. We're creating an epic story, and you're invited to be part of it.
                                </span>

                            </p>
                            <div className='btns'>
                                <a
                                    style={{ display: 'inline-block' }}
                                    href='https://t.me/DogeRushCommunity'
                                    target={'_blank'}
                                    class='item-desc aos-init aos-animate'
                                    data-aos='notific-right'
                                >
                                    <button>Join Community</button>
                                </a>
                                <a
                                    style={{ display: 'inline-block' }}
                                    href='#buy'
                                    class='item-desc aos-init aos-animate'
                                    data-aos='notific-right'
                                >
                                    <button>Buy Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='about__grid even'>
                        <div
                            className='img aos-init aos-animate'
                            data-aos='zoom-out'
                            data-aos-delay='400'
                        >
                            <img src={img2} alt='' />
                        </div>
                        <div
                            data-aos='fade-up'
                            className='aos-init aos-animate details'
                        >
                            <div>
                                <div>
                                    <span>THE STORY</span>
                                </div>
                                <h1>Dive into <h1>DogeHub</h1> Turning Playtime into Paytime </h1>
                            </div>
                            <p>
                                <span>
                                    Imagine playing Subway Surfers, Sonic Dash, and Temple Run but with a thrilling twist: your favorite internet heroes, Doge and Elon, are the stars. That's DogeHub, our state-of-the-art gaming platform. But we're not just giving classic games a new face; we're changing the rules of the game. In DogeHub, your gaming skills translate into Doge Rush tokens. Play, score, earn - it's as simple and exciting as that!
                                </span>

                            </p>
                            <div className='btns'>
                                <a
                                    style={{ display: 'inline-block' }}
                                    href='https://t.me/DogeRushCommunity'
                                    target={'_blank'}
                                    class='item-desc aos-init aos-animate'
                                    data-aos='notific-right'
                                >
                                    <button>Join Community</button>
                                </a>
                                <a
                                    style={{ display: 'inline-block' }}
                                    href='#buy'
                                    class='item-desc aos-init aos-animate'
                                    data-aos='notific-right'
                                >
                                    <button>Buy Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='about__grid'>
                        <div
                            className='img aos-init aos-animate'
                            data-aos='zoom-out'
                            data-aos-delay='400'
                        >
                            <img src={img3} style={{ objectFit: 'cover' }} alt='' />
                        </div>
                        <div
                            data-aos='fade-up'
                            className='aos-init aos-animate details'
                        >
                            <div>
                                <div>
                                    <span>THE STORY</span>
                                </div>
                                <h1>Explore &nbsp;
                                    <h1>DogeWin</h1> The Ultimate Crypto Prize Arena
                                </h1>
                            </div>
                            <p>
                                <span>
                                    Here's where things get really exciting. DogeWin, our second utility, is a treasure trove of crypto rewards. Enter raffles, compete, and stand a chance to win enticing prizes. From sought-after NFTs to hefty amounts of ETH, the rewards are massive. Winning has never been more fun!

                                </span>
                                <span>
                                    Doge Rush isn't just another crypto project; it's a revolution. We're not just redefining meme coins; we're reshaping the crypto landscape. Become part of a project that merges fun, finance, and tech in ways never seen before. Join Doge Rush, and be part of the most exciting meme coin revolution.
                                </span>

                            </p>
                            <div className='btns'>
                                <a
                                    style={{ display: 'inline-block' }}
                                    href='https://t.me/DogeRushCommunity'
                                    target={'_blank'}
                                    class='item-desc aos-init aos-animate'
                                    data-aos='notific-right'
                                >
                                    <button>Join Community</button>
                                </a>
                                <a
                                    style={{ display: 'inline-block' }}
                                    href='#buy'
                                    class='item-desc aos-init aos-animate'
                                    data-aos='notific-right'
                                >
                                    <button>Buy Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutNft
