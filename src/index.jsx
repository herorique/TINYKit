import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { firebase_app, auth0 } from "./data/config";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/app";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./route";
import ConfigDB from "./data/customizer/config";
import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import HomePage from "./pages/home";

import { isAuthenticated } from "./auth/authenticationService";
import setupAxiosInterceptors from "./config/axios-interceptor";

// setup fake backend
setupAxiosInterceptors();

const Root = (props) => {
  const [anim, setAnim] = useState("");
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const abortController = new AbortController();

  useEffect(() => {
    setAnim(animation);
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;

    return function cleanup() {
      abortController.abort();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter basename={`/`}>
          <Switch>
            <ConfigProvider locale={viVN}>
              <App>
                <TransitionGroup>
                  {routes.map(
                    ({ privateRoute, privateTemplate, path, Component }) => (
                      <Route
                        key={path}
                        exact
                        path={`${process.env.PUBLIC_URL}${path}`}
                      >
                        {({ match }) =>
                          match && !isAuthenticated() && privateRoute ? (
                            <Redirect
                              to={{
                                pathname: `${process.env.PUBLIC_URL}/login`,
                                state: { from: match.url },
                              }}
                            />
                          ) : (
                            <CSSTransition
                              in={match != null}
                              timeout={100}
                              classNames={anim}
                              unmountOnExit
                            >
                              <div>
                                <Component
                                  match={match}
                                  privateTemplate={privateTemplate}
                                />
                              </div>
                            </CSSTransition>
                          )
                        }
                      </Route>
                    )
                  )}
                </TransitionGroup>
              </App>
            </ConfigProvider>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
