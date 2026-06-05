import { motion } from "framer-motion";

const researchData = [
{
institute: "IIT Kharagpur",
role: "Summer Research Intern",
duration: "May 2026 – Present",
description:
"Researching linear algebra, optimization, matrix manifolds, and scientific computing under Prof. Swanand Khare.",
},
{
institute: "IIT Kanpur",
role: "Research Intern",
duration: "May 2025 – July 2025",
description:
"Optimized PLA chemical recycling processes through catalyst and solvent analysis using IR and NMR characterization.",
},
{
institute: "IIT Patna",
role: "Research Intern",
duration: "Dec 2024 – Jan 2025",
description:
"Performed synthesis, UV-Vis spectroscopy, fluorescence characterization, and experimental data analysis.",
},
{
institute: "IISER Mohali",
role: "Research Intern",
duration: "May 2024 – July 2024",
description:
"Worked on functional polymeric materials, N-carboxyanhydride synthesis, and materials characterization.",
},
];

function Research() {
return ( <section className="research-section" id="research">
<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
> <p className="section-tag">RESEARCH EXPERIENCE</p>

```
    <h2 className="section-title">
      Research across mathematics,
      scientific computing,
      chemistry and materials science.
    </h2>

    <div className="research-grid">
      {researchData.map((item, index) => (
        <motion.div
          className="research-card"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <h3>{item.institute}</h3>

          <h4>{item.role}</h4>

          <span>{item.duration}</span>

          <p>{item.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

);
}

export default Research;
