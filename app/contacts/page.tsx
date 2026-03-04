import Link from "next/link";
import styles from "../styles/contacts.module.css"

export default function Contacts() {
     return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h4 className={styles.contactTitle}>Primary Contact Information</h4>
                <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email</span>
                    <Link href="mailto:vyshnavids75@gmail.com" className={styles.contactLink}>
                        vyshnavids75@gmail.com
                    </Link>
                </div>
            </div>

            <div className={styles.contactGroup}>
                <h4 className={styles.contactGroupTitle}>Professional Profiles</h4>

                <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <Link 
                        href="https://www.linkedin.com/in/vyshnavids"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.contactLink}
                    >
                        https://www.linkedin.com/in/vyshnavids
                    </Link>
                </div>

                <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>GitHub</span>
                    <Link 
                        href="https://github.com/vyshnavids75-cell"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.contactLink}
                    >
                        https://github.com/vyshnavids75-cell
                    </Link>
                </div>
            </div>

            <div className={styles.contactGroup}>
                <h4 className={styles.contactGroupTitle}>Location</h4>

                <p className={styles.contactLocation}>
                    Working in Chennai · Based in Kerala
                </p>
            </div>

            <Link href="/contactForm" className={styles.contactIntro}>Send me a message</Link>
                
        </section>
    )
}