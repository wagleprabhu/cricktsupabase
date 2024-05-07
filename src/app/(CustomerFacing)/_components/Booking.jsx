import { getTicketsGroupedByPrice } from "../_actions/allActions";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import SeatGroup from "./SeatGroup";
import TermsAndConditions from "./TermsAndConditions";

export async function Booking({ description ,stadium }) {
  const groupedTickets = stadium ? await getTicketsGroupedByPrice(stadium.id) : null;

  return (
    <div className="my-8 p-4 sm:p-6 flex flex-col gap-4 w-full sm:w-11/12 md:w-3/4 lg:w-1/2">
      <p className="font-bold text-lg sm:text-xl">About</p>
      <p className="text-sm sm:text-base">
        {description}
      </p>
      <div>
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="w-full">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg sm:text-xl">Venue Layout</p>
              <IoIosArrowDown className="text-lg sm:text-xl" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-center">
            <Image
              height={400}
              width={400}
              src={stadium?.images[0].url}
              alt=""
              className="w-full sm:w-3/4 md:w-1/2 h-auto"
            ></Image>
          </CollapsibleContent>
        </Collapsible>
        <SeatGroup groupedTickets={groupedTickets || []} />
        <TermsAndConditions />
      </div>
    </div>
  );
}

// import { getTicketsGroupedByPrice } from "../_actions/allActions";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import SeatGroup from "./SeatGroup";
// import TermsAndConditions from "./TermsAndConditions";

// export async function Booking({ stadium }) {
//   const groupedTickets = stadium
//     ? await getTicketsGroupedByPrice(stadium.id)
//     : null;  
//   return (
//     <div className="my-8 p-2 flex flex-col gap-4 w-1/2">
//       <p className="font-bold">About</p>
//       <p>
//         Book tickets for Kolkata Knight Riders vs Punjab Kings IPL 2024 cricket
//         for Fri April 26th, 2024 at Eden Gardens Stadium on BookMyShow.
//         Experience Kolkata Knight Riders and Punjab Kings live at the Stadium
//         this year
//       </p>
//       <div>
//         <Collapsible>
//           <CollapsibleTrigger className="w-full">
//             <div className="flex justify-between">
//               <p className="font-bold text-lg">Venue Layout</p>
//               <IoIosArrowDown className="mt-1 font-bold text-lg" />
//             </div>
//           </CollapsibleTrigger>
//           <CollapsibleContent className="flex flex-col items-center">
//             <Image
//               height={400}
//               width={400}
//               src={stadium?.images[0].url}
//               alt=""
//             ></Image>
//           </CollapsibleContent>
//         </Collapsible>
//         <SeatGroup groupedTickets={groupedTickets || []} />
//         <TermsAndConditions />
//       </div>
//     </div>
//   );
// }
