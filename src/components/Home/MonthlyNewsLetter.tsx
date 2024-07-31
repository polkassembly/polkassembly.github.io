import React, {useEffect, useState} from 'react';
import NewsLetter from '../../assets/images/bg-monthly-newsletter.png';
import {Carousel} from '../ui/cards-carousel';
import arrow from '../../assets/images/arrow-diagonal.svg';

export default function MonthlyNewsLetter() {
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [coverImage, setCoverImage] = useState<string>('');
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const fetchFeed = async () => {
			try {
				const url = 'https://substackapi.com/api/feeds/polkassembly.substack.com?limit=3&sort=new';
				const response = await(await fetch(url)).json();
				console.log('respo', response);
				if (response.length >= 3) {
					setData(response);
				}
				setTitle(response.title);
				setText(response.truncated_body_text);
				setCoverImage(response.cover_image);
			} catch (error) {
				console.error('Error fetching RSS feed:', error);
			}
		};
		fetchFeed();
	}, []);

	const cards = data.map(news => (
		<div
			key={news?.id}
			className='container mt-20 h-64 p-1 flex drop-shadow-md rounded-[50px] overflow-hidden flex-col md:flex-row  md:h-[500px] w-[600px] bg-white'>
			<div
				className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-[40px] z-20 flex flex-col justify-end p-[24px] md:p-[36px] gap-[24px] md:gap-[18px]`}
				style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0), transparent 100%), url(${news?.cover_image || NewsLetter})`}}>
				<div>
					<h1 className='line-ellipsis-2 text-white text-lg lg:text-[22px] font-medium mb-[8px] md:mb-[18px]'>{news.title}</h1>
					{/* <p className='line-ellipsis-5 text-white text-md lg:text-lg font-normal'>{news?.truncated_body_text}</p> */}
					<div className='flex gap-4 items-center'>
						<img
							src={arrow}
							className='w-9 h-9 rounded-full p-2 bg-white'
							alt='arrow'
						/>
						<span className='text-white text-sm lg:text-lg font-normal'> Learn more</span>
					</div>
				</div>
			</div>
		</div>
	));

	return data.length ? (
		<section className='my-28 mx-4 md:mx-20'>
			<div className='flex justify-between w-full items-center'>
				<h1 className='text-3xl flex items-center gap-2 lg:text-6xl font-bold text-black'>
					<span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Polkadot</span> News
				</h1>
				<button className='bg-white text-pa-pink rounded-full border border-pa-pink p-4 flex text-sm items-center gap-2'>
					See More
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='21'
						height='8'
						viewBox='0 0 21 8'
						fill='none'>
						<path
							d='M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z'
							fill='#E6007A'
						/>
					</svg>
				</button>
			</div>
			<div className='px-2 w-full relative overflow-hidden'>
				<Carousel
					items={cards}
					size={600}
				/>
			</div>
		</section>
	) : null;
}