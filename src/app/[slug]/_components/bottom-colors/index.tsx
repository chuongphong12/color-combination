import React from "react";
import { useSetRecoilState } from "recoil";
import { colorAtom, combinationState } from "@/app/app.atom";
import { ColorPopover } from "@/app/_elements";
import { ColorObject } from "react-pick-color";
import { produce } from "immer";
import { ColorCombination } from "@/type/combination";

type BottomColorIndicatorProps = {
  color: ColorCombination;
};

const BottomColorIndicator = ({
  color: { combination },
}: BottomColorIndicatorProps) => {
  const setColor = useSetRecoilState(colorAtom);
  const setCombineData = useSetRecoilState(combinationState);

  const handlePickColor = (newColor: ColorObject, index: number) => {
    setColor(
      produce((draft) => {
        draft.combination.colors[index].hex = newColor.hex;
      }),
    );
    setCombineData(
      produce((draft) => {
        const currentIdx = draft.findIndex(
          (item) => item.combination.id === combination.id,
        );
        if (currentIdx !== -1) {
          draft[currentIdx].combination.colors[index].hex = newColor.hex;
        }
      }),
    );
  };

  return (
    <div className={"w-full flex flex-row mt-8"}>
      {combination.colors.map((value, index) => (
        <div
          key={index + Math.random()}
          className={"flex flex-col flex-1 items-center"}
        >
          <p className={"flex-1 text-center font-[500] underline"}>
            {value.name}
          </p>
          <ColorPopover
            color={value.hex}
            onChange={(color) => handlePickColor(color, index)}
          >
            <p className={"flex-1 text-center text-slate-400 cursor-pointer"}>
              {value.hex.toUpperCase()}
            </p>
          </ColorPopover>
        </div>
      ))}
    </div>
  );
};

export default BottomColorIndicator;
