import React from 'react';



function NewsCard(props){

    const {title, img, url, source, category } = props;
    
    return(
        <a href={url} className="text-decoration-none" target="_blank" rel="noopener noreferrer" >
            <div className="news-card">
                <img src={img} alt="pic"/>
                <div className="news-details">
                    <h2> {title} </h2>
                    <p className="source"> {source} </p>
                </div>
            </div>
        </a>
    );
}

export default NewsCard;