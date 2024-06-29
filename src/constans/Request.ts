import axios, { AxiosResponse } from 'axios';

class Request {

  async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } 
    catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }


  async post<T>(url: string, data: unknown): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(url, data);
      return response.data;
    } 
    catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }


  async put<T>(url: string, data: unknown): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(url, data);
      return response.data;
    } 
    catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

 
  async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(url);
      return response.data;
    } 
    catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }
}

export const request = new Request();
