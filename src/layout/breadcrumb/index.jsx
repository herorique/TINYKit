import React, { Fragment } from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Home } from "react-feather";
import { Link } from "react-router-dom";
import { translate } from "react-switch-lang";

const Breadcrumbs = (props) => {
  const { t } = props;
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="6">
              <h3>{t(props.title)}</h3>
            </Col>
            <Col xs="6">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                    <Home />
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>{t(props.parent)}</BreadcrumbItem>
                <BreadcrumbItem active>{t(props.title)}</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default translate(Breadcrumbs);
