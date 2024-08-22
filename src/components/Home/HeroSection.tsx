import parachainsArr from '../parachainsArr';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { socialLinksUL } from './Footer';
import starPink from '../../assets/images/star-pink-2.svg';
import bgImage from '../../assets/images/bg-hero.svg';

export default function HeroSection() {
    return (
        <section>
            <div
                id='home-section'
                className='bg-hero-bg bg-cover bg-no-repeat bg-center lg:h-[804px] -mt-32 md:-mt-40 lg:-mt-60 relative'
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: window.innerWidth > 768 ? 'fit' : 'cover',
              }}
            >
                <div
                    id='hero-section'
                    className='h-[65vh] md:h-[80vh] flex justify-center items-center w-full pt-40 md:pt-20 md:mt-20'
                >

                    <div className='h-[312px] lg:h-[410px] flex lg:items-end relative z-10 '>
                        <img
                            src={starPink}
                            alt='star'
                            className='w-9 h-9 absolute  md:block -top-12 md:top-0 right-8'
                        />
                        <img
                            src={starPink}
                            alt='star'
                            className='w-9 h-9 absolute hidden md:block top-20 left-[25%]'
                        />
                        <div className='max-w-[1077px] flex flex-col items-center text-white'>
                            <h1 className='text-3xl xs:text-4xl lg:text-[50px] 2xl:text-[80px] font-bold text-black'>
                                The{' '}
                                <span className='bg-pa-pink rounded-md md:rounded-xl text-white px-2 py-1'>
                                    Ultimate Hub
                                </span>
                            </h1>
                            <h1 className='text-xl font-semibold lg:text-[34px] 2xl:text-[44px] mt-3 md:mt-8 2xl:mt-16 text-black'>
                                for Polkadot Governance
                            </h1>
                            <p className='text-md w-[80%] md:w-[55%] md:text-xl 2xl:text-2xl text-center mt-8 text-black'>
                                Welcome to Polkassembly, the premier platform for governance and
                                collaboration in the Polkadot ecosystem. Our mission is to empower
                                the community with the tools needed for effective decision-making
                                and engagement.
                            </p>

                            {socialLinksUL('text-black', 'w-6 h-6 mx-2', 'mt-[60px] md:mt-10')}
                        </div>
                        <img
                            src={starPink}
                            alt='star'
                            className='w-9 h-9 absolute md:block bottom-0 right-5 md:right-1/4'
                        />
                        <img
                            src={starPink}
                            alt='star'
                            className='w-7 h-7 absolute md:block bottom-4 md:bottom-[5%] left-12'
                        />
                    </div>
                </div>
                <div className='hidden md:block absolute bottom-0 left-0 w-full translate-y-1/2'>
                    <InfiniteMovingCards
                        items={parachainsArr}
                        speed='slow'
                        pauseOnHover={false}
                        type='logos'
                    />
                </div>
                <div className='md:hidden md:top-24 top-32 flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
                  <InfiniteMovingCards
                    items={parachainsArr}
                    speed='slow'
                    pauseOnHover={false}
                    type='logos'
                  />
                </div>
            </div>
        </section>
    );
}