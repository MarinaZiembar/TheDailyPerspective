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
        query_data:"",
    },
    {
        path: '/TheDailyPerspective/politica',
        component: Politica,
        label:"Política",
        query_data:"Política"
    },
    {
        path: '/TheDailyPerspective/internacionales',
        component: Internacionales,
        label:"Internacionales",
        query_data:"Internacional"
    },
    {
        path: '/TheDailyPerspective/tecnologia',
        component: Tecnologia,
        label:"Tecnología",
        query_data:"Tecnología"
    },
    {
        path: '/TheDailyPerspective/espectaculos',
        component: Espectaculos,
        label:"Espectáculos",
        query_data:"Espectáculos"
    },
    {
        path: '/TheDailyPerspective/deportes',
        component: Deportes,
        label:"Deportes",
        query_data:"Deporte"
    },
    {
        path: '/TheDailyPerspective/diseño',
        component: Diseño,
        label:"Diseño",
        query_data:"Diseño"
    },
]