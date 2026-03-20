import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/seed"

export async function GET(_, { params }) {
    const { id } = await params;

    const data = await prisma.student.findFirst({
        where: {
            id: +id
        }
    });

    return NextResponse.json({
        success: true,
        message: "Error successfully",
        payload: data
    });
}

export async function PUT(request, { params }) {
    const { id } = await params;
    const { name, email } = await request.json();

    const student = await prisma.student.update({
        where: {
            id: +id
        },
        data: { name, email },
    });
    return NextResponse.json({
        success: true,
        message: "Updated successully",
        payload: student,
        timestamp: new Date()
    })
}

export async function GET(_, { params }) {
    const { id } = await params;

    const data = await prisma.student.delete({
        where: {
            id: +id
        }
    });

    return NextResponse.json({
        success: true,
        message: "Deleted successfully",
        payload: data
    });
}