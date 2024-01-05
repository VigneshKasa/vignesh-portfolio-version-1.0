import styles from "./ProjectSection.module.css"
import { GiAchievement } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

function ProjectSection() {
    let Projects = [
    { liveUrl: "https://vigneshkasa.github.io/QuotesInspired/", imgUrl: "/images/quotes.png" },
    { liveUrl: "https://vigneshkasa.github.io/WeatherApp/", imgUrl: "/images/weather.png" },
    { liveUrl: "https://vigneshkasa.github.io/RockPaperScissors/", imgUrl:"/images/rps.png" },
    { liveUrl: "https://vigneshkasa.github.io/BulbSwitch/", imgUrl: "/images/bulb.png" },
    { liveUrl: "https://vigneshkasa.github.io/BasicMath/", imgUrl: "/images/math.png" },
    { liveUrl: "", imgUrl: "/images/docker.png" }]
   

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
                    {Projects.map((list=>
                        <a href={list.liveUrl}><div className={styles.project}>
                            <img src={(list.imgUrl)} alt="img" />
                        </div>
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}
export default ProjectSection;