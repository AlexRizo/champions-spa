import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => {
     const initialState = {
          logged: false,
     };

     const loginAction = {
          type: types.login,
          payload: {
               name: 'Alex'
          }
     };

     const state = {
          logged: true,
          user: { name: 'Alex' }
     }

     test('Debe de retornar el estado por defecto', () => {
          const defaultState = authReducer(initialState, {});
          expect(defaultState).toEqual(initialState);
     });

     test('Debe de autenticar y colocar el name del usuario', () => {
          const loginState = authReducer(initialState, loginAction);

          expect(loginState).toEqual({
               logged: true, 
               user: {
                    name: 'Alex'
               }
          });
     });

     test('Debe estableder logged en false y eliminar el usuario', () => {
          const logoutState = authReducer(state, { type: types.logout });
          expect(logoutState).toEqual(initialState);
     })
});