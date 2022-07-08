import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

import NewsService from '../../services/NewsService';

import noImg from '../../resources/img/no-img.jpg';
import './SinglePage.css';

const SinglePage= () => {
	const {articleId} = useParams();
	const [article, setArticle] = useState({});

	const {getTopHeadlines, clearError, process, setProcess} = NewsService();

	useEffect(() => {
        updateArticle();
        // eslint-disable-next-line
    }, [articleId]);

    const updateArticle = () => {
        clearError();
        getTopHeadlines()
            .then(onArticleLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onArticleLoaded = (item) => {
        setArticle(item[articleId]);
		console.log(item[articleId])
    }

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