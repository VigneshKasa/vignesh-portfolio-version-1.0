import styles from "./ProjectSection.module.css"
import { GiAchievement } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

function ProjectSection() {
    let projectList = ["RockPaperScissors", "RockPaperScissors", "RockPaperScissors", "RockPaperScissors", "RockPaperScissors", "RockPaperScissors"]
    let ProjectCover = ["/images/quotes.png", "/images/weather.png", "/images/rps.png",
        "/images/bulb.png", "/images/math.png", "/images/docker.png"]
    return (
        <>
            <div className={styles.projectContainer}>
                <div className={styles.selectBar}>
                    <div className={styles.selectBox}><GrProjects />PROJECTS</div>
                    <div className={styles.selectBox}><GiAchievement />ACHIEVEMENTS</div>
                </div>
                <div className={styles.projectBox}>
                    {ProjectCover.map((list =>
                        <div className={styles.project}>
                            <img src={(list)} alt="img"/>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default ProjectSection;