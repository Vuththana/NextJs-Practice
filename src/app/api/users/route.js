import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/seed";

export async function GET(req) {
    const {searchParams} = new URL(req.url);
    const name = searchParams.get("name");
    const data = await prisma.student.findMany(
        {where: !search ? undefined : {
            OR: [
                {name: {contains:  name, mode: "insensitive"}},
            ]
        }}
    );

    return NextResponse.json({
        success: true,
        message: "Student successfully",
        payload: data,
        timestamp: new Date()
    });
}

export async function POST(request) {
    const {name, email} = await request.json();

    const student = await prisma.student.create({data: {name, email}});
    return NextResponse.json({
        success: true,
        message: "Created successfully",
        payload: student,
        timestamp: new Date()
    })
}