import React from 'react';

function FeaturedNewsCard(props){

    const {title, img, url, source } = props;
    
    return(
        <div className="FEATURED col-12 col-md-10">
            <h2> {title} </h2>
            <img src={img} alt="pic"/>
            <a href={url} >Click</a>
            <p> {source} </p>
        </div>
    );
}

export default FeaturedNewsCard;