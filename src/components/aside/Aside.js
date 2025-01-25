import { Link, useLocation } from "react-router-dom";
import styles from "./Aside.module.css";

function Aside() {

    const location = useLocation();

    let msg = `mailto:tomarmayank219@gmail.com?subject=Interested%20in%20Hiring%20You
    &body=Please%20provide%20details%20about%20your%20job%20description%20and%20any%20specific%20requirements%20you%20have.
    %0D%0A%0D%0AAdditionally%2C%20it%20would%20be%20helpful%20if%20you%20could%20provide%20a%20link%20to%20your%20company/
    organization's%20website.%0D%0A%0D%0AThank%20you%20%2C`;
    
    return(
        <aside>
            <div className={styles.asideContainer} >
                <ul>
                    {/* for hire me */}
                    <li><a href={msg} ><i className="fa-solid fa-user-check"></i></a></li>
                    <li>
                        {location.pathname === '/' ?
                        <a href="#contactSection" ><i className="fa-solid fa-circle-nodes"></i></a> :
                        <Link to="/Portfolio" ><i className="fa-solid fa-home"></i></Link> 
                        }
                    </li>
                    {/* for coding process */}
                    <li><a><i className="fa-solid fa-code"></i></a></li>
                    {/* social links */}
                    <li><a href="https://www.linkedin.com/in/mayank-singh-4336b4226" target="_blank"  rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/mayank7456" target="_blank"  rel="noopener noreferrer" ><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/mayank_singh_tomar____/" target="_blank"  rel="noopener noreferrer" ><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside;