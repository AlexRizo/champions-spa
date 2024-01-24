import { ChampionsApp } from "../ChampionsApp";
import { Login } from "../auth";
import { Noxus, Demacia, Search, Champion } from "../champions";

const Router = [
    {
        path: '/',
        element: <ChampionsApp/>,
        errorElement: <h1>404</h1>,
        children: [
            { path: 'noxus', element: <Noxus className="container"/> },
            { path: 'demacia', element: <Demacia /> },
            { path: 'search', element: <Search /> },
            { path: 'champion', element: <Champion /> },
        ]
    },
    {
        path: 'login',
        element: <Login />,
        errorElement: <h1>404</h1>,
    },
];

export default Router;