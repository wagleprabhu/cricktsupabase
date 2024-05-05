const db = require('./db')

async function main() {
  const stadiums = await db.stadium.findMany({
    include: {
      images: true,
      tickets: true
    }
  });
  console.log("stadiums: ",stadiums);

  // console.log("Seeding completed successfully!");
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });