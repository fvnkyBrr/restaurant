import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
  // const session = await getAuthSession();

  try {
    const products = await prisma.product
      .findMany
      // {
      //   where: {
      //     ...(cat ? { catSlug: cat } : { isFeatured: true }),
      //   },
      // }
      ();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "someting went wrong" }),
      { status: 500 }
    );
  }
};
export const POST = () => {
  return new NextResponse("Hallo", { status: 200 });
};
