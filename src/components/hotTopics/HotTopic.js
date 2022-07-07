import { useState, useEffect } from 'react';
import styled from 'styled-components';

import NewsService from '../../services/NewsService';

import './HotTopic.css'

const HotTopic = () => {
	const [topNews, setTopNews] = useState({});
	const {getOneHotTopicNews, clearError, process, setProcess} = NewsService();

	useEffect(() => {
		updateNews();
	}, []);

	const onNewsLoaded = (news) => {
		setTopNews(news);
	}

	// const updateNews = () => {
	// 	clearError();
	// 	getOneHotTopicNews()
	// 		.then(console.log);
	// }

	const updateNews = () => {
		clearError();
		getOneHotTopicNews()
			.then(onNewsLoaded)
			.then(() => setProcess('confirmed'));
	}

	return (
		<section className="hotTopics">
			<h1 className="hotTopics__title">
				Hot Topics
			</h1>
			<View data={topNews}/>
		</section>
	)
}

const View = ({data}) => {
	const {title, description, image_url, pubDate, creator} = data;

	return(
		<div className="topicItem">
			<div 
				className="topicItem__img" 
				alt={title}
				style={{
					backgroundImage: `url(${image_url})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}>
				<h3 className="topicItem__title">
					{title}
				</h3>
				<div className="timeAndSource">
					<div className="timeAndSource__time">
						{pubDate}
					</div>
					<div className="timeAndSource__source">
						{creator}
					</div>
				</div>
			</div>
			<div className="topicItem__text">
				{description}
			</div>
		</div>
	);
}

export default HotTopic;