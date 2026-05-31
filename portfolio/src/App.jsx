import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";

function App() {

  return (

    <div className="app">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}

      <motion.section
        className="about-section"
        id="about"

        initial={{ opacity: 0, y: 80 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >

        <div className="about-left">

          <p className="section-tag">
            ABOUT ME
          </p>

          <h2>
            Mathematics,
            research,
            and scientific thinking.
          </h2>

        </div>

        <div className="about-right">

          <p>
            I am a mathematics student at IISER Mohali
            with strong interests in linear algebra,
            optimization,
            scientific computing,
            and interdisciplinary research.
          </p>

          <p>
            My work combines mathematical reasoning
            with experimental sciences,
            computational analysis,
            and data-driven approaches
            to real-world scientific problems.
          </p>

        </div>

      </motion.section>

      {/* RESEARCH */}
      <Research />

      {/* PROJECTS */}

      <motion.section
        className="projects-section"
        id="projects"

        initial={{ opacity: 0, y: 80 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >

        <p className="section-tag">
          SELECTED PROJECTS
        </p>

        <h2 className="section-title">
          Research-driven
          academic projects.
        </h2>

        <div className="project-layout">

          <div className="project-large">

            <div className="overlay"></div>

            <div className="project-content">

              <span>
                Optimization • Polymer Research
              </span>

              <h3>
                Linear Polymer Synthesis
                from Waste-derived PLA
              </h3>

            </div>

          </div>

          <div className="project-small-grid">

            <div className="small-project">

              <h3>
                Mathematical Patterns
                in Real Data
              </h3>

              <p>
                Statistical analysis and visualization
                using Python.
              </p>

            </div>

            <div className="small-project">

              <h3>
                Cyclotriveratrylene
                Synthesis
              </h3>

              <p>
                Organic synthesis and spectroscopy-based
                structural validation.
              </p>

            </div>

          </div>

        </div>

      </motion.section>

      {/* CONTACT */}

      <motion.section
        className="contact-section"
        id="contact"

        initial={{ opacity: 0, y: 80 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >

        <p className="section-tag">
          CONTACT
        </p>

        <h2>
          Let’s create meaningful work together.
        </h2>

        <div className="contact-grid">

          <a href="mailto:bhavyasssiii@gmail.com">
            bhavyasssiii@gmail.com
          </a>

          <a href="https://linkedin.com">
            LinkedIn
          </a>

          <a href="https://github.com">
            GitHub
          </a>

        </div>

      </motion.section>

    </div>

  );
}

export default App;