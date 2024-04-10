import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import "./style/main.scss";
import Chart from "./components/chart/Chart";
import Navbar from "./components/Navbar/NavBar";
import Stepper from "./components/Stepper/Stepper";

const GoToNavLink = [
  { Text: "Home", href: "/#" },
  { Text: "About oss", href: "/#" },
  { Text: "Contakt oss", href: "/#" },
  { Text: "Different services", href: "/#" },
  { Text: "Cooperate with oss", href: "/#" },
];

function App() {
  const [currentPage1, setPage1] = useState(1);
  function handlePageChange(value: number) {
    setPage1(value);
  }

  return (
    <div>
      <Navbar GoToNavLink={GoToNavLink} />
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
        }}
      />

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
