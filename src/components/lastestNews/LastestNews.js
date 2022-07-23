import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NewsItem from '../newsItem/NewsItem';

import './LastestNews.css';

const LastestNews = () => {
	const [newsList, setNewsList] = useState([]);

	const {articlesMainPage, articlesMainPageLoadStatus} = useSelector(state => state);

	useEffect(() => {
		setNewsList(articlesMainPage);
	}, []);

	const renderNewsList = (arr) => {
		const items =  arr.map((item, i) => {
            if (i !== 0) {
				return (
					<NewsItem data={item}/>
				)
			}
        });

        return (
            <ul className="latestNews__content">
                {(articlesMainPageLoadStatus === 'error') ? 'Извините, произошла ошибка' : items}
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