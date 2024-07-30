import react, {useState} from 'react';
import arrow from '../../assets/images/arrow-rounded-white.svg';
import {motion} from 'framer-motion';
const KeyFeaturesSection = () => {
	const [active, setActive] = useState<string>('01');

	return (
		<section
			id='features-section'
			className='py-28'>
			<div className='w-full border-t-8 py-20 border-pa-pink' />
			<div className='flex px-28 items-start justify-between'>
				<div className=''>
					<h1 className='text-3xl flex items-center gap-2 lg:text-6xl font-semibold text-black'>
						Key <span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Features</span>
					</h1>
					<p className='text-sm lg:text-xl text-left mt-6 text-black'>
						A glimpse into the best features on Polkassembly <br /> to elevate your governance experience.
					</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='80'
					height='80'
					viewBox='0 0 80 80'
					fill='none'>
					<path
						d='M40 0L46.7882 33.2118L80 40L46.7882 46.7882L40 80L33.2118 46.7882L0 40L33.2118 33.2118L40 0Z'
						fill='#E6007A'
					/>
				</svg>
			</div>
			<div className='grid mt-8 px-28 gap-8 grid-cols-12'>
				<div className='col-span-5 flex flex-col h-[600px] py-4 pr-2 overflow-y-auto gap-8'>
					{data.map(item => (
						<motion.div
							key={item.id}
							className={`${item.id === active ? 'bg-pa-pink-light border-pa-pink ' : 'bg-white  border-slate-400 cursor-pointer'} border p-8`}
							onClick={() => setActive(item.id)}
							initial={{scale: 0.95}}
							animate={{
								scale: item.id === active ? 1 : 0.95,
								borderRadius: item.id === active ? '1rem' : '9999px'
							}}
							transition={{duration: 0.3}}>
							<div className='flex justify-between items-center'>
								<h1 className={`text-xl ${item.id === active ? 'text-pa-pink' : 'text-black'} font-semibold`}>
									{item.id} <span className='text-black font-normal ml-1'>{item.title}</span>
								</h1>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='26'
									height='16'
									viewBox='0 0 26 16'
									fill='none'>
									<path
										d='M25.6892 8.70711C26.0797 8.31658 26.0797 7.68342 25.6892 7.29289L19.3252 0.928932C18.9347 0.538408 18.3015 0.538408 17.911 0.928932C17.5205 1.31946 17.5205 1.95262 17.911 2.34315L23.5678 8L17.911 13.6569C17.5205 14.0474 17.5205 14.6805 17.911 15.0711C18.3015 15.4616 18.9347 15.4616 19.3252 15.0711L25.6892 8.70711ZM0.982056 9H24.9821V7H0.982056V9Z'
										fill='black'
									/>
								</svg>
							</div>
							{item.id === active && (
								<motion.p
									className='text-base mt-4 text-black'
									initial={{opacity: 0, height: 0}}
									animate={{opacity: 1, height: 'auto'}}
									transition={{duration: 0.3}}>
									{item.description}
								</motion.p>
							)}
						</motion.div>
					))}
				</div>
				{active && (
					<div className='col-span-7 bg-pa-pink-light flex flex-col justify-between rounded-2xl p-8'>
						<div className='h-full w-full rounded-xl bg-gray-300'></div>
						<div className='flex items-center mt-8 justify-between'>
							<h1 className='text-xl text-black font-semibold'>{data.filter(item => item.id === active)[0].title}</h1>
							<img
								src={arrow}
								alt='arrow'
								className='w-12'
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

const data = [
	{
		id: '01',
		title: 'Delegation',
		description: "Easily delegate your voting power to trusted members within the community, ensuring your voice is always heard, even when you're not actively participating."
	},
	{
		id: '02',
		title: 'Leaderboard',
		description: 'Stay informed about the most active and influential contributors in the community. Recognize and follow top participants to stay updated on their activities and proposals.'
	},
	{
		id: '03',
		title: 'Voting',
		description: 'Participate in governance by voting on proposals that shape the future of the Polkadot ecosystem. Our intuitive voting interface makes it simple and transparent.'
	},
	{
		id: '04',
		title: 'Social Timeline',
		description: 'Engage with a dynamic social timeline where you can see updates, discussions, and interactions from the community. Share your thoughts, comment on proposals, and connect with like-minded individuals.'
	},
	{
		id: '05',
		title: 'Partnerships',
		description: 'Collaborate with key projects and influencers within the Polkadot ecosystem. Our platform highlights strategic partnerships that enhance functionality and foster innovation.'
	}
];

export default KeyFeaturesSection;
