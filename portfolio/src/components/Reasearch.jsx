import { motion } from "framer-motion";

function Research() {

  const researchData = [

    {
      title: "IIT Kanpur",
      role: "Research Intern",
      duration: "May 2025 – July 2025",

      description:
      "Worked on transesterification-based chemical recycling of waste-derived PLA and synthesis of sustainable polymer network monomers.",

      tags: ["Optimization", "Polymer Chemistry", "NMR", "IR"]
    },

    {
      title: "IIT Patna",
      role: "Research Intern",
      duration: "Dec 2024 – Jan 2025",

      description:
      "Led multi-step synthesis of cyclotriveratrylene and performed UV–Vis and fluorescence spectroscopy analysis.",

      tags: ["Organic Synthesis", "Spectroscopy", "ChemDraw"]
    },

    {
      title: "IISER Mohali",
      role: "Research Intern",
      duration: "May 2024 – July 2024",

      description:
      "Conducted polymer chemistry research involving NCAs, protection strategies, and functional polymeric materials.",

      tags: ["Polymer Research", "BOC/F-MOC", "NCAs"]
    }

  ];

  return (

    <section className="research-section" id="research">

      <motion.div

         initial={{
  opacity:0,
  y:80,
  scale:0.92
}}

        whileInView={{
  opacity:1,
  y:0,
  scale:1
}}
        transition={{ duration:0.8 }}

        viewport={{ once:true }}

      >

        <p className="section-tag">
          RESEARCH EXPERIENCE
        </p>

        <h2 className="section-title">
          Building knowledge through
          interdisciplinary research.
        </h2>

      </motion.div>

      <div className="research-grid">

        {researchData.map((item, index) => (

          <motion.div

            className="research-card"

            key={index}

            initial={{ opacity:0, y:60 }}

            whileInView={{ opacity:1, y:0 }}

            transition={{ duration:0.7, delay:index * 0.2 }}

            viewport={{ once:true }}

          >

            <div className="research-top">

              <div>

                <h3>{item.title}</h3>

                <p className="role">
                  {item.role}
                </p>

              </div>

              <span>
                {item.duration}
              </span>

            </div>

            <p className="research-description">
              {item.description}
            </p>

            <div className="tags">

              {item.tags.map((tag, i) => (

                <span key={i}>
                  {tag}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Research;