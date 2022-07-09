import { useState, useEffect } from 'react';

import useNewsService from '../../services/NewsService';

import './AppHeader.css';

import union from '../../resources/img/union.svg'

const AppHeader = () => {
	const [showInput, setShowInput] = useState(false);
	const [searchArr, setSearchArr] = useState([]);

	const {getSearchRequest, clearError, process, setProcess} = useNewsService();

	let inputClasses = `header__input animate__animated ${(showInput) ? 'show animate__fadeIn' : 'animate__fadeOut hide'}`

	const searchRequest = (value) => {
		if (value) {
			getSearchRequest(value)
			.then(setSearchArr);
		} else {
			setSearchArr([]);
		}
	}

	const renderSearchList = (arr) => {
		if (arr) {
			const items = arr.map((item, i)=> {
				return (
					<li 
						className="newsItem"
						key={i}>
							{item}
					</li>
				)
			})
	
			return (
				<ul>
					{items}
				</ul>
			)
		}
	}

	return (
		<header className="header">
			<div className="header__logo">
				<div className="header__logo__scqr">
					News
				</div> 
				Portal
			</div>
			<div className="header__rightSide">
				<div className="header__search">
					<input 
						className={inputClasses} 
						placeholder={'введите поисковый запрос'} 
						name='search' 
						onChange={(e) => searchRequest(e.target.value)}/>
					<img 
						onClick={
							(showInput) ? () => setShowInput(false) : () => setShowInput(true)
						}
						className="header__search__img" src={union} alt="search"/>
				</div>
				<div className="header__burger">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			{/* {renderSearchList(searchArr)} */}
		</header>
	)
}

export default AppHeader;