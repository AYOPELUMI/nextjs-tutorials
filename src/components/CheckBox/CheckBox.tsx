import React, { useState } from 'react';
import { FC } from 'react';


type Props = {
  span: string,
	name: string,
	inputClass : string,
	spanClass : string
  labelClass: string
}

export const CheckBox :FC<Props> = (Props) => {
  const [isChecked, setIsChecked] = useState<Boolean>(false)
  const handleCheck = () => {
      setIsChecked(!isChecked)
  }
  return(
    <label className={Props.labelClass}>
      <input type="radio" className={Props.inputClass} name={Props.name}/>
      <span className={Props.spanClass} onClick={handleCheck}>
        {Props.span}
      </span >
    </label>
  )
}
