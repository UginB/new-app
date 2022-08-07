const initialState = {
    articlesMainPage: [],
	articlesSearchResult: [],
	categories: ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'],
    articlesMainPageLoadStatus: 'idle',
	articlesSearchLoadStatus: 'idle',
    currentCategory: 'world',
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