import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <div className={styles.errorPage} >
            <div className={styles.errorContainer} >
                <div className={styles.errorEmote} >
                    <i className="fa-solid fa-face-frown"></i>
                </div>
                <div className={styles.errorContent} >
                    <h1>404</h1>
                    <h2>OOPS! PAGE NOT BE FOUND</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                    <Link to="Portfolio" >Back to homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;