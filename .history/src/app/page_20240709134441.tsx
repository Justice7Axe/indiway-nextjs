import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const { data } = await getBookings();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 sm:px-4 md:px-8 lg:px-16">
      {data?.map((bookings) => (
        <div key={bookings.id}>
          <div className="mt-2 font-semibold text-sm">{bookings.useremail}</div>
          <div className="mt-1 text-gray-400 text-sm">{bookings.username}</div>
        </div>
      ))}
    </div>
  );
}

async function getBookings() {
  const prisma = new PrismaClient();
  const data = await prisma.bookings.findMany();

  return {
    data,
  };
}
