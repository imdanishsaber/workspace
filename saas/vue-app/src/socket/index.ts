import { io } from "socket.io-client";
import { authStore } from "@/store/auth";

const AUTHSTORE = authStore();
class SocketioService {
  static socket: any;

  static connect() {
    const params = {
      path: "/ws/socket.io",
      reconnectionDelayMax: 10000,
      extraHeaders: {
        Authorization: `Bearer ${AUTHSTORE.accessToken}`,
      },
    };

    this.socket = io(AUTHSTORE.baseURL, params);

    this.socket.on("connect", () => {
      console.log("Websocket Connected ID:", this.socket.id);
    });
  }

  static socketInstance() {
    return this.socket;
  }

  static disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      console.log("Websocket Disconnected");
    }
  }
}

export default SocketioService;
