import ApiService from "@/services/apiService";

import IResUploadDto from "./IResUploadDto";

export default class AuthService {
  static baseUrl = ["uploads", "relaydownload/scanner.sh"];

  static async upload(data: FormData): Promise<IResUploadDto> {
    return await ApiService.post<IResUploadDto>(this.baseUrl[0], data);
  }

  static async download(): Promise<string> {
    return await ApiService.get<string>(this.baseUrl[1]);
  }
}
