const HotTopic = () => {
	return (
		<section className="hotTopics">
					<h1 className="hotTopics__title">
						Hot Topics
					</h1>
					<div className="topicItem">
						<img src="%PUBLIC_URL%/news_bg.jpg" className="topicItem__img" alt="news picture"/>
						<div className="topicItem__left">
						<h3 className="topicItem__title">
							Massa tortor nibh nulla condimentum imperdiet scelerisque...
						</h3>
						<div className="timeAndSource">
							<div className="timeAndSource__time">2 Hours Ago</div>
							<div className="timeAndSource__source">CNN Indonesia</div>
						</div>
					</div>
					<div className="topicItem__text">
						<span>Nisi</span>, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... <a href="#" className="topicItem__link">read more</a>
					</div>
				</div>
		</section>
	)
}

export default HotTopic;