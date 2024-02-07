import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRoute/>', () => {
     test('debe de mostrar el componente si no está autenticado', () => {
          render(
               <AuthContext.Provider value={{ logged: false }}>
                    <PublicRoute>
                         <h1>Ruta Pública</h1>
                    </PublicRoute>
               </AuthContext.Provider>
          )

          expect(screen.getByText('Ruta Pública')).toBeTruthy();
     });

     test('no debe de navegar si está autenticado', () => {
          const contextValue = { 
               logged: true,
               user: {
                    id: 123,
                    name: 'Eduardo'
               }
          };

          render(
               <MemoryRouter initialEntries={['/login']}>
                    <AuthContext.Provider value={ contextValue }>
                         <Routes>
                              <Route path="login" element={
                                   <PublicRoute><h1>Public Page</h1></PublicRoute>
                              } />
                              <Route path="/" element={ <h1>Regiones Page</h1> } />
                         </Routes>
                    </AuthContext.Provider>
               </MemoryRouter>
          )

          screen.debug();
          expect(screen.getByText('Regiones Page')).toBeTruthy();

     });
});