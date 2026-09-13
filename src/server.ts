import "./lib/error-capture";

import { z } from "zod";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { sendContactEmail } from "./lib/api/contact.server";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Please enter a valid email."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

async function handleContactApiRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);

  if (url.pathname !== "/api/contact" || request.method !== "POST") {
    return null;
  }

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
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const apiResponse = await handleContactApiRequest(request);
      if (apiResponse) {
        return apiResponse;
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
