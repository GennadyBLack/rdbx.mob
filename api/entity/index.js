import api from "../index";

const entity = {
  delete_entity_activities: async (id) => api.delete(`entity/activities/${id}`),

  activity_relationships_donations: async (id) =>
    api.get(`entity/activities/${id}/relationships/donations`),

  get_all_access_users: async (id) =>
    api.get(`entity/activities/${id}/relationships/have_access_users`),
  add_access_users: async (id) =>
    api.post(`entity/activities/${id}/relationships/have_access_users`),

  delete_access_users: async (id, email) =>
    api.delete(
      `entity/activities/${id}/relationships/have_access_users/${email}`
    ),
};
export default entity;
