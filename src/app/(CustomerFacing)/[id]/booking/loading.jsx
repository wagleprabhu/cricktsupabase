// import { Loader2 } from "lucide-react";
import Image from "next/image";
import loader from "/public/generalAssets/loader.gif";

export default function AdminLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={loader} alt="loader" height={400} width={400}/>
    </div>
  );
}