import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import noImg from '../../resources/img/no-img.jpg';
import './HotTopic.css'

const HotTopic = () => {
	const [topNews, setTopNews] = useState({});
	const {articlesMainPage, articlesMainPageLoadStatus} = useSelector(state => state);
	
	useEffect(() => {
		setTopNews(articlesMainPage[0])
	}, []);

	return (
		<section className="hotTopics">
			<h1 className="hotTopics__title">
				Hot Topics
			</h1>
			{(articlesMainPageLoadStatus === 'error') ? 'Извините, произошла ошибка' : <View data={topNews}/>}
		</section>
	)
}

const View = ({data}) => {
	const {
		author, 
		description, 
		publishedAt, 
		title, 
		urlToImage,
		id
	} = data;
	
	const [imgUrl, setImgUrl] = useState(null)
	
	useEffect(() => {
		setImgUrl(urlToImage);
	}, []);

	return(
		<Link to={`/article/${id}`}>
			<div className="topicItem">
				<div className="topicItem__left">
					<img
						className="topicItem__img"
						onError={() => {
							// setImgUrl(noImg)
						}}
						alt={title}
						src={imgUrl}
						/>
					<div className="topicItem__img" 
					alt={title}
					style={{
						backgroundImage: `url(${urlToImage})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}/>
					<h3 className="topicItem__title">
						{title}
					</h3>
					<div className="timeAndSource">
						<div className="timeAndSource__time">
							{publishedAt}
						</div>
						<div className="timeAndSource__source">
							{author}
						</div>
					</div>
				</div>
				<div className="topicItem__text">
					{description}
				</div>
			</div>
		</Link>
	);
}

export default HotTopic;
