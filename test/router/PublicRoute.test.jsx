import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas en "PublicRoute"', () => { 
    
    test('debe mostrar el children si no esta autenticado', () => {

        const contextValue = {
            loged: false
        }

        render( 
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute>
                <h1>Ruta Publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
        );
        expect(screen.getByText( 'Ruta Publica' )).toBeTruthy();
    });

    test('should navigate if is logged', () => { 
    
        const contextValue = {
            logged: true,
            user: {
                name: 'Saul',
                id: 123,
            }
        }
        
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ [ '/login' ] }>
                    <Routes>
                        <Route path='/login' element = {
                            <PublicRoute>
                                <h1>Ruta Privada</h1>
                            </PublicRoute>
                        }/>
                        <Route path='/marvel' element = { <h1>Marvel</h1> }/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
            );

            expect(screen.getByText( 'Marvel' )).toBeTruthy();
        })
});