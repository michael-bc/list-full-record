import axios from "axios";
import type { AxiosInstance } from "axios";

export interface ApiCore {
  init(apiBaseUrl: string): void;
  getInst(): AxiosInstance;
}

export class ApiCoreImpl implements ApiCore {
  protected apiBaseUrl = new URL(window.location.origin);
  protected inst = axios.create();

  public init(apiBaseUrl: string) {
  this.apiBaseUrl = new URL(apiBaseUrl || window.location.origin);
    this.inst.defaults.baseURL = this.apiBaseUrl.toString();
  }

  public getInst(): AxiosInstance {
    return this.inst;
  }
}

