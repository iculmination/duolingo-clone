import { auth } from "@clerk/nextjs/server";

const adminsList = [
  "user_2mkYW7osSDDiPt5UVuDAeqCrZGY",
  "user_2nr5VHOBFThMyXBKBSqfLnkKweA",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminsList.indexOf(userId) !== -1;
};
