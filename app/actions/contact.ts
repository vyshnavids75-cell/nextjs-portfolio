"use server";

import sql from "@/lib/db";

export async function createContact(name: string, email: string, message: string) {
    await sql `INSERT INTO contacts(name, email, message) VALUES(${name}, ${email}, ${message})`;
}

export async function fetchContact() {
    const fetchedcontacts = await sql `SELECT * FROM contacts ORDER BY created_at DESC`;
    return fetchedcontacts;
}