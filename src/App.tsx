import { useState } from "react";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [currentPage1, setPage1] = useState(1);
  function handlePageChange(value: number) {
    setPage1(value);
  }

  const [currentPage2, setPage2] = useState(1);
  function handlePageChange2(value: number) {
    setPage2(value);
  }
  return (
    <>
      <Pagination
        currentPage={currentPage1}
        count={10}
        onChange={handlePageChange}
        variant="rounded"
        color="primary"
      />
      <Pagination
        currentPage={currentPage2}
        count={25}
        onChange={handlePageChange2}
        variant="outlined"
        color="secondary"
      />
    </>
  );
}

export default App;
