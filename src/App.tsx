import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import "./style/main.scss";
import Chart from "./components/chart/Chart";
import Stepper from "./components/Stepper/Stepper";

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
          colors: [
            "#C39DDA",
            "#E1941C",
            "#49E11C",
            "#C39DDA",
            "#E1941C",
            "#1CE1CF",
            "#49E11C",
          ],
          backgroundColor: "#DEF5F3",
        }}
      ></Chart>

      <Chart
        labels={["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"]}
        dataset={{
          data: [5, 2, 3, 8, 1, 9, 7],
          colors: [],
          backgroundColor: "",
        }}
      ></Chart>

      <Stepper
        startStep={{
          title: "First",
          content: "1. first step",
        }}
        midleStep={{
          title: "Midle",
          content: "2. second step",
        }}
        finishStep={{
          title: "Finish",
          content: "3. third step",
        }}
      />
    </div>
  );
}

export default App;
