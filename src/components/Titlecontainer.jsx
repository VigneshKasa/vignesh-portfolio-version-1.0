import styles from './TitleContainer.module.css'
import { HiOutlineDownload } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";


function TitleContainer() {
    return (
        <>
            <div className={styles.mainBox}>
                <div className={styles.title}>
                    Portfoliogram
                </div>
                <div className={styles.titleBar}>
                    <div className={styles.profilePic}>
                        <div className={styles.img}></div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className="personalInfoContainer">
                            <div className={styles.personalInfo}>
                                <div className={styles.name}>Vignesh_Kasa</div>
                                <div className={styles.contactBox}>
                                <a href="https://www.linkedin.com/in/vigneshkasa"><div className={styles.buttonBox}>LinkedIn<AiFillLinkedin/></div></a>
                                    <a href="https://github.com/vigneshkasa"><div className={styles.buttonBox}>GitHub<IoLogoGithub/></div></a>
                                    <a href="/images/VIGNESH KASA_RESUME_MS.pdf" download='Vignesh_resume'><div className={styles.buttonBox}>Resume<HiOutlineDownload /></div></a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.technicalContainer}>
                            <div className={styles.professional}>
                                <div className={styles.skills}>7 skills</div>
                                <div className={styles.projects}>6 projects</div>
                                <a href="https://www.linkedin.com/posts/vigneshkasa_internship-activity-7037458887108685824-zTyl?utm_source=share&utm_medium=member_desktop"><div className={styles.internship}>1 internship</div></a>
                            </div>
                            <div className={styles.aboutMe}>
                                <p>I am a <span className={styles.aboutTitle}> Front-End Web Developer.</span></p>
                                <p>I have hands on experience in front end web development and knowledge in technologies like HTML, CSS, JavaScript, React js, GitHub, Java, APIs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TitleContainer;