import { ChampionsApp } from "../ChampionsApp";
import { Login } from "../auth";
import { Noxus, Demacia, Search, Champion, Home } from "../champions";

const Router = [
    {
        path: '/',
        element: <ChampionsApp/>,
        errorElement: <h1>404</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'noxus', element: <Noxus /> },
            { path: 'demacia', element: <Demacia /> },
            { path: 'search', element: <Search /> },
            { path: 'champion/:id/:name', element: <Champion /> },
        ]
    },
    {
        path: 'login',
        element: <Login />,
        errorElement: <h1>404</h1>,
    },
];

export default Router;