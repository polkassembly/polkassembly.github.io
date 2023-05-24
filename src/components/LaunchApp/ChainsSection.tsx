import React, { useEffect, useState } from 'react'
import parachainsArr from '../parachainsArr';

export default function ChainsSection() {
	const [parachains, setParachains] = useState<any[]>(parachainsArr.slice(0,12));
	const [loadMore, setLoadMore] = useState<boolean>(false);
	const [searchInput, setSearchInput] = useState<string>('');
	const [searchResults, setSearchResults] = useState<any[]>([]);

	useEffect(() => {
		if(loadMore) {
			setParachains(parachainsArr);
		} else {
			setParachains(parachainsArr.slice(0,12));
		}
	}, [loadMore])

	useEffect(() => {
		const searchResultsLocal = parachainsArr.filter(parachainObj => {
				return parachainObj.title.toLowerCase().includes(searchInput.toLowerCase());
		});

		setSearchResults(searchResultsLocal);
	}, [searchInput])

	const chainCircle = (image:string, title:string) => {
    const link = ["moonbase", "moonriver", "moonbeam", "kilt", "automata"].includes(title) ? `https://${title}.polkassembly.network` : `https://${title}.polkassembly.io`;
    
    return(
      <a href={link} key={title} rel="noopener noreferrer" target="_blank" className="flex flex-col justify-self-center self-center items-center justify-center my-2 lg:my-0 mx-auto md:mx-6 rounded-full h-24 w-24 md:h-48 md:w-48 border-[1px] border-pa-pink-light transition-transform transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_8px_10px_-5px_#E5007A]">
        <div className='flex items-center justify-center h-12 md:h-16'><img src={image} className="rounded-full h-auto w-8 md:w-16 mx-auto" /></div>
        <h3 className={`mt-1 md:mt-5 text-[10px] font-medium md:text-lg md:font-semibold text-gray-600 ${title === 'Xx'? 'uppercase': 'capitalize'} tracking-normal lg:tracking-widest text-center leading-none md:leading-auto px-2`}>{title}</h3>
      </a>
    )
  }
	
	return (
		<div className='container mt-14'>

			<div className="relative mt-16 w-[90%] md:w-60 mx-auto md:mx-6 xl:mx-52">
				<label className="sr-only"> Search </label>

				<input
					className="w-full py-2 pl-3 pr-16 text-sm border-2 rounded-full border-pa-purple shadow-[5px_4px_5px_0px_#F9D2FF]"
					id="search"
					type="text"
					placeholder="Search"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>

				<button className="absolute p-1 text-white -translate-y-1/2 bg-pa-pink rounded-full top-1/2 right-4" type="button" onClick={() => setSearchInput('')}>
					{searchInput ? 
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
							:
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					}
				</button>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 mx-auto md:mx-6 xl:mx-48 gap-y-4 lg:gap-y-14 mt-10 lg:mt-24 min-h-[100vh] max-h-[100vh] overflow-auto content-start">
				{searchInput ? 
						searchResults.map(parachainObj =>
							chainCircle(parachainObj.image, parachainObj.title)
						)
					:
					parachains.map(parachainObj =>
					chainCircle(parachainObj.image, parachainObj.title)
					)
				}
			</div>

			{!searchInput && <div className='flex items-center justify-center my-16'>
				<button onClick={() => setLoadMore(!loadMore)} className="rounded-full bg-pa-pink text-white hover:bg-pa-purple hover:text-pa-pink px-5 py-2">{loadMore ? 'Show Less' : 'Load More'}</button>
			</div>}
			
			{searchInput && <div className='mb-20'></div>}
		</div>
	)
}
