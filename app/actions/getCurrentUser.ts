import prisma from "@/libs/prismadb";
import { getSession } from "./getSession";

export const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        seenPosts: true,
        likedPosts: {
          include: {
            user: true,
          },
        },
        dislikedPosts: true,
        watchLaterPosts: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (err) {
    return null;
  }
};
