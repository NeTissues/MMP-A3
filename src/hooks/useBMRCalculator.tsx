import { useSetRecoilState } from "recoil"
import { bmrCountState } from "./atom"

export const useBMRCalculator= () => {
    
    const setBMRCount=useSetRecoilState(bmrCountState)
    
    return(weight:string,height:number,age:number,gender:number,activityLevel:number,)=>{
        let result = (10*parseFloat(weight))+(6.25*height)-(5*age)+(gender===1?-161:5)
        setBMRCount(result)
        return result
    }
}