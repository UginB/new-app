import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import noImg from '../../resources/img/no-img.jpg';
import './HotTopic.css'

const HotTopic = () => {
	const [topNews, setTopNews] = useState({});
	const {articlesMainPage, articlesMainPageLoadStatus} = useSelector(state => state);
	
	useEffect(() => {
		setTopNews(articlesMainPage[0]);
	}, [articlesMainPage]);

	return (
		<section className="hotTopics">
			<h1 className="hotTopics__title">
				Hot Topic
			</h1>
			{(articlesMainPageLoadStatus === 'error') ? 'Извините, произошла ошибка' : <View data={topNews}/>}
		</section>
	)
}

const View = ({data}) => {
	const {
		byline, 
		abstract, 
		published_date, 
		title, 
		// media,
		multimedia,
		id
	} = data;
	
	const [imgUrl, setImgUrl] = useState(null)
	
	useEffect(() => {
		// (media && media.length !== 0) ? setImgUrl(media[0]['media-metadata'][2].url) : setImgUrl(noImg);
		(multimedia && multimedia.length !== 0) ? setImgUrl(multimedia[2].url) : setImgUrl(noImg);
	}, [multimedia]);

	return(
		<Link to={`/article/${id}`}>
			<div className="topicItem">
				<div className="topicItem__left">
					<img
						onError={() => {
							setImgUrl(noImg)
						}}
						src={imgUrl}
						alt={title}
						className="topicItem__img"
						/>
					<h3 className="topicItem__title">
						{title}
					</h3>
					<div className="timeAndSource">
						<div className="timeAndSource__time">
							{published_date}
						</div>
						<div className="timeAndSource__source">
							{byline}
						</div>
					</div>
				</div>
				<div className="topicItem__text">
					{abstract}
				</div>
			</div>
		</Link>
	);
}

export default HotTopic;
