import { useRecoilValue } from "recoil";
import { bfpCountState } from "./atom";

export const useBFPCountValue= () => {
    return useRecoilValue(bfpCountState)
}