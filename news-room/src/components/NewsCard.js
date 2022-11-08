import React from 'react';
import { useEffect } from 'react';
import placeholder from '../images/placeholder.jpg';



function NewsCard(props){

    const { title, img, url, source } = props;

    const regex = /(?:((?:https|http):\/\/)|(?:\/)).+(?:.mp3|mp4)/gm;
    
    return(
        <a href={url} className="text-decoration-none" target="_blank" rel="noopener noreferrer" >
            <div className="news-card">
                <img src={(!regex.test(img) && img) || placeholder} alt="pic"/>
                <div className="news-details">
                    <h2> {title} </h2>
                    <p className="source"> {source} </p>
                </div>
            </div>
        </a>
    );
}

export default NewsCard;