import React, { useState, useEffect } from "react";
import man from "../assets/images/dashboard/profile.jpg";
import { Container, Button, Card, CardBody, CardHeader } from "reactstrap";

import { Row, Col, Form, Input, Spin, Divider } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { translate } from "react-switch-lang";
import SweetAlert from "sweetalert2";
import {
  saveToken,
  authenticate,
  setCurrentUser,
} from "./authenticationService";
import { get } from "lodash/fp";
import { toast } from "react-toastify";
import { withRouter, useHistory } from "react-router-dom";

import { GoogleSignIn } from "./social/Google";

import { FacebookSignIn } from "./social/Facebook";
import { API_HOST } from "../constant";

const Logins = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { t } = props;
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);

  const handleRegister = () => {
    history.push(`${process.env.PUBLIC_URL}/register`);
  };

  const handleForgot = () => {
    history.push(`${process.env.PUBLIC_URL}/forgot`);
  };

  const handleOnFinish = (values) => {
    const { username, password } = values;
    return loginWithJwt(username, password);
  };

  const handleJwtSucsessResponse = (response) => {
    const rememberMe = false;
    const user = response.data;
    console.log("user", user);
    if (user) {
      const userDetails = user.details;
      const { roles } = userDetails;
      let defaultRoute = "/";
      if (get("ADMIN", roles) || get("DESIGNER", roles)) {
        defaultRoute = "/view-orders";
      }
      setValue(man);
      setName(userDetails.username);
      saveToken(user.token, rememberMe);
      setCurrentUser(userDetails, rememberMe);
      const from = get("from", props.location.state);

      const redirect = from || `${process.env.PUBLIC_URL}${defaultRoute}`;
      window.location.href = redirect;
    }

    return user;
  };

  const handleJwtErrorResponse = (message) => {
    SweetAlert.fire(
      "Thất bại",
      "Đăng nhập không thành công, vui lòng thử lại",
      "error"
    ).then((result) => {
      if (result.value) {
        form.resetFields();
      }
    });
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  const loginWithJwt = async (username, password) => {
    setLoading(true);

    try {
      const response = await authenticate(username, password, false);
      setLoading(false);

      return handleJwtSucsessResponse(response);
    } catch (error) {
      setLoading(false);
      handleJwtErrorResponse(error.message);
    }
  };

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col lg={24}>
          <div className="video-wrap">
            <video autoPlay muted loop>
              <source
                src={`${API_HOST}/img/TIS-Dashboard-video.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="login-card">
            <Spin spinning={loading}>
              <Card>
                <CardHeader className="b-t-primary border-3">
                  <div className="logo">
                    <img
                      className="img-fluid for-light"
                      src={require("../assets/images/logo/login.png")}
                      alt=""
                    />
                    <img
                      className="img-fluid for-dark"
                      src={require("../assets/images/logo/logo_dark.png")}
                      alt=""
                    />
                  </div>
                  <h6 className="title f-30">{t("user.signIn")}</h6>
                </CardHeader>
                <CardBody>
                  <Form
                    className="theme-form"
                    onFinish={handleOnFinish}
                    form={form}
                  >
                    <Form.Item
                      label={t("user.userName")}
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Bắt buộc điền",
                        },
                      ]}
                    >
                      <Input className="form-control" type="text" />
                    </Form.Item>
                    <Form.Item
                      label={t("user.password.label")}
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Bắt buộc điền",
                        },
                      ]}
                    >
                      <Input.Password
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                    <div className="form-group mb-0">
                      <Button
                        htmlType="submit"
                        color="primary"
                        className="loginButton"
                        disabled={loading}
                      >
                        {t("user.signIn")}
                      </Button>
                    </div>
                    <a onClick={handleForgot}> {t("user.forgot")}</a>
                    <Divider type="vertical" />
                    <a onClick={handleRegister}>{t("user.createAccount")}</a>
                    <h6 className="text-muted mt-4 or">{t("user.orSignIn")}</h6>
                    <div className="social mt-4">
                      <div className="btn-showcase">
                        <FacebookSignIn
                          successHandler={handleJwtSucsessResponse}
                          errorHandler={handleJwtErrorResponse}
                          loading={loading}
                          setLoading={setLoading}
                        />
                        <GoogleSignIn
                          successHandler={handleJwtSucsessResponse}
                          errorHandler={handleJwtErrorResponse}
                          loading={loading}
                          setLoading={setLoading}
                        />
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Spin>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(translate(Logins));
