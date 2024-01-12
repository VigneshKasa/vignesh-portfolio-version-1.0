import styles from './Skills.module.css'
function Skills() {

    let skillLists = ["Java", "HTML", "CSS", "JavaScript", "React Js", "GitHub", "API"]
    let skillListImg = ["/images/java.png", "/images/html.png", "/images/css.png",
        "/images/javascript.png", "/images/reactjs.png", "/images/github.png", "/images/api.png"]
    let skillList = [
        {
            skillImage: "/images/java.png",
            skillName: "Java"
        },
        {
            skillImage: "/images/html.png",
            skillName: "HTML"
        },
        {
            skillImage: "/images/css.png",
            skillName: "CSS"
        },
        {
            skillImage: "/images/javascript.png",
            skillName: "JavaScript"
        },
        {
            skillImage: "/images/reactjs.png",
            skillName: "ReactJs"
        },
        {
            skillImage: "/images/github.png",
            skillName: "GitHub"
        },
        {skillImage: "/images/api.png",
        skillName: "Api"
}]
    return (
        <>
            <div className={styles.skillIcon}>
                {skillList.map((skills) => (<div className={styles.skillContainer}>
                    <div className={styles.skill}>
                        <div>
                            <img src={(skills.skillImage)} alt="img" />
                        </div>
                    </div>
                        <p className={styles.skillText}>{skills.skillName}</p>
                        </div>
                        ))
                }
            </div>
        </>
    )
}
export default Skills;