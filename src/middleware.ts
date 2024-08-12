import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const value = process.env.ENV
  const path = request.nextUrl.pathname;

  const HOME_PATH = "/pastel-blonde";

  if (path === "/") {
    return NextResponse.redirect(new URL(HOME_PATH, request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
