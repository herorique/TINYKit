import React from "react";
import { Button } from "reactstrap";
import { Facebook } from "react-feather";
import { API_URL, FACEBOOK_CLIENT_ID } from "../../../constant";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";

export const FacebookSignIn = ({
  successHandler,
  errorHandler,
  loading,
  setLoading,
}) => {
  const errorResponse = (response) => {
    errorHandler(response.details);
  };

  const successResponse = (response) => {
    setLoading(true);
    axios
      .post(`${API_URL}/users/facebook-login`, response)
      .then((res) => {
        successHandler(res);
      })
      .catch(errorResponse)
      .finally(() => {
        setLoading(false);
      });
  };

  const signInButton = (renderProps) => (
    <Button
      color="light"
      onClick={renderProps.onClick}
      disabled={renderProps.disabled}
    >
      <Facebook className="txt-fb" />
    </Button>
  );

  return (
    <FacebookLogin
      appId={FACEBOOK_CLIENT_ID}
      render={signInButton}
      responseType="code"
      fields="name,email,picture"
      callback={successResponse}
    />
  );
};

export default FacebookSignIn;
