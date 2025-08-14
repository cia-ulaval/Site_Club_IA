import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  // Protéger les routes d’écriture du forum
  if (url.pathname.startsWith('/portal/new') || url.pathname.startsWith('/portal/t/') || url.pathname.endsWith('/composer')) {
    // Vérifier présence cookie Supabase (auth)
    const hasSession = req.cookies.has('sb-access-token');
    if (!hasSession) {
      const loginUrl = new URL('/auth/callback', req.url);
      loginUrl.searchParams.set('redirect', url.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/new', '/portal/t/:path*'],
};
