"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const getGoogleListener = async () => {
  const { userId } = await auth();
  if (userId) {
    const listener = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        googleResourceId: true,
      },
    });

    return listener;
  }
};
