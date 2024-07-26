import Home from '../pages/Home';
import Politica from '../pages/Politica';
import Internacionales from '../pages/Internacionales';
import Tecnologia from '../pages/Tecnologia';
import Espectaculos from '../pages/Espectaculos';
import Deportes from '../pages/Deportes';
import Diseño from '../pages/Diseño';




export const routes = [
    {
        path: '/TheDailyPerspective/',
        component: Home,
        label:"Home",
        query_data:"general",
    },
    {
        path: '/TheDailyPerspective/politics',
        component: Politica,
        label:"Stars",
        query_data:"Stars"
    },
    {
        path: '/TheDailyPerspective/travel',
        component: Internacionales,
        label:"Satellites",
        query_data:"Satellites"
    },
    {
        path: '/TheDailyPerspective/technology',
        component: Tecnologia,
        label:"Technology",
        query_data:"Technology"
    },
    {
        path: '/TheDailyPerspective/entertainment',
        component: Espectaculos,
        label:"Planets",
        query_data:"Planets"
    },
    {
        path: '/TheDailyPerspective/sports',
        component: Deportes,
        label:"Rockets",
        query_data:"Rockets"
    },
    {
        path: '/TheDailyPerspective/art',
        component: Diseño,
        label:"Asteroids",
        query_data:"Asteroids"
    },
]