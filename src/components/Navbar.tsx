import React, {useEffect, useRef} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import polkassemblyLogo from '../assets/images/pa-logo.svg';
import {motion, useCycle} from 'framer-motion';
import parachainsArr from './parachainsArr';
import {chainProperties, network} from '../utils/networkConstants';
import {isOpenGovSupported} from '../utils/openGovNetworks';
import chainLogo from '../assets/parachain-logos/chain-logo.jpg';

export const useDimensions = (ref: any) => {
	const dimensions = useRef({width: 0, height: 0});

	useEffect(() => {
		dimensions.current.width = ref.current.offsetWidth;
		dimensions.current.height = ref.current.offsetHeight;
	}, []);

	return dimensions.current;
};

type DropdownMenuItemType = {
	key: any;
	label: any;
	link: string;
};

const polkadotChains: DropdownMenuItemType[] = [];
const kusamaChains: DropdownMenuItemType[] = [];
const soloChains: DropdownMenuItemType[] = [];
const testChains: DropdownMenuItemType[] = [];

let link = '';

for (const key of Object.keys(network)) {
	const keyVal = network[key as keyof typeof network];
	if (key === 'TANGANIKA') continue;

	link = ['MOONBASE', 'MOONRIVER', 'MOONBEAM', 'KILT'].includes(key) ? `https://${key}.polkassembly.network` : `https://${key === 'POLYMESHTEST' ? 'polymesh-test' : keyVal}.polkassembly.io`;

	if (isOpenGovSupported(keyVal)) {
		link = `${link}/opengov`;
	}
	const optionObj: DropdownMenuItemType = {
		key,
		label: (
			<div className='my-2 flex items-center'>
				<span>
					<img
						className='mr-3 h-5 w-5 rounded-full bg-white object-contain'
						src={chainProperties[keyVal]?.logo ? chainProperties[keyVal].logo : chainLogo}
						alt='Logo'
					/>
				</span>
				<span className='text-sm font-medium capitalize text-bodyBlue hover:text-pa-pink truncate'>{keyVal == 'hydradx' ? 'HydraDX' : keyVal}</span>
			</div>
		),
		link
	};

	switch (chainProperties[keyVal]?.category) {
		case 'polkadot':
			polkadotChains.push(optionObj);
			break;
		case 'kusama':
			kusamaChains.push(optionObj);
			break;
		case 'test':
			testChains.push(optionObj);
			break;
		default:
			soloChains.push(optionObj);
	}
}

