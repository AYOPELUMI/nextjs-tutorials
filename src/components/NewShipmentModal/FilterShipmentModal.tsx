'use client'
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../Input/page";
import { CheckBox } from "../CheckBox/CheckBox";
interface Props {
	params: {
		id: string;
	};
}

export default function FilterShipmentModal() {
	
	const searchParams = useSearchParams();
    const modal = searchParams.get("filterShipmentModal");
    const pathname = usePathname();
	return (
		<>
		{modal && 
		<div className="absolute left-0 top-0 right-0 bottom-0 w-screen h-screen bg-modal-bg z-50 overflow-auto backdrop-blur ">
			<div className="w-3/6 h-screen bg-white px-5 py-4 overflow-auto">
				<header className="w-full flex justify-between bg-inherit border-b-2 border-tahiti">
					<h3 className="font-500 text-base/[26px]">
						Filter Shipments
					</h3>
					<Link href={pathname}>
						<IoCloseSharp className='w-6 h-6 text-custom-text-color' />
					</Link>
				</header>
				<form className="grid gap-5 pt-9 w-full">
					<Input 
						span="Customer Name"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>
					<Input 
						span="Commodity"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>
					<Input 
						span="BL Number"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>
					<label  className="flex gap-4 flex-wrap">
						<span className="font-500 text-sm/[26px] text-black w-full">Shipment Type</span>
						<br />
						<CheckBox 
							span="Import"
							inputClass="block"
							name="shipment Type"
							labelClass="p-2 bg-cutom-white border border-tahiti rounded-3xl gap-4 flex items-center"
							spanClass="text-sm/[15.32px] font-400 text-custom-black  text-nowrap "
						/>
						<CheckBox 
							span="Export"
							inputClass="block"
							name="shipment Type"
							spanClass="text-sm/[15.32px] font-400 text-custom-black cursor-pointer "
							labelClass="p-2 bg-cutom-white border border-tahiti rounded-3xl flex gap-4 items-center"

						/>
					</label>
					<label className="flex gap-4 flex-wrap">
						<span className="font-500 text-sm/[26px] text-black w-full">Shipment Mode</span>
						<br />
						<CheckBox 
							span="Air Freight"
							inputClass="block"
							name="shipment Mode"
							labelClass="p-2 px-3 bg-cutom-white border border-tahiti rounded-3xl gap-2 flex items-center h-fit"
							spanClass="text-sm/[15.32px] font-400 text-custom-black text-nowrap  "
						/>
						<CheckBox 
							span="Land Freight"
							inputClass="block"
							name="shipment Mode"
							spanClass="text-sm/[15.32px] font-400 text-custom-black cursor-pointer text-nowrap "
							labelClass="p-2 px-3 bg-cutom-white border border-tahiti rounded-3xl flex gap-2 items-center h-fit"

						/>
						<CheckBox 
							span="Sea Freight FCL"
							inputClass="block"
							name="shipment Mode"
							labelClass="p-2 px-3 bg-cutom-white border border-tahiti rounded-3xl gap-2 flex items-center h-fit"
							spanClass="text-sm/[15.32px] font-400 text-custom-black text-nowrap  "
						/>
						<CheckBox 
							span="Sea Freight LCL"
							inputClass="block"
							name="shipment Mode"
							spanClass="text-sm/[15.32px] font-400 text-custom-black cursor-pointer "
							labelClass="p-2  px-3 bg-cutom-white border border-tahiti rounded-3xl flex gap-2 items-center text-nowrap h-fit"

						/>							
					</label>
					<Input 
						span="Origin Port"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>
					<Input 
						span="Shipment Status"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2"
						type="text"
						placeHolder="Please enter"
					/>
					<label className="flex gap-4 flex-wrap">
						<span className="font-500 text-sm/[26px] text-black w-full">Shipment Status</span>
						<br />
						<CheckBox 
							span="In Progress"
							inputClass="block"
							name="shipment Status"
							labelClass="p-2 bg-cutom-white border border-tahiti rounded-3xl gap-4 flex items-center"
							spanClass="text-sm/[15.32px] font-400 text-custom-black  "
						/>
						<CheckBox 
							span="Completed"
							inputClass="block"
							name="shipment Status"
							spanClass="text-sm/[15.32px] font-400 text-custom-black cursor-pointer "
							labelClass="p-2 bg-cutom-white border border-tahiti rounded-3xl flex gap-4 items-center"

						/>
					</label>
					<button className=" mt-5 w-80 py-3 place-self-center bg-custom-green text-white text-center text-sm/[18.2px] font-700 rounded-full outline-none border-none">FILTER</button>
					<button className="w-80 py-3 place-self-center bg-white text-custom-red text-center text-sm/[18.2px] font-700 rounded-full outline-none border-none">Clear Filter</button>
				</form>
			
			</div>
		</div>}
		</>
	);
}
