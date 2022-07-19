const initialState = {
    articlesMainPage: [],
	articlesSearchResult: [],
    articlesMainPageLoadStatus: 'idle',
	articlesSearchLoadStatus: 'idle',
	articleLoadStatus: 'idle',
    currentFilter: 'all'
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
        default: return state
    }
}

export default reducer;