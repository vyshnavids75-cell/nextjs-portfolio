"use client";
import { useState } from "react";
import styles from "../styles/contactForm.module.css";
import { createContact } from "../actions/contact";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      await createContact(formData.name, formData.email, formData.message);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }

    return (
        <section className={styles.contactWrapper}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h3 className={styles.title}>Drop A Message</h3>
            <input type="text" placeholder="Your Name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={styles.contactName}
            />
            <input type="email" placeholder="Your Email" value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={styles.contactEmail}
            />
            <textarea placeholder="Your Message" value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className={styles.contactMessage}
            />
            <button disabled={!formData.name || !formData.email || !formData.message}>Submit</button>
            {success && <p className={styles.successAlert}>Message sent!</p>}
        </form>
        </section>
    )
}