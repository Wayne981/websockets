import express from "express";
import ws from "ws"; // Import 'ws' module via default export

const { Server: WebSocketServer, WebSocket } = ws;

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("server is listening...");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("data from client: ", data);
        ws.send("thanks for liking!");
    });
});
// Go to hoppscotch and go to real time and then connect this 
//ws://localhost:8080 - send messages you're all set 
