'use client'
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
interface Props {
	params: {
		id: string;
	};
}

export default function NewShipmentModal() {
	
	const searchParams = useSearchParams();
    const modal = searchParams.get("newShipmentModal");
    const pathname = usePathname();
	return (
		<>
		{modal && 
		<div className="absolute left-0 top-0 right-0 bottom-0 w-screen bg-modal-bg z-50 overflow-auto backdrop-blur ">
			<div className="w-3/6 h-screen bg-white">
			<Link href={pathname}>
			<IoCloseSharp className='w-6 h-6 text-custom-text-color' />
            </Link>
			</div>
		</div>}
		</>
	);
}
