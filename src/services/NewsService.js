import {useHttp} from '../hooks/http.hook';
import nextId from 'react-id-generator/';

const useNewsService = () => {
	const {request} = useHttp();

	const _apiBase = 'https://api.nytimes.com/svc/';
	const _apiKey = 'v4kDqrpaGUclSouAkG457SGtvpsry2Ri';

	const getTopHeadlines = async (category = 'world') => {
        const res = await request(`${_apiBase}topstories/v2/${category}.json?api-key=${_apiKey}`);
		console.log(res.results)
        return _transformHeadlines(res.results);
    }

	const getSearchRequest = async (value) => {
        const res = await request(`${_apiBase}search/v2/articlesearch.json?q=${value}&api-key=${_apiKey}`);
		console.log(res.response.docs)
        return _transformSearchData(res.response.docs);
		// return res.response.docs;
	}

	const _transformHeadlines = (data) => {
		const arr = data.filter(item => item.item_type === 'Article');
		
		return arr.map(item => {
			return {
				...item,
				id : nextId(),
				published_date: `${item.published_date.slice(0, 10).split('-').reverse().join('.')} ${item.published_date.slice(11, 16)}`,
				content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus sunt earum laboriosam quia reiciendis corporis itaque beatae aut error harum possimus cum ut voluptatem, necessitatibus assumenda ea ullam obcaecati.'
			}
		})
	}

	const _transformSearchData = (data) => {
		const arr = data.filter(item => item.type_of_material === "News" || item.type_of_material === "Review" || item.type_of_material === "Op-Ed");

		return arr.map(item => {
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