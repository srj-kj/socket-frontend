import io from "socket.io-client";

let socket;

const connectSocket = () => {
    socket = io('https://socket-lyco.onrender.com', { path: '/api/socket.io/' });

} 
    
export {socket, connectSocket};
