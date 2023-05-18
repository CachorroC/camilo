import clientPromise from "#@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
) {
  const client = await clientPromise;
  if (!client) {
    throw new Error(
      "no hay cliente mongólico"
    );
  }
  const db = client.db(
    "RyS"
  );
  const procesos = db.collection(
    "Procesos"
  );
  const data = await req.json();
  console.log(
    data
  );
  const request = await procesos.insertOne(
    data
  );
  return new NextResponse(
    JSON.stringify(
      request
    ),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
