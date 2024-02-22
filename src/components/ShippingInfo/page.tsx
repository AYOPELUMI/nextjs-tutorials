'use client'
import {useSearchParams, usePathname} from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "../Input/page";
import axios from 'axios'
import data from '../lib/data.json'

interface Props {
	params: {
		id: string;
	};
}

export default function ShippingInfo() {

	const searchParams = useSearchParams();
    const modal = searchParams.get("editShippingInfoModal");
    const pathname = usePathname();
	const [shippingInfo, setShippingInfo] =useState<object>(data.user[0])

	console.log({shippingInfo})

	console.log({data})


	function handleShippingInfo  (name,value) {
		console.log("name :" +name,"value :" +value)
		setShippingInfo({
			...shippingInfo,
			[name]:value
		})
	}
	const handleBlChange = (e) => {
		let value = e.target.value
		handleShippingInfo("BL Number",value)
	}
	const handleContainerChange = (e) => {
		let value = e.target.value
		handleShippingInfo("Container Number",value)
	}
	const handleVesselNameChange = (e) => {
		let value = e.target.value
		handleShippingInfo("Vessel Name",value)
	}
	const handleShippingLineChange = (e) => {
		let value = e.target.value
		handleShippingInfo("Shipping Line",value)
	}

	return (
		<>
		{
			modal && 
			<div className="absolute left-0 right-0 bottom-0 top-0 bg-modal-bg z-50 overflow-auto backdrop-blur ">
				<div className="w-[37rem] h-screen right-0 absolute bg-white px-5 py-4 overflow-auto">
				<header className="w-full py-3 flex justify-between bg-inherit border-b-2 border-tahiti">
					<h3 className="font-500 text-base/[26px]">
						Edit Shipping Info
					</h3>
					<Link href={pathname}>
						<IoCloseSharp className='w-6 h-6 text-custom-text-color' />
					</Link>
				</header>
				<form className="flex flex-col gap-5 pt-9 w-full h-full">
				<Input 
						span="BL Number"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2 h-fit"
						type="text"
						value={shippingInfo.BL_Number}
						placeHolder="Please enter"
						onChange={handleBlChange}
					/>
					<Input 
						span="Container Number(s) Seperate mulriple with enter/Return Key"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2 h-fit"
						type="text"
						value={shippingInfo.Container_Number}
						placeHolder="Please enter"
						onChange={handleContainerChange}
					/>
					<Input 
						span="Shipping Line"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2 h-fit"
						type="text"
						value={shippingInfo.Shipping_Line}
						placeHolder="Please enter"
						onChange={handleShippingLineChange}
					/>
					<Input 
						span="Vessel Name"
						spanClass="font-500 text-sm/[26px] text-black"
						labelClass="flex flex-col w-full gap-2 h-fit"
						type="text"
						value={shippingInfo.Vessel_Name}
						placeHolder="Please enter"
						onChange={handleVesselNameChange}
					/>
					<button className=" mt-auto mb-auto w-80 py-3 place-self-center bg-custom-green text-white text-center text-sm/[18.2px] font-700 rounded-full outline-none border-none">Save & Continue</button>
				</form>
			</div>
			</div>

		}
		</>
	);
}
