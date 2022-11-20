import api from "../index";

const media = {
  upload_image: async (data) => api.post(`media/upload_gallery_image`, data),

  upload_photo: async (data) => api.post(`media/media/upload_photo`, data),

  upload_link: async (data) =>
    api.post(`media/media/attach_gallery_youtube_video_link`, data),
};
export default media;
