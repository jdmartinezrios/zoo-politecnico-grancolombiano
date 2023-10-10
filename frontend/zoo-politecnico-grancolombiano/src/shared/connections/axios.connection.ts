import axios from 'axios';
import { BASE_URL } from '../../config';

export class AxiosInstance {
  private constructor() {}

  private static instance: AxiosInstance;
  public axios = axios.create({ baseURL: BASE_URL });

  public static getInstance(): AxiosInstance {
    if (!AxiosInstance.instance) {
      AxiosInstance.instance = new AxiosInstance();
    }
    return AxiosInstance.instance;
  }
}
