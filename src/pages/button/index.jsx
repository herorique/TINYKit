import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
import Button from "../../components/Button";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { DownloadOutlined, SyncOutlined } from "@ant-design/icons";

const ButtonPage = (props) => {
  const [buttonIsSubmitted, setButtonIsSubmitted] = useState(false);

  const onButtonClick = () => {
    setButtonIsSubmitted(true);

    setTimeout(() => setButtonIsSubmitted(false), 2000);
  };

  const getIcon = () => {
    if (buttonIsSubmitted) {
      return <SyncOutlined spin />;
    }
    return <DownloadOutlined />;
  };

  return (
    <Fragment>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Component</Breadcrumb.Item>
        <Breadcrumb.Item>Button</Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid={true}>
        <h3>Button sizes</h3>
        <div className="group">
          <Button className="item" size="big" text="Big" />
          <Button className="item" text="Default" />
          <Button className="item" size="small" text="Small" />
        </div>

        <h3>Button types</h3>
        <div className="group">
          <Button className="item" text="Primary" type="primary" />
          <Button className="item" text="Default" />
          <Button className="item" text="Outline" outline />
          <Button className="item" text="Outline" outline type="primary" />
          <Button className="item" text="Link Button" />
          <Button className="item" text="Link" type="link" href="/home" />
          <Button
            className="item"
            text="Link"
            type="link"
            icon={<DownloadOutlined />}
            iconPosition="right"
          />
          <Button type="link" className="item">
            <Link to="/home">Home</Link>
          </Button>
        </div>

        <h3>Disabled buttons</h3>
        <div className="group">
          <Button className="item" text="Button" type="primary" disabled />
          <Button className="item" text="Button" type="outline" disabled />
          <Button className="item" text="Button" type="default" disabled />
          <Button className="item" text="Button" type="link" disabled />
        </div>

        <h3>Button with event</h3>
        <div className="group">
          <Button
            className="item"
            text="Submit"
            type="primary"
            htmlType="submit"
            disabled={buttonIsSubmitted}
            onClick={onButtonClick}
            icon={getIcon()}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default ButtonPage;
