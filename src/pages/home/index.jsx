import React, { Fragment } from "react";
import { Container } from "reactstrap";

import { Breadcrumb } from "antd";

import "./home.scss";

const HomePage = (props) => {
  return (
    <Fragment>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Component</Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid={true}>HOME_PAGE</Container>
    </Fragment>
  );
};

export default HomePage;
