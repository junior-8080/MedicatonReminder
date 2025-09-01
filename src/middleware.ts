import { NextRequest, NextResponse } from 'next/server';
import { Auth_Token_Name } from './lib/constants';
import {useAuth} from "@/features/AuthPage/hooks/useAuth";
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const publicPaths = [ '/','/auth'];
  const token = req.cookies.get(Auth_Token_Name)?.value;

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  if (!token) {
    const loginUrl = new URL('/auth', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
  try {
    return NextResponse.next();
  } catch {
    const loginUrl = new URL('/auth', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};