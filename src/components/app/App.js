import { useEffect } from 'react';

import AppHeader from '../appHeader/AppHeader';
import HotTopic from '../hotTopics/HotTopic';
import LastestNews from '../lastestNews/LastestNews';
import AppFooter from '../appFooter/AppFooter';

import './App.css';

const App = () => {

	// useEffect(() => {
	// 	console.log('hello App')
	// }, []);

	return (
		<>
			<AppHeader/>
			<main className="main">
				<HotTopic/>
				<LastestNews/>
			</main>
			<AppFooter/>
		</>
	);
}

export default App;