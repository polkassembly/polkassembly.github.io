'use client';
import React, {useEffect, useState, createContext} from 'react';
import {motion} from 'framer-motion';
import {cn} from '../../utils/utils';

interface CarouselProps {
	items: JSX.Element[];
	initialScroll?: number;
	size?: number;
}

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => {},
	currentIndex: 0
});

export const Carousel = ({items, initialScroll = 0, size = 300}: CarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
			console.log('scrollLeft', scrollLeft, 'scrollWidth', scrollWidth, 'clientWidth', clientWidth);
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: -size, behavior: 'smooth'});
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: size, behavior: 'smooth'});
		}
	};

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth'
			});
			setCurrentIndex(index);
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	return (
		<CarouselContext.Provider value={{onCardClose: handleCardClose, currentIndex}}>
			<div className='relative w-full'>
				<div
					className='flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]'
					ref={carouselRef}
					onScroll={checkScrollability}>
					<div className={cn('absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l')}></div>

					<div
						className={cn(
							'flex flex-row justify-start gap-12 pl-4',
							'max-w-7xl mx-auto' // remove max-w-4xl if you want the carousel to span the full width of its container
						)}>
						{items.map((item, index) => (
							<motion.div
								initial={{
									opacity: 0,
									y: 20
								}}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: 'easeOut',
										once: true
									}
								}}
								key={'card' + index}
								className='last:pr-[5%] md:last:pr-[33%]  rounded-3xl'>
								{item}
							</motion.div>
						))}
					</div>
				</div>
				<div className='flex justify-end gap-2 mr-10'>
					<button
						className='absolute top-1/2 -translate-y-1/2 left-8 z-40 h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center disabled:opacity-0'
						onClick={scrollLeft}
						disabled={!canScrollLeft}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='white'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</button>
					<button
						className='absolute top-1/2 -translate-y-1/2 right-8 z-40 h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center disabled:opacity-0'
						onClick={scrollRight}
						disabled={!canScrollRight}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='white'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>
				</div>
			</div>
		</CarouselContext.Provider>
	);
};

export const BlurImage = ({height, width, src, className, alt, ...rest}: any) => {
	const [isLoading, setLoading] = useState(true);
	return (
		<img
			className={cn('transition duration-300', isLoading ? 'blur-sm' : 'blur-0', className)}
			onLoad={() => setLoading(false)}
			src={src}
			width={width}
			height={height}
			loading='lazy'
			decoding='async'
			blurDataURL={typeof src === 'string' ? src : undefined}
			alt={alt ? alt : 'Background of a beautiful view'}
			{...rest}
		/>
	);
};
