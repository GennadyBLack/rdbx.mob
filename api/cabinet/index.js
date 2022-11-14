import api from "../index";

const cabinet = {
  get_profile: async () => api.get("cabinet/get_profile"),
  get_multiple_ticket_by_filter: async () =>
    api.get("cabinet/get_multiple_ticket_by_filter"),
  get_multiple_notification_by_filter: async () =>
    api.get("cabinet/get_multiple_notification_by_filter"),
  get_multiple_cancel_request_by_filter: async () =>
    api.get("cabinet/get_multiple_cancel_request_by_filter"),
  get_multiple_organizer_by_filter: async (config) =>
    api.get("cabinet/get_multiple_organizer_by_filter", config),
  get_multiple_cancel_request_by_filter: async () =>
    api.get("cabinet/get_multiple_cancel_request_by_filter"),

  get_multiple_participant_by_filter: async (config) =>
    api.get("cabinet/get_multiple_participant_by_filter", config),
  get_on_favorite_activity: async (config) =>
    api.get("cabinet/get_on_favorite_activity", config),
  get_on_favorite_organizer: async (config) =>
    api.get("cabinet/get_on_favorite_organizer", config),
  get_my_multiple_activity_by_filter: async (config) =>
    api.get("cabinet/get_my_multiple_activity_by_filter", config),
  get_multiple_users_by_filter: async (config) =>
    api.get("cabinet/get_multiple_users_by_filter", config),
  get_assigment_requests_by_filter: async (config) =>
    api.get("cabinet/get_assigment_requests_by_filter", config),

  get_references_activity: async (config) =>
    api.get("cabinet/get_references_activity", config),
  get_multiple_user_access_organizer: async (config) =>
    api.get("cabinet/get_multiple_user_access_organizer", config),
  get_organizer_requisite: async (config) =>
    api.get("cabinet/get_organizer_requisite", config),
  get_multiple_donations_by_filter: async (config) =>
    api.get("cabinet/get_multiple_donations_by_filter", config),
  get_dashboard_data: async (config) =>
    api.get("cabinet/get_dashboard_data", config),
  change_password_authorized_user: async (data) =>
    api.post("cabinet/change_password_authorized_user", data),

  get_all_setting: async (config) => api.get("cabinet/get_all_setting", config),

  set_one_setting: async (data) => api.post("/methods/set_one_setting", data),

  organizer_reviews: async (config) =>
    api.get("public/organizer/{organizerId}/reviews", config),

  get_dashboard_data: async (config) =>
    api.get("cabinet/activities/statistics", config),

  activities: async (config) => api.get("cabinet/activities", config),

  mailing_calculate: async (data) => api.get(`cabinet/mailing/calculate`, data),
  mailing_execute: async (data) => api.post(`cabinet/mailing/execute`, data),
  cancel_requests: async (config) => api.get("entity/cancel-requests", config),
};
export default cabinet;
