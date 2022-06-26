import './LastestNews.css';

const LastestNews = () => {
	return (
		<section className="latestNews">
			<h2 className="latestNews__title">Latest News</h2>
			<div className="latestNews__content">
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
			</div>
		</section>
	)
}

export default LastestNews;