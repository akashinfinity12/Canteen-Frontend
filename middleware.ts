import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { protectedRoutes, publicRoutes } from "./router/routes";

export default function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("user")?.value;

  if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
    request.cookies.delete("user");
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("user");

    return response;
  }

  if (publicRoutes.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
