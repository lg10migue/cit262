// Test the login API.
const fetch = require( "node-fetch2" ) ;

it( "Should get a login token", async () => {
    let loginToken = "" ;
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify( {
            "userName" : "test@testing.com",
            "password" : "p@ssw0rD"
        } )
    } ;
    
    const response = await fetch( "https://dev.stedi.me/login", options ) ;

    loginToken = await response.text() ;
    console.log( `Token: ${loginToken}` ) ;
    const status = response.status ;

    expect( status ).toBe( 200 ) ;
    expect( loginToken.length ).toBe( 36 ) ;
} ) ;