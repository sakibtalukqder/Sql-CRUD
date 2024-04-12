import { prisma } from "@/config/db";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const employ = await prisma.employ.findFirst({
            where: {
                id: parseInt(id),
            },
        })
        return NextResponse.json({ employ }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}

export const PUT = async (request, { params }) => {
    const { id } = params;
    const { FullName, email, Designation } = await request.json();
    try {
        const updateUser = await prisma.employ.update({
            where: {
                id: parseInt(id),
            },
            data: { FullName, email, Designation }
        })
        return NextResponse.json({ updateUser }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}

export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        const deletedUser = await prisma.employ.delete({
            where: {
                id: parseInt(id),
            },
        })
        return NextResponse.json({ deletedUser }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}