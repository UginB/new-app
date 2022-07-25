const initialState = {
    articlesMainPage: [],
	articlesSearchResult: [],
	categories: ['general', 'business', 'entertainment','health', 'science', 'sports', 'technology'],
	counties: ['ae','ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve','za'],
    articlesMainPageLoadStatus: 'idle',
	articlesSearchLoadStatus: 'idle',
	articleLoadStatus: 'idle',
    currentCategory: 'general',
	currentCountry: 'ru',
	pageSize: 20,
	sideMenu: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAIN_ARTICLES_FETCHING':
            return {
                ...state,
                articlesMainPageLoadStatus: 'loading'
            }
        case 'MAIN_ARTICLES_FETCHED':
            return {
                ...state,
                articlesMainPage: action.payload,
                articlesMainPageLoadStatus: 'idle'
            }
        case 'MAIN_ARTICLES_FETCHING_ERROR':
            return {
                ...state,
                articlesMainPageLoadStatus: 'error'
            }
		case 'SEARCH_ARTICLES_FETCHING':
			return {
				...state,
				articlesSearchLoadStatus: 'loading'
			}
		case 'SEARCH_ARTICLES_FETCHED':
			return {
				...state,
				articlesSearchResult: action.payload,
				articlesSearchLoadStatus: 'idle'
			}
		case 'SEARCH_ARTICLES_FETCHING_ERROR':
			return {
				...state,
				articlesSearchLoadStatus: 'error'
			}
		case 'SET_CATEGORY':
			return {
				...state,
				currentCategory: action.payload
			}
		case 'SIDE_MENU_SHOW':
			return {
				...state,
				sideMenu: action.payload
			}
		default: return state
    }
}

export default reducer;