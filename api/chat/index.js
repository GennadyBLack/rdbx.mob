import api from "../index";

const chat = {
  getAll: async (config) => api.get("chats", config),
  get: async (id, config) => api.get(`chats/${id}`, config),
  my: async (config) => api.get(`chats/my`, config),
  create: async (data) => api.post("chats", data),
  update: async (id, data) => api.patch(`chats/${id}`, data),
  del: async (id) => api.delete(`chats/${id}`),
};
export default chat;
