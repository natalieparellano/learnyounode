var http = require( 'http' )
var url = require( 'url' )

var args = process.argv
var port = args[2]

var server = http.createServer( function ( req, res ) {
  res.writeHead( 200, { 'content-type': 'application/json' } )

  var parsedUrl = url.parse( req.url, true ),
          query = parsedUrl['query'],
       pathname = parsedUrl['pathname']      
         isoStr = query['iso'],
        isoDate = new Date( isoStr ),
        resType = pathname.split( 'api/' ).pop();

  // console.log( req.url )
  // console.log( parsedUrl )
  // console.log( query )  
  // console.log( resType )

  var data
  if ( resType == 'parsetime' ) {
    data = formatHMS ( isoDate )
  } else if ( resType == 'unixtime' ) {
    data = formatUnix ( isoDate )
  } else {
    data = 'foo'
  }

  var formattedData = JSON.stringify( data )

  res.end( formattedData )
})
server.listen( port )

function formatHMS ( date ) {
  var hour    = date.getHours()  
  var minute  = date.getMinutes()
  var second  = date.getSeconds()

  return {
    "hour"   : hour,
    "minute" : minute,
    "second" : second
  }
}

function formatUnix ( date ) {
  var unixtime = date.getTime()

  return {
    "unixtime" : unixtime
  }
}