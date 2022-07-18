import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import noImg from '../../resources/img/no-img.jpg';
import './SinglePage.css';

const SinglePage = () => {
	const {articleId} = useParams();
	const [articlesArr, setArticlesArr] = useState([]);
	const [article, setArticle] = useState({});
	const {articlesMainPage, articlesSearchResult} = useSelector(state => state);

	useEffect(() => {
		console.log(articlesMainPage)
		console.log(articlesSearchResult)
		setArticlesArr([...articlesMainPage, ...articlesSearchResult])
		console.log(articlesArr)
		let obj = articlesArr.find(item => item.id == articleId);
		console.log(obj)
		setArticle(obj);
		console.log(article)
    }, [
		articleId
	]);

	return (
		<div className="singlePage">
			<img src={
					(!article.urlToImage) ? noImg : article.urlToImage
				} 
				alt={article.title}
				className="singlePage__img"/>
					<h3 className="singlePage__title">
						{article.title}
					</h3>
					<p className='singlePage__content'>
						{ 
						(!article.content) ? article.description : article.content
						}
					</p>
		</div>
	);
}

export default SinglePage;