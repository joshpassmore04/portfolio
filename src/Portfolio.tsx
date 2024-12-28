import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/languages/Java";
import LanguagePageViewer from "./components/LanguagePageViewer";

function Portfolio() {
  return (
    <div className="bg-main bg-cover bg-no-repeat h-screen w-screen flex flex-col justify-between overflow-x-hidden">
      {/* Main Content */}
      <div className="flex flex-grow text-white lg:pt-60 pt-20 lg:pr-44 p-5 lg:pl-40 font-normal">
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
