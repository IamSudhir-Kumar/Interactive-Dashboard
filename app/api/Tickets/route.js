import Ticket from "../../(model)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
try {
    const body = await req.json()   
    const tickData = body.tickData;
    await Ticket.create(tickData);

    return NextResponse.json({ message: "success" }, 201)
} catch (error) {
    return NextResponse.json({ message: "error"} , error.status || 500)
}
}