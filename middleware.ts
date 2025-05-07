import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //  sessionCartId cookie
  if (!request.cookies.has("sessionCartId")) {
    // Generate new session cart id cookie
    const sessionCartId = crypto.randomUUID();

    // Clone the request headers
    const newRequestHeaders = new Headers(request.headers);

    const response = NextResponse.next({
      request: {
        headers: newRequestHeaders,
      },
    });

    // Set the cookie
    response.cookies.set("sessionCartId", sessionCartId);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
