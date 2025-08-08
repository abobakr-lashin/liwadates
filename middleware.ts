import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (isMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
