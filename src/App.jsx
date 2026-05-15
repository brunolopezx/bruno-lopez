import { useState, useEffect } from "react";
import Hero from "./sections/hero";
import Ticker from "./sections/ticker";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Services from "./sections/services";
import BudgetModal from "./sections/budgetModal";
import Contact from "./sections/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CustomCursor from "./components/customCursor";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const abrirModal = (servicio) => {
    setServicioSeleccionado(servicio);
    setModalOpen(true);
  };

  return (
    <div>
      {!isTouchDevice && <CustomCursor />}
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Skills />
      <Services onConsultar={abrirModal} />
      {modalOpen && (
        <BudgetModal
          servicio={servicioSeleccionado}
          onClose={() => setModalOpen(false)}
        />
      )}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
