import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/layout";
import { useStateValue } from "./util/StateProvider.jsx";
function Routing({ component: Component, rest }) {
  const [getdata] = useStateValue();

  return (
    <div>
      {getdata.isLoggedin ? (
        <Route
          {...rest}
          render={(routeProps) => (
            <Layout>
              <Component {...routeProps} />
            </Layout>
          )}
        />
      ) : (
        <Route
          {...rest}
          render={(routeProps) => <Component {...routeProps} />}
        />
      )}
    </div>
  );
}

export default Routing;
