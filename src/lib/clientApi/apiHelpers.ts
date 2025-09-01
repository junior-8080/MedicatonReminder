import apiClient from "./apiClientSettup";


const api = {
  get: async (url: string, params?: object,headers?:object) => {
    const response = await apiClient.get(url, { params,headers });
    return response.data;
  },

  post: async (url: string, data: object, options: any = {}) => {
      const response = await apiClient.post(url, data, options);
      return response.data;
  },
  
  put: async (url: string, data: object) => {
    const response = await apiClient.put(url, data);
    return response.data;
  },
  patch: async (url: string, data: object) => {
    const response = await apiClient.patch(url, data);
    return response.data;
  },
  delete: async (url: string) => {
    const response = await apiClient.delete(url);
    return response.data;
  }
};

export default api;


