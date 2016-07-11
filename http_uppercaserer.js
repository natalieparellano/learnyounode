var map = require( 'through2-map' )

var fs   = require( 'fs' )
var http = require( 'http' )
var args = process.argv

var port     = args[2]
var filePath = args[3]

var server = http.createServer( function ( req, res ) {
  req.pipe( map( function ( chunk ) {
    return chunk.toString().toUpperCase()
  })).pipe( res )
})
server.listen( port )
