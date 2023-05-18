import { useSetRecoilState } from "recoil"
import { calorieCountState } from "./atom"

export const useCalorieCalculator= () => {
    
    const setCalorieCount=useSetRecoilState(calorieCountState)
    
    return(weight:string,height:number,age:number,gender:number,activityLevel:number,)=>{
        let result = (10*parseFloat(weight))+(6.25*height)-(5*age)+(gender===1?-161:5)
        setCalorieCount(result)
        return result
    }
}