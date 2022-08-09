import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../../store/';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import SideMenu from '../sideMenu/SideMenu';
// import Spinner from '../spinner/spinner';

import './App.css';
import 'animate.css';

const Page404 = lazy(() => import("../Pages/404"));
const MainPage = lazy(() => import('../mainPage/MainPage'));
const SinglePage = lazy(() => import('../singlePage/SinglePage'));

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<SideMenu/>
				<AppHeader/>
				<main className="main">
					<Suspense fallback={'loading'}>
						<Routes>
							<Route exact path='/' element={<MainPage/>}/>
							<Route exact path='/article/:articleId' element={<SinglePage/>}/>
							<Route path='*' element={<Page404/>}/>
						</Routes>
					</Suspense>
				</main>
				<AppFooter/>
			</Router>
		</Provider>
	);
}

export default App;