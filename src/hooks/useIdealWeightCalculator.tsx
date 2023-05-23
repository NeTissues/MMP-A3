import { useSetRecoilState } from "recoil"
import { idealWeightState } from "./atom"

export const useIdealWeightCalculator= () => {
    
    const setIdealWeight=useSetRecoilState(idealWeightState)
    
    return(height:number,gender:number)=>{
        let heightVal = height/100
        let result = 0;
        
        if(gender===1){
            result=22*((heightVal-0.1)*(heightVal-0.1))
        }else{
            result=22*((heightVal)*(heightVal))
        }
        
        setIdealWeight(result)
        return parseFloat(result.toFixed(2))
    }
}