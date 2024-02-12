import io from "socket.io-client";

let socket;

const connectSocket = () => {
    socket = io('http://localhost:3000', { path: '/api/socket.io/' });

} 
    
export {socket, connectSocket};
