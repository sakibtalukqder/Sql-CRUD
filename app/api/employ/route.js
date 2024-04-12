import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const result = await prisma.employ.findMany();
        return Response.json(result);
    } catch (error) {
        return Response.json({ error: error.message });
    }
}

export const POST = async (request) => {

    try {

        const { FullName, email, Designation } = await request.json();
        const data = { FullName, email, Designation }
        console.log("New Employ", data);
        const result = await prisma.employ.create({ data: data });
        return NextResponse.json({ message: "Employ Added" }, { status: 201 })

    } catch (error) {
        return Response.json({ error: error.message });
    }

}
