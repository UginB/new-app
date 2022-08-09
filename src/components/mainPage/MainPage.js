import HotTopic from "../hotTopics/HotTopic";
import LastestNews from "../lastestNews/LastestNews";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {mainArticlesFetching, mainArticlesFetched, mainArticlesFetchingError} from '../../actions';

import useNewsService from '../../services/NewsService';
// import Spinner from "../spinner/spinner";

const MainPage = () => {
    const dispatch = useDispatch();
	const {getTopHeadlines} = useNewsService();

	const {articlesMainPageLoadStatus, currentCategory} = useSelector(state => state);

	useEffect(() => {
		dispatch(mainArticlesFetching());
		getTopHeadlines(currentCategory)
			.then(data => dispatch(mainArticlesFetched(data)))
			.catch(() => dispatch(mainArticlesFetchingError()));
	}, [currentCategory]); 
	// eslint-disable-next-line

	return (
		<>
			{
				(articlesMainPageLoadStatus !== 'loading')?
				<>
					<HotTopic/>
					<LastestNews/>
				</> : 'loading'
			}
		</>
	);
}

export default MainPage;