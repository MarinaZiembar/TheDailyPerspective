import React from 'react';
import Button from '../components/Button';
import NewsContainer from '../containers/NewsContainer';


function Home(){
    return(
        <div className="page">
            <NewsContainer />    
            <Button/>
        </div>
    );
}

export default Home;
