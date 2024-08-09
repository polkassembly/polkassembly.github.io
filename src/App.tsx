import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';

function App() {
  const [cookiePopup, setCookiePopup] = useState<boolean>(true);
  
  return (
		<div className='App'>
			{cookiePopup && (
				<aside className='fixed z-50 flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg bottom-4 w-[90%] md:w-auto right-1 md:right-4'>
					<span className='flex items-center hover:opacity-75'>
						<span className='mr-2 text-3xl'>🍪</span>
						<span className='text-sm font-medium'>
							This website uses cookies to provide you the best possible experience.
							<br />
							By continuing to use this website you consent to use our cookies.
						</span>
					</span>

					<button
						className='p-1 ml-3 rounded-full bg-white/20 hover:bg-white/10'
						aria-label='Dismiss Popup'
						onClick={() => setCookiePopup(false)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-4 h-4'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</aside>
			)}

			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
		</div>
  );
}

export default App