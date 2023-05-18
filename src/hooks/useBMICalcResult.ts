import { useRecoilValue } from "recoil";
import { bmiCountState } from "./atom";

export const useBMICalcResult= () => {
    return useRecoilValue(bmiCountState)
}