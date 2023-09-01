import { useRef } from "react";
import Home from "./pages/1-Home";
import About from "./pages/2-About";
import Experience from "./pages/3-Experience";
import Projects from "./pages/4-Projects";
import Contact from "./pages/5-Contact";

function App() {
  const refElementObj = {
    aboutRefElement: null,
    experienceRefElement: null,
    projectsRefElement: null,
    contactRefElement: null,
  };

  const refElements = useRef(refElementObj);

  return (
    <>
      <Home refElements={refElements} />
      <About relElement={refElements} />
      <Experience relElement={refElements} />
      <Projects relElement={refElements} />
      <Contact relElement={refElements} />
    </>
  );
}

export default App;
