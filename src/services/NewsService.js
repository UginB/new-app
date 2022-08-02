import {useHttp} from '../hooks/http.hook';
import nextId from 'react-id-generator/';

import noImg from '../resources/img/no-img.jpg';

const useNewsService = () => {
	const {request} = useHttp();

	const _apiBase = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/';
	// const _apiBase = 'https://newsapi.org/v2/';
	const _apiKey = 'ca7b227040a64e36bcc5fbbe4defc5c9';

	const getTopHeadlines = async (country = 'ru', category = 'general') => {
        const res = await request(`${_apiBase}top-headlines?country=${country}&category=${category}&apiKey=${_apiKey}`);
		console.log(_transformData(res.articles))
        return _transformData(res.articles);
    }

	const getSearchRequest = async (value) => {
        const res = await request(`${_apiBase}everything?q=${value}&sortBy=popularity&pageSize=10&apiKey=${_apiKey}`);
		console.log(_transformData(res.articles))
        return _transformData(res.articles);
	}

	const _transformData = (data) => {
		return data.map(item => {
			return {
				...item, 
				urlToImage: (item.urlToImage) ? item.urlToImage : noImg,
				id : nextId()
			}
		})
	}

	return {
		getTopHeadlines,
		getSearchRequest
	}
}

export default useNewsService;