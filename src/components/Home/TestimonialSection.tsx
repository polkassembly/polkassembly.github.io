import whyOne from '../../assets/images/why-1.svg';
import star from '../../assets/images/star.svg';
import {InfiniteMovingCards} from '../ui/infinite-moving-cards';

export default function TestimonialSection() {
	return (
		<section
			id='testimonial-section'
			className='flex flex-col items-center'>
			<div className='flex relative w-fit flex-col pt-24 items-center container'>
				<img
					src={star}
					className='absolute right-24 top-12 w-12 h-12'
				/>
				<h1 className='text-3xl inline-flex items-center gap-2 lg:text-6xl font-bold text-black'>
					<span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Kind words</span> from DOT
				</h1>
				<h1 className='text-3xl inline-flex gap-2 lg:text-6xl font-bold text-black'>community</h1>
				<p className='text-sm lg:text-xl w-[50%] text-center mt-8 text-black'>Read through our testimonials to see why our clients love working with us and how we can help you achieve your business goals through creative and effective design.</p>
				<img
					src={star}
					className='absolute left-24 bottom-0 w-12 h-12'
				/>
			</div>
			<div className=' flex flex-col w-full mt-20 items-center justify-center relative overflow-hidden'>
				<InfiniteMovingCards
					items={data}
					speed='slow'
					type='cards'
					direction='right'
				/>
			</div>
		</section>
	);
}

const data = [
	{
		author: 'Alan Baker',
		designation: 'CEO of Redbird Company',
		image: whyOne,
		testimony: "Working with Polkassembly  has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
	},
	{
		author: 'Alan Baker',
		designation: 'CEO of Redbird Company',
		image: whyOne,
		testimony: "Working with Polkassembly  has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
	},
	{
		author: 'Alan Baker',
		designation: 'CEO of Redbird Company',
		image: whyOne,
		testimony: "Working with Polkassembly  has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
	},
	{
		author: 'Alan Baker',
		designation: 'CEO of Redbird Company',
		image: whyOne,
		testimony: "Working with Polkassembly  has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
	},
	{
		author: 'Alan Baker',
		designation: 'CEO of Redbird Company',
		image: whyOne,
		testimony: "Working with Polkassembly  has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
	}
];
