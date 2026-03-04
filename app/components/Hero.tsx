
'use client';

import Link from "next/link";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
   return (
        <section className={styles.home}>
            <div className={styles.homeWrapper}>

                <div className={styles.homeLeft}>

                    <h1 className={styles.homeTitle}>
                        Hi, I’m Vyshnavi D S
                    </h1>

                    <span className={styles.homeRole}>SOFTWARE DEVELOPER</span>

                    <p className={styles.homeDescription}>
                        Welcome to my portfolio — a brief overview of my work. I’m a software developer who builds elegant, accessible and
                        high-performance web applications with strong attention to user
                        experience and clean design. I focus on writing scalable, maintainable code that delivers real-world impact.
                    </p>

                    <div className={styles.homeIcons}>
                        <Link href="mailto:vyshnavids75@gmail.com" className="mail-icon">
                            <Image src="/assets/icons/mail-icon.png" alt="Mail Icon"
                            width={30} height={40} />
                        </Link>

                        <Link
                            href="https://github.com/vyshnavids75-cell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-icon"
                        >
                            <Image src="/assets/icons/github-icon.png" alt="Github Icon"
                             width={30} height={40} />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/vyshnavids"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-icon"
                        >
                            <Image src="/assets/icons/linkedin-icon.png" alt="LinkedIn Icon"
                             width={30} height={40} />
                        </Link>
                    </div>

                </div>

                <div className={styles.homeCenter}>
                    <div className={styles.homeBlob}>
                        <Image src="/assets/images/Vyshnavi_image.jpg" alt="Vyshnavi_Image"
                         width={360} height={430} />
                    </div>
                </div>

            </div>

        </section>
    );
}