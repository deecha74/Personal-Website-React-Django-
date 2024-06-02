import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./src/Components/Mainpage/Layouts";
import Mainpage from "./src/Components/Mainpage/Mainpage";
import Errorpage from "./src/Components/ErrorPage/Errorpage";
import Contact from "./src/Components/Contact/Contact";
import Blog from "./src/Components/Blog/Blog";

const MyRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Mainpage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />

            <Route path="/*" element={<Errorpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
