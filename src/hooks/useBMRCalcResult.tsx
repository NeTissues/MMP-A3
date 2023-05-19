import { useRecoilValue } from "recoil";
import { bmrCountState } from "./atom";

export const useBMRCountValue= () => {
    return useRecoilValue(bmrCountState)
}