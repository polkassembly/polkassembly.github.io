import React from 'react'
import polkassemblyLogoWhite from '../../assets/images/pa-logo-white.svg'
import ideaIcon from '../../assets/images/idea.svg'
import contactUsBg from '../../assets/images/contact-us-bg.svg'

export const socialLinksUL = (colorClass?: string, iconClass?: string, classes?: string) => {
	return (
		<ul className={`ml-0 flex flex-wrap gap-4 ${classes}`}>
			<li>
				<a
					href='https://github.com/polkassembly/polkassembly'
					rel='noopener noreferrer'
					target='_blank'
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}>
					<span className='sr-only'>Github</span>
					<svg
						className={iconClass ? iconClass : 'w-6 h-6'}
						fill='currentColor'
						viewBox='0 0 24 24'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
							clipRule='evenodd'
						/>
					</svg>
				</a>
			</li>

			<li>
				<a
					href='https://twitter.com/polk_gov'
					rel='noopener noreferrer'
					target='_blank'
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}>
					<span className='sr-only'>Twitter</span>
					<svg
						className={iconClass ? iconClass : 'w-6 h-6'}
						fill='currentColor'
						viewBox='0 0 24 24'
						aria-hidden='true'>
						<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
					</svg>
				</a>
			</li>

			<li>
				<a
					href='https://discord.com/invite/CYmYWHgPha'
					rel='noopener noreferrer'
					target='_blank'
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}>
					<span className='sr-only'>Discord</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className={iconClass ? iconClass : 'w-6 h-6'}
						fill='currentColor'
						viewBox='0 0 16 16'>
						{' '}
						<path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />{' '}
					</svg>
				</a>
			</li>

			<li>
				<a
					href='https://t.me/+6WQDzi6RuIw3YzY1'
					rel='noopener noreferrer'
					target='_blank'
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}>
					<span className='sr-only'>Telegram</span>
					<svg
						fill='currentColor'
						className={iconClass ? iconClass : 'w-6 h-6'}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 50 50'
						width='50px'
						height='50px'>
						<path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z' />
					</svg>
				</a>
			</li>

			<li>
				<a
					href='https://polkassembly.medium.com/'
					rel='noopener noreferrer'
					target='_blank'
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}>
					<span className='sr-only'>Medium</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						className={iconClass ? iconClass : 'w-6 h-6'}
						viewBox='0 0 16 16'>
						{' '}
						<path d='M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z' />{' '}
					</svg>
				</a>
			</li>
		</ul>
	);
};

export default function Footer({withContactUs = true}: {withContactUs?: boolean}) {
	return (
		<footer className='bg-[#191A23] rounded-tl-3xl rounded-tr-3xl relative z-10'>
			<div className='max-w-screen-xl px-4 pt-8 md:pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
				<div className='md:grid md:grid-cols-1 gap-8 lg:grid-cols-12'>
					{/* Logo and Socials */}
					<div className='md:-mt-5 col-span-3'>
						<div className='flex items-center w-full justify-between  md:justify-start'>
							<img
								src={polkassemblyLogoWhite}
								className='h-auto w-40 md:w-52'
							/>
							<div className='block md:hidden col-span-3 h-fit'>{socialLinksUL('', 'w-5 h-5', 'justify-end')}</div>
						</div>
						<div className='mt-12 flex flex-col items-center md:items-start'>
							<h1 className='text-white bg-pa-pink rounded-md px-2 w-fit'>Contact us:</h1>
							<ul className='mt-4 space-y-4 text-sm flex flex-col items-center md:items-start'>
								<li>
									<a
										className='flex items-center justify-center sm:justify-start gap-1.5 group'
										href='mailto:info@polkassembly.io'
										rel='noopener noreferrer'
										target='_blank'>
										<span className='text-white transition group-hover:text-purple-400/60'>Email: info@polkassembly.io</span>
									</a>
								</li>
								<li>
									<span className='text-white transition group-hover:text-purple-400/60'>Phone: Feature Request</span>
								</li>
								<li>
									<span className='text-white transition group-hover:text-purple-400/60'>A House of Commons Initiative</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Links */}
					<div className='grid grid-cols-1 h-fit gap-2 sm:grid-cols-2 md:grid-cols-4 col-span-6'>
						<div className='text-center sm:text-left'>
							<p className='hidden md:block text-lg font-medium text-white underline'>About us</p>
							<div className='md:w-[800px] md:ml-24 flex flex-col md:flex-row items-start gap-2 md:items-center rounded-xl mt-12 bg-[#292a32] py-12 px-8'>
								<input
									type='email'
									placeholder='Email'
									className='z-20 w-full px-4 py-2 text-white rounded-xl bg-transparent border border-white placeholder:text-white'
								/>
								<button className='md:ml-4 text-white bg-pa-pink hover:bg-pa-pink/80 px-4 py-2 md:w-[40%] rounded-xl'>Subscribe to news</button>
							</div>
						</div>

						<div className='hidden md:block text-center sm:text-left underline'>
							<p className='text-lg w-fit font-medium text-white underline'>Services</p>
						</div>
						<div className='hidden md:block text-center sm:text-left underline'>
							<p className='text-lg w-fit font-medium text-white underline'>Report a Bug</p>
						</div>
						<div className='hidden md:block text-center sm:text-left underline'>
							<p className='text-lg w-fit font-medium text-white underline'>Blog</p>
						</div>
					</div>
					<div className='hidden md:block col-span-3 h-fit'>{socialLinksUL('', 'w-5 h-5', 'justify-end')}</div>
				</div>

				{/* Bottom Line Content */}
				<div className='pt-8 md:pt-12 mt-4 md:mt-12 border-t border-white'>
					<div className='text-center sm:flex sm:justify-between sm:text-left'>
						<p className='md:mt-4 mb-4 md:mb-auto text-sm text-white sm:order-first sm:mt-0 '>&copy; Polka Labs Private Limited {new Date().getFullYear()}, All Rights Reserved</p>
						<a
							className='text-white text-sm underline transition hover:text-purple-400/60'
							rel='noopener noreferrer'
							target='_blank'
							href='https://polkadot.polkassembly.io/privacy'>
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
