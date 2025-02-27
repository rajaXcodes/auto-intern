import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeroPage from "./components/heroPage";
import Main from "./components/main";
import FinalPage from "./components/SuccessPage";
import NotFound from "./components/notFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
