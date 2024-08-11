import React, {useEffect, useState} from 'react';
import {cn} from '../../utils/utils';
import quote from '../../assets/images/quoteup.svg';
import starPink from '../../assets/images/star-pink.svg';

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'slow',
	type,
	pauseOnHover = true,
	className
}: {
	items: {
		author?: string;
		designation?: string;
		testimony?: string;
		title?: string;
		image?: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	type: string;
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty('--animation-direction', 'forwards');
			} else {
				containerRef.current.style.setProperty('--animation-direction', 'reverse');
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '60s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '200s');
			}
		}
	};

	if (type === 'logos') {
		return (
			<div
				ref={containerRef}
				className={cn('scroller relative z-20  w-full overflow-hidden  ', className)}>
				<ul
					ref={scrollerRef}
					className={cn('flex min-w-full shrink-0 gap-24 py-4 w-max flex-nowrap', start && 'animate-scroll ', pauseOnHover && 'hover:[animation-play-state:paused]')}>
					{items.map((item, idx) => (
						<li
							className='w-[135px] md:w-[200px] flex flex-col hover:border-3 hover:border-pa-pink items-center justify-center relative rounded-2xl bg-white border-4 flex-shrink-0 border-[#E1E1E1] p-4'
							key={item.title}>
							{item.title && <a
								href={["moonbase", "moonriver", "moonbeam", "kilt", "automata"].includes(item.title) ? `https://${item.title}.polkassembly.network` : `https://${item.title}.polkassembly.io`}
								target='_blank'
								rel='noreferrer'>
								<div className='flex items-center justify-center h-12 md:h-16'>
									<img
										src={item.image}
										className='rounded-full h-auto w-16 mx-auto'
									/>
								</div>
								<h3 className={`mt-3 md:mt-5 text-base font-medium md:text-lg md:font-semibold text-black ${item.title === 'Xx' ? 'uppercase' : 'capitalize'} tracking-normal lg:tracking-widest text-center leading-none md:leading-auto px-2`}>{item.title}</h3>
							</a>}
						</li>
					))}
				</ul>
			</div>
		);
	}

	if (type === 'cards') {
		return (
			<div
				ref={containerRef}
				className={cn('scroller w-full relative z-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]', className)}>
				<ul
					ref={scrollerRef}
					className={cn(' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap', start && 'animate-scroll ', pauseOnHover && 'hover:[animation-play-state:paused]')}>
					{items.map((item, idx) => (
						<li
							className='w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 bg-pa-pink-light px-8 py-6 md:w-[550px]'
							key={idx}>
							<blockquote>
								<div className='flex gap-2 relaitve w-full items-start'>
									<img
										src={item.image}
										alt={item.title}
										className='rounded-full h-12 w-12 object-cover'
									/>
									<div className='flex flex-col'>
										<span className='relative z-20 text-lg leading-[1.6] text-black font-semibold'>{item.author}</span>
										<span className='text-base leading-[1.6] text-black font-normal'>{item.designation}</span>
									</div>
									<img
										src={quote}
										className='absolute right-6 top-6 w-8 h-8'
									/>
								</div>
								<div className='relative z-20 mt-6 flex flex-row items-center'>
									<span className='flex flex-col gap-1'>
										<span className=' text-sm leading-[1.6] text-black font-normal'>{item.testimony}</span>
									</span>
								</div>
							</blockquote>
						</li>
					))}
				</ul>
			</div>
		);
	}

	if (type === 'banner') {
		return (
			<div
				ref={containerRef}
				className={cn('scroller relative z-20  w-full overflow-hidden  ', className)}>
				<ul
					ref={scrollerRef}
					className={cn('flex min-w-full shrink-0 gap-6 md:gap-24 py-4 w-max flex-nowrap', start && 'animate-scroll ', pauseOnHover && 'hover:[animation-play-state:paused]')}>
					{items.map((item, idx) => (
						<li
							className='flex items-center md:gap-4'
							key={item.title}>
							<h1 className='text-3xl inline-flex items-center gap-2 lg:text-6xl font-bold text-black'>{item.title}</h1>
							<img
								src={starPink}
								className='w-8 md:w-12 ml-6 md:ml-12'
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}

	return null;
};
