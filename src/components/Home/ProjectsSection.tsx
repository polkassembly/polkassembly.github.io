import townhallLogo from '../../assets/projects/townhall.svg';
import polkasafeLogo from '../../assets/projects/polkasafe.svg';
import polkassemblyLogo from '../../assets/images/pa-logo.svg';
import learnMore from '../../assets/images/project-arrow.svg';
import {Carousel} from '../ui/cards-carousel';

export default function ProjectsSection() {
	const cards = data.map((card, index) => (
		<div
			key={card.title}
			className='w-[250px] md:w-96 h-[265px] md:h-[300px] bg-[#FEF6FB] border border-[#F8BDDD] rounded-3xl flex flex-col justify-between gap-4  p-8 md:p-12'>
			<div className={`'text-2xl h-[24px] ${card.title === 'Polkassembly' && '-mt-4 -ml-2'} font-semibold flex gap-2'`}>
				<img
					src={card.logo}
					alt={card.title}
					className={`${card.title === 'Polkassembly' ? 'h-16' : 'h-8'}`}
				/>
				{/* <h1 className=''>{card.title}</h1> */}
			</div>
			<p className='text-sm md:text-base'>{card.content}</p>
			<a
				href={card.link}
				target='_blank'
				rel='noopener noreferrer'>
				<h1 className='text-base font-semibold md:text-xl text-black flex items-center gap-2'>
					<img
						src={learnMore}
						alt='Learn More'
						className='w-8 h-8'
					/>
					Learn More
				</h1>
			</a>
		</div>
	));
	return (
		<section
			id='projects-section'
			className='flex flex-col lg:flex-row lg:items-center justify-between lg:h-[80vh] mt-28 lg:mt-auto lg:ml-28'>
			<h1 className='text-4xl flex flex-col ml-8 lg:ml-auto lg:text-6xl font-bold text-black'>
				Polkassembly <span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Projects</span>
			</h1>
			<div className='md:ml-8 px-2 relative overflow-hidden '>
				<Carousel
					items={cards}
					type='projects'
				/>
			</div>
		</section>
	);
}

const data = [
	{
		title: 'Townhall',
		logo: townhallLogo,
		link: 'https://townhallgov.com/',
		content: 'One stop destination for on- chain and off-chain decision-making, treasury management, and fostering a thriving Web3 ecosystem. '
	},
	{
		title: 'Polkasafe',
		logo: polkasafeLogo,
		link: 'https://polkasafe.xyz/',
		content: 'Experience a new era of asset management with PolkaSafe. An all-improved MultiSig experience on the Polkadot Blockchain.'
	},
	{
		title: 'Polkassembly',
		logo: polkassemblyLogo,
		link: 'https://polkadot.polkassembly.io/',
		content: 'A glimpse into the best features on Polkassembly to elevate your governance experience.'
	}
	// {
	// 	title: 'Fellowship',
	// 	logo: polkassemblyLogo,
	// 	link: 'https://collectives.polkassembly.io/',
	// 	content: 'A glimpse into the best features on Polkassembly to elevate your governance experience.'
	// }
];
