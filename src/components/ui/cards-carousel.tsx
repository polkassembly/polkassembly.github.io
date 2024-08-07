'use client';
import React, {useEffect, useState, createContext} from 'react';
import {motion} from 'framer-motion';
import {cn} from '../../utils/utils';

interface CarouselProps {
	items: JSX.Element[];
	initialScroll?: number;
	size?: number;
	type?: 'projects' | 'news';
}

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => {},
	currentIndex: 0
});

export const Carousel = ({items, initialScroll = 0, size = 300, type = 'projects'}: CarouselProps) => {
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
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - (isMobile() ? 0 : size));
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
			let cardWidth = isMobile() ? 230 : 384; // (md:w-96)
			if (type === 'news') {
				cardWidth = isMobile() ? 230 : 550;
			}
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
					className='flex overflow-hidden w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]'
					ref={carouselRef}
					onScroll={checkScrollability}>
					<div className={cn('absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l')}></div>

					<div
						className={cn(
							'flex flex-row justify-start gap-12 pl-4',
							'mx-auto' // remove max-w-4xl if you want the carousel to span the full width of its container
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
						className='absolute top-1/2 -translate-y-1/2 left-8 z-40 h-14 w-14 rounded-full flex items-center justify-center'
						onClick={scrollLeft}
						disabled={!canScrollLeft}>
						{type === 'news' ? (
							<div className='w-8 md:w-24 relative top-24 md:top-auto -left-8 md:-left-24 z-20 border rounded-full'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									// width='56'
									// height='56'
									viewBox='0 0 56 56'
									fill={canScrollLeft ? '#222222' : 'white'}>
									<circle
										cx='28'
										cy='28'
										r='27.5'
										transform='matrix(-1 0 0 1 56 0)'
									/>
									<path
										d='M13.2928 28.7071C12.9022 28.3166 12.9022 27.6834 13.2928 27.2929L19.6567 20.9289C20.0473 20.5384 20.6804 20.5384 21.0709 20.9289C21.4615 21.3195 21.4615 21.9526 21.0709 22.3431L15.4141 28L21.0709 33.6569C21.4615 34.0474 21.4615 34.6805 21.0709 35.0711C20.6804 35.4616 20.0473 35.4616 19.6567 35.0711L13.2928 28.7071ZM41.9999 29H13.9999V27H41.9999V29Z'
										fill={canScrollLeft ? 'white' : '#222222'}
									/>
								</svg>
							</div>
						) : (
							<div className={`w-8 h-8 md:w-14 md:h-14 rotate-180 rounded-full bg-slate-800 flex items-center justify-center ${canScrollLeft ? '' : 'hidden'}`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'>
									<g clip-path='url(#clip0_388_578)'>
										<path
											d='M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z'
											fill='white'
										/>
									</g>
									<defs>
										<clipPath id='clip0_388_578'>
											<rect
												width='24'
												height='24'
												fill='white'
											/>
										</clipPath>
									</defs>
								</svg>
							</div>
						)}
					</button>
					<button
						className='absolute top-1/2 -translate-y-1/2 right-8 z-40 h-14 w-14 rounded-full flex items-center justify-center'
						onClick={scrollRight}
						disabled={!canScrollRight}>
						{type === 'news' ? (
							<div className='w-8 md:w-24 top-24 md:top-auto -right-8 relative md:-right-24 z-20 border rounded-full'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									// width='56'
									// height='56'
									viewBox='0 0 56 56'
									fill={canScrollRight ? '#222222' : 'white'}>
									<circle
										cx='28'
										cy='28'
										r='28'
									/>
									<path
										d='M42.7072 28.7071C43.0977 28.3166 43.0977 27.6834 42.7072 27.2929L36.3432 20.9289C35.9527 20.5384 35.3195 20.5384 34.929 20.9289C34.5385 21.3195 34.5385 21.9526 34.929 22.3431L40.5859 28L34.929 33.6569C34.5385 34.0474 34.5385 34.6805 34.929 35.0711C35.3195 35.4616 35.9527 35.4616 36.3432 35.0711L42.7072 28.7071ZM14.0001 29H42.0001V27H14.0001V29Z'
										fill={canScrollRight ? 'white' : '#222222'}
									/>
								</svg>
							</div>
						) : (
							<div className={`w-8 h-8 md:w-14 md:h-14 rounded-full bg-slate-800 flex items-center justify-center ${canScrollRight ? '' : 'hidden'}`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'>
									<g clip-path='url(#clip0_388_578)'>
										<path
											d='M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z'
											fill='white'
										/>
									</g>
									<defs>
										<clipPath id='clip0_388_578'>
											<rect
												width='24'
												height='24'
												fill='white'
											/>
										</clipPath>
									</defs>
								</svg>
							</div>
						)}
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
