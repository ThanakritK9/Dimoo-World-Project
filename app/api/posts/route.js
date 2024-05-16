import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, series, picture } = await req.json();
    console.log(name, series, picture);
    await connectMongoDB();
    await Post.create({ name, series, picture });
    return NextResponse.json({ message: "Series Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find({});
    return NextResponse.json({ posts });
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Series Deleted" }, { status: 200 });
}