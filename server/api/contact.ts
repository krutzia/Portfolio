// Server-only Nitro API route handler.
// This file is processed by Nitro, NOT by Vite — it never reaches the browser bundle.
// All SMTP credentials are read from process.env inside the handler.
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  const body = await readBody(event);
  const { name, email, message } = body ?? {};

  // Basic validation
  if (
    typeof name !== "string" || name.trim().length < 1 ||
    typeof email !== "string" || !email.includes("@") ||
    typeof message !== "string" || message.trim().length < 10
  ) {
    throw createError({ statusCode: 400, statusMessage: "Invalid form data" });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !contactEmail) {
    throw createError({ statusCode: 500, statusMessage: "Email service not configured" });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${smtpUser}>`,
    to: contactEmail,
    replyTo: `"${name.trim()}" <${email.trim()}>`,
    subject: `Portfolio inquiry from ${name.trim()}`,
    text: `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`,
    html: `<p>${message.trim().replace(/\n/g, "<br>")}</p><hr><p><strong>${name.trim()}</strong> — <a href="mailto:${email.trim()}">${email.trim()}</a></p>`,
  });

  return { ok: true };
});
