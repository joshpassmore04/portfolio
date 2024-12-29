import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/languages/Java";
import LanguagePageViewer from "./components/LanguagePageViewer";

function Portfolio() {
  return (
    <div className="bg-main bg-cover h-screen w-screen flex justify-between">
      {/* Main Content */}
      <div className="flex text-white w-full h-full lg:pt-20 pt-10 pb-5 p-5 lg:pr-44 lg:pl-40 font-normal">
          <HashRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<Home />} />
                <Route path="java" element={<LanguagePageViewer language={Java} />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>

    </div>
  );
}

export default Portfolio;
