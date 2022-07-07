import {useHttp} from '../hooks/http.hook';

const useNewsService = () => {
	const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://cors-anywhere.herokuapp.com/https://newsdata.io/api/1/news?';
	const _apiKey = 'apikey=pub_8695512678a20c513a02cd6dd17bd3333600';
	const _country = '&country=ru';
    const _category = '&category=sports';
	const _lang = '&language=';
	const q = '&q=social%20AND%20pizza';
	const _page = '&page=';

	const getOneHotTopicNews = async (page = '1', lang = 'ru') => {
        const res = await request(`${_apiBase}${_apiKey}${_lang}${lang}${_page}${page}`);
		// console.log(res.results[0])
        return _transformData(res.results[0]);
    }

	const _transformData = (data) => {

		return {
			title: data.title,
			link: data.link,
			keywords:  (data.keywords !== null) ? data.keywords.join(', ') : 'Ключевые слова не указаны',
			creator: (data.creator !== null) ? data.creator.join(', ') : 'Автор не указан',
			description: data.description,
			pubDate: data.pubDate,
			image_url: data.image_url,
			country: data.country.join(', '),
			category: data.category.join(', '),
			language: data.language
		}
	}

	// https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=f11ae0ce1869fe40b587867e296d143a
	return {
		clearError, 
		process, 
		setProcess,
		getOneHotTopicNews
	}
}

export default useNewsService;