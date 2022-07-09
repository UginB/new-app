import {useHttp} from '../hooks/http.hook';

const useNewsService = () => {
	const {request, clearError, process, setProcess} = useHttp();

	const _apiBase = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/';
	const _apiKey = 'ca7b227040a64e36bcc5fbbe4defc5c9';

	const getTopHeadline = async (country = 'us') => {
        const res = await request(`${_apiBase}top-headlines?country=${country}&apiKey=${_apiKey}`);
		console.log(res)
        return _transformData(res.articles[0]);
    }

	const getTopHeadlines = async (country = 'us') => {
        const res = await request(`${_apiBase}top-headlines?country=${country}&apiKey=${_apiKey}`);
		console.log(res.articles)
        return res.articles;
    }

	const getSearchRequest = async (value) => {
        const res = await request(`${_apiBase}everything?q=${value}&sortBy=popularity&pageSize=10&apiKey=${_apiKey}`);
		console.log(res)
        return res;
	}

	const _transformData = (data) => {
		return {
			author: data.author,
			content: data.content,
			description: data.description,
			publishedAt: data.publishedAt,
			source: data.source.name,
			title: data.title,
			url: data.url,
			urlToImage: data.urlToImage
		}
	}


	return {
		clearError, 
		process, 
		setProcess,
		getTopHeadline,
		getTopHeadlines,
		getSearchRequest
	}
}

export default useNewsService;