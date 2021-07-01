import axios from 'axios';
import { Storage } from 'react-jhipster';
import { AUTH_TOKEN_KEY, AUTH_CURRENT_USER_KEY, API_LOGIN } from '../constant';
import { get } from 'lodash/fp';


export const authenticate = async (username, password, rememberMe) => {
  return await axios.post(API_LOGIN, { username, password, rememberMe },
    {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
};

export const getToken = () => {
  return Storage.local.get(AUTH_TOKEN_KEY) || Storage.session.get(AUTH_TOKEN_KEY);
};


export const isAuthenticated = () => {
  return getToken() != null;
}

export const saveToken = (token, rememberMe = false) => {
  if (rememberMe) {
    Storage.local.set(AUTH_TOKEN_KEY, token);
  } else {
    Storage.session.set(AUTH_TOKEN_KEY, token);
  }
};

export const clearToken = () => {
  if (Storage.local.get(AUTH_TOKEN_KEY)) {
    Storage.local.remove(AUTH_TOKEN_KEY);
  }

  if (Storage.session.get(AUTH_TOKEN_KEY)) {
    Storage.session.remove(AUTH_TOKEN_KEY);
  }
};

export const setCurrentUser = (user, rememberMe = false) => {
  if (rememberMe) {
    Storage.local.set(AUTH_CURRENT_USER_KEY, user);
  } else {
    Storage.session.set(AUTH_CURRENT_USER_KEY, user);
  }
};

export const getCurrentUserRoles = () => {
  return get("roles", getCurrentUser()) || [];
}

export const getCurrentUser = () => {
  return Storage.local.get(AUTH_CURRENT_USER_KEY) || Storage.session.get(AUTH_CURRENT_USER_KEY);
};

export const clearCurrentUser = () => {
  if (Storage.local.get(AUTH_CURRENT_USER_KEY)) {
    Storage.local.remove(AUTH_CURRENT_USER_KEY);
  }

  if (Storage.session.get(AUTH_CURRENT_USER_KEY)) {
    Storage.session.remove(AUTH_CURRENT_USER_KEY);
  }
};
