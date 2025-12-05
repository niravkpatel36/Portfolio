import React, { useRef, useEffect } from 'react'
import { projects as allProjects } from '../data/projects'
import FeaturedProject from './FeaturedProject'

export default function Hero(){
  const wrap = useRef()
  const card = useRef()

  useEffect(()=>{
    const wrapEl = wrap.current
    const cardEl = card.current
    if(!wrapEl || !cardEl) return

    const onMove = (e) => {
      const rect = wrapEl.getBoundingClientRect()
      const cx = rect.left + rect.width/2
      const cy = rect.top + rect.height/2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height

      // tilt
      const rx = dy * 10
      const ry = dx * -10
      cardEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`

      // subtle interior parallax
      const inner = cardEl.querySelector('.card-inner')
      if(inner) inner.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`
    }

    const onLeave = () => { 
      card.current.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`; 
      const inner = card.current.querySelector('.card-inner'); 
      if(inner) inner.style.transform = '' 
    }

    window.addEventListener('mousemove', onMove)
    wrapEl.addEventListener('mouseleave', onLeave)

    return ()=>{
      window.removeEventListener('mousemove', onMove)
      wrapEl.removeEventListener('mouseleave', onLeave)
    }
  },[])

  // pick pinned project (or fallback to first)
  const pinned = allProjects.find(p => p.pinned) || allProjects[0]

  return (
    <section className="min-h-[88vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="kicker">Software Engineer • Data & Frontend</div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
            I design resilient data systems and pixel-perfect UI that make product teams faster.
          </h1>

          <p className="subtle mt-4 max-w-xl">
            I’m an intern-ready engineer who ships production pipelines, realtime UX, and developer-first
            infrastructure. I focus on measurable impact and delightful product surfaces.
          </p>

          <div className="mt-6 flex gap-3 items-center">
            <a href="#projects" className="ribbon lift" aria-label="View projects">See case studies</a>
            <a href="/Nirav_Patel_Resume.pdf" className="glass px-4 py-2 rounded-md text-sm">Resume</a>
          </div>

          <div className="mt-6 flex gap-4 text-sm subtle">
            <div>Available: Toronto</div>
            <div>•</div>
            <div>Open to internships</div>
          </div>
        </div>

        {/* RIGHT SIDE — FEATURED PROJECT CARD */}
        <div ref={wrap} className="perspective-3d">
          <div 
            ref={card} 
            className="scene glass p-6 w-full max-w-[520px] mx-auto"
            style={{ borderRadius: 20 }}
          >
            <div className="card-inner" style={{ transition: 'transform 150ms linear' }}>
              <FeaturedProject 
                project={pinned} 
                onOpen={(proj)=>{
                  // placeholder open handler (App-level state can be wired later)
                  window.alert(`Open case study: ${proj.title}`)
                }} 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}




