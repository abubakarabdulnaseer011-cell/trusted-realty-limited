import { notFound } from "next/navigation";

type VerificationRouteProps = {
  params: Promise<{
    verificationFile: string;
  }>;
};

const GOOGLE_FILE_PATTERN = /^google[a-zA-Z0-9]+\.html$/;

export async function GET(_: Request, { params }: VerificationRouteProps) {
  const { verificationFile } = await params;

  if (!GOOGLE_FILE_PATTERN.test(verificationFile)) {
    notFound();
  }

  return new Response(`google-site-verification: ${verificationFile}`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
