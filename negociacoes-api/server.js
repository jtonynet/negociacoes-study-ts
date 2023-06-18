var http = require('http')
    ,app = require('./config/express');

const port = process.env.PORT || 3001;
http.createServer(app).listen(port, function() {
    console.log('negociacoes-api escutando na porta: ' + port);
});

