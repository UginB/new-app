import HotTopic from "../hotTopics/HotTopic";
import LastestNews from "../lastestNews/LastestNews";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {mainArticlesFetching, mainArticlesFetched, mainArticlesFetchingError} from '../../actions';
import { Rings } from  'react-loader-spinner'
import useNewsService from '../../services/NewsService';

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
				</> : 
				// 'loading'
				<Rings
					height="300"
					width="300"
					color="black"
					radius="6"
					wrapperStyle={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					visible={true}
					ariaLabel="rings-loading"/>
			}
		</>
	);
}

export default MainPage;