import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import BackgroundDecor from './components/BackgroundDecor'
import './index.css'
import { projects } from './data/projects'

export default function App(){
  return (
    <>
      {/* noise texture */}
      <div className="site-noise" aria-hidden />

      <Nav />

      {/* background stars */}
      <BackgroundDecor />

      <main className="pt-24">
        <Hero />
        <Experience />
        <Projects />

        {/* keep your existing About + Contact if you still want them */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="subtle mt-4">(Add your one-paragraph about section here.)</p>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="subtle mt-2">
            Email: <a className="underline" href="mailto:niravkpatel36@gmail.com">niravkpatel36@gmail.com</a>
          </p>
        </section>

        <Footer />
      </main>
    </>
  )
}



