import React from 'react';
import {getCurrentTextualDate} from '../utils/Date';


function FeaturedNewsCard(props){

    const {title, img, url, source, category, categoryId } = props;

    const featuredCardStyle = {
        background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('"+ img +"')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center center",
    }
    
    return(
        <a href={url} className="text-decoration-none" target="_blank" rel="noopener noreferrer" >
            <div className="featured-card" style={featuredCardStyle} >
                <div className="overlay">
                    <div className="date">
                        <h1>
                            {
                                categoryId === 0 ?
                                getCurrentTextualDate() :
                                category
                            }
                        </h1>
                    </div>
                    <div className="news-details">
                        {
                            (categoryId === 0) && 
                            (<span className="category"> 
                                {category}
                            </span>)
                        } 
                        <h2> {title} </h2>
                        <p className="source"> {source} </p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default FeaturedNewsCard;




