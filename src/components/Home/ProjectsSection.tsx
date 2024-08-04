import townhallLogo from '../../assets/projects/townhall.svg';
import polkasafeLogo from '../../assets/projects/polkasafe.svg';
import townhallBanner from '../../assets/images/projects-icon.svg';
import learnMore from '../../assets/images/project-arrow.svg';
import {Carousel} from '../ui/cards-carousel';

export default function ProjectsSection() {
	const cards = data.map((card, index) => (
		<div
			key={card.title}
			className='w-[250px] md:w-96 md:h-[300px] bg-[#F3F3F3] rounded-3xl flex flex-col justify-between gap-4  p-8 md:p-12'>
			<div className='text-2xl font-semibold flex gap-2'>
				<img
					src={card.logo}
					alt={card.title}
				/>
				<h1 className=''>{card.title}</h1>
			</div>
			<p className=''>{card.content}</p>

			<h1 className='text-xl text-black font-light flex items-center gap-2'>
				<img
					src={learnMore}
					alt='Learn More'
					className='w-8 h-8'
				/>
				Learn More
			</h1>
		</div>
	));
	return (
		<section
			id='projects-section'
			className='flex flex-col lg:flex-row lg:items-center justify-between lg:h-[80vh] mt-28 lg:mt-auto lg:ml-28'>
			<h1 className='text-4xl flex flex-col ml-8 lg:ml-auto lg:text-6xl font-bold text-black'>
				Polkassembly <span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Projects</span>
			</h1>
			<div className='ml-8 px-2 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]'>
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
		banner: townhallBanner,
		logo: townhallLogo,
		content: 'A glimpse into the best features on Polkassembly to elevate your governance experience.'
	},
	{
		title: 'Polkasafe',
		banner: townhallBanner,
		logo: polkasafeLogo,
		content: 'A glimpse into the best features on Polkassembly to elevate your governance experience.'
	},
	{
		title: 'Fellowship',
		banner: townhallBanner,
		logo: polkasafeLogo,
		content: 'A glimpse into the best features on Polkassembly to elevate your governance experience.'
	},

	{
		title: 'Polkassembly',
		banner: townhallBanner,
		logo: polkasafeLogo,
		content: 'A glimpse into the best features on Polkassembly to elevate your governance experience.'
	}
];
