import Home from '../pages/Home';
import Politica from '../pages/Politica';
import Internacionales from '../pages/Internacionales';
import Tecnologia from '../pages/Tecnologia';
import Espectaculos from '../pages/Espectaculos';
import Deportes from '../pages/Deportes';
import Diseño from '../pages/Diseño';




export const routes = [
    {
        path: '/',
        component: Home,
        label:"Home",
        query_data:0,
    },
    {
        path: '/politica',
        component: Politica,
        label:"Politica",
        query_data:1
    },
    {
        path: '/internacionales',
        component: Internacionales,
        label:"Internacionales",
        query_data:2
    },
    {
        path: '/tecnologia',
        component: Tecnologia,
        label:"Tecnologia",
        query_data:3
    },
    {
        path: '/espectaculos',
        component: Espectaculos,
        label:"Espectaculos",
        query_data:4
    },
    {
        path: '/deportes',
        component: Deportes,
        label:"Deportes",
        query_data:5
    },
    {
        path: '/diseño',
        component: Diseño,
        label:"Diseño",
        query_data:6
    },
]