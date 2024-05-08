const { url } = require("inspector");

const randomUUID = require("crypto").randomUUID;
/*
model Ticket {
  id        String   @id @default(uuid())
  stand     String
  block     String
  price     Int
  stadiumId String
  stadium   Stadium  @relation(fields: [stadiumId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt    
  Booking   Booking? @relation(fields: [bookingId], references: [id], onDelete: NoAction)
  bookingId String?
}
*/
const stadiums = [
  {
    //0
    id: randomUUID(),
    location: "Eden Gardens: Kolkata",

  },
  {
    //1
    id: randomUUID(),
    location: "Narendra Modi Stadium: Ahmedabad",

  },
  {
    //2
    id: randomUUID(),
    location: "Wankhede Stadium: Mumbai",

  },
  {
    //3
    id: randomUUID(),
    location: "Chepauk Stadium: Chennai",

  },
  {
    //4
    id: randomUUID(),
    location: "M Chinnaswamy Stadium: Bangalore",

  },
  {
    //5
    id: randomUUID(),
    location: "Arun Jaitley Stadium: Delhi",

  },
  {
    //6
    id: randomUUID(),
    location: "Uppal Stadium: Hyderabad",

  },
  {
    //7
    id: randomUUID(),
    location: "Ekana Stadium: Lucknow",

  },
  {
    //8
    id: randomUUID(),
    location: "SMS Stadium: Jaipur",

  },
  {
    //9
    id: randomUUID(),
    location: "PCA Stadium: Mohali",

  },
  {
    //10
    id: randomUUID(),
    location: "Barsapara Stadium: Guwahati",

  },
  {
    //11
    id: randomUUID(),
    location: "HPCA Stadium: Dharamshala",

  },
  {
    //12
    id: randomUUID(),
    location: "Vizag Stadium: Visakhapatnam",

  },
];

const chidambaramStadium = [
  {
    //13
    id: randomUUID(),
    location: "MA Chidambaram Stadium: Chennai",

  },
]

const chidambaramImages = [
  {
    id: randomUUID(),
    url: "/stadium_images/chidambaram2.png",
    stadiumId: "1fdaa269-f567-4af6-81f0-85b288de35b6"
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chidambaram1.jpg",
    stadiumId: "1fdaa269-f567-4af6-81f0-85b288de35b6"
  },
]

const chidambaramTickets = [
  {
    id: randomUUID(),
    name: 'C Lower Stands',
    price: 1700,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'D Lower Stands',
    price: 1700,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'E Lower Stands',
    price: 1700,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'I Upper Stands',
    price: 2500,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'J Upper Stands',
    price: 2500,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'K Upper Stands',
    price: 2500,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'C Upper Stands',
    price: 3000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'D Upper Stands',
    price: 3000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'E Upper Stands',
    price: 3000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'I Lower Stands',
    price: 4000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'J Lower Stands',
    price: 4000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'K Lower Stands',
    price: 4000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'KMK Terrace',
    price: 6000,
    stadiumId: chidambaramStadium[0].id,
  },
  {
    id: randomUUID(),
    name: 'A Stand',
    price: 2300,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'D Corporate',
    price: 3300,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'B Stand',
    price: 3300,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'C Stand',
    price: 3300,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'Fan Terrace N',
    price: 4840,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'P1 Annex',
    price: 6050,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'E Executive Lounge',
    price: 9680,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'Pavilion Terrace',
    price: 10890,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  },
  {
    id: randomUUID(),
    name: 'P Corporate',
    price: 29040,
    stadiumId: "4429f7fa-3ead-4581-8084-758bec5d57ae",
  }
]


