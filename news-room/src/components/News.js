import React, {useEffect} from 'react';
import NewsCard from './NewsCard';
import FeaturedNewsCard from './FeaturedNewsCard';
import {Row, Col} from 'react-bootstrap';
import {getCurrentDate} from '../utils/Date';


function News({onGetNewsByCategory, onGetLatestNews, category, news}){


    useEffect(() => {

        category === "" ? onGetLatestNews(getCurrentDate()) : onGetNewsByCategory(category)

    }, [category])

    
    let firstNew = news.shift();

    return(
        <div className="col-lg-8 offset-lg-2 news-container">
            {news &&
                <FeaturedNewsCard 
                    title={firstNew?.title}
                    img={firstNew?.image_url}
                    source={firstNew?.news_site}
                    url={firstNew?.url}
                    category={category}
                />
            }
            <Row>
                {
                    news.map((news,i) => (
                        <Col xs={12} lg={4} key={i}>
                            <NewsCard 
                                title={news.title}
                                img={news?.image_url}
                                source={news?.news_site}
                                url={news.url}
                                category={category}
                            />
                        </Col>
                    )) 
                }
            </Row>
        </div>
    );
}

export default News;