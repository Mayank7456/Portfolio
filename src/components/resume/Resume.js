import styles from "./Resume.module.css";
import resumePdf from "../../assets/resume..pdf";
import resumePng from "../../assets/Resume.png";

function Resume() {
    return (
        <section className={styles.resumeSection} >
            <div className={styles.resumeContainerD} >
                <div className={styles.resume} >
                    <embed src={resumePdf} type="application/pdf" />
                </div>
            </div>
            <div className={styles.resumeContainerM} >
                <img src={resumePng} />
                <div className={styles.downloadButton}  >
                    <a className={styles.downloadButton} href={resumePdf} download="Resume-Mayank.pdf" rel="noopener noreferrer" >
                        <i className="fa-solid fa-download"></i>
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Resume;