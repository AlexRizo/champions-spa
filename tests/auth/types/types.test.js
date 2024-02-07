import { types } from "../../../src/auth"

describe('Puebas en Types.js', () => {
     test('should de regresar los types a continuación...', () => {
          expect(types).toEqual({
               login: "[Auth] Login",
               logout: "[Auth] Logout",
          })
     });
})