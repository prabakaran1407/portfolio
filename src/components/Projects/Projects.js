import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FASO from "../../Assets/Projects/FASO-NEW-LOGO-03-02-1-1400x787.jpg";
import NearbI from "../../Assets/Projects/Nearbi.svg";
import Gold from "../../Assets/Projects/gold.png";
import StaticSite from "../../Assets/Projects/StaticSite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NearbI}
              isBlog={false}
              title="CRM System [Nearbi]"
              description="123333 Developed a high-performance CRM using React.js, Next.js, Nest.js, and PostgreSQL. Implemented reusable UI components with Shadcn, integrated Exotal for call tracking, and added location-based features using Google Maps API. Utilized Docker for containerization and configured CI/CD pipelines for automated deployment."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FASO}
              isBlog={false}
              title="ERP & CRM [FASO, FIRM, SALES10x]"
              description="Built a full-stack application using React with TypeScript and MUI library. Developed robust APIs using Node.js, Express.js, and Sails.js. Implemented MongoDB for data management, deployed on AWS EC2 with NGINX, and integrated QR code scanning for improved stock tracking."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StaticSite}
              isBlog={false}
              title="Business Card & Hall Booking Management [FICCI]"
              description="Created a web application using React (Vite) with TypeScript and Shadcn UI. Implemented PostgreSQL with Prisma ORM for efficient data handling. Features include user self-registration, QR code generation, and analytics dashboards. Built secure APIs using NestJS framework."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gold}
              isBlog={false}
              title="Enterprise Resource Planning [GOLD'S]"
              description="Developed a full-stack ERP system using React (Vite), TypeScript, and Shadcn UI. Integrated Redux Toolkit for state management. Built secure APIs with NestJS and PostgreSQL, using Prisma ORM. Deployed on AWS EC2 with NGINX and implemented CI/CD pipelines."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
