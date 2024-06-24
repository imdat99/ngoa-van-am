import { atom } from "recoil";
import { TeaDetails } from "./Type";

export const teaDetailState = atom<TeaDetails>({
    key: "teaDetailState",
    default: {} as any
})
