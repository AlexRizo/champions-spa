import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute/>', () => {
     test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
          Storage.prototype.setItem = jest.fn();
          
          const contextValue = { 
               logged: true,
               user: {
                    id: 123,
                    name: 'David'
               }
          };
          
          render(
               <AuthContext.Provider value={ contextValue }>
                    <MemoryRouter initialEntries={['/']}>
                         <PrivateRoute>
                              <h1>Ruta Privada</h1>
                         </PrivateRoute>
                    </MemoryRouter>
               </AuthContext.Provider>
          )

          expect(screen.getByText('Ruta Privada')).toBeTruthy();
          expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');

     });
})