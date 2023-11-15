const express = require( "express" ) ;
const app = express() ;

app.get( "/", ( req, res ) => {
    res.send( "Welcome to my Miguel's backend application" ) ;
} ) ;

app.get( "/miguel", ( req, res ) => {
    res.send( "Hello Miguel!" ) ;
} ) ;

app.listen( 3000, () => {
    console.log( "Listening" ) ;
} ) ;