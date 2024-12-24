import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function Portfolio() {
  return (
    <div className="bg-main bg-cover bg-no-repeat h-screen w-screen justify-start items-start overflow-x-hidden">
      <div className=" text-white">
        <HashRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default Portfolio;
