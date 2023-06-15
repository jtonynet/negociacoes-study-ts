var http = require('http')
    ,app = require('./config/express');

const port = 3000;

http.createServer(app).listen(port, function() {
    console.log('Servidor escutando na porta: ' + port);
});

