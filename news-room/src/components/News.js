import React, {useEffect} from 'react';
import NewsCard from './NewsCard';
import FeaturedNewsCard from './FeaturedNewsCard';
import {Row, Col} from 'react-bootstrap';
import {getCurrentDate} from '../utils/Date';


function News({onGetNewsByCategory, onGetLatestNews, categoryId, news}){


    useEffect(() => {

        categoryId === 0 ? onGetLatestNews(getCurrentDate()) : onGetNewsByCategory(categoryId)

    }, [categoryId])

    
    let firstNew = news.shift();

    return(
        <div className="col-lg-8 offset-lg-2 news-container">
            {news &&
                <FeaturedNewsCard 
                    title={firstNew?.title}
                    img={firstNew?.img_url}
                    source={firstNew?.source_name}
                    url={firstNew?.url}
                    category={firstNew?.category}
                    categoryId={categoryId}
                />
            }
            <Row>
                {
                    news.map((news,i) => (
                        <Col xs={12} lg={4} key={i}>
                            <NewsCard 
                                title={news.title}
                                img={news.img_url}
                                source={news.source_name}
                                url={news.url}
                                category={news.category}
                            />
                        </Col>
                    )) 
                }
            </Row>
        </div>
    );
}

export default News;