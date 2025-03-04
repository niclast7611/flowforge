"use server";

import { db } from "@/lib/db";

export const getUserData = async (id: string) => {
  const userInfo = await db.user.findUnique({
    where: {
      clerkId: id,
    },
    include: {
      connections: true,
    },
  });

  return userInfo;
};
