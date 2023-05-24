import React, { useState } from 'react'
import SectionHeading from './SectionHeading'


export default function RoadmapSection() {
	const [activeElement, setActiveElement] = useState<number>(0);

	const quarterData: {title: string, list: string[]}[] = [
		{
			title: 'Q1\n2023',
			list: [
				'OpenGov Deployment (Phase 1)',
				'Offchain Governance',
				'Governance Digest',
				'User Interface revamp',
				'Server Side Rendering & Subsquid Integration'
			]
		},
		{
			title: 'Q2\n2023',
			list: [
				'Polkassembly Documentation',
				'Delegation Dashboard',
				'OpenGov Proposal creation from Polkassembly',
				'Integration with Kilt & Subsocial',
				'Command+K, Polkaverse and KILT Integration',
				'Improvement of Search & Discovery in the Product'
			]
		},
		{
			title: 'Q3\n2023',
			list: [
				'Incentive design for reputation scoring',
				'Treasury Analytics',
				'PWA Governance App',
				'Deadline Tracking Phase 2',
				'Polkadot Ecosystem Map',
				'Link on chain identity'
			]
		}
	]

	const quarterDiv = (index:number, title: string, list: string[]) => {
		return (
			<div onMouseEnter={() => setActiveElement(index)} key={title} className={`group justify-center min-h-[600px] xl:min-h-[550px] w-full p-6 ease-in-out transition-all transform duration-[700ms] border-r border-r-pa-pink hover:block hover:bg-pa-pink hover:border-r-0 hover:rounded-lg ${activeElement === index ? 'bg-pa-pink border-r-0 rounded-lg block' : 'flex'} ${index === 2 ? 'border-r-0' : ''}`}>

				<h4 className={`whitespace-pre-wrap text-center font-bold group-hover:text-3xl group-hover:text-white ${activeElement === index ? 'text-3xl text-white' : 'text-2xl text-gray-600 self-center'}`}>{title}</h4>
				
				<div className={`text-center mt-16 group-hover:block ${activeElement === index ? 'block' : 'hidden'}`}>
					{list.map((text, i) =>
						<p
							key={i}
							className='text-white mt-6 text-base text-[18px]'
						>
							{text}
						</p>
					)}
				</div>
			</div>
		);
	}

	const quarterDivMobile = (index:number, title: string, list: string[]) => {
		return (
			<div key={title} className='mt-16 p-5 pb-8 border border-pa-pink shadow-md rounded-lg w-[100%]'>
				<h4 className='whitespace-pre-wrap text-center font-bold text-2xl text-pa-pink'>{title}</h4>

				<div className='text-center mt-10'>
					{list.map((text, i) =>
						<p
							key={i}
							className='mt-6 text-base text-[18px]'
						>
							{text}
						</p>
					)}
				</div>
			</div>
		);
	}

	return (
		<section id='roadmap-section' className="container my-28 mx-auto">
      <SectionHeading title='Roadmap' />
      
      <div className="hidden lg:flex lg:flex-row mx-6 items-center justify-center mt-20">
				{quarterData.map((quarterObj, i) => quarterDiv(i, quarterObj.title, quarterObj.list))}
      </div>

			<div className="lg:hidden flex flex-col mx-6 items-center justify-center mt-20">
				{quarterData.map((quarterObj, i) => quarterDivMobile(i, quarterObj.title, quarterObj.list))}
      </div>
    </section>
	)
}
