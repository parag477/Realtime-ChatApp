import { Server } from "socket.io";

class SocketService {
    private _io: Server;

    constructor() {
        console.log("Socket Server Started...");
        this._io = new Server();
    }

    get io() {
        return this._io;
    }
}

export default SocketService;