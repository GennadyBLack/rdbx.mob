import api from "../index";

const general = {
  get_debug_info_api: async (config) =>
    api.get(`public/get_debug_info_api`, config),
  get_multiple_user_by_filter: async (config) =>
    api.get(`public/get_debugget_multiple_user_by_filter_info_api`, config),
  get_multiple_activity_by_filter: async (config) =>
    api.get(`public/get_multiple_activity_by_filter`, config),
  get_multiple_organizer_by_filter: async (config) =>
    api.get(` cabinet/get_multiple_organizer_by_filter`, config),
  get_one_activity_by_filter: async (config) =>
    api.get(` public/get_one_activity_by_filter`, config),
  get_one_organizer_by_filter: async (config) =>
    api.get(` public/get_one_organizer_by_filter`, config),
  get_all_category: async (config) =>
    api.get(` public/get_all_category`, config),
  get_all_age_rating: async (config) =>
    api.get(` public/get_all_age_rating`, config),
  get_all_city: async (config) => api.get(` public/get_all_city`, config),
  get_all_area: async (config) => api.get(` public/get_all_area`, config),
  meta_tags: async (config) => api.post(` public/meta_tags`, config),
  get_meta_tags: async (config) => api.get(` public/get_meta_tags`, config),
};
export default general;
