import styles from "../styles/About.module.css";

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutCards}>
                <div className={styles.aboutCard}>
                    <h3 className={styles.aboutCardTitle}>🎓 Education</h3>
                    <p>B.Tech in Computer Science</p>
                    <p>College Of Engineering, Perumon</p>
                </div>

                <div className={styles.aboutCard}>
                    <h3 className={styles.aboutCardTitle}>💼 Professional Experience</h3>
                    <p>Software Developer at ZeroNorth (formerly Alpha Ori Technologies), Chennai</p>
                    <p>Internship at Alpha Ori Technologies (6 months), Chennai</p>
                    <p>Over 2 years of hands-on experience in Angular, Node.js, Cassandra</p>
                    <p>Currently expanding expertise in Next.js and modern React-based full-stack development</p>
                    <p>Focused on scalability, performance, and clean architecture</p>
                </div>

                <div className={styles.aboutCard}>
                    <h3 className={styles.aboutCardTitle}>🌟 Passion & Goals</h3>
                    <p>Collaborate with cross-functional teams</p>
                    <p>Driven to build impactful software and meaningful user experiences</p>
                    <p>Goal: grow as a developer while making a positive impact</p>
                </div>
            </div>
        </section>
    );
}