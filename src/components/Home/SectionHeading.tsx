import React from 'react'
import headerImg from '../../assets/images/header-img.svg'

export default function SectionHeading({title, withDots = true}: {title: string, withDots?: boolean}) {
	const purpleCircle = <span className="hidden md:inline-block bg-pa-purple rounded-full h-[18px] w-[18px]"></span>;

	return (
		<div className="container">
			<div className={withDots ? 'grid grid-cols-3': 'flex justify-center'}>
				{ withDots && <img src={headerImg} className="h-auto rotate-180 z-0" /> }

				<div className="flex items-center justify-center z-10">
					{purpleCircle}
					<h1 className="text-3xl mx-6 capitalize text-center">{title}</h1>
					{purpleCircle}
				</div>

				{ withDots && <img src={headerImg} className="h-auto z-0" /> }
			</div>
		</div>
	)
}
