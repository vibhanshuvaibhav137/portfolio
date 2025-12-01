import React, { useState } from "react";
import "./Portfolio.css";

import { HiOutlineExternalLink } from "react-icons/hi";

import proj1 from "../../assets/project1.png";
import proj2 from "../../assets/project2.png";
import proj3 from "../../assets/project3.png";
import proj4 from "../../assets/project4.png";
import proj5 from "../../assets/project5.png";



const Portfolio = () => {
  const [bookmarked, setBookmarked] = useState([]);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div>
      <section id="web-portfolio">
        <h5>My Recent Work</h5>
        <h2>Web Development Portfolio</h2>

        <div className="container web_portfolio__container">
          {/* Project 5 */}
          <div className="project">
            <img src={proj1} alt="Project 1" className="proj-image" />
            <div className="proj-content">
              <h2>TypingTest Pro</h2>
              <p>
                <b>
                  <span className="tech-stack">
                    Tech Stack: React.js, Node.js, Express.js, MongoDB, Axios,
                    JWT, Vercel {" "}
                  </span>
                </b>
                <br /> <br />• Designing and developing a scalable full-stack typing 
                assessment platform using the MERN stack, offering real-time WPM tracking, 
                secure JWT authentication, and personalized performance 
                dashboards. <br />• Implemented a high-performance, responsive UI 
                using React 19 and Tailwind CSS, incorporating Mongoose Aggregate 
                Paginate v2 and Express.js 5 to efficiently manage user statistics and history.
              </p>
              <a
                href="https://typing-test-app-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <HiOutlineExternalLink /> View Project
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project">
            <img src={proj4} alt="Project 1" className="proj-image" />
            <div className="proj-content">
              <h2>Ball Runner</h2>
              <p>
                <b>
                  <span className="tech-stack">
                    Tech Stack: React.js, Node.js, Express.js, MongoDB, Vercel, Render
                  </span>
                </b>{" "}
                <br /> <br />• Architected and developed "Ball Runner," a scalable, 
                offline-first endless runner game using React 19, Node.js, and MongoDB, 
                featuring optimized state management with Zustand and a responsive, 
                modular frontend design. <br />• Engineered a frictionless user experience 
                by implementing anonymous authentication via browser fingerprinting and 
                secure JWTs, ensuring seamless data persistence and automatic score 
                synchronization across offline and online sessions.
              </p>
              <a
                href="https://ball-runner-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <HiOutlineExternalLink /> View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project">
            <img src={proj5} alt="Project 2" className="proj-image" />
            <div className="proj-content">
              <h2>EM Portal</h2>
              <p>
                <b>
                  <span className="tech-stack">
                    Tech Stack: React 19, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS, Vite, Chart.js, JWT, HeadlessUI, Vercel{" "}
                  </span>
                </b>
                <br /> <br />• Engineered a real-time collaborative workspace that streamlines 
                task assignment and progress monitoring, featuring instant bi-directional 
                notifications to keep stakeholders synchronized on project status and reviews. 
                <br />• Developed a comprehensive performance analytics dashboard to visualize 
                employee productivity trends and task completion rates, establishing secure data 
                protocols to protect organizational resources and manage user access.
                <br />• Username: "test@admin.com", Password: "1234567890"
              </p>
              <a
                href="https://employee-management-portal-emp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <HiOutlineExternalLink /> View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project">
            <img src={proj3} alt="Project 3" className="proj-image" />
            <div className="proj-content">
              <h2>DaanSetu</h2>
              <p>
                <b>
                  <span className="tech-stack">
                    Tech Stack: React.js, CSS, JavaScript, Vite, Tailwind CSS,
                    Firebase, Vercel
                  </span>
                </b>{" "}
                <br /> <br />• Pioneered "DaanSetu," a cloud-based donation management 
                platform using the MERN stack, connecting NGOs directly with donors for 
                real-time material assistance. <br />• Engineered a responsive UI with React.js, 
                Vite, and Tailwind CSS to enable real-time broadcasting of NGO requests, streamlining 
                the donation process and fostering direct user engagement.
              </p>
              <a
                href="https://daan-setu-vibhanshu-vaibhavs-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <HiOutlineExternalLink /> View Project
              </a>
            </div>
          </div>

          {/* Project 1 */}
          <div className="project">
            <img src={proj2} alt="Project 2" className="proj-image" />
            <div className="proj-content">
              <h2>Portfolio Website</h2>
              <p>
                <b>
                  <span className="tech-stack">
                    Tech Stack: React.js, CSS, JavaScript, Vite, EmailJS, Vercel{" "}
                  </span>
                </b>
                <br /><br />
                • A personal portfolio website built using React.js, focused on
                clean UI/UX design, with media queries implemented for full
                support across mobile, tablet, and desktop devices. <br />•
                Integrated EmailJS for direct mail functionality, enabling
                seamless contact through the site.
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <HiOutlineExternalLink /> View Project
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Portfolio;
