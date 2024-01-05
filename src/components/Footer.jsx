import styles from './Footer.module.css'
import { MdCopyright } from "react-icons/md";

function Footer() {
    let footerList = [ "+91 9502777295","vigneshkasa27@gmail.com","https://github.com/vigneshkasa", "https://www.linkedin.com/in/vigneshkasa"]
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerListContainer}>
                    {footerList.map((list =>
                        <div className={styles.footerItems}>{list}</div>
                    ))}
                </div>
                <div className={styles.copyright}>
                    <MdCopyright/>2024 VigneshKasa The Web Developer.
                    </div>
            </div>
        </>
    )
}
export default Footer;