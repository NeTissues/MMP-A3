import { useRecoilValue } from "recoil";
import { calorieCountState } from "./atom";

export const useCalorieCountValue= () => {
    return useRecoilValue(calorieCountState)
}