'use client'
import { Input } from "../Input/page";
import {useState} from "react"

interface Props {
	params: {
		id: string;
	};
}

export default function SelectOptions() {
	const [isActive, setIsActive] =useState(true)

	return (
		<>
			<button className=" w-3/5 py-2 rounded-md border focus:border-tahiti hover: border-tahiti invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none  focus:ring-1 focus:ring-tahiti shadow-sm placeholder-custom-black
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-custom-white p-3 text-sm/[26px] font-400 text-custom-black px-3">
				{isActive ? <ul role="listbox">
					<li role="option" className="w-full">
						<Input 
						type="radio"
						labelClass=""
						span="Item 1" />
					Item 1
				</li>
				<li>
					Item 2
				</li>
				<li>
					Item 3
				</li>
				<li>
					Item 4
				</li>
				<li>
					Item 5
				</li>
					</ul>
					: null}
			</button>
		</>
	);
}
