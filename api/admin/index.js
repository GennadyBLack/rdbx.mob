import api from "../index";

const admin = {
  adminCancel: async (id) => api.post(`admin/ticket/${id}/cancel`),
  adminActivityCancel: async (id) => api.post(`admin/activity/${id}/cancel`),
};

export default admin;
