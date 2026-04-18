import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Store from "./pages/store";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </main>
  );
}

export default App;
