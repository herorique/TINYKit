import {
  PUBLIC_URL,
  FILE_RESOURCE_URL,
  API_URL,
  INPUT_URL,
  PRODUCT_URL,
  USER_URL,
  ROLE_URL,
  PAYMENT_METHOD_URL,
  USER_GROUP_URL,
} from "../constant";

export const getQueryString = (params) => {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
};

export const apiUrl = () => {
  return `${API_URL}/`;
};

//File resource

const getFilePathParams = (filePath) => {
  return "?path=" + filePath;
};
export const getFileUrl = (filePath) => {
  return PUBLIC_URL + filePath;
};
export const getSaveFileUrl = () => {
  return apiUrl() + FILE_RESOURCE_URL.SAVE;
};
export const getDeleteFileUrl = (filePath) => {
  return apiUrl() + FILE_RESOURCE_URL.DELETE + getFilePathParams(filePath);
};

//Input
export const getInputsUrl = () => {
  return apiUrl() + INPUT_URL.GET_ALL;
};
export const getInputUrl = (id) => {
  return apiUrl() + INPUT_URL.GET + id;
};
export const createInputUrl = () => {
  return apiUrl() + INPUT_URL.CREATE;
};
export const updateInputUrl = (id) => {
  return apiUrl() + INPUT_URL.UPDATE + id;
};
export const deleteInputUrl = (id) => {
  return apiUrl() + INPUT_URL.DELETE + id;
};

//Product
export const getProductsUrl = () => {
  return apiUrl() + PRODUCT_URL.GET_ALL;
};
export const getProductUrl = (id) => {
  return apiUrl() + PRODUCT_URL.GET + id;
};
export const createProductUrl = () => {
  return apiUrl() + PRODUCT_URL.CREATE;
};
export const updateProductUrl = (id) => {
  return apiUrl() + PRODUCT_URL.UPDATE + id;
};
export const deleteProductUrl = (id) => {
  return apiUrl() + PRODUCT_URL.DELETE + id;
};

//User
export const getUsersUrl = () => {
  return apiUrl() + USER_URL.GET_ALL;
};
export const getUserUrl = (id) => {
  return apiUrl() + USER_URL.GET + id;
};
export const createUserUrl = () => {
  return apiUrl() + USER_URL.CREATE;
};
export const updateUserUrl = (id) => {
  return apiUrl() + USER_URL.UPDATE + id;
};
export const deleteUserUrl = (id) => {
  return apiUrl() + USER_URL.DELETE + id;
};

//Role
export const getRolesUrl = () => {
  return apiUrl() + ROLE_URL.GET_ALL;
};
export const getRoleUrl = (id) => {
  return apiUrl() + ROLE_URL.GET + id;
};
export const createRoleUrl = () => {
  return apiUrl() + ROLE_URL.CREATE;
};
export const updateRoleUrl = (id) => {
  return apiUrl() + ROLE_URL.UPDATE + id;
};
export const deleteRoleUrl = (id) => {
  return apiUrl() + ROLE_URL.DELETE + id;
};

//PaymentMethod
export const getPaymentMethodsUrl = () => {
  return apiUrl() + PAYMENT_METHOD_URL.GET_ALL;
};
export const getPaymentMethodUrl = (id) => {
  return apiUrl() + PAYMENT_METHOD_URL.GET + id;
};
export const createPaymentMethodUrl = () => {
  return apiUrl() + PAYMENT_METHOD_URL.CREATE;
};
export const updatePaymentMethodUrl = (id) => {
  return apiUrl() + PAYMENT_METHOD_URL.UPDATE + id;
};
export const deletePaymentMethodUrl = (id) => {
  return apiUrl() + PAYMENT_METHOD_URL.DELETE + id;
};

//UserGroup
export const getUserGroupsUrl = () => {
  return apiUrl() + USER_GROUP_URL.GET_ALL;
};
export const getUserGroupUrl = (id) => {
  return apiUrl() + USER_GROUP_URL.GET + id;
};
export const createUserGroupUrl = () => {
  return apiUrl() + USER_GROUP_URL.CREATE;
};
export const updateUserGroupUrl = (id) => {
  return apiUrl() + USER_GROUP_URL.UPDATE + id;
};
export const deleteUserGroupUrl = (id) => {
  return apiUrl() + USER_GROUP_URL.DELETE + id;
};
