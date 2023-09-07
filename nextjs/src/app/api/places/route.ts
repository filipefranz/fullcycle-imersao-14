import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const text = url.searchParams.get("text");
    const response = await fetch(
        `${process.env.NEST_URL}/places?text=${text}`,
        {
            next: {
                revalidate: 60, //cache com valor bem grande
            }
        })

    return NextResponse.json(await response.json());
}