import React, { useState, useEffect } from "react";
import man from "../assets/images/dashboard/profile.jpg";
import { Form, Input, Row, Col, Button, Spin } from "antd";
import axios from "axios";
import { Container, Card, CardBody, CardHeader } from "reactstrap";

import { translate } from "react-switch-lang";
import { omit } from "lodash/fp";
import { useHistory } from "react-router-dom";
import SweetAlert from "sweetalert2";
import { API_URL, API_HOST } from "../constant";

const ForgotPassword = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { t } = props;
  const onFinish = (values) => {
    setLoading(true);
    const payload = omit(["confirm"], values);
    axios
      .post(`${API_URL}/users/forgot-password`, payload)
      .then((res) => {
        SweetAlert.fire({
          title: `Thành công`,
          text: "Một email xác nhận sẽ gửi đến bạn. Vui lòng kiểm tra email",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Đồng ý",
          cancelButtonText: "Hủy",
          reverseButtons: true,
        }).then((result) => {
          history.push(`${process.env.PUBLIC_URL}/login`);
        });
      })
      .catch((err) => {
        SweetAlert.fire(
          "Thất bại",
          "Không tìm thấy tài khoản của bạn, vui lòng chọn email khác",
          "error"
        ).then((result) => {
          form.resetFields();
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSignIn = () => {
    history.push(`${process.env.PUBLIC_URL}/login`);
  };

  return (
    <Container fluid={true} className="p-0">
      <Row justify="center">
        <Col className="register-wrapper">
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
                  <h5 className="title f-30">{t("user.forgot")}</h5>
                </CardHeader>
                <CardBody>
                  <Form
                    layout="vertical"
                    form={form}
                    name="ForgotPassword"
                    onFinish={onFinish}
                    scrollToFirstError
                  >
                    <Row gutter={[15, 15]}>
                      <Col span={24}>
                        <Form.Item
                          name="email"
                          label={t("user.email.label")}
                          rules={[
                            {
                              type: "email",
                              message: t("user.email.error.valid"),
                            },
                            {
                              required: true,
                              message: t("user.email.error.required"),
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="password"
                          label={t("user.passwordNew.label")}
                          rules={[
                            {
                              required: true,
                              message: t("user.password.error.required"),
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.Password />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="confirm"
                          label={t("user.confirmPasswordNew.label")}
                          dependencies={["password"]}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: t("user.confirmPassword.error.required"),
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }

                                return Promise.reject(
                                  new Error(
                                    t("user.confirmPassword.error.match")
                                  )
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                      </Col>

                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="register-button primary-btn"
                        >
                          {t("user.submit")}
                        </Button>
                      </Form.Item>
                      <p className="mt-4 mb-0">
                        {t("user.haveAccount")}
                        <a className="ml-2" onClick={handleSignIn}>
                          {t("user.signIn")}
                        </a>
                      </p>
                    </Row>
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

export default translate(ForgotPassword);
