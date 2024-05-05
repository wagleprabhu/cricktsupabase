const db = require("./db");

const { stadiumImages, stadiums, tickets } = require("../lib/initialData2");



async function main() {
  await db.stadiumImage.deleteMany({});
  await db.stadium.deleteMany({});
  await db.ticket.deleteMany({});
  
  // const createdStadiums = await db.stadium.createMany({
  //   data: stadiums,
  // });

  // const createdStadiumImages = await db.stadiumImage.createMany({
  //   data: stadiumImages
  // });

  // const createdTickets = await db.ticket.createMany({
  //   data: tickets,
  // });

  for (const stadium of stadiums) {
    const createdStadium = await db.stadium.create({
      data: stadium,
    });

  }


  console.log("Seeding completed successfully!");
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