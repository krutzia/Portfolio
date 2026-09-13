import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { sendContactEmail } from "@/lib/api/contact.server";

const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .validator(contactMessageSchema)
  .handler(async ({ data }) => {
    await sendContactEmail(data);
    return {
      success: true,
      message: "Message sent successfully.",
    };
  });
