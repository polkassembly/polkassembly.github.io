import React from 'react'
import AboutSection from '../components/Home/AboutSection'
import HeroSection from '../components/Home/HeroSection'
import LiveChainsSection from '../components/Home/LiveChainsSection'
import Footer from '../components/Home/Footer'
import RecognitionSection from '../components/Home/RecognitionSection'
import RoadmapSection from '../components/Home/RoadmapSection'
import TopFeaturesSection from '../components/Home/TopFeaturesSection'
import MediumPostsSection from '../components/Home/MediumPostsSection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TopFeaturesSection />
			<LiveChainsSection />
			<RecognitionSection />
			<RoadmapSection />
			<MediumPostsSection />
			<Footer />
		</>
	)
}