import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import noImg from '../../resources/img/no-img.jpg';

import './SinglePage.css';

const SinglePage = () => {
	const {articleId} = useParams();
	const [article, setArticle] = useState({});
	const [imgUrl, setImgUrl] = useState(null)
	const {articlesMainPage, articlesSearchResult} = useSelector(state => state);

	useEffect(() => {
		let art = [...articlesMainPage, ...articlesSearchResult].find(item => item.id.replace("id", "") === articleId.replace("id", ""));
		console.log(art)
		setArticle(art);
		// (art.media && art.media.length !== 0) ? setImgUrl(art.media[0]['media-metadata'][2].url) : setImgUrl(noImg);
		(art.multimedia && art.multimedia.length !== 0) ? setImgUrl(art.multimedia[2].url) : setImgUrl(noImg);
	}, [articleId]);

	const {abstract, title, url} = article;

	return (
		<div className="singlePage">
			<img 
				onError={() => setImgUrl(noImg)}
				src={imgUrl}
				alt={title}
				className="singlePage__img"
				/>
			<h3 className="singlePage__title">
				{title}
			</h3>
			<p className='singlePage__content'>
				{abstract} <br/>
				<a href={url}>{url}</a>
			</p>
		</div>
	);
}

export default SinglePage;