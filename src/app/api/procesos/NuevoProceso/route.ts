export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs/promises";
import "server-only";

export async function POST(
  request: Request
) {
  const { searchParams } = new URL(
    request.url
  );
  const reqBody = request.body;
  if (reqBody !== null) {
    const parce = JSON.stringify(
      reqBody
    );
    return new NextResponse(
      parce,

      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
  const jei = request.json();

  const reqHeaders = request.headers;
  const reqMethod = request.blob();

  return new NextResponse(
    JSON.stringify(
      reqBody
    ),

    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
