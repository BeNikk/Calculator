import { useEffect } from "react";
import Calculator from "./components/Calculator";

function App(){
  
  return(
    <>
    <p className="text-4xl font-bold ml-[45%]">Calculator</p>
    <div className="flex items-center justify-center h-screen">
      <Calculator/>
    </div>
    </>

  )

}
export default App;
