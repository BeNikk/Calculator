import { operator,num2 } from "./Numbers";
let num1;
export default function Operator(props){
    function operating(){
        if(props.operator=="AC"){
            props.setDisplay(0);
            
        }
        if(props.operator!="=" &&props.operator!="AC"){
            num1=props.display;
            props.setDisplay(props.operator);
            console.log(num1)
            
            

        }
        else if(props.operator=="="){
            console.log("I am num2",num2);
            if(operator=="+"){
                props.setDisplay(num1+num2);
            }
            if(operator=="-"){
                props.setDisplay(num1-num2);
            }
            if(operator=="*"){
                props.setDisplay(num1*num2);
            }
            if(operator=="/"){
                props.setDisplay(num1/num2)
            }

        }

         

        

    }
    

    return(
        <div className="cursor-pointer rounded-full bg-orange-400 p-4 m-4 w-12 h-12 flex items-center justify-center" onClick={operating}>
        {props.operator}
    </div>
    )
}
export {num1};