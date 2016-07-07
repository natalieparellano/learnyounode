var fs   = require( 'fs' )
var http = require( 'http' )
var args = process.argv

var port     = args[2]
var filePath = args[3]

var server = http.createServer( function ( req, res ) {
  res.writeHead( 200, { 'content-type': 'text/plain' } )
  var str = fs.createReadStream( filePath )
  str.pipe( res )
})
server.listen( port )
