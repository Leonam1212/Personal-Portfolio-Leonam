import { About } from "../components/About";
import { Navigation } from "../components/Navigation";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export function Portfolio() {
  return (
    <div>
      <Navigation />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer>
        <Contact />
      </footer>
    </div>
  );
}
