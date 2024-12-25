import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';
import Experience from './Experience';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="PES Modern college Of Engineering, Pune, India"
            date="2021 — Present"
            description="BE | Artificial Intelligence and Data Science | CGPA : 8.71"
          />
          <TimelineItem
            title="YCWM, Warananagar, Kolhapur"
            date="2019 — 2021"
            description=" Higher Secondary Certificate (MSBSHSE) | Science | Percentage : 96.67% "
          />
          <TimelineItem
            title="Modern High School, Sakharale"
            date="2013 — 2019"
            description="Secondary School Certificate (MSBSHSE) | Percentage : 92.00%"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
       
          <Experience />
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
          <SkillItem title="Web design" />
      </div>
    </section>
  );
};

export default Resume;
