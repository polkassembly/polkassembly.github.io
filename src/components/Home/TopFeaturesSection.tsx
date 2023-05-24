import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import connectingDots from '../../assets/images/connecting-dots.svg'
import paScreenshots from '../../assets/images/pa-screenshots.svg'

enum featureCardType {
  ConnectingTheDots = 'Connecting the Dots',
  IntuitiveUXUI = 'Intuitive UI/UX'
}

export default function TopFeaturesSection() {
  const [activeCard, setActiveCard] = useState<featureCardType>(featureCardType.ConnectingTheDots);

  const featureCard = (type:featureCardType, active:boolean) => {
    return (
      <div className="w-36 md:w-96 mx-2 md:mx-9">
        <div onClick={() => setActiveCard(type)} className="cursor-pointer relative block group h-36">
          <span className="absolute rounded-3xl inset-0 border-2 border-pa-pink border-dashed"></span>
        
          <div
            className={`relative rounded-3xl h-full ${active ? 'bg-pa-pink-light border-2 border-pa-pink-light -translate-x-2 -translate-y-2' : 'bg-pa-purple border-2 border-pa-purple'} transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2`}
          >
            <div className="px-3 md:px-6 opacity-100 relative">
              <h2 className={`mt-8 text-xl md:text-2xl font-medium ${active ? 'text-pa-pink' : 'text-black'}`}>{type}</h2>
            </div>

            {active &&
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto mt-auto lg:mt-8 mr-2 text-pa-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            }
          </div>
        </div>
      </div>
    );
  }

	return (
		<section id="top-features-section" className="my-28">
       {/* heading */}
			 <SectionHeading title='Top Features' />

       {/* sub-heading */}
      <div className="flex justify-center mt-20 mx-12">
        {featureCard(featureCardType.ConnectingTheDots, activeCard === featureCardType.ConnectingTheDots)}
        {featureCard(featureCardType.IntuitiveUXUI, activeCard === featureCardType.IntuitiveUXUI)}
      </div>

      <div id="top-features-content" className="mt-28 mx-auto h-auto max-w-[90vw]">
        { activeCard === featureCardType.ConnectingTheDots ?
          <img src={connectingDots} className="mx-auto h-auto w-[40rem] max-w-[90vw]" />
          :
          <img src={paScreenshots} className="mx-auto h-auto w-[40rem] max-w-[90vw]" />
        }
      </div>

    </section>
	)
}
