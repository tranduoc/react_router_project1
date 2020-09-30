import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DieuHuongURL from "../routers/DieuHuongURL";

import "./../css/App.css";
// import Contact from "./Contact";
import Footer from "./Footer";
// import Home from "./Home";

// import Home from "./Home";

import Nav from "./Nav";
// import News from "./News";
// import NewsDetail from "./NewsDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <DieuHuongURL />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
