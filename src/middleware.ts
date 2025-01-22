import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const publicRoutes = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)', 
  '/api/clerk-webhook',
  '/api/drive-activity/notification'
]);

// Define ignored routes that bypass the middleware completely
const ignoredRoutes = createRouteMatcher([
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait'
]);

export default clerkMiddleware(async (auth, request) => {
  // If the route is not public and not ignored, protect it
  if (!publicRoutes(request) && !ignoredRoutes(request)) {
    await auth.protect();
  }
}, {
  debug: false, // Enable debug logs in development
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  signInUrl: "/sign-in",
  afterSignInUrl: "/dashboard",
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};