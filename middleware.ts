import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/single-rewind",
    "/double-rewind",
    "/",
    "/triple-rewind",
    "/push",
    "/push/:player"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
