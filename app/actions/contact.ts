"use server";

import sql from "@/lib/db";

export async function createContact(name: string, email: string, message: string) {
    await sql `INSERT INTO contacts(name, email, message) VALUES(${name}, ${email}, ${message})`;
}