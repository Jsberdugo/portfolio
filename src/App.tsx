import Header from './components/Header';
import Home from './components/Home';
import Experiencia from './components/Experiencia';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { useCustomCursor } from './hooks/useCustomCursor';

export default function App() {
  useCustomCursor();

  return (
    <>
      <Header />
      <main>
        <Home />
        <Experiencia />
        <SobreMi />
        <Skills />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <div id="cursor" />
    </>
  );
}
