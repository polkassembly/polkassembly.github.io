import { useState, useRef, useEffect } from 'react';
import arrow from '../../assets/images/arrow-rounded-white.svg';
import { useMotionValueEvent, useScroll, useAnimation, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import starPink from '../../assets/images/star-pink-2.svg';
import { DivWithBorder } from '../ui/moving-border';
import delegation from '../../assets/images/delegation.svg';
import leaderboard from '../../assets/images/leaderboard.svg';
import voting from '../../assets/images/voting.svg';
import social from '../../assets/images/social.svg';
import treasury from '../../assets/images/treasury.svg';
import loaderSvg from '../../assets/images/loader.svg';
const data = [
	{
		id: '01',
		title: 'Delegation',
		banner: delegation,
		link: 'https://polkadot.polkassembly.io/delegation',
		description: "Easily delegate your voting power to trusted members within the community, ensuring your voice is always heard, even when you're not actively participating."
	},
	{
		id: '02',
		title: 'Leaderboard',
		banner: leaderboard,
		link: 'https://polkadot.polkassembly.io/leaderboard',
		description: 'Stay informed about the most active and influential contributors in the community. Recognize and follow top participants to stay updated on their activities and proposals.'
	},
	{
		id: '03',
		title: 'Voting',
		banner: voting,
		link: 'https://polkadot.polkassembly.io/all-posts?trackStatus=all&page=1',
		description: 'Participate in governance by voting on proposals that shape the future of the Polkadot ecosystem. Our intuitive voting interface makes it simple and transparent.'
	},
	{
		id: '04',
		title: 'Social Timeline',
		banner: social,
		description: 'Engage with a dynamic social timeline where you can see updates, discussions, and interactions from the community. Share your thoughts, comment on proposals, and connect with like-minded individuals.'
	},
	{
		id: '05',
		title: 'Treasury Analytics',
		banner: treasury,
		link: 'https://polkadot.polkassembly.io/all-posts?trackStatus=all&page=1&analytics=true',
		description: 'Stay informed about the most active proposals on Polkassembly by using the Treasury Analytics feature. It showcases all the relevant data required for you to stay up to date about what goes on in a specific track.'
	}
];

const KeyFeaturesSection = () => {
	const [active, setActive] = useState<number>(0);
	const [loading, setLoading] = useState(true);
	const sectionRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const cardRefs2 = useRef<(HTMLDivElement | null)[]>([]);
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(window && window.innerWidth < 768);
	const scrollControls = useAnimation();
	const { scrollYProgress } = useScroll({ target: sectionRef });
	const yTransform = useTransform(scrollYProgress, [0, 1], [0.7, -700]);
	const springYTransform = useSpring(yTransform, { bounce: 20, damping: 30 });
	const cardLength = data.length;

	const boxShadowStyle = {
		boxShadow: isMobile ? '-10px 0 5px -2px rgba(0,0,0,0.22) inset' : '0px -129px 18px -106px rgba(0,0,0,0.22) inset'
	};

	useEffect(() => {
		const updateMobileStatus = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener('resize', updateMobileStatus);
		return () => window.removeEventListener('resize', updateMobileStatus);
	}, []);

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		if (isMobile) return;
		const cardsBreakpoints = data.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(latest - breakpoint);
			return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
		}, 0);
		setActive(closestBreakpointIndex);
	});

	useEffect(() => {
		const observerOptions = {
			root: scrollRef.current,
			threshold: 0.5
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting && isMobile) {
					const index = cardRefs2.current.indexOf(entry.target as HTMLDivElement);
					setActive(index);
				}
			});
		}, observerOptions);

		cardRefs2.current.forEach(card => {
			if (card) {
				observer.observe(card);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [cardRefs2, isMobile]);
	 useEffect(() => {
     setLoading(true);
   }, [active]);


	const animatedActiveCard = (id: string, title: string, description: string, index: number) => (
		<DivWithBorder
			className={`bg-[#f5f5f572] border-pa-pink rounded-2xl border p-4 md:py-8 md:px-10 ${index === cardLength - 1 ? 'sticky bottom-0' : ''}`}
			duration={5000}>
			<div className='flex w-[55vw] md:w-auto justify-between items-center'>
				<h1 className='text-base md:text-xl text-pa-pink font-bold'>
					{id} <span className='text-black font-semibold ml-1'>{title}</span>
				</h1>
				<svg
					className='rotate-90 md:rotate-0 w-5 md:w-auto'
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
			<p className='text-xs md:max-h-auto md:text-base mt-4 text-black'>{description}</p>
		</DivWithBorder>
	);

	const inactiveCard = (id: string, title: string, description: string, index: number) => (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
			className='bg-white rounded-3xl h-full max-h-[300px] w-[55vw] md:w-auto md:h-auto md:rounded-full border-slate-400 border p-6 md:p-10'
			onClick={() => setActive(index)}
			ref={el => (cardRefs.current[index] = el)}>
			<div className='flex justify-between items-center'>
				<h1 className='text-base md:text-xl text-black font-semibold'>
					{id} <span className='text-black font-normal ml-1'>{title}</span>
				</h1>
				<svg
					className='rotate-90 md:rotate-0'
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
		</motion.div>
	);

	return (
    <div
      ref={sectionRef}
      className="min-h-screen md:h-[300vh] relative scroll-smooth "
    >
      <motion.section
        id="features-section"
        className="py-6 sm:py-10 pb-32 md:pb-20 sticky top-0"
      >
        <div className="flex  px-5 md:px-0 max-w-[1240px] mx-auto items-center justify-between">
          <h1 className="text-4xl flex items-center gap-2 lg:text-6xl font-bold text-black">
            Key{" "}
            <span className="bg-pa-pink w-fit rounded-xl text-white p-2">
              Features
            </span>
          </h1>
          <img src={starPink} alt="star" className="md:w-20 md:h-20" />
        </div>
        <div className="grid md:grid-flow-col max-w-[1240px] max-h-[575px] mt-10 mx-auto px-5 md:px-0 gap-x-10 md:grid-rows-5 grid-col-9">
          <div className="md:col-span-4 col-span-9  md:row-span-5 w-full ">
            <p className=" text-black row-span-1 md:ml-0 text-xl">
              A glimpse into the best features on Polkassembly to elevate your
              governance experience.
            </p>
            <motion.div
              animate={scrollControls}
              className="relative md:mx-0 mb-6 md:mb-0 grid mt-4 md:mt-8 gap-10"
            >
              <motion.div
                style={active < cardLength - 1 ? boxShadowStyle : {}}
                ref={scrollRef}
                className={`feature-list-container md:w-[457px] h-[12.5rem] scrollbar-hide md:relative md:h-[28rem] overflow-hidden flex lg:flex-col md:py-4 overflow-x-scroll md:overflow-x-auto gap-8 pr-5`}
              >
                <AnimatePresence>
                  {data.map((item, idx) => (
                    <motion.div
                      style={isMobile ? {} : { y: springYTransform }}
                      className="feature-list"
                      key={item.id}
                      ref={(el) => (cardRefs2.current[idx] = el)}
                      exit="collapsed"
                    >
                      {idx === active
                        ? animatedActiveCard(
                            item.id,
                            item.title,
                            item.description,
                            idx
                          )
                        : inactiveCard(
                            item.id,
                            item.title,
                            item.description,
                            idx
                          )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              ease: "linear",
              delay: 0.1,
              damping: 20,
            }}
            className="bg-[#FEF6FB] flex flex-col justify-between rounded-3xl p-4 md:mx-0 md:p-8 col-span-9 md:col-span-5 md:row-span-5"
          >
            <div className="w-[280px] h-[257px] md:w-[676px] md:h-[429px] mx-auto rounded-3xl flex items-center justify-center">
              {loading && (
                  <img
                    src={loaderSvg}
                    alt="Loading..."
                    className="animate-spin w-10 h-10 m-auto"
                  />
              )}
              <img
                src={data[active].banner}
                alt={data[active].title}
                onLoad={() => setLoading(false)}
                className={`w-full h-full rounded-3xl object-cover ${
                  loading ? "hidden" : ""
                }`}
              />
            </div>
            <div className="flex items-center mt-4 justify-between">
              <h1 className="text-xl md:text-3xl text-black font-semibold">
                {data[active].title}
              </h1>
              {data[active].link ? (
                <a href={data[active].link} target="_blank" rel="noreferrer">
                  <img src={arrow} alt="arrow" className="w-6 md:w-12" />
                </a>
              ) : (
                <div className="px-2 py-1 md:px-4 md:py-2 text-white text-sm md:text-base font-semibold bg-[#A514A0] rounded-full">
                  Coming Soon
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default KeyFeaturesSection;