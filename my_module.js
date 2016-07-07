module.exports = filterFolder

var fs = require('fs')
var path = require('path') // npa: look into semi-colons

function filterFolder ( dir, format0, callback ) {
  fs.readdir( dir, function ( err, files ) {
    if ( err ) {
      return callback( err )
    } else {
      var format        = "." + String( format0 ),
          filteredFiles = [];
      for ( var i = 0; i < files.length; i ++ ) {
        var file = files[i]
        if ( path.extname( file ) === format ) {
          filteredFiles.push( file )
        }
      }
      return callback( null, filteredFiles )      
    }
  })
}