export default function Navbar() {
	const launchAppBtnClasses = 'hidden md:inline-flex relative items-center text-white justify-center p-4 px-6 py-1 overflow-hidden font-medium transition duration-300 ease-out border-2 bg-pa-pink rounded-full shadow-md group';
	const launchAppBtnMobileClasses = 'block md:hidden text-sm font-normal whitespace-nowrap rounded-md border bg-pa-pink mr-2 border-pa-pink hover:text-white hover:bg-pa-pink px-2 py-1';
	const [isMouse, toggleMouse] = React.useState(false);
	const containerRef = useRef(null);
	const {height} = useDimensions(containerRef);
	const [isOpen, toggleOpen] = useCycle(false, true);

	const Path = (props: any) => (
		<motion.path
			fill='transparent'
			strokeWidth='3'
			stroke='#90A0B7'
			strokeLinecap='round'
			{...props}
		/>
	);

	const toggleMouseMenu = () => {
		toggleMouse(!isMouse);
	};

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.3
			},
			display: 'block'
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.3,
				delay: 0.3
			},
			transitionEnd: {
				display: 'none'
			}
		}
	};

	const sidebar = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2
			}
		}),
		closed: {
			clipPath: 'circle(30px at 40px 40px)',
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 400,
				damping: 40
			}
		}
	};

	function currentRoute() {
		const location = useLocation();
		const currentPath = location.pathname;
		return currentPath;
	}

	useEffect(() => {
		let hash = window.location.hash;
		const el = document.getElementById(hash.substring(1));
		const screenPosition = el?.getBoundingClientRect().top;
		if (hash && el && screenPosition) {
			scroll.scrollTo(Number(screenPosition));
		}
	});

	return (
		<nav className='bg-white border-b-4 relative border-pa-pink md:border-0  md:bg-transparent z-50'>
			<div className='container flex justify-between text-black text-center py-3'>
				<Link
					to='/'
					className='logo ml-3 md:ml-6'>
					<img
						src={polkassemblyLogo}
						className='h-auto w-32 md:w-44'
					/>
				</Link>
				<div className='mr-3 md:mr-6 flex items-center'>
					<ScrollLink
						to='features-section'
						smooth='easeInOutQuart'
						delay={0}
						offset={-40}
						duration={200}
						className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>
						Features
					</ScrollLink>
					<ScrollLink
						to='about-section'
						smooth='easeInOutQuart'
						delay={0}
						offset={-40}
						duration={200}
						className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>
						About
					</ScrollLink>
					<ScrollLink
						to='recognition-section'
						smooth='easeInOutQuart'
						delay={0}
						offset={-40}
						duration={200}
						className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>
						Recognition
					</ScrollLink>
					<ScrollLink
						to='testimonial-section'
						smooth='easeInOutQuart'
						delay={0}
						offset={-40}
						duration={200}
						className='hidden md:block mx-6 cursor-pointer font-semibold hover:text-pa-pink'>
						Testimonial
					</ScrollLink>
					<a
						href='https://docs.polkassembly.io/'
						rel='noopener noreferrer'
						target='_blank'
						className='hidden md:block mx-0 mr-3 md:mx-6 font-normal text-sm md:text-base md:font-semibold hover:text-pa-pink'>
						Docs
					</a>
				</div>
				<div className='flex items-center gap-2 me-2'>
					<div className='hidden md:flex items-center'>
						<motion.div
							className='menu-item z-50'
							onMouseEnter={toggleMouseMenu}
							onMouseLeave={toggleMouseMenu}>
							{currentRoute() == '/' ? (
								<>
									<NavLink
										to='/'
										className={({isActive}) => (isActive ? `bg-pa-pink text-white ${launchAppBtnClasses}` : `text-white ${launchAppBtnClasses}`)}>
										<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pa-pink group-hover:translate-x-0 ease'>
											<svg
												className='w-6 h-6'
												fill='white'
												stroke='white'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
											</svg>
										</span>
										<span className='absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease'>Launch App</span>
										<span className='relative invisible'>Launch App</span>
									</NavLink>

									<NavLink
										to='/'
										className={({isActive}) => (isActive ? `bg-pa-pink text-white ${launchAppBtnMobileClasses}` : `text-white ${launchAppBtnMobileClasses}`)}>
										Launch App
									</NavLink>
								</>
							) : null}
							<motion.div
								className='sub-menu absolute right-4'
								initial='exit'
								animate={isMouse ? 'enter' : 'exit'}
								variants={subMenuAnimate}>
								<div className='max-h-[52vh] bg-white border border-pa-pink px-4 rounded-lg overflow-y-auto'>
									<>
										<div className='text-sm font-semibold mt-2 text-gray-800 text-left'>Polkadot &amp; Parachains</div>
										<div className='mt-2 grid grid-cols-2 gap-x-4 w-[300px]'>
											{polkadotChains.map(optionObj => (
												<a
													href={optionObj.link}
													target='_blank'
													rel='noopener noreferrer'
													key={optionObj.key}
													className={`flex col-span-1 cursor-pointer font-medium text-pink_primary dark:text-blue-dark-high`}>
													<div className='my-1 flex items-center'>
														<span className='text-sm font-medium capitalize truncate mr-2'>{optionObj.label}</span>
													</div>
												</a>
											))}
										</div>
										<div className='text-sm font-semibold mt-2 text-gray-800 text-left'>Kusama &amp; Parachains</div>
										<div className='mt-2 grid grid-cols-2 gap-x-4 w-[300px]'>
											{kusamaChains.map(optionObj => (
												<a
													href={optionObj.link}
													target='_blank'
													rel='noopener noreferrer'
													key={optionObj.key}
													className={`flex col-span-1 cursor-pointer font-medium text-pink_primary dark:text-blue-dark-high`}>
													<div className='my-1 flex items-center'>
														<span className='text-sm font-medium capitalize truncate mr-2'>{optionObj.label}</span>
													</div>
												</a>
											))}
										</div>
										<div className='text-sm font-semibold mt-2 text-gray-800 text-left'>Test Chains</div>
										<div className='mt-2 grid grid-cols-2 gap-x-4 w-[300px]'>
											{testChains.map(optionObj => (
												<a
													href={optionObj.link}
													target='_blank'
													rel='noopener noreferrer'
													key={optionObj.key}
													className={`flex col-span-1 cursor-pointer font-medium text-pink_primary dark:text-blue-dark-high`}>
													<div className='my-1 flex items-center'>
														<span className='text-sm font-medium capitalize truncate mr-2'>{optionObj.label}</span>
													</div>
												</a>
											))}
										</div>
									</>
								</div>
							</motion.div>
						</motion.div>
					</div>
					<motion.nav
						initial={false}
						animate={isOpen ? 'open' : 'closed'}
						className='flex md:hidden absolute top-0 right-4 bottom-0'
						custom={height}
						ref={containerRef}>
						<motion.div
							className='absolute top-0 z-50 right-0 w-[300px] bg-white'
							variants={sidebar}
						/>
						<button onClick={() => toggleOpen()}>
							<svg
								width='23'
								height='23'
								viewBox='0 0 23 23'>
								<Path
									variants={{
										closed: {d: 'M 2 2.5 L 20 2.5'},
										open: {d: 'M 3 16.5 L 17 2.5'}
									}}
								/>
								<Path
									d='M 2 9.423 L 20 9.423'
									variants={{
										closed: {opacity: 1},
										open: {opacity: 0}
									}}
									transition={{duration: 0.1}}
								/>
								<Path
									variants={{
										closed: {d: 'M 2 16.346 L 20 16.346'},
										open: {d: 'M 3 2.5 L 17 16.346'}
									}}
								/>
							</svg>
						</button>
					</motion.nav>
				</div>
			</div>
		</nav>
	);
}
