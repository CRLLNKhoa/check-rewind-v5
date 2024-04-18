import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/single-rewind",
    "/double-rewind",
    "/",
    "/triple-rewind",
    "/push",
    "/push/:player",
    "/other-app",
    "/calculator",
    "/about-me",
    "/teams"
  ],
});

export const config = {
  matcher: ["/push/add"],
};
