"use server";

import db from "@/db/db";


export const getTicket = async (id) => {
  const ticket = await db.ticket.findUnique({
    where: {
      id,      
    },
    include: {
      stadium: true,
    }
  }); 

  return ticket;
}

export const getEventWithoutImages = async (id) => {
  const event = await db.event.findUnique({
    where: {
      id,
    },
    include: {
      stadium: true,
    }
  });
  return event;

}

export const getSingleEvent = async (id) => {
  const event = await db.event.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
      stadium: true,
    },
  });
  return event;
};

export const getTicketsGroupedByPrice = async (stadiumId) => {
  const groupedtickets = await db.ticket.groupBy({
    by: ["price"],
    where: {
      stadiumId,
    },
    orderBy: {
      price: "asc",
    },
  });

  const ticketsForEachPrice = await Promise.all(
    groupedtickets.map(async (ticket) => {
      const tickets = await db.ticket.findMany({
        where: {
          price: ticket.price,
          stadiumId,
        },
      });
      return { price: ticket.price, tickets: [...tickets] };
    })
  );

  console.log("ticketsForEachPrice: ", ticketsForEachPrice);
  return ticketsForEachPrice;
};

// export const getTicketsGroupedByPrice = async (stadiumId) => {
//   const groupedtickets = await db.ticket.groupBy({
//     by: ["price"],
//     where: {
//       stadiumId,
//     },
//   });  
//   const ticketsForEachPrice = await Promise.all( 
//     groupedtickets.map(async (ticket) => {
//       const tickets = await db.ticket.findMany({
//         where: {
//           price: ticket.price,
//           stadiumId,
//         }
//       });
//       return {price: ticket.price, tickets: [...tickets]};
//     })
//   );

//   console.log("ticketsForEachPrice: ", ticketsForEachPrice);
//   return ticketsForEachPrice;
// };

export const getSingleStadium = async (id) => {
  const stadium = await db.stadium.findUnique({
    where: {
      id,
    },
    include: {
      images: true,      
    },
  });
  return stadium;
};

export async function getAllCarouselImages() {
  const imageFiles = await db.crouselImage.findMany();
  const imagePaths = imageFiles.map((file) => file.url);
  return imagePaths;
}
