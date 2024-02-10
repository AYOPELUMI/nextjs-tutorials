'use client'

import { FC } from "react";

type Props = {
	span: string,
	type: string,
	placeHolder:string,
	inputClass : string,
	labelClass: string,
	spanClass : string
}

export const Input :FC<Props> = (Props) => {


	return (
		<>
			<label className={Props.labelClass}>
				<span className={Props.spanClass}>
					{Props.span}
				</span>
				<input type={Props.type} name="" id="" className={Props.inputClass} placeholder={Props.placeHolder} className=" invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none  focus:ring-1 focus:ring-tahiti shadow-sm placeholder-custom-black
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-custom-white p-3 text-sm/[26px] font-400 text-custom-black px-3 py-2 rounded-md border focus:border-tahiti hover: border-tahiti"/>
			</label>
		</>
	)
}
