import { BrowserRouter } from "react-router-dom";
import Context from "./context";
import AppRoutes from "./Routes";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Context>
  );
}

export default App;
