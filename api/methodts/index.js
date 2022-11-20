import api from "../index";

const methodts = {
  add_one_organizer: async (data) =>
    api.post(`methods/add_one_organizer`, data),
  add_one_activity: async (data) => api.post(`methods/add_one_activity`, data),

  add_multiple_city: async (data) =>
    api.post(`methods/add_multiple_city`, data),
  add_multiple_age_rating: async (data) =>
    api.post(`methods/add_multiple_age_rating`, data),
  add_multiple_category: async (data) =>
    api.post(`methods/add_multiple_category`, data),
  add_one_activity_assignment_request: async (data) =>
    api.post(`methods/add_one_activity_assignment_request`, data),
  add_review_to_activity: async (data) =>
    api.post(`methods/add_review_to_activity`, data),
  donate_activity: async (data) => api.post(`methods/donate_activity`, data),
  conclude_contract_one_organizer: async (data) =>
    api.post(`methods/conclude_contract_one_organizer`, data),
  add_one_refund: async (data) => api.post(`methods/add_one_refund`, data),

  add_one_cancel_request: async (data) =>
    api.post(`methods/add_one_cancel_request`, data),

  remove_multiple_category: async (data) =>
    api.post(`methods/remove_multiple_category`, data),
  remove_multiple_city: async (data) =>
    api.post(`methods/remove_multiple_city`, data),

  confirm_moderate_one_activity_and_publish: async (data) =>
    api.post(
      `methods/removconfirm_moderate_one_activity_and_publishe_multiple_age_rating`,
      data
    ),

  confirm_conclude_contract_one_organizer: async (data) =>
    api.post(`methods/confirm_conclude_contract_one_organizer`, data),

  confirm_ticket_use_by_code: async (data) =>
    api.post(`methods/confirm_ticket_use_by_code`, data),

  confirm_one_assigment_request: async (data) =>
    api.post(
      `methods/confirmconfirm_one_assigment_request_ticket_use_by_code`,
      data
    ),

  remove_multiple_age_rating: async (data) =>
    api.post(`methods/remove_multiple_age_rating`, data),

  reject_one_assigment_request: async (data) =>
    api.post(`methods/reject_one_assigment_request`, data),
  subscribe_to_one_activity: async (data) =>
    api.post(`methods/subscribe_to_one_activity`, data),

  subscribe_to_one_organizer: async (data) =>
    api.post(`methods/subscribe_to_one_organizer`, data),

  unsubscribe_to_one_activity: async (data) =>
    api.post(`methods/unsubscribe_to_one_activity`, data),

  unsubscribe_to_one_organizer: async (data) =>
    api.post(`methods/unsubscribe_to_one_organizer`, data),

  block_one_user: async (data) => api.post(`methods/block_one_user`, data),
  unblock_one_user: async (data) => api.post(`methods/unblock_one_user`, data),

  notify_multiple_user_by_filter: async (data) =>
    api.post(`methods/notify_multiple_user_by_filter`, data),

  moderate_one_activity_and_publish: async (data) =>
    api.post(`methods/moderate_one_activity_and_publish`, data),

  remove_multiple_meta_tags: async (data) =>
    api.post(`methods/remove_multiple_meta_tags`, data),

  exist_login: async (data) => api.post(`methods/exist_login`, data),
  add_multiple_meta_tags: async (data) =>
    api.post(`methods/add_multiple_meta_tags`, data),

  reset_bonus: async (data) => api.post(`methods/reset_bonus`, data),

  reject_one_activity_with_reason: async (data) =>
    api.post(`methods/reject_one_activity_with_reason`, data),

  cancel_activity: async (data) => api.post(`methods/cancel_activity`, data),

  update_organizer: async (data) => api.post(`methods/update_organizer`, data),

  change_user_login: async (data) =>
    api.post(`methods/change_user_login`, data),

  update_authorized_user_profile: async (data) =>
    api.post(`methods/update_authorized_user_profile`, data),

  share_one_organizer_to_multiple_user: async (data) =>
    api.post(`methods/share_one_organizer_to_multiple_user`, data),

  withdraw_funds_request_one_organizer: async (data) =>
    api.post(`methods/withdraw_funds_request_one_organizer`, data),

  fill_one_organizer_requisite: async (data) =>
    api.post(`methods/fill_one_organizer_requisite`, data),
  buy_multiple_ticket: async (data) =>
    api.post(`methods/buy_multiple_ticket`, data),
};
export default methodts;
