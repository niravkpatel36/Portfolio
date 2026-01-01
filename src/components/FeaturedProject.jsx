// src/components/FeaturedProject.jsx
import React from "react"
import { motion } from "framer-motion"

function Metric({ label, value }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: 10,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(4px)",
        fontSize: 13,
        lineHeight: "1.25",
        minWidth: 90,
      }}
    >
      <div style={{ opacity: 0.7, fontSize: 12, letterSpacing: 0.3 }}>
        {label}
      </div>
      <div style={{ fontSize: 17, fontWeight: 800 }}>{value}</div>
    </div>
  )
}

export default function FeaturedProject({ project, onOpen }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.9, 0.2, 1] }}
      className="fp-static-card"
    >
      <div className="fp-static-bg" aria-hidden="true" />

      <div className="fp-content">
        <div className="fp-row">
          <div className="fp-text">
            <div className="fp-kicker">CURRENTLY WORKING ON</div>
            <div className="fp-title">{project.title}</div>
            <div className="fp-desc">{project.short}</div>
          </div>

          <div className="fp-thumb">
            <img
              src={project.images?.[0] || "/assets/placeholder.jpg"}
              alt=""
            />
          </div>
        </div>

        <div className="fp-bottom">
          {project.metrics?.throughput && (
            <Metric
              label="Throughput"
              value={project.metrics.throughput}
            />
          )}
          {project.metrics?.latencyReduction && (
            <Metric
              label="Latency"
              value={project.metrics.latencyReduction}
            />
          )}

          <button
            onClick={() => onOpen(project)}
            className="cta-primary"
            style={{ marginLeft: "auto" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  )
}


