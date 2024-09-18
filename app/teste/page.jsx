"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import useWebSocket from "react-use-websocket";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Axios from "axios";
// const environment = {
//   wsHost: "172.22.80.1:9901",
//   apiUrl: "172.22.80.1:8081",
//   key: "3f5dab41191929ee642d",
//   wsURL: "localhost",
  
//   // apiUrl: "localhost:8081",
//   // wsHost: "10.182.2.2:9901",
//   // apiUrl: "10.182.2.2:8081",
//   // wsURL: "10.182.2.2",
//   production: false, // Altere conforme o ambiente de produção
// };
const channel = "chat";
const WebSocketPage = () => {
  // window.axios = Axios;
  // window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  // window.Pusher = Pusher;
  // const pusher = new Pusher('3f5dab41191929ee642d', {
  //   cluster: 'mt1'
  // });

  // const channelPusher = pusher.subscribe('chat');
  // channelPusher.bind('chat', function(data) {
  //   console.log(data);
  // });
  // ------------------------------------------------------------------------------------------------

  // useEffect(() => {
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwODEvdjIvYXV0aC0ydXNlciIsImlhdCI6MTcyNjIzNzcwMiwiZXhwIjoxNzI2ODM3NzAyLCJuYmYiOjE3MjYyMzc3MDIsImp0aSI6InM5THhJdjdhcGUxb0JIRE4iLCJzdWIiOiIzNTE5MDMiLCJwcnYiOiJiOTEyNzk5NzhmMTFhYTdiYzU2NzA0ODdmZmYwMWUyMjgyNTNmZTQ4IiwiY3BmIjoiNzAzMTE2NDkxNTciLCJub21lIjoiQ0FJTyBURVNURSIsImRhdGFfbG9naW5fZXhwaXJhIjoiMjAyNC0wOS0xMyAxMToyODoyMiIsImlkX2Rpc3Bvc2l0aXZvIjoiMTIiLCJyZXF1ZXN0X3R5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.x-b4HYwRnA3z-1v7JuzHWfH6GsAP27ooeYv45ENQH3k";
  // //   const ws = new Echo({
  //     broadcaster: "reverb",
  //     cluster: "mt1",
  //     key: "3f5dab41191929ee642d",
  //     app_id: "210690",
  //     // secret: "gjh9qvo9kh6tawqiofuh",
  //     wsHost: "localhost",
  //     wsPort: 9901,
  //     // wssPort: 9901,
  //     forceTLS: false,
  //     disableStats: true,
  //     enabledTransports: ["ws"],
  //     authEndpoint: "http://localhost:8081/broadcasting/auth",
  //     transport:'polling',
  //     auth: {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: "application/json",
  //       },
  //     },
  //   });
  //   window.Echo = ws;
  //   const handleEvent = (e) => {
  //     console.log("Recebido =>>>>>", e);
  //   };
  //   ws.listen(channel,channel, handleEvent)
  //   ws.join(channel).listen(channel,channel, handleEvent)
  //   ws.private(channel).listen(channel, handleEvent)
  // console.log(ws, ws.channel(channel), ws.private(channel), ws.channel(channel).listen(channel, handleEvent));

  // }, [channel]);

  // return <div>WebSocket Component</div>;

  // ------------------------------------------------------------------------------------------------------------------
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwODEvdjIvYXV0aC0ydXNlciIsImlhdCI6MTcyNjIzNzcwMiwiZXhwIjoxNzI2ODM3NzAyLCJuYmYiOjE3MjYyMzc3MDIsImp0aSI6InM5THhJdjdhcGUxb0JIRE4iLCJzdWIiOiIzNTE5MDMiLCJwcnYiOiJiOTEyNzk5NzhmMTFhYTdiYzU2NzA0ODdmZmYwMWUyMjgyNTNmZTQ4IiwiY3BmIjoiNzAzMTE2NDkxNTciLCJub21lIjoiQ0FJTyBURVNURSIsImRhdGFfbG9naW5fZXhwaXJhIjoiMjAyNC0wOS0xMyAxMToyODoyMiIsImlkX2Rpc3Bvc2l0aXZvIjoiMTIiLCJyZXF1ZXN0X3R5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.x-b4HYwRnA3z-1v7JuzHWfH6GsAP27ooeYv45ENQH3k";

  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   // Certifique-se de que o código é executado apenas no lado do cliente
  //   // const socketIo = io("http://localhost:9901"); // Endereço do servidor socket.io

  //   const socketIo = io("http://localhost:9901", {
  //     auth: {
  //       token: token,
  //     },
  //     withCredentials: true,
  //     cors: {
  //       methods: ["GET", "POST"],
  //     },
  //     extraHeaders: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   socketIo.on("connect", () => {
  //     console.log("Conectado ao servidor Socket.IO");
  //   });

  //   socketIo.on("disconnect", () => {
  //     console.log("Desconectado do servidor Socket.IO");
  //   });

  //   // Salvando o socket na state para uso futuro, se necessário
  //   setSocket(socketIo);

  // //   // Limpar a conexão ao desmontar o componente
  //   return () => {
  //     if (socketIo) socketIo.disconnect();
  //   };
  // }, []);
  // ------------------------------------------------------------------------------------------------
  const environment = {
    apiUrl: "localhost:8081",
    wsHost: "10.182.2.2:9901",
    apiUrl: "10.182.2.2:8081",
    wsURL: "10.182.2.2",
    key: "3f5dab41191929ee642d",
  };
  const socket = new WebSocket(`ws://${environment.wsHost}/app/${environment.key}`);
  const channel = "chat";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwODEvdjIvYXV0aC0ydXNlciIsImlhdCI6MTcyNjIzNzcwMiwiZXhwIjoxNzI2ODM3NzAyLCJuYmYiOjE3MjYyMzc3MDIsImp0aSI6InM5THhJdjdhcGUxb0JIRE4iLCJzdWIiOiIzNTE5MDMiLCJwcnYiOiJiOTEyNzk5NzhmMTFhYTdiYzU2NzA0ODdmZmYwMWUyMjgyNTNmZTQ4IiwiY3BmIjoiNzAzMTE2NDkxNTciLCJub21lIjoiQ0FJTyBURVNURSIsImRhdGFfbG9naW5fZXhwaXJhIjoiMjAyNC0wOS0xMyAxMToyODoyMiIsImlkX2Rpc3Bvc2l0aXZvIjoiMTIiLCJyZXF1ZXN0X3R5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.x-b4HYwRnA3z-1v7JuzHWfH6GsAP27ooeYv45ENQH3k";

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

      case "chat.message":
        let message = JSON.parse(JSONevent.data);
        console.log("RECEIVED =>>>>>", message);
        return;

      case "pusher:connection_established":
        try {
          const JSONeventData = JSON.parse(JSONevent.data);
          const socketId = JSONeventData.socket_id;
          // Realiza a requisição para autenticar no canal
          Axios.post(
            `http://${environment.apiUrl}/broadcasting/auth`,
            {
              socket_id: socketId,
              channel_name: channel, // Nome do canal: chat
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
                    channel: channel, // Nome do canal: chat
                    auth: response.data.auth, // Informação de autenticação
                  },
                })
              );

              // console.log("Subscribed to channel chat.");
            })
            .catch((error) => {
              // console.error("Error authenticating channel:", error);
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
  // ------------------------------------------------------------------------------------------------
  // const auth = { id: 351903, user: { id: 351903 } };
  // const id = 23462;
  // useEffect(() => {
  // const ws = new Echo({
  //   broadcaster: "reverb",
  //   cluster: "mt1",
  //   key: "3f5dab41191929ee642d",
  //   app_id: "1864672",
  //   // secret: "gjh9qvo9kh6tawqiofuh",
  //   wsHost: "localhost",
  //   wsPort: 9901,
  //   // wssPort: 9901,
  //   forceTLS: false,
  //   disableStats: true,
  //   enabledTransports: ["ws"],
  //   authorizer: (channel, options) => {
  //     return {
  //       authorize: (socketId, callback) => {
  //         Axios
  //           .post(`${environment.apiUrl}broadcasting/auth`, {
  //             socket_id: socketId,
  //             channel_name: channel.name,
  //           })
  //           .then((response) => {
  //             callback(false, response); //important, this makes the dream work
  //           })
  //           .catch((error) => {
  //             callback(true, error);
  //           });
  //       },
  //     };
  //   },
  // });

  // const auth = { id: 351903, user: { id: 351903 } };
  // const id = 23462;
  // useEffect(() => {
  // -----------------------------------------------------------------------------------------------------
  //   const ws = new Echo({
  //     broadcaster: 'reverb',
  //     key: "3f5dab41191929ee642d",
  //     // secret: "gjh9qvo9kh6tawqiofuh",
  //     wsHost: `localhost`,
  //     wsPort: 9901,
  //     forceTLS: false,
  //     disableStats: true,
  //     enabledTransports: ["ws"],
  //     authorizer: (channel, options) => {
  //       return {
  //         authorize: (socketId, callback) => {
  //           Axios
  //             .post(`${environment.apiUrl}broadcasting/auth`, {
  //               socket_id: socketId,
  //               channel_name: channel.name,
  //             })
  //             .then((response) => {
  //               callback(false, response); //important, this makes the dream work
  //             })
  //             .catch((error) => {
  //               callback(true, error);
  //             });
  //         },
  //       };
  //     },
  //   });
  //   let channel = ws.channel(`recharge.${id}`)
  //   .listen(`.recharge.${id}.message`, (event) => {
  //     console.log('event =>',event);
  //   });
  //     console.log('channel =>',channel);
  // }, []);
};

export default WebSocketPage;
