// Client-safe contact form submission helper.
// This module only makes a fetch request — no server imports, no credentials.
// The actual email sending happens in server/api/contact.ts (Nitro, server-only).

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let errorMessage = `Server error (${res.status})`;
    try {
      const json = await res.json();
      if (json?.statusMessage) errorMessage = json.statusMessage;
      else if (json?.message) errorMessage = json.message;
    } catch {
      // ignore parse errors
    }
    throw new Error(errorMessage);
  }
}
