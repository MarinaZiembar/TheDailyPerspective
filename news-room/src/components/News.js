import React, {useEffect} from 'react';
import NewsCard from './NewsCard';
import FeaturedNewsCard from './FeaturedNewsCard';
import getCurrentDate from '../utils/Date';


function News({onGetNewsByCategory, onGetLatestNews, categoryId, news}){


    useEffect(() => {

        categoryId === 0 ? onGetLatestNews(getCurrentDate()) : onGetNewsByCategory(categoryId)

    }, [categoryId])

    
    let firstNew = news.shift();

    return(
        <div className="news-container">
            {news.length === 9 &&
                <FeaturedNewsCard 
                    title={firstNew?.title}
                    img={firstNew?.img_url}
                    source={firstNew?.source_name}
                    url={firstNew?.url}
                />
            }

            {
                news.map((news,i) => (
                   <NewsCard 
                        title={news.title}
                        img={news.img_url}
                        source={news.source_name}
                        url={news.url}
                        key={i}
                    />
                )) 
            }
        </div>
    );
}

export default News;