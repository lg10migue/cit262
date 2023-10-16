import { sendHello } from "../utils/helloworld";
import assert from "assert" ;

// Manual testing.

it( "Testing sendHello function", () => {
    const hello = sendHello();
    assert.equal( hello, "Hello!" );
} );