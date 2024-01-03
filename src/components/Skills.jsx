import styles from './Skills.module.css'
function Skills(){

    let skillList=["Java","HTML","CSS","JavaScript","React Js","GitHub","Docker"]
    let skillListImg=["/images/java.png","/images/html.png","/images/css.png",
    "/images/javascript.png","/images/reactjs.png","/images/github.png","/images/docker.png"]
    return(
        <>
        <div className={styles.skillIcon}>
            {skillListImg.map((skills)=>(
                <div className={styles.skill}>
                    <img src={(skills)} alt="img"/>
                </div>))
                
            }
            </div>
            <div className={styles.skillName}>
            {skillList.map((skills)=>(
                <p className={styles.skillText}>{skills}</p>))
                
            }
            </div>
            </>  
    )
}
export default Skills;