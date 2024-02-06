import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-2 bg-white">
      <div className="size-fit rounded-xl border border-transparent p-1 px-6 text-metal bg-tahiti font-bold ">
        IMPORT
      </div>
      <div className="size-fit rounded-sm border border-transparent p-1 px-6 text-metal bg-tahiti font-bold">
        SEA FREIGHT FCL
      </div>
      <div className="size-fit rounded-sm border border-transparent p-1 px-8 text-custom-green bg-custom-green-bg font-bold">
        COMPLETED
      </div>
    </div>
 
  );
}
