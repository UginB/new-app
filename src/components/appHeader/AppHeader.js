import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticlesFetching, searchArticlesFetched, searchArticlesFetchingError} from '../../actions'

import useNewsService from '../../services/NewsService';

import './AppHeader.css';

import union from '../../resources/img/union.svg'

const AppHeader = () => {
	const [showInput, setShowInput] = useState(false);
	const [showList, setShowList] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const {articlesSearchResult, articlesSearchLoadStatus} = useSelector(state => state);

	const {getSearchRequest} = useNewsService();
	const dispatch = useDispatch();

	let inputClasses = `header__input animate__animated ${(showInput) ? 'show animate__fadeIn' : 'animate__fadeOut hide'}`

	const searchRequest = (value) => {
		setSearchValue(value);
		if (value) {
			dispatch(searchArticlesFetching());
			getSearchRequest(value)
			.then((data) => dispatch(searchArticlesFetched(data)))
			.catch(searchArticlesFetchingError()); 
			setShowList(true);
		} else {
			setShowList(false);
		}
	}
	
	const renderSearchList = (arr) => {
		const listClasses = (showList) ? "show" : "hide";

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
				{(searchValue) ? items : 'По вашему запросу ничего не нашлось'}
			</ul>
		)
	}

	let renderList = (articlesSearchLoadStatus === 'error') ? 'Извините произошла ошибка' : renderSearchList(articlesSearchResult);

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
					<label className="header__search" htmlFor="headerInput">
						<input 
							className={inputClasses} 
							id="headerInput"
							placeholder={'введите поисковый запрос'} 
							name='search'
							value={searchValue}
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