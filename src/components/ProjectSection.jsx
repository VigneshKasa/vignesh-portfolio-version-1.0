import styles from "./ProjectSection.module.css"
import { GiAchievement } from "react-icons/gi";
import { IoMdGrid } from "react-icons/io";

import { useState } from "react";

function ProjectSection() {
    let Projects = [
        { liveUrl: "https://vigneshkasa.github.io/QuotesInspired/", imgUrl: "/images/quotes.png" },
        { liveUrl: "https://vigneshkasa.github.io/WeatherApp/", imgUrl: "/images/weather.png" },
        { liveUrl: "https://vigneshkasa.github.io/RockPaperScissors/", imgUrl: "/images/rps.png" },
        { liveUrl: "https://vigneshkasa.github.io/BulbSwitch/", imgUrl: "/images/bulb.png" },
        { liveUrl: "https://vigneshkasa.github.io/AppleClone/", imgUrl: "/images/appleClone.png" },
        { liveUrl: "https://vigneshkasa.github.io/BasicMath/", imgUrl: "/images/math.png" }
    ]
    let Achievements = [
        { liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:6935542716206325760/?originTrackingId=jSwUJ6xpQkWWzFZPGSuoZg%3D%3D", imgUrl: "/images/tcscodevita.png" },
        { liveUrl: "https://www.linkedin.com/posts/vigneshkasa_anuraguniversity-nss-activity-7111980975026315264-pNQg?utm_source=share&utm_medium=member_desktop", imgUrl: "/images/bestvolunteer.png" }
    ]
    const [active, setActive] = useState("projects")
    const [postActive, setPostActive] = useState("projects")

    return (
        <>
            <div className={styles.projectMainBox}>
                <div className={styles.projectContainer}>
                    <div className={styles.selectBar}>
                        <div className={active==="projects"?styles.sectionActive:styles.selectBox} onClick={() => setActive("projects") }><IoMdGrid />PROJECTS</div>
                        <div className={active==="achievements"?styles.sectionActive:styles.selectBox} onClick={() => setActive("achievements")}><GiAchievement />ACHIEVEMENTS</div>
                    </div>
                    {active === "projects" &&
                        <div className={styles.projectBox}>
                            {Projects.map((list =>
                                <a href={list.liveUrl}><div className={styles.project}>
                                    <img src={(list.imgUrl)} alt="img" />
                                </div>
                                </a>
                            ))}
                        </div>

                    }

                    {active === "achievements" &&
                        <div className={styles.projectBox}>
                            {Achievements.map((list =>
                                <a href={list.liveUrl}><div className={styles.project}>
                                    <img src={(list.imgUrl)} alt="img" />
                                </div>
                                </a>
                            ))}
                        </div>
                    }

                </div>
            </div>

        </>
    )
}
export default ProjectSection;