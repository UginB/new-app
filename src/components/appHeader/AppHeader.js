import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useNewsService from '../../services/NewsService';

import './AppHeader.css';

import union from '../../resources/img/union.svg'

const AppHeader = (props) => {
	const [showInput, setShowInput] = useState(false);
	const [searchArr, setSearchArr] = useState([{'title':'ass'},{'title':'ass'},{'title':'ass'}]);

	const {getSearchRequest, clearError, process, setProcess} = useNewsService();

	let inputClasses = `header__input animate__animated ${(showInput) ? 'show animate__fadeIn' : 'animate__fadeOut hide'}`

	const searchRequest = (value) => {
		if (value) {
			getSearchRequest(value)
			.then((val) => {
				setSearchArr(val);
				props.setSearchValue(val)
			} )
			.then(() => renderSearchList(searchArr));
		} else {
			setSearchArr([]);
			renderSearchList(searchArr)
		}
	}
	
	const renderSearchList = (arr) => {
		const listClasses = (searchArr.length) ? "show" : "hide";

		const items = arr.map((item, i)=> {
			return (
				<li 
					key={i}>
					<Link to={`/article/${i}`}>
						{item.title}
					</Link>
				</li>
			)
		})

		return (
			<ul 
			className=
			// 'show'
			{listClasses}
			>
				{items}
			</ul>
		)
	}

	return (
		<>
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
			</header>
			{renderSearchList(searchArr)}
		</>
	)
}

export default AppHeader;