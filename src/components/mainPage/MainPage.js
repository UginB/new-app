import HotTopic from "../hotTopics/HotTopic";
import LastestNews from "../lastestNews/LastestNews";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {mainArticlesFetching, mainArticlesFetched, mainArticlesFetchingError} from '../../actions';
import useNewsService from '../../services/NewsService';

const MainPage = () => {
	const {articlesMainPage, 
		// articlesMainPageLoadStatus
	} = useSelector(state => state);
    const dispatch = useDispatch();
	const {getTopHeadlines} = useNewsService();

	useEffect(() => {
		dispatch(mainArticlesFetching());
		getTopHeadlines()
			.then(data => dispatch(mainArticlesFetched(data)))
			.then(() => dispatch(mainArticlesFetchingError()))
	}, []);

	return (
		<>
			<HotTopic data={articlesMainPage}/>
			<LastestNews data={articlesMainPage}/>
		</>
	);
}

export default MainPage;