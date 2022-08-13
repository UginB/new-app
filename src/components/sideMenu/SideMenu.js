import { useDispatch, useSelector } from 'react-redux';
import { setCategory, sideMenuShow} from '../../actions';
import { Link } from 'react-router-dom';

import './sideMenu.css';

const SideMenu = () => {
	const {categories, sideMenu, currentCategory} = useSelector(state => state);
	const dispatch = useDispatch();

	const sideMenuClasses = `sideMenu animate__animated ${(sideMenu) ? 'sideMenu_show animate__fadeInLeft' : 'animate__fadeOut sideMenu_hide'}`;

	const categoryItemClasses = (category) => (currentCategory === category) ? 'sideMenu__item_current' : 'sideMenu__item';

	const renderCategoriesList = (arr) => {
		const items = arr.map((item, i)=> {
			return (
				<li 
					key={i}
					onClick={() => {
						dispatch(setCategory(item));
						dispatch(sideMenuShow(false));
					}}
					className={categoryItemClasses(item)}>
					{item}
				</li>
			)
		})

		return (
			<ul 
				onMouseLeave={() => dispatch(sideMenuShow(false))}
				className={sideMenuClasses}>
					<div className='sideMenu__title'>CHOOSE CATEGORY:</div>
				{items}
			</ul>
		)
	}
	
	let renderCategories = renderCategoriesList(categories);

	return (
		<>
			{renderCategories}
		</>
	)
}

export default SideMenu;