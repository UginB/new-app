import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import useNewsService from '../../services/NewsService';

import noImg from '../../resources/img/no-img.jpg';
import './LastestNews.css';

const LastestNews = () => {
	const [newsList, setNewsList] = useState([]);
	const [imgLoad, setImgLoad] = useState(true);

	const {getTopHeadlines, clearError, process, setProcess} = useNewsService();

	useEffect(() => {
		updateNewsList();
	}, []);

	const onNewsListLoaded = (news) => {
		setNewsList(news);
	}

	// const updateNews = () => {
	// 	clearError();
	// 	getOneHotTopicNews()
	// 		.then(console.log);
	// }

	const updateNewsList = () => {
		clearError();
		getTopHeadlines()
			.then(onNewsListLoaded)
			.then(() => setProcess('confirmed'));
	}

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

			{/* <div className="latestNews__content">
				<div className="newsItem">
					<img src="%PUBLIC_URL%/news_bg.jpg" alt="newz" className="newsItem__img"/>
					<h3 className="newsItem__title">
						News Title Lorem Ipsum Dolor Sit Amet
					</h3>
					<div className="timeAndSource timeAndSource_grey">
						<div className="timeAndSource__time">2 Hours Ago</div>
						<div className="timeAndSource__source">CNN Indonesia</div>
					</div>
				</div>
			</div> */}
		</section>
	)
}

export default LastestNews;