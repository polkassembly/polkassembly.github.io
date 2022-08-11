import React from 'react'
import contactUsBg from '../../assets/images/contact-us-bg.svg'

export default function Header() {
	return (
		<div className='container w-full -z-10 flex items-center flex-col'>
			<img src={contactUsBg} className='h-auto w-[45rem] -mt-2 lg:-mt-48 rotate-180 -z-10' />
			<h2 className='-mt-32 lg:-mt-36 mx-2 text-sm lg:text-base text-white text-center'>A powerful solution to your parachain’s<br/> governance needs</h2>

			<a href="https://tnfz1mpboxn.typeform.com/to/lOOzRC70" rel="noopener noreferrer" target="_blank" className='animate-pulse mx-auto bg-white hover:bg-pa-pink-light rounded-full text-pa-pink font-semibold mt-4 px-4 py-1'>Get Started</a>
		</div>
	)
}
