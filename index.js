const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config')

const server = restify.createServer();


// middleware

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true})
});

const db = mongoose.connection;

db.on('error', e => console.log(e));

db.once('open', () => {
    require('./routes/customers')(server);
    console.log(`Server was running on port ${config.PORT}`)
})
