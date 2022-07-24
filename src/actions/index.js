export const mainArticlesFetching = () => {
    return {
        type: 'MAIN_ARTICLES_FETCHING'
    }
}

export const mainArticlesFetched = (articles) => {
    return {
        type: 'MAIN_ARTICLES_FETCHED',
        payload: articles
    }
}

export const mainArticlesFetchingError = () => {
    return {
        type: 'MAIN_ARTICLES_FETCHING_ERROR'
    }
}

export const searchArticlesFetching = () => {
    return {
        type: 'SEARCH_ARTICLES_FETCHING'
    }
}

export const searchArticlesFetched = (articles) => {
    return {
        type: 'SEARCH_ARTICLES_FETCHED',
        payload: articles
    }
}

export const searchArticlesFetchingError = () => {
    return {
        type: 'SEARCH_ARTICLES_FETCHING_ERROR'
    }
}


export const setCategory = (category) => {
    return {
        type: 'SET_CATEGORY',
		payload: category
    }
}