import ApiService from "@/services/apiService";

import IReqUserRegModelDto from "./IReqUserRegModelDto";
import IReqOTPVerificationModelDto from "./IReqOTPVerificationModelDto";

import IReqLoginModelDto from "./IReqLoginModelDto";
import IResLoginModelDto from "./IResLoginModelDto";

import IReqChangeEmailModelDto from "./IReqChangeEmailModelDto";
import IReqChangePassModelDto from "./IReqChangePassModelDto";

import IReqForgotPassModelDto from "./IReqForgotPassModelDto";
import IReqResetPassModelDto from "./IReqResetPassModelDto";

export default class AuthService {
  static baseUrl = [
    "user/register",
    "user/verifyotp",
    "user/resendotp",
    "user/login",
    "user/email",
    "user/password",
    "user/refreshtoken",
    "user/forgotpassword",
    "user/resetpassword",
  ];

  static async register(body: IReqUserRegModelDto): Promise<string> {
    return await ApiService.post<string>(this.baseUrl[0], body);
  }

  static async verifyOTP(body: IReqOTPVerificationModelDto): Promise<string> {
    return await ApiService.post<string>(this.baseUrl[1], body);
  }

  static async resendOTP(body: IReqForgotPassModelDto): Promise<string> {
    return await ApiService.post<string>(this.baseUrl[2], body);
  }

  static async login(body: IReqLoginModelDto): Promise<IResLoginModelDto> {
    return await ApiService.post<IResLoginModelDto>(this.baseUrl[3], body);
  }

  static async changeEmail(body: IReqChangeEmailModelDto): Promise<string> {
    return await ApiService.put<string>(this.baseUrl[4], body);
  }

  static async changePassword(body: IReqChangePassModelDto): Promise<string> {
    return await ApiService.put<string>(this.baseUrl[5], body);
  }

  static async refreshToken(): Promise<IResLoginModelDto> {
    return await ApiService.get<IResLoginModelDto>(this.baseUrl[6]);
  }

  static async forgotPassword(body: IReqForgotPassModelDto): Promise<string> {
    return await ApiService.post<string>(this.baseUrl[7], body);
  }

  static async resetPassword(
    body: IReqResetPassModelDto,
    config: any
  ): Promise<string> {
    return await ApiService.post<string>(this.baseUrl[8], body, config);
  }
}
