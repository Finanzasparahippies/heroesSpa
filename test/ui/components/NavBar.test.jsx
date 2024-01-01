import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";


const mockedUseNavigate = jest.fn();

jest.mock ( 'react-router-dom', () => ( {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
} ) );



describe('Pruebas en <NavBar/>', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Saul Villegas',
        },
        logout: jest.fn(),
    };

    beforeEach( () => jest.clearAllMocks() );
    
    test('should show name when user is logged', () => { 
        
        render(
            <MemoryRouter initialEntries={ [ '/login'] }>
            <AuthContext.Provider value={ contextValue }>
                <NavBar/>
            </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();
        expect( screen.getByText( contextValue.user.name )).toBeTruthy();
        expect( screen.getByText( 'Saul Villegas' )).toBeTruthy();

    });

    test('should call navigate and logout when logout button is clicked', () => { 

        

        render(
            <MemoryRouter initialEntries={ [ '/login'] }>
            <AuthContext.Provider value={ contextValue }>
                <NavBar/>
            </AuthContext.Provider>
            </MemoryRouter>
        );

        const LogoutBtn = screen.getByRole ('button');
        fireEvent.click( LogoutBtn );

        // screen.debug();
        expect ( contextValue.logout ).toHaveBeenCalled();
        expect ( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true} );
    });
});