import { useSetRecoilState } from "recoil";
import { bmiCountState } from "./atom";

export const useBMICalculator = () => {
    const setBMICount = useSetRecoilState(bmiCountState)

    return (weight:string,height:number,)=>{
        let result = (parseFloat(weight)/((height/100)*(height/100))).toFixed(2)
        setBMICount(parseFloat(result))
        return parseFloat(result)
    }
}