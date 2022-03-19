import Table from "./components/Table";
import "./app.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const search = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) search();
  }, [query]);

  return (
    <div className="container">
      <div className="row">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          style={{ maxWidth: "300px", margin: "30px 0" }}
        />
        <Table data={data} />
      </div>
    </div>
  );
};

export default App;
