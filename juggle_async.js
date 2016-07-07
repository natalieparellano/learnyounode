var http = require('http')
var bl = require('bl')

// Get all urls 
var args = process.argv
var urls = []
for ( var i = 2; i < args.length; i++ ) {
  url = args[i]  
  urls.push( url )
}
// console.log( "urls: " + urls );

// Get responses
var allRes = []
var numRes = 0

for ( var i = 0; i < urls.length; i ++ ) {
  // Get url value
  var url = urls[i]
  // Make request
  getUrl( url, i )
}

function getUrl ( url, index ) {
  http.get( url, function ( res ) {
    res.pipe( bl( function ( err, data ) {
      if ( !err ) {
        allRes[index] = data.toString(); 
        numRes += 1
        if ( numRes == 3 ) {
          printEnum( allRes )
        }        
      }
    }))
  })
}

function printEnum ( enumerable ) {
  for( var i = 0; i < enumerable.length; i++ ) {
    console.log( enumerable[i] );
  }
}


// http.get( url, function ( res ) {
//   res.pipe(bl(function (err, data) {
//     if ( !err ) {
//       var chars = data.toString() // npa: to call a function, need to use parentheses
//       console.log( chars.length );
//       console.log( chars );
//     }
//   }))
// })

// http.get( url, function ( res ) {
//   res.setEncoding( 'utf8' );

//   var chars     = '',
//       numChars  = 0;

//   res.on( "data", function ( data ) {
//     chars += data;
//     numChars += data.length;
//   }); 

//   res.on( "end", function () {
//     console.log( numChars );
//     console.log( chars );
//   });
// })

// var mymodule = require('./my_module.js')

// var args   = process.argv,
//     dir    = args[2],
//     format = args[3];

// // console.log( args );

// mymodule( dir, format, function ( err, files ) {
//   if ( err ) {
//     console.log( "Error!" )
//   } else {
//     for ( var i = 0; i < files.length; i++ ) {
//       console.log( files[i] )
//     }
//   }
// });

// var args = process.argv.slice(2);
// var sum = 0;
// for ( var i = 0; i < args.length; i++ ) {
//   // console.log( args[i] );
//   sum += Number( args[i] );
// }
// console.log( sum );
// console.log( args );

// var fs = require('fs');
// var path = process.argv[2];
// // console.log( path );
// var buf = fs.readFileSync( path );
// var str = buf.toString();
// // console.log( str );
// var lines = str.split( '\n' );
// console.log( lines.length - 1 );

// var fs = require('fs');
// var path = require('path');
// var path = process.argv[2];

// fs.readFile( path, 'utf8', function ( err, data ) {
//   if ( !err ) {
//     var lines = data.split( '\n' );
//     console.log( lines.length - 1 );    
//   }
// });

// var dir    = args[2],
//     format = "." + String( args[3] );

// fs.readdir( dir, function ( err, files ) {
//   for ( var i = 0; i < files.length; i ++ ) {
//     var file = files[i];
//     if ( path.extname( file ) === format ) {
//       console.log( file );
//     }
//   }
// });
