
'use client'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { FaClipboardList, FaRegCheckCircle} from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { PiCrosshair } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { BsCalendarWeekFill } from "react-icons/bs";
import { RiShip2Line } from "react-icons/ri";
import { CiViewBoard } from "react-icons/ci";
type Props = {
    params: {
        slug: string;
    }
};

export default function Page({
    params
} : Props) {
    const [actionOptions, setActionOptions] = useState(false)
    const { slug } = params;

    const handleActionClick = () => {
        setActionOptions(!actionOptions)
    }

    return (
        <>
            <header className="fixed top-0 right-0 left-0 flex justify-between bg-inherit py-5">
                <div className="flex gap-2 items-center">
                    <FaArrowLeftLong className="text-custom-text-color w-3 h-4 bg bg-inherit text"/>
                    <h3 className="w-fit text-black text-xl/[24px]">Shipment Details</h3>
                    <div className="w-fit px-2 py-1  font-500 text-xs/[15.6px] bg-custom-text-color-black-bg text-custom-text-color-black rounded-3xl">ID : PMT-1562792773536</div>
                </div>
                <button  onClick={handleActionClick} className=" relative flex bg-white px-2 py-2 font-500 text-custom-text-color items-center gap-2 text-sm/[15.32px]">
                    Action
                <BsThreeDotsVertical />
                {
                    actionOptions ?
                    <ul className="top-full right-0  mt-3 absolute w-52 h-fit px-3 bg-white flex flex-col">
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-black flex items-center "> <IoMdAdd /> Create New Shipment</li>
                        <li className=" gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-black flex items-center "><FiEdit2 /> Edit Shipment</li>
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-black flex items-center text-nowrap "><FaClipboardList /> Create New Shipment</li>
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-green flex items-center text-nowrap"> <FaRegCheckCircle /> Confirm Invoice Payment</li>
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-red flex items-center text-nowrap"> <HiArchive /> Archive Shipment</li>
                    </ul> : null
                }
                </button>
    
            </header>
            <section className="w-full h-full pt-24 px=5 bg-white">
                <div className="flex flex-col w-full bg-custom-white px-7 py-5">
                    <div className="flex gap-3">
                        <div className=" bg-custom-brown-bg text-custom-brown text-xs/[15.6px] p-2 rounded-3xl font-500">
                            EXPORT
                        </div>
                        <div className="bg-custom-purple-bg text=custom-purple text-xs/[15.6px] p-2 rounded-3xl font-500">
                            LAND FREIGHT
                        </div>
                    </div>
                    <div className="flex pt-4 gap-4">
                        <div className="grid grid-flow-col">
                            <TiLocationOutline className="row-span-2 w-8 h-8"/>
                            <h4 className="text-xs/[13.13px] text-custom-black font-400">ORIGIN PORT</h4>
                            <strong className="text-lg/[19.69px] text-black font-400">Tema, GH</strong>
                        </div>
                        <div className="w-36">

                        </div>
                        <div className="grid grid-flow-col">
                            <PiCrosshair className="row-span-2 w-8 h-8"/>
                            <h4 className="text-xs/[13.13px] text-custom-black font-400">DESTINATION PORT</h4>
                            <strong className="text-lg/[19.69px] text-black font-400">Amsterdam, NL</strong>
                        </div>
                    </div>
                    <div className="flex pt-5 gap-60">
                            <div className="grid grid-flow-row items-center">
                                <RiShip2Line className="bg-custom-white w-4 h-4"/>
                                <h4 className="text-sm/[26px] text-custom-black font-400">Shipper</h4>
                                <strong className=" col-span-2 text-lg/[26px] text-black font-400">3 Six 5 Logistics</strong>
                            </div>
                            <div className="grid grid-flow-row items-center">
                                <IoIosContact className="bg-custom-white w-4 h-4"/>
                                <h4 className="text-sm/[26px] text-custom-black font-400">Consignee</h4>
                                <strong className="col-span-2 text-lg/[26px] text-black font-400">MRT Shipper</strong>
                            </div>
                            <div className="grid grid-flow-row items-center">
                                <BsCalendarWeekFill className="bg-custom-white w-4 h-4"/>
                                <h4 className="text-sm/[26px] text-custom-black font-400">Booking Date</h4>
                                <strong className="col-span-2 text-lg/[26px] text-black font-400">Jan 18, 2023</strong>
                            </div>
                    </div>
                </div>
                <section>
                    <aside>
                        <header>
                        <ul className="flex  gap-1 list-none">
							<li className="relative px-4 py-2 before:content-[` `] before:w-4/5 before:h-px  before:bg-black before:absolute before:top-full">Shipment Overview</li>
							<li>Vendor Payments</li>
							<li>Invoices</li>
							<li>Documents</li>
						</ul>
                        </header>
                        <section className="pt-6">
                            <div className="grid">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1 text-metal w-fit">
                                    <CiViewBoard className="inline-block  -rotate-90 w-4 h-4 "/>
                                        <strong className="text-sm[26px] font-400 text-nowrap">Commodity Info</strong>
                                    </div>
                                    <hr className="w-3/5 h-px bg-custom-white"/>
                                    <div className="flex items-center gap-1 text-custom-green w-fit">
                                        <FiEdit2 />
                                        <strong className="text-sm[26px] font-400 text-nowrap">Edit Info</strong>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </section>
            </section>
        </>
    );
}
