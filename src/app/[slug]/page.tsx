
'use client'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { FaClipboardList, FaRegCheckCircle} from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { PiCrosshair, PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { BsCalendarWeekFill, BsFillCheckCircleFill } from "react-icons/bs";
import { RiShip2Line } from "react-icons/ri";
import { CiViewBoard } from "react-icons/ci";
import { TbInfoSquare } from "react-icons/tb";
import { MdFormatListBulleted } from "react-icons/md";
type Props = {
    params: {
        slug: string;
    }
};

export default function Page({
    params
} : Props) {
    const [actionOptions, setActionOptions] = useState(false)
    const [logisticsStepoptions, setLogisticsStepoptions] = useState(false)
    const { slug } = params;

    const handleActionClick = () => {
        setActionOptions(!actionOptions)
    }
    const handleStepOptions = () => {
        setLogisticsStepoptions(!logisticsStepoptions)
    }

    return (
        <>
            <header className="w-full  flex justify-between bg-inherit py-5">
                <div className="flex gap-2 items-center">
                    <FaArrowLeftLong className="text-custom-text-color w-3 h-4 bg bg-inherit text"/>
                    <h3 className="w-fit text-black text-xl/[24px]">Shipment Details</h3>
                    <div className="w-fit px-2 py-1  font-500 text-xs/[15.6px] bg-custom-text-color-black-bg text-custom-text-color-black rounded-3xl">ID : PMT-1562792773536</div>
                </div>
                <button  onClick={handleActionClick} className=" relative flex bg-white px-2 py-2 font-500 text-custom-text-color items-center gap-2 text-sm/[15.32px]">
                    Action
                <BsThreeDotsVertical />
                { actionOptions ?
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
            <section className="w-full h-full px-7 bg-white">
                <div className="flex flex-col w-full bg-custom-white px-8 py-7">
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
                <section className="flex">
                    <aside>
                        <header>
                        <ul className="flex  gap-1 list-none">
							<li className="relative px-4 py-2 before:content-[` `] before:w-4/5 before:h-px  before:bg-black before:absolute before:top-full">Shipment Overview</li>
							<li>Vendor Payments</li>
							<li>Invoices</li>
							<li>Documents</li>
						</ul>
                        </header>
                        <section className=" flex flex-col gap-6 pt-6 pr-5">
                            <div className="grid grid-cols-3 gap-12">
                                <div className="flex justify-between items-center col-span-3 -mb-8">
                                    <div className="flex items-center gap-1 text-metal w-fit">
                                    <CiViewBoard className="inline-block  -rotate-90 w-4 h-4 "/>
                                        <h4 className="text-sm[26px] font-400 text-nowrap">Commodity Info</h4>
                                    </div>
                                    <hr className="w-3/5 h-px bg-custom-white"/>
                                    <div className="flex items-center gap-1 text-custom-green w-fit">
                                        <FiEdit2 />
                                        <h4 className="text-sm[26px] font-400 text-nowrap">Edit Info</h4>
                                    </div>
                                </div>
                                <div className="grid font-400">
                                    <p className="text-custom-black text-sm/[26px]">Commodity/Package Name</p>
                                    <h4 className="text-black text-base/[26px]">Lithium Battery</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Package Type</p>
                                    <h4 className="text-black text-base/[26px]">Box</h4> 
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Package Weight(Net)</p>
                                    <h4 className="text-black text-base/[26px]">11 Tonnes</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Pacjage Weight(Gross)</p>
                                    <h4 className="text-black text-base/[26px]">13 Tonnes</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Cargo Value</p>
                                    <h4 className="text-black text-base/[26px]">$23,000.00</h4>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-12">
                                <div className="flex justify-between items-center col-span-3 -mb-8">
                                    <div className="flex items-center gap-1 text-metal w-fit">
                                    <CiViewBoard className="inline-block  -rotate-90 w-4 h-4 "/>
                                        <h4 className="text-sm[26px] font-400 text-nowrap">Shipping Info</h4>
                                    </div>
                                    <hr className="w-3/5 h-px bg-custom-white"/>
                                    <button className="flex items-center gap-1 text-custom-green w-fit">
                                        <FiEdit2 />
                                        <h4 className="text-sm[26px] font-400 text-nowrap">Edit Info</h4>
                                    </button>
                                </div>
                                <div className="grid font-400">
                                    <p className="text-custom-black text-sm/[26px]">BL Number</p>
                                    <h4 className="text-black text-base/[26px]">0001-A0M6-M028</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">PContainer Number</p>
                                    <h4 className="text-black text-base/[26px]">0001-A0M6-0002</h4> 
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">No of Container</p>
                                    <h4 className="text-black text-base/[26px]">2</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Container Size</p>
                                    <h4 className="text-black text-base/[26px]">20ft</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Container Type</p>
                                    <h4 className="text-black text-base/[26px]">High Cube</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Temperature</p>
                                    <h4 className="text-black text-base/[26px]">-</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Shipping Line</p>
                                    <h4 className="text-black text-base/[26px]">B Freight System Inc dba BFS</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Vessel Name</p>
                                    <h4 className="text-black text-base/[26px]">OCEAN ODYSSEY</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Deprature Date</p>
                                    <h4 className="text-black text-base/[26px]">January 10, 2024</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">Transit Time</p>
                                    <h4 className="text-black text-base/[26px]">02:00 hrs</h4>
                                </div>
                                <div className="grid gap-1 font-400">
                                    <p className="text-custom-black text-sm/[26px]">ETA</p>
                                    <h4 className="text-black text-base/[26px]">January 20,2024</h4>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-12 ">
                                <div className="flex justify-between items-center col-span-3 -mb-8">
                                    <div className="flex items-center gap-1 text-metal w-fit">
                                    <TbInfoSquare className="inline-block  -rotate-90 w-4 h-4 "/>
                                        <h4 className="text-sm[26px] font-400 text-nowrap">Service Info</h4>
                                    </div>
                                    <hr className="w-3/5 h-px bg-custom-white"/>
                                    <button className="flex items-center gap-1 text-custom-green w-fit">
                                        <FiEdit2 />
                                        <h4 className="text-sm[26px] font-400 text-nowrap">Edit Info</h4>
                                    </button>
                                </div>
                                <div className="grid font-400">
                                    <p className="text-custom-black text-sm/[26px]">Service</p>
                                    <h4 className="text-black text-base/[26px]">First Mile Last Mile</h4>
                                </div>
                                <div className="grid font-400">
                                    <p className="text-custom-black text-sm/[26px]">Pickup Location</p>
                                    <h4 className="text-black text-base/[26px]">2464 Royal Ln. Mesa,Newq Jersey</h4> 
                                </div>
                                <div className="grid font-400">
                                    <p className="text-custom-black text-sm/[26px]">Delivery Location</p>
                                    <h4 className="text-black text-base/[26px]">1901 Thornridge Cir.Shiloh, Hawaii</h4>
                                </div>
                                <div className="grid font-400">
                                    <p className="text-custom-black text-sm/[26px]">Pacjage Weight(Gross)</p>
                                    <h4 className="text-black text-base/[26px]">13 Tonnes</h4>
                                </div>
                            </div>
                        </section>
                    </aside>
                    <aside className="w-fit px-4 py-3 h-fit bg-custom-white">
                        <header className="w-full px-1 text-metal flex gap-2">
                            <MdFormatListBulleted className="font-500 w-4 h-4"/>
                            <h4 className="font-500 text-sm/[15.32px]">Logistics Steps</h4>
                        </header>
                        <section className="w-full flex ">
                            <div className="flex gap-4 items-center">
                                <h4 className="p-1 text-custom-green bg-custom-green-bg rounded-lg text-sm/[15.32px]">01</h4>
                                <div>
                                    <h3 className="text-base/[26px] text-black font-500 text-nowrap">Logistics Step name</h3>
                                    <p className="text-sm/[15.32px] text-custom-black text-nowrap">Step Sescription</p>
                                </div>
                                <button className=" ml-12 flex gap-2 relaive">
                                    <BsFillCheckCircleFill  className="text-custom-green"/>
                                    <PiDotsThreeOutlineFill onClick={handleStepOptions} className="relative cursor-pointer"/>
                                    {
                                        logisticsStepoptions ? <ul className="">
                                            <li>Complete Step</li>
                                            <li>View Updates</li>
                                            <li>Send an Updates</li>
                                        </ul> : null
                                    }
                                </button>

                            </div>
                        </section>
                    </aside>
                </section>
            </section>
        </>
    )
}
