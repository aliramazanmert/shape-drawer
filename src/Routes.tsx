import { Route, Routes } from "react-router-dom";
import Drawing from "./pages/Drawing";
import Download from "./pages/Download";
import Context from "./context";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Drawing />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}

export default AppRoutes;
