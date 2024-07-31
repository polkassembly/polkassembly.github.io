import whyOne from '../../assets/images/why-1.svg';
import whyTwo from '../../assets/images/why-2.svg';
import whyThree from '../../assets/images/why-3.svg';
import whyFour from '../../assets/images/why-4.svg';
import star from '../../assets/images/star.svg';

export default function WhySection() {
	return (
		<section
			id='about-section'
			className='bg-pa-pink-light flex flex-col items-center'>
			<div className='w-full border-t-8 border-pa-pink' />
			<div className='flex relative w-fit flex-col pt-24 items-center container'>
				<img
					src={star}
					className='absolute -left-48 top-12 w-12 h-12'
				/>
				<h1 className='text-4xl flex items-center gap-2 lg:text-6xl font-bold text-black'>
					Why <span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Polkassembly?</span>
				</h1>
				<p className='text-sm lg:text-xl w-[75%] font-semibold text-center mt-6 text-black'>Lets take a deep dive into the values that make Polkassembly the best governance platform for the DOT ecosystem.</p>
				<img
					src={star}
					className='absolute right-2 md:-right-48 bottom-0 w-8 h-8 md:w-12 md:h-12'
				/>
			</div>
			<div className='container mx-8 md:mx-48 mb-24 grid md:grid-cols-2 justify-center items-center w-fit mt-24 gap-4'>
				{data.map(item => (
					<div
						key={item.id}
						className='rounded-3xl w-full h-[400px] bg-white p-12 flex flex-col col-span-1 justify-between'>
						<p className='text-xl font-bold text-black'>{item.id}</p>
						<img
							src={item.logo}
							className='w-32 h-32'
						/>
						<h3 className='text-2xl font-semibold text-black'>{item.title}</h3>
						<p className='text-sm text-black'>{item.content}</p>
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
		logo: whyTwo,
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
		logo: whyFour,
		content: 'We actively seek and maintain partnerships with influential projects and leaders in the Polkadot ecosystem, ensuring that our platform remains at the forefront of innovation.'
	}
];
