import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import "./style/main.scss";
import Chart from "./components/chart/Chart";

function App() {
  const [currentPage1, setPage1] = useState(1);
  function handlePageChange(value: number) {
    setPage1(value);
  }

  return (
    <div>
      <Pagination
        currentPage={currentPage1}
        count={10}
        onChange={handlePageChange}
        variant="rounded"
        color="secondary"
      />
      <Pagination
        currentPage={currentPage1}
        count={10}
        onChange={handlePageChange}
        variant="square"
        color="primary"
      />
      <Chart
        labels={["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"]}
        dataset={{
          data: [5, 2, 3, 8, 1, 9, 7],
          colors: [],
          backgroundColor: "",
          type: "horisontal",
        }}
      ></Chart>
    </div>
  );
}

export default App;
