import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/languages/Java";
import LanguagePageViewer from "./components/LanguagePageViewer";
import Python from "./pages/languages/Python";
import Kotlin from "./pages/languages/Kotlin";
import CPP from "./pages/languages/CPP";

function Portfolio() {
  return (
    <div className="bg-main bg-cover h-screen w-screen flex">
      {/* Main Content */}
      <div className="flex text-white w-full h-full pt-10 p-5 lg:pr-44 lg:pl-40 font-normal">
          <HashRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<Home />} />
                <Route path="java" element={<LanguagePageViewer language={Java} />} />
                <Route path="python" element={<LanguagePageViewer language={Python} />} />
                <Route path="kotlin" element={<LanguagePageViewer language={Kotlin} />} />
                <Route path="cpp" element={<LanguagePageViewer language={CPP} />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>

    </div>
  );
}

export default Portfolio;
