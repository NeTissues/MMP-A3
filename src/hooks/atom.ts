import { atom } from "recoil";

export const calorieCountState=atom<number>({
    key: 'calorieCountState',
    default: 0
})

export const bmiCountState=atom<number>({
    key: 'bmi',
    default: 0
})

export const bmrCountState=atom<number>({
    key: 'bmrCountState',
    default: 0
})

export const idealWeightState=atom<number>({
    key: 'idealWeightState',
    default: 0
})