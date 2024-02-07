import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter/>', () => {
     test('Debe de mostrar el login si no está autenticado', () => {
          const contextValue = {
               logged: false
          };

          const router = createMemoryRouter(AppRouter, { initialEntries: ['/', "/login"], initialIndex: 1 });
          
          render(
               <AuthContext.Provider value={ contextValue }>
                    <RouterProvider router={ router } />
               </AuthContext.Provider>    
          );

          // screen.debug()
          expect(screen.getAllByText('Login')).toBeTruthy();
     });

     test('Debe de mostrar el componente de noxus si está autenticado', () => {
          const contextValue = {
               logged: true,
               user: {
                    id: 123,
                    name: 'david'
               }
          };

          const router = createMemoryRouter(AppRouter, { initialEntries: ['/login', '/', "/noxus"], initialIndex: 2 });

          render(
               <AuthContext.Provider value={ contextValue }>
                    <RouterProvider router={ router } />
               </AuthContext.Provider>
          );

          // screen.debug();
          expect(screen.getAllByText('Noxus').length).toBeGreaterThanOrEqual(1);
     })
});