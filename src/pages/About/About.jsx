/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Data Science & Machine Learning",
    description: "Building AI/ML models to deliver insights and automate decisions."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Web Development",
    description: "Crafting responsive web applications with modern tech stacks."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Automation & Optimization",
    description: "Streamlining workflows with Python scripting and automation."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Data Visualization",
    description: "Creating impactful dashboards with Tableau and Power BI for insights."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I'm a Software Engineer and Data Enthusiast from Pune, India, with a passion for AI/ML and web development. I enjoy solving complex problems by turning data into meaningful insights and creating technology solutions that work smoothly and efficiently.
      </p>

      <p>
        My work focuses on building smart applications and machine learning models that not only get the job done but also improve the way businesses operate. I love bringing together clean code and innovative ideas to make sure that the systems I create are both effective and user-friendly.
      </p>

      <p>
        Whether it’s automating processes or analyzing data for better decision-making, I aim to use technology to make a real-world impact. I’ve worked on a variety of projects, from web apps to AI solutions, and I’m always excited to take on new challenges that can make a difference.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


  </article>
  )
}

export default About