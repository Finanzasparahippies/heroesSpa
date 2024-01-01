import { render, screen } from "@testing-library/react";
import { PrivateRouter } from "../../src/router/PrivateRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <PrivateRoute/>', () => { 

    test('debe mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            loged: true,
            user: {
                name: 'Saul',
                id: 123,
            }
        }

        render( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={ ['/marvel']}>
            <PrivateRouter>
                <h1>Ruta Privada</h1>
            </PrivateRouter>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        expect(screen.getByText( 'Ruta Privada' )).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastpath', '/marvel');
    });

});