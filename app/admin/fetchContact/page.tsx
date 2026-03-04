import { fetchContact } from "@/app/actions/contact";
import styles from "@/app/styles/fetchContact.module.css"

export const dynamic = 'force-dynamic';

export default async function fetchContactPage() {
    const contacts = await fetchContact();

    return (
        <div className={styles.containerStyle}>
            <h2 className={styles.titleStyle}>All Messages</h2>

            {contacts.length === 0 ? (<p style={{ color: "#6f23b7" }}>No Messages Found</p>) :
                (
                    contacts.map((contact: any) => (
                        <div key={contact.id} className={styles.cardStyle}>
                            <p><strong>Name:</strong> {contact.name}</p>
                            <p><strong>Email:</strong> {contact.email}</p>
                            <p><strong>Message:</strong> {contact.message}</p>
                            <p className={styles.dateStyle}>
                                {new Date(contact.created_at).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}
        </div>
    )
}