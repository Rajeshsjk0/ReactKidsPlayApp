import {
  BrowserRouter as Router,
  Routes,
  Route,
  /* useLocation, */
} from "react-router-dom";

import Start from "./pages/start/Start";
import AfterIntro from "./pages/afterIntro/AfterIntro";
import Dog from "./pages/dog/Dog";
import Intro from "./pages/intro/Intro";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/AfterIntro" element={<AfterIntro />} />
        <Route path="/Dog" element={<Dog />} />
      </Routes>
    </Router>
  );
}

export default App;
