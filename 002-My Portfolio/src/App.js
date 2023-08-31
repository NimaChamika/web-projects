import { useRef } from "react";
import Home from "./pages/1-Home";
import About from "./pages/2-About";

function App() {
  const aboutefElement = useRef(null);
  const experienceRefElement = useRef(null);
  const projectsRefElement = useRef(null);
  const contactmyRefElement = useRef(null);

  return (
    <>
      <Home aboutRefElement={aboutefElement} />
      <About relElement={aboutefElement} />
    </>
  );
}

export default App;
