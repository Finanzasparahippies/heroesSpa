import { authReducer, types } from "../../../src/auth"

describe('Pruebas en authReducer', () => { 

    // const initialState = { 
    //     logged: false,
    // };
    
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {} );
        expect( state ).toStrictEqual( {logged: false} );
    });
    
    test('debe de autenticar el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Saul',
                id: '123'
            }
        };

        const newState = authReducer({logged: true}, action );
        console.log(newState);
        expect( newState ).toEqual( { logged: true, user: action.payload } );   
        });
    
    test('debe de borrar el usuario y hacer el logout', () => {
        const action = {
            type: types.logout
        };

        const State = authReducer( {logged: true, name: 'Saul', id: '123'}, action );

        expect(State).toEqual( { logged: false });
        });
    });
