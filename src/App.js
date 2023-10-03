import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Title from "./components/Project/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Title/>

      {/* <Qualification/> */}
    </div>
  );
}

export default App;
