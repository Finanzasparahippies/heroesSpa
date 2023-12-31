import { render, screen } from "react-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";


describe('Pruebas en "PublicRoute"', () => { 
    
    test('debe mostrar el children si no esta autenticado', () => {

        const contextValue = {
            loged: false
        }

        render( 
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute/>
        </AuthContext.Provider>
        );
        
    });
});