import { ChampionsApp } from "../ChampionsApp";
import { Login } from "../auth";
import { Noxus, Demacia, Search, Champion, Home } from "../champions";
import { ErrorNotFoundPage } from "../errors/ErrorNotFoundPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = [
    {
        path: '/',
        element: (
            <PrivateRoute>
                <ChampionsApp/>
            </PrivateRoute>
        ),
        errorElement: <ErrorNotFoundPage />,
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
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
        errorElement: <ErrorNotFoundPage />,
    },
];