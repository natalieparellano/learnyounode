var net = require( 'net' )

var args = process.argv
console.log( args )
var port = args[2]

var server = net.createServer( function listener( socket ) {
  var data = formatDate( new Date() )
  // console.log( "data: " + data )
  // socket.write( data )
  socket.end( data + '\n' )
})
server.listen( port )

function formatDate ( date ) {
  var year  = date.getFullYear()  
  var month = date.getMonth() + 1 // starts at 0  
  var day   = date.getDate()      // returns the day of month  
  var hours = date.getHours()  
  var mins  = date.getMinutes()
  return str = year.toString() + '-' + zeroPad( month ) + '-' + 
      zeroPad( day ) + ' ' + zeroPad( hours ) + ':' + 
      zeroPad( mins )
}

function zeroPad ( val, digits = 2 ) {
  str = val.toString()
  while ( str.length < digits ) {
    str = '0' + str
  }
  return str
}