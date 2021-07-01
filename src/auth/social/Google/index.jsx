import React from "react";
import { Button } from "reactstrap";
import { API_URL, GOOGLE_CLIENT_ID } from "../../../constant";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

export const GoogleSignIn = ({
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
      .post(`${API_URL}/users/google-login`, response)
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
      <i className="icon-social-google txt-googleplus"></i>
    </Button>
  );

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={signInButton}
      responseType="code"
      onSuccess={successResponse}
      onFailure={errorResponse}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignIn;
