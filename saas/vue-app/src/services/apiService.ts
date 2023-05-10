import _axios from "axios";
import { Notify } from "quasar";
import { authStore } from "@/store/auth";
import AuthService from "@/modules/UserManagement/helper/AuthService";

const AUTHSTORE = authStore();
export default class ApiService {
  static axios = _axios.create({
    baseURL: AUTHSTORE.baseURL,
    timeout: 90000,
  });
  static lastCall = "";
  static axiosInterceptor = ApiService.addInterceptor();

  static addInterceptor(): void {
    ApiService.axios.interceptors.request.use((config) => {
      if (config.url === "user/resetpassword") {
        return config;
      } else {
        const token =
          config.url === "user/refreshtoken"
            ? AUTHSTORE.refreshToken
            : AUTHSTORE.accessToken;

        if (config?.headers) {
          if (token) config.headers.authorization = `Bearer ${token}`;
          else config.headers.authorization = "";
          return config;
        }
      }
    });
    ApiService.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        ApiService.lastCall = error.config;
        return Promise.reject(error);
      }
    );
  }

  static async get<T>(url: string): Promise<T> {
    try {
      const res = await ApiService.axios.get<T>(url);
      return res.data;
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  static async post<T>(url: string, body?: unknown, config?: any): Promise<T> {
    try {
      const res = await ApiService.axios.post<T>(url, body, config);
      return res.data;
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  static async put<T>(url: string, body?: unknown): Promise<T> {
    try {
      const res = await ApiService.axios.put<T>(url, body);
      return res.data;
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  static async delete<T>(url: string): Promise<T> {
    try {
      const res = await ApiService.axios.delete<T>(url);
      return res.data;
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  private static async handleError(error: any) {
    console.log(error.response);
    if (error.response) {
      if (error.response.status == 422) {
        let template = "<span>";
        const err = error.response.data.detail;
        if (err.length) {
          err.forEach((x: any, i: number) => {
            template += `<li> ${x.msg} </li>
            ${i == err.length - 1 ? "" : "<br />"} `;
          });
        } else {
          template += "Please resolve some validation error(s)";
        }
        template += "</span>";
        Notify.create({
          color: "red-9",
          message: template,
        });
      } else if (error.response.status == 401) {
        try {
          const response = await AuthService.refreshToken();
          AUTHSTORE.setAccessToken(response);
          ApiService.axios(ApiService.lastCall);
          Notify.create({
            message: "Successfully Updated!",
          });
        } catch {
          AUTHSTORE.logout();
          localStorage.clear();
          Notify.create({
            color: "red-9",
            timeout: 4000,
            message: "Session timeout, please login again!",
          });
        }
      } else if (error.response.status == 500) {
        Notify.create({
          color: "red-9",
          message: error.response.data.detail,
        });
      } else {
        Notify.create({
          color: "red-9",
          message: error.response.data.detail,
        });
      }
    } else {
      return error;
    }
  }
}
