import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { sendContactEmail } from "@/lib/api/contact.server";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as unknown;
          const data = contactSchema.parse(body);
          await sendContactEmail(data);

          return Response.json({
            success: true,
            message: "Message sent successfully.",
          });
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Something went wrong while sending your message.";

          return Response.json(
            {
              success: false,
              message,
            },
            { status: 400 },
          );
        }
      },
    },
  },
});
