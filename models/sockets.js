

class Sockets {

    constructor(io) {

        this.io = io;
        this.socketEvents();
    }

    socketEvents() {

        this.io.on('connection', (socket) => {

            console.log("Client Connected");

            // Write Here Socket Listeners and Emits

            /* Templates
            // Template to emit to all
            socket.emit('name-here', {  data here });

            // Template to emit to one socket only
            socket.on('message-to-server', (data) => {
                console.log(data);
                this.io.emit('message-to-server', data);
            });
            */

        });

    }
}

module.exports = Sockets;