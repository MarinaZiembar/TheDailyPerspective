import Home from '../pages/Home';
import Politica from '../pages/Politica';
import Internacionales from '../pages/Internacionales';
import Tecnologia from '../pages/Tecnologia';
import Espectaculos from '../pages/Espectaculos';
import Deportes from '../pages/Deportes';
import Diseño from '../pages/Diseño';




export const routes = [
    {
        path: 'TheDailyPerspective',
        component: Home,
        label:"Home",
        query_data:"",
    },
    {
        path: 'politica',
        component: Politica,
        label:"Politica",
        query_data:"Politica"
    },
    {
        path: 'internacionales',
        component: Internacionales,
        label:"Internacionales",
        query_data:"Internacionales"
    },
    {
        path: 'tecnologia',
        component: Tecnologia,
        label:"Tecnologia",
        query_data:"Tecnologia"
    },
    {
        path: 'espectaculos',
        component: Espectaculos,
        label:"Espectaculos",
        query_data:"Espectaculos"
    },
    {
        path: 'deportes',
        component: Deportes,
        label:"Deportes",
        query_data:"Deportes"
    },
    {
        path: 'diseño',
        component: Diseño,
        label:"Diseño",
        query_data:"Diseño"
    },
]