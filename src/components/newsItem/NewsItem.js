import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import noImg from '../../resources/img/no-img.jpg';

const NewsItem = ({data}) => {
	const [imgUrl, setImgUrl] = useState(null);

	const {id, title, publishedAt, author, urlToImage} = data;

	useEffect(() => {
		setImgUrl(urlToImage);
	}, []);

	return(
		<li 
			className="newsItem">
			<Link to={`/article/${id}`}>
				<img 
					onError={() => setImgUrl(noImg)}
					src={imgUrl} 
					alt={title}
					className="newsItem__img"/>
				<h3 className="newsItem__title">
					{(title.length > 40) ? `${title.substr(0, 35)}...` : title}
				</h3>
				<div className="timeAndSource timeAndSource_grey">
					<div className="timeAndSource__time">{publishedAt}</div>
					<div className="timeAndSource__source">{author}</div>
				</div>
			</Link>
		</li>
	)
}

export default NewsItem;