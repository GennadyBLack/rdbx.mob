import api from "../index";

const document = {
  documentId: async (id) => api.get(`document/ticket_id${id}.pdf`),
  activity_members_file: async (code) => api.get(`document/qr_${code}.code`),
  activity_members_organizer: async (organizer) =>
    api.get(`document/act_${organizer}.docx`),
};
export default document;
