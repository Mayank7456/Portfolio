import styles from "./Projects.module.css";
import { projects } from "../../data/ProjectData";

function Projects() {
    return (
        <>
            <section className={styles.projectSection} id="project" >
                <div className={styles.projectContainer} >
                    <div className={styles.projectHeader} >
                        <div className={styles.projectHeaderContent} >
                            <p>Projects</p>
                        </div>
                    </div>
                    {projects.map((project, index) => (
                        <div className={styles.projectCard} key={index} >
                            <div className={styles.projectContent} >
                                <div className={styles.aboutProject} >
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className={styles.projectLinks} >
                                        <div className={styles.githubButton} >
                                            <i className="fa-brands fa-github"></i>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" >GitHub</a>
                                        </div>
                                        <div className={styles.demoButton} >
                                            <i className="fa-regular fa-eye"></i>
                                            <a href={project.host} target="_blank" rel="noopener noreferrer" >Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.projectView} >
                                    <div className={styles.projectGif} >
                                        <div className={styles.projectViewer} >
                                            <img src={project.demo} alt="add-link" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <footer>
                <div >Developed by Mayank Singh</div>
                <div>
                    <a href="#project" >Scroll To Top <span>&#8673;</span></a>
                </div>
            </footer>
        </>
    )
}

export default Projects;