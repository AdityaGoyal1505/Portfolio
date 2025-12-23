import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import "./Certificates.css"; // CSS variables in this file

const demoCerts = [
  {
    title: "HTML",
    issuer: "Udemy",
    date: "2024",
    logo: "/logo/html.svg",
  },
  {
    title: "CSS",
    issuer: "Udemy",
    date: "2024",
    logo: "/logo/css.svg",
  },
  {
    title: "JavaScript",
    issuer: "Udemy",
    date: "2024",
    logo: "/logo/js.svg",
  },
  {
    title: "Python",
    issuer: "Brainovision",
    date: "2024",
    logo: "/logo/python.svg",
  },
  {
    title: "JAVA",
    issuer: "NPTEL",
    date: "2024",
    logo: "/logo/java.svg",
  },
  {
    title: "SpringBoot",
    issuer: "Grras",
    date: "2024",
    logo: "/logo/spring.svg",
  },
  {
    title: "MySQL",
    issuer: "Grras",
    date: "2024",
    logo: "/logo/mysql.svg",
  },
  {
    title: "NodeJS",
    issuer: "Udemy",
    date: "2025",
    logo: "/logo/nodejs.svg",
  },
  {
    title: "ExpressJS",
    issuer: "Udemy",
    date: "2025",
    logo: "/logo/express.svg",
  },
  {
    title: "MongoDB",
    issuer: "Udemy",
    date: "2025",
    logo: "/logo/mongo.svg",
  },
  {
    title: "ReactJS",
    issuer: "Udemy",
    date: "2025",
    logo: "/logo/react.svg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" } }),
};

function CertCard({ cert, index }) {
  const { title, issuer, date, logo } = cert;
  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="cert-card"
    >
      <div className="cert-card-content">
        {/* {logo ? (
          <div className="cert-logo-wrapper">
            <img src={logo} alt={`${title} logo`} className="cert-logo" />
          </div>
        ) : (
          <div className="cert-logo-wrapper">
            <ShieldCheck className="cert-logo-icon" aria-hidden />
          </div>
        )} */}
        <div className="cert-logo-wrapper">
          <img src={logo} alt={`${title} logo`} className="cert-logo" />
        </div>
        <div className="cert-text">
          <h3 className="cert-title">{title}</h3>
          <p className="cert-issuer">{issuer}{date ? ` • ${date}` : null}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Certificates({ heading = "Certifications", subtitle = "A few credentials that support my work.", certs = demoCerts }) {
  return (
    <section id="certifications" className="cert-section">
      <div className="cert-header">
        <div>
          <h2 className="cert-heading">{heading}</h2>
          {/* {subtitle && <p className="cert-subtitle">{subtitle}</p>} */}
        </div>
      </div>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <CertCard key={`${c.title}-${i}`} cert={c} index={i} />
        ))}
      </div>
    </section>
  );
}
