import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Homepage } from "./pages/homepage";

function App() {
  return (
    <div className="bg-white m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const NotFound = () => {
  return (
    <div className="flex flex-col gap-0 w-full align-center justify-center">
      <div className="mt-0 text-center">
        <h3 className=" text-6xl font-bold ">404</h3>
        <p className=" text-xl">Page not found!</p>
      </div>
    </div>
  );
};
