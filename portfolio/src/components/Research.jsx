import { motion } from "framer-motion";

function Research() {

  return (

    <motion.section
      className="research-section"
      id="research"

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}
    >

      <p className="section-tag">
        RESEARCH EXPERIENCE
      </p>

      <h2 className="section-title">
        Academic research
        and interdisciplinary projects.
      </h2>

      <div className="research-grid">

        <div className="research-card">

          <span>2025</span>

          <h3>
            IIT Kanpur
          </h3>

          <p>
            Research Intern working on
            sustainable polymer synthesis
            and transesterification-based recycling.
          </p>

        </div>

        <div className="research-card">

          <span>2024</span>

          <h3>
            IIT Patna
          </h3>

          <p>
            Worked on synthesis of
            Cyclotriveratrylene (CTV)
            and spectroscopy analysis.
          </p>

        </div>

        <div className="research-card">

          <span>2024</span>

          <h3>
            IISER Mohali
          </h3>

          <p>
            Polymer chemistry research involving
            NCA synthesis and protection-deprotection reactions.
          </p>

        </div>

      </div>

    </motion.section>
  );
}

export default Research;