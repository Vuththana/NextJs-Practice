const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})
export const prisma = new PrismaClient({adapter})

const students = [
    {
        name: "Keo Vuththana",
        email: "vuththanakeo69@gmail.com"   
    },
    {
        name: "Tireach",
        email: "tireach35@yahoo.com"
    },
    {
        name: "Goros",
        email: "tireach@yahoo.com"
    },
    {
        name: "Alice",
        email: "alice@yahoo.com"
    },
    {
        name: "Sovichea",
        email: "sovichea@gmail.com"
    }
]

// export async function insertData() {
//     await prisma.student.createMany({data:students});
// }

// insertData().then(() => {
//     prisma.$disconnect();
// })