import React, {useState} from 'react';
import parachainsArr from '../parachainsArr';

export default function LiveChainsSection() {
	const [currPage, setCurrPage] = useState<number>(1);

	const parachains = parachainsArr;

	const chainCircle = (image: string, title: string) => {
		const link = ['moonbase', 'moonriver', 'moonbeam', 'kilt'].includes(title) ? `https://${title}.polkassembly.network` : `https://${title}.polkassembly.io`;

		return (
			<a
				href={link}
				key={title}
				rel='noopener noreferrer'
				target='_blank'
				className='flex flex-col items-center justify-center my-2 lg:my-0 mx-auto md:mx-6 rounded-full h-24 w-24 md:h-48 md:w-48 border-[1px] border-pa-pink-light transition-transform transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_8px_10px_-5px_#E5007A]'>
				<div className='flex items-center justify-center h-12 md:h-16'>
					<img
						src={image}
						className='rounded-full h-auto w-8 md:w-16 mx-auto'
					/>
				</div>
				<h3 className={`mt-1 md:mt-5 text-[10px] font-medium md:text-lg md:font-semibold text-gray-600 ${title === 'Xx' ? 'uppercase' : 'capitalize'} tracking-normal lg:tracking-widest text-center leading-none md:leading-auto px-2`}>{title}</h3>
			</a>
		);
	};

	const chainPage = (parachainList: {title: string; image: string}[]) => {
		return (
			<div>
				<div className='hidden lg:flex lg:flex-row items-center justify-center'>{parachainList.slice(0, parachainList.length > 3 ? 4 : parachainList.length).map(parachainObj => chainCircle(parachainObj.image, parachainObj.title))}</div>

				{parachainList.length > 4 && <div className='hidden lg:flex lg:flex-row items-center justify-center mt-0 lg:mt-12'>{parachainList.slice(4, parachainList.length).map(parachainObj => chainCircle(parachainObj.image, parachainObj.title))}</div>}

				{/* Mobile */}

				<div
					id='mobileLiveChains'
					className='mx-2 grid grid-cols-3 gap-1 lg:hidden'>
					{parachainList.slice(0, parachainList.length == 6 ? parachainList.length : parachainList.length > 5 ? parachainList.length - 1 : parachainList.length - 2).map(parachainObj => chainCircle(parachainObj.image, parachainObj.title))}
				</div>

				{parachainList.length != 6 && parachainList.length > 5 && <div className='flex justify-center items-center lg:hidden'>{chainCircle(parachainList[parachainList.length - 1].image, parachainList[parachainList.length - 1].title)}</div>}

				{parachainList.length == 5 && (
					<div className='mx-14 flex justify-center items-center lg:hidden'>
						{chainCircle(parachainList[parachainList.length - 2].image, parachainList[parachainList.length - 2].title)}
						{chainCircle(parachainList[parachainList.length - 1].image, parachainList[parachainList.length - 1].title)}
					</div>
				)}
			</div>
		);
	};

	const paginationCircle = (index: number) => (
		<span
			key={index}
			onClick={() => setCurrPage(index)}
			className={`mx-1 cursor-pointer inline-block ${currPage == index ? 'bg-pa-pink' : 'bg-gray-500'} rounded-full h-[14px] w-[14px]`}></span>
	);

	const totalPages: number = Math.ceil(parachains.length / 7);

	const pagination = () => {
		const divItems = [];

		for (let i = 1; i <= totalPages; i++) {
			divItems.push(paginationCircle(i));
		}

		return (
			<div className='flex items-center'>
				<button
					onClick={() => {
						if (currPage != 1) setCurrPage(currPage - 1);
					}}
					className='mx-4 text-pa-pink/50 hover:text-pa-pink'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</button>

				{divItems}

				<button
					onClick={() => {
						if (currPage != totalPages) setCurrPage(currPage + 1);
					}}
					className='mx-4 text-pa-pink/50 hover:text-pa-pink'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>
		);
	};

	return (
		<section className='my-28 mx-auto'>
			<div className='mt-20'>{chainPage(parachains.slice((currPage - 1) * 7, parachains.length > currPage * 7 ? currPage * 7 : parachains.length))}</div>

			<div className='w-full flex justify-center items-center mt-20'>{pagination()}</div>
		</section>
	);
}
