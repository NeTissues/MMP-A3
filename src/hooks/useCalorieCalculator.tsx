import { useSetRecoilState } from "recoil"
import { calorieCountState } from "./atom"

export const useCalorieCalculator= () => {
    
    const setCalorieCount=useSetRecoilState(calorieCountState)
    
    return(weight:string,height:number,age:number,gender:number,activityLevel:number,)=>{
        let genderVal = 0
        let activityLevelVal = 0

        if(gender===1){
            genderVal=-161
            activityLevelVal=activityLevel*331
        }else{
            genderVal=5
            activityLevelVal=activityLevel*359
        }
        
        let result = (10*parseFloat(weight))+(6.25*height)-(5*age)+genderVal+activityLevelVal
        setCalorieCount(result)
        return result
    }
}