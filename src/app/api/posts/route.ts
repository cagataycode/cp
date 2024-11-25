import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { db } from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const { title, content } = json;

    const post = await db.post.create({
      data: {
        title,
        content,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
