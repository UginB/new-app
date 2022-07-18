import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import noImg from '../../resources/img/no-img.jpg';
import './LastestNews.css';

const LastestNews = () => {
	const [newsList, setNewsList] = useState([]);
	const {articlesMainPage} = useSelector(state => state);

	useEffect(() => {
		setNewsList(articlesMainPage);
	}, []);

	const renderNewsList = (arr) => {
		const items =  arr.map((item, i) => {
            if (i !== 0) {
				return (
					<li 
						className="newsItem"
						key={item.id}>
							<Link to={`/article/${item.id}`}>
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

	const renderList = renderNewsList(newsList);

	return (
		<section className="latestNews">
			<h2 className="latestNews__title">Latest News</h2>

			{renderList}

		</section>
	)
}

export default LastestNews;