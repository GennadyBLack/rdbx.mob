import api from "../index";

const auth = {
  register_one_user: async (data) => api.post("auth/register_one_user", data),
  activate_one_user_by_token: async (data) =>
    api.post("auth/activate_one_user_by_token", data),
  send_remember_password_link: async (data) =>
    api.post("auth/send_remember_password_link", data),
  set_new_password_by_token: async (data) =>
    api.post("auth/set_new_password_by_token", data),
  login_one_user: async (data) => api.post("auth/login_one_user", data),
  logout_one_user: async (data) => api.post("auth/logout_one_user", data),
  refresh_auth_token: async (data) => api.post("auth/refresh_auth_token", data),
};
export default auth;
