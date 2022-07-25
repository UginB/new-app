import { useDispatch, useSelector } from 'react-redux';
import { setCategory, sideMenuShow} from '../../actions';

import './sideMenu.css';

const SideMenu = () => {
	const {categories, sideMenu} = useSelector(state => state);
	const dispatch = useDispatch();

	const sideMenuClasses = `sideMenu animate__animated ${(sideMenu) ? 'sideMenu_show animate__fadeInLeft' : 'animate__fadeOut sideMenu_hide'}`

	const renderCategoriesList = (arr) => {
		const items = arr.map((item, i)=> {
			return (
				<li 
					key={i}
					onClick={() => {
						dispatch(setCategory(item));
						dispatch(sideMenuShow(false));
					}}
					className='sideMenu__item'
					>
					{item}
				</li>
			)
		})

		return (
			<ul 
				onMouseLeave={() => dispatch(sideMenuShow(false))}
				className={sideMenuClasses}>
					CHOOSE CATEGORY:
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