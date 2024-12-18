import React from "react";
import substrateBuilders from "../../assets/images/substrate-builders.svg";
import web3Grant from "../../assets/images/web3-grant.svg";
import treasuryImg from "../../assets/images/treasury-img.svg";
import illus from "../../assets/images/recognition-illus.svg";
import arrow from "../../assets/images/arrow-diagonal.svg";

export default function RecognitionSection() {
  return (
    <section
      id="recognition-section"
      className="p-5 xs:p-8 md:p-24 md:pt-20 bg-recognition-bg md:bg-cover bg-position-y-50 bg-no-repeat "
    >
      <h1 className="text-4xl flex flex-wrap items-center gap-2 lg:text-6xl font-bold text-black max-w-[1240px] lg:mx-auto">
        Notable{" "}
        <span className="bg-pa-pink w-fit rounded-xl text-white p-2">
          Recognition
        </span>
      </h1>

      <div className=" bg-white flex lg:justify-around flex-col lg:flex-row items-start md:items-center mt-12 justify-center border rounded-3xl lg:rounded-[40px] py-4 md:py-6 xl:mx-auto max-w-[1240px]">
        <div className="flex flex-col col-span-1 pb-8 px-4 md:py-6 lg:py-2">
          <img src={web3Grant} className="w-[286px] h-[143px]" />

          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-bold my-3">
              Supported by Web3 <br /> Foundation
            </h2>

            <p className=" text-base overflow-hidden ellipsis md:min-h-[140px] md:max-w-[286px] text-[#424242] leading-[20px]">
              Polkassembly is a recipient of a technical grant from Web3
              Foundation. We have successfully delivered the milestones
              described in our grant applications. Please see the Wave 7 Grants
              blog from Web 3 Foundation that mentions our project.
              <br />
            </p>
            <a
              href="https://substrate.io/ecosystem/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-pa-pink flex mt-2 items-center font-semibold"
            >
              Learn More
              <img src={arrow} className="w-4 h-4 ml-2" alt="arrow" />
            </a>
          </div>
        </div>

        <div className="hidden w-[1px] bg-[#DDDDDD] h-[400px] lg:block"></div>
        <div className="w-full bg-[#DDDDDD] h-[1px] lg:hidden"></div>

        <div className="flex flex-col col-span-1 mt-4 md:mt-0 pb-8 px-4 md:py-6 lg:py-2">
          <img src={substrateBuilders} className="w-[286px] h-[143px]" />

          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-bold my-3">
              Substrate Builders
              <br />
              Program
            </h2>

            <p className="text-base overflow-hidden ellipsis md:min-h-[140px] md:max-w-[286px] text-[#424242] leading-[20px]">
              Polkassembly is one of the projects that have been carefully
              selected by Parity to participate in Substrate Builders Program.
              Please see the Substrate projects page that mentions our project.
              <br />
            </p>
            <a
              href="https://substrate.io/ecosystem/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-pa-pink flex mt-2 items-center font-semibold"
            >
              Learn More
              <img src={arrow} className="w-4 h-4 ml-2" alt="arrow" />
            </a>
          </div>
        </div>

        <div className="hidden w-[1px] bg-[#DDDDDD] h-[400px] lg:block"></div>
        <div className="w-full bg-[#DDDDDD] h-[1px] lg:hidden"></div>

        <div className="flex flex-col col-span-1 mt-4 md:mt-0 pb-8 px-4 md:py-6 lg:py-2">
          <img src={treasuryImg} className="w-[286px] h-[143px]" />

          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-bold my-3">
              Funded by Polkadot
              <br />
              and Kusama Treasury
            </h2>

            <p className="text-base overflow-hidden ellipsis md:min-h-[140px] md:max-w-[286px] text-[#424242] leading-[20px]">
              Polkassembly is a recipient of treasury grants from Polkadot as
              well as Kusama for building the community's go-to governance
              platform. <br />
            </p>

            <a
              href="https://substrate.io/ecosystem/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-pa-pink flex mt-2 items-center font-semibold"
            >
              Learn More
              <img src={arrow} className="w-4 h-4 ml-2" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
