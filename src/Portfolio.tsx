import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function Portfolio() {
  return (
    <div className="bg-main bg-cover bg-no-repeat h-screen w-screen flex justify-start items-start">
      <div className="flex flex-col items-center justify-start lg:mt-60 mt-20 p-5 lg:ml-40 text-white">
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
