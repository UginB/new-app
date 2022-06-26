import {useHttp} from '../hooks/http.hook';

const useNewsService = () => {
	const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://cors-anywhere.herokuapp.com/https://newsdata.io/api/1/news?';
	const _apiKey = 'apikey=pub_8695512678a20c513a02cd6dd17bd3333600';
	const _country = '&country=ru';
	const _size = '&page=10';
    const _category = '&category=sports';
	const _lang = '&language=ru';
	const q = '&q=social';

	
	const getHotTopicNews = async (id) => {
        const res = await request(`${_apiBase}${_apiKey}${_lang}${_size}`);
        return res;
    }
	// https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=f11ae0ce1869fe40b587867e296d143a
	return {
		clearError, 
		process, 
		setProcess,
		getHotTopicNews
	}
}

export default useNewsService;