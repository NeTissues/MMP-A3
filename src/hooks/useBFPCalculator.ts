import { useSetRecoilState } from "recoil";
import { bfpCountState } from "./atom";

export const useBFPCalculator = () => {
    const setBFPCount = useSetRecoilState(bfpCountState)

    return (weight:string,height:number,age:number,gender:number)=>{
        let result = (1.20 * (parseFloat(weight)/((height/100)*(height/100))) + 0.23 * age - (gender===1?5.4:16.2)).toFixed(2)
        setBFPCount(parseFloat(result))
        return parseFloat(result)
    }
}