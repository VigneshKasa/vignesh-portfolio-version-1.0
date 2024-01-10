import styles from './ProjectPreview.module.css'
import { FaGithub } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";


function ProjectPreview() {
    let Projects = [
        {
            imgUrl: "/images/quotes.png",
            description: "Designed and developed a responsive website featuring a dynamic platform that generates random quotes from renowned books.Integrated visually appealing background images to enhance the overall user experience and engagement. Combined technical proficiency with aesthetic considerations to deliver an engaging and visually appealing website.",
            gitUrl: "https://github.com/VigneshKasa/QuotesInspired",
            liveUrl: "https://vigneshkasa.github.io/QuotesInspired/"

        },
        {
            imgUrl: "/images/weather.png",
            description:"•	Developed a website dedicated to providing comprehensive weather forecasts, including temperature, humidity, wind speed, and pressure. Leveraged technologies such as API, JavaScript, HTML, and CSS to create a user-friendly and informative weather platform.",
            gitUrl: "https://github.com/VigneshKasa/WeatherApp",
            liveUrl: "https://vigneshkasa.github.io/WeatherApp/"

        },
        {
            imgUrl: "/images/rps.png",
            description:"Rock-Paper-Scissors Game in JavaScript, incorporating 'Random' methods to heighten the game's unpredictability. Provided suitable sound effects to make it enjoyable to play. ",
            gitUrl: "https://github.com/VigneshKasa/RockPaperScissors",
            liveUrl: "https://vigneshkasa.github.io/WeatherApp/"

        },
        {
            imgUrl: "/images/bulb.png",
            description:"",
            gitUrl: "https://github.com/VigneshKasa/BulbSwitch",
            liveUrl: "https://vigneshkasa.github.io/BulbSwitch/",
        },
        {
            imgUrl: "/images/appleClone.png",
            description:"",
            gitUrl: "https://github.com/VigneshKasa/AppleClone",
            liveUrl: "https://vigneshkasa.github.io/AppleClone/"
        },
        {
            imgUrl: "/images/math.png",
            description:"",
            gitUrl: "https://github.com/VigneshKasa/BasicMath",
            liveUrl: "https://vigneshkasa.github.io/BasicMath/"
        }
    ]
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}><img src={Projects[0].imgUrl} alt="img" /></div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.titleBar}>
                        <div className={styles.projectName}>Quotes Inspired</div>
                        <div className={styles.closebtn}><IoCloseSharp /></div>

                    </div>
                    <div className={styles.projectDescription}>{Projects[2].description}</div>
                    <div className={styles.projectLinks}>
                        <a href={Projects[0].gitUrl}> <div className={styles.links}><FaGithub /></div></a>
                        <a href={Projects[0].liveUrl}>  <div className={styles.links}><HiOutlineExternalLink /></div></a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ProjectPreview;