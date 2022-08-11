import React from 'react'
import polkassemblyLogoWhite from '../../assets/images/pa-logo-white.svg'
import contactUsBg from '../../assets/images/contact-us-bg.svg'

export const socialLinksUL = (colorClass?: string, iconClass ?: string, classes ?: string) => {
	return (
		<ul className={`ml-0 flex gap-6 mt-8 md:gap-8 ${classes}`}>
			<li>
				<a
					href="https://twitter.com/polk_gov"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Twitter</span>
					<svg
						className={iconClass ? iconClass : "w-6 h-6"}
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
						/>
					</svg>
				</a>
			</li>

			<li>
				<a
					href="https://discord.com/invite/CYmYWHgPha"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Discord</span>
					<svg xmlns="http://www.w3.org/2000/svg" className={iconClass ? iconClass : "w-6 h-6"} fill="currentColor" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg>
				</a>
			</li>

			<li>
				<a
					href="https://t.me/+6WQDzi6RuIw3YzY1"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Telegram</span>
					<svg fill="currentColor" className={iconClass ? iconClass : "w-6 h-6"} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/></svg>
				</a>
			</li>

			<li>
				<a
					href="https://polkassembly.medium.com/"
					rel="noopener noreferrer"
					target="_blank"
					className={`${colorClass ? colorClass : 'text-white'} transition hover:text-purple-400/60`}
				>
					<span className="sr-only">Medium</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={iconClass ? iconClass : "w-6 h-6"} viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/> </svg>
				</a>
			</li>
		</ul>
	);
}

export default function Footer({withContactUs = true}: {withContactUs?:boolean}) {
	return (
		<>
			{withContactUs && <div className='w-full -z-0 flex items-center flex-col'>
				<img src={contactUsBg} className='h-auto w-[45rem] -mb-36 md:-mb-72' />

				<h4 className='text-white text-center w-52 md:w-80 mb-6 md:mb-10 text-sm md:text-lg'>Want to know more about popular governance proposals and community updates?</h4>

				<a href="mailto:hello@polkassembly.io" rel="noopener noreferrer" target="_blank" className='mb-2 md:mb-10 rounded-full bg-white px-2 py-1 md:px-4 md:py-2 text-sm text-pa-pink font-bold'>
					Contact Us
				</a>
			</div>}

			<footer className="bg-slate-900 relative z-10">
				<div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{/* Logo and Socials */}
						<div className='md:-mt-5'>
							<div className="flex justify-center text-teal-300 sm:justify-start">
								<img src={polkassemblyLogoWhite} className="h-auto w-52 md:w-64" />
							</div>
						</div>

						{/* Links */}
						<div
							className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3"
						>
							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-white">Help Center</p>

								<nav className="mt-8">
									<ul className="space-y-4 text-sm">
										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://polkadot.polkassembly.io/terms-and-conditions">
												Terms and Condition
											</a>
										</li>

										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://github.com/polkassembly/polkassembly.github.io/issues">
												Report an Issue
											</a>
										</li>
									</ul>
								</nav>
							</div>

							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-white">Polkassembly</p>

								<nav className="mt-8">
									<ul className="space-y-4 text-sm">
										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://polkadot.polkassembly.io/terms-of-website">
												Terms of Website
											</a>
										</li>

										<li>
											<a className="text-white transition hover:text-purple-400/60" rel="noopener noreferrer" target='_blank' href="https://polkadot.polkassembly.io/privacy">
												Privacy Policy
											</a>
										</li>
									</ul>
								</nav>
							</div>

							<div className="text-center sm:text-left">
								<p className="text-lg font-medium text-white">Contact Us</p>

								<ul className="mt-8 space-y-4 text-sm">
									<li>
										<a
											className="flex items-center justify-center sm:justify-start gap-1.5 group"
											href="mailto:hello@polkassembly.io"
											rel="noopener noreferrer"
											target="_blank"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5 text-white shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>

											<span className="text-white transition group-hover:text-purple-400/60">
												hello@polkassembly.io
											</span>
										</a>
									</li>

									<li>
										{socialLinksUL('', 'w-5 h-5', 'justify-center md:justify-start')}
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Bottom Line Content */}
					<div className="pt-6 mt-12 border-t border-gray-800">
						<div className="text-center sm:flex sm:justify-between sm:text-left">
							<p className="text-sm text-gray-400">
								<span className="block sm:inline">All rights reserved. </span>
							</p>

							<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
								&copy; Premiurly {new Date().getFullYear()}
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
