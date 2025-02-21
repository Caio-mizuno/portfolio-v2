"use client";
import Axios from "axios";
const WebSocketPage = () => {
  const environment = {
    // wsHost: "localhost:9901",
    // apiUrl: "http://localhost:9902",
    
    // wsHost: "10.182.2.2:9901",
    // apiUrl: "http://10.182.2.2:9902",
    
    apiUrl: "ws1t.libercard.com.br",
    wsHost: "https://ws2t.libercard.com.br",
    // wsURL: "localhost",
    key: "3f5dab41191929ee642d",
  };
  const socket = new WebSocket(
    `wss://${environment.wsHost}/app/${environment.key}`
  );
  const channel = "recharge";
  const channelId = ".6239";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwODEvdjIvYXV0aC0ydXNlciIsImlhdCI6MTcyOTg2MDE1MCwiZXhwIjoxNzMwNDYwMTUwLCJuYmYiOjE3Mjk4NjAxNTAsImp0aSI6InU5UmRHOTBtM0ViMm5rQU8iLCJzdWIiOiIzNTE5MDMiLCJwcnYiOiJiOTEyNzk5NzhmMTFhYTdiYzU2NzA0ODdmZmYwMWUyMjgyNTNmZTQ4IiwiY3BmIjoiNzAzMTE2NDkxNTciLCJub21lIjoiQ0FJTyBURVNURSIsImRhdGFfbG9naW5fZXhwaXJhIjoiMjAyNC0xMC0yNSAwOTo0MjoyOSIsImlkX2Rpc3Bvc2l0aXZvIjoiMTIiLCJyZXF1ZXN0X3R5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.buXJBRf3lLQChB0WYsQt-4C2XgKss-yhU7BdOgAb-EE";
  socket.addEventListener("open", function (event) {
    console.log("WebSocket is open now.");
  });

  // Listener para mensagens vindas do servidor
  socket.addEventListener("message", function (event) {
    const JSONevent = JSON.parse(event.data);
    switch (JSONevent.event) {
      case "pusher:ping":
        // console.log("PING");
        return;

      case "pusher:pong":
        // console.log("PONG");
        return;

      case "pusher_internal:subscription_succeeded":
        // console.log("subscription_succeeded");
        return;

      case channel + channelId + ".message":
        let message = JSON.parse(JSONevent.data);
        console.log("RECEIVED =>>>>>", message);
        return;

      case "message":
        let message2 = JSON.parse(JSONevent.data);
        console.log("RECEIVED =>>>>>", message2);
        return;

      case "pusher:connection_established":
        try {
          const JSONeventData = JSON.parse(JSONevent.data);
          const socketId = JSONeventData.socket_id;
          // Realiza a requisição para autenticar no canal
          Axios.post(
            `${environment.apiUrl}/broadcasting/auth`,
            {
              socket_id: socketId,
              channel_name: channel + channelId, // Nome do canal: chat
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
            .then((response) => {
              socket.send(
                JSON.stringify({
                  event: "pusher:subscribe",
                  data: {
                    channel: channel + channelId, // Nome do canal: chat
                    auth: response.data.auth, // Informação de autenticação
                  },
                })
              );

              // console.log("Subscribed to channel chat.");
            })
            .catch((error) => {
              console.error("Error authenticating channel:", error);
            });
        } catch (error) {
          // console.error("Error parsing message:", error);
        }
        return;

      default:
      // console.log("Unhandled event:", JSONevent.event);
    }
  });

  socket.addEventListener("close", function (event) {
    console.log("WebSocket is closed now.");
  });

  socket.addEventListener("error", function (event) {
    console.error("WebSocket error:", event);
  });
  return <div></div>;
};

export default WebSocketPage;
