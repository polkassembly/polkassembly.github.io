import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import parachainsArr from '../parachainsArr'

export default function LiveChainsSection() {
  const [currPage, setCurrPage] = useState<number>(1);

  const parachains = parachainsArr;

  const chainCircle = (image:string, title:string) => {
    const link = ["moonbase", "moonriver", "moonbeam", "kilt", "automata"].includes(title) ? `https://${title}.polkassembly.network` : `https://${title}.polkassembly.io`;
    
    return(
      <a href={link} key={title} rel="noopener noreferrer" target="_blank" className="flex flex-col items-center justify-center my-2 lg:my-0 mx-auto md:mx-6 rounded-full h-24 w-24 md:h-48 md:w-48 border-[1px] border-pa-pink-light transition-transform transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_8px_10px_-5px_#E5007A]">
        <img src={image} className="rounded-full h-auto w-8 md:w-16 mx-auto" />
        <h3 className='mt-1 md:mt-5 text-xs md:text-lg font-semibold text-gray-600 capitalize tracking-normal lg:tracking-widest'>{title}</h3>
      </a>
    )
  }

  const chainPage = (parachainList: {title:string, image:string}[]) => {
    return (
      <div>
        <div className="hidden lg:flex lg:flex-row items-center justify-center">
          {parachainList.slice(0, parachainList.length > 3 ? 4 : parachainList.length).map(parachainObj =>
            chainCircle(parachainObj.image, parachainObj.title)
          )}
        </div>

        {parachainList.length > 4 &&
          <div className="hidden lg:flex lg:flex-row items-center justify-center mt-0 lg:mt-12">
            {parachainList.slice(4, parachainList.length).map(parachainObj =>
              chainCircle(parachainObj.image, parachainObj.title)
            )}
          </div>
        }

        <div id='mobileLiveChains' className="mx-2 grid grid-cols-3 gap-1 lg:hidden">
          {parachainList.map(parachainObj =>
            chainCircle(parachainObj.image, parachainObj.title)
          )}
        </div>
      </div>
    );
  }

  const paginationCircle = (index:number) => <span 
    key={index}
    onClick={() => setCurrPage(index)}
    className={`mx-1 cursor-pointer inline-block ${currPage == index ? 'bg-pa-pink' : 'bg-gray-500'} rounded-full h-[14px] w-[14px]`}
    ></span>;
  
  const totalPages:number = Math.ceil(parachains.length/7);

  const pagination = () => {
    const divItems=[];

    for (let i = 1; i <= totalPages; i++) {
      divItems.push(
        paginationCircle(i)
      );
    }

    return (
      <div className='flex items-center'>
        <button onClick={() => {if(currPage != 1) setCurrPage(currPage - 1)}} className='mx-4 text-pa-pink/50 hover:text-pa-pink'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {divItems}

        <button onClick={() => {if(currPage != totalPages) setCurrPage(currPage + 1)}} className='mx-4 text-pa-pink/50 hover:text-pa-pink'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    )
  }
        

	return (
		<section className="my-28 mx-auto">
      <SectionHeading title='Live Chains' />

      <div className="mt-20">
        { chainPage(parachains.slice((currPage - 1) * 7, parachains.length > currPage * 7 ? currPage * 7 : parachains.length)) }
      </div>

      <div className="w-full flex justify-center items-center mt-20">
        { pagination() }
      </div>
      
    </section>
	)
}
