import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload?.name || !payload?.email || !payload?.organization) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    // In production this is where you'd forward to a CRM, email service, or database.
    console.log("Mira Labs contact submission:", {
      name: payload.name,
      email: payload.email,
      organization: payload.organization,
      role: payload.role,
      jurisdiction: payload.jurisdiction,
      aum: payload.aum,
      interests: payload.interests,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
