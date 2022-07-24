import HotTopic from "../hotTopics/HotTopic";
import LastestNews from "../lastestNews/LastestNews";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {mainArticlesFetching, mainArticlesFetched, mainArticlesFetchingError} from '../../actions';
import useNewsService from '../../services/NewsService';

const MainPage = () => {
    const dispatch = useDispatch();
	const {getTopHeadlines} = useNewsService();

	const {articlesMainPageLoadStatus, currentCountry, currentCategory} = useSelector(state => state);

	useEffect(() => {
		dispatch(mainArticlesFetching());
		getTopHeadlines(currentCountry, currentCategory)
			.then(data => dispatch(mainArticlesFetched(data)))
			.catch(() => dispatch(mainArticlesFetchingError()));
	}, []);

	return (
		<>
			{
				(articlesMainPageLoadStatus !== 'loading')?
				<>
					<HotTopic/>
					<LastestNews/>
				</> : 'Загрузка'
			}
		</>
	);
}

export default MainPage;