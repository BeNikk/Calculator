export default function Output(props){
    return(
        <div className="relative bg-gray-200 w-[387px] h-[100px] rounded-md">
            <p className="absolute right-[0px] bottom-[10px] text-black ">{props.display}</p>

        </div>
    )
}