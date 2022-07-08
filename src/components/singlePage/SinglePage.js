import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

import NewsService from '../../services/NewsService';

import noImg from '../../resources/img/no-img.jpg';

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
		<div>
			<img src={
				(!article.urlToImage) ? noImg : article.urlToImage
				} 
				alt={article.title}
				className="newsItem__img"/>
					<h3 className="newsItem__title">
						{article.title}
					</h3>
					<p>
						{ 
						(!article.content) ? article.description : article.content
						}
					</p>
			
		</div>
	);
}

export default SinglePage;