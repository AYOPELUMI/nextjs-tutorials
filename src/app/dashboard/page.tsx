'use client'
import { FaPlus } from "react-icons/fa6";
interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<header className='flex  justify-between	 w-screen h-fit bg-custom-white py-3 px-4'>
				<div>
					<h1 className="text-black text-xl/6 font-500 w-fit">
						Shipment
					</h1>
					<p className="text-custom-black font-400 text-sm/4">
						All your shipment bookings
					</p>
				</div>
				<button className=" flex  items-center gap-2 row-span-2 rounded-3xl justify-self-end bg-custom-green text-white w-40 font-700 text-xs px-2">
				<FaPlus className="text-lg font-600"/>
					CREATE SHIPMENT
				</button>
			</header>
			<section className="w-full h-full px-3">
				<div className="w-full py-5 px-3 bg-white flex justify-between">
						<ul className="grid grid-cols-4 grid-flow-row pt-6 gap-1 list-none">
							<li className="relative px-4 before:content-[` `] before:w-4/5 before:h-px  before:bg-black before:absolute before:top-full">All shipments</li>
							<li>In Progress</li>
							<li>Completed</li>
							<li>Archived</li>
						</ul>
					<button className="rounded-3xl bg-custom-white text-custom-text-color w-32 py-1 text-xs px-1">
						filter button
					</button>
				</div>
				<div className='grid w-full px-6'>
					<div className=" w-full grid grid-cols-7 bg-custom-white py-4 px-3 place-items-start items-center">
						<h5 className="text-sm font-normal text-black">Booking ID</h5>
						<h5 className="text-sm font-normal text-black">Customer Name</h5>
						<h5 className="text-sm font-normal text-black">Commodity</h5>
						<h5 className="text-sm font-normal text-black">Origin</h5>
						<h5 className="text-sm font-normal text-black">Destination</h5>
						<h5 className="text-sm font-normal text-black">Shipment Type/Mode</h5>
						<h5 className="text-sm font-normal text-black">Status</h5>
					</div>
					<div className=" w-full grid grid-cols-7 bg-white py-3 px-3 place-items-start items-center gap-2">
						<h5 className="text-sm font-normal text-black text-base/6">28460</h5>
						<h5 className="text-sm font-normal text-black text-base/6">Ayodeji Pelumi</h5>
						<h5 className="text-sm font-normal text-black text-base/6">Lithium Battery</h5>
						<h5 className="text-sm font-normal text-black text-base/6">MMA,NGA</h5>
						<h5 className="text-sm font-normal text-black text-base/6">Amsterdam</h5>
						<div className="text-sm font-normal text-black flex gap-1 w-fit items-center flex-wrap">
							<div className="rounded-xl bg-tahiti text-metal w-fit px-2 py-2  font-500 text-xs/3 h-fit">IMPORT</div>
							<div className="rounded-3xl bg-tahiti text-metal w-fit px-2 py-2  font-500 text-xs/3 h-fit ">SEA FREIGHT FCL</div>
						</div>
						<div className="text-sm font-xs/3 font-500 py-1 px-2 text-custom-green rounded-3xl bg-custom-green-bg">COMPLETED</div>
					</div>

				</div>
			</section>
		</>
	);
}
