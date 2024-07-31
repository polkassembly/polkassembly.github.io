import parachainsArr from '../parachainsArr';
import {InfiniteMovingCards} from '../ui/infinite-moving-cards';
import {socialLinksUL} from './Footer';

export default function HeroSection() {
	return (
		<section className='bg-hero-bg bg-cover bg-no-repeat bg-center'>
			<div
				id='hero-section'
				className='h-[60vh] md:h-[75vh] md:-mt-24 flex justify-center items-center w-full'>
				<div className='h-[500px] flex lg:items-end relative z-10 mt-32'>
					<div className='ml-4 mt-16 mb-16 lg:mb-32 flex flex-col items-center text-white'>
						<h1 className='text-3xl lg:text-6xl font-bold text-black'>
							The <span className='bg-pa-pink rounded-xl text-white px-2'>Ultimate Hub</span>
						</h1>
						<h1 className='text-xl lg:text-3xl mt-6 text-black'>for Polkadot Governance</h1>
						<p className='text-sm lg:text-xl text-center mt-6 text-black'>
							Welcome to Polkassembly, the premier platform for governance and collaboration in the Polkadot <br /> ecosystem. Our mission is to empower the community with the tools needed for effective <br /> decision-making and engagement.
						</p>

						{socialLinksUL('text-black', 'w-6 h-6', 'mt-4')}
					</div>
				</div>
			</div>
			<div className='-mt-24 top-16 flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
				<InfiniteMovingCards
					items={parachainsArr}
					speed='slow'
					pauseOnHover={false}
					type='logos'
				/>
			</div>
		</section>
	);
}
