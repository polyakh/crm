import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: "password",
        role: "AGENT",
      },
    });
  }

  console.log(`Seeded ${users.length} users.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
