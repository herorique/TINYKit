import { getSaveFileUrl, getFileUrl, getDeleteFileUrl } from "../utils/url";
import { doRequest } from "../utils/request-utils";
import axios from "axios";
import { PUBLIC_URL } from "../constant";

export const getUploadFilePath = (filePath) => {
  return PUBLIC_URL + "/upload" + filePath;
};

export const saveFile = async (folder, file) => {
  const formData = new FormData();
  formData.append("path", folder);
  formData.append("file", file);

  const filePath = await doRequest(() => {
    return axios.post(getSaveFileUrl(), formData);
  });

  return getUploadFilePath(filePath);
};

export const saveImage = async (folder, file) => {
  const imagePath = "/image/";
  const formData = new FormData();
  formData.append("path", imagePath + folder);
  formData.append("file", file);

  const filePath = await doRequest(() => {
    return axios.post(getSaveFileUrl(), formData);
  });

  return getUploadFilePath(filePath);
};

export const getFile = async (filePath) => {
  return await doRequest(() => {
    return axios.get(getFileUrl(filePath));
  });
};

export const deleteFile = async (filePath) => {
  return await doRequest(() => {
    return axios.delete(getDeleteFileUrl(filePath));
  });
};
