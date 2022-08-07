import {useHttp} from '../hooks/http.hook';
import nextId from 'react-id-generator/';

const useNewsService = () => {
	const {request} = useHttp();

	const _apiBase = 'https://api.nytimes.com/svc/';
	const _apiKey = 'v4kDqrpaGUclSouAkG457SGtvpsry2Ri';

	// const getTopHeadlines = async (country = 'ru', category = 'general') => {
    //     const res = await request(`${_apiBase}top-headlines?country=${country}&category=${category}&apiKey=${_apiKey}`);
	// 	console.log(_transformData(res.articles))
    //     return _transformData(res.articles);
    // }

	const getTopHeadlines = async (category = 'world') => {
        const res = await request(`${_apiBase}topstories/v2/${category}.json?api-key=${_apiKey}`);
		console.log(res.results)
        return _transformData(res.results);
    }

	const getSearchRequest = async (value) => {
        const res = await request(`${_apiBase}search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&facet=true&begin_date=20120101&end_date=20120101&api-key=${_apiKey}`);
		console.log(res.response.docs)
        return _transformData(res.response.docs);
	}

	const _transformData = (data) => {
		// const arr = data.filter(item => item.item_type === 'Article');
		
		return data.map(item => {
			return {
				...item,
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