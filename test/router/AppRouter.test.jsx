import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas en el <AppRouter/>', () => { 
    
    test('should show login page if is not auth', () => { 

        const contextValue = {
            logged: false,
        };
        
        render(
        <MemoryRouter initialEntries={ [ '/marvel' ]}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        </MemoryRouter>
        );
            // screen.debug();
            expect( screen.getAllByText('Login').length).toBe(2);
    });

    test('should show marvel component if is auth', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'Saul',
                id: 123,
            }
        };
        
        render(
        <MemoryRouter initialEntries={ [ '/login' ]}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        </MemoryRouter>
        );
            // screen.debug();
            expect( screen.getByText('Marvel Comics')).toBeTruthy();
        

    });

});