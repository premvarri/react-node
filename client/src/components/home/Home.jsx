import React from "react";
import { useStateValue } from "../../util/StateProvider";

function Home() {
  const [getdata] = useStateValue();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/v1")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <Child token={getdata.token} data={data} />
    </div>
  );
}
function Child({ token, data }) {
  return (
    <div>
      {token ? (
        <h3>
          The <code>Token</code> in the query string is &quot;{" "}
          <code>{token}</code>
          &quot; and data is {data}
        </h3>
      ) : (
        <h3>
          No user token found to get token send
          <code>url/home?token='value'</code>
        </h3>
      )}
    </div>
  );
}
export default Home;
