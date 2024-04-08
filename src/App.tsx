import { useState } from "react";
import Pagination from "./components/pagination/Pagination";
import "./style/main.scss";

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
    </div>
  );
}

export default App;
