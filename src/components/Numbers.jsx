import { useEffect } from "react";
let operator,num2;
export default function Numbers(props){
        
        // This code runs when `props.display` change

        useEffect(()=>{
            if(typeof(props.display=="string")){
                num2=props.display
            }

        },[props.display])
    function changeDisplay(){
        if(props.display!=0 && typeof(props.display)=="number"){
            props.setDisplay(10*props.display+props.number);

        }
        else if(props.display==0 && typeof(props.display)=="number"){
            props.setDisplay(props.number);
        
        }
        else if(typeof(props.display)=="string"){
             operator=props.display;
             console.log("this is operator",operator);
             props.setDisplay(props.number);
             
             

        }
    }

    return(
        <div className=" cursor-pointer rounded-full bg-gray-400 p-4 m-4 w-12 h-12 flex items-center justify-center" onClick={changeDisplay}>
            {props.number}
        </div>
    )
} 
export {operator,num2};