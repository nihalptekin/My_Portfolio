import React from 'react'
import "./projects.css"
import Projects from './Projects'

const Title = () => {
    return (
        <section className="work section " id='portfolio'>
            <h2 className="section_title d-flex justify-content-center">My Projects</h2>
            <span className="section_subtitle d-flex justify-content-center">Most recent works</span>
            <Projects/>
        </section>
      )
    }

export default Title