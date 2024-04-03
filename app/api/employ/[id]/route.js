import { prisma } from "@/config/db";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = params;
    console.log(id);
    try {
        const employ = await prisma.employ.findFirst({
            where: {
                id: id,
            },
        })
        return NextResponse.json({ employ }, { status: 200 })
    } catch (error) {

    }

}