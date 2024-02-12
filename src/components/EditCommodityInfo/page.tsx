'use client'
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../Input/page";

interface Props {
	params: {
		id: string;
	};
}

export default function EditCommodityInfo() {
	
	const searchParams = useSearchParams();
    const modal = searchParams.get("editCommodityInfoModal");
    const pathname = usePathname();
	return (
		<>
		{
			modal && 
				<div className="absolute left-0 top-0 right-0 bottom-0 w-screen h-screen bg-modal-bg z-50 overflow-auto backdrop-blur ">
				<div className="w-2/5 h-screen right-0 absolute bg-white px-5 py-4 overflow-auto">
				<header className="w-full py-3 flex justify-between bg-inherit border-b-2 border-tahiti">
					<h3 className="font-500 text-base/[26px]">
						Edit Commodity Info
					</h3>
					<Link href={pathname}>
						<IoCloseSharp className='w-6 h-6 text-custom-text-color' />
					</Link>
				</header>
				<form className="grid gap-5 pt-9 w-full">
				<Input 
						span="Commodity/Package Name"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>
					<Input 
						span="Package Type (optional)"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>	
					<button className=" mt-5 w-80 py-3 place-self-center bg-custom-green text-white text-center text-sm/[18.2px] font-700 rounded-full outline-none border-none">Save & Continue</button>
				</form>
			</div>
				</div>
		}				
		</>
	);
}
