import whyOne from '../../assets/images/why-1.png';
import whyTwo from '../../assets/images/why-2.png';
import whyThree from '../../assets/images/why-3.png';
import whyFour from '../../assets/images/why-4.png';
import star from '../../assets/images/star.svg';

export default function WhySection() {
	return (
		<section
			id='about-section'
			className='bg-pa-pink-light flex flex-col items-center'>
			<div className='w-full border-t-8 border-pa-pink' />
			<div className='flex relative w-fit flex-col pt-8 md:pt-24 items-center container'>
				<img
					src={star}
					className='absolute -left-48 md:-left-12 2xl:-left-48 top-12 w-12 h-12'
				/>
				<h1 className='text-3xl xs:text-4xl flex items-center flex-wrap gap-2 lg:text-6xl font-bold text-black'>
					Why <span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Polkassembly?</span>
				</h1>
				<p className='text-sm lg:text-xl w-[75%] font-semibold text-center mt-6 text-black'>Lets take a deep dive into the values that make Polkassembly the best governance platform for the DOT ecosystem.</p>
				<img
					src={star}
					className='absolute right-2 md:right-0 bottom-0 w-8 h-8 md:w-12 md:h-12'
				/>
			</div>
			<div className='container mx-4 xs:mx-12 md:mx-24 2xl:mx-48 mb-24 grid xl:grid-cols-2 justify-center items-center w-fit mt-8 md:mt-8 2xl:mt-12 gap-4'>
				{data.map(item => (
					<div
						key={item.id}
						className='rounded-3xl md:rounded-[40px] overflow-hidden border w-full md:h-full bg-white p-8 md:p-8 2xl:p-12 flex flex-col col-span-1 justify-start'>
						<p className='text-2xl mb-3 2xl:mb-8 font-bold text-[#666666]'>{item.id}</p>
						<div className='flex gap-8 2xl:gap-16 flex-col lg:flex-row items-start'>
							<img
								src={item.logo}
								className='w-24 md:w-28'
							/>
							<div className='flex flex-col gap-4'>
								<h3 className='text-2xl font-bold text-black'>{item.title}</h3>
								<p className='text-black  leading-7'>{item.content}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

const data = [
	{
		id: '01',
		title: 'Community-Driven: ',
		logo: whyOne,
		content: 'Polkassembly is built by the community, for the community. Your input and participation drive the evolution of the platform.'
	},
	{
		id: '02',
		title: 'Transparency: ',
		logo: whyFour,
		content: 'Every proposal, vote, and discussion is open for everyone to see and comment on which ensures transparency, trust and accountability. '
	},
	{
		id: '03',
		title: 'Engagement: ',
		logo: whyThree,
		content: 'With features like delegation, leaderboards, and a social timeline, Polkassembly fosters a vibrant and engaged community.'
	},

	{
		id: '04',
		title: 'Strategic Collaborations: ',
		logo: whyTwo,
		content: 'We actively seek and maintain partnerships with influential projects and leaders , ensuring  we remains at the forefront of innovation and growth.'
	}
];
