import { atom } from "recoil";

export const calorieCountState=atom<number>({
    key: 'calorieCountState',
    default: 0
})