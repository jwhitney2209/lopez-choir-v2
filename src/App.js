import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation.component";
import Home from "./pages/Home";
import Footer from "./components/footer.component";
import Recordings from "./pages/Recordings";
import Calendar from "./pages/Calendar";
import Info from "./pages/Info";
import Syllabus from "./pages/Syllabus";
import Allstate from "./pages/Allstate";
import Council from "./pages/Council";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="recordings" element={<Recordings />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="council" element={<Council />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="allstate" element={<Allstate />} />
            <Route path="info" element={<Info />} />
            <Route path="careers" element={<Careers />} />
          </Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
