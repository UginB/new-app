import { useState, useEffect } from 'react';
// import styled from 'styled-components';

import noImg from '../../resources/img/no-img.jpg';
import './HotTopic.css'

const HotTopic = (props) => {
	const [topNews, setTopNews] = useState({});

	useEffect(() => {
		setTopNews(props.data[0])
	}, []);

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
	const {
		// author, 
		// content, 
		// description, 
		// publishedAt, 
		// source, 
		title, 
		// url, 
		urlToImage} = data;

	let ImgUrl = urlToImage;

	return(
		<div className="topicItem">
			<div className="topicItem__left">
				<img
					className="topicItem__img"
					onError={() => {
						ImgUrl = noImg;
					}}
					alt={title}
					src={
						(ImgUrl) ? ImgUrl : noImg
					}
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
						{/* {publishedAt} */}
					</div>
					<div className="timeAndSource__source">
						{/* {author} */}
					</div>
				</div>
			</div>
			<div className="topicItem__text">
				{/* {description} */}
			</div>
		</div>
	);
}

export default HotTopic;