import clientPromise from "#@/lib/mongodb";
import { monDia } from "#@/types/therapy";
import { NextResponse, NextRequest } from "next/server";
export async function GET(
  request: NextRequest
) {
  const { searchParams } = new URL(
    request.url
  );
  const delay = searchParams.get(
    "delay"
  );

  if (delay) {
    await new Promise(
      (
        resolve
      ) => {
        return setTimeout(
          resolve,
          Number(
            delay
          )
        );
      }
    );
  }
  const client = await clientPromise;
  if (!client) {
    throw new Error(
      "no hay cliente mongólico"
    );
  }
  const db = client.db(
    "terapia"
  );
  const diasCollection = (await db
    .collection(
      "dias"
    )
    .find(
      {}
    )
    .toArray()) as unknown as monDia[];
  const date = searchParams.get(
    "date"
  );
  if (date) {
    const day = diasCollection.filter(
      (
        dia
      ) => {
        return dia.date === date;
      }
    );
    return new NextResponse(
      JSON.stringify(
        day
      ),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
  const day = diasCollection.map(
    (
      dia
    ) => {
      return dia;
    }
  );
  return new NextResponse(
    JSON.stringify(
      day
    ),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
