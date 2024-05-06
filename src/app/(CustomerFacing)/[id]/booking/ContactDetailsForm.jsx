"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { IoIosArrowDown } from "react-icons/io";
import ContactForm from "../../_components/ContactForm";
import { useState } from "react";

export function ContactDetailsForm({ children }) {
  const [contactDetailsSubmitted, setContactDetailsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactDetailsSubmitted(true);
  };

  return (
    <Collapsible open>
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center w-full bg-red-500 p-3 text-white">
          <IoIosArrowDown className="mr-3 font-bold text-lg" />
          <p>Share your Contact Details</p>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ContactForm onSubmit={handleSubmit} />
        {children(contactDetailsSubmitted)}
      </CollapsibleContent>
    </Collapsible>
  );
}


// export function ContactDetailsForm() {
//   return (
//     <Collapsible open>
//       <CollapsibleTrigger className="w-full">
//         <div className="flex items-center w-full bg-red-500 p-3 text-white">
//           <IoIosArrowDown className="mr-3 font-bold text-lg" />
//           <p>Share your Contact Details</p>
//         </div>
//       </CollapsibleTrigger>
//       <CollapsibleContent>
//         <ContactForm></ContactForm>
//       </CollapsibleContent>
//     </Collapsible>
//   );
// }
