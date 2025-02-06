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

  await prisma.person.createMany({
    data: [
      {
        ccEmail: "john.doe@example.com",
        activeFlag: true,
        name: "John Doe",
        labelIds: [1, 2],
        orgId: 101,
        closedDealsCount: 5,
        openDealsCount: 2,
        nextActivityDate: new Date("2025-02-10T12:00:00Z"),
        ownerId: 201,
        primaryEmail: "john.doe@example.com",
        nextActivityTime: new Date("2025-02-10T15:00:00Z"),
        emails: JSON.stringify(["john.doe@example.com", "johndoe@work.com"]),
        phones: JSON.stringify(["+1234567890", "+0987654321"]),
      },
      {
        ccEmail: "jane.smith@example.com",
        activeFlag: false,
        name: "Jane Smith",
        labelIds: [3, 4],
        orgId: 102,
        closedDealsCount: 3,
        openDealsCount: 1,
        nextActivityDate: new Date("2025-02-12T10:00:00Z"),
        ownerId: 202,
        primaryEmail: "jane.smith@example.com",
        nextActivityTime: new Date("2025-02-12T14:30:00Z"),
        emails: JSON.stringify(["jane.smith@example.com"]),
        phones: JSON.stringify(["+1122334455"]),
      },
    ],
  });

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
