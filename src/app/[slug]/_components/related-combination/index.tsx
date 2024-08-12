"use client";

import React from "react";
import { colorAtom } from "@/app/app.atom";
import { useRecoilState } from "recoil";
import ColorCombinationPalette from "@/app/home/_components/color-combination-palette";
import { combinationData } from "@/type/combination";

const RelatedCombination = () => {
  const [color, setColor] = useRecoilState(colorAtom);

  const handleChangeCombination = (id: number) => {
    const newCombination = combinationData.find(
      (color) => color.combination.id === id,
    );

    if (newCombination) {
      setColor(newCombination);
    }
  };

  return (
    <div className={"w-full flex flex-col gap-8"}>
      <p className={"text-[48px] font-[500] leading-tight text-center"}>
        Related Combinations
      </p>
      <div className={"w-full grid grid-cols-2 gap-12"}>
        {color.relatedCombinations.map((related) => {
          return (
            <div
              key={related.id}
              className={
                "h-24 flex flex-row rounded overflow-hidden shadow-lg cursor-pointer"
              }
              onClick={() => handleChangeCombination(related.id)}
            >
              <ColorCombinationPalette
                colors={related.colors}
                canCopy={false}
              />
            </div>
          );
        })}
        <div
          className={
            "w-full bg-gray-200 h-24 rounded overflow-hidden flex flex-row justify-center items-center"
          }
        >
          <p className={"text-[18px] font-[500]"}>See more combinations</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedCombination;
