const express = require('express');
const http = require("http");
const socketio = require("socket.io");
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {
    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        // HTTP Server
        this.server = http.createServer( this.app );

        // Socket Configuration
        this.io = socketio( this.server, { cors: {
            origin: "*",
            methods: ['GET', 'POST']
        } } );
    }

    middlewares() {
        // Deploy Public Directory
        this.app.use( express.static( path.resolve( __dirname,  '../public' ) ) );
    
        // CORS
        this.app.use( cors() );
    }

    socketsConfigurations(){
        new Sockets( this.io );
    }

    execute() {

        // Middleware Init
        this.middlewares();


        // Sockets Initialization
        this.socketsConfigurations();

        // Server Init
        this.server.listen( this.port, () => {
            console.log('Server is Running on Port:', this.port);
        } )
    }
}

module.exports = Server;