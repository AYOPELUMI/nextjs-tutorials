'use client'

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<header className='grid grid-cols-2  grid-flow-col w-screen h-fit bg-custom-white gap-1 py-3'>
				<h1>
					Shipments
				</h1>
				<p>
					All your shipment bookings
				</p>
				<button className="row-span-2 rounded-3xl justify-self-end bg-custom-green text-white w-40 py-2 text-xs px-2">
					CREATE SHIPMENT
				</button>
			</header>
			<section className="w-full h-full">
				<div className="w-full py-3 px-3 bg-white flex justify-between">
						<ul className="grid grid-cols-4 grid-flow-row pt-6 gap-1 list-none">
							<li className="relative before:content-[` `] before:w-full before:h-1  before:bg-black before:absolute before:top-full">All shipments</li>
							<li>In Progress</li>
							<li>Completed</li>
							<li>Archived</li>
						</ul>
					<button className="rounded-3xl bg-custom-white text-custom-text-color w-32 py-1 text-xs px-1">
						filter button
					</button>
				</div>
				<div className='grid grid-flow-col'>
					<div className=" w-full grid grid-cols-7 bg-custom-white py-4 px-3 place-items-center">
						<h5 className="text-sm font-normal text-black">Booking ID</h5>
						<h5 className="text-sm font-normal text-black">Customer Name</h5>
						<h5 className="text-sm font-normal text-black">Commodity</h5>
						<h5 className="text-sm font-normal text-black">Origin</h5>
						<h5 className="text-sm font-normal text-black">Destination</h5>
						<h5 className="text-sm font-normal text-black">Shpment Type/Mode</h5>
						<h5 className="text-sm font-normal text-black">Status</h5>
					</div>
					<div className=" w-full grid grid-cols-7 bg-white py-4 px-3 place-items-center">
						<h5 className="text-sm font-normal text-black">28460</h5>
						<h5 className="text-sm font-normal text-black">Ayodeji Pelumi</h5>
						<h5 className="text-sm font-normal text-black">Lithium Battery</h5>
						<h5 className="text-sm font-normal text-black">MMA,NGA</h5>
						<h5 className="text-sm font-normal text-black">Amsterdam</h5>
						<h5 className="text-sm font-normal text-black">Shpment Type/Mode</h5>
						<h5 className="text-sm font-normal text-black">Status</h5>
					</div>

				</div>
			</section>
		</>
	);
}
