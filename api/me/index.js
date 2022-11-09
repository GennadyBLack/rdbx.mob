import api from "../index";

const me = {
  //Получение конкретной сущности "collections"
  me: async (config = {}) => api.post(`auth/me`, config),
  update: async (config = {}) => api.patch(`auth/me`, config),
  createFriends: async (data) => api.post(`auth/me/friends`, data),
  requestFriend: async (data) => api.post("auth/me/friends_requests", data),
  getFriends: async (data) => api.get("auth/me/friends", data),
};

export default me;
