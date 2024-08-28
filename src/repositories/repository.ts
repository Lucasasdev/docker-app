import { PrismaClient, Users } from "@prisma/client";
const prismaClient = new PrismaClient();

interface BodyType {
  name: string;
}

export const createUser = async (body: BodyType): Promise<Users | null> => {
  const { name } = body;
  const result = await prismaClient.users.create({
    data: {
      name: name,
    },
  });
  return result;
};
