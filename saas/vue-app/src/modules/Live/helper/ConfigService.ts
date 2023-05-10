import ApiService from "@/services/apiService";

import IResCamerasDto from "./IResCamerasDto";

import IReqConnectDto from "./IReqConnectDto";
import IResConnectDto from "./IResConnectDto";

import IReqDisconnectDto from "./IReqDisconnectDto";
import IResDisconnectDto from "./IResDisconnectDto";

export default class ConfigService {
  static baseUrl = ["camera/getcameras", "camera/connect", "camera/disconnect"];

  static async getCamerasList(): Promise<IResCamerasDto> {
    return await ApiService.get<IResCamerasDto>(this.baseUrl[0]);
  }

  static async connect(body: IReqConnectDto): Promise<IResConnectDto> {
    return await ApiService.post<IResConnectDto>(this.baseUrl[1], body);
  }

  static async disConnect(body: IReqDisconnectDto): Promise<IResDisconnectDto> {
    return await ApiService.post<IResDisconnectDto>(this.baseUrl[2], body);
  }
}
