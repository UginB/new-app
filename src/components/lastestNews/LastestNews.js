import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import noImg from '../../resources/img/no-img.jpg';
import './LastestNews.css';

const LastestNews = (props) => {
	const [newsList, setNewsList] = useState([]);

	useEffect(() => {
		setNewsList(props.data);
	}, []);

	const renderNewsList = (arr) => {
		const items =  arr.map((item, i) => {
            if (i !== 0) {
				return (
					<li 
						className="newsItem"
						key={i}>
							<Link to={`/article/${i}`}>
								<img 
									onError={() => {
										const fixNewsList = [...newsList]
										fixNewsList[i].urlToImage = noImg;
										setNewsList(fixNewsList)
									}}
									src={
									(item.urlToImage) ? item.urlToImage : noImg
									} 
									
									alt={item.title}
									className="newsItem__img"/>
								<h3 className="newsItem__title">
									{(item.title.length > 40) ? `${item.title.substr(0, 35)}...` : item.title}
								</h3>
								<div className="timeAndSource timeAndSource_grey">
									<div className="timeAndSource__time">{item.publishedAt}</div>
									<div className="timeAndSource__source">{item.author}</div>
								</div>
							</Link>
					</li>
				)
			}
        });

        return (
            <ul className="latestNews__content">
                {items}
            </ul>
        )
	}

	return (
		<section className="latestNews">
			<h2 className="latestNews__title">Latest News</h2>

			{renderNewsList(newsList)}

		</section>
	)
}

export default LastestNews;