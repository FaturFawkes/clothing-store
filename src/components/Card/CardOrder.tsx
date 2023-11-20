import { useState } from "react"
import Button from "../Button"

const CardOrder = (props: any) => {  
  return (
    <div className="card w-100 bg-white shadow-xl">
      <ul className="steps">
        <li className="step step-primary">Identitas</li>
        <li className={props.step > 1? "step step-primary": "step"}>Detail Pesanan</li>
        <li className={props.step > 2? "step step-primary": "step"}>Alamat</li>
        <li className={props.step > 3? "step step-primary": "step"}>Metode Pembayaran</li>
      </ul>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Identitas Pemesan</h2>
      </div>
        {props.component}
    </div>
  )
}

export default CardOrder