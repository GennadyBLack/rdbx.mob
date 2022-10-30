import api from "../index";

const users = {
  getAll: async (config) => api.get("users", config),
  get: async (id, config) => api.get(`users/${id}`, config),
  my: async (config) => api.get(`users/my`, config),
  create: async (data) => api.post("users", data),
  update: async (id, data) => api.patch(`users/${id}`, data),
  del: async (id) => api.delete(`users/${id}`),
};
export default users;
