import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticlesFetching, searchArticlesFetched, searchArticlesFetchingError} from '../../actions'

import useNewsService from '../../services/NewsService';

import './AppHeader.css';

import union from '../../resources/img/union.svg'

const AppHeader = () => {
	const [showInput, setShowInput] = useState(false);
	const {articlesSearchResult, articlesSearchLoadStatus} = useSelector(state => state);
	const [itemList, setItemList] = useState([])

	const {getSearchRequest} = useNewsService();
	const dispatch = useDispatch();

	let inputClasses = `header__input animate__animated ${(showInput) ? 'show animate__fadeIn' : 'animate__fadeOut hide'}`

	const searchRequest = (value) => {
		if (value) {
			console.log('rrrrr')
			dispatch(searchArticlesFetching());
			getSearchRequest(value)
			.then((data) => dispatch(searchArticlesFetched(data)))
			.catch(searchArticlesFetchingError());
		} else {
			console.log('ggg')
			renderList = renderSearchList([])
		}
	}
	
	const renderSearchList = (arr) => {
		const listClasses = (articlesSearchResult.length) ? "show" : "hide";

		const items = arr.map((item, i)=> {
			return (
				<li 
					key={item.id}>
					<Link to={`/article/${item.id}`}>
						{item.title}
					</Link>
				</li>
			)
		})

		return (
			<ul className={listClasses}>
				{items}
			</ul>
		)
	}

	let renderList = renderSearchList(articlesSearchResult)

	return (
		<>
			<header className="header">
				<Link to={`/`} className="header__logo">
					<div className="header__logo__scqr">
						News
					</div> 
					Portal
				</Link>
				<div className="header__rightSide">
					<label className="header__search" for="headerInput">
						<input 
							className={inputClasses} 
							id="headerInput"
							placeholder={'введите поисковый запрос'} 
							name='search' 
							onChange={(e) => searchRequest(e.target.value)}/>
						<img 
							onClick={
								(showInput) ? () => setShowInput(false) : () => setShowInput(true)
							}
							className="header__search__img" src={union} alt="search"/>
					</label>
					<div className="header__burger">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</header>
			{renderList}
		</>
	)
}

export default AppHeader;