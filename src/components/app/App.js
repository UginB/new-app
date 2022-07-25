import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../../store/';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import SideMenu from '../sideMenu/SideMenu';

import './App.css';
import 'animate.css';

const MainPage = lazy(() => import('../mainPage/MainPage'));
const SinglePage = lazy(() => import('../singlePage/SinglePage'));

const App = () => {

	return (
		<Provider store={store}>
			<Router>
				<AppHeader/>
				<main className="main">
					<SideMenu/>
					<Suspense fallback={'Загрузка'}>
						<Routes>
							<Route exact path='/' element={<MainPage/>}/>
							<Route exact path='/article/:articleId' element={<SinglePage/>}/>
						</Routes>
					</Suspense>
				</main>
				<AppFooter/>
			</Router>
		</Provider>
	);
}

export default App;






// # Install the libs we are going to use in our example:
// npm install axios jsdom @mozilla/readability
// // we need axios to make HTTP requests
// const axios = require('axios');

// // and we need jsdom and Readability to parse the article HTML
// const { JSDOM } = require('jsdom');
// const { Readability } = require('@mozilla/readability');

// // First lets get some search data from News API

// // Build the URL we are going request. This will get articles related to Apple and sort them newest first
// let url = 'https://newsapi.org/v2/everything?' +
// 'q=Apple&' +
// 'sortBy=publishedAt&' +
// 'apiKey=ca7b227040a64e36bcc5fbbe4defc5c9';

// // Make the request with axios' get() function
// axios.get(url).then(function(r1) {

//   // At this point we will have some search results from the API. Take the first search result...
//   let firstResult = r1.data.articles[0];

//   // ...and download the HTML for it, again with axios
//   axios.get(firstResult.url).then(function(r2) {

//     // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
//     let dom = new JSDOM(r2.data, {
//       url: firstResult.url
//     });

//     // now pass the DOM document into readability to parse
//     let article = new Readability(dom.window.document).parse();

//     // Done! The article content is in the textContent property
//     console.log(article.textContent);
//   })
// })