const tickets = [
  // barsapara
  {
    id: randomUUID(),
    name: 'BKT Tires South C 3rd Flr',
    price: 1600,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Luminous South D 3rd Flr',
    price: 1600,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'North Stand Blk G 3rd Flr',
    price: 1700,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Jio North Blk A 3rd Flr',
    price: 1700,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Super Royals W E 2nd Flr',
    price: 1700,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Super Royals W F 2nd Flr',
    price: 1700,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Ubon East Std B 2nd Flr',
    price: 1700,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'West Std Block E 1st Flr',
    price: 2300,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'West Std Block F 1st Flr',
    price: 2300,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Ubon East Std B 1st Flr',
    price: 2400,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'West E Grnd Flr',
    price: 2800,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'West F Grnd Flr',
    price: 2800,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Ubon East B Grnd Flr',
    price: 2800,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'BKT Tires South C Gd Flr',
    price: 2900,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Luminous South D Grnd Fl',
    price: 2900,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'North Block G Grnd Flr',
    price: 3500,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Jio North Blck A Grnd Flr',
    price: 3500,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'BKT Tires South C 2nd Flr',
    price: 3500,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'Luminous South D 2nd Flr',
    price: 3500,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box1 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box2 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box3 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box4 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box5 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box6 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box7 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box10 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box11 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box12 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box14 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box19 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box20 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box21 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box22 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box23 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'South Corp Box24 1st Flr',
    price: 8000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'ACA Member Box 1',
    price: 15000,
    stadiumId: stadiums[10].id,
  },
  {
    id: randomUUID(),
    name: 'BCCI Box 1',
    price: 15000,
    stadiumId: stadiums[10].id,
  },
  // wankhede
  {
    id: randomUUID(),
    name: "GAVASKAR STAND BLK G L1",
    price: 990,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GAVASKAR STAND BLK L L1",
    price: 990,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK F L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK G L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK H L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK I L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK J L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK K L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK L L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK A L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK B L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK C L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK D L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK E L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK F L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK I L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK J L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK K L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK A L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK B L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK C L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK D L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK A L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK B L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK C L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK D L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK E L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK F L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK G L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK Q L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK R L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK S L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK T L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK U L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK G L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK Q L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK R L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK S L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK T L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK U L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK H L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK X L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK Y L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK A L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK B L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK C L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK D L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK E L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK V L1",
    price: 4600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK W L1",
    price: 4600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK I L1",
    price: 4950,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK J L1",
    price: 4950,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK K L1",
    price: 4950,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GRAND STAND L4",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK N L2",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK O L2",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK P L2",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GRAND STAND L3",
    price: 1250,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK L L2",
    price: 1500,
    stadiumId: stadiums[2].id,
  },
  // eden garden
  {
    id: randomUUID(),
    name: "G 1 Block - DREAM 11 PAVL",
    price: 750,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "H 1 Block - JOY PAVILION",
    price: 750,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "B1 Block - BKT TIRES PAVL",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "C1 Block DREAM 11 PAV",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "D 1 Block - LUX COZI PAVL",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "F1 Block - JIO PAVILION",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "K1 block- JIO PAVILION",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "L1 Block - ACKO",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "D Block - LUX COZI PAVL",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "E Block - BKT TIRES PAVL",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "F Block - JIO PAVILION",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "G Block - DREAM 11 PAVL",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "H Block - JOY PAVILION",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "J Block - JOY PAVILION",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "C Block DREAM 11 PAVILION",
    price: 2000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "K block - JIO PAVILION",
    price: 2000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "B Block - BKT TIRES PAVL",
    price: 3000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "L Block - ACKO",
    price: 3000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Club House Upper Tier",
    price: 5000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Club House Lower Tier",
    price: 8000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "B PREMIUM BKT TIRES PAVL",
    price: 8500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav VIP Hosp S-6",
    price: 19000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav VIP Hosp S-7",
    price: 19000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C4",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C5",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C7",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C8",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C9",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  // ekana stadium
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 2",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 3",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "SBI Life Upper Block 4",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Astral Pipes Upper Block5",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Jio Upper Block 7",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Dangal TV Upper Block 8",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 9",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 10",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "BKT Tires Upper Block 1",
    price: 1000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Greenply Upper Block 11",
    price: 1000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 2",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 3",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "SBI Life Lower Block 4",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Astral Pipes Lower Block5",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Jio Lower Block 7",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Dangal TV Lower Block 8",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 9",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 10",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "BKT Tires Lower Block 1",
    price: 1500,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Greenply Lower Block 11",
    price: 1500,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Gallery A",
    price: 2000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Gallery B",
    price: 2000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Gallery Center",
    price: 2000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South PresidentialGallery",
    price: 3000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Platinum Lawn 1",
    price: 9000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Platinum Lawn 2",
    price: 9000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Premium Lounge",
    price: 10000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "UPCA Lounge",
    price: 12000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Director Lawn 1",
    price: 12000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Director Lawn 2",
    price: 12000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 1",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 2",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 3",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 4",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 5",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 6",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 7",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 8",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 9",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 10",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 8",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 9",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 10",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 11",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 12",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 13",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 14",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 15",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 1",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 2",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 3",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 4",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 5",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 6",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 7",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 16",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 17",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 18",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 19",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 20",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 21",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 22",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "IPL Lounge",
    price: 22000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Super Giants Lounge A",
    price: 25000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Super Giants Lounge B",
    price: 25000,
    stadiumId: stadiums[7].id,
  },
];
// model StadiumImage {
//   id        String  @id @default(uuid())
//   url       String
//   stadiumId String
//   stadium   Stadium @relation(fields: [stadiumId], references: [id], onDelete: Cascade)
// }
const carouselImages = [
  {
    id: randomUUID(),
    url: "/carouselImages/c1.avif",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c2.avif",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c3.avif",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c4.avif",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c5.jpeg",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c6.jpeg",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c7.jpeg",
  },
  {
    id: randomUUID(),
    url: "/carouselImages/c8.jpeg",
  }
]

const stadiumImages = [
  {
    id: randomUUID(),
    url: "/stadium_images/arun-jaitley1.jpg",
    stadiumId: stadiums[5].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/arun-jaitley2.png",
    stadiumId: stadiums[5].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/barsapara1.jpg",
    stadiumId: stadiums[10].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/barsapara2.png",
    stadiumId: stadiums[10].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chidambaram1.jpg",
    stadiumId: stadiums[3].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chidambaram2.png",
    stadiumId: stadiums[3].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chinnaswamy1.jpg",
    stadiumId: stadiums[4].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chinnaswamy2.png",
    stadiumId: stadiums[4].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/dharamshala1.png",
    stadiumId: stadiums[11].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/dharamshala2.png",
    stadiumId: stadiums[11].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/eden-gardens1.jpg",
    stadiumId: stadiums[0].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/eden-gardens2.png",
    stadiumId: stadiums[0].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/ekana-stadium1.jpg",
    stadiumId: stadiums[7].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/ekana-stadium2.jpg",
    stadiumId: stadiums[7].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/narendramodi1.jpg",
    stadiumId: stadiums[1].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/narendramodi2.png",
    stadiumId: stadiums[1].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/pca1.jpeg",
    stadiumId: stadiums[9].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/sms1.png",
    stadiumId: stadiums[8].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/vizag1.jpg",
    stadiumId: stadiums[12].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/wankhede1.jpg",
    stadiumId: stadiums[2].id

  },
  {
    id: randomUUID(),
    url: "/stadium_images/wankhede2.png",
    stadiumId: stadiums[2].id
  }
]

// export {stadiums, tickets, stadiumImages}
module.exports = { stadiums, tickets, stadiumImages,chidambaramImages, carouselImages, chidambaramStadium, chidambaramTickets };