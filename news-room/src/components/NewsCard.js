import React from 'react';

function NewsCard(props){

    const {title, img, url, source } = props;
    
    return(
        <div className="col-12 col-md-10">
            <h2> {title} </h2>
            <img src={img} alt="pic"/>
            <a href={url} >Click</a>
            <p> {source} </p>
        </div>
    );
}

export default NewsCard;