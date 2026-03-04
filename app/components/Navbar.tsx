'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav style={{
            display: "flex", justifyContent: "flex-end", padding: "1.7rem", gap: "2rem", color: "#e5e7eb", backgroundColor: "#020617",
            borderBottom: "1px solid #111827", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100
        }}>
            <div className={styles.desktopLinks}>
                <Link href="/" className={pathname === "/" ? styles.active : styles.link}>Home</Link>
                <Link href="/about" className={pathname === "/about" ? styles.active : styles.link}>About</Link>
                <Link href="/projects" className={pathname === "/projects" ? styles.active : styles.link}>Projects</Link>
                <Link href="/contacts" style={{ marginRight: "0.5rem" }} className={pathname === "/contacts" ? styles.active : styles.link}>Contact</Link>
            </div>

            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/projects" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link href="/contacts" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Contacts</Link>
                </div>
            )}

        </nav>
    )

}