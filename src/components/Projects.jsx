// src/components/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects as initialProjects } from '../data/projects'
import ProjectModal from './ProjectModal'

const container = { hidden:{}, visible:{ transition: { staggerChildren: 0.06 } } }
const item = { hidden:{ opacity:0, y:10 }, visible:{ opacity:1, y:0, transition:{ duration:0.42 } } }

export default function Projects(){
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Selected projects</h2>
          <p className="subtle mt-1">Grid-based case studies with interactive previews.</p>
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialProjects.map((p)=>(
          <motion.article key={p.id} variants={item} className="project-card group" role="article" aria-labelledby={`title-${p.id}`}>
            <div className="project-media" aria-hidden>
              <img src={p.images?.[0] || '/assets/placeholder.jpg'} alt="" className="project-thumb" loading="lazy" />
              <div className="project-overlay" />
            </div>

            <div className="project-body">
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:10 }}>
                <div>
                  <h3 id={`title-${p.id}`} className="font-semibold">{p.title}</h3>
                  <div className="subtle text-sm mt-1">{p.stack}</div>
                </div>

                <div>
                  <div className="kicker" style={{ opacity: .9 }}>Internship</div>
                </div>
              </div>

              <p className="subtle mt-3 project-excerpt">{p.short}</p>

              <div className="project-actions" aria-hidden>
                <div className="project-details">
                  <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                    {p.highlights?.map(h=> <span key={h} className="chip" style={{ padding:'6px 10px', fontSize:13 }}>{h}</span>)}
                  </div>

                  <div style={{ marginTop:10, display:'flex', gap:8, alignItems:'center' }}>
                    <button onClick={()=>setOpen(p)} className="cta-outline">View case study</button>
                    <div className="subtle">2–6 week sprints</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {open && <ProjectModal project={open} onClose={()=>setOpen(null)} />}
    </section>
  )
}



