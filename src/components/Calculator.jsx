import { useState } from "react";
import Operator from "./Functions";
import Numbers from "./Numbers";
import Output from "./Output";

export default function Calculator(){
    const [display,setDisplay]=useState(0);
    return(




        <div className="relative w-96 h-[600px] bg-black">
            <div className="absolute top-[100px]">
                <Output display={display}  />

            </div>
            <div className="absolute top-[240px] m-4">
                <div className="flex ">
                    <Operator operator={"AC"} display={display} setDisplay={setDisplay}/>
                    <Operator operator={"+"} display={display} setDisplay={setDisplay}/>
                    <Operator operator={"-"} display={display} setDisplay={setDisplay}/>


                </div>
                
            </div>
            <div className="absolute top-[240px] left-[255px] m-4">

                    <div className="flex-col">
                        <Operator operator={"/"} display={display} setDisplay={setDisplay}/>
                        <Operator operator={"*"} display={display} setDisplay={setDisplay}/>
                        <Operator operator={"%"} display={display} setDisplay={setDisplay}/>
                        <Operator operator={"="} display={display} setDisplay={setDisplay}/>
                    </div>
                </div>
            <div className="absolute top-[300px]">
            <div className="flex m-4">
            <Numbers number={1} display={display} setDisplay={setDisplay}/>
            <Numbers number={2} display={display} setDisplay={setDisplay}/>
            <Numbers number={3} display={display} setDisplay={setDisplay}/>

            </div>

            </div>
            <div className="absolute top-[360px]">
            <div className="flex m-4">
            <Numbers number={4} display={display} setDisplay={setDisplay}/>
            <Numbers number={5} display={display} setDisplay={setDisplay}/>
            <Numbers number={6} display={display} setDisplay={setDisplay}/>

            </div>

            </div>
            <div className="absolute top-[420px]">
            <div className="flex m-4">
               
            <Numbers  number={7} display={display} setDisplay={setDisplay}/>
            <Numbers number={8} display={display} setDisplay={setDisplay}/>
            <Numbers number={9} display={display} setDisplay={setDisplay}/>
            </div>

            </div>
            <div className="absolute top-[500px]">
            <div className="flex ml-24">

            <Numbers number={0} display={display} setDisplay={setDisplay}/>
            </div>

            </div>

        </div>
    )
}