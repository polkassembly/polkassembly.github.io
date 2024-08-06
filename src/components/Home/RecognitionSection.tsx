import React from 'react';
import substrateBuilders from '../../assets/images/substrate-builders.svg';
import web3Grant from '../../assets/images/web3-grant.svg';
import treasuryImg from '../../assets/images/treasury-img.svg';
import illus from '../../assets/images/recognition-illus.svg';
import arrow from '../../assets/images/arrow-diagonal.svg';

export default function RecognitionSection() {
	return (
		<section
			id='recognition-section'
			className='p-8 md:p-28 md:pt-16 bg-recognition-bg md:bg-cover bg-no-repeat '>
			{/* className='p-8 md:p-28 md:pt-16 bg-recognition-bg md:bg-contain bg-no-repeat bg-bottom'> */}
			<h1 className='text-4xl flex flex-wrap items-center gap-2 lg:text-6xl font-bold text-black'>
				Notable <span className='bg-pa-pink w-fit rounded-xl text-white p-2'>Recognition</span>
			</h1>

			{/* <div className='overflow-hidden bg-white grid md:grid-cols-6 items-start mt-24 justify-center border rounded-3xl'>
				<div className='md:col-span-5 p-8 md:w-[80%]'>
					<h1 className='text-4xl font-bold text-pa-pink'>Gavin Wood</h1>
					<p className='mt-1 text-lg'>Marketing Director at XYZ Corp</p>
					<p className='mt-4 text-base font-semibold italic'>“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”</p>
				</div>
				<img
					className='md:col-span-1 relative -bottom-28 md:bottom-0 left-8 lg:left-auto md:-right-24 rotate-90 md:rotate-0'
					src={illus}
					alt='illus'
				/>
			</div> */}

			<div className=' bg-white grid lg:grid-cols-3 items-start mt-12 justify-center border rounded-3xl py-8'>
				<div className='flex flex-col col-span-1 pb-8 md:pb-0 px-8'>
					<img
						src={web3Grant}
						className=''
					/>

					<div className='flex flex-col justify-between'>
						<h2 className='text-xl font-bold my-4'>
							Supported by Web3 <br /> Foundation
						</h2>

						<p className='mt-1 text-lg overflow-hidden ellipsis md:h-[175px]'>
							Polkassembly is a recipient of a technical grant from Web3 Foundation. We have successfully delivered the milestones described in our grant applications. Please see the Wave 7 Grants blog from Web 3 Foundation that mentions our project.
							<br />
						</p>
						<a
							href='https://substrate.io/ecosystem/projects/'
							target='_blank'
							rel='noopener noreferrer'
							className=' text-pa-pink flex items-center font-semibold'>
							Learn More
							<img
								src={arrow}
								className='w-4 h-4 ml-2'
								alt='arrow'
							/>
						</a>
					</div>
				</div>

				<div className='flex flex-col col-span-1 border-2 border-x-0 border-y-2 md:border-x-2 md:border-y-0 p-8 md:p-0 md:px-8'>
					<img
						src={substrateBuilders}
						className=''
					/>

					<div className='flex flex-col justify-between'>
						<h2 className='text-xl font-bold my-4'>
							Substrate Builders
							<br />
							Program
						</h2>

						<p className='mt-1 text-lg overflow-hidden ellipsis md:h-[175px]'>
							Polkassembly is one of the projects that have been carefully selected by Parity to participate in Substrate Builders Program. Please see the Substrate projects page that mentions our project.
							<br />
						</p>
						<a
							href='https://substrate.io/ecosystem/projects/'
							target='_blank'
							rel='noopener noreferrer'
							className=' text-pa-pink flex items-center font-semibold'>
							Learn More
							<img
								src={arrow}
								className='w-4 h-4 ml-2'
								alt='arrow'
							/>
						</a>
					</div>
				</div>

				<div className='flex flex-col col-span-1 pt-8 md:pt-0 px-8'>
					<img
						src={treasuryImg}
						className=''
					/>

					<div className='flex flex-col justify-between'>
						<h2 className='text-xl font-bold my-4'>
							Funded by Polkadot
							<br />
							and Kusama Treasury
						</h2>

						<p className='mt-1 text-lg  overflow-hidden ellipsis md:h-[175px]'>
							Polkassembly is a recipient of treasury grants from Polkadot as well as Kusama for building the community's go-to governance platform. <br />
						</p>

						<a
							href='https://substrate.io/ecosystem/projects/'
							target='_blank'
							rel='noopener noreferrer'
							className=' text-pa-pink flex items-center font-semibold'>
							Learn More
							<img
								src={arrow}
								className='w-4 h-4 ml-2'
								alt='arrow'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
