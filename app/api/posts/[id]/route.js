import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;
    await connectMongoDB();
    const post = await Post.findOne({ _id: id });
    return NextResponse.json({ post }, { status: 200 });
}

export async function PUT(req, { params }) {
    const { id } = params;
    const { newName: name, newSeries: series, newPicture: picture } = await req.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id, { name, series, picture });
    return NextResponse.json({ message: "Series Updated" }, { status: 200 });
}