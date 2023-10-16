import { sendHello, sendName } from "../utils/helloworld";
import assert from "assert" ;

// Manual testing.
it( "Testing sendHello function", () => {
    const hello = sendHello();
    assert.equal( hello, "Hello!" );
} );

// Automated Unit Tests.
it( "Should say Miguel", () => {
    const myName = sendName();
    console.log( myName );

    expect( myName ).toBe( "Miguel" );
} );