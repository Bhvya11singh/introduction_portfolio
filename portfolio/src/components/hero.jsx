import { motion } from "framer-motion";

function Hero() {

  return (

    <section className="hero" id="home">

      {/* LEFT SIDE */}

      <motion.div
        className="hero-text"

        initial={{ opacity:0, y:100 }}

        animate={{ opacity:1, y:0 }}

        transition={{
          duration:1.4,
          ease:[0.22,1,0.36,1]
        }}
      >

        <p className="hero-tag">
          Mathematics • Optimization • Scientific Computing
        </p>

        <h1>
          Turning abstract ideas into
          <span> meaningful solutions.</span>
        </h1>

        <p className="hero-description">

          Mathematics student at IISER Mohali
          exploring linear algebra,
          optimization,
          scientific computing,
          and interdisciplinary research.

        </p>

        <div className="hero-buttons">

          <a href="#research">
            Explore Research
          </a>

          <a href="#contact" className="outline-btn">
            Contact Me
          </a>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="hero-image"

        initial={{ opacity:0, scale:0.8 }}

        animate={{
          opacity:1,
          scale:1,
          y:[0,-15,0]
        }}

        transition={{
          opacity:{ duration:1.2 },

          scale:{ duration:1.2 },

          y:{
            duration:4,
            repeat:Infinity,
            ease:"easeInOut"
          }
        }}
      >

        <img src="/bhavya.jpg" alt="Bhavya Singh" />

      </motion.div>

    </section>
  );
}

export default Hero;