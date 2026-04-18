import { notFound } from "next/navigation";

type VerificationRouteProps = {
  params: Promise<{
    verificationFile: string;
  }>;
};

const GOOGLE_FILE_PATTERN = /^google[^/]+\.html$/i;

function createVerificationResponse(verificationFile: string) {
  return new Response(`google-site-verification: ${verificationFile}`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

async function resolveVerificationFile(request: Request, params: VerificationRouteProps["params"]) {
  const { verificationFile } = await params;
  const userAgent = request.headers.get("user-agent") ?? "unknown";

  console.log("[google-verification]", JSON.stringify({ verificationFile, userAgent }));

  if (!GOOGLE_FILE_PATTERN.test(verificationFile)) {
    console.warn("[google-verification] rejected", verificationFile);
    notFound();
  }
 
  return verificationFile;
}

export async function GET(request: Request, { params }: VerificationRouteProps) {
  const verificationFile = await resolveVerificationFile(request, params);

  return createVerificationResponse(verificationFile);
}

export async function HEAD(request: Request, { params }: VerificationRouteProps) {
  const verificationFile = await resolveVerificationFile(request, params);

  return createVerificationResponse(verificationFile);
}
