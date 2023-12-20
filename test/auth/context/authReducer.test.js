import { authReducer } from "../../../src/auth/context/authReducer"

describe('Pruebas en authReducer', () => { 

    // const initialState = { 
    //     logged: false,
    // };
    
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {} );
        console.log(state);
        // expect( state ).toEqual( {logged: false} );
    });
    
    test('debe de autenticar el usuario', () => {
        
    })
    
    test('debe de borrar el usuario y hacer el logout', () => {
        
    })  



});