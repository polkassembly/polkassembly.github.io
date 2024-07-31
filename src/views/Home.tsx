import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Footer from '../components/Home/Footer';
import RecognitionSection from '../components/Home/RecognitionSection';
import MonthlyNewsLetter from '../components/Home/MonthlyNewsLetter';
import ProjectsSection from '../components/Home/ProjectsSection';
import WhySection from '../components/Home/WhySection';
import TestimonialSection from '../components/Home/TestimonialSection';
import GovernSection from '../components/Home/GovernSection';
import KeyFeaturesSection from '../components/Home/KeyFeaturesSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
			<KeyFeaturesSection />
			<WhySection />
			<RecognitionSection />
			<TestimonialSection />
			<GovernSection />
			<MonthlyNewsLetter />
			<Footer />
		</>
	);
}
