import { NextRequest, NextResponse } from "next/server";
import { UserChecker } from "./actions/checker";
import { JWTAction } from "./actions/ajwt/jwtaction";
import { UserRole } from "./constant/user.role";
import { cookies } from "next/headers";
import { cookieValue } from "./constant/cookie.value";

const AuthRoutes = ["/auth/login", "/auth/register"];

export async function middleware(request: NextRequest) {
  const result = await UserChecker();
  const { pathname } = request.nextUrl;

  if (!result.success) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  const getToken = await cookies().get(cookieValue.accessToken);

  if (!getToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  const verify = await JWTAction();
  if (pathname.startsWith("/dash/users")) {
    if (verify.role === UserRole.admin) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/listing")) {
    if (verify.role === UserRole.user) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/agreement")) {
    if (verify.role === UserRole.user) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/auth")) {
    if (!verify.role) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: [
    "/dash/:path*",
    "/listing/:path*",
    "/auth/:path*",
    "/agreement/:path*",
  ],
};
