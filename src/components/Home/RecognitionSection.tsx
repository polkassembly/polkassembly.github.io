import React from 'react'
import SectionHeading from './SectionHeading'
import substrateBuilders from '../../assets/images/substrate-builders.svg'
import web3Grant from '../../assets/images/web3-grant.svg'


export default function RecognitionSection() {
	return (
		<section className="my-28 mx-auto">
      <SectionHeading title='Recognition' />
      
      <div className="container flex flex-col items-center justify-center mt-20">
        <div className='flex flex-col lg:flex-row lg:-mr-40'>
          <img src={web3Grant} className="h-auto w-72 mx-auto lg:w-80 lg:-ml-40 self-center lg:self-start z-10" />

          <div className='z-0 mx-auto lg:-ml-4 mt-10 self-center lg:self-end'>
            <h2 className='text-xl font-bold text-center lg:text-left mb-4 lg:ml-12'>Supported by Web3 <br/> Foundation</h2>

            <p className="mx-auto text-center lg:text-left mt-1 py-6 px-3 lg:px-12 w-[90%] lg:w-[520px] text-lg border-0 lg:border border-pa-purple lg:shadow-[13px_8px_10px_-5px_#F9D2FF] rounded-2xl">
              Polkassembly is a recipient of a technical grant from Web3 Foundation.
              We have successfully delivered the milestones described in our grant applications.
              Please see the Wave 7 Grants blog from Web 3 Foundation that mentions our project.
              <br/>
              <u> <a href='https://medium.com/web3foundation/web3-foundation-grants-wave-7-recipients-15043dbc9198' target='_blank' className='text-center text-pa-pink font-semibold'>Read More</a> </u>
            </p>
          </div>

        </div>

        <div className='mt-20 flex flex-col lg:flex-row lg:-mr-40'>
          <img src={substrateBuilders} className="h-auto w-72 mx-auto lg:w-80 lg:-ml-40 self-center lg:self-start z-10" />

          <div className='z-0 mx-auto lg:-ml-4 mt-10 self-center lg:self-end'>
            <h2 className='text-xl font-bold text-center lg:text-left mb-4 lg:ml-12'>Substrate Builders<br/>Program</h2>

            <p className="mx-auto text-center lg:text-left mt-1 py-6 px-3 lg:px-12 w-[90%] lg:w-[520px] text-lg border-0 lg:border border-pa-purple lg:shadow-[13px_8px_10px_-5px_#F9D2FF] rounded-2xl">
              Polkassembly is one of the projects that have been carefully selected by Parity to participate in Substrate Builders Program.
              Please see the Substrate projects page that mentions our project.
              <br/>
              <u> <a href='https://substrate.io/ecosystem/projects/' target="_blank" rel="noopener noreferrer" className="text-center text-pa-pink font-semibold">Read More</a> </u>
            </p>
          </div>

        </div>
      </div>
    </section>
	)
}
