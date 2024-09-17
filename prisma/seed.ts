import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()
  const usersData = [
    {
      email: "hehe@gmail.com",
      name: "user",
      addname: "user",
      birthdate: new Date("1990-01-01T00:00:00Z"),
    },
    {
      email: "heho@gmail.com",
      name: "user2",
      addname: "user2",
      birthdate: new Date("1990-01-01T00:00:00Z"),
    },
  ];
  
  const users = [];
  
  for (const userData of usersData) {
    const createdUser = await prisma.user.create({
      data: userData,
    });
    users.push(createdUser);
  }

  await prisma.post.createMany({
    data: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex dignissimos asperiores sapiente facilis quidem molestiae natus illo ratione placeat. Laudantium repudiandae, voluptate natus cum nemo vitae perspiciatis? Pariatur, eius!",
        author_id: users[0].id,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex dignissimos asperiores sapiente facilis quidem molestiae natus illo ratione placeat. Laudantium repudiandae, voluptate natus cum nemo vitae perspiciatis? Pariatur, eius!",
        author_id:users[0].id,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex dignissimos asperiores sapiente facilis quidem molestiae natus illo ratione placeat. Laudantium repudiandae, voluptate natus cum nemo vitae perspiciatis? Pariatur, eius!",
        author_id:users[0].id,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex dignissimos asperiores sapiente facilis quidem molestiae natus illo ratione placeat. Laudantium repudiandae, voluptate natus cum nemo vitae perspiciatis? Pariatur, eius!",
        author_id: users[1].id,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex dignissimos asperiores sapiente facilis quidem molestiae natus illo ratione placeat. Laudantium repudiandae, voluptate natus cum nemo vitae perspiciatis? Pariatur, eius!",
        author_id:users[1].id,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex dignissimos asperiores sapiente facilis quidem molestiae natus illo ratione placeat. Laudantium repudiandae, voluptate natus cum nemo vitae perspiciatis? Pariatur, eius!",
        author_id: users[1].id,
      },
    ],
  });
}

main().catch((e) => console.error(e));

// model Post{
//     id Int @id @default(autoincrement())
//     content String
//     datetime_post DateTime @default(now())
//     author_id Int
//     parent_post_id Int?
//   }
