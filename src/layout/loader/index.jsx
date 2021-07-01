import React, { Fragment, useState, useEffect } from "react";

const Loader = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <Fragment>
      <div className={`loader-wrapper ${show ? "" : "loderhide"}`}>
        <div className="loader-index">
          <div class="loadingio-spinner-ripple-dodlehb16zl">
            <div class="ldio-d26xmetc72f">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
