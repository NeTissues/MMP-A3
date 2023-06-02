import { useSetRecoilState } from "recoil";
import { tdeeCountState } from "./atom";

export const useTDEECalculator = () => {

    const setTDEECount = useSetRecoilState(tdeeCountState)

    return (weight:string,height:number,age:number,gender:number,activityLevel:number,)=>{
        let result=0
        switch (activityLevel){
            case 1: result = parseInt((((10*parseFloat(weight))+(6.25*height)-(5*age)+(gender===1?-161:5))*1.375).toString())
                    break
            case 2: result = parseInt((((10*parseFloat(weight))+(6.25*height)-(5*age)+(gender===1?-161:5))*1.55).toString())
                    break
            case 3: result = parseInt((((10*parseFloat(weight))+(6.25*height)-(5*age)+(gender===1?-161:5))*1.725).toString())
                    break
        }
        setTDEECount(result)
        return result
    }
}