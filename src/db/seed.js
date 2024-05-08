const db = require("./db");

const { stadiumImages, stadiums, chidambaramImages, tickets, carouselImages, chidambaramStadium, chidambaramTickets } = require("../lib/initialData");



async function main() {
  // await db.stadiumImage.deleteMany({});
  // await db.stadium.deleteMany({});
  // await db.ticket.deleteMany({});
  // await db.category.deleteMany({});
  // await db.crouselImage.deleteMany({});
  // const createdStadiums = await db.stadium.createMany({
  //   data: stadiums,
  // });
// create categories cricket, football, chess
  // const createdCategories = await db.category.createMany({
  //   data: [
  //     { name: "Cricket" },
  //     { name: "Football" },
  //     { name: "Chess" },
  //   ],
  // });

  // const createCarouselImages = await db.crouselImage.createMany({
  //   data: carouselImages,
  // });

  // const createdStadiumImages = await db.stadiumImage.createMany({
  //   data: stadiumImages
  // });
  // const createdStadiumImages = await db.stadiumImage.createMany({
  //     data: chidambaramImages,
  //   });
  
  const deletedStadiumImage = await db.stadiumImage.delete({
    where: {
      id: "996e6b51-329b-4bd1-a5cc-fa16d6247dfc"
    }
  })

  // const createdTickets = await db.ticket.createMany({
  //   data: tickets,
  // });

  // const createdStadium = await db.stadium.createMany({
  //   data: chidambaramStadium,
  // });

  // const createdTickets = await db.ticket.createMany({
  //   data: chidambaramTickets,
  // });

 
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