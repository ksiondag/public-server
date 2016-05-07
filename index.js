
var path = require('path');

var express = require('express');
var app = express();

var server = require('http').Server(app);

app.use('/', express.static(
    path.join(
        process.cwd(),
        process.argv[2] || 'public'
    )
));

app.set('port', (process.argv[3] || process.env.PORT || 8000));

server.listen(app.get('port'), () => {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

