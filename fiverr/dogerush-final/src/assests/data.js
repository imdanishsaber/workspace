import partner1 from "./Images/yt/media-15.svg"
import partner2 from "./Images/yt/media-19.svg"
import partner3 from "./Images/yt/media-2.svg"
import partner4 from "./Images/yt/media-20.svg"
import partner5 from "./Images/yt/media-21.svg"
import partner6 from "./Images/yt/media-7.svg"
import partner7 from "./Images/yt/media-9.svg"

export const nav = [
    {
        name: 'About',
        path: 'home#about',
        ref: 'nav2',
    },
    {
        name: 'Roadmap',
        path: 'home#roadmap',
        ref: 'nav1',
    },

    {
        name: 'Featured In ',
        path: 'home#partner',
        ref: 'nav4',
    },

    {
        name: 'FAQs',
        path: 'home#faq',
        ref: 'nav4',
    },
]
function name() {
    return <a href='https://DogeRush.io/Audit'>https://DogeRush.io/Audit</a>
}
export const roadmap = [
    {
        id: '01',
        points: [],
        date: '2022',
        img: '/images/roadmap/1.png',
    },
    {
        id: '01',
        points: [],
        date: '2022',
        img: '/images/roadmap/1.png',
    },
    {
        id: '01',
        points: [],
        date: '2022',
        img: '/images/roadmap/1.png',
    },

    {
        id: '01',
        points: [],
        date: '2022',
        img: '/images/roadmap/1.png',
    },
]

export const Nfts = [
    '/images/nft/1.png',
    '/images/nft/2.png',
    '/images/nft/3.png',
    '/images/nft/4.png',
    '/images/nft/5.png',

    '/images/nft/7.png',
    '/images/nft/8.png',
    '/images/nft/5.png',
    '/images/nft/10.png',
]

export const FAQ = [
    {
        q: 'What Is Doge Rush?',
        ans: [
            "Doge Rush is a revolutionary meme coin that redefines the concept of digital currencies. Unlike other meme coins, Doge Rush offers real-world utility to its holders. It combines the appeal of viral internet culture with opportunities for financial growth and gaming entertainment, starring the internet's favorite duo: Doge and Elon. In the world of Doge Rush, meme coins aren't just fun – they're strategic investments. We've crafted two core utilities for our community: DogeHub, our gaming platform, and DogeWin, our platform for winning exciting crypto prizes. Doge Rush isn't just another crypto coin; it's an experience and an opportunity for fun, growth, and victory in the meme coin universe.   ",
        ],
    },
    {
        q: 'What Is Doge Rush Token?',
        ans: ['$DR is governance token of Doge Rush, All future activities on Doge Rush ecosystem will be done via $DR token.'],
    },
    {
        q: 'Where Can I Buy Doge Rush Token?',
        ans: [
            'Currently $DR is on presale stage and can be bought on Doge Rush website: https://dogerush.io',
        ],
    },
    {
        q: 'How Can I Buy $DR Token?',
        ans: ["Follow the below steps: Step - 1 Connect your Metamask or Trust Wallet Connect with https://dogerush.io Step- 2 Enter the amount you want to purchase and click on Buy Now. Step - 3 Your wallet provider will ask you to confirm the transactions 1st confirmation is for the Gas Fee and 2nd confirmation will be for Token Purchase, you need to approve both. Step - 4 You have successfully bought $DR Token's presale."],
    },

    {
        q: 'Where Will I Receive $DR Tokens? ',
        ans: [' $DR tokens can be claimed once presale is finalized. In the same wallet that was used to buy $DR Presale.'],
    },
    {
        q: 'When Will I Receive $DR Tokens?',
        ans: ['Users can claim $DR tokens from https://dogerush.io once presale is finalized.'],
    },
    {
        q: 'Is There Any Vesting For Doge Rush Tokens?',
        ans: ['No, all bought tokens will be available for users to claim once presale is finalized.'],
    },
    {
        q: 'What Are Presale Stages? ',
        ans: ["The Doge Rush presale will occur in multiple stages, with the price of $DR tokens increasing after each stage's hard cap has been reached."],
    },
]

