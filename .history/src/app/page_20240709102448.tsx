import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const { data } = await getBookings();

  return <h1>Indiway</h1>;
}

async function getBookings() {
  const prisma = new PrismaClient();
  const data = await prisma.bookings.findMany();

  return {
    data,
  };
}
