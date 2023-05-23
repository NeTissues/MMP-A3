import { useRecoilValue } from "recoil";
import { idealWeightState } from "./atom";

export const useIdealWeightValue= () => {
    return useRecoilValue(idealWeightState)
}