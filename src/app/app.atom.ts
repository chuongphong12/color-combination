import { atom } from "recoil";
import { combinationData } from "@/type/combination";

export const combinationState = atom({
  key: "combination_atom",
  default: combinationData,
});

export const colorAtom = atom({
  key: "color_atom",
  default: combinationData[0],
});
