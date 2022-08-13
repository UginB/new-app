import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticlesFetching, searchArticlesFetched, searchArticlesFetchingError, sideMenuShow} from '../../actions'

import useNewsService from '../../services/NewsService';

import './AppHeader.css';

import union from '../../resources/img/union.svg'

const AppHeader = () => {
	const [showInput, setShowInput] = useState(false);
	const [showList, setShowList] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const {articlesSearchResult, articlesSearchLoadStatus, sideMenu} = useSelector(state => state);

	const {getSearchRequest} = useNewsService();
	const dispatch = useDispatch();

	let inputClasses = `header__input animate__animated ${(showInput) ? 'show animate__fadeIn' : 'animate__fadeOut hide'}`
	let btnClasses = `animate__animated ${(showInput) ? 'show animate__fadeIn' : 'animate__fadeOut hide'}`

	const searchRequest = (value) => {
		if (value) {
			dispatch(searchArticlesFetching());
			getSearchRequest(value)
			.then((data) => {
				dispatch(searchArticlesFetched(data));
				console.log(data)
			})
			.catch(searchArticlesFetchingError()); 
			setShowList(true);
		} else {
			setShowList(false);
			setSearchValue('')
		}
	}
	
	const renderSearchList = (arr) => {
		const listClasses = (showList) ? "searchList show" : "searchList hide";
		const items = (arr.length) ? 
		arr.map((item, i)=> {
			return (
				<li 
					key={item.id}>
					<a href={item.web_url}>
						{item.snippet}
					</a>
				</li>
			)
		}) :
		'По вашему запросу ничего не нашлось'

		return (
			<ul className={listClasses}>
				{
					(searchValue) ? items : null
				}
			</ul>
		)
	}

	let renderList = (articlesSearchLoadStatus === 'error') ? 'Извините произошла ошибка' : renderSearchList(articlesSearchResult);

	return (
		<>
			<header className="header">
				<Link to={`/`} className="header__logo">
					<div 
						onClick={() => {
							setShowList(false);
							setSearchValue('');
						}}
						className="header__logo__scqr">
						News
					</div> 
					Portal
				</Link>
				<div className="header__rightSide">
					<label className="header__search" htmlFor="headerInput">
						<button 
							className={btnClasses}
							onClick={() => {
							setSearchValue('');
							setShowList(false);
						}}>reset</button>
						<button 
							className={btnClasses}
							onClick={() => {
							searchRequest(searchValue);
							setShowList(true);
						}}>search</button>
						<input 
							className={inputClasses} 
							id="headerInput"
							placeholder={'enter and push `search`'} 
							name='search'
							value={searchValue}
							onChange={(e) => {
								setSearchValue(e.target.value);
								setShowList(false);
							}}
							/>
						<img 
							onClick={
								(showInput) ? () => setShowInput(false) : () => setShowInput(true)
							}
							className="header__search__img" src={union} alt="search"/>
					</label>
					<div 
						onClick={() => { (sideMenu) ? dispatch(sideMenuShow(false)) : dispatch(sideMenuShow(true))}}
						className="header__burger">
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