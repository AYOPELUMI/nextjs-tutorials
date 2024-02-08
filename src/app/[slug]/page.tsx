
'use client'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { FaClipboardList, FaRegCheckCircle} from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
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
            <header className="fixed w-full flex justify-between bg-inherit py-5">
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
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-black flex items-center "><FaClipboardList /> Create New Shipment</li>
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-green flex items-center "> <FaRegCheckCircle /> Confirm Invoice Payment</li>
                        <li className="gap-2 py-2 bg-inherit border-b-2 border-tahiti font-400 text-sm/[26px] text-custom-red flex items-center "> <HiArchive /> Archive Shipment</li>
                    </ul> : null
                }
                </button>
    
            </header>
            <section className="w-full h-full pt-14">

            </section>
        </>
    );
}
