import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings! I'm <span className="purple">Prabakaran</span>, a passionate software developer with <span className="purple">3 years of professional experience</span> based in <span className="purple">Coimbatore, India</span>.
            <br />
            <br />
            Currently, I'm working as a Software Developer at <span className="purple">Hyperready Technologies</span>, where I focus on building scalable web applications and microservices. Throughout my career, I've developed expertise in full-stack development and delivered numerous successful projects.
            <br />
            <br />
            I hold a Master's degree in Computer Science from <span className="purple">St Joseph's College, Trichy</span>, where I developed a strong foundation in computer science principles and modern software development practices.
            <br />
            <br />
            Beyond coding, I maintain a healthy work-life balance through various activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning & Tech Exploration
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem-Solving & Strategic Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Cultural Exploration & Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to create innovative solutions that make a meaningful impact."{" "}
          </p>
          <footer className="blockquote-footer">Prabakaran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
