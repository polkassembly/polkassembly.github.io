import React, { useState } from 'react'
import Footer from '../components/Home/Footer';
import ChainsSection from '../components/LaunchApp/ChainsSection';
import Header from '../components/LaunchApp/Header'
import parachainsArr from '../components/parachainsArr';

export default function LaunchApp() {
	return (
		<>
			<Header />
			<ChainsSection />
			<Footer withContactUs={false} />
		</>
	)
}
