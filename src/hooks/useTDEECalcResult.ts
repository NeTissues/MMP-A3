import { useRecoilValue } from "recoil";
import { tdeeCountState } from "./atom";

export const useTDEECountValue= () => {
    return useRecoilValue(tdeeCountState)
}