export const team = [
    {
        name: 'Manoj Aryal',
        position: 'Co-Founder - Content writer and community manager',
        path: '/images/team/photos/Manoj Aryal.png',
        insta: 'https://www.instagram.com/the_traveling_diary_tour/?hl=en',
        linkedin: 'https://www.linkedin.com/in/manoj-aryal-0a42ba221/',
        twitter: 'https://twitter.com/manojaryal25',
        desc: 'Content writer and community manager with more than six years of experience in helping companies build loyal communities and communicate knowledge through the power of words.',
    },
    {
        name: 'Ripon Das',
        position: 'Co-Founder - Head of Marketing',
        path: '/images/team/photos/Ripon Das.png',
        insta: false,
        linkedin: 'https://www.linkedin.com/in/ripon-das-59b62022a/',
        twitter: 'https://twitter.com/riponk',
        desc: 'Digital marketing professional with over 13 years of experience facilitating communications between brands and customers.',
    },
    {
        name: 'Dr. Kumar Abhishek',
        position: 'Business advisor',
        path: '/images/team/photos/Dr. Kumar Abhishek.png',
        insta: false,
        linkedin: 'https://www.linkedin.com/in/dr-kumar-abhishek-aa4a5714/',
        twitter: false,
        desc: "With over 30+ years of experience in various business domains (Finance, Manufacturing, IT, Banking) and having transformed many companies to improve the business and customer experience, the passion for digitalization is still his first love. Dr.Abhishek Kumar has authored books on Professional Ethics, Materials & Logistics Management, Industrial Economics, and Principles of Management and co - authored a book on quantitative analysis.He was a visiting faculty to various management and IT institutions in Pune, India.He has earned two master's degrees in IT and Management and holds multiple industry certifications like PMP, TOGAF, IT4IT, ITIL, and SIAM, apart from Doctorate in Finance.",
    },

    {
        name: 'Harshal Rukhaiyar',
        position: 'Collaborator ',
        path: '/images/team/photos/Harshal Rukhaiyar .png',
        insta: false,
        linkedin: 'https://www.linkedin.com/in/harshal-rukhaiyar/',
        twitter: false,
        desc: 'Passionate about finding tangible solutions to global issues, Harshal has consulting experience in IT recruitment in Finland as the owner of HVR consulting. He is the lead for Google DSC at Kenyon College, USA, bridging the gap between learning and project building using google technologies. And the Co-founder of HADEN Tech Hub, which empowers education in deprived regions. He has expertise in quantitative and qualitative approaches to problem-solving through his experiences.',
    },
]
export const collection = [
    {
        name: 'add_character',
        id: 1,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/add_character.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'beastboy',
        id: 2,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/beastboy.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },

    {
        name: 'boss 2',
        id: 3,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/boss 2.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'deku',
        id: 4,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/deku_final.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'drax',
        id: 5,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/drax.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'gothic',
        id: 6,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/gothic.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },

    // {
    //   name: "Big Boy",
    //   id: 7,
    //   desc: "An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.",

    //   path: "/images/characters/Big Boy.png",
    //   power: [
    //     {
    //       name: "strength",
    //       val: 70,
    //     },
    //   ],
    // },
    {
        name: 'leaning_char',
        id: 8,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/leaning_char.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'leon',
        id: 9,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/leon.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },

    {
        name: 'minions 1',
        id: 10,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/minions 1.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'minions 2',
        id: 11,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/minions 2.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'minions 3',
        id: 12,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/minions 3.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'ninja_final',
        id: 13,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/ninja_final.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'school girl',
        id: 14,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/school girl.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
    {
        name: 'trunks_final',
        id: 15,
        desc: 'An experienced graphic designer who has developed original IP with a diverse range of brands from indie collectives to creative projects.',

        path: '/images/characters/trunks_final.png',
        power: [
            {
                name: 'strength',
                val: 70,
            },
        ],
    },
]
export const Partners_1 = [
    '/images/partners/partner-1.png',
    '/images/partners/partner-2.png',
    '/images/partners/partner-3.png',
    '/images/partners/partner-4.png',
    '/images/partners/partner-5.png',
    '/images/partners/partner-6.png',
]
export const partners = [
    {
        src: partner1,
        link: ""
    },
    {
        src: partner2,
        link: ""
    },
    {
        src: partner3,
        link: ""
    },
    {
        src: partner4,
        link: ""
    },
    {
        src: partner5,
        link: ""
    },
    {
        src: partner6,
        link: ""
    },
    {
        src: partner7,
        link: ""
    },
]
