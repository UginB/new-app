import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import noImg from '../../resources/img/no-img.jpg';

import './NewsItem.css';

const NewsItem = ({data}) => {
	const [imgUrl, setImgUrl] = useState(null);
	const {id, 
		title, 
		published_date, 
		byline, 
		// media
		multimedia
	} = data;

	useEffect(() => {
		// (media && media.length !== 0) ? setImgUrl(media[0]['media-metadata'][2].url) : setImgUrl(noImg)  
		(multimedia && multimedia.length !== 0) ? setImgUrl(multimedia[2].url) : setImgUrl(noImg);
	}, [multimedia]);

	return(
		<Link to={`/article/${id}`}>
			<li 
				className="newsItem">
				<img 
					onError={() => setImgUrl(noImg)}
					src={imgUrl} 
					alt={title}
					className="newsItem__img"/>
				<h3 className="newsItem__title">
					{(title.length > 50) ? `${title.substr(0, 50)}...` : title}
				</h3>
				<div className="timeAndSource timeAndSource_grey">
					<div className="timeAndSource__time">{published_date}</div>
					<div className="timeAndSource__source">{byline}</div>
				</div>
			</li>
		</Link>
	)
}

export default NewsItem;