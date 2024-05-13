import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Home, Courses, About, Team, Blog, Contact } from "./pages/index.js";
import Page from "./pages/Page/Page.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path="/">
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/image/:id" element={<Page />} />
        </Route>
      </Routes>
    </Router>
  );    
};

export default App;
