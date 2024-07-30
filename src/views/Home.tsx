import React from 'react'
import AboutSection from '../components/Home/AboutSection'
import HeroSection from '../components/Home/HeroSection'
import LiveChainsSection from '../components/Home/LiveChainsSection'
import Footer from '../components/Home/Footer'
import RecognitionSection from '../components/Home/RecognitionSection'
import RoadmapSection from '../components/Home/RoadmapSection'
import TopFeaturesSection from '../components/Home/TopFeaturesSection'
import MediumPostsSection from '../components/Home/MediumPostsSection'
import MonthlyNewsLetter from '../components/Home/MonthlyNewsLetter'
import ProjectsSection from '../components/Home/ProjectsSection';
import WhySection from '../components/Home/WhySection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
			<WhySection />
			<RecognitionSection />
			{/* <AboutSection />
			<TopFeaturesSection />
			<LiveChainsSection />
			<RoadmapSection />
			<MediumPostsSection />
			<MonthlyNewsLetter /> */}
			<Footer />
		</>
	);
}