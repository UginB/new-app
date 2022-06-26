import './AppHeader.css';

const AppHeader = () => {
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
					<img className="header__search__img" src="./Union.svg" alt="search"/>
				</div>
				<div className="header__burger">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</header>
	)
}

export default AppHeader;