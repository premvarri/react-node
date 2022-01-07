import React, { useEffect } from "react";
import "./App.scss";
import RouteApp from "./Routing";
import { useStateValue } from "./util/StateProvider.jsx";
import { Switch, useHistory, useLocation } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Schedule from "./components/screens/schedule/Schedule";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function App() {
  let query = useQuery();

  const [, dispatch] = useStateValue();
  const [getdata] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    let token = query.get("token");

    if (token) {
      dispatch({
        type: "SETTOKEN",
        token: token,
      });
      dispatch({
        type: "SETLOGIN",
        isLoggedin: true,
      });
      history.push("/schedule");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      {getdata.isLoggedin && getdata.token ? (
        <Switch>
          <RouteApp path={"/schedule"} component={Schedule} />
          <RouteApp path={"/"} component={Home} />
        </Switch>
      ) : (
        <div>not found</div>
      )}
    </div>
  );
}

export default App;
