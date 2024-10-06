import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

interface Params {
    params: {
        id: string;
    };
}

export async function DELETE(req: Request, { params }: Params) {
    try {
        const { id } = params;
        const deletedTicket = await Ticket.findByIdAndDelete(id);

        if (!deletedTicket) {
            return NextResponse.json(
                { message: "Ticket not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting ticket:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
