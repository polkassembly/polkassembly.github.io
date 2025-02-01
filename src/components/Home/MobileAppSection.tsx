import appleLogo from "../../assets/images/apple-logo.svg";
import downloadIcon from "../../assets/images/download-icon.svg";
import mobileAppImage from "../../assets/images/mobile.svg";
import QRCode from "react-qr-code";
import bgImage from "../../assets/images/bg-hero.svg";
import starPink from "../../assets/images/star-pink-2.svg";

export default function MobileAppSection() {
    const downloadLink = "https://firebasestorage.googleapis.com/v0/b/polkassembly-v2.firebasestorage.app/o/mobile-app-apk%2FPolkassemblyApp.apk?alt=media&token=81592577-22b8-4b4d-8042-3efdbaec7758"
  return (
    <section
      id="mobile-app-section"
      className="bg-recognition-bg md:bg-cover bg-position-y-50 bg-no-repeat"
    >
        <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "fit",
        }} className="relative">
        <img
            src={starPink}
            alt="star"
            className="w-9 h-9 absolute hidden md:block top-32 right-64"
          />
          <img
            src={starPink}
            alt="star"
            className="w-10 h-10 absolute hidden md:block top-[40%] right-[45%]"
          />
          <img
            src={starPink}
            alt="star"
            className="w-6 h-6 absolute hidden md:block top-[70%] right-[50%]"
          />
            <div className="flex flex-col gap-y-4 text-4xl flex flex-wrap lg:text-6xl font-bold text-black max-w-[1240px] mb-8 px-5 xs:px-8 md:px-24 md:pt-20">
                <h1>
                    Download Polkassembly 
                </h1>
                <h1>
                    App for Android 
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between px-5 xs:px-8 md:px-24" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.35%, rgba(230, 0, 122, 0.24) 134.23%)'}}>
                <div className="flex flex-col gap-y-4">
                    <a download href={downloadLink} target="_blank" className="text-xl md:text-2xl font-semibold text-pa-pink flex items-center gap-x-2">Download App for android
                        <div className="w-[26px] md:w-[34px]">
                            <img src={downloadIcon} alt="downloadIcon" />
                        </div>
                    </a>
                    <div className="flex flex-col gap-y-2 mb-12">
                        <p className="text-xl font-medium text-black">Minimum Requirements</p>
                        <p className="text-base text-black">(Version 2.23.12.75)</p>
                        <p className="text-base text-black">Android OS 5.0 or above</p>
                    </div>
                    <div className="rounded-b-xl rounded-tl-xl bg-pa-grey px-4 py-2.5 border border-pa-grey-light hidden md:flex items-center gap-x-3 w-max relative">
                        <div className="w-[26px]">
                            <img src={appleLogo} alt="appleLogo" />
                        </div>
                        <div>
                            <p className="text-[10px] text-white leading-none mb-px">Download for</p>
                            <p className="text-xl font-semibold text-white leading-none">iOS</p>
                        </div>

                        <div className="absolute top-[-25px] right-0 bg-pa-blue rounded-t-md font-bold text-[10px] text-white px-1">COMING SOON</div>
                    </div>
                </div>
                <div className="-mt-16">
                    <img src={mobileAppImage} alt="mobileAppImage" />
                </div>
            </div>
        </div>
        <div className="px-5 xs:px-8 md:px-24 py-20 bg-pa-bg-pink">
            <h1 className="text-2xl md:text-4xl flex flex-wrap items-center gap-2 lg:text-6xl font-bold text-black justify-center">
                Log into{" "}
                <span className="bg-pa-pink w-fit rounded-xl text-white p-2">
                Polkassembly App
                </span>
            </h1>
            <div className="flex flex-col gap-y-4 mt-16 items-center">
                <div className="text-center text-black font-xl font-medium">
                    <p>Scan with your phone to</p>
                    <p>Login to your account directly</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                    <QRCode value={downloadLink} size={244} />
                </div>
            </div>
        </div>
    </section>
  );
}
