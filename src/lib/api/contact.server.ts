import { getServerConfig } from "@/lib/config.server";

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
}) {
  const { default: nodemailer } = await import("nodemailer");
  const config = getServerConfig();
  const smtpHost = config.smtpHost;
  const smtpPort = Number(config.smtpPort ?? "587");
  const smtpUser = config.smtpUser;
  const smtpPass = config.smtpPass;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error(
      "Email delivery is not configured yet. Add SMTP credentials in your environment variables.",
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `Portfolio inquiry from ${input.name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin: 0 0 12px;">New portfolio inquiry</h2>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 12px 16px; border-left: 4px solid #7c3aed; background: #f5f3ff; border-radius: 8px; white-space: pre-wrap;">
        ${input.message.replace(/\n/g, "<br />")}
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: smtpUser,
    to: config.contactRecipient,
    replyTo: input.email,
    subject,
    text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
    html,
  });
}
