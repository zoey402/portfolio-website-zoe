import React, { useState } from 'react';
import './Projects.css';
import CraftcoveImage from './assets/images/craftcove.jpg';
import PortfolioImage from './assets/images/portfolio.jpg';
import LeetcodeImage from './assets/images/leetcode.jpg';
import githubIcon from './assets/images/icons8-github-48.png';


function Projects () {

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];
  const [currentFilter, setCurrentFilter] = useState('All');

  const projectData = [
    {
      name: 'CraftCove: Online Shopping Platform',
      date: 'Nov 2023 - Now',
      update: 'Last updated: Dec 2023',
      description: [
        'I developed a secure and efficient Spring Boot-based backend with RESTful APIs for a trading platform, complemented by MySQL database to handle user and transaction data.',
        'Technologies Used: JavaScript, HTML, CSS, Java, SpringBoot, MySQL.'
      ],
      type: 'Full Stack',
      image: CraftcoveImage,
      link: 'https://github.com/zoey402/craftcove'
    },
    {
      name: "Zoe's Portfolio",
      date: 'Sep 2023 - Now',
      update: 'Last updated: Nov 2023',
      description: [
        'It is a dynamic Single Page Application (SPA) designed to showcase my journey and accomplishments in the world of software development.',
        'Technologies Used: React, HTML, CSS, Github Pages.'
      ],
      type: 'Frontend',
      image: PortfolioImage,
      link: 'https://github.com/zoey402/portfolio-website-zoe'
    },
    {
      name: 'Leetcode Notes',
      date: 'Sep 2023 - Now',
      update: 'Last updated: Nov 2023',
      description: [
        'Leetcode Notes is a GitHub repository where I meticulously curate and share my solutions to various Leetcode algorithm questions, organized categorically for ease of reference and learning.',
        'Technologies Used: Java, Python.'
      ],
      type: 'Backend',
      image: LeetcodeImage,
      link: 'https://github.com/zoey402/leetcode-notes'
    }
  ];

  const filteredProjects = projectData.filter(project => {
    if (currentFilter === 'All') return true;
    return project.type === currentFilter;
  });


  return (

    <main id='main-content'>
      <section className="projects section" id="projects">
        <div className="projects__container">
          <div className="projects__titles">
            <h2 className="projects__title">My Recent Work</h2>
            <span className="projects__subtitle">Here are a few projects I've worked on recently. Want to see more? Email me.</span>
          </div>
          <div className="filters">
            <span className="filters__title">Filter by:</span>
              <ul className="filters__list">
                {['All', 'Frontend', 'Backend', 'Full Stack'].map(filter => (
                  <li 
                    key={filter} 
                    className={`filters__item ${currentFilter === filter ? 'active' : ''}`}
                    onClick={() => setCurrentFilter(filter)}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            </div>
          <div className="projects__content">
            {filteredProjects.map((project, index) => (
              <div className="project__item"
                key={index}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <h3 className="project__item-name">{project.name}</h3>
                <div className="project__item-details">
                  <span className="project__item-date">{project.date}</span>
                  <span className="project__item-update">{project.update}</span>
                  <div className="divider"></div>
                  <ul className="project__item-description">
                    {project.description.map((desc, descIndex)  => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                  <button className='btn github__link'>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="A github icon" className="btn__icon" />
                      Go to GitHub</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>

  );
}

export default Projects;