import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import "./style/main.scss";
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
      <Stepper startStep={{
        title: "First",
        content: "1. first step"
      }} midleStep={{
        title: "Midle",
        content: "2. second step"
      }} finishStep={{
        title: "Finish",
        content: "3. third step"
      }}/>
    </div>
  );
}

export default App;
