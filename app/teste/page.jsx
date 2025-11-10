"use client";
import Axios from "axios";
const WebSocketPage = () => {
  const environment = {
    // wsHost: "localhost:9901",
    // apiUrl: "http://localhost:9902",
    
    // wsHost: "-:9901",
    // apiUrl: "http://-:9902",
    
    apiUrl: "-",
    wsHost: "-",
    // wsURL: "localhost",
    key: "-",
  };
  const socket = new WebSocket(
    `wss://${environment.wsHost}/app/${environment.key}`
  );
  const channel = "recharge";
  const channelId = ".6239";
  const token =
    "-.-.-------";
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
