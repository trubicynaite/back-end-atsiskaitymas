import { Routes, Route } from "react-router";

import MainOutlet from "./components/outlets/MainOutlet";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SpecificBookPage from "./pages/SpecificBookPage";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainOutlet />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<SpecificBookPage />} />
      </Route>
    </Routes>
  );
};

export default App;
