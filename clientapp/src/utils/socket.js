import { io } from "socket.io-client";

const socket = io("https://api.smartlearner.com", {
  transports: ["websocket"],
});

export default socket;
