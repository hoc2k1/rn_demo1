import { API_BASE_URL } from '../constants/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions extends RequestInit {
  cache?: boolean;
  params?: Record<string, string | number>;
}

class ApiClient {
  private baseUrl: string;
  private cache: Map<string, any>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.cache = new Map();
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { cache = false, params, ...fetchOptions } = options;
    
    // Xây dựng URL với query params
    let url = `${this.baseUrl}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, String(value));
      });
      url += `?${searchParams.toString()}`;
    }

    // Kiểm tra cache nếu là GET request
    const method = fetchOptions.method || 'GET';
    if (method === 'GET' && cache && this.cache.has(url)) {
      console.log(`[Cache Hit] ${url}`);
      return this.cache.get(url);
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Lưu vào cache nếu bật và là GET
      if (method === 'GET' && cache) {
        this.cache.set(url, data);
      }

      return data;
    } catch (error) {
      console.error(`[Api Error] ${method} ${url}:`, error);
      throw error;
    }
  }

  public get<T>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public post<T>(endpoint: string, data?: any, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public put<T>(endpoint: string, data?: any, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public patch<T>(endpoint: string, data?: any, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public delete<T>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  public clearCache() {
    this.cache.clear();
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
