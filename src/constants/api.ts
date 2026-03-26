export const API_BASE_URL = 'https://dummyjson.com';

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
  },

  // Products
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: number) => `/products/${id}`,
    SEARCH: (query: string) => `/products/search?q=${query}`,
    CATEGORIES: '/products/categories',
    CATEGORY_LIST: '/products/category-list',
    BY_CATEGORY: (slug: string) => `/products/category/${slug}`,
    ADD: '/products/add',
    UPDATE: (id: number) => `/products/${id}`,
    DELETE: (id: number) => `/products/${id}`,
  },

  // Carts
  CARTS: {
    LIST: '/carts',
    DETAIL: (id: number) => `/carts/${id}`,
    BY_USER: (userId: number) => `/carts/user/${userId}`,
    ADD: '/carts/add',
    UPDATE: (id: number) => `/carts/${id}`,
    DELETE: (id: number) => `/carts/${id}`,
  },

  // Users
  USERS: {
    LIST: '/users',
    DETAIL: (id: number) => `/users/${id}`,
    SEARCH: (query: string) => `/users/search?q=${query}`,
    FILTER: (key: string, value: string) => `/users/filter?key=${key}&value=${value}`,
    CARTS: (id: number) => `/users/${id}/carts`,
    POSTS: (id: number) => `/users/${id}/posts`,
    TODOS: (id: number) => `/users/${id}/todos`,
    ADD: '/users/add',
    UPDATE: (id: number) => `/users/${id}`,
    DELETE: (id: number) => `/users/${id}`,
  },

  // Posts
  POSTS: {
    LIST: '/posts',
    DETAIL: (id: number) => `/posts/${id}`,
    SEARCH: (query: string) => `/posts/search?q=${query}`,
    BY_USER: (userId: number) => `/posts/user/${userId}`,
    COMMENTS: (id: number) => `/posts/${id}/comments`,
    TAGS: '/posts/tags',
    BY_TAG: (tagName: string) => `/posts/tag/${tagName}`,
    ADD: '/posts/add',
    UPDATE: (id: number) => `/posts/${id}`,
    DELETE: (id: number) => `/posts/${id}`,
  },

  // Comments
  COMMENTS: {
    LIST: '/comments',
    DETAIL: (id: number) => `/comments/${id}`,
    BY_POST: (postId: number) => `/comments/post/${postId}`,
    ADD: '/comments/add',
    UPDATE: (id: number) => `/comments/${id}`,
    DELETE: (id: number) => `/comments/${id}`,
  },

  // Recipes
  RECIPES: {
    LIST: '/recipes',
    DETAIL: (id: number) => `/recipes/${id}`,
    SEARCH: (query: string) => `/recipes/search?q=${query}`,
    BY_TAG: (tagName: string) => `/recipes/tag/${tagName}`,
    BY_MEAL_TYPE: (type: string) => `/recipes/meal-type/${type}`,
  },

  // Others
  TODOS: {
    LIST: '/todos',
    DETAIL: (id: number) => `/todos/${id}`,
    RANDOM: '/todos/random',
    BY_USER: (userId: number) => `/todos/user/${userId}`,
  },
  QUOTES: {
    LIST: '/quotes',
    DETAIL: (id: number) => `/quotes/${id}`,
    RANDOM: '/quotes/random',
  },
} as const;
