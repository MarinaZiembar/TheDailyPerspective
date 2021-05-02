import React from 'react';
import {Link, } from 'react-router-dom';
import {routes} from '../utils/Routes';


function Menu ({onGetCategory}){


    return(
        <div className="menu">
            { routes.map((route,i) => (
                <Link
                    to={route.path}
                    key={i}
                    onClick={() => onGetCategory(route.query_data)}
                >
                    {route.label}
                </Link>
            ))
                
            }
        </div>
    );
};

export default Menu;
