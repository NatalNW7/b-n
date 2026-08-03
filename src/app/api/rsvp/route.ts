import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "As confirmações de presença estão encerradas." },
    { status: 403 }
  );
}
