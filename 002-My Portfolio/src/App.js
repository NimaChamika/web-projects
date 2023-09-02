import { useRef } from "react";

import About from "./pages/2-About/about";
import Skills from "./pages/3-Skills/skills";
import Projects from "./pages/4-Projects";
import Contact from "./pages/5-Contact/contact";
import Home from "./pages/1-Home/home";

function App() {
  const refElementObj = {
    aboutRefElement: null,
    skillsRefElement: null,
    projectsRefElement: null,
    contactRefElement: null,
  };

  const refElements = useRef(refElementObj);

  return (
    <>
      <Home refElements={refElements} />
      <About relElement={refElements} />
      <Skills relElement={refElements} />
      {/* <Projects relElement={refElements} /> */}
      <Contact relElement={refElements} />
    </>
  );
}

export default App;
