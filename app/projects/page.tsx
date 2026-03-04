
import styles from "../styles/projects.module.css"

export default function Projects() {
    return (
        <section className={styles.projectSection}>
            <h2 className={styles.projectsHeading}>Professional & Personal Projects</h2>
            <div className={styles.projectsContainer}>
                <div className={styles.featuedProject}>
                    <div className={`${styles.projectCard} ${styles.featuredCard}`}>
                        <h3>SMARTShip™ – ZeroNorth</h3>
                        <p className={styles.projectMeta}>
                            Professional Project · Product-based Company
                        </p>
                        <p className={styles.projectTech}>
                            Angular · Node.js · Datastax · IoT Data Platforms
                        </p>
                        <p className={styles.projectDesc}>
                            Enterprise-grade, real-time analytics platform used across global
                            fleets to improve operational efficiency. A mission-critical product
                            supporting data-driven maritime decision-making.
                        </p>
                        <ul>
                            <li>Worked on Angular-based UI for fleet monitoring and analytics</li>
                            <li>
                                Contributed to backend integrations using Node.js, working with
                                Datastax to handle and retrieve large volumes of operational and
                                IoT data
                            </li>
                            <li>Integrated real-time data and configurable dashboards</li>
                            <li>
                                Focused on performance, maintainability, and clean architecture
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.projectGrid}>
                    <div className={styles.projectCard}>
                        <h3>Journhive – Personal Travel Journal App</h3>
                        <p className={styles.projectTech}>Personal Project</p>
                        <p className={styles.projectTech}>Angular · Node.js · MongoDB</p>
                        <p className={styles.projectDesc}>
                            A personal travel journal application to store memories, photos, and
                            experiences, allowing users to document trips and export travel
                            stories as downloadable PDFs.
                        </p>
                        <ul>
                            <li>Create and manage travel entries</li>
                            <li>Upload photos and memories</li>
                            <li>Export travel stories as PDF</li>
                            <li>Share memories with loved ones</li>
                        </ul>
                    </div>

                    <div className={styles.projectCard}>
                        <h3>Portfolio Website</h3>
                        <p className={styles.projectMeta}>Personal Project</p>
                        <p className={styles.projectTech}>Nextjs</p>
                        <p className={styles.projectDesc}>
                            A personal portfolio showcasing professional experience,
                            skills, and projects with a clean UI and structured navigation.
                        </p>
                        <ul>
                            <li>Component-based architecture</li>
                            <li>Responsive design</li>
                            <li>Clear content hierarchy</li>
                            <li>Focus on user experience</li>
                        </ul>
                    </div>

                    <div className={styles.projectCard}>
                        <h3>Detection of PCOS using Machine Learning</h3>
                        <p className={styles.projectMeta}>Academic / Final Year Project</p>
                        <p className={styles.projectTech}>Python · Machine Learning · SVM</p>
                        <p className={styles.projectDesc}>
                            A machine learning–based system to assist in the detection of
                            Polycystic Ovary Syndrome (PCOS) using clinical and physiological
                            parameters. The project aimed to support early diagnosis and improve
                            healthcare decision-making.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
