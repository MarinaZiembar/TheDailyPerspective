import React from 'react';
import {getCurrentTextualDate} from '../utils/Date';
import placeholder from '../images/placeholder.jpg';


function FeaturedNewsCard(props){

    const {title, img, url, source, category } = props;

    const featuredCardStyle = {
        backgroundImage: img ? "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('"+ img +"')" : "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('"+ placeholder +"')",
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
                            {category ?
                                category :
                                getCurrentTextualDate()
                            }
                        </h1>
                    </div>
                    <div className="news-details">
                        {!category &&
                            <span className="category"> 
                                Novedades
                            </span>
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




