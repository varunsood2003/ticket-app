import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";


export async function POST(req: Request){
    try {
        const body = await req.json();
        const ticketData = body
        await Ticket.create(ticketData)
        return NextResponse.json({message : "Ticket Created"},{status: 201});
    } catch (error) {
        return NextResponse.json({message: "Error creating the Ticket",error},{status: 500})
    }
}
export async function GET(){
    try {
        const tickets = await Ticket.find();
        return NextResponse.json({tickets},{status: 200})
    } catch (error) {
        return NextResponse.json({message: "Error fetching the Ticket",error},{status: 500})    }
}