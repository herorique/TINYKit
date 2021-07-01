import axios from "axios";

import {
  getInputsUrl,
  getInputUrl,
  createInputUrl,
  updateInputUrl,
  deleteInputUrl,
  getProductsUrl,
  getProductUrl,
  createProductUrl,
  updateProductUrl,
  deleteProductUrl,
  getUsersUrl,
  getUserUrl,
  createUserUrl,
  updateUserUrl,
  deleteUserUrl,
  getRolesUrl,
  getRoleUrl,
  createRoleUrl,
  updateRoleUrl,
  deleteRoleUrl,
  getPaymentMethodsUrl,
  getPaymentMethodUrl,
  createPaymentMethodUrl,
  updatePaymentMethodUrl,
  deletePaymentMethodUrl,
  getUserGroupsUrl,
  getUserGroupUrl,
  createUserGroupUrl,
  updateUserGroupUrl,
  deleteUserGroupUrl,
} from "../utils/url";
export const fetchProductApi = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/product.json`);
};

export const fetchChatApi1 = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/chatMember.json`);
};

export const fetchChatApi2 = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/chat.chats.json`);
};

export const fetchEmailApi = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/email.json`);
};

export const fetchBookmaekApi = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/bookmark.json`);
};

export const fetchTodoApi = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/todo.json`);
};

export const fetchTaskApi = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/task.json`);
};

export const fetchProjectApi = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/project.json`);
};

export const authenticateApi = (email, password) => {
  return axios.get(`${process.env.PUBLIC_URL}/api/project.json`);
};

export const api = {
  input: {
    fetchAll: () => {
      return axios.get(getInputsUrl());
    },
    getItem: (id) => {
      return axios.get(getInputUrl(id));
    },
    editItem: (item) => {
      return axios.put(updateInputUrl(item.id), item);
    },
    addItem: (item) => {
      return axios.post(createInputUrl(), item);
    },
    deleteItem: (id) => {
      return axios.delete(deleteInputUrl(id));
    },
  },

  product: {
    fetchAll: () => {
      return axios.get(getProductsUrl());
    },
    getItem: (id) => {
      return axios.get(getProductUrl(id));
    },
    editItem: (item) => {
      return axios.put(updateProductUrl(item.id), item);
    },
    addItem: (item) => {
      return axios.post(createProductUrl(), item);
    },
    deleteItem: (id) => {
      return axios.delete(deleteProductUrl(id));
    },
  },
  user: {
    fetchAll: () => {
      return axios.get(getUsersUrl());
    },
    getItem: (id) => {
      return axios.get(getUserUrl(id));
    },
    editItem: (item) => {
      return axios.put(updateUserUrl(item.id), item);
    },
    addItem: (item) => {
      return axios.post(createUserUrl(), item);
    },
    deleteItem: (id) => {
      return axios.delete(deleteUserUrl(id));
    },
  },

  role: {
    fetchAll: () => {
      return axios.get(getRolesUrl());
    },
    getItem: (id) => {
      return axios.get(getRoleUrl(id));
    },
    editItem: (item) => {
      return axios.put(updateRoleUrl(item.id), item);
    },
    addItem: (item) => {
      return axios.post(createRoleUrl(), item);
    },
    deleteItem: (id) => {
      return axios.delete(deleteRoleUrl(id));
    },
  },
  paymentMethod: {
    fetchAll: () => {
      return axios.get(getPaymentMethodsUrl());
    },
    getItem: (id) => {
      return axios.get(getPaymentMethodUrl(id));
    },
    editItem: (item) => {
      return axios.put(updatePaymentMethodUrl(item.id), item);
    },
    addItem: (item) => {
      return axios.post(createPaymentMethodUrl(), item);
    },
    deleteItem: (id) => {
      return axios.delete(deletePaymentMethodUrl(id));
    },
  },

  userGroup: {
    fetchAll: () => {
      return axios.get(getUserGroupsUrl());
    },
    getItem: (id) => {
      return axios.get(getUserGroupUrl(id));
    },
    editItem: (item) => {
      return axios.put(updateUserGroupUrl(item.id), item);
    },
    addItem: (item) => {
      return axios.post(createUserGroupUrl(), item);
    },
    deleteItem: (id) => {
      return axios.delete(deleteUserGroupUrl(id));
    },
  },